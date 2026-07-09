// ============================================
// VERİ — KONU YAPISI
// ============================================
const konuVerisi = [
  { id: 'mat-temel', kategori: 'gy', baslik: 'Matematik — Temel İşlemler', aciklama: 'Dört işlem, EBOB/EKOK, asal sayılar, bölünebilme kuralları', ikon: 'ti-math-function' },
  { id: 'mat-oran', kategori: 'gy', baslik: 'Matematik — Oran Orantı', aciklama: 'Doğru/ters orantı, karışım, yüzde, kar-zarar problemleri', ikon: 'ti-percentage' },
  { id: 'mat-geometri', kategori: 'gy', baslik: 'Geometri', aciklama: 'Alan, çevre, hacim; açılar, üçgenler, çember', ikon: 'ti-triangle' },
  { id: 'turkce-anlam', kategori: 'gy', baslik: 'Türkçe — Anlam Bilgisi', aciklama: 'Sözcük anlamı, eş/zıt anlam, deyimler, atasözleri', ikon: 'ti-letter-t' },
  { id: 'turkce-dil', kategori: 'gy', baslik: 'Türkçe — Dil Bilgisi', aciklama: 'Ses bilgisi, yapı, cümle bilgisi, yazım kuralları', ikon: 'ti-books' },
  { id: 'turkce-cumle', kategori: 'gy', baslik: 'Türkçe — Cümle Türleri', aciklama: 'Yüklemine, öge dizilişine, anlamına ve yapısına göre cümle türleri', ikon: 'ti-text-wrap' },
  { id: 'mantik', kategori: 'gy', baslik: 'Mantıksal Akıl Yürütme', aciklama: 'Önermeler, çıkarım, sayı dizileri, şekil örüntüleri', ikon: 'ti-brain' },
  { id: 'tarih-ilk', kategori: 'gk', baslik: 'İlk Türk Devletleri', aciklama: 'Asya Hun, Göktürk, Uygur, Karahanlı devletleri', ikon: 'ti-horse' },
  { id: 'tarih-selcuklu', kategori: 'gk', baslik: 'Selçuklu Dönemi', aciklama: 'Büyük Selçuklular, Anadolu Selçukluları, savaşlar', ikon: 'ti-building-arch' },
  { id: 'tarih-osmanli', kategori: 'gk', baslik: 'Osmanlı Tarihi', aciklama: 'Kuruluş, Yükselme, Duraklama, Gerileme, Dağılma dönemleri', ikon: 'ti-building-castle' },
  { id: 'tarih-cumhuriyet', kategori: 'gk', baslik: 'Cumhuriyet Tarihi', aciklama: 'Kurtuluş Savaşı, Atatürk ilke ve inkılapları', ikon: 'ti-flag' },
  { id: 'cografya', kategori: 'gk', baslik: 'Türkiye Coğrafyası', aciklama: 'Fiziki coğrafya, iklim, nüfus, göller, dağlar', ikon: 'ti-map' },
  { id: 'anayasa', kategori: 'gk', baslik: 'Anayasa & Vatandaşlık', aciklama: '1982 Anayasası, temel hak ve özgürlükler', ikon: 'ti-gavel' },
  { id: 'guncel', kategori: 'gk', baslik: 'Güncel Olaylar', aciklama: 'Türkiye ve dünya gündemi, uluslararası kuruluşlar', ikon: 'ti-news' },
  { id: 'egitim-psiko', kategori: 'alan', baslik: 'Eğitim Psikolojisi', aciklama: 'Gelişim psikolojisi, öğrenme kuramları, motivasyon', ikon: 'ti-user-heart' },
  { id: 'ogretim', kategori: 'alan', baslik: 'Öğretim İlke ve Yöntemleri', aciklama: 'Öğretim yöntemleri, ölçme-değerlendirme', ikon: 'ti-chalkboard' },
  { id: 'rehberlik', kategori: 'alan', baslik: 'Rehberlik ve Özel Eğitim', aciklama: 'Psikolojik danışmanlık, özel eğitim', ikon: 'ti-heart-handshake' },
];

const flashKartlar = {
  'mat-temel': [
    { soru: 'EBOB nedir?', cevap: 'En Büyük Ortak Bölen.' },
    { soru: 'EKOK nedir?', cevap: 'En Küçük Ortak Kat.' },
    { soru: '2 ile bölünebilme?', cevap: 'Son rakamı 0,2,4,6,8 olanlar.' },
    { soru: '3 ile bölünebilme?', cevap: 'Rakamlar toplamı 3\'e bölünebiliyorsa.' },
    { soru: '9 ile bölünebilme?', cevap: 'Rakamlar toplamı 9\'a bölünebiliyorsa.' },
  ],
  'mat-oran': [
    { soru: 'Kar yüzdesi?', cevap: 'Kar / Maliyet × 100.' },
    { soru: 'Doğru orantı?', cevap: 'Bir artınca diğeri de artar. a/b = sabit.' },
    { soru: 'Ters orantı?', cevap: 'Bir artınca diğeri azalır. a×b = sabit.' },
  ],
  'turkce-anlam': [
    { soru: '"Ayak uydurmak" ne anlama gelir?', cevap: 'Uymak, adapte olmak.' },
    { soru: '"El elden üstündür" ne demek?', cevap: 'Her güçlünün üstünde daha güçlü biri vardır.' },
    { soru: 'Mecaz anlam nedir?', cevap: 'Sözcüğün gerçek anlamı dışında kullanılması.' },
  ],
  'tarih-osmanli': [
    { soru: 'Osmanlı ne zaman kuruldu?', cevap: '1299, Osman Bey. İlk merkez Söğüt.' },
    { soru: 'İstanbul ne zaman fethedildi?', cevap: '29 Mayıs 1453, Fatih Sultan Mehmet.' },
    { soru: 'Tanzimat Fermanı ne zaman?', cevap: '1839, Abdülmecid. Mustafa Reşit Paşa hazırladı.' },
    { soru: 'Vaka-i Hayriye nedir?', cevap: '1826\'da II. Mahmut\'un Yeniçeri Ocağı\'nı kaldırması.' },
    { soru: 'Karlofça Antlaşması önemi?', cevap: '1699. İlk büyük toprak kaybı. Gerileme başladı.' },
  ],
  'tarih-cumhuriyet': [
    { soru: 'Cumhuriyet ne zaman ilan edildi?', cevap: '29 Ekim 1923.' },
    { soru: 'Atatürk\'ün 6 ilkesi?', cevap: 'Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.' },
    { soru: 'Harf inkılabı hangi yıl?', cevap: '1928. Latin alfabesine geçildi.' },
    { soru: 'Mudanya Ateşkesi önemi?', cevap: '1922. İtilaf devletleri Türk zaferini tanıdı.' },
    { soru: 'Lozan\'da taviz verilmeyen konular?', cevap: 'KEM: Kapitülasyonlar, Ermeni toprağı, Misak-ı Milli sınırları.' },
  ],
  'cografya': [
    { soru: 'En büyük göl?', cevap: 'Van Gölü (~3755 km²).' },
    { soru: 'En uzun akarsu?', cevap: 'Kızılırmak.' },
    { soru: 'En yüksek dağ?', cevap: 'Ağrı Dağı (5137 m).' },
    { soru: 'Tektonik göl kodlaması?', cevap: 'BAŞİTMUHASEBE.' },
    { soru: 'Bor madeni kodlaması?', cevap: 'BEBEK: Bursa, Eskişehir, Balıkesir, Emet, Kütahya.' },
    { soru: '21 Haziran özellikleri?', cevap: 'En uzun gündüz. Yaz başlangıcı.' },
  ],
  'anayasa': [
    { soru: 'TBMM kaç milletvekili?', cevap: '600 milletvekili.' },
    { soru: 'CB kaç yıl için seçilir?', cevap: '5 yıl, max 2 kez. Seçilme yaşı 40.' },
    { soru: 'Seçim barajı?', cevap: '%7.' },
    { soru: 'AYM kaç üye?', cevap: '15 üye.' },
    { soru: '1982 Anayasası kaç madde?', cevap: '177 asıl + 16 geçici madde.' },
    { soru: 'Türkiye\'de kaç anayasa var?', cevap: '5: 1876, 1921, 1924, 1961, 1982.' },
  ],
};

