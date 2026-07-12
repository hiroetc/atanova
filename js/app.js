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
  { id: 'tarih-cumhuriyet', kategori: 'gk', baslik: 'Cumhuriyet Tarihi', aciklama: 'Kurtuluş Savaşı, Atatürk ilke ve inkılapları, çok partili hayat', ikon: 'ti-flag' },
  { id: 'cografya', kategori: 'gk', baslik: 'Türkiye Coğrafyası', aciklama: 'Fiziki coğrafya, iklim, nüfus, göller, dağlar, ekonomi', ikon: 'ti-map' },
  { id: 'anayasa', kategori: 'gk', baslik: 'Anayasa & Vatandaşlık', aciklama: '1982 Anayasası, temel hak ve özgürlükler, devlet yapısı', ikon: 'ti-gavel' },
  { id: 'guncel', kategori: 'gk', baslik: 'Güncel Olaylar', aciklama: 'Türkiye ve dünya gündemi, uluslararası kuruluşlar', ikon: 'ti-news' },
  { id: 'egitim-psiko', kategori: 'alan', baslik: 'Eğitim Psikolojisi', aciklama: 'Gelişim psikolojisi, öğrenme kuramları, motivasyon', ikon: 'ti-user-heart' },
  { id: 'ogretim', kategori: 'alan', baslik: 'Öğretim İlke ve Yöntemleri', aciklama: 'Öğretim yöntemleri, ölçme-değerlendirme, sınıf yönetimi', ikon: 'ti-chalkboard' },
  { id: 'rehberlik', kategori: 'alan', baslik: 'Rehberlik ve Özel Eğitim', aciklama: 'Psikolojik danışmanlık, özel eğitim ihtiyaçları', ikon: 'ti-heart-handshake' },
];

// ============================================
// FLASH KARTLAR
// ============================================
const flashKartlar = {
  'mat-temel': [
    { soru: 'EBOB nedir?', cevap: 'En Büyük Ortak Bölen — iki sayının ortak bölenlerinin en büyüğü.' },
    { soru: 'EKOK nedir?', cevap: 'En Küçük Ortak Kat — iki sayının ortak katlarının en küçüğü.' },
    { soru: '2 ile bölünebilme kuralı?', cevap: 'Son rakamı 0, 2, 4, 6 veya 8 olan sayılar 2\'ye bölünür.' },
    { soru: '3 ile bölünebilme kuralı?', cevap: 'Rakamlar toplamı 3\'e bölünebiliyorsa sayı da 3\'e bölünür.' },
    { soru: '9 ile bölünebilme kuralı?', cevap: 'Rakamlar toplamı 9\'a bölünebiliyorsa sayı da 9\'a bölünür.' },
    { soru: '4 ile bölünebilme kuralı?', cevap: 'Son iki rakamı 4\'e bölünebiliyorsa sayı da 4\'e bölünür.' },
    { soru: '11 ile bölünebilme kuralı?', cevap: 'Tek basamaklıların toplamı ile çift basamaklıların toplamının farkı 0 veya 11\'in katıysa bölünür.' },
  ],
  'mat-oran': [
    { soru: 'Kar yüzdesi nasıl hesaplanır?', cevap: 'Kar / Maliyet × 100.' },
    { soru: 'Doğru orantı nedir?', cevap: 'Bir miktar artınca diğeri de aynı oranda artar. a/b = sabit.' },
    { soru: 'Ters orantı nedir?', cevap: 'Bir miktar artınca diğeri aynı oranda azalır. a × b = sabit.' },
    { soru: 'Bileşik faiz formülü?', cevap: 'A = P(1 + r/n)^nt. P=anapara, r=faiz oranı, n=dönem sayısı, t=yıl.' },
    { soru: 'Yüzde artış nasıl hesaplanır?', cevap: '(Yeni değer - Eski değer) / Eski değer × 100.' },
  ],
  'turkce-anlam': [
    { soru: '"Ayak uydurmak" ne anlama gelir?', cevap: 'Uymak, adapte olmak, uyum sağlamak.' },
    { soru: '"El elden üstündür" ne demek?', cevap: 'Her güçlünün üstünde daha güçlü biri vardır.' },
    { soru: '"Saçma" kelimesinin eş anlamı?', cevap: 'Mantıksız, anlamsız, akıldışı, tutarsız.' },
    { soru: 'Mecaz anlam nedir?', cevap: 'Bir sözcüğün gerçek anlamı dışında başka bir anlamda kullanılması.' },
    { soru: 'Deyim nedir?', cevap: 'En az iki sözcükten oluşan, kalıplaşmış, çoğunlukla mecaz anlamlı söz öbeği.' },
    { soru: '"Ağzı var dili yok" ne demek?', cevap: 'Sesini çıkarmayan, konuşmayan, tepkisiz kalan kişi.' },
    { soru: '"Akla yatmak" ne demek?', cevap: 'Mantıklı gelmek, kabul edilebilir görünmek.' },
  ],
  'turkce-cumle': [
    { soru: 'İsim cümlesi nedir?', cevap: 'Yüklemi isim veya isim soylu sözcük olan cümle. Yüklemine "-mak/-mek" eklenemez.' },
    { soru: 'Fiil cümlesi nedir?', cevap: 'Yüklemi çekimli fiil olan cümle. Yüklemine "-mak/-mek" eklenebilir.' },
    { soru: 'Kurallı (düz) cümle nedir?', cevap: 'Yüklemi sonda olan cümle.' },
    { soru: 'Devrik cümle nedir?', cevap: 'Yüklemi başta veya ortada olan cümle.' },
    { soru: 'Eksiltili cümle nedir?', cevap: 'Yüklemi olmayan, tamamlanmamış cümle. Sonuna üç nokta konur.' },
    { soru: 'Basit cümle nedir?', cevap: 'Tek yüklemli olan ve içinde fiilimsi bulunmayan cümle.' },
    { soru: 'Bağlı cümle nedir?', cevap: 'En az iki yüklemin bağlaçla (ve, ama, fakat, çünkü) bağlandığı cümle.' },
    { soru: 'Sıralı cümle nedir?', cevap: 'En az iki yüklemin virgül veya noktalı virgülle bağlandığı cümle.' },
    { soru: 'Birleşik cümle nedir?', cevap: 'Tek yüklemi olan ve içinde fiilimsi veya yan cümle barındıran cümle.' },
  ],
  'tarih-ilk': [
    { soru: 'İlk Türk devleti hangisidir?', cevap: 'Asya Hun Devleti (MÖ 220). Kurucusu Teoman\'dır.' },
    { soru: 'Göktürk Devleti\'nin önemi nedir?', cevap: 'İlk kez "Türk" adını devlet adı olarak kullanan devlet. Orhun Yazıtları bu döneme aittir.' },
    { soru: 'Uygurların önemi nedir?', cevap: 'Yerleşik hayata geçen ilk Türk devleti. Kağıt para, matbaa, kütüphane ilk kez kullandılar.' },
    { soru: 'Karahanlılar\'ın önemi nedir?', cevap: 'İslamiyet\'i kabul eden ilk Türk devleti. Satuk Buğra Han İslamiyet\'i kabul etti (940).' },
    { soru: 'Göktürk Alfabesi özellikleri?', cevap: 'İlk Türk yazısı. 38 harften oluşur. Sağdan sola yazılır. Taş, kaya, ağaç üzerine yazılmıştır.' },
    { soru: 'Uygur Alfabesi özellikleri?', cevap: 'Soğd alfabesinden esinlenerek geliştirildi. Soldan sağa yazılır. Yuvarlak ve eğrili hatlar.' },
    { soru: 'Malazgirt Savaşı ne zaman yapıldı?', cevap: '1071. Alparslan ile Romen Diyojen arasında. Anadolu\'nun kapıları Türklere açıldı.' },
    { soru: 'Miryakefalon Savaşı ne zaman yapıldı?', cevap: '1176. II. Kılıç Arslan ile Manuel Komnenos arasında. Anadolu\'daki Türk varlığı kesinleşti.' },
    { soru: 'Yassıçemen Savaşı (1230) sonucu?', cevap: 'Türkiye Selçukluları kazandı. Moğollara karşı kazanılan ilk büyük zaferdir.' },
    { soru: 'Kösedağ Savaşı (1243) sonucu?', cevap: 'Anadolu Selçukluları yenildi. Anadolu Moğol egemenliğine girdi.' },
  ],
  'tarih-osmanli': [
    { soru: 'Osmanlı Devleti ne zaman kuruldu?', cevap: '1299\'da Osman Bey tarafından. İlk merkez Söğüt.' },
    { soru: 'İstanbul ne zaman fethedildi?', cevap: '29 Mayıs 1453. Fatih Sultan Mehmet tarafından.' },
    { soru: 'Osmanlı\'nın ilk anayasası hangisidir?', cevap: '1876 Kanun-i Esasi. II. Abdülhamid döneminde Mithat Paşa hazırladı.' },
    { soru: 'Yeniçeri Ocağı ne zaman kaldırıldı?', cevap: '1826\'da II. Mahmut. Olaya Vaka-i Hayriye denir.' },
    { soru: 'Tanzimat Fermanı ne zaman ilan edildi?', cevap: '1839. Abdülmecid döneminde. Mustafa Reşit Paşa hazırladı. Diğer adı Gülhane Hatt-ı Hümayunu.' },
    { soru: 'Islahat Fermanı ne zaman ilan edildi?', cevap: '1856. Abdülmecid döneminde. Gayrimüslimlere yeni haklar verildi.' },
    { soru: 'Sened-i İttifak nedir?', cevap: '1808\'de II. Mahmut döneminde imzalanan belge. Padişahın yetkilerini sınırlayan ilk belgedir.' },
    { soru: 'Karlofça Antlaşması\'nın önemi?', cevap: '1699. Osmanlı ilk büyük toprak kaybını yaşadı. Gerileme Dönemi başladı.' },
    { soru: 'Lale Devri özellikleri?', cevap: '1718-1730. III. Ahmet dönemi. İlk matbaa kuruldu. İlk çiçek aşısı yapıldı. Patrona Halil İsyanı ile sona erdi.' },
    { soru: 'Preveze Deniz Savaşı (1538) önemi?', cevap: 'Akdeniz\'in Türk gölü haline gelmesi. Barbaros Hayrettin Paşa kazandı.' },
    { soru: 'Osmanlı\'nın en uzun süre hükümdarlık yapan padişahı?', cevap: 'Kanuni Sultan Süleyman (46 yıl, 1520-1566).' },
    { soru: 'TOKMAK kodlaması ne anlama gelir?', cevap: 'Tarhuncu Ahmet Paşa, II. Osman (Genç), Kuyucu Murat Paşa, IV. Murat, I. Ahmet, Köprülüler Dönemi.' },
  ],
  'tarih-cumhuriyet': [
    { soru: 'Cumhuriyet ne zaman ilan edildi?', cevap: '29 Ekim 1923.' },
    { soru: 'Atatürk\'ün 6 ilkesi nelerdir?', cevap: 'Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.' },
    { soru: 'Harf inkılabı hangi yılda?', cevap: '1928. Latin alfabesine geçildi.' },
    { soru: 'Cumhuriyetçilik ilkesinin inkılapları?', cevap: 'TBMM\'nin açılması (1920), Cumhuriyetin ilanı (1923), 1924 Anayasası, Halifeliğin kaldırılması (1924), Saltanatın kaldırılması (1922).' },
    { soru: 'Laiklik ilkesinin inkılapları?', cevap: 'Halifeliğin kaldırılması, Şer\'iye mahkemelerinin kaldırılması, Türk Medeni Kanunu (1926), Diyanet İşleri Başkanlığı.' },
    { soru: 'Halkçılık ilkesinin inkılapları?', cevap: 'Kadınlara seçme hakkı (1930), milletvekili seçme hakkı (1934), Medeni Kanun (1926), ücretsiz ilköğretim.' },
    { soru: 'Devletçilik ilkesinin inkılapları?', cevap: 'İzmir İktisat Kongresi (1923), Sümerbank (1933), Etibank (1935), Devlet Demiryolları (1927).' },
    { soru: 'Milliyetçilik ilkesinin inkılapları?', cevap: 'Misak-ı Milli (1920), Türk Dil Kurumu (1932), Türk Tarih Kurumu (1931), Soyadı Kanunu (1934).' },
    { soru: 'İnkılapçılık ilkesinin inkılapları?', cevap: 'Harf İnkılabı (1928), Takvim-Saat-Ölçü İnkılabı (1926), Kılık-Kıyafet İnkılabı (1925).' },
    { soru: 'I. İnönü Savaşı\'nın önemi?', cevap: 'Düzenli ordunun ilk başarısı. Mustafa Kemal "Hayırlı başlangıç" telgrafını çekti.' },
    { soru: 'Mudanya Ateşkesi (1922) önemi?', cevap: 'İtilaf devletleri Türk zaferini tanıdı. Doğu Trakya Türklere bırakıldı.' },
    { soru: 'Lozan\'da taviz verilmeyen konular (KEM)?', cevap: 'Kapitülasyonlar, Ermenilere toprak verilmesi, Misak-ı Milli sınırları.' },
  ],
  'cografya': [
    { soru: 'Türkiye\'nin en büyük gölü?', cevap: 'Van Gölü (~3755 km²). Karma oluşumlu göl.' },
    { soru: 'Türkiye\'nin en uzun akarsuyu?', cevap: 'Kızılırmak. Tamamen Türkiye sınırları içindeki en uzun nehir.' },
    { soru: 'Türkiye\'nin en yüksek dağı?', cevap: 'Ağrı Dağı (5137 m).' },
    { soru: 'Tektonik göl kodlaması?', cevap: 'BAŞİTMUHASEBE: Burdur, Alaşehir, Sapanca, İznik, Tuz, Manyas, Uluabat, Hazar, Acıgöl, Seyfe, Eber, Beyşehir, Eğirdir.' },
    { soru: 'Volkanik göl kodlaması?', cevap: 'MANÇA: Meke Tuzlası, Acıgöl (Nevşehir), Nemrut, Gölcük, Acıgöl (Konya).' },
    { soru: 'Buzul göl kodlaması?', cevap: 'KAK: Kilimli, Aynalı, Karagöl.' },
    { soru: 'Karstik göl kodlaması?', cevap: 'KEKSAV: Kestel, Elmalı, Kızören, Suğla, Solda, Avlan, Varışlı.' },
    { soru: 'Maar gölü kodlaması?', cevap: 'MEK-ACI-GÖL-NAR: Meke, Acıgöl, Gölcük, Narlıgöl.' },
    { soru: 'Bor madeni kodlaması?', cevap: 'BEBEK: Bursa, Eskişehir, Balıkesir, Emet, Kütahya.' },
    { soru: 'Bakır madeni kodlaması?', cevap: 'KADER: Kastamonu-Küre, Artvin-Murgul, Diyarbakır-Ergani, Elazığ-Maden, Rize-Çayeli.' },
    { soru: 'Demir madeni kodlaması?', cevap: 'HAMSİ: Hatay, Adana, Malatya-Hekimhan, Sivas-Divriği, İzmir-Torbalı.' },
    { soru: 'Türkiye\'nin en kuzeyindeki il?', cevap: 'Sinop (İnceburun).' },
    { soru: 'Türkiye\'nin en güneyindeki il?', cevap: 'Hatay (Beysun Köyü).' },
    { soru: '21 Haziran\'ın özellikleri?', cevap: 'Yaz mevsiminin başlangıcı. En uzun gündüz, en kısa gece. Kuzey yarımkürede.' },
    { soru: '21 Aralık\'ın özellikleri?', cevap: 'Kış mevsiminin başlangıcı. En uzun gece, en kısa gündüz.' },
    { soru: '21 Mart ve 23 Eylül ekinoks tarihleri?', cevap: 'Gece ve gündüz eşit (12-12 saat). Güneş tam doğudan doğar.' },
  ],
  'anayasa': [
    { soru: 'TBMM kaç milletvekilinden oluşur?', cevap: '600 milletvekili. 2017\'de 550\'den 600\'e çıkarıldı.' },
    { soru: 'Cumhurbaşkanı kaç yıl için seçilir?', cevap: '5 yıl. En fazla 2 kez. Seçilme yaşı 40.' },
    { soru: 'Milletvekili seçilme yaşı?', cevap: '18 yaş.' },
    { soru: 'Seçim barajı yüzde kaç?', cevap: '%7.' },
    { soru: 'AYM kaç üyeden oluşur?', cevap: '15 üye. 12\'si TBMM, 3\'ü CB tarafından seçilir.' },
    { soru: 'HSK kaç üyeden oluşur?', cevap: '13 üye. 4\'ü CB, 7\'si TBMM, 2\'si Adalet Bakanı.' },
    { soru: '1982 Anayasası kaç maddeden oluşur?', cevap: '177 asıl + 16 geçici madde.' },
    { soru: 'Anayasa değişikliği için teklif kaç milletvekili?', cevap: 'En az 1/3 (200 mv) teklif. 3/5 (360) kabul. 2/3 (400) halkoylamasız yürürlük.' },
    { soru: 'Meclis tatili en fazla kaç ay?', cevap: '3 ay.' },
    { soru: 'Türkiye\'de kaç anayasa yapıldı?', cevap: '5 anayasa: 1876, 1921, 1924, 1961, 1982.' },
    { soru: '1982 Anayasası\'nın temel ilkeleri?', cevap: 'Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık, Demokratik, Sosyal, Hukuk devleti.' },
    { soru: 'Negatif statü hakları nedir?', cevap: 'Koruyucu haklar. Devlet karışmasın. Kişi dokunulmazlığı, haberleşme özgürlüğü.' },
    { soru: 'Pozitif statü hakları nedir?', cevap: 'İsteme hakları. Devlet hizmet versin. Eğitim, sağlık, çalışma hakkı.' },
    { soru: 'Aktif statü hakları nedir?', cevap: 'Katılma hakları. Yönetime katıl. Seçme, seçilme, siyasi parti kurma.' },
    { soru: 'Dokunulamaz çekirdek haklar nelerdir?', cevap: 'Yaşama hakkı, kişi bütünlüğü, din ve vicdan hürriyeti, suç ve cezaların geçmişe yürütülememesi.' },
  ],
};

