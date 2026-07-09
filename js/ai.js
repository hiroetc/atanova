const API_KEY = 'BURAYA_API_ANAHTARINI_YAZ';
const MODEL = 'claude-sonnet-4-6';

async function claudeIste(prompt, sistem = '') {
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
        'x-api-key': API_KEY,
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
  let temiz = metin.trim().replace(/\`\`\`json|\`\`\`/g, '').trim();
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

window.addEventListener('load', () => {
  if (API_KEY === 'BURAYA_API_ANAHTARINI_YAZ') {
    const u = document.createElement('div');
    u.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#fef2f2;border:1px solid #dc2626;color:#dc2626;padding:12px 16px;border-radius:8px;font-size:13px;z-index:9999;max-width:280px;cursor:pointer';
    u.innerHTML = '⚠️ <strong>API anahtarı eksik!</strong><br><small>js/ai.js dosyasına ekle.</small><br><a href="https://console.anthropic.com" target="_blank" style="color:#dc2626">→ console.anthropic.com</a>';
    u.onclick = () => u.remove();
    document.body.appendChild(u);
    setTimeout(() => u.remove(), 8000);
  }
});