const sozlukVerisi = [
  { terim: 'Anayasa', kategori: 'hukuk', anlam: 'Devletin temel yapısını düzenleyen en üst hukuk kuralıdır.', ornek: '1982 Anayasası 177 maddeden oluşur.' },
  { terim: 'Laiklik', kategori: 'hukuk', anlam: 'Din ile devlet işlerinin ayrılması ilkesi.', ornek: 'Laiklik 1937\'de anayasaya girdi.' },
  { terim: 'Egemenlik', kategori: 'hukuk', anlam: 'Kayıtsız şartsız milletindir. Hiçbir kişi veya zümre kullanamaz.', ornek: 'Madde 6\'da düzenlenmiştir.' },
  { terim: 'AYM', kategori: 'hukuk', anlam: 'Anayasa Mahkemesi. 15 üye. Bireysel başvuru ve norm denetimi yapar.', ornek: 'AYM\'ye bireysel başvuru hakkı vardır.' },
  { terim: 'HSK', kategori: 'hukuk', anlam: 'Hâkimler ve Savcılar Kurulu. 13 üye.', ornek: 'Yargı bağımsızlığını korur.' },
  { terim: 'Kut', kategori: 'tarih', anlam: 'Hükümdarın yönetme yetkisinin Gök Tanrı tarafından verildiğine inanılan güç.', ornek: 'Taht kavgalarının temelidir.' },
  { terim: 'Töre', kategori: 'tarih', anlam: 'Türklerin yazısız hukuk kuralları bütünü.', ornek: 'Hükümdar da töreye uymak zorundadır.' },
  { terim: 'Timar', kategori: 'tarih', anlam: 'Osmanlı toprak sistemi. Maaş yerine vergi toplama hakkı.', ornek: 'I. Murat döneminde geliştirildi.' },
  { terim: 'Devşirme', kategori: 'tarih', anlam: 'Hristiyan çocuklarının devlet hizmetine alınması sistemi.', ornek: 'I. Murat döneminde başladı.' },
  { terim: 'Tanzimat', kategori: 'tarih', anlam: '1839\'da ilan edilen ferman. Can, mal, namus güvenliği.', ornek: 'Mustafa Reşit Paşa hazırladı.' },
  { terim: 'Tektonik Göl', kategori: 'cografya', anlam: 'Yer kabuğu hareketleriyle çöken çanaklarda oluşan göller. Kodlama: BAŞİTMUHASEBE', ornek: 'Van Gölü en büyük tektonik göldür.' },
  { terim: 'Volkanik Göl', kategori: 'cografya', anlam: 'Volkanik çanaklarda biriken sularla oluşan göller. Kodlama: MANÇA', ornek: 'Nemrut en bilinen volkanik göldür.' },
  { terim: 'Bor Madeni', kategori: 'cografya', anlam: 'Türkiye dünya birincisi. Kodlama: BEBEK', ornek: 'Bursa, Eskişehir, Balıkesir, Emet, Kütahya.' },
  { terim: 'Ekinoks', kategori: 'cografya', anlam: 'Gece gündüzün eşit olduğu tarihler. 21 Mart ve 23 Eylül.', ornek: 'Güneş tam doğudan doğar.' },
  { terim: 'Yapılandırmacılık', kategori: 'egitim', anlam: 'Öğrencinin bilgiyi aktif biçimde kendi zihninde oluşturduğunu savunan kuram.', ornek: 'Öğrenci merkezli eğitimi ön plana çıkarır.' },
  { terim: 'Güdülenme', kategori: 'egitim', anlam: 'Bireyi hedefe yönelik harekete geçiren içsel ya da dışsal güç.', ornek: 'İçsel motivasyon kalıcı öğrenmeyi sağlar.' },
  { terim: 'GSMH', kategori: 'ekonomi', anlam: 'Gayri Safi Milli Hasıla. Vatandaşların ürettikleri toplam değer.', ornek: 'Ülkenin ekonomik büyüklüğünü ölçer.' },
  { terim: 'Enflasyon', kategori: 'ekonomi', anlam: 'Fiyatların sürekli artması, paranın değer kaybetmesi.', ornek: 'Yüksek enflasyon alım gücünü düşürür.' },
];

const cikmisSorular = [
  { konu: 'matematik', ders: 'Matematik', yil: '2024',
    soru: 'Bir işçi bir işi 12 günde, diğeri 18 günde bitirmektedir. İkisi birlikte kaç günde bitirir?',
    secenekler: ['A) 6,4 gün', 'B) 7,2 gün', 'C) 8 gün', 'D) 9 gün'], dogru: 1,
    aciklama: '1/12 + 1/18 = 5/36. Birlikte 36/5 = 7,2 günde bitirir.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2023',
    soru: 'A ve B şehirleri arası 360 km. 80 km/s ve 100 km/s ile karşılıklı yola çıkıyorlar. Kaç saatte karşılaşırlar?',
    secenekler: ['A) 1,5 saat', 'B) 2 saat', 'C) 2,5 saat', 'D) 3 saat'], dogru: 1,
    aciklama: 'Toplam hız = 180. Süre = 360/180 = 2 saat.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2023',
    soru: '24, 36 ve 48 sayılarının EBOB\'u kaçtır?',
    secenekler: ['A) 4', 'B) 6', 'C) 8', 'D) 12'], dogru: 3,
    aciklama: 'EBOB = 2²×3 = 12.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2024',
    soru: '"Yanmak" sözcüğünün mecaz anlamda kullanıldığı cümle hangisidir?',
    secenekler: ['A) Mumlar yanıyordu.', 'B) Yangın tahribat yarattı.', 'C) Adam içten içe yanıyordu.', 'D) Sobada odunlar yandı.'], dogru: 2,
    aciklama: '"İçten içe yanmak" üzülmek anlamında mecaz kullanımdır.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2023',
    soru: 'Hangisinde yazım yanlışı vardır?',
    secenekler: ['A) Hiçbir şey bilmiyorum.', 'B) Herşey planlandı.', 'C) Hiç kimse yapamaz.', 'D) Bir gün buluşacağız.'], dogru: 1,
    aciklama: '"Her şey" ayrı yazılır.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2024',
    soru: 'Osmanlı Gerileme Dönemi\'nin başlangıcı kabul edilen antlaşma?',
    secenekler: ['A) Küçük Kaynarca', 'B) Karlofça', 'C) Prut', 'D) Pasarofça'], dogru: 1,
    aciklama: '1699 Karlofça ile ilk büyük toprak kaybı yaşandı.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2023',
    soru: 'İstanbul\'u fetheden padişah kimdir?',
    secenekler: ['A) Yıldırım Bayezid', 'B) II. Murat', 'C) Fatih Sultan Mehmet', 'D) Kanuni'], dogru: 2,
    aciklama: '29 Mayıs 1453\'te Fatih Sultan Mehmet fethetti.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2022',
    soru: 'Atatürk\'ün 6 ilkesinden biri değildir?',
    secenekler: ['A) Cumhuriyetçilik', 'B) Laiklik', 'C) Osmanlıcılık', 'D) Milliyetçilik'], dogru: 2,
    aciklama: 'Osmanlıcılık 6 ilkeden biri değildir.' },
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2024',
    soru: 'TBMM kaç milletvekilinden oluşur?',
    secenekler: ['A) 450', 'B) 550', 'C) 600', 'D) 650'], dogru: 2,
    aciklama: '2017 değişikliğiyle 600\'e çıkarıldı.' },
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2023',
    soru: 'Seçim barajı yüzde kaçtır?',
    secenekler: ['A) %5', 'B) %7', 'C) %10', 'D) %12'], dogru: 1,
    aciklama: '2022\'de %10\'dan %7\'ye indirildi.' },
  { konu: 'cografya', ders: 'Coğrafya', yil: '2024',
    soru: 'Türkiye\'nin en fazla yağış alan yeri?',
    secenekler: ['A) Akdeniz', 'B) Marmara', 'C) Doğu Karadeniz', 'D) İç Anadolu'], dogru: 2,
    aciklama: 'Rize çevresi yıllık 2000 mm+ yağış alır.' },
  { konu: 'cografya', ders: 'Coğrafya', yil: '2023',
    soru: 'Türkiye\'nin en büyük gölü?',
    secenekler: ['A) Tuz Gölü', 'B) Beyşehir', 'C) Van Gölü', 'D) Eğirdir'], dogru: 2,
    aciklama: 'Van Gölü ~3755 km² ile en büyük göldür.' },
];

const sinavTarihleri = {
  lisans: { ad: 'KPSS Lisans', tarih: new Date('2026-10-04T10:00:00') },
  onlisans: { ad: 'KPSS Önlisans', tarih: new Date('2026-09-20T10:00:00') },
  ortaogretim: { ad: 'KPSS Ortaöğretim', tarih: new Date('2026-09-06T10:00:00') },
};