// ============================================
// SÖZLÜK VERİSİ
// ============================================
const sozlukVerisi = [
  // HUKUK
  { terim: 'Anayasa', kategori: 'hukuk', anlam: 'Devletin temel yapısını, yönetim biçimini ve vatandaşların temel hak ve özgürlüklerini düzenleyen en üst hukuk kuralıdır.', ornek: '1982 Anayasası 7 Kasım 1982\'de kabul edilmiştir.' },
  { terim: 'Hukuk Devleti', kategori: 'hukuk', anlam: 'Devlet organlarının ve vatandaşların hukuk kurallarına bağlı olduğu, keyfi yönetimin önlendiği devlet anlayışı.', ornek: 'Hukuk devleti ilkesi yargı bağımsızlığını gerektirir.' },
  { terim: 'Laiklik', kategori: 'hukuk', anlam: 'Din ile devlet işlerinin birbirinden ayrılması; devletin dinler karşısında tarafsız olması ilkesi.', ornek: 'Laiklik ilkesi 1937\'de anayasaya girmiştir.' },
  { terim: 'Egemenlik', kategori: 'hukuk', anlam: '1982 Anayasası\'na göre egemenlik kayıtsız şartsız milletindir. Hiçbir kişi veya zümre kullananamaz.', ornek: 'Madde 6\'da düzenlenmiştir.' },
  { terim: 'Negatif Statü Hakları', kategori: 'hukuk', anlam: 'Devletin bireyin özgürlük alanına müdahale etmemesini amaçlayan koruyucu haklar. "Devlet karışmasın."', ornek: 'Kişi dokunulmazlığı, haberleşme özgürlüğü.' },
  { terim: 'Pozitif Statü Hakları', kategori: 'hukuk', anlam: 'Devletten hizmet talep etme hakları. "Devlet hizmet versin."', ornek: 'Eğitim hakkı, sağlık hakkı, çalışma hakkı.' },
  { terim: 'Aktif Statü Hakları', kategori: 'hukuk', anlam: 'Vatandaşların devlet yönetimine katılmasını sağlayan haklar. "Yönetime katıl."', ornek: 'Seçme, seçilme, siyasi parti kurma hakkı.' },
  { terim: 'İdare Hukuku', kategori: 'hukuk', anlam: 'İdarenin kuruluşu, görevleri ve eylemlerini düzenleyen hukuk dalıdır.', ornek: 'İdari işlemlere karşı iptal davası açılabilir.' },
  { terim: 'Yargı Bağımsızlığı', kategori: 'hukuk', anlam: 'Yargı yetkisinin bağımsız ve tarafsız mahkemelerce kullanılması. Hiçbir organ mahkemelere emir veremez.', ornek: '1982 Anayasası md.138\'de düzenlenmiştir.' },
  { terim: 'AYM', kategori: 'hukuk', anlam: 'Anayasa Mahkemesi. 15 üyeden oluşur. Bireysel başvuru ve norm denetimi yapar. 12\'si TBMM, 3\'ü CB tarafından seçilir.', ornek: 'AYM\'ye bireysel başvuru hakkı vardır.' },
  { terim: 'HSK', kategori: 'hukuk', anlam: 'Hâkimler ve Savcılar Kurulu. 13 üyeden oluşur. 4\'ü CB, 7\'si TBMM, 2\'si Adalet Bakanı tarafından seçilir.', ornek: 'HSK yargı bağımsızlığını korur.' },
  { terim: 'Danıştay', kategori: 'hukuk', anlam: 'İdari yargının en üst mahkemesi ve temyiz mercii.', ornek: 'Danıştay idari davalara bakar.' },
  { terim: 'Yargıtay', kategori: 'hukuk', anlam: 'Adli yargı alanında temyiz mercii. Hukuk ve ceza dairelerinden oluşur.', ornek: 'Yargıtay adli yargının en üst mahkemesidir.' },
  { terim: 'Kanun-i Esasi', kategori: 'hukuk', anlam: 'Osmanlı\'nın 1876\'da ilan edilen ilk anayasası. II. Abdülhamid döneminde Mithat Paşa hazırladı.', ornek: 'I. Meşrutiyet\'le birlikte yürürlüğe girdi.' },
  // TARİH
  { terim: 'Kut', kategori: 'tarih', anlam: 'Hükümdarın yönetme yetkisinin Gök Tanrı tarafından verildiğine inanılan ilahi güç. Kan yoluyla geçer. Taht kavgalarının temelidir.', ornek: 'Kut kaybedilince yönetme hakkı da kaybedilir.' },
  { terim: 'Töre', kategori: 'tarih', anlam: 'Türklerin yazısız hukuk kuralları bütünü. Herkes töreye uymak zorundadır, hükümdar da dahil.', ornek: 'Töre, devlet hukukunun temelini oluşturur.' },
  { terim: 'Kurultay', kategori: 'tarih', anlam: 'Türk devletlerinde devlet işlerinin görüşüldüğü danışma meclisi.', ornek: 'Kurultayda savaş ve barış kararları alınırdı.' },
  { terim: 'Cihan Hakimiyeti', kategori: 'tarih', anlam: 'Türklerin tüm dünyayı yönetme ideali. Dış politikayı etkiler.', ornek: 'Cihan hakimiyeti fetih politikalarının temel nedenidir.' },
  { terim: 'Timar', kategori: 'tarih', anlam: 'Osmanlı toprak sistemi. Devlet memurlarına maaş yerine vergi toplama hakkı. I. Murat döneminde geliştirildi.', ornek: 'Timar sistemi Osmanlı asker beslemesini sağladı.' },
  { terim: 'İkta', kategori: 'tarih', anlam: 'Selçuklu toprak sistemi. Osmanlı\'da Timar\'a dönüştü.', ornek: 'İkta sistemi Büyük Selçuklularda uygulandı.' },
  { terim: 'Devşirme', kategori: 'tarih', anlam: 'Hristiyan çocuklarının toplanarak Türk-İslam kültürüyle yetiştirilip devlet hizmetine alınması. I. Murat döneminde başladı.', ornek: 'Devşirmeler Kapıkulu ocaklarını oluşturdu.' },
  { terim: 'Kapıkulu', kategori: 'tarih', anlam: 'Osmanlı merkez ordusu. Devşirme sistemiyle oluşturulmuş padişaha bağlı askerler.', ornek: 'Yeniçeriler Kapıkulu ocaklarındandır.' },
  { terim: 'Tanzimat Fermanı', kategori: 'tarih', anlam: '1839\'da Abdülmecid döneminde Mustafa Reşit Paşa tarafından hazırlanan ferman. Can, mal, namus güvenliği. Diğer adı Gülhane Hatt-ı Hümayunu.', ornek: 'Hukuk devleti anlayışını güçlendirdi.' },
  { terim: 'Islahat Fermanı', kategori: 'tarih', anlam: '1856\'da Abdülmecid döneminde ilan edildi. Gayrimüslimlere yeni haklar verildi. İngiltere ve Fransa etkisiyle hazırlandı.', ornek: 'Gayrimüslimlere Müslümanlarla eşit haklar tanındı.' },
  { terim: 'Sened-i İttifak', kategori: 'tarih', anlam: '1808\'de II. Mahmut döneminde Ayanlarla imzalanan belge. Padişah yetkilerini sınırlayan ilk belgedir.', ornek: 'Magna Carta\'ya benzetilir.' },
  { terim: 'Nizam-ı Cedid', kategori: 'tarih', anlam: '"Yeni Düzen." III. Selim tarafından Avrupa tarzında ordu kurma girişimi (1793). Kabakçı Mustafa İsyanı ile kaldırıldı.', ornek: 'İrad-ı Cedid hazinesiyle finanse edildi.' },
  { terim: 'Vaka-i Hayriye', kategori: 'tarih', anlam: '1826\'da II. Mahmut\'un Yeniçeri Ocağı\'nı kaldırması. Yerine Asakir-i Mansure-i Muhammediye kuruldu.', ornek: '"Hayırlı Olay" anlamına gelir.' },
  { terim: 'Lale Devri', kategori: 'tarih', anlam: '1718-1730. III. Ahmet - Nevşehirli Damat İbrahim Paşa dönemi. İlk matbaa, çiçek aşısı, Batı\'ya ilgi. Patrona Halil İsyanı ile sona erdi.', ornek: 'Osmanlı\'da Batılılaşmanın başlangıcı kabul edilir.' },
  { terim: 'Kapitülasyonlar', kategori: 'tarih', anlam: 'Osmanlı\'nın yabancı devletlere verdiği ticari ayrıcalıklar. İlk kez 1535\'te Fransa\'ya verildi. 1923 Lozan\'da kaldırıldı.', ornek: 'Kapitülasyonlar Osmanlı ekonomisini zayıflattı.' },
  { terim: 'Misak-ı Milli', kategori: 'tarih', anlam: 'Son Osmanlı Mebusan Meclisi\'nin 1920\'de aldığı kararlar. Ulusal sınırları belirler.', ornek: 'Lozan\'da büyük ölçüde kabul edildi.' },
  { terim: 'Karlofça Antlaşması', kategori: 'tarih', anlam: '1699\'da Avusturya, Lehistan ve Venedik ile imzalandı. İlk büyük toprak kaybı. Gerileme Dönemi başladı.', ornek: 'Osmanlı savunma politikasına geçti.' },
  { terim: 'Ahilik', kategori: 'tarih', anlam: 'Selçuklu döneminde Ahi Evran tarafından kurulan esnaf dayanışma teşkilatı. Osmanlı\'da Lonca\'ya dönüştü.', ornek: 'Esnaf kalitesi ve fiyatları denetlerdi.' },
  { terim: 'Devşirme Sistemi', kategori: 'tarih', anlam: 'Osmanlı\'da devlet adamı yetiştirme sistemi. Hristiyan çocukları toplanır, Türk-İslam kültürüyle yetiştirilirdi.', ornek: 'Pek çok sadrazam devşirme kökenlidir.' },
  { terim: 'Darüşşifa', kategori: 'tarih', anlam: 'Türk-İslam devletlerinde hastane.', ornek: 'Divriği Ulu Camii\'nin yanındaki darüşşifa UNESCO listesindedir.' },
  { terim: 'Külliye', kategori: 'tarih', anlam: 'Cami merkezli yapılar topluluğu. Medrese, imaret, darüşşifa gibi yapıları içerir.', ornek: 'Süleymaniye Külliyesi en büyük Osmanlı külliyesidir.' },
  { terim: 'Vakıf', kategori: 'tarih', anlam: 'Sosyal ve dini amaçlı hayır kurumları. Osmanlı\'da eğitim ve sağlık vakıflarla yürütülürdü.', ornek: 'Vakıflar toplumsal dayanışmayı sağlardı.' },
  // EKONOMİ
  { terim: 'GSMH', kategori: 'ekonomi', anlam: 'Gayri Safi Milli Hasıla. Bir ülke vatandaşlarının yurt içi ve dışında ürettikleri toplam mal ve hizmetlerin değeri.', ornek: 'Ülkenin ekonomik büyüklüğünü ölçer.' },
  { terim: 'Enflasyon', kategori: 'ekonomi', anlam: 'Genel fiyat düzeyinin sürekli artması; paranın satın alma gücünün azalması.', ornek: 'Yüksek enflasyon alım gücünü düşürür.' },
  { terim: 'Deflasyon', kategori: 'ekonomi', anlam: 'Genel fiyat düzeyinin sürekli düşmesi; paranın satın alma gücünün artması.', ornek: 'Deflasyon tüketimi ertelemeye yol açar.' },
  { terim: 'Stagflasyon', kategori: 'ekonomi', anlam: 'Ekonomik durgunluk ile enflasyonun aynı anda yaşanması.', ornek: '1970\'lerde petrol krizinde stagflasyon yaşandı.' },
  // COĞRAFYA
  { terim: 'Tektonik Göl', kategori: 'cografya', anlam: 'Yer kabuğu hareketleriyle çöken çanaklarda suların birikmesiyle oluşan göller. Kodlama: BAŞİTMUHASEBE', ornek: 'Van Gölü en büyük tektonik göldür.' },
  { terim: 'Volkanik Göl', kategori: 'cografya', anlam: 'Volkanik çanaklarda biriken sularla oluşan göller. Kodlama: MANÇA', ornek: 'Nemrut en bilinen volkanik göldür.' },
  { terim: 'Karstik Göl', kategori: 'cografya', anlam: 'Kalkerli arazilerde erime ve çökme ile oluşan göller. Kodlama: KEKSAV', ornek: 'Salda Gölü karstik özellik gösterir.' },
  { terim: 'Maar Gölü', kategori: 'cografya', anlam: 'Volkanik patlama sonucu oluşan geniş ve sığ çukurlarda biriken sular. Kodlama: MEK-ACI-GÖL-NAR', ornek: 'Meke Gölü en ünlü maar gölüdür.' },
  { terim: 'Buzul Gölü', kategori: 'cografya', anlam: 'Yüksek dağlarda sirk çanaklarında buzul aşındırmasıyla oluşan göller. Kodlama: KAK', ornek: 'Cilo-Sat en önemli buzul göl grubudur.' },
  { terim: 'Horst', kategori: 'cografya', anlam: 'Kırık dağlarda yüksekte kalan kısım. Masif araziler buna örnektir.', ornek: 'Menderes Masifi bir horst örneğidir.' },
  { terim: 'Graben', kategori: 'cografya', anlam: 'Kırık dağlarda alçakta kalan çukur kısım.', ornek: 'Büyük Menderes Vadisi bir graben örneğidir.' },
  { terim: 'Ekinoks', kategori: 'cografya', anlam: 'Gece ve gündüzün eşit olduğu tarihler. 21 Mart (İlkbahar başı) ve 23 Eylül (Sonbahar başı).', ornek: 'Ekinoks tarihlerinde Güneş tam doğudan doğar.' },
  { terim: 'Bor Madeni', kategori: 'cografya', anlam: 'Türkiye dünya birincisi. Kodlama: BEBEK (Bursa, Eskişehir, Balıkesir, Emet, Kütahya)', ornek: 'Türkiye bor rezervlerinde dünyada 1. sıradadır.' },
  { terim: 'Bakır Madeni', kategori: 'cografya', anlam: 'Kodlama: KADER (Kastamonu-Küre, Artvin-Murgul, Diyarbakır-Ergani, Elazığ-Maden, Rize-Çayeli)', ornek: 'Kastamonu-Küre önemli bakır merkezidir.' },
  { terim: 'Demir Madeni', kategori: 'cografya', anlam: 'Kodlama: HAMSİ (Hatay, Adana, Malatya-Hekimhan, Sivas-Divriği, İzmir-Torbalı)', ornek: 'Sivas-Divriği önemli demir yatağıdır.' },
  { terim: 'Masif Arazi', kategori: 'cografya', anlam: 'I. Jeolojik Zamandan kalma sert kristalen çekirdek sahalar. Kodlama: YIL-MEN-KIR-BIT-ZON-ALA-ANA-PÜT', ornek: 'Menderes, Kırşehir, Bitlis başlıca masiflerdir.' },
  // EĞİTİM
  { terim: 'Yapılandırmacılık', kategori: 'egitim', anlam: 'Öğrencinin bilgiyi aktif biçimde kendi zihninde oluşturduğunu savunan öğrenme kuramı.', ornek: 'Yapılandırmacı yaklaşım öğrenci merkezli eğitimi ön plana çıkarır.' },
  { terim: 'Güdülenme', kategori: 'egitim', anlam: 'Bireyi hedefe yönelik harekete geçiren içsel ya da dışsal güç. İçsel motivasyon dışsal ödüllerden bağımsızdır.', ornek: 'İçsel motivasyon kalıcı öğrenmeyi sağlar.' },
  { terim: 'Davranışçılık', kategori: 'egitim', anlam: 'Öğrenmenin uyarıcı-tepki bağı kurulmasıyla gerçekleştiğini savunan kuram. Pavlov, Skinner öncüleridir.', ornek: 'Koşullu refleks davranışçılığın temel kavramıdır.' },
  { terim: 'Bilişsel Kuram', kategori: 'egitim', anlam: 'Öğrenmenin zihinsel süreçlerle gerçekleştiğini savunan kuram. Piaget, Bruner öncüleridir.', ornek: 'Öğrenci aktif bilgi işlemcisidir.' },
  { terim: 'Nizamiye Medreseleri', kategori: 'egitim', anlam: 'Büyük Selçuklular döneminde Nizamülmülk tarafından kurulan ilk sistematik eğitim kurumları. Dünyanın ilk üniversiteleri kabul edilir.', ornek: 'Bağdat, Nişabur ve diğer şehirlerde kuruldu.' },
];

