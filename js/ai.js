const API_KEY_STORAGE = 'atanova_api_key';
const MODEL = 'claude-sonnet-5';

function getApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || '';
}

function apiAnahtariIste() {
  const mevcut = getApiKey();
  const girilen = window.prompt(
    'AI özelliklerini kullanmak için Anthropic API anahtarını gir.\n\n' +
    'Anahtarın SADECE senin tarayıcında (localStorage) saklanır, hiçbir sunucuya veya\n' +
    'GitHub deposuna gönderilmez. Anahtarı https://console.anthropic.com adresinden alabilirsin.',
    mevcut
  );
  if (girilen === null) return false;
  const temiz = girilen.trim();
  if (!temiz) { localStorage.removeItem(API_KEY_STORAGE); }
  else { localStorage.setItem(API_KEY_STORAGE, temiz); }
  apiUyariGuncelle();
  return !!temiz;
}
window.apiAnahtariIste = apiAnahtariIste;

async function claudeIste(prompt, sistem = '') {
  const key = getApiKey();
  if (!key) {
    apiAnahtariIste();
    throw new Error('AI özelliklerini kullanmak için önce API anahtarını gir.');
  }
  try {
    const body = {
      model: MODEL,
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }]
    };
    if (sistem) body.system = sistem;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) { const hata = await res.json(); throw new Error(hata.error?.message || 'API hatası'); }
    const data = await res.json();
    return data.content[0].text;
  } catch (e) { console.error('Claude API Hatası:', e); throw e; }
}

window.aiKonuAnlat = async function(baslik, aciklama) {
  const sistem = `Sen deneyimli bir KPSS öğretmenisin. Türkçe yaz. Sadece HTML formatında yanıt ver.`;
  const prompt = `"${baslik}" konusunu KPSS için anlat. Özet: ${aciklama}

<h3>📌 Konuya Giriş</h3>
<p>Açıkla.</p>
<h3>📚 Temel Kavramlar</h3>
<ul><li>Madde 1</li><li>Madde 2</li></ul>
<h3>🎯 KPSS'de Nasıl Çıkar?</h3>
<p>Açıkla.</p>
<div class="bilgi-kutusu">💡 <strong>Önemli:</strong> Kritik nokta.</div>
<h3>⚡ Hızlı Özet</h3>
<ul><li>Ezber 1</li><li>Ezber 2</li></ul>
<div class="uyari-kutusu">⚠️ <strong>Dikkat:</strong> Sık yapılan hata.</div>`;
  return await claudeIste(prompt, sistem);
};

window.aiSoruOlustur = async function(konu, adet) {
  const sistem = `KPSS soru yazarısın. SADECE JSON formatında yanıt ver.`;
  const prompt = `"${konu}" konusundan ${adet} KPSS sorusu üret. Sadece JSON:
[{"soru":"...","secenekler":["A) ...","B) ...","C) ...","D) ..."],"dogru":0,"aciklama":"..."}]`;
  const metin = await claudeIste(prompt, sistem);
  let temiz = metin.trim().replace(/```json|```/g, '').trim();
  const b = temiz.indexOf('['), e = temiz.lastIndexOf(']');
  if (b !== -1 && e !== -1) temiz = temiz.substring(b, e + 1);
  try {
    return JSON.parse(temiz).map(s => ({
      soru: s.soru || 'Soru yüklenemedi',
      secenekler: s.secenekler || ['A', 'B', 'C', 'D'],
      dogru: typeof s.dogru === 'number' ? s.dogru : 0,
      aciklama: s.aciklama || 'Açıklama yok'
    }));
  } catch (e) { console.error('JSON parse hatası:', e); throw new Error('Tekrar dene.'); }
};

function apiUyariGuncelle() {
  const eski = document.getElementById('api-uyari-banner');
  if (eski) eski.remove();
  if (getApiKey()) return;
  const u = document.createElement('div');
  u.id = 'api-uyari-banner';
  u.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#fdf6e9;border:1px solid #96570a;color:#96570a;padding:12px 16px;border-radius:8px;font-size:13px;z-index:9999;max-width:280px;cursor:pointer;font-family:var(--font-sans, sans-serif);box-shadow:0 2px 10px rgba(0,0,0,0.08)';
  u.innerHTML = '⚠️ <strong>AI özellikleri kapalı</strong><br><small>Kendi API anahtarını girmek için tıkla</small>';
  u.onclick = () => apiAnahtariIste();
  document.body.appendChild(u);
}

window.addEventListener('load', apiUyariGuncelle);