const rozetler = [
  { id: 'ilk-adim', ad: 'İlk Adım', icon: '🎯', seviye: 'bronz', aciklama: 'İlk soruyu çöz', kosul: (s) => s.toplamSoru >= 1, kilit: null },
  { id: 'ilk-konu', ad: 'İlk Konu', icon: '📖', seviye: 'bronz', aciklama: 'İlk konuyu aç', kosul: (s) => s.toplamKonu >= 1, kilit: 'karanlik' },
  { id: 'kart-ceviren', ad: 'Kart Çeviren', icon: '🃏', seviye: 'bronz', aciklama: '5 kart çevir', kosul: (s) => s.toplamKart >= 5, kilit: null },
  { id: 'ilk-pomodoro', ad: 'İlk Pomodoro', icon: '🍅', seviye: 'bronz', aciklama: '1 pomodoro tamamla', kosul: (s) => s.toplamPomodoro >= 1, kilit: null },
  { id: 'test-yapan', ad: 'Test Yapan', icon: '📝', seviye: 'bronz', aciklama: '5 soru çöz', kosul: (s) => s.toplamSoru >= 5, kilit: null },
  { id: 'soru-10', ad: '10 Soru', icon: '✅', seviye: 'gumus', aciklama: '10 soru çöz', kosul: (s) => s.toplamSoru >= 10, kilit: null },
  { id: 'streak-3', ad: '3 Gün Seri', icon: '⚡', seviye: 'gumus', aciklama: '3 gün üst üste', kosul: (s) => s.streak >= 3, kilit: null },
  { id: 'yol-acan', ad: 'Yol Açan', icon: '🗺️', seviye: 'gumus', aciklama: '5 ünite tamamla', kosul: (s) => (s.toplamUnite || 0) >= 5, kilit: null },
  { id: 'konu-uzman', ad: 'Konu Uzmanı', icon: '📚', seviye: 'gumus', aciklama: '5 konu çalış', kosul: (s) => s.toplamKonu >= 5, kilit: null },
  { id: 'net-ustan', ad: 'Net Ustası', icon: '🔢', seviye: 'gumus', aciklama: 'İlk neti kaydet', kosul: (s) => (s.toplamNet || 0) >= 1, kilit: null },
  { id: 'soru-50', ad: '50 Soru', icon: '🔥', seviye: 'altin', aciklama: '50 soru çöz', kosul: (s) => s.toplamSoru >= 50, kilit: null },
  { id: 'streak-7', ad: '7 Gün Seri', icon: '💪', seviye: 'altin', aciklama: '7 gün üst üste', kosul: (s) => s.streak >= 7, kilit: null },
  { id: 'bilge', ad: 'Bilge', icon: '🎓', seviye: 'altin', aciklama: '10 konu tamamla', kosul: (s) => s.toplamKonu >= 10, kilit: null },
  { id: 'caliskan', ad: 'Çalışkan', icon: '⏰', seviye: 'altin', aciklama: '120 dk çalış', kosul: (s) => (s.toplamSure || 0) >= 120, kilit: null },
  { id: 'mukemmel', ad: 'Mükemmel', icon: '💯', seviye: 'altin', aciklama: '%80 başarı (min 20 soru)', kosul: (s) => s.toplamSoru >= 20 && (s.dogruSoru / s.toplamSoru) >= 0.8, kilit: null },
  { id: 'soru-100', ad: '100 Soru', icon: '🏆', seviye: 'elmas', aciklama: '100 soru çöz', kosul: (s) => s.toplamSoru >= 100, kilit: null },
  { id: 'streak-30', ad: '30 Gün Seri', icon: '👑', seviye: 'elmas', aciklama: '30 gün üst üste', kosul: (s) => s.streak >= 30, kilit: 'pro-tema' },
  { id: 'kpss-ustan', ad: 'KPSS Ustası', icon: '🌟', seviye: 'elmas', aciklama: 'Tüm konuları bitir', kosul: (s) => s.toplamKonu >= konuVerisi.length, kilit: null },
  { id: 'atanova-pro', ad: 'Atanova Pro', icon: '🚀', seviye: 'elmas', aciklama: '20 pomodoro tamamla', kosul: (s) => s.toplamPomodoro >= 20, kilit: null },
];

const yolHaritasi = [
  { ders: 'Türkçe', renk: 'gy', icon: 'ti-letter-t', soruSayisi: 30, uniteler: [
    { id: 'tr-1', ad: 'Sözcükte Anlam', detay: 'Gerçek-mecaz anlam, eş anlam, zıt anlam', oncelik: 'yuksek' },
    { id: 'tr-2', ad: 'Cümlenin Anlamı', detay: 'Ana düşünce, yardımcı düşünce', oncelik: 'yuksek' },
    { id: 'tr-3', ad: 'Deyimler & Atasözleri', detay: 'Kalıp ifadeler', oncelik: 'orta' },
    { id: 'tr-4', ad: 'Sözcük Türleri', detay: 'İsim, sıfat, zamir, fiil, zarf', oncelik: 'orta' },
    { id: 'tr-5', ad: 'Ses Bilgisi', detay: 'Ünlü uyumları, ünsüz olayları', oncelik: 'yuksek' },
    { id: 'tr-6', ad: 'Cümlenin Ögeleri', detay: 'Özne, yüklem, nesne, tümleçler', oncelik: 'yuksek' },
    { id: 'tr-7', ad: 'Cümle Türleri', detay: 'Yüklemine, yapısına, anlamına göre', oncelik: 'yuksek' },
    { id: 'tr-8', ad: 'Fiilimsiler', detay: 'İsim-fiil, sıfat-fiil, zarf-fiil', oncelik: 'yuksek' },
    { id: 'tr-9', ad: 'Tamlamalar', detay: 'Sıfat, isim, zincirleme tamlama', oncelik: 'orta' },
    { id: 'tr-10', ad: 'Anlatım Bozuklukları', detay: 'Gereksiz sözcük, çelişki, eksik öge', oncelik: 'yuksek' },
    { id: 'tr-11', ad: 'Paragraf', detay: 'Ana düşünce, anlatım biçimleri', oncelik: 'yuksek' },
    { id: 'tr-12', ad: 'Yazım & Noktalama', detay: 'Büyük harf, birleşik yazım', oncelik: 'orta' },
  ]},
  { ders: 'Matematik', renk: 'gy', icon: 'ti-math-function', soruSayisi: 26, uniteler: [
    { id: 'mat-1', ad: 'Temel Sayılar', detay: 'Doğal, tam, rasyonel sayılar', oncelik: 'yuksek' },
    { id: 'mat-2', ad: 'EBOB & EKOK', detay: 'En büyük ortak bölen, en küçük ortak kat', oncelik: 'orta' },
    { id: 'mat-3', ad: 'Üslü & Köklü', detay: 'Üs kuralları, kök hesaplama', oncelik: 'orta' },
    { id: 'mat-4', ad: 'Oran & Orantı', detay: 'Doğru-ters orantı, karışım', oncelik: 'yuksek' },
    { id: 'mat-5', ad: 'Yüzde & Faiz', detay: 'Kar-zarar, basit-bileşik faiz', oncelik: 'yuksek' },
    { id: 'mat-6', ad: 'Problemler', detay: 'Yaş, sayı, işçi, hareket problemleri', oncelik: 'yuksek' },
    { id: 'mat-7', ad: 'Kümeler & Mantık', detay: 'Venn şeması, önermeler', oncelik: 'orta' },
    { id: 'mat-8', ad: 'Grafik & Tablo', detay: 'Sütun, pasta grafik, tablo okuma', oncelik: 'yuksek' },
  ]},
  { ders: 'Geometri', renk: 'gy', icon: 'ti-triangle', soruSayisi: 4, uniteler: [
    { id: 'geo-1', ad: 'Açılar & Doğrular', detay: 'Açı türleri, paralel doğrular', oncelik: 'orta' },
    { id: 'geo-2', ad: 'Üçgenler', detay: 'Alan, çevre, Pisagor', oncelik: 'yuksek' },
    { id: 'geo-3', ad: 'Dörtgenler', detay: 'Kare, dikdörtgen, paralelkenar', oncelik: 'orta' },
    { id: 'geo-4', ad: 'Çember & Daire', detay: 'Çevre, alan formülleri', oncelik: 'orta' },
  ]},
  { ders: 'Tarih', renk: 'gk', icon: 'ti-building-castle', soruSayisi: 27, uniteler: [
    { id: 'tar-1', ad: 'İlk Türk Devletleri', detay: 'Asya Hun, Göktürk, Uygur, Karahanlı', oncelik: 'orta' },
    { id: 'tar-2', ad: 'Selçuklular', detay: 'Büyük Selçuklular, Anadolu Selçukluları', oncelik: 'yuksek' },
    { id: 'tar-3', ad: 'Osmanlı Kuruluş & Yükselme', detay: 'Osman Bey\'den Kanuni\'ye', oncelik: 'orta' },
    { id: 'tar-4', ad: 'Osmanlı Duraklama & Gerileme', detay: 'Karlofça\'dan Tanzimat\'a', oncelik: 'yuksek' },
    { id: 'tar-5', ad: 'Osmanlı Dağılma', detay: 'Balkan Savaşları, I. Dünya Savaşı', oncelik: 'yuksek' },
    { id: 'tar-6', ad: 'Kurtuluş Savaşı', detay: 'Kongreler, cepheler, Lozan', oncelik: 'yuksek' },
    { id: 'tar-7', ad: 'Atatürk İlkeleri', detay: '6 ilke ve inkılaplar', oncelik: 'yuksek' },
    { id: 'tar-8', ad: 'Cumhuriyet Tarihi', detay: '1923\'ten günümüze', oncelik: 'yuksek' },
  ]},
  { ders: 'Coğrafya', renk: 'gk', icon: 'ti-map', soruSayisi: 18, uniteler: [
    { id: 'cog-1', ad: 'Türkiye\'nin Konumu', detay: 'Göreceli ve matematiksel konum', oncelik: 'yuksek' },
    { id: 'cog-2', ad: 'Fiziki Yapı & Dağlar', detay: 'Kıvrım, kırık, volkanik dağlar', oncelik: 'orta' },
    { id: 'cog-3', ad: 'Göller & Akarsular', detay: 'Göl türleri ve kodlamaları', oncelik: 'yuksek' },
    { id: 'cog-4', ad: 'İklim & Bitki', detay: 'İklim tipleri, bitki örtüsü', oncelik: 'yuksek' },
    { id: 'cog-5', ad: 'Nüfus & Yerleşme', detay: 'Nüfus dağılımı, göç', oncelik: 'yuksek' },
    { id: 'cog-6', ad: 'Tarım & Hayvancılık', detay: 'Ürün dağılımı', oncelik: 'yuksek' },
    { id: 'cog-7', ad: 'Sanayi & Madencilik', detay: 'Madenler ve kodlamaları', oncelik: 'yuksek' },
    { id: 'cog-8', ad: 'Bölgeler', detay: '7 coğrafi bölge', oncelik: 'orta' },
  ]},
  { ders: 'Vatandaşlık & Anayasa', renk: 'gk', icon: 'ti-gavel', soruSayisi: 9, uniteler: [
    { id: 'vat-1', ad: 'Temel Hukuk', detay: 'Hukuk tanımı, dalları, yaptırımlar', oncelik: 'orta' },
    { id: 'vat-2', ad: 'Türk Anayasa Tarihi', detay: '1876, 1921, 1924, 1961, 1982', oncelik: 'yuksek' },
    { id: 'vat-3', ad: 'Anayasanın İlkeleri', detay: 'Cumhuriyetin nitelikleri', oncelik: 'yuksek' },
    { id: 'vat-4', ad: 'Temel Haklar', detay: 'Kişi, sosyal, siyasi haklar', oncelik: 'yuksek' },
    { id: 'vat-5', ad: 'Yasama — TBMM', detay: '600 mv, 5 yıl, kanun yapımı', oncelik: 'yuksek' },
    { id: 'vat-6', ad: 'Yürütme — CB', detay: 'CB yetkileri, 2017 değişiklikleri', oncelik: 'yuksek' },
    { id: 'vat-7', ad: 'Yargı', detay: 'AYM, Yargıtay, Danıştay, HSK', oncelik: 'yuksek' },
    { id: 'vat-8', ad: 'Seçim Sistemi', detay: '%7 baraj, D\'Hondt, 5 yılda bir', oncelik: 'yuksek' },
  ]},
  { ders: 'Güncel Bilgiler', renk: 'gk', icon: 'ti-news', soruSayisi: 6, uniteler: [
    { id: 'gun-1', ad: 'Türkiye Gündemi', detay: 'Siyasi, ekonomik gelişmeler', oncelik: 'yuksek' },
    { id: 'gun-2', ad: 'Uluslararası Kuruluşlar', detay: 'BM, NATO, AB, İİT merkezleri', oncelik: 'yuksek' },
    { id: 'gun-3', ad: 'Türkiye\'nin İlkleri', detay: 'Siyasi, kültürel ilkler', oncelik: 'orta' },
    { id: 'gun-4', ad: 'Bilim & Teknoloji', detay: 'Uzay, yapay zeka, çevre', oncelik: 'dusuk' },
  ]},
];