// ============================================
// ÇIKMIŞ SORULAR (2001-2018 KPSS)
// ============================================
const cikmisSorular = [
  // MATEMATİK
  { konu: 'matematik', ders: 'Matematik', yil: '2024',
    soru: 'Bir işçi bir işi 12 günde, diğeri 18 günde bitirmektedir. İkisi birlikte çalışırlarsa bu işi kaç günde bitirirler?',
    secenekler: ['A) 6,4 gün', 'B) 7,2 gün', 'C) 8 gün', 'D) 9 gün'], dogru: 1,
    aciklama: '1/12 + 1/18 = 5/36. Birlikte 36/5 = 7,2 günde bitirir.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2024',
    soru: 'Bir malın fiyatı önce %20 artırılmış, sonra %25 azaltılmıştır. Toplam değişim yüzde kaçtır?',
    secenekler: ['A) %10 azalmış', 'B) %5 artmış', 'C) %5 azalmış', 'D) Değişmemiş'], dogru: 0,
    aciklama: '100 × 1,20 × 0,75 = 90. %10 azalmıştır.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2023',
    soru: 'A ve B şehirleri arası 360 km. Bir araç 80 km/s, diğeri 100 km/s ile karşılıklı yola çıkıyor. Kaç saatte karşılaşırlar?',
    secenekler: ['A) 1,5 saat', 'B) 2 saat', 'C) 2,5 saat', 'D) 3 saat'], dogru: 1,
    aciklama: 'Toplam hız = 180 km/s. Süre = 360/180 = 2 saat.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2023',
    soru: '24, 36 ve 48 sayılarının EBOB\'u kaçtır?',
    secenekler: ['A) 4', 'B) 6', 'C) 8', 'D) 12'], dogru: 3,
    aciklama: '24=2³×3, 36=2²×3², 48=2⁴×3. EBOB=2²×3=12.' },
  { konu: 'matematik', ders: 'Matematik', yil: '2022',
    soru: 'Bir sınıfta 30 öğrencinin not ortalaması 70\'tir. 5 öğrenci daha eklenince ortalama 68\'e düşüyor. Eklenen 5 öğrencinin not ortalaması kaçtır?',
    secenekler: ['A) 56', 'B) 58', 'C) 60', 'D) 62'], dogru: 1,
    aciklama: '30×70=2100. 35×68=2380. 5 öğrencinin toplamı=2380-2100=280. Ortalama=280/5=56... Doğru cevap A) 56.' },
  // TÜRKÇE
  { konu: 'turkce', ders: 'Türkçe', yil: '2024',
    soru: 'Aşağıdaki cümlelerin hangisinde "yanmak" sözcüğü mecaz anlamda kullanılmıştır?',
    secenekler: ['A) Mumlar geceyi aydınlatmak için yanıyordu.', 'B) Ormandaki yangın tahribat yarattı.', 'C) Adam, haksızlık karşısında içten içe yanıyordu.', 'D) Sobada odunlar saatlerce yandı.'], dogru: 2,
    aciklama: '"İçten içe yanmak" üzülmek, öfkelenmek anlamında — mecaz anlamdır.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2024',
    soru: '"Ayağını yorganına göre uzat" atasözüyle anlamca en yakın olan seçenek hangisidir?',
    secenekler: ['A) Gelirine göre harca, sınırlarını bil.', 'B) Sabahın köründe işe başlayanlar başarır.', 'C) Yavaş yavaş ilerleyenler hedefe ulaşır.', 'D) Birlikte çalışmak başarıyı getirir.'], dogru: 0,
    aciklama: 'İmkânlar ölçüsünde davranmak gerektiğini anlatır.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2023',
    soru: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
    secenekler: ['A) Bu konuda hiçbir şey bilmiyorum.', 'B) Herşey planlandığı gibi gitti.', 'C) Hiç kimse bunu yapamaz.', 'D) Bir gün mutlaka buluşacağız.'], dogru: 1,
    aciklama: '"Her şey" ayrı yazılır. "Herşey" yazım yanlışıdır.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2022',
    soru: 'Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?',
    secenekler: ['A) Bu durumdan dolayı kaynaklandı.', 'B) Konuyla ilgili görüşlerini belirttiler.', 'C) Birlikte iyi eğitilebilir.', 'D) Araştırmaları ilgiyle izledi.'], dogru: 0,
    aciklama: '"Dolayı" ve "kaynaklandı" bir arada kullanılamaz. "Bu durumdan kaynaklandı" veya "Bu durum dolayısıyla oldu" doğrudur.' },
  { konu: 'turkce', ders: 'Türkçe', yil: '2021',
    soru: 'Aşağıdaki sözcüklerin hangisinde ünsüz yumuşaması vardır?',
    secenekler: ['A) Kitabı', 'B) Kalemde', 'C) Defteri', 'D) Masası'], dogru: 0,
    aciklama: '"Kitap" sözcüğü ek alırken "p→b" değişimi yaşar: kitap+ı=kitabı.' },
  // TARİH
  { konu: 'tarih', ders: 'Tarih', yil: '2024',
    soru: 'Aşağıdakilerden hangisi Atatürk\'ün gerçekleştirdiği hukuk alanındaki inkılaplardan biri değildir?',
    secenekler: ['A) Medeni Kanun\'un kabulü (1926)', 'B) Halifeliğin kaldırılması (1924)', 'C) Türk Ceza Kanunu\'nun kabulü (1926)', 'D) Borçlar Kanunu\'nun kabulü (1926)'], dogru: 1,
    aciklama: 'Halifeliğin kaldırılması siyasi alandaki bir inkılaptır, hukuk alanında değildir.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2024',
    soru: 'Osmanlı Devleti\'nin Gerileme Dönemi\'nin başlangıcı kabul edilen antlaşma hangisidir?',
    secenekler: ['A) Küçük Kaynarca', 'B) Karlofça', 'C) Prut', 'D) Pasarofça'], dogru: 1,
    aciklama: '1699 Karlofça Antlaşması ile Osmanlı ilk büyük toprak kaybını yaşadı. Gerileme Dönemi başladı.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2023',
    soru: 'Malazgirt Savaşı\'nın (1071) Türk tarihi açısından en önemli sonucu nedir?',
    secenekler: ['A) Bizans\'ın yıkılması', 'B) Anadolu\'nun kapılarının Türklere açılması', 'C) Haçlı seferlerinin başlaması', 'D) Selçuklu\'nun yıkılması'], dogru: 1,
    aciklama: 'Malazgirt Savaşı ile Anadolu\'nun kapıları Türklere açıldı. Türkiye Tarihi\'nin başlangıcı kabul edilir.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2023',
    soru: 'Tanzimat Fermanı\'nın diğer adı nedir?',
    secenekler: ['A) Islahat Fermanı', 'B) Gülhane Hatt-ı Hümayunu', 'C) Sened-i İttifak', 'D) Kanun-i Esasi'], dogru: 1,
    aciklama: 'Tanzimat Fermanı\'nın diğer adı Gülhane Hatt-ı Hümayunu\'dur. 1839\'da ilan edildi.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2022',
    soru: 'İstanbul\'u fetheden Osmanlı padişahı kimdir?',
    secenekler: ['A) Yıldırım Bayezid', 'B) II. Murat', 'C) Fatih Sultan Mehmet', 'D) Kanuni Sultan Süleyman'], dogru: 2,
    aciklama: 'İstanbul 29 Mayıs 1453\'te Fatih Sultan Mehmet tarafından fethedildi.' },
  { konu: 'tarih', ders: 'Tarih', yil: '2022',
    soru: 'Aşağıdakilerden hangisi Atatürk\'ün 6 ilkesinden biri değildir?',
    secenekler: ['A) Cumhuriyetçilik', 'B) Laiklik', 'C) Osmanlıcılık', 'D) Milliyetçilik'], dogru: 2,
    aciklama: 'Atatürk\'ün 6 ilkesi: Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık. Osmanlıcılık bu ilkeler arasında yoktur.' },
  // ANAYASA & VATANDAŞLIK
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2024',
    soru: '1982 Anayasası\'na göre TBMM kaç milletvekilinden oluşur?',
    secenekler: ['A) 450', 'B) 550', 'C) 600', 'D) 650'], dogru: 2,
    aciklama: '2017 anayasa değişikliğiyle TBMM 550\'den 600\'e çıkarıldı.' },
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2024',
    soru: 'Aşağıdakilerden hangisi temel hakların sınırlandırılma koşullarından biri değildir?',
    secenekler: ['A) Kanunla sınırlandırılma', 'B) Anayasanın özüne dokunmama', 'C) CB kararnamesiyle düzenleme', 'D) Demokratik toplum gereklerine uygunluk'], dogru: 2,
    aciklama: 'Temel haklar ancak kanunla sınırlandırılabilir. CB kararnamesi temel hakları düzenleyemez (md. 13).' },
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2023',
    soru: 'Cumhurbaşkanı kaç yıllık görev süresi için seçilir?',
    secenekler: ['A) 4 yıl', 'B) 5 yıl', 'C) 6 yıl', 'D) 7 yıl'], dogru: 1,
    aciklama: 'Cumhurbaşkanı 5 yıllık süre için seçilir ve en fazla 2 kez seçilebilir.' },
  { konu: 'anayasa', ders: 'Vatandaşlık', yil: '2023',
    soru: 'Türkiye\'de seçimlerde uygulanan seçim barajı yüzde kaçtır?',
    secenekler: ['A) %5', 'B) %7', 'C) %10', 'D) %12'], dogru: 1,
    aciklama: 'Seçim barajı 2022\'de %10\'dan %7\'ye indirilmiştir.' },
  // COĞRAFYA
  { konu: 'cografya', ders: 'Coğrafya', yil: '2024',
    soru: 'Türkiye\'nin en fazla yağış alan bölgesi hangisidir?',
    secenekler: ['A) Akdeniz Bölgesi', 'B) Marmara Bölgesi', 'C) Doğu Karadeniz', 'D) İç Anadolu'], dogru: 2,
    aciklama: 'Doğu Karadeniz (Rize çevresi) yıllık 2000 mm\'yi aşan yağışıyla en fazla yağış alan bölgedir.' },
  { konu: 'cografya', ders: 'Coğrafya', yil: '2023',
    soru: 'Türkiye\'nin en büyük gölü hangisidir?',
    secenekler: ['A) Tuz Gölü', 'B) Beyşehir Gölü', 'C) Van Gölü', 'D) Eğirdir Gölü'], dogru: 2,
    aciklama: 'Van Gölü ~3755 km² ile Türkiye\'nin en büyük gölüdür. Karma oluşumlu göldür.' },
  { konu: 'cografya', ders: 'Coğrafya', yil: '2023',
    soru: 'Türkiye\'nin en uzun akarsuyu hangisidir?',
    secenekler: ['A) Fırat', 'B) Dicle', 'C) Kızılırmak', 'D) Sakarya'], dogru: 2,
    aciklama: 'Kızılırmak, tamamen Türkiye sınırları içinde akan en uzun nehirdir.' },
  { konu: 'cografya', ders: 'Coğrafya', yil: '2022',
    soru: 'Türkiye bor rezervleri bakımından dünyada kaçıncı sıradadır?',
    secenekler: ['A) 1.', 'B) 2.', 'C) 3.', 'D) 4.'], dogru: 0,
    aciklama: 'Türkiye dünya bor rezervlerinin yaklaşık %70\'ine sahiptir ve 1. sıradadır.' },
];

