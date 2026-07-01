// ============================================
// ANTHROPİC API BAĞLANTISI
// ============================================
const API_KEY = 
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

    if (!res.ok) {
      const hata = await res.json();
      throw new Error(hata.error?.message || 'API hatası');
    }

    const data = await res.json();
    return data.content[0].text;
  } catch (e) {
    console.error('Claude API Hatası:', e);
    throw e;
  }
}

// ============================================
// KONU ANLATIMI
// ============================================
window.aiKonuAnlat = async function(baslik, aciklama) {
  const sistem = `Sen deneyimli bir KPSS öğretmenisin.
Görevin KPSS sınavına hazırlanan öğrencilere konu anlatmak.
Anlatımların sade, anlaşılır ve KPSS sınav tarzına uygun olmalı.
Türkçe yaz. Sadece HTML formatında yanıt ver, başka açıklama yazma.`;

  const prompt = `"${baslik}" konusunu KPSS için anlat. Özet: ${aciklama}

Tam olarak şu HTML yapısını kullan:

<h3>📌 Konuya Giriş</h3>
<p>Konunun ne olduğunu ve neden önemli olduğunu açıkla.</p>

<h3>📚 Temel Kavramlar</h3>
<p>En önemli kavramları ve tanımları ver.</p>
<ul>
<li>Madde 1</li>
<li>Madde 2</li>
<li>Madde 3</li>
</ul>

<h3>🎯 KPSS\'de Nasıl Çıkar?</h3>
<p>Bu konudan sınavda hangi soru tiplerinin çıktığını açıkla.</p>
<div class="bilgi-kutusu">💡 <strong>Önemli:</strong> Sınavda dikkat edilmesi gereken kritik nokta.</div>

<h3>⚡ Hızlı Özet</h3>
<ul>
<li>Ezber noktası 1</li>
<li>Ezber noktası 2</li>
<li>Ezber noktası 3</li>
<li>Ezber noktası 4</li>
</ul>

<div class="uyari-kutusu">⚠️ <strong>Dikkat:</strong> Sıkça karıştırılan veya yanlış yapılan nokta.</div>`;

  return await claudeIste(prompt, sistem);
};

// ============================================
// SORU ÜRETICI
// ============================================
window.aiSoruOlustur = async function(konu, adet) {
  const sistem = `Sen KPSS sınav sorusu hazırlayan uzman bir eğitimcisin.
Ürettiğin sorular gerçek KPSS sınavlarındaki gibi olmalı.
SADECE geçerli JSON formatında yanıt ver, başka hiçbir şey yazma.`;

  const prompt = `"${konu}" konusundan ${adet} adet KPSS tarzı çoktan seçmeli soru üret.

SADECE şu JSON formatında yaz:
[
  {
    "soru": "Soru metni?",
    "secenekler": ["A) ...", "B) ...", "C) ...", "D) ..."],
    "dogru": 0,
    "aciklama": "Doğru cevabın açıklaması"
  }
]

"dogru" değeri: 0=A, 1=B, 2=C, 3=D
Türkçe yaz. Gerçekçi KPSS düzeyi. ${adet} soru üret.`;

  const metin = await claudeIste(prompt, sistem);
  let temiz = metin.trim().replace(/\`\`\`json|\`\`\`/g, '').trim();
  const baslangic = temiz.indexOf('[');
  const bitis = temiz.lastIndexOf(']');
  if (baslangic !== -1 && bitis !== -1) temiz = temiz.substring(baslangic, bitis + 1);

  try {
    return JSON.parse(temiz).map(s => ({
      soru: s.soru || 'Soru yüklenemedi',
      secenekler: s.secenekler || ['A', 'B', 'C', 'D'],
      dogru: typeof s.dogru === 'number' ? s.dogru : 0,
      aciklama: s.aciklama || 'Açıklama yok'
    }));
  } catch (e) {
    console.error('JSON parse hatası:', e);
    throw new Error('Sorular işlenemedi. Tekrar dene.');
  }
};

// ============================================
// API ANAHTARI UYARI
// ============================================
window.addEventListener('load', () => {
  if (API_KEY === 'BURAYA_API_ANAHTARINI_YAZ') {
    const uyari = document.createElement('div');
    uyari.style.cssText = `
      position: fixed; bottom: 20px; right: 20px;
      background: #fef2f2; border: 1px solid #dc2626;
      color: #dc2626; padding: 12px 16px; border-radius: 8px;
      font-size: 13px; z-index: 9999; max-width: 280px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;
    `;
    uyari.innerHTML = `⚠️ <strong>API anahtarı eksik!</strong><br>
      <small>js/ai.js dosyasına Anthropic API anahtarını ekle.</small><br>
      <a href="https://console.anthropic.com" target="_blank" style="color:#dc2626;font-size:12px">→ console.anthropic.com</a>`;
    uyari.onclick = () => uyari.remove();
    document.body.appendChild(uyari);
    setTimeout(() => uyari.remove(), 8000);
  }
});