// ============================================
// DURUM
// ============================================
let aktifSinav = 'lisans';
let aktifFiltre = 'hepsi';
let aktifKartKonuId = 'mat-temel';
let aktifKartIndex = 0;
let sozlukAktifFiltre = 'hepsi';
let gsInterval = null;
let pratikSorular = [];
let pratikCevaplar = [];
let pratikSureInterval = null;
let pratikSureKalan = 0;
let netAktifSinav = 'lisans';

function veriAl(key, varsayilan) {
  try { return JSON.parse(localStorage.getItem('kpss_' + key)) || varsayilan; } catch { return varsayilan; }
}
function veriKaydet(key, deger) {
  localStorage.setItem('kpss_' + key, JSON.stringify(deger));
}

let istatistik = veriAl('istatistik', { toplamSoru: 0, dogruSoru: 0, toplamKonu: 0, toplamKart: 0, toplamPomodoro: 0, streak: 0, sonCalisma: null, toplamSure: 0, toplamUnite: 0, toplamNet: 0 });
let ilerleme = veriAl('ilerleme', {});
let netGecmis = veriAl('netGecmis', []);
let yhTamamlanan = veriAl('yhTamamlanan', {});

function istatistikGuncelle(key, miktar) {
  if (miktar === undefined) miktar = 1;
  istatistik[key] = (istatistik[key] || 0) + miktar;
  istatistik.sonCalisma = new Date().toDateString();
  streakGuncelle();
  veriKaydet('istatistik', istatistik);
  updateStats();
}

function streakGuncelle() {
  const bugun = new Date().toDateString();
  const dun = new Date(Date.now() - 86400000).toDateString();
  if (istatistik.sonCalisma === dun) istatistik.streak = (istatistik.streak || 0) + 1;
  else if (istatistik.sonCalisma !== bugun) istatistik.streak = 1;
}

// ============================================
// SAYFA YÖNETİMİ
// ============================================
function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  var navMap = { anasayfa: 0, konular: 1, kartlar: 2, sorular: 3, pratik: 4, net: 5, sozluk: 6, pomodoro: 7, istatistik: 8, yolharitasi: 9 };
  if (navMap[id] !== undefined) document.querySelectorAll('.nav-btn')[navMap[id]].classList.add('active');
  if (id === 'konular') renderKonuGrid();
  if (id === 'kartlar') initKartlar();
  if (id === 'sozluk') renderSozluk();
  if (id === 'net') renderNetGrid();
  if (id === 'istatistik') renderIstatistik();
  if (id === 'yolharitasi') renderYolHaritasi();
  if (id === 'anasayfa') { updateStats(); renderRozetler(); }
}