// ============================================
// SINAV TARİHLERİ
// ============================================
const sinavTarihleri = {
  lisans: { ad: 'KPSS Lisans', tarih: new Date('2026-09-06T10:00:00') },
  onlisans: { ad: 'KPSS Önlisans', tarih: new Date('2026-10-04T10:00:00') },
  ortaogretim: { ad: 'KPSS Ortaöğretim', tarih: new Date('2026-10-25T10:00:00') },
};

// ============================================
// ROZETLER
// ============================================
const rozetler = [
  // BRONZ
  { id: 'ilk-adim', ad: 'İlk Adım', icon: '🎯', seviye: 'bronz', aciklama: 'İlk soruyu çöz', kosul: (s) => s.toplamSoru >= 1, kilit: null },
  { id: 'ilk-konu', ad: 'İlk Konu', icon: '📖', seviye: 'bronz', aciklama: 'İlk konuyu aç', kosul: (s) => s.toplamKonu >= 1, kilit: 'karanlik' },
  { id: 'kart-ceviren', ad: 'Kart Çeviren', icon: '🃏', seviye: 'bronz', aciklama: '5 kart çevir', kosul: (s) => s.toplamKart >= 5, kilit: null },
  { id: 'ilk-pomodoro', ad: 'İlk Pomodoro', icon: '🍅', seviye: 'bronz', aciklama: '1 pomodoro tamamla', kosul: (s) => s.toplamPomodoro >= 1, kilit: null },
  { id: 'test-yapan', ad: 'Test Yapan', icon: '📝', seviye: 'bronz', aciklama: 'İlk pratik testi bitir', kosul: (s) => s.toplamSoru >= 5, kilit: null },
  // GÜMÜŞ
  { id: 'soru-10', ad: '10 Soru', icon: '✅', seviye: 'gumus', aciklama: '10 soru çöz', kosul: (s) => s.toplamSoru >= 10, kilit: 'zamanlitест' },
  { id: 'streak-3', ad: '3 Gün Seri', icon: '⚡', seviye: 'gumus', aciklama: '3 gün üst üste çalış', kosul: (s) => s.streak >= 3, kilit: 'motivasyon' },
  { id: 'yol-acan', ad: 'Yol Açan', icon: '🗺️', seviye: 'gumus', aciklama: '5 ünite tamamla', kosul: (s) => s.toplamUnite >= 5, kilit: null },
  { id: 'konu-uzman', ad: 'Konu Uzmanı', icon: '📚', seviye: 'gumus', aciklama: '5 konu çalış', kosul: (s) => s.toplamKonu >= 5, kilit: null },
  { id: 'net-ustan', ad: 'Net Ustası', icon: '🔢', seviye: 'gumus', aciklama: 'İlk neti kaydet', kosul: (s) => s.toplamNet >= 1, kilit: null },
  // ALTIN
  { id: 'soru-50', ad: '50 Soru', icon: '🔥', seviye: 'altin', aciklama: '50 soru çöz', kosul: (s) => s.toplamSoru >= 50, kilit: 'grafik' },
  { id: 'streak-7', ad: '7 Gün Seri', icon: '💪', seviye: 'altin', aciklama: '7 gün üst üste çalış', kosul: (s) => s.streak >= 7, kilit: 'ai-analiz' },
  { id: 'bilge', ad: 'Bilge', icon: '🎓', seviye: 'altin', aciklama: '10 konu tamamla', kosul: (s) => s.toplamKonu >= 10, kilit: null },
  { id: 'caliskan', ad: 'Çalışkan', icon: '⏰', seviye: 'altin', aciklama: '120 dakika çalış', kosul: (s) => (s.toplamSure || 0) >= 120, kilit: null },
  { id: 'mukemmel', ad: 'Mükemmel', icon: '💯', seviye: 'altin', aciklama: '%80 başarı oranı (min 20 soru)', kosul: (s) => s.toplamSoru >= 20 && (s.dogruSoru / s.toplamSoru) >= 0.8, kilit: null },
  // ELMAS
  { id: 'soru-100', ad: '100 Soru', icon: '🏆', seviye: 'elmas', aciklama: '100 soru çöz', kosul: (s) => s.toplamSoru >= 100, kilit: null },
  { id: 'streak-30', ad: '30 Gün Seri', icon: '👑', seviye: 'elmas', aciklama: '30 gün üst üste çalış', kosul: (s) => s.streak >= 30, kilit: 'pro-tema' },
  { id: 'kpss-ustan', ad: 'KPSS Ustası', icon: '🌟', seviye: 'elmas', aciklama: 'Tüm konuları bitir', kosul: (s) => s.toplamKonu >= konuVerisi.length, kilit: null },
  { id: 'atanova-pro', ad: 'Atanova Pro', icon: '🚀', seviye: 'elmas', aciklama: '20 pomodoro tamamla', kosul: (s) => s.toplamPomodoro >= 20, kilit: 'pro-tema' },
];

const kilitAciklamalari = {
  'karanlik': '🌙 Karanlık Mod açıldı!',
  'zamanlitест': '⏱️ Zamanlı Test Modu açıldı!',
  'motivasyon': '💬 Özel Motivasyon Mesajları açıldı!',
  'grafik': '📊 Detaylı İstatistik Grafikleri açıldı!',
  'ai-analiz': '🤖 AI Zayıf Konu Analizi açıldı!',
  'pro-tema': '✨ Atanova Pro Teması açıldı!',
};
// ============================================
// YOL HARİTASI VERİSİ
// ============================================
const yolHaritasi = [
  {
    ders: 'Türkçe', renk: 'gy', icon: 'ti-letter-t', soruSayisi: 30,
    uniteler: [
      { id: 'tr-1', ad: 'Sözcükte Anlam', detay: 'Gerçek-mecaz anlam, eş anlam, zıt anlam, sesteş', oncelik: 'yuksek' },
      { id: 'tr-2', ad: 'Cümlenin Anlamı & Yorumu', detay: 'Ana düşünce, yardımcı düşünce, cümle yorumlama', oncelik: 'yuksek' },
      { id: 'tr-3', ad: 'Deyimler & Atasözleri', detay: 'Kalıp ifadeler, deyim-atasözü farkı', oncelik: 'orta' },
      { id: 'tr-4', ad: 'Sözcük Türleri', detay: 'İsim, sıfat, zamir, fiil, zarf, edat, bağlaç, ünlem', oncelik: 'orta' },
      { id: 'tr-5', ad: 'Sözcükte Yapı', detay: 'Kök, ek, türeme, bileşik sözcükler', oncelik: 'orta' },
      { id: 'tr-6', ad: 'Ses Bilgisi & Ses Olayları', detay: 'Ünlü uyumları, ünsüz benzeşmesi, düşme, türeme, yumuşama', oncelik: 'yuksek' },
      { id: 'tr-7', ad: 'Cümlenin Ögeleri', detay: 'Özne, yüklem, nesne, yer tamlayıcısı, zarf tümleci, gizli özne', oncelik: 'yuksek' },
      { id: 'tr-8', ad: 'Cümle Türleri', detay: 'Yüklemine, öge dizilişine, anlamına, yapısına göre', oncelik: 'yuksek' },
      { id: 'tr-9', ad: 'Fiilimsiler', detay: 'İsim-fiil, sıfat-fiil, zarf-fiil ve görevleri', oncelik: 'yuksek' },
      { id: 'tr-10', ad: 'Tamlamalar', detay: 'Sıfat tamlaması, belirtili-belirtisiz isim tamlaması, zincirleme', oncelik: 'orta' },
      { id: 'tr-11', ad: 'Yazım Kuralları & Noktalama', detay: 'Büyük harf, birleşik yazım, noktalama işaretleri', oncelik: 'orta' },
      { id: 'tr-12', ad: 'Anlatım Bozuklukları', detay: 'Gereksiz sözcük, çelişki, mantık hatası, eksik öge', oncelik: 'yuksek' },
      { id: 'tr-13', ad: 'Paragraf & Anlatım Türleri', detay: 'Paragraf yapısı, anlatım biçimleri, metin türleri', oncelik: 'yuksek' },
    ]
  },
  {
    ders: 'Matematik', renk: 'gy', icon: 'ti-math-function', soruSayisi: 26,
    uniteler: [
      { id: 'mat-1', ad: 'Temel Kavramlar & Sayılar', detay: 'Doğal, tam, rasyonel sayılar; basamak, bölünebilme', oncelik: 'yuksek' },
      { id: 'mat-2', ad: 'EBOB & EKOK', detay: 'En büyük ortak bölen, en küçük ortak kat', oncelik: 'orta' },
      { id: 'mat-3', ad: 'Üslü & Köklü Sayılar', detay: 'Üs kuralları, kök hesaplama, sadeleştirme', oncelik: 'orta' },
      { id: 'mat-4', ad: 'Oran & Orantı', detay: 'Doğru-ters orantı, karışım problemleri', oncelik: 'yuksek' },
      { id: 'mat-5', ad: 'Yüzde, Kar-Zarar, Faiz', detay: 'Yüzde hesaplama, ticari problemler, basit-bileşik faiz', oncelik: 'yuksek' },
      { id: 'mat-6', ad: 'Denklemler & Eşitsizlikler', detay: '1. derece denklem, mutlak değer, eşitsizlik', oncelik: 'orta' },
      { id: 'mat-7', ad: 'Sayı & Yaş Problemleri', detay: 'Ardışık sayılar, yaş problemleri, rakam problemleri', oncelik: 'yuksek' },
      { id: 'mat-8', ad: 'Hareket & İşçi Problemleri', detay: 'Hız-mesafe-zaman, havuz-musluk, birlikte çalışma', oncelik: 'yuksek' },
      { id: 'mat-9', ad: 'Kümeler & Mantık', detay: 'Küme işlemleri, Venn şeması, önermeler', oncelik: 'orta' },
      { id: 'mat-10', ad: 'Sayı Dizileri & Örüntüler', detay: 'Aritmetik-geometrik dizi, şekil dizileri', oncelik: 'orta' },
      { id: 'mat-11', ad: 'Grafik & Tablo Yorumlama', detay: 'Sütun grafik, pasta grafik, tablo okuma', oncelik: 'yuksek' },
    ]
  },
  {
    ders: 'Geometri', renk: 'gy', icon: 'ti-triangle', soruSayisi: 4,
    uniteler: [
      { id: 'geo-1', ad: 'Açılar & Doğrular', detay: 'Açı türleri, paralel doğrular, açı hesaplama', oncelik: 'orta' },
      { id: 'geo-2', ad: 'Üçgenler', detay: 'Alan, çevre, Pisagor, açı-kenar bağıntıları', oncelik: 'yuksek' },
      { id: 'geo-3', ad: 'Dörtgenler', detay: 'Kare, dikdörtgen, paralelkenar, yamuk alan-çevre', oncelik: 'orta' },
      { id: 'geo-4', ad: 'Çember & Daire', detay: 'Çevre, alan, yay, dilim formülleri', oncelik: 'orta' },
      { id: 'geo-5', ad: 'Katı Cisimler & Hacim', detay: 'Küp, dikdörtgenler prizması, silindir hacmi', oncelik: 'dusuk' },
    ]
  },
  {
    ders: 'Tarih', renk: 'gk', icon: 'ti-building-castle', soruSayisi: 27,
    uniteler: [
      { id: 'tar-1', ad: 'İlk Türk Devletleri', detay: 'Asya Hun, Göktürk, Uygur, Karahanlı, Gazneli devletleri', oncelik: 'orta' },
      { id: 'tar-2', ad: 'Selçuklular', detay: 'Büyük Selçuklular, Anadolu Selçukluları, Malazgirt, Miryakefalon', oncelik: 'yuksek' },
      { id: 'tar-3', ad: 'Osmanlı Kuruluş & Yükselme', detay: 'Osman Bey\'den Kanuni\'ye, fetihler, kurumlar', oncelik: 'orta' },
      { id: 'tar-4', ad: 'Osmanlı Duraklama & Gerileme', detay: 'Karlofça\'dan Tanzimat\'a, ıslahatlar, antlaşmalar', oncelik: 'yuksek' },
      { id: 'tar-5', ad: 'Osmanlı Dağılma & I. Dünya Savaşı', detay: 'Balkan Savaşları, I. Dünya Savaşı, Mondros', oncelik: 'yuksek' },
      { id: 'tar-6', ad: 'Kurtuluş Savaşı', detay: 'Cemiyetler, kongreler, cepheler, Lozan', oncelik: 'yuksek' },
      { id: 'tar-7', ad: 'Atatürk İlkeleri & İnkılaplar', detay: '6 ilke, siyasi-hukuki-eğitim-kültür inkılapları', oncelik: 'yuksek' },
      { id: 'tar-8', ad: 'Cumhuriyet Tarihi (1923-1950)', detay: 'Tek parti dönemi, II. Dünya Savaşı, çok partili hayat', oncelik: 'yuksek' },
      { id: 'tar-9', ad: 'Yakın Dönem Türk Tarihi (1950+)', detay: 'Demokrat Parti, askeri müdahaleler, 1982 anayasası', oncelik: 'orta' },
    ]
  },
  {
    ders: 'Coğrafya', renk: 'gk', icon: 'ti-map', soruSayisi: 18,
    uniteler: [
      { id: 'cog-1', ad: 'Türkiye\'nin Konumu', detay: 'Göreceli konum, matematiksel konum, paralel-meridyen etkileri', oncelik: 'yuksek' },
      { id: 'cog-2', ad: 'Fiziki Yapı & Dağlar', detay: 'Kıvrım, kırık, volkanik dağlar; masif araziler', oncelik: 'orta' },
      { id: 'cog-3', ad: 'Göller & Akarsular', detay: 'Göl türleri (tektonik, volkanik, karstik, buzul, maar), akarsular', oncelik: 'yuksek' },
      { id: 'cog-4', ad: 'İklim & Bitki Örtüsü', detay: 'İklim tipleri, sıcaklık-yağış dağılımı, ormanlar', oncelik: 'yuksek' },
      { id: 'cog-5', ad: 'Nüfus & Yerleşme', detay: 'Nüfus dağılımı, şehirleşme, göç, köy-şehir', oncelik: 'yuksek' },
      { id: 'cog-6', ad: 'Tarım & Hayvancılık', detay: 'Ürün dağılımı, bölgelere göre tarım', oncelik: 'yuksek' },
      { id: 'cog-7', ad: 'Sanayi & Madencilik', detay: 'Sanayi bölgeleri, madenler ve kodlamaları (BEBEK, KADER, HAMSİ)', oncelik: 'yuksek' },
      { id: 'cog-8', ad: 'Türkiye\'nin Bölgeleri', detay: '7 coğrafi bölge özellikleri, karşılaştırmalı', oncelik: 'orta' },
    ]
  },
  {
    ders: 'Vatandaşlık & Anayasa', renk: 'gk', icon: 'ti-gavel', soruSayisi: 9,
    uniteler: [
      { id: 'vat-1', ad: 'Temel Hukuk Kavramları', detay: 'Hukuk tanımı, hukuk dalları, yaptırım türleri', oncelik: 'orta' },
      { id: 'vat-2', ad: 'Türk Anayasa Tarihi', detay: '1876, 1921, 1924, 1961, 1982 anayasaları', oncelik: 'yuksek' },
      { id: 'vat-3', ad: 'Anayasanın Temel İlkeleri', detay: 'Cumhuriyetin nitelikleri, laiklik, sosyal devlet, md.2', oncelik: 'yuksek' },
      { id: 'vat-4', ad: 'Temel Hak & Özgürlükler', detay: 'Kişi hakları, sosyal haklar, siyasi haklar, ödevler', oncelik: 'yuksek' },
      { id: 'vat-5', ad: 'Yasama — TBMM', detay: 'TBMM yapısı, görevleri, kanun yapım süreci (600 mv, 5 yıl)', oncelik: 'yuksek' },
      { id: 'vat-6', ad: 'Yürütme — Cumhurbaşkanlığı', detay: 'CB yetkileri, 2017 değişiklikleri, KHK', oncelik: 'yuksek' },
      { id: 'vat-7', ad: 'Yargı & Yüksek Mahkemeler', detay: 'AYM, Yargıtay, Danıştay, HSK, yargı bağımsızlığı', oncelik: 'yuksek' },
      { id: 'vat-8', ad: 'Seçim Sistemi', detay: '%7 baraj, D\'Hondt, 5 yılda bir, CB seçimi', oncelik: 'yuksek' },
      { id: 'vat-9', ad: 'İdare Hukuku & Kamu Görevlileri', detay: 'İdari teşkilat, memur hukuku, idari yargı', oncelik: 'orta' },
    ]
  },
  {
    ders: 'Güncel Bilgiler', renk: 'gk', icon: 'ti-news', soruSayisi: 6,
    uniteler: [
      { id: 'gun-1', ad: 'Türkiye Gündemi', detay: 'Siyasi gelişmeler, ekonomi haberleri, toplumsal olaylar', oncelik: 'yuksek' },
      { id: 'gun-2', ad: 'Uluslararası Kuruluşlar', detay: 'BM, NATO, AB, İİT, G20, OECD yapısı ve merkezleri', oncelik: 'yuksek' },
      { id: 'gun-3', ad: 'Türkiye\'nin İlkleri', detay: 'Siyasi, kültürel, bilimsel, spor alanındaki ilkler', oncelik: 'orta' },
      { id: 'gun-4', ad: 'Bilim, Teknoloji & Çevre', detay: 'Uzay, yapay zeka, iklim değişikliği', oncelik: 'dusuk' },
    ]
  },
];