// ============================================
// GERİ SAYIM
// ============================================
function selectSinav(tip, btn) {
  aktifSinav = tip;
  document.querySelectorAll('.sinav-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  geriSayimBaslat();
  veriKaydet('aktifSinav', tip);
}

function geriSayimBaslat() {
  if (gsInterval) clearInterval(gsInterval);
  var sinav = sinavTarihleri[aktifSinav];
  document.getElementById('gs-sinav-adi').textContent = sinav.ad + ' 2026';
  document.getElementById('gs-tarih-text').textContent = sinav.tarih.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  function guncelle() {
    var fark = sinav.tarih - new Date();
    if (fark <= 0) {
      ['gs-gun','gs-saat','gs-dakika','gs-saniye'].forEach(function(id) { document.getElementById(id).textContent = '00'; });
      document.getElementById('gs-hedef-text').textContent = 'Sınav günü geldi! 🎉';
      return;
    }
    document.getElementById('gs-gun').textContent = String(Math.floor(fark / 86400000)).padStart(3, '0');
    document.getElementById('gs-saat').textContent = String(Math.floor((fark % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('gs-dakika').textContent = String(Math.floor((fark % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('gs-saniye').textContent = String(Math.floor((fark % 60000) / 1000)).padStart(2, '0');
    var gun = Math.floor(fark / 86400000);
    document.getElementById('gs-hedef-text').textContent = gun > 0 ? ('Günlük hedef: ~' + Math.ceil(konuVerisi.length / gun) + ' konu 💪') : 'Son gün!';
  }
  guncelle();
  gsInterval = setInterval(guncelle, 1000);
}

// ============================================
// STATS & ROZETLER
// ============================================
function updateStats() {
  document.getElementById('stat-streak').textContent = istatistik.streak || 0;
  document.getElementById('stat-konu').textContent = istatistik.toplamKonu || 0;
  document.getElementById('stat-soru').textContent = istatistik.toplamSoru || 0;
  var basari = istatistik.toplamSoru > 0 ? Math.round(istatistik.dogruSoru / istatistik.toplamSoru * 100) : 0;
  document.getElementById('stat-basari').textContent = '%' + basari;
  document.getElementById('stat-sure').textContent = Math.round(istatistik.toplamSure || 0);
}

function renderRozetler() {
  var kazanilanlar = rozetler.filter(function(r) { return r.kosul(istatistik); });
  var kazanilanIds = {};
  kazanilanlar.forEach(function(r) { kazanilanIds[r.id] = true; });

  document.getElementById('rozet-sayac').textContent = kazanilanlar.length + '/' + rozetler.length;

  var seviyeler = ['bronz', 'gumus', 'altin', 'elmas'];
  seviyeler.forEach(function(seviye) {
    var grid = document.getElementById('rozet-grid-' + seviye);
    if (!grid) return;
    var html = '';
    rozetler.filter(function(r) { return r.seviye === seviye; }).forEach(function(r) {
      var k = kazanilanIds[r.id];
      html += '<div class="rozet ' + (k ? 'kazanildi' : 'kazanilmadi') + ' rozet-' + seviye + '" title="' + r.aciklama + '">';
      html += '<span class="rozet-icon">' + r.icon + '</span>';
      html += '<span class="rozet-ad">' + r.ad + '</span>';
      if (!k) html += '<span class="rozet-hedef">' + r.aciklama + '</span>';
      html += '</div>';
    });
    grid.innerHTML = html;
  });

  var karanlikBtn = document.getElementById('btn-karanlik');
  if (karanlikBtn) {
    var karanlikAcik = kazanilanlar.some(function(r) { return r.kilit === 'karanlik'; });
    if (karanlikAcik) {
      karanlikBtn.classList.remove('kilitli');
      karanlikBtn.innerHTML = '<i class="ti ti-moon"></i> Karanlık Mod';
    }
  }

  if (veriAl('karanlikMod', false)) document.body.classList.add('karanlik');
}

function karanlikModToggle() {
  var karanlikAcik = rozetler.some(function(r) { return r.kilit === 'karanlik' && r.kosul(istatistik); });
  if (!karanlikAcik) {
    alert('🔒 Bu özellik kilitli!\n"İlk Konu" rozetini kazan: Bir konuyu aç ve çalış');
    return;
  }
  var simdiki = veriAl('karanlikMod', false);
  veriKaydet('karanlikMod', !simdiki);
  document.body.classList.toggle('karanlik', !simdiki);
}

// ============================================
// KONULAR
// ============================================
function renderKonuGrid() {
  var etiketler = { gy: 'Genel Yetenek', gk: 'Genel Kültür', alan: 'Alan Bilgisi' };
  var liste = aktifFiltre === 'hepsi' ? konuVerisi : konuVerisi.filter(function(k) { return k.kategori === aktifFiltre; });
  var html = '';
  liste.forEach(function(k) {
    var pct = ilerleme[k.id] || 0;
    html += '<div class="konu-card" onclick="acKonuDetay(\'' + k.id + '\')">';
    html += '<div class="konu-card-top"><div class="konu-icon ' + k.kategori + '"><i class="ti ' + k.ikon + '"></i></div><h4>' + k.baslik + '</h4></div>';
    html += '<span class="konu-tag ' + k.kategori + '">' + etiketler[k.kategori] + '</span>';
    html += '<p>' + k.aciklama + '</p>';
    html += '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '</div>';
  });
  document.getElementById('konu-grid').innerHTML = html;
}

function filterKonu(filtre, btn) {
  aktifFiltre = filtre;
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderKonuGrid();
}

async function acKonuDetay(konuId) {
  var konu = konuVerisi.find(function(k) { return k.id === konuId; });
  showPage('konu-detay');
  var alan = document.getElementById('konu-detay-icerik');
  var etiketler = { gy: 'Genel Yetenek', gk: 'Genel Kültür', alan: 'Alan Bilgisi' };
  alan.innerHTML = '<h1 class="detay-baslik">' + konu.baslik + '</h1><p class="detay-meta">' + etiketler[konu.kategori] + '</p><div class="yukleniyor"><div class="spinner"></div><span>AI hazırlıyor...</span></div>';
  try {
    var icerik = await window.aiKonuAnlat(konu.baslik, konu.aciklama);
    alan.innerHTML = '<h1 class="detay-baslik">' + konu.baslik + '</h1><p class="detay-meta">' + etiketler[konu.kategori] + ' · AI ile hazırlandı</p><div class="icerik-box">' + icerik + '</div><button class="ai-btn" onclick="konuSorulariniYukle(\'' + konuId + '\',\'' + konu.baslik + '\')"><i class="ti ti-help-circle"></i> Soru Çöz</button><div id="konu-soru-alani" style="margin-top:1rem"></div>';
    ilerleme[konuId] = Math.max(ilerleme[konuId] || 0, 30);
    veriKaydet('ilerleme', ilerleme);
    istatistikGuncelle('toplamKonu');
  } catch(e) {
    alan.innerHTML += '<p style="color:var(--danger);padding:1rem">İçerik yüklenemedi. API anahtarını ekle.</p>';
  }
}

async function konuSorulariniYukle(konuId, baslik) {
  var alan = document.getElementById('konu-soru-alani');
  alan.innerHTML = '<div class="yukleniyor"><div class="spinner"></div><span>Sorular hazırlanıyor...</span></div>';
  try {
    var sorular = await window.aiSoruOlustur(baslik, 3);
    renderSorular(sorular, alan);
    ilerleme[konuId] = Math.min(100, (ilerleme[konuId] || 30) + 30);
    veriKaydet('ilerleme', ilerleme);
  } catch(e) { alan.innerHTML = '<p style="color:var(--danger)">Sorular yüklenemedi.</p>'; }
}

// ============================================
// SORULAR
// ============================================
function renderSorular(sorular, hedef) {
  var harfler = ['A', 'B', 'C', 'D'];
  var html = '';
  sorular.forEach(function(s, i) {
    html += '<div class="soru-kart" id="soru-' + i + '">';
    html += '<p class="soru-metin">' + (i+1) + '. ' + s.soru + '</p>';
    html += '<div class="secenekler">';
    s.secenekler.forEach(function(sec, j) {
      html += '<div class="secenek" onclick="cevapla(' + i + ',' + j + ',' + s.dogru + ',\'' + encodeURIComponent(s.aciklama) + '\')">';
      html += '<span class="secenek-harf">' + harfler[j] + '</span><span>' + sec + '</span></div>';
    });
    html += '</div><div class="aciklama-kutusu" id="aciklama-' + i + '"></div></div>';
  });
  hedef.innerHTML = html;
}

function cevapla(soruIdx, secIdx, dogruIdx, aciklamaEnc) {
  var kart = document.getElementById('soru-' + soruIdx);
  kart.querySelectorAll('.secenek').forEach(function(s) { s.classList.add('pasif'); });
  kart.querySelectorAll('.secenek')[secIdx].classList.add(secIdx === dogruIdx ? 'dogru' : 'yanlis');
  if (secIdx !== dogruIdx) kart.querySelectorAll('.secenek')[dogruIdx].classList.add('dogru');
  var kutu = document.getElementById('aciklama-' + soruIdx);
  kutu.textContent = decodeURIComponent(aciklamaEnc);
  kutu.className = 'aciklama-kutusu show ' + (secIdx === dogruIdx ? 'dogru-aciklama' : 'yanlis-aciklama');
  istatistikGuncelle('toplamSoru');
  if (secIdx === dogruIdx) istatistikGuncelle('dogruSoru');
}

async function soruKonuSec(konu, btn) {
  document.querySelectorAll('#page-sorular .filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  var alan = document.getElementById('soru-alani');
  var konuMap = { 'genel': null, 'matematik': 'matematik', 'turkce': 'turkce', 'tarih': 'tarih', 'anayasa': 'anayasa', 'cografya': 'cografya' };
  var filtre = konuMap[konu];
  var mevcutSorular = filtre ? cikmisSorular.filter(function(s) { return s.konu === filtre; }) : cikmisSorular;
  if (mevcutSorular.length > 0) {
    alan.innerHTML = '<div style="margin-bottom:1rem;padding:8px 12px;background:var(--success-bg);border-radius:8px;font-size:13px;color:var(--success)">📚 Gerçek KPSS çıkmış sorular</div>';
    renderSorular(mevcutSorular.slice(0, 5), alan);
    return;
  }
  alan.innerHTML = '<div class="yukleniyor"><div class="spinner"></div><span>AI sorular üretiyor...</span></div>';
  try {
    var sorular = await window.aiSoruOlustur('KPSS ' + konu, 5);
    renderSorular(sorular, alan);
  } catch(e) { alan.innerHTML = '<p style="color:var(--danger);padding:1rem">Soru üretilemedi.</p>'; }
}

async function aiSoruUret() {
  var alan = document.getElementById('soru-alani');
  alan.innerHTML = '<div class="yukleniyor"><div class="spinner"></div><span>AI sorular üretiyor...</span></div>';
  try {
    var sorular = await window.aiSoruOlustur('KPSS Genel Yetenek ve Genel Kültür karışık', 5);
    renderSorular(sorular, alan);
  } catch(e) { alan.innerHTML = '<p style="color:var(--danger);padding:1rem">Soru üretilemedi.</p>'; }
}

function cikmisSoruTest(ders) {
  showPage('sorular');
  var alan = document.getElementById('soru-alani');
  var konuMap = { 'Matematik': 'matematik', 'Türkçe': 'turkce', 'Tarih': 'tarih', 'Coğrafya': 'cografya', 'Vatandaşlık & Anayasa': 'anayasa', 'Güncel Bilgiler': 'guncel' };
  var filtre = konuMap[ders];
  var sorular = filtre ? cikmisSorular.filter(function(s) { return s.konu === filtre; }) : cikmisSorular;
  if (!sorular.length) {
    alan.innerHTML = '<p style="color:var(--text2);padding:1rem">Bu ders için çıkmış soru bulunamadı.</p>';
    return;
  }
  alan.innerHTML = '<div style="margin-bottom:1rem;padding:8px 12px;background:var(--success-bg);border-radius:8px;font-size:13px;color:var(--success)">📚 ' + ders + ' - Çıkmış Sorular</div>';
  renderSorular(sorular, alan);
}

// ============================================
// PRATİK TEST
// ============================================
async function pratikBaslat() {
  var konu = document.getElementById('pratik-konu').value;
  var adet = parseInt(document.getElementById('pratik-adet').value);
  var sure = parseInt(document.getElementById('pratik-sure').value);
  document.getElementById('pratik-giris').style.display = 'none';
  document.getElementById('pratik-sorular').style.display = 'block';
  document.getElementById('pratik-sonuc').style.display = 'none';
  document.getElementById('pratik-sorular').innerHTML = '<div class="yukleniyor"><div class="spinner"></div><span>Test hazırlanıyor...</span></div>';
  if (sure > 0) {
    pratikSureKalan = sure * 60;
    document.getElementById('test-timer-box').style.display = 'flex';
    guncelleSure();
    pratikSureInterval = setInterval(function() { pratikSureKalan--; guncelleSure(); if (pratikSureKalan <= 0) pratikBitir(); }, 1000);
  }
  try {
    var mevcutSorular = cikmisSorular.filter(function(s) { return s.konu === konu || konu === 'genel'; });
    if (mevcutSorular.length >= adet) {
      pratikSorular = mevcutSorular.sort(function() { return Math.random() - 0.5; }).slice(0, adet);
    } else {
      pratikSorular = await window.aiSoruOlustur('KPSS ' + konu, adet);
    }
    pratikCevaplar = new Array(pratikSorular.length).fill(null);
    renderPratikSorular();
  } catch(e) {
    document.getElementById('pratik-sorular').innerHTML = '<p style="color:var(--danger)">Test yüklenemedi.</p>';
  }
}

function guncelleSure() {
  var dk = Math.floor(pratikSureKalan / 60);
  var sn = pratikSureKalan % 60;
  document.getElementById('test-sure').textContent = String(dk).padStart(2,'0') + ':' + String(sn).padStart(2,'0');
  if (pratikSureKalan <= 60) document.getElementById('test-sure').style.color = 'var(--danger)';
}

function renderPratikSorular() {
  var harfler = ['A', 'B', 'C', 'D'];
  var html = '';
  pratikSorular.forEach(function(s, i) {
    html += '<div class="soru-kart" id="pratik-soru-' + i + '">';
    html += '<p class="soru-metin">' + (i+1) + '. ' + s.soru + '</p>';
    html += '<div class="secenekler">';
    s.secenekler.forEach(function(sec, j) {
      html += '<div class="secenek" id="pratik-sec-' + i + '-' + j + '" onclick="pratikCevapla(' + i + ',' + j + ')">';
      html += '<span class="secenek-harf">' + harfler[j] + '</span><span>' + sec + '</span></div>';
    });
    html += '</div></div>';
  });
  html += '<button class="ai-btn" style="margin-top:1rem" onclick="pratikBitir()"><i class="ti ti-flag-check"></i> Testi Bitir</button>';
  document.getElementById('pratik-sorular').innerHTML = html;
}

function pratikCevapla(soruIdx, secIdx) {
  pratikCevaplar[soruIdx] = secIdx;
  var kart = document.getElementById('pratik-soru-' + soruIdx);
  kart.querySelectorAll('.secenek').forEach(function(s, j) { s.style.borderColor = j === secIdx ? 'var(--accent)' : ''; });
}

function pratikBitir() {
  if (pratikSureInterval) { clearInterval(pratikSureInterval); pratikSureInterval = null; }
  document.getElementById('test-timer-box').style.display = 'none';
  var dogru = 0, yanlis = 0, bos = 0;
  pratikSorular.forEach(function(s, i) {
    var cevap = pratikCevaplar[i];
    if (cevap === null) { bos++; return; }
    if (cevap === s.dogru) dogru++; else yanlis++;
    var kart = document.getElementById('pratik-soru-' + i);
    if (kart) kart.querySelectorAll('.secenek').forEach(function(sec, j) {
      sec.classList.add('pasif');
      if (j === s.dogru) sec.classList.add('dogru');
      else if (j === cevap && cevap !== s.dogru) sec.classList.add('yanlis');
    });
  });
  var net = (dogru - yanlis / 4).toFixed(2);
  document.getElementById('pratik-sonuc').style.display = 'block';
  document.getElementById('pratik-sonuc').innerHTML = '<div class="pratik-sonuc-box"><h3>Test Sonucu 🎉</h3><div class="sonuc-grid"><div class="sonuc-kart yesil"><span class="sk-num">' + dogru + '</span><span class="sk-label">Doğru</span></div><div class="sonuc-kart kirmizi"><span class="sk-num">' + yanlis + '</span><span class="sk-label">Yanlış</span></div><div class="sonuc-kart mavi"><span class="sk-num">' + net + '</span><span class="sk-label">Net</span></div></div><p style="color:var(--text2);font-size:13px;margin-bottom:1rem">' + bos + ' soru boş bırakıldı</p><button class="ai-btn" onclick="pratikYenidenBaslat()"><i class="ti ti-refresh"></i> Yeni Test</button></div>';
  istatistikGuncelle('toplamSoru', pratikSorular.length);
  istatistikGuncelle('dogruSoru', dogru);
  window.scrollTo(0, 0);
}

function pratikYenidenBaslat() {
  pratikSorular = []; pratikCevaplar = [];
  document.getElementById('pratik-giris').style.display = 'block';
  document.getElementById('pratik-sorular').style.display = 'none';
  document.getElementById('pratik-sonuc').style.display = 'none';
}

// ============================================
// FLASHCARD
// ============================================
function initKartlar() {
  var filtre = document.getElementById('kart-filtre');
  var html = '';
  Object.keys(flashKartlar).forEach(function(id) {
    var k = konuVerisi.find(function(x) { return x.id === id; });
    if (k) html += '<button class="filter-btn" onclick="kartKonuSec(\'' + id + '\',this)">' + k.baslik + '</button>';
  });
  filtre.innerHTML = html;
  kartKonuSec(Object.keys(flashKartlar)[0], filtre.querySelector('.filter-btn'));
}

function kartKonuSec(konuId, btn) {
  document.querySelectorAll('#kart-filtre .filter-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  aktifKartKonuId = konuId;
  aktifKartIndex = 0;
  document.getElementById('flashcard').classList.remove('flipped');
  showKart();
}

function showKart() {
  var kartlar = flashKartlar[aktifKartKonuId] || [];
  if (!kartlar.length) return;
  var kart = kartlar[aktifKartIndex];
  document.getElementById('kart-soru').textContent = kart.soru;
  document.getElementById('kart-cevap').textContent = kart.cevap;
  document.getElementById('kart-sayac').textContent = 'Kart ' + (aktifKartIndex + 1) + ' / ' + kartlar.length;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('kart-sonuc').textContent = '';
}

function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }

function nextCard() {
  var kartlar = flashKartlar[aktifKartKonuId] || [];
  aktifKartIndex = (aktifKartIndex + 1) % kartlar.length;
  showKart();
}

function kartSonuc(sonuc) {
  document.getElementById('kart-sonuc').textContent = sonuc === 'biliyorum' ? '✅ Harika!' : '❌ Tekrar et.';
  istatistikGuncelle('toplamKart');
  setTimeout(nextCard, 800);
}

// ============================================
// NET HESAPLAMA
// ============================================
var netYapisi = {
  lisans: [
    { baslik: 'Genel Yetenek', tip: 'gy', dersler: [{ ad: 'Türkçe', toplam: 20 }, { ad: 'Matematik', toplam: 20 }, { ad: 'Geometri', toplam: 10 }, { ad: 'Mantık', toplam: 10 }] },
    { baslik: 'Genel Kültür', tip: 'gk', dersler: [{ ad: 'Atatürk İlkeleri', toplam: 10 }, { ad: 'Türk Tarihi', toplam: 10 }, { ad: 'Coğrafya', toplam: 10 }, { ad: 'Anayasa', toplam: 10 }, { ad: 'Güncel', toplam: 5 }, { ad: 'Kültür-Sanat', toplam: 5 }] },
  ],
  onlisans: [
    { baslik: 'Genel Yetenek', tip: 'gy', dersler: [{ ad: 'Türkçe', toplam: 15 }, { ad: 'Matematik', toplam: 15 }, { ad: 'Geometri', toplam: 5 }, { ad: 'Mantık', toplam: 5 }] },
    { baslik: 'Genel Kültür', tip: 'gk', dersler: [{ ad: 'Atatürk İlkeleri', toplam: 10 }, { ad: 'Tarih', toplam: 10 }, { ad: 'Coğrafya', toplam: 10 }, { ad: 'Anayasa', toplam: 10 }] },
  ],
  ortaogretim: [
    { baslik: 'Genel Yetenek', tip: 'gy', dersler: [{ ad: 'Türkçe', toplam: 15 }, { ad: 'Matematik', toplam: 15 }, { ad: 'Geometri', toplam: 5 }, { ad: 'Mantık', toplam: 5 }] },
    { baslik: 'Genel Kültür', tip: 'gk', dersler: [{ ad: 'Atatürk İlkeleri', toplam: 10 }, { ad: 'Tarih', toplam: 10 }, { ad: 'Coğrafya', toplam: 10 }, { ad: 'Anayasa', toplam: 10 }] },
  ],
};

function netSinavSec(tip, btn) {
  netAktifSinav = tip;
  document.querySelectorAll('.net-sinav-sec .filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderNetGrid();
}

function renderNetGrid() {
  var yapi = netYapisi[netAktifSinav];
  var html = '';
  yapi.forEach(function(bolum, bi) {
    html += '<div class="net-kart"><div class="net-kart-baslik"><span class="konu-tag ' + bolum.tip + '">' + bolum.baslik + '</span></div>';
    html += '<div class="net-baslik-row"><span>Ders</span><span>Doğru</span><span>Yanlış</span><span>Net</span></div>';
    bolum.dersler.forEach(function(d, di) {
      html += '<div class="net-row"><label>' + d.ad + ' <small style="color:var(--text2)">(/'+d.toplam+')</small></label>';
      html += '<input class="net-input" type="number" min="0" max="' + d.toplam + '" placeholder="0" id="net-d-' + bi + '-' + di + '" oninput="netHesapla()">';
      html += '<input class="net-input" type="number" min="0" max="' + d.toplam + '" placeholder="0" id="net-y-' + bi + '-' + di + '" oninput="netHesapla()">';
      html += '<span id="net-n-' + bi + '-' + di + '" style="font-size:13px;font-weight:500;color:var(--accent);text-align:center">0</span></div>';
    });
    html += '</div>';
  });
  document.getElementById('net-grid').innerHTML = html;
  netHesapla();
}

function netHesapla() {
  var yapi = netYapisi[netAktifSinav];
  var gyNet = 0, gkNet = 0;
  yapi.forEach(function(bolum, bi) {
    bolum.dersler.forEach(function(d, di) {
      var dogru = parseFloat(document.getElementById('net-d-' + bi + '-' + di).value) || 0;
      var yanlis = parseFloat(document.getElementById('net-y-' + bi + '-' + di).value) || 0;
      var net = Math.max(0, dogru - yanlis / 4);
      document.getElementById('net-n-' + bi + '-' + di).textContent = net.toFixed(2);
      if (bolum.tip === 'gy') gyNet += net; else gkNet += net;
    });
  });
  var toplam = gyNet + gkNet;
  var puan = (toplam * 1.6 + 40).toFixed(2);
  document.getElementById('ns-gy').textContent = gyNet.toFixed(2);
  document.getElementById('ns-gk').textContent = gkNet.toFixed(2);
  document.getElementById('ns-toplam').textContent = toplam.toFixed(2);
  document.getElementById('ns-puan').textContent = puan;
  document.getElementById('puan-fill').style.width = Math.min(100, parseFloat(puan) / 120 * 100) + '%';
  var p = parseFloat(puan);
  document.getElementById('puan-bilgi').textContent = p >= 70 ? ('✅ ' + puan + ' puan — 70 barajını geçtiniz!') : p > 0 ? ('⚠️ ' + puan + ' puan — ' + (70-p).toFixed(2) + ' puan eksik.') : 'Doğru/yanlış girerek puan tahmini yap';
}

function netKaydet() {
  var kayit = { tarih: new Date().toLocaleDateString('tr-TR'), sinav: netAktifSinav, gyNet: document.getElementById('ns-gy').textContent, gkNet: document.getElementById('ns-gk').textContent, toplam: document.getElementById('ns-toplam').textContent, puan: document.getElementById('ns-puan').textContent };
  netGecmis.unshift(kayit);
  if (netGecmis.length > 10) netGecmis.pop();
  veriKaydet('netGecmis', netGecmis);
  istatistik.toplamNet = (istatistik.toplamNet || 0) + 1;
  veriKaydet('istatistik', istatistik);
  renderNetGecmis();
  renderRozetler();
}

function renderNetGecmis() {
  var alan = document.getElementById('net-gecmis');
  if (!netGecmis.length) { alan.innerHTML = ''; return; }
  var html = '<h3>Geçmiş Sonuçlar</h3>';
  netGecmis.forEach(function(k) {
    html += '<div class="gecmis-item"><span>' + k.sinav.toUpperCase() + ' · GY: ' + k.gyNet + ' · GK: ' + k.gkNet + '</span><span class="gecmis-puan">' + k.puan + ' puan</span><span class="gecmis-tarih">' + k.tarih + '</span></div>';
  });
  alan.innerHTML = html;
}

// ============================================
// SÖZLÜK
// ============================================
function renderSozluk(arama, filtre) {
  if (arama === undefined) arama = '';
  if (filtre === undefined) filtre = sozlukAktifFiltre;
  var liste = sozlukVerisi.filter(function(s) {
    var aramaUyum = s.terim.toLowerCase().includes(arama.toLowerCase()) || s.anlam.toLowerCase().includes(arama.toLowerCase());
    var filtreUyum = filtre === 'hepsi' || s.kategori === filtre;
    return aramaUyum && filtreUyum;
  });
  var html = '';
  if (liste.length) {
    liste.forEach(function(s) {
      html += '<div class="sozluk-kart" onclick="this.classList.toggle(\'acik\')">';
      html += '<div class="sozluk-kart-top"><span class="sozluk-terim">' + s.terim + '</span><span class="sozluk-kategori">' + s.kategori + '</span></div>';
      html += '<p class="sozluk-anlam">' + s.anlam + '</p>';
      html += '<p class="sozluk-ornek">💡 Örnek: ' + s.ornek + '</p></div>';
    });
  } else { html = '<p style="color:var(--text2);padding:1rem">Sonuç bulunamadı.</p>'; }
  document.getElementById('sozluk-liste').innerHTML = html;
}

function sozlukAra(deger) { renderSozluk(deger, sozlukAktifFiltre); }

function sozlukFiltre(filtre, btn) {
  sozlukAktifFiltre = filtre;
  document.querySelectorAll('.sozluk-filtre .filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderSozluk(document.getElementById('sozluk-ara').value, filtre);
}

// ============================================
// POMODORO
// ============================================
var pomoSureler = { calisma: 25, kisa: 5, uzun: 15 };
var pomoAktifMod = 'calisma';
var pomoKalanSaniye = 25 * 60;
var pomoCalisiyor = false;
var pomoInterval = null;
var pomoTamamlanan = 0;
var pomoBugunSure = 0;

function pomoMod(mod, btn) {
  if (pomoCalisiyor) return;
  pomoAktifMod = mod;
  document.querySelectorAll('.pomo-mod').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  pomoKalanSaniye = pomoSureler[mod] * 60;
  pomoGuncelle();
  var durumlar = { calisma: 'Çalışma zamanı 📚', kisa: 'Kısa mola ☕', uzun: 'Uzun mola 🛋️' };
  document.getElementById('pomo-durum').textContent = durumlar[mod];
}

function pomoToggle() {
  pomoCalisiyor = !pomoCalisiyor;
  document.getElementById('pomo-icon').className = pomoCalisiyor ? 'ti ti-player-pause' : 'ti ti-player-play';
  if (pomoCalisiyor) {
    pomoInterval = setInterval(function() {
      pomoKalanSaniye--;
      pomoBugunSure++;
      istatistik.toplamSure = (istatistik.toplamSure || 0) + 1/60;
      pomoGuncelle();
      if (pomoKalanSaniye <= 0) pomoTamamlandi();
    }, 1000);
  } else clearInterval(pomoInterval);
}

function pomoGuncelle() {
  var dk = Math.floor(pomoKalanSaniye / 60);
  var sn = pomoKalanSaniye % 60;
  document.getElementById('pomo-zaman').textContent = String(dk).padStart(2,'0') + ':' + String(sn).padStart(2,'0');
  var cevre = 2 * Math.PI * 88;
  var oran = 1 - pomoKalanSaniye / (pomoSureler[pomoAktifMod] * 60);
  document.getElementById('pomo-progress-circle').style.strokeDashoffset = cevre * (1 - oran);
  document.getElementById('pomo-bugun-sure').textContent = Math.floor(pomoBugunSure / 60);
}

function pomoTamamlandi() {
  clearInterval(pomoInterval);
  pomoCalisiyor = false;
  document.getElementById('pomo-icon').className = 'ti ti-player-play';
  if (pomoAktifMod === 'calisma') {
    pomoTamamlanan++;
    document.getElementById('pomo-tamamlanan').textContent = pomoTamamlanan;
    istatistikGuncelle('toplamPomodoro');
    veriKaydet('istatistik', istatistik);
    alert('🍅 Pomodoro tamamlandı! Mola zamanı.');
  } else alert('☕ Mola bitti! Çalışmaya devam.');
  var siradaki = pomoAktifMod === 'calisma' ? 'kisa' : 'calisma';
  pomoMod(siradaki, document.getElementById('pmod-' + siradaki));
}

function pomoSifirla() {
  clearInterval(pomoInterval);
  pomoCalisiyor = false;
  document.getElementById('pomo-icon').className = 'ti ti-player-play';
  pomoKalanSaniye = pomoSureler[pomoAktifMod] * 60;
  pomoGuncelle();
}

function pomoAtla() { pomoTamamlandi(); }

function pomoAyarGuncelle() {
  pomoSureler.calisma = parseInt(document.getElementById('pomo-calisma-sure').value) || 25;
  pomoSureler.kisa = parseInt(document.getElementById('pomo-kisa-sure').value) || 5;
  pomoSureler.uzun = parseInt(document.getElementById('pomo-uzun-sure').value) || 15;
  if (!pomoCalisiyor) { pomoKalanSaniye = pomoSureler[pomoAktifMod] * 60; pomoGuncelle(); }
}

// ============================================
// İSTATİSTİK
// ============================================
function renderIstatistik() {
  var basari = istatistik.toplamSoru > 0 ? Math.round(istatistik.dogruSoru / istatistik.toplamSoru * 100) : 0;
  var html = '<div class="ist-grid">';
  html += '<div class="ist-kart"><h4>Toplam Soru</h4><div class="ist-deger">' + istatistik.toplamSoru + '</div></div>';
  html += '<div class="ist-kart"><h4>Doğru Cevap</h4><div class="ist-deger" style="color:var(--success)">' + istatistik.dogruSoru + '</div></div>';
  html += '<div class="ist-kart"><h4>Başarı Oranı</h4><div class="ist-deger">%' + basari + '</div></div>';
  html += '<div class="ist-kart"><h4>Günlük Seri</h4><div class="ist-deger" style="color:#f97316">' + istatistik.streak + ' 🔥</div></div>';
  html += '<div class="ist-kart"><h4>Pomodoro</h4><div class="ist-deger" style="color:var(--danger)">' + istatistik.toplamPomodoro + ' 🍅</div></div>';
  html += '<div class="ist-kart"><h4>Çalışılan Konu</h4><div class="ist-deger">' + istatistik.toplamKonu + '</div></div>';
  html += '<div class="ist-kart"><h4>Çalışma Süresi</h4><div class="ist-deger">' + Math.round(istatistik.toplamSure || 0) + ' dk</div></div>';
  html += '<div class="ist-kart"><h4>Kart Tekrarı</h4><div class="ist-deger">' + istatistik.toplamKart + '</div></div>';
  html += '</div>';
  html += '<p class="ist-section-title">Konu İlerlemesi</p>';
  konuVerisi.forEach(function(k) {
    var pct = ilerleme[k.id] || 0;
    html += '<div class="konu-ilerleme-item"><div class="konu-ilerleme-top"><span>' + k.baslik + '</span><small>%' + pct + '</small></div><div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div></div>';
  });
  html += '<p class="ist-section-title">Geçmiş Net Sonuçları</p>';
  if (netGecmis.length) {
    netGecmis.forEach(function(k) {
      html += '<div class="gecmis-item"><span>' + k.sinav.toUpperCase() + ' · Net: ' + k.toplam + '</span><span class="gecmis-puan">' + k.puan + ' puan</span><span class="gecmis-tarih">' + k.tarih + '</span></div>';
    });
  } else { html += '<p style="color:var(--text2);font-size:13px">Henüz net sonucu kaydedilmedi.</p>'; }
  document.getElementById('istatistik-icerik').innerHTML = html;
}

// ============================================
// YOL HARİTASI
// ============================================
function renderYolHaritasi() {
  var toplamUnite = yolHaritasi.reduce(function(t, d) { return t + d.uniteler.length; }, 0);
  var tamamlanan = Object.values(yhTamamlanan).filter(Boolean).length;
  var yuzde = Math.round(tamamlanan / toplamUnite * 100);
  document.getElementById('yh-yuzde').textContent = '%' + yuzde;
  document.getElementById('yh-genel-fill').style.width = yuzde + '%';
  var html = '';
  yolHaritasi.forEach(function(ders) {
    var dersTamamlanan = ders.uniteler.filter(function(u) { return yhTamamlanan[u.id]; }).length;
    var dersYuzde = Math.round(dersTamamlanan / ders.uniteler.length * 100);
    html += '<div class="yh-ders-kart">';
    html += '<div class="yh-ders-baslik"><div class="konu-icon ' + ders.renk + '" style="width:36px;height:36px"><i class="ti ' + ders.icon + '"></i></div><div class="yh-ders-info"><h3>' + ders.ders + '</h3><span>' + dersTamamlanan + '/' + ders.uniteler.length + ' ünite · ' + ders.soruSayisi + ' soru · %' + dersYuzde + '</span></div><div class="yh-ders-yuzde">' + dersYuzde + '%</div></div>';
    html += '<div class="progress-bar" style="margin:8px 0 12px"><div class="progress-fill" style="width:' + dersYuzde + '%"></div></div>';
    html += '<div class="yh-uniteler">';
    ders.uniteler.forEach(function(u) {
      var tam = yhTamamlanan[u.id];
      html += '<div class="yh-unite ' + (tam ? 'tamamlandi' : '') + '" onclick="yhToggle(\'' + u.id + '\')">';
      html += '<div class="yh-unite-sol"><div class="yh-checkbox ' + (tam ? 'checked' : '') + '">' + (tam ? '<i class="ti ti-check"></i>' : '') + '</div><div><div class="yh-unite-ad">' + u.ad + '</div><div class="yh-unite-detay">' + u.detay + '</div></div></div>';
      html += '<span class="yh-oncelik ' + u.oncelik + '">' + (u.oncelik === 'yuksek' ? '🔴 Kritik' : u.oncelik === 'orta' ? '🟡 Orta' : '🟢 Düşük') + '</span></div>';
    });
    html += '</div>';
    html += '<button class="yh-test-btn" onclick="cikmisSoruTest(\'' + ders.ders + '\')"><i class="ti ti-writing"></i> Çıkmış Sorular</button>';
    html += '</div>';
  });
  document.getElementById('yolharitasi-icerik').innerHTML = html;
}

function yhToggle(uniteId) {
  yhTamamlanan[uniteId] = !yhTamamlanan[uniteId];
  veriKaydet('yhTamamlanan', yhTamamlanan);
  istatistik.toplamUnite = Object.values(yhTamamlanan).filter(Boolean).length;
  veriKaydet('istatistik', istatistik);
  renderYolHaritasi();
  renderRozetler();
}

// ============================================
// BAŞLAT
// ============================================
var kayitliSinav = veriAl('aktifSinav', 'lisans');
aktifSinav = kayitliSinav;
document.querySelectorAll('.sinav-btn').forEach(function(btn, i) {
  var tipler = ['lisans', 'onlisans', 'ortaogretim'];
  if (tipler[i] === kayitliSinav) btn.classList.add('active');
  else btn.classList.remove('active');
});
geriSayimBaslat();
updateStats();
renderRozetler();
renderNetGecmis();