// ============================================
// DURUM & VERİ YÖNETİMİ
// ============================================
let aktifSinav = 'lisans';
let aktifFiltre = 'hepsi';
let aktifKartKonuId = Object.keys(flashKartlar)[0];
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

let istatistik = veriAl('istatistik', { toplamSoru: 0, dogruSoru: 0, toplamKonu: 0, toplamKart: 0, toplamPomodoro: 0, streak: 0, sonCalisma: null, toplamSure: 0 });
let ilerleme = veriAl('ilerleme', {});
let netGecmis = veriAl('netGecmis', []);

function istatistikGuncelle(key, miktar = 1) {
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
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navMap = { anasayfa: 0, konular: 1, kartlar: 2, sorular: 3, pratik: 4, net: 5, sozluk: 6, pomodoro: 7, istatistik: 8, yolharitasi: 9 };
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
  document.querySelectorAll('.sinav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  geriSayimBaslat();
  veriKaydet('aktifSinav', tip);
}

function geriSayimBaslat() {
  if (gsInterval) clearInterval(gsInterval);
  const sinav = sinavTarihleri[aktifSinav];
  document.getElementById('gs-sinav-adi').textContent = sinav.ad + ' 2026';
  document.getElementById('gs-tarih-text').textContent = sinav.tarih.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  function guncelle() {
    const fark = sinav.tarih - new Date();
    if (fark <= 0) {
      ['gs-gun','gs-saat','gs-dakika','gs-saniye'].forEach(id => document.getElementById(id).textContent = '00');
      document.getElementById('gs-hedef-text').textContent = 'Sınav günü geldi! Başarılar 🎉';
      return;
    }
    document.getElementById('gs-gun').textContent = String(Math.floor(fark / 86400000)).padStart(3, '0');
    document.getElementById('gs-saat').textContent = String(Math.floor((fark % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('gs-dakika').textContent = String(Math.floor((fark % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('gs-saniye').textContent = String(Math.floor((fark % 60000) / 1000)).padStart(2, '0');
    const gun = Math.floor(fark / 86400000);
    const gundeKonu = gun > 0 ? Math.ceil(konuVerisi.length / gun) : konuVerisi.length;
    document.getElementById('gs-hedef-text').textContent = `Günlük hedef: ~${gundeKonu} konu çalış 💪`;
  }
  guncelle();
  gsInterval = setInterval(guncelle, 1000);
}

// ============================================
// STATS & ROZETLER
// ============================================
function renderRozetler() {
  const kazanilanlar = rozetler.filter(r => r.kosul(istatistik));
  const kazanilanIds = new Set(kazanilanlar.map(r => r.id));
  const kazanilanKilitler = new Set(kazanilanlar.filter(r => r.kilit).map(r => r.kilit));

  document.getElementById('rozet-sayac').textContent = `${kazanilanlar.length}/${rozetler.length}`;

  const seviyeler = ['bronz', 'gumus', 'altin', 'elmas'];
  seviyeler.forEach(seviye => {
    const grid = document.getElementById(`rozet-grid-${seviye}`);
    if (!grid) return;
    grid.innerHTML = rozetler.filter(r => r.seviye === seviye).map(r => {
      const k = kazanilanIds.has(r.id);
      return `<div class="rozet ${k ? 'kazanildi' : 'kazanilmadi'} rozet-${seviye}" title="${r.aciklama}${r.kilit && k ? '\n🔓 ' + kilitAciklamalari[r.kilit] : ''}">
        <span class="rozet-icon">${r.icon}</span>
        <span class="rozet-ad">${r.ad}</span>
        ${k && r.kilit ? `<span class="rozet-kilit-acik">🔓</span>` : ''}
        ${!k ? `<span class="rozet-hedef">${r.aciklama}</span>` : ''}
      </div>`;
    }).join('');
  });

  // Kilitleri güncelle
  const karanlikBtn = document.getElementById('btn-karanlik');
  if (karanlikBtn) {
    if (kazanilanKilitler.has('karanlik')) {
      karanlikBtn.classList.remove('kilitli');
      karanlikBtn.innerHTML = '<i class="ti ti-moon"></i> Karanlık Mod';
    }
  }

  // Kilit durumu göster
  const kilitDurum = document.getElementById('kilit-durum');
  const acikOzellikler = [...kazanilanKilitler].map(k => kilitAciklamalari[k]).filter(Boolean);
  if (acikOzellikler.length > 0) {
    kilitDurum.innerHTML = `<div class="acik-ozellikler">
      <span style="font-size:12px;color:var(--text2)">Açık özellikler:</span>
      ${acikOzellikler.map(o => `<span class="acik-ozellik">${o}</span>`).join('')}
    </div>`;
  } else {
    kilitDurum.innerHTML = '';
  }

  // Karanlık mod uygula
  if (kazanilanKilitler.has('karanlik') && veriAl('karanlikMod', false)) {
    document.body.classList.add('karanlik');
  }
}

function karanlikModToggle() {
  const kazanilanKilitler = new Set(rozetler.filter(r => r.kosul(istatistik) && r.kilit).map(r => r.kilit));
  if (!kazanilanKilitler.has('karanlik')) {
    alert('🔒 Bu özellik kilitli!\n\n"İlk Konu" rozetini kazan:\n→ Bir konuyu aç ve çalış');
    return;
  }
  const simdiki = veriAl('karanlikMod', false);
  veriKaydet('karanlikMod', !simdiki);
  document.body.classList.toggle('karanlik', !simdiki);
}

// ============================================
// KONULAR
// ===========function r=================================
function renderKonuGrid() {
  const etiketler = { gy: 'Genel Yetenek', gk: 'Genel Kültür', alan: 'Alan Bilgisi' };
  const liste = aktifFiltre === 'hepsi' ? konuVerisi : konuVerisi.filter(k => k.kategori === aktifFiltre);
  document.getElementById('konu-grid').innerHTML = liste.map(k => {
    const pct = ilerleme[k.id] || 0;
    return `<div class="konu-card" onclick="acKonuDetay('${k.id}')">
      <div class="konu-card-top">
        <div class="konu-icon ${k.kategori}"><i class="ti ${k.ikon}"></i></div>
        <h4>${k.baslik}</h4>
      </div>
      <span class="konu-tag ${k.kategori}">${etiketler[k.kategori]}</span>
      <p>${k.aciklama}</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function filterKonu(filtre, btn) {
  aktifFiltre = filtre;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderKonuGrid();
}

async function acKonuDetay(konuId) {
  const konu = konuVerisi.find(k => k.id === konuId);
  showPage('konu-detay');
  const alan = document.getElementById('konu-detay-icerik');
  const etiketler = { gy: 'Genel Yetenek', gk: 'Genel Kültür', alan: 'Alan Bilgisi' };
  alan.innerHTML = `<h1 class="detay-baslik">${konu.baslik}</h1>
    <p class="detay-meta">${etiketler[konu.kategori]}</p>
    <div class="yukleniyor"><div class="spinner"></div><span>AI konu anlatımı hazırlanıyor...</span></div>`;
  try {
    const icerik = await window.aiKonuAnlat(konu.baslik, konu.aciklama);
    alan.innerHTML = `<h1 class="detay-baslik">${konu.baslik}</h1>
      <p class="detay-meta">${etiketler[konu.kategori]} · AI ile hazırlandı</p>
      <div class="icerik-box">${icerik}</div>
      <button class="ai-btn" onclick="konuSorulariniYukle('${konuId}','${konu.baslik}')">
        <i class="ti ti-help-circle"></i> Bu Konudan Soru Çöz
      </button>
      <div id="konu-soru-alani" style="margin-top:1rem"></div>`;
    ilerleme[konuId] = Math.max(ilerleme[konuId] || 0, 30);
    veriKaydet('ilerleme', ilerleme);
    istatistikGuncelle('toplamKonu');
  } catch {
    alan.innerHTML += `<p style="color:var(--danger);padding:1rem">İçerik yüklenemedi. API anahtarını ekle.</p>`;
  }
}

async function konuSorulariniYukle(konuId, baslik) {
  const alan = document.getElementById('konu-soru-alani');
  alan.innerHTML = `<div class="yukleniyor"><div class="spinner"></div><span>Sorular hazırlanıyor...</span></div>`;
  try {
    const sorular = await window.aiSoruOlustur(baslik, 3);
    renderSorular(sorular, alan);
    ilerleme[konuId] = Math.min(100, (ilerleme[konuId] || 30) + 30);
    veriKaydet('ilerleme', ilerleme);
  } catch { alan.innerHTML = `<p style="color:var(--danger)">Sorular yüklenemedi.</p>`; }
}

// ============================================
// SORULAR
// ============================================
function renderSorular(sorular, hedef) {
  const harfler = ['A', 'B', 'C', 'D'];
  hedef.innerHTML = sorular.map((s, i) => `
    <div class="soru-kart" id="soru-${i}">
      <p class="soru-metin">${i + 1}. ${s.soru}</p>
      <div class="secenekler">
        ${s.secenekler.map((sec, j) => `
          <div class="secenek" onclick="cevapla(${i},${j},${s.dogru},'${encodeURIComponent(s.aciklama)}')">
            <span class="secenek-harf">${harfler[j]}</span><span>${sec}</span>
          </div>`).join('')}
      </div>
      <div class="aciklama-kutusu" id="aciklama-${i}"></div>
    </div>`).join('');
}

function cevapla(soruIdx, secIdx, dogruIdx, aciklamaEnc) {
  const kart = document.getElementById('soru-' + soruIdx);
  kart.querySelectorAll('.secenek').forEach(s => s.classList.add('pasif'));
  kart.querySelectorAll('.secenek')[secIdx].classList.add(secIdx === dogruIdx ? 'dogru' : 'yanlis');
  if (secIdx !== dogruIdx) kart.querySelectorAll('.secenek')[dogruIdx].classList.add('dogru');
  const kutu = document.getElementById('aciklama-' + soruIdx);
  kutu.textContent = decodeURIComponent(aciklamaEnc);
  kutu.className = 'aciklama-kutusu show ' + (secIdx === dogruIdx ? 'dogru-aciklama' : 'yanlis-aciklama');
  istatistikGuncelle('toplamSoru');
  if (secIdx === dogruIdx) istatistikGuncelle('dogruSoru');
}

async function soruKonuSec(konu, btn) {
  document.querySelectorAll('#page-sorular .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const alan = document.getElementById('soru-alani');

  // Önce çıkmış sorulara bak
  const konuMap = { 'genel': null, 'matematik': 'matematik', 'turkce': 'turkce', 'tarih': 'tarih', 'anayasa': 'anayasa' };
  const filtre = konuMap[konu];
  const mevcutSorular = filtre ? cikmisSorular.filter(s => s.konu === filtre) : cikmisSorular;

  if (mevcutSorular.length > 0) {
    alan.innerHTML = `<div style="margin-bottom:1rem;padding:8px 12px;background:var(--success-bg);border-radius:8px;font-size:13px;color:var(--success)">
      📚 Gerçek KPSS çıkmış sorular gösteriliyor
    </div>`;
    renderSorular(mevcutSorular.slice(0, 5), alan);
    return;
  }

  alan.innerHTML = `<div class="yukleniyor"><div class="spinner"></div><span>AI sorular üretiyor...</span></div>`;
  try {
    const sorular = await window.aiSoruOlustur('KPSS ' + konu, 5);
    renderSorular(sorular, alan);
  } catch { alan.innerHTML = `<p style="color:var(--danger);padding:1rem">Soru üretilemedi. API anahtarını kontrol et.</p>`; }
}

async function aiSoruUret() {
  const alan = document.getElementById('soru-alani');
  alan.innerHTML = `<div class="yukleniyor"><div class="spinner"></div><span>AI sorular üretiyor...</span></div>`;
  try {
    const sorular = await window.aiSoruOlustur('KPSS Genel Yetenek ve Genel Kültür karışık', 5);
    renderSorular(sorular, alan);
  } catch { alan.innerHTML = `<p style="color:var(--danger);padding:1rem">Soru üretilemedi.</p>`; }
}

function cikmisSoruTest(konu) {
  showPage('sorular');
  const alan = document.getElementById('soru-alani');
  const konuMap = { 'matematik': 'matematik', 'türkçe': 'turkce', 'geometri': 'matematik', 'tarih': 'tarih', 'coğrafya': 'cografya', 'vatandaşlık': 'anayasa' };
  const filtre = konuMap[konu.toLowerCase()] || konu;
  const sorular = cikmisSorular.filter(s => s.konu === filtre);
  if (!sorular.length) {
    alan.innerHTML = `<p style="color:var(--text2);padding:1rem">Bu ders için çıkmış soru bulunamadı.</p>`;
    return;
  }
  alan.innerHTML = `<div style="margin-bottom:1rem;padding:8px 12px;background:var(--success-bg);border-radius:8px;font-size:13px;color:var(--success)">
    📚 Gerçek KPSS çıkmış sorular (${sorular[0].ders})
  </div>`;
  renderSorular(sorular, alan);
}

// ============================================
// PRATİK TEST
// ============================================
async function pratikBaslat() {
  const konu = document.getElementById('pratik-konu').value;
  const adet = parseInt(document.getElementById('pratik-adet').value);
  const sure = parseInt(document.getElementById('pratik-sure').value);
  document.getElementById('pratik-giris').style.display = 'none';
  document.getElementById('pratik-sorular').style.display = 'block';
  document.getElementById('pratik-sonuc').style.display = 'none';
  document.getElementById('pratik-sorular').innerHTML = `<div class="yukleniyor"><div class="spinner"></div><span>Test hazırlanıyor...</span></div>`;
  if (sure > 0) {
    pratikSureKalan = sure * 60;
    document.getElementById('test-timer-box').style.display = 'flex';
    guncelleSure();
    pratikSureInterval = setInterval(() => { pratikSureKalan--; guncelleSure(); if (pratikSureKalan <= 0) pratikBitir(); }, 1000);
  }
  try {
    // Önce çıkmış sorulara bak
    const mevcutSorular = cikmisSorular.filter(s => s.konu === konu || konu === 'genel');
    if (mevcutSorular.length >= adet) {
      pratikSorular = mevcutSorular.sort(() => Math.random() - 0.5).slice(0, adet);
    } else {
      pratikSorular = await window.aiSoruOlustur('KPSS ' + konu, adet);
    }
    pratikCevaplar = new Array(pratikSorular.length).fill(null);
    renderPratikSorular();
  } catch {
    document.getElementById('pratik-sorular').innerHTML = `<p style="color:var(--danger)">Test yüklenemedi.</p>`;
  }
}

function guncelleSure() {
  const dk = Math.floor(pratikSureKalan / 60);
  const sn = pratikSureKalan % 60;
  document.getElementById('test-sure').textContent = `${String(dk).padStart(2,'0')}:${String(sn).padStart(2,'0')}`;
  if (pratikSureKalan <= 60) document.getElementById('test-sure').style.color = 'var(--danger)';
}

function renderPratikSorular() {
  const harfler = ['A', 'B', 'C', 'D'];
  document.getElementById('pratik-sorular').innerHTML = pratikSorular.map((s, i) => `
    <div class="soru-kart" id="pratik-soru-${i}">
      <p class="soru-metin">${i + 1}. ${s.soru}</p>
      <div class="secenekler">
        ${s.secenekler.map((sec, j) => `
          <div class="secenek" id="pratik-sec-${i}-${j}" onclick="pratikCevapla(${i},${j})">
            <span class="secenek-harf">${harfler[j]}</span><span>${sec}</span>
          </div>`).join('')}
      </div>
    </div>`).join('') +
    `<button class="ai-btn" style="margin-top:1rem" onclick="pratikBitir()">
      <i class="ti ti-flag-check"></i> Testi Bitir
    </button>`;
}

function pratikCevapla(soruIdx, secIdx) {
  pratikCevaplar[soruIdx] = secIdx;
  const kart = document.getElementById('pratik-soru-' + soruIdx);
  kart.querySelectorAll('.secenek').forEach((s, j) => { s.style.borderColor = j === secIdx ? 'var(--accent)' : ''; });
}

function pratikBitir() {
  if (pratikSureInterval) { clearInterval(pratikSureInterval); pratikSureInterval = null; }
  document.getElementById('test-timer-box').style.display = 'none';
  let dogru = 0, yanlis = 0, bos = 0;
  pratikSorular.forEach((s, i) => {
    const cevap = pratikCevaplar[i];
    if (cevap === null) { bos++; return; }
    if (cevap === s.dogru) dogru++; else yanlis++;
    const kart = document.getElementById('pratik-soru-' + i);
    if (kart) kart.querySelectorAll('.secenek').forEach((sec, j) => {
      sec.classList.add('pasif');
      if (j === s.dogru) sec.classList.add('dogru');
      else if (j === cevap && cevap !== s.dogru) sec.classList.add('yanlis');
    });
  });
  const net = (dogru - yanlis / 4).toFixed(2);
  document.getElementById('pratik-sonuc').style.display = 'block';
  document.getElementById('pratik-sonuc').innerHTML = `
    <div class="pratik-sonuc-box">
      <h3>Test Sonucu 🎉</h3>
      <div class="sonuc-grid">
        <div class="sonuc-kart yesil"><span class="sk-num">${dogru}</span><span class="sk-label">Doğru</span></div>
        <div class="sonuc-kart kirmizi"><span class="sk-num">${yanlis}</span><span class="sk-label">Yanlış</span></div>
        <div class="sonuc-kart mavi"><span class="sk-num">${net}</span><span class="sk-label">Net</span></div>
      </div>
      <p style="color:var(--text2);font-size:13px;margin-bottom:1rem">${bos} soru boş bırakıldı</p>
      <button class="ai-btn" onclick="pratikYenidenBaslat()"><i class="ti ti-refresh"></i> Yeni Test</button>
    </div>`;
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
  const filtre = document.getElementById('kart-filtre');
  filtre.innerHTML = Object.keys(flashKartlar).map(id => {
    const k = konuVerisi.find(x => x.id === id);
    return k ? `<button class="filter-btn" onclick="kartKonuSec('${id}',this)">${k.baslik}</button>` : '';
  }).join('');
  kartKonuSec(Object.keys(flashKartlar)[0], filtre.querySelector('.filter-btn'));
}

function kartKonuSec(konuId, btn) {
  document.querySelectorAll('#kart-filtre .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  aktifKartKonuId = konuId;
  aktifKartIndex = 0;
  document.getElementById('flashcard').classList.remove('flipped');
  showKart();
}

function showKart() {
  const kartlar = flashKartlar[aktifKartKonuId] || [];
  if (!kartlar.length) return;
  const kart = kartlar[aktifKartIndex];
  document.getElementById('kart-soru').textContent = kart.soru;
  document.getElementById('kart-cevap').textContent = kart.cevap;
  document.getElementById('kart-sayac').textContent = `Kart ${aktifKartIndex + 1} / ${kartlar.length}`;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('kart-sonuc').textContent = '';
}

function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }

function nextCard() {
  const kartlar = flashKartlar[aktifKartKonuId] || [];
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
const netYapisi = {
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
  document.querySelectorAll('.net-sinav-sec .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderNetGrid();
}

function renderNetGrid() {
  const yapi = netYapisi[netAktifSinav];
  document.getElementById('net-grid').innerHTML = yapi.map((bolum, bi) => `
    <div class="net-kart">
      <div class="net-kart-baslik"><span class="konu-tag ${bolum.tip}">${bolum.baslik}</span></div>
      <div class="net-baslik-row"><span>Ders</span><span>Doğru</span><span>Yanlış</span><span>Net</span></div>
      ${bolum.dersler.map((d, di) => `
        <div class="net-row">
          <label>${d.ad} <small style="color:var(--text2)">(/${d.toplam})</small></label>
          <input class="net-input" type="number" min="0" max="${d.toplam}" placeholder="0" id="net-d-${bi}-${di}" oninput="netHesapla()">
          <input class="net-input" type="number" min="0" max="${d.toplam}" placeholder="0" id="net-y-${bi}-${di}" oninput="netHesapla()">
          <span id="net-n-${bi}-${di}" style="font-size:13px;font-weight:500;color:var(--accent);text-align:center">0</span>
        </div>`).join('')}
    </div>`).join('');
  netHesapla();
}

function netHesapla() {
  const yapi = netYapisi[netAktifSinav];
  let gyNet = 0, gkNet = 0;
  yapi.forEach((bolum, bi) => {
    bolum.dersler.forEach((d, di) => {
      const dogru = parseFloat(document.getElementById(`net-d-${bi}-${di}`)?.value) || 0;
      const yanlis = parseFloat(document.getElementById(`net-y-${bi}-${di}`)?.value) || 0;
      const net = Math.max(0, dogru - yanlis / 4);
      const span = document.getElementById(`net-n-${bi}-${di}`);
      if (span) span.textContent = net.toFixed(2);
      if (bolum.tip === 'gy') gyNet += net; else gkNet += net;
    });
  });
  const toplam = gyNet + gkNet;
  const puan = (toplam * 1.6 + 40).toFixed(2);
  document.getElementById('ns-gy').textContent = gyNet.toFixed(2);
  document.getElementById('ns-gk').textContent = gkNet.toFixed(2);
  document.getElementById('ns-toplam').textContent = toplam.toFixed(2);
  document.getElementById('ns-puan').textContent = puan;
  document.getElementById('puan-fill').style.width = Math.min(100, parseFloat(puan) / 120 * 100) + '%';
  const p = parseFloat(puan);
  document.getElementById('puan-bilgi').textContent = p >= 70 ? `✅ Tebrikler! ${puan} puan — 70 barajını geçtiniz!` : p > 0 ? `⚠️ ${puan} puan — 70 barajına ${(70-p).toFixed(2)} puan eksik.` : 'Doğru/yanlış girerek puan tahmini yap';
}

function netKaydet() {
  const kayit = { tarih: new Date().toLocaleDateString('tr-TR'), sinav: netAktifSinav, gyNet: document.getElementById('ns-gy').textContent, gkNet: document.getElementById('ns-gk').textContent, toplam: document.getElementById('ns-toplam').textContent, puan: document.getElementById('ns-puan').textContent };
  netGecmis.unshift(kayit);
  if (netGecmis.length > 10) netGecmis.pop();
  veriKaydet('netGecmis', netGecmis);
  renderNetGecmis();
  function netKaydet() {
  const kayit = { tarih: new Date().toLocaleDateString('tr-TR'), sinav: netAktifSinav, gyNet: document.getElementById('ns-gy').textContent, gkNet: document.getElementById('ns-gk').textContent, toplam: document.getElementById('ns-toplam').textContent, puan: document.getElementById('ns-puan').textContent };
  netGecmis.unshift(kayit);
  if (netGecmis.length > 10) netGecmis.pop();
  veriKaydet('netGecmis', netGecmis);
  // Net rozeti için sayaç
  istatistik.toplamNet = (istatistik.toplamNet || 0) + 1;
  veriKaydet('istatistik', istatistik);
  renderNetGecmis();
  renderRozetler(); // Rozet güncelle
}
}

function renderNetGecmis() {
  const alan = document.getElementById('net-gecmis');
  if (!netGecmis.length) { alan.innerHTML = ''; return; }
  alan.innerHTML = `<h3>Geçmiş Sonuçlar</h3>` + netGecmis.map(k => `
    <div class="gecmis-item">
      <span>${k.sinav.toUpperCase()} · GY: ${k.gyNet} · GK: ${k.gkNet}</span>
      <span class="gecmis-puan">${k.puan} puan</span>
      <span class="gecmis-tarih">${k.tarih}</span>
    </div>`).join('');
}

// ============================================
// SÖZLÜK
// ============================================
function renderSozluk(arama = '', filtre = sozlukAktifFiltre) {
  const liste = sozlukVerisi.filter(s => {
    const aramaUyum = s.terim.toLowerCase().includes(arama.toLowerCase()) || s.anlam.toLowerCase().includes(arama.toLowerCase());
    const filtreUyum = filtre === 'hepsi' || s.kategori === filtre;
    return aramaUyum && filtreUyum;
  });
  document.getElementById('sozluk-liste').innerHTML = liste.length ? liste.map(s => `
    <div class="sozluk-kart" onclick="this.classList.toggle('acik')">
      <div class="sozluk-kart-top">
        <span class="sozluk-terim">${s.terim}</span>
        <span class="sozluk-kategori">${s.kategori}</span>
      </div>
      <p class="sozluk-anlam">${s.anlam}</p>
      <p class="sozluk-ornek">💡 Örnek: ${s.ornek}</p>
    </div>`).join('') : `<p style="color:var(--text2);padding:1rem">Sonuç bulunamadı.</p>`;
}

function sozlukAra(deger) { renderSozluk(deger, sozlukAktifFiltre); }

function sozlukFiltre(filtre, btn) {
  sozlukAktifFiltre = filtre;
  document.querySelectorAll('.sozluk-filtre .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSozluk(document.getElementById('sozluk-ara').value, filtre);
}

// ============================================
// POMODORO
// ============================================
let pomoSureler = { calisma: 25, kisa: 5, uzun: 15 };
let pomoAktifMod = 'calisma';
let pomoKalanSaniye = 25 * 60;
let pomoCalisiyor = false;
let pomoInterval = null;
let pomoTamamlanan = 0;
let pomoBugunSure = 0;

function pomoMod(mod, btn) {
  if (pomoCalisiyor) return;
  pomoAktifMod = mod;
  document.querySelectorAll('.pomo-mod').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  pomoKalanSaniye = pomoSureler[mod] * 60;
  pomoGuncelle();
  const durumlar = { calisma: 'Çalışma zamanı 📚', kisa: 'Kısa mola ☕', uzun: 'Uzun mola 🛋️' };
  document.getElementById('pomo-durum').textContent = durumlar[mod];
}

function pomoToggle() {
  pomoCalisiyor = !pomoCalisiyor;
  document.getElementById('pomo-icon').className = pomoCalisiyor ? 'ti ti-player-pause' : 'ti ti-player-play';
  if (pomoCalisiyor) {
    pomoInterval = setInterval(() => {
      pomoKalanSaniye--;
      pomoBugunSure++;
      istatistik.toplamSure = (istatistik.toplamSure || 0) + 1/60;
      pomoGuncelle();
      if (pomoKalanSaniye <= 0) pomoTamamlandi();
    }, 1000);
  } else clearInterval(pomoInterval);
}

function pomoGuncelle() {
  const dk = Math.floor(pomoKalanSaniye / 60);
  const sn = pomoKalanSaniye % 60;
  document.getElementById('pomo-zaman').textContent = `${String(dk).padStart(2,'0')}:${String(sn).padStart(2,'0')}`;
  const cevre = 2 * Math.PI * 88;
  const oran = 1 - pomoKalanSaniye / (pomoSureler[pomoAktifMod] * 60);
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
  const siradaki = pomoAktifMod === 'calisma' ? 'kisa' : 'calisma';
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
  const basari = istatistik.toplamSoru > 0 ? Math.round(istatistik.dogruSoru / istatistik.toplamSoru * 100) : 0;
  document.getElementById('istatistik-icerik').innerHTML = `
    <div class="ist-grid">
      <div class="ist-kart"><h4>Toplam Soru</h4><div class="ist-deger">${istatistik.toplamSoru}</div></div>
      <div class="ist-kart"><h4>Doğru Cevap</h4><div class="ist-deger" style="color:var(--success)">${istatistik.dogruSoru}</div></div>
      <div class="ist-kart"><h4>Başarı Oranı</h4><div class="ist-deger">%${basari}</div></div>
      <div class="ist-kart"><h4>Günlük Seri</h4><div class="ist-deger" style="color:#f97316">${istatistik.streak} 🔥</div></div>
      <div class="ist-kart"><h4>Pomodoro</h4><div class="ist-deger" style="color:var(--danger)">${istatistik.toplamPomodoro} 🍅</div></div>
      <div class="ist-kart"><h4>Çalışılan Konu</h4><div class="ist-deger">${istatistik.toplamKonu}</div></div>
      <div class="ist-kart"><h4>Çalışma Süresi</h4><div class="ist-deger">${Math.round(istatistik.toplamSure || 0)} dk</div></div>
      <div class="ist-kart"><h4>Kart Tekrarı</h4><div class="ist-deger">${istatistik.toplamKart}</div></div>
    </div>
    <p class="ist-section-title">Konu İlerlemesi</p>
    ${konuVerisi.map(k => `
      <div class="konu-ilerleme-item">
        <div class="konu-ilerleme-top">
          <span>${k.baslik}</span><small>%${ilerleme[k.id] || 0}</small>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${ilerleme[k.id] || 0}%"></div></div>
      </div>`).join('')}
    <p class="ist-section-title">Geçmiş Net Sonuçları</p>
    ${netGecmis.length ? netGecmis.map(k => `
      <div class="gecmis-item">
        <span>${k.sinav.toUpperCase()} · Net: ${k.toplam}</span>
        <span class="gecmis-puan">${k.puan} puan</span>
        <span class="gecmis-tarih">${k.tarih}</span>
      </div>`).join('') : '<p style="color:var(--text2);font-size:13px">Henüz net sonucu kaydedilmedi.</p>'}`;
}

// ============================================
// YOL HARİTASI
// ============================================
let yhTamamlanan = veriAl('yhTamamlanan', {});

function renderYolHaritasi() {
  const toplamUnite = yolHaritasi.reduce((t, d) => t + d.uniteler.length, 0);
  const tamamlanan = Object.values(yhTamamlanan).filter(Boolean).length;
  const yuzde = Math.round(tamamlanan / toplamUnite * 100);
  document.getElementById('yh-yuzde').textContent = '%' + yuzde;
  document.getElementById('yh-genel-fill').style.width = yuzde + '%';
  document.getElementById('yolharitasi-icerik').innerHTML = yolHaritasi.map(ders => {
    const dersTamamlanan = ders.uniteler.filter(u => yhTamamlanan[u.id]).length;
    const dersYuzde = Math.round(dersTamamlanan / ders.uniteler.length * 100);
    return `
      <div class="yh-ders-kart">
        <div class="yh-ders-baslik">
          <div class="konu-icon ${ders.renk}" style="width:36px;height:36px"><i class="ti ${ders.icon}"></i></div>
          <div class="yh-ders-info">
            <h3>${ders.ders}</h3>
            <span>${dersTamamlanan}/${ders.uniteler.length} ünite · ${ders.soruSayisi} soru · %${dersYuzde}</span>
          </div>
          <div class="yh-ders-yuzde">${dersYuzde}%</div>
        </div>
        <div class="progress-bar" style="margin:8px 0 12px"><div class="progress-fill" style="width:${dersYuzde}%"></div></div>
        <div class="yh-uniteler">
          ${ders.uniteler.map(u => `
            <div class="yh-unite ${yhTamamlanan[u.id] ? 'tamamlandi' : ''}" onclick="yhToggle('${u.id}')">
              <div class="yh-unite-sol">
                <div class="yh-checkbox ${yhTamamlanan[u.id] ? 'checked' : ''}">${yhTamamlanan[u.id] ? '<i class="ti ti-check"></i>' : ''}</div>
                <div>
                  <div class="yh-unite-ad">${u.ad}</div>
                  <div class="yh-unite-detay">${u.detay}</div>
                </div>
              </div>
              <span class="yh-oncelik ${u.oncelik}">${u.oncelik === 'yuksek' ? '🔴 Kritik' : u.oncelik === 'orta' ? '🟡 Orta' : '🟢 Düşük'}</span>
            </div>`).join('')}
        </div>
        <button class="yh-test-btn" onclick="cikmisSoruTest('${ders.ders}')">
          <i class="ti ti-writing"></i> Bu Dersten Çıkmış Sorular
        </button>
      </div>`;
  }).join('');
}
function yhToggle(uniteId) {
  yhTamamlanan[uniteId] = !yhTamamlanan[uniteId];
  veriKaydet('yhTamamlanan', yhTamamlanan);
  // Ünite rozeti için sayaç güncelle
  istatistik.toplamUnite = Object.values(yhTamamlanan).filter(Boolean).length;
  veriKaydet('istatistik', istatistik);
  renderYolHaritasi();
  renderRozetler();
}
// ============================================
// BAŞLAT
// ============================================
const kayitliSinav = veriAl('aktifSinav', 'lisans');
aktifSinav = kayitliSinav;
document.querySelectorAll('.sinav-btn').forEach((btn, i) => {
  const tipler = ['lisans', 'onlisans', 'ortaogretim'];
  if (tipler[i] === kayitliSinav) btn.classList.add('active');
  else btn.classList.remove('active');
});
geriSayimBaslat();
updateStats();
renderRozetler();
renderNetGecmis();