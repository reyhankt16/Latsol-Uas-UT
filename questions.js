window.QUIZ_DATA = [
{
"id": "aps",
"name": "Analisis & Perancangan Sistem",
"questions": [
{
"q": "Perbedaan utama antara class diagram dan ERD adalah ....",
"o": [
"entitas pada ERD memiliki operasi (method), sedangkan kelas hanya memiliki atribut",
"kelas pada class diagram memuat atribut dan operasi (perilaku), sedangkan entitas pada ERD hanya memuat atribut",
"class diagram tidak dapat menunjukkan relasi antarkelas",
"ERD hanya digunakan pada pendekatan berorientasi objek"
],
"a": 1,
"e": "Kelas memuat atribut, operasi, dan status; entitas ERD hanya memuat atribut."
},
{
"q": "Berikut ini merupakan prinsip yang perlu diperhatikan dalam pengembangan sistem, kecuali ....",
"o": [
"sistem dikembangkan untuk mendukung manajemen",
"sistem yang dikembangkan merupakan investasi modal yang besar",
"proses pengembangan sistem harus selalu dikerjakan berurutan tahap demi tahap",
"jangan takut membatalkan proyek bila terbukti tidak layak"
],
"a": 2,
"e": "Materi justru menyebut proses pengembangan sistem tidak harus dilakukan berurutan."
},
{
"q": "Pada SI Perpustakaan, pernyataan berikut yang merupakan kebutuhan fungsional adalah ....",
"o": [
"sistem dapat menghitung denda keterlambatan secara otomatis saat buku dikembalikan",
"sistem harus dapat dijalankan di browser Chrome dan Firefox",
"data anggota hanya dapat diakses oleh pustakawan yang telah login",
"tampilan sistem harus sesuai dengan identitas visual universitas"
],
"a": 0,
"e": "Menghitung denda adalah fungsi perangkat lunak. Tiga opsi lain (operasional, keamanan, budaya) adalah nonfungsional."
},
{
"q": "Menurut Jogiyanto (2008), studi kelayakan adalah ....",
"o": [
"studi untuk menentukan bahasa pemrograman dan DBMS yang akan digunakan",
"kegiatan pengujian program sebelum sistem diimplementasikan",
"penyusunan kamus data dan spesifikasi file sistem baru",
"studi untuk menentukan kemungkinan apakah pengembangan proyek sistem layak diteruskan atau dihentikan"
],
"a": 3,
"e": "Studi kelayakan menentukan apakah proyek layak diteruskan atau dihentikan."
},
{
"q": "Menurut BMP Modul 1, berikut ini merupakan sebutan lain untuk analis sistem, kecuali ....",
"o": [
"analis informasi (information analyst)",
"perancang sistem (systems designer)",
"konsultan sistem (systems consultant)",
"analis infrastruktur (infrastructure analyst)"
],
"a": 3,
"e": "Analis infrastruktur adalah peran tersendiri yang menangani perangkat keras, jaringan, dan basis data."
},
{
"q": "Berikut ini adalah tiga langkah utama proses analisis sistem menurut Dennis (2012), kecuali ....",
"o": [
"memahami kerja sistem yang sedang berjalan",
"menulis kode program dan menguji sistem baru",
"menentukan kebutuhan (persyaratan) untuk sistem baru",
"mengidentifikasi perbaikan atau penyempurnaan yang diharapkan"
],
"a": 1,
"e": "Pengkodean dan pengujian termasuk fase implementasi, bukan analisis."
},
{
"q": "Berikut ini yang termasuk metodologi pengembangan sistem melalui metode alternatif (Jogiyanto, 2010) adalah ....",
"o": [
"Waterfall, Spiral, dan RAD",
"Prototyping, Incremental, dan Agile Development",
"Paket, Outsourcing, dan End-User Development",
"Extreme Programming, Scrum, dan Paket"
],
"a": 2,
"e": "Metode alternatif adalah Paket, Outsourcing, dan End-User Development. Waterfall, RAD, Prototyping, Spiral, Incremental, dan Agile berbasis SDLC."
},
{
"q": "Konsep berorientasi objek yang mengemas data (atribut) dan proses (method) dalam satu objek serta menyembunyikan detail internalnya dari objek lain disebut ....",
"o": [
"inheritance",
"polimorfisme",
"enkapsulasi dan penyembunyian informasi",
"pengikatan dinamis"
],
"a": 2,
"e": "Enkapsulasi menyatukan data dan proses; information hiding menyembunyikan cara kerja internal objek."
},
{
"q": "Pada arsitektur klien-server, pembagian tanggung jawab yang tepat adalah ....",
"o": [
"klien bertanggung jawab atas penyimpanan data, sedangkan server atas logika presentasi",
"klien bertanggung jawab atas logika presentasi, server atas logika akses data dan penyimpanan data, sedangkan logika aplikasi dapat di klien, server, atau keduanya",
"server menjalankan keempat fungsi dasar, sedangkan klien hanya berfungsi sebagai terminal masukan/keluaran",
"klien menjalankan logika presentasi, aplikasi, dan akses data, sedangkan server hanya menyimpan data"
],
"a": 1,
"e": "Klien-server: presentasi di klien, akses dan penyimpanan data di server, logika aplikasi bisa di keduanya."
},
{
"q": "Berikut ini merupakan alasan perlunya pengembangan sistem menurut materi, kecuali ....",
"o": [
"terdapat permasalahan yang timbul pada sistem lama",
"untuk meraih kesempatan (peluang) yang ada",
"adanya instruksi dari pimpinan atau pihak luar organisasi",
"sistem lama sudah menggunakan aplikasi basis data berbasis komputer"
],
"a": 3,
"e": "Alasan pengembangan sistem hanya tiga: ada masalah pada sistem lama, meraih kesempatan, dan adanya instruksi."
},
{
"q": "Pada use case diagram SI Perpustakaan, use case \"Hitung Denda\" hanya dijalankan jika anggota terlambat saat menjalankan use case \"Kembalikan Buku\". Relasi yang tepat antara kedua use case tersebut adalah ....",
"o": [
"«include»",
"«extend»",
"generalisasi",
"asosiasi biasa"
],
"a": 1,
"e": "«extend» untuk perilaku opsional atau bersyarat; «include» untuk perilaku yang selalu dijalankan."
},
{
"q": "Bagian antarmuka pengguna yang merupakan cara pengguna memberikan instruksi kepada sistem tentang apa yang harus dilakukan (misalnya tombol dan menu) disebut ....",
"o": [
"mekanisme masukan",
"mekanisme keluaran",
"mekanisme navigasi",
"mekanisme penyimpanan"
],
"a": 2,
"e": "Tiga bagian antarmuka: navigasi (tombol, menu), masukan (formulir), dan keluaran (laporan)."
},
{
"q": "Relasi Anggota dan Buku pada SI Perpustakaan bersifat banyak-ke-banyak (M:N). Saat ERD ditransformasikan ke diagram relasi, langkah yang tepat adalah ....",
"o": [
"menambahkan primary key Anggota sebagai foreign key di tabel Buku",
"membuat tabel baru (misalnya Peminjaman) yang memuat primary key Anggota dan Buku sebagai foreign key",
"menggabungkan tabel Anggota dan Buku menjadi satu tabel",
"menghapus entitas Buku agar relasi menjadi 1:1"
],
"a": 1,
"e": "Relasi M:N dipecah menjadi tabel penghubung berisi primary key kedua tabel sebagai foreign key."
},
{
"q": "Diagram yang menggambarkan berbagai status yang dilalui oleh satu objek selama hidupnya sebagai respons terhadap peristiwa (event) adalah ....",
"o": [
"activity diagram",
"sequence diagram",
"object diagram",
"behavioral state machine diagram"
],
"a": 3,
"e": "Behavioral state machine menunjukkan status satu objek dan transisinya akibat event."
},
{
"q": "Activity diagram mendukung perilaku paralel. Node kontrol yang digunakan untuk memecah satu alur menjadi beberapa alur yang berjalan bersamaan adalah ....",
"o": [
"decision node",
"merge node",
"fork node",
"final-flow node"
],
"a": 2,
"e": "Fork memecah alur menjadi beberapa alur paralel; join menyatukannya kembali."
},
{
"q": "Analis yang berfokus pada masalah bisnis di sekitar sistem, misalnya mengidentifikasi nilai bisnis yang dihasilkan sistem serta merancang proses dan kebijakan baru, dan paling aktif pada fase analisis, adalah ....",
"o": [
"Analis Sistem",
"Analis Infrastruktur",
"Analis Bisnis",
"Analis Manajemen Perubahan"
],
"a": 2,
"e": "Analis bisnis mewakili sponsor dan pengguna akhir, fokus pada nilai bisnis, dan paling aktif di fase analisis."
},
{
"q": "Empat fungsi dasar perangkat lunak yang menjadi dasar desain arsitektur sistem adalah ....",
"o": [
"penyimpanan data, logika akses data, logika aplikasi, dan logika presentasi",
"input, proses, output, dan umpan balik",
"komputer klien, server, jaringan, dan basis data",
"perencanaan, analisis, desain, dan implementasi"
],
"a": 0,
"e": "Semua perangkat lunak terbagi atas penyimpanan data, logika akses data, logika aplikasi, dan logika presentasi."
},
{
"q": "Ciri diagram konteks (context diagram) dalam DFD adalah ....",
"o": [
"menampilkan seluruh simpanan data yang digunakan sistem",
"menggambarkan seluruh sistem sebagai satu proses beserta entitas luar dan arus data yang masuk/keluar",
"menampilkan rincian proses hingga level 2",
"menunjukkan logika keputusan dan perulangan dalam sistem"
],
"a": 1,
"e": "Diagram konteks menggambarkan seluruh sistem sebagai satu proses beserta entitas luar dan arus datanya."
},
{
"q": "Penilaian kelayakan yang menjawab pertanyaan \"dapatkah kita membangun sistem ini?\" dengan mempertimbangkan keakraban dengan area fungsional, keakraban dengan teknologi, dan ukuran proyek adalah ....",
"o": [
"kelayakan ekonomi",
"kelayakan organisasional",
"kelayakan teknis",
"kelayakan jadwal"
],
"a": 2,
"e": "Kelayakan teknis menilai risiko teknis proyek. Kelayakan ekonomi menjawab \"haruskah kita membangunnya?\"."
},
{
"q": "Menurut Dennis (2012), setiap pendekatan berorientasi objek dalam pengembangan sistem informasi harus memiliki sifat-sifat berikut, kecuali ....",
"o": [
"use case driven",
"architecture centric",
"iterative dan incremental",
"berpusat pada proses dan dikerjakan secara berurutan (sequential)"
],
"a": 3,
"e": "Tiga sifat pendekatan OO: use case driven, architecture centric, serta iterative dan incremental."
},
{
"q": "Tiga elemen dasar ERD sebagai bahasa pemodelan data adalah ....",
"o": [
"entitas, atribut, dan relasi",
"proses, arus data, dan simpanan data",
"kelas, objek, dan pesan",
"aktor, use case, dan batas sistem"
],
"a": 0,
"e": "Elemen dasar ERD adalah entitas, atribut, dan relasi."
},
{
"q": "Pernyataan yang tepat mengenai perbedaan DFD logika (LDFD) dan DFD fisik (PDFD) adalah ....",
"o": [
"DFD logika menekankan proses apa yang ada di sistem, sedangkan DFD fisik menekankan bagaimana proses sistem diterapkan",
"DFD logika menekankan bagaimana proses diterapkan, sedangkan DFD fisik menekankan proses apa yang ada di sistem",
"DFD logika hanya untuk sistem manual, sedangkan DFD fisik hanya untuk sistem terkomputerisasi",
"DFD fisik tidak menggunakan simpanan data"
],
"a": 0,
"e": "DFD logika fokus pada proses apa yang ada; DFD fisik fokus pada cara proses diterapkan."
},
{
"q": "Urutan fase siklus hidup pengembangan sistem (SDLC) secara umum yang tepat adalah ....",
"o": [
"Analisis – Desain – Perencanaan – Implementasi – Pemeliharaan",
"Analisis – Perencanaan – Desain – Implementasi – Pemeliharaan",
"Perencanaan – Desain – Analisis – Implementasi – Pemeliharaan",
"Perencanaan – Analisis – Desain – Implementasi – Pemeliharaan"
],
"a": 3,
"e": "SDLC berjalan dari perencanaan sampai pemeliharaan. Bila masalah kritis tidak teratasi, siklus kembali ke perencanaan."
},
{
"q": "Pada DFD Level 0 SI Perpustakaan, arus data berikut yang TIDAK sesuai aturan DFD adalah ....",
"o": [
"Anggota → 1.0 Mencatat Peminjaman",
"1.0 Mencatat Peminjaman → D2 Data Peminjaman",
"D1 Data Buku → 3.0 Membuat Laporan",
"Anggota → D1 Data Buku (langsung, tanpa melalui proses)"
],
"a": 3,
"e": "Entitas luar tidak boleh langsung mengakses simpanan data. Arus data harus melewati proses."
},
{
"q": "Diagram interaksi yang menekankan pengurutan berbasis waktu dari pesan-pesan yang dikirim antarobjek dalam satu use case adalah ....",
"o": [
"communication diagram",
"sequence diagram",
"class diagram",
"activity diagram"
],
"a": 1,
"e": "Sequence diagram menekankan urutan waktu pesan antarobjek dalam satu use case."
},
{
"q": "Pernyataan kebutuhan \"Katalog online perpustakaan harus dapat diakses 24 jam dan menampilkan hasil pencarian dalam waktu kurang dari 3 detik\" termasuk jenis kebutuhan ....",
"o": [
"fungsional",
"nonfungsional",
"bisnis",
"sistem"
],
"a": 1,
"e": "Ketersediaan dan waktu respons adalah karakteristik sistem (operasional dan kinerja), jadi nonfungsional."
},
{
"q": "Dalam SDLC, desain masukan, basis data, dan proses diturunkan dari keluaran yang dikehendaki, sehingga perubahan proses bisnis berdampak ke seluruh bagian sistem. Kelemahan SDLC ini disebut ....",
"o": [
"hanya memenuhi kebutuhan manajemen tingkat bawah",
"pemodelan proses yang tidak dinamis",
"perancangan yang tidak fleksibel",
"dokumentasi yang tidak standar"
],
"a": 2,
"e": "Perancangan berbasis keluaran membuat SDLC tidak fleksibel (Avison & Fitzgerald, 2006). Dokumentasi standar justru kelebihan SDLC."
},
{
"q": "Strategi akuisisi sistem yang membutuhkan sumber daya internal paling sedikit, yaitu dengan mempekerjakan vendor eksternal, pengembang, atau penyedia layanan untuk membuat atau memasok sistem, adalah ....",
"o": [
"pengembangan kustom",
"paket",
"outsourcing",
"end-user development"
],
"a": 2,
"e": "Outsourcing menyerahkan pembuatan atau penyediaan sistem ke pihak luar, termasuk lewat ASP."
},
{
"q": "Object diagram pada dasarnya adalah ....",
"o": [
"diagram yang menggambarkan urutan pesan antarobjek",
"instansiasi dari seluruh atau sebagian class diagram dengan seperangkat nilai atribut tertentu",
"diagram yang menggambarkan perubahan status suatu objek",
"pengganti use case diagram pada tahap desain"
],
"a": 1,
"e": "Object diagram adalah instansiasi class diagram dengan nilai atribut tertentu."
},
{
"q": "Berikut ini merupakan kriteria untuk memilih metodologi pengembangan sistem, kecuali ....",
"o": [
"kejelasan kebutuhan pengguna",
"keakraban dengan teknologi",
"visibilitas jadwal",
"ketersediaan paket perangkat lunak di pasaran"
],
"a": 3,
"e": "Enam kriterianya: kejelasan kebutuhan, keakraban teknologi, kompleksitas, keandalan, kerangka waktu, dan visibilitas jadwal."
},
{
"q": "Communication diagram lebih tepat digunakan daripada sequence diagram ketika analis ingin ....",
"o": [
"melihat urutan waktu pengiriman pesan secara rinci",
"menggambarkan atribut dan operasi setiap kelas",
"memahami objek apa saja yang berkolaborasi dan aliran pesan di antara objek-objek tersebut",
"memodelkan perubahan status satu objek selama hidupnya"
],
"a": 2,
"e": "Communication diagram menekankan objek yang berkolaborasi dan aliran pesannya; urutan waktu memakai sequence diagram."
},
{
"q": "Perancang menu SI Perpustakaan memberi label yang jelas pada setiap perintah dan menonaktifkan tombol yang tidak relevan. Hal ini menerapkan prinsip desain navigasi ....",
"o": [
"mencegah pengguna melakukan kesalahan",
"menyederhanakan pemulihan dari kesalahan",
"menggunakan urutan tata bahasa yang konsisten",
"meminimalkan keystroke"
],
"a": 0,
"e": "Kesalahan dicegah dengan memberi label perintah dan membatasi pilihan."
},
{
"q": "Pada activity diagram, aliran yang menunjukkan objek aktual yang masuk atau keluar dari suatu action dan digambarkan dengan garis putus-putus disebut ....",
"o": [
"control flow",
"object flow",
"swimlane",
"merge node"
],
"a": 1,
"e": "Object flow bergaris putus-putus; control flow bergaris padat dan memodelkan jalur eksekusi."
},
{
"q": "Menurut Dennis (2012), setelah diagram konteks dibuat, langkah berikutnya dalam menyusun DFD adalah ....",
"o": [
"mengembangkan DFD level 1",
"membuat fragmen DFD untuk setiap use case",
"memvalidasi set DFD",
"menyusun fragmen menjadi DFD level 0"
],
"a": 1,
"e": "Urutannya: diagram konteks, fragmen DFD per use case, DFD level 0, DFD level 1, lalu validasi."
},
{
"q": "Pustakawan memindai barcode pada buku dan kartu anggota sehingga data peminjaman langsung tercatat tanpa diketik ulang. Hal ini menerapkan prinsip desain masukan ....",
"o": [
"menangkap data langsung pada sumbernya",
"mengelola beban informasi",
"menggunakan urutan tata bahasa yang konsisten",
"meminimalkan bias pada laporan"
],
"a": 0,
"e": "Barcode menangkap data langsung pada sumbernya sehingga tidak perlu diketik ulang."
},
{
"q": "Berikut ini yang merupakan keterbatasan DFD menurut materi adalah ....",
"o": [
"tidak dapat menggambarkan entitas luar yang berinteraksi dengan sistem",
"tidak dapat didekomposisi menjadi level yang lebih rinci",
"tidak dapat menunjukkan proses keputusan, perulangan (loop), dan proses perhitungan",
"tidak dapat menggambarkan simpanan data"
],
"a": 2,
"e": "DFD tidak menunjukkan logika keputusan, perulangan, dan perhitungan."
},
{
"q": "Relasi Penerbit dan Buku bersifat satu-ke-banyak (1:M): satu penerbit menerbitkan banyak buku. Saat ditransformasikan ke diagram relasi, langkah yang tepat adalah ....",
"o": [
"primary key Penerbit menjadi foreign key di tabel Buku",
"primary key Buku menjadi foreign key di tabel Penerbit",
"membuat tabel penghubung baru antara Penerbit dan Buku",
"menggabungkan tabel Penerbit dan Buku"
],
"a": 0,
"e": "Pada relasi 1:M, primary key di sisi \"satu\" menjadi foreign key di sisi \"banyak\"."
},
{
"q": "SI Perpustakaan menerima data mahasiswa aktif dari Sistem Informasi Akademik kampus. Pada DFD, Sistem Informasi Akademik digambarkan sebagai ....",
"o": [
"proses",
"entitas luar",
"simpanan data",
"arus data"
],
"a": 1,
"e": "Entitas luar bisa berupa sistem lain di luar batas sistem yang berinteraksi langsung dengannya."
},
{
"q": "Perpustakaan membeli lisensi perangkat lunak otomasi perpustakaan yang sudah tersedia di pasaran, memasangnya di server sendiri, lalu menyesuaikan beberapa pengaturan. Strategi akuisisi ini adalah ....",
"o": [
"pengembangan kustom",
"paket",
"outsourcing",
"Application Service Provider (ASP)"
],
"a": 1,
"e": "Paket adalah perangkat lunak jadi di pasaran yang dibeli lalu disesuaikan. ASP menghosting aplikasi di pihak vendor."
},
{
"q": "Proyek SI Perpustakaan memiliki kebutuhan pengguna yang belum jelas dan akan memakai teknologi yang belum dikuasai tim IT. Berdasarkan kriteria pemilihan metodologi (Dennis, 2012), metodologi yang paling tepat adalah ....",
"o": [
"Waterfall",
"V-Model",
"Waterfall Paralel",
"Throwaway Prototyping"
],
"a": 3,
"e": "Throwaway prototyping unggul untuk kebutuhan yang belum jelas dan teknologi yang belum familiar."
},
{
"q": "Perancang antarmuka SI Perpustakaan memastikan anggota dapat mencapai halaman perpanjangan pinjaman dari menu utama maksimal dalam tiga kali klik. Hal ini menerapkan prinsip ....",
"o": [
"estetika",
"penyadaran konten (content awareness)",
"konsistensi",
"meminimalkan upaya pengguna"
],
"a": 3,
"e": "Prinsip tiga kali klik termasuk meminimalkan upaya pengguna."
},
{
"q": "Pesan hitungDenda() dikirim ke objek Mahasiswa dan objek Dosen, tetapi masing-masing menjalankan cara perhitungan yang berbeda. Konsep ini disebut ....",
"o": [
"polimorfisme",
"enkapsulasi",
"agregasi",
"instansiasi"
],
"a": 0,
"e": "Polimorfisme: pesan yang sama ditafsirkan berbeda oleh kelas objek yang berbeda."
},
{
"q": "Pernyataan \"SI Perpustakaan dikembangkan dengan bahasa pemrograman PHP dan basis data MySQL\" termasuk jenis kebutuhan ....",
"o": [
"kebutuhan bisnis",
"kebutuhan pengguna",
"kebutuhan fungsional",
"kebutuhan sistem"
],
"a": 3,
"e": "Kebutuhan sistem menjelaskan bagaimana sistem harus dibangun."
},
{
"q": "Desain arsitektur terutama mengalir dari kebutuhan berikut, kecuali ....",
"o": [
"kebutuhan kinerja",
"kebutuhan keamanan",
"kebutuhan budaya dan politik",
"kebutuhan fungsional"
],
"a": 3,
"e": "Desain arsitektur bersumber dari kebutuhan nonfungsional: operasional, kinerja, keamanan, serta budaya dan politik."
},
{
"q": "Menurut Nugroho (2004), ERD dan diagram relasi masing-masing merupakan model data ....",
"o": [
"konseptual dan logik",
"logik dan fisik",
"fisik dan konseptual",
"eksternal dan internal"
],
"a": 0,
"e": "Nugroho menyebut ERD model konseptual dan diagram relasi model logik; Dennis (2012) menyebut ERD model logik."
},
{
"q": "Bagian deskripsi use case yang memuat skenario utama dan skenario alternatif yang dilakukan aktor adalah ....",
"o": [
"bagian informasi umum",
"bagian aliran peristiwa",
"kondisi awal",
"pemicu (trigger)"
],
"a": 1,
"e": "Deskripsi use case terdiri atas informasi umum (nama, ID, aktor, pemicu, kondisi) dan aliran peristiwa (skenario)."
},
{
"q": "Sekelompok metodologi yang berfokus pada penyederhanaan SDLC dengan mengurangi pemodelan dan dokumentasi, mengutamakan interaksi langsung dengan pengguna, dan setiap iterasinya mencakup perencanaan hingga dokumentasi adalah ....",
"o": [
"Waterfall",
"V-Model",
"Agile Development",
"Waterfall Paralel"
],
"a": 2,
"e": "Agile menyederhanakan SDLC. Tiap iterasi berisi fase lengkap dari perencanaan sampai dokumentasi."
},
{
"q": "Teknik elisitasi yang mengumpulkan pengguna, manajer, dan analis dalam sesi kelompok terstruktur yang dipandu fasilitator untuk menentukan kebutuhan sistem disebut ....",
"o": [
"kuesioner",
"observasi",
"analisis dokumen",
"Joint Application Development (JAD)"
],
"a": 3,
"e": "JAD adalah sesi kelompok terstruktur dengan fasilitator dan keterlibatan pengguna yang tinggi."
},
{
"q": "Pada activity diagram proses peminjaman buku, analis ingin memisahkan aktivitas yang dilakukan Anggota, Pustakawan, dan Sistem ke dalam kolom-kolom tanggung jawab. Elemen yang digunakan adalah ....",
"o": [
"swimlane",
"object node",
"merge node",
"lifeline"
],
"a": 0,
"e": "Swimlane membagi activity diagram menjadi kolom tanggung jawab per pelaku."
},
{
"q": "Kegiatan yang memastikan bahwa kebutuhan yang telah didefinisikan benar-benar menggambarkan sistem yang diinginkan pengguna disebut ....",
"o": [
"elisitasi kebutuhan",
"dekomposisi fungsional",
"validasi kebutuhan",
"spesifikasi program"
],
"a": 2,
"e": "Validasi kebutuhan mencegah biaya pengerjaan ulang yang besar bila kesalahan baru ketahuan saat pengembangan."
},
{
"q": "Dalam class diagram, relasi generalisasi (pewarisan) digambarkan dengan ....",
"o": [
"garis putus-putus dengan panah terbuka menuju subclass",
"garis padat dengan belah ketupat (diamond) berongga di sisi kelas \"keseluruhan\"",
"garis padat tanpa panah antara dua kelas",
"garis padat dari subclass dengan panah segitiga berongga yang menunjuk ke superclass"
],
"a": 3,
"e": "Generalisasi digambar dengan garis padat dan panah segitiga berongga ke superclass. Belah ketupat berongga adalah agregasi."
},
{
"q": "Menurut studi Standish Group yang dikutip Dennis (2012), penyebab utama kegagalan proyek teknologi informasi adalah ....",
"o": [
"kurangnya keterlibatan pengguna dalam fase analisis kebutuhan",
"keterbatasan kapasitas perangkat keras",
"pemilihan bahasa pemrograman yang keliru",
"kurangnya dokumentasi pada fase pemeliharaan"
],
"a": 0,
"e": "Kurangnya keterlibatan pengguna saat analisis kebutuhan adalah penyebab utama kegagalan proyek TI."
},
{
"q": "Penamaan proses yang benar dalam DFD adalah ....",
"o": [
"Data Peminjaman",
"Pustakawan",
"Mencatat Peminjaman Buku",
"File Anggota"
],
"a": 2,
"e": "Nama proses diawali kata kerja dan diakhiri kata benda."
},
{
"q": "Kelas Mahasiswa dan Dosen memakai atribut nama dan alamat dari kelas Anggota tanpa mendefinisikannya ulang. Konsep berorientasi objek ini disebut ....",
"o": [
"inheritance",
"enkapsulasi",
"polimorfisme",
"pengikatan dinamis"
],
"a": 0,
"e": "Inheritance: subclass mewarisi atribut dan operasi superclass."
},
{
"q": "Pernyataan berikut yang sesuai dengan pedoman menggambar bagan alir adalah ....",
"o": [
"bagan alir digambar dari bawah ke atas dan dimulai dari sisi kanan halaman",
"titik awal dan titik akhir kegiatan tidak perlu ditunjukkan agar ringkas",
"boleh memakai simbol buatan sendiri asalkan diberi keterangan",
"kegiatan yang terpotong dan disambung di tempat lain ditunjukkan dengan simbol penghubung (connector)"
],
"a": 3,
"e": "Kegiatan yang terpotong memakai simbol penghubung. Bagan alir digambar dari atas ke bawah, mulai dari kiri."
},
{
"q": "Dokumen yang hanya mencantumkan kebutuhan fungsional dan nonfungsional dalam format garis besar disebut ....",
"o": [
"pernyataan definisi kebutuhan",
"dokumen studi kelayakan",
"permintaan sistem (system request)",
"kamus data"
],
"a": 0,
"e": "Pernyataan definisi kebutuhan menjelaskan apa yang harus dilakukan sistem baru dalam format garis besar."
},
{
"q": "Bagan alir yang menunjukkan arus laporan dan formulir, termasuk tembusan-tembusannya, disebut ....",
"o": [
"bagan alir sistem",
"bagan alir dokumen",
"bagan alir program",
"bagan alir skematik"
],
"a": 1,
"e": "Bagan alir dokumen (form/paperwork flowchart) menunjukkan arus formulir dan tembusannya."
},
{
"q": "Pada state machine diagram objek Buku, kondisi \"Tersedia\", \"Dipinjam\", dan \"Rusak\" disebut ....",
"o": [
"state",
"event",
"transisi",
"action"
],
"a": 0,
"e": "State adalah keadaan objek pada suatu waktu; event memicu transisi antar-state."
},
{
"q": "Menurut CHAOS Report Standish Group tahun 2009, persentase proyek sistem informasi yang bermasalah (terlambat, melebihi anggaran, dan fungsionalitas tidak sepenuhnya terwujud) adalah ....",
"o": [
"24%",
"32%",
"44%",
"56%"
],
"a": 2,
"e": "CHAOS Report 2009: 32% proyek berhasil, 44% bermasalah, 24% gagal."
},
{
"q": "Berikut ini dapat digambarkan sebagai simpanan data (data store) pada DFD, kecuali ....",
"o": [
"basis data anggota di komputer",
"arsip kartu peminjaman manual",
"buku agenda pengunjung perpustakaan",
"formulir peminjaman yang diserahkan anggota kepada pustakawan"
],
"a": 3,
"e": "Formulir yang berpindah dari anggota ke pustakawan adalah arus data, bukan data yang disimpan."
},
{
"q": "Objek Peminjaman pada SI Perpustakaan memiliki status Aktif, Terlambat, dan Selesai. Perpindahan dari status \"Aktif\" ke \"Terlambat\" karena tanggal jatuh tempo terlewati dimodelkan dalam state machine diagram sebagai ....",
"o": [
"transisi yang dipicu oleh suatu event",
"lifeline",
"execution occurrence",
"swimlane"
],
"a": 0,
"e": "Perpindahan antar-state adalah transisi yang dipicu event, di sini lewatnya tanggal jatuh tempo."
},
{
"q": "Atribut \"umur\" pada kelas Anggota dihitung dari tanggal lahir sehingga tidak perlu disimpan. Atribut seperti ini disebut ....",
"o": [
"atribut turunan (derived attribute)",
"atribut kunci",
"atribut multinilai",
"operasi"
],
"a": 0,
"e": "Atribut turunan dihitung dari atribut lain sehingga tidak disimpan."
},
{
"q": "Langkah pertama yang dilakukan manajer proyek dalam membuat rencana proyek adalah ....",
"o": [
"menyusun daftar tugas sebagai dasar rencana kerja",
"memilih metodologi pengembangan yang sesuai dengan karakteristik proyek",
"memperkirakan jangka waktu berdasarkan ukuran sistem",
"memantau proyek dan merevisi estimasi"
],
"a": 1,
"e": "Urutannya: pilih metodologi, perkirakan jangka waktu, susun rencana kerja, lalu pantau dan revisi estimasi."
},
{
"q": "Menurut prinsip pengalaman pengguna (user experience), hal yang paling dipentingkan pengguna pemula dan pengguna ahli secara berturut-turut adalah ....",
"o": [
"kemudahan belajar; kemudahan penggunaan",
"kemudahan penggunaan; kemudahan belajar",
"estetika; konsistensi",
"konsistensi; estetika"
],
"a": 0,
"e": "Pemula mementingkan kemudahan belajar; pengguna ahli mementingkan kemudahan penggunaan."
},
{
"q": "Kelas Panitia Pengadaan Buku tersusun atas kelas Pustakawan dan kelas Dosen Perwakilan. Relasi yang paling tepat antara Panitia Pengadaan Buku dan kedua kelas tersebut adalah ....",
"o": [
"generalisasi",
"agregasi",
"«extend»",
"transisi"
],
"a": 1,
"e": "Agregasi dipakai ketika sebuah kelas tersusun dari kelas-kelas lain."
},
{
"q": "Notasi berikut dapat digunakan untuk menggambar ERD, kecuali ....",
"o": [
"IDEF1X",
"Chen",
"Crow's Foot",
"Gane & Sarson"
],
"a": 3,
"e": "Notasi ERD: IDEF1X, Chen, dan Crow's Foot. Gane & Sarson adalah notasi DFD."
},
{
"q": "Analis perlu mengumpulkan pendapat ribuan mahasiswa dan dosen di beberapa kampus tentang layanan perpustakaan dengan biaya rendah. Teknik elisitasi yang paling tepat adalah ....",
"o": [
"wawancara mendalam",
"kuesioner",
"Joint Application Development (JAD)",
"observasi"
],
"a": 1,
"e": "Kuesioner menjangkau banyak responden yang tersebar dengan biaya rendah."
},
{
"q": "Berikut ini merupakan langkah membuat communication diagram, kecuali ....",
"o": [
"menentukan konteks (ruang lingkup)",
"mengidentifikasi objek dan asosiasi antarobjek yang berkolaborasi",
"menambahkan pesan",
"menempatkan lifeline dan execution occurrence"
],
"a": 3,
"e": "Lifeline dan execution occurrence adalah langkah membuat sequence diagram."
},
{
"q": "Pembagian satu server fisik menjadi beberapa server virtual yang lebih kecil dengan bantuan perangkat lunak disebut ....",
"o": [
"cloud computing",
"virtualisasi server",
"arsitektur berbasis klien",
"Application Service Provider"
],
"a": 1,
"e": "Virtualisasi server mempartisi server fisik menjadi beberapa lingkungan virtual."
},
{
"q": "Menurut Tantra (2012), suatu proyek dinyatakan tidak layak apabila ....",
"o": [
"proyek membutuhkan biaya investasi yang besar",
"proyek menggunakan teknologi yang baru",
"proyek hanya menghasilkan produk atau jasa yang berfungsi satu kali, atau hanya menambah panjang birokrasi",
"proyek melibatkan banyak pengguna dari berbagai unit"
],
"a": 2,
"e": "Tantra (2012) menyebut proyek tidak layak bila hasilnya hanya berfungsi sekali atau tidak bermanfaat selain menambah birokrasi."
},
{
"q": "Strategi analisis kebutuhan yang membandingkan total waktu pengerjaan setiap langkah proses dengan total waktu keseluruhan proses untuk menemukan ketidakefisienan disebut ....",
"o": [
"analisis akar penyebab",
"analisis durasi",
"benchmarking informal",
"penghapusan aktivitas"
],
"a": 1,
"e": "Analisis durasi: selisih waktu yang besar menandakan banyak waktu tunggu atau proses terfragmentasi."
},
{
"q": "Pada sequence diagram, garis putus-putus vertikal di bawah objek/aktor yang menunjukkan keberadaan objek selama interaksi disebut ....",
"o": [
"lifeline",
"execution occurrence",
"message",
"guard condition"
],
"a": 0,
"e": "Lifeline menunjukkan keberadaan objek selama interaksi berlangsung."
},
{
"q": "Unified Modeling Language (UML) dikembangkan oleh ... dan distandarkan oleh ....",
"o": [
"Grady Booch, Ivar Jacobson, dan James Rumbaugh; Object Management Group (OMG)",
"Edward Yourdon dan Tom DeMarco; ISO",
"Peter Chen; IEEE",
"Chris Gane dan Trish Sarson; OMG"
],
"a": 0,
"e": "UML dibuat Booch, Jacobson, dan Rumbaugh lalu distandarkan OMG. Yourdon/DeMarco dan Gane-Sarson adalah tokoh notasi DFD."
},
{
"q": "Diagram yang menunjukkan semua antarmuka dalam sistem (layar, formulir, dan laporan) serta bagaimana antarmuka tersebut saling terhubung disebut ....",
"o": [
"sequence diagram",
"data flow diagram (DFD)",
"interface structure diagram (ISD)",
"diagram konteks"
],
"a": 2,
"e": "ISD mendefinisikan struktur dasar antarmuka; dari ISD analis menyusun standar, template, lalu prototipe."
},
{
"q": "Pada sequence diagram, pesan kirimNotifikasiDenda() hanya dikirim bila kondisi [status = terlambat] terpenuhi. Bagian [status = terlambat] disebut ....",
"o": [
"lifeline",
"execution occurrence",
"guard condition",
"object node"
],
"a": 2,
"e": "Guard condition adalah syarat yang harus dipenuhi agar pesan dikirim."
},
{
"q": "Ruang lingkup dan sasaran proyek sistem perlu didefinisikan kembali oleh tim analis karena sebelumnya ditentukan oleh pihak lain, yaitu ....",
"o": [
"pemrogram aplikasi",
"vendor perangkat lunak",
"pengguna akhir (end user)",
"staf perencana sistem"
],
"a": 3,
"e": "Ruang lingkup dan sasaran ditetapkan staf perencana sistem tanpa tim analis, jadi analis perlu memahaminya ulang."
},
{
"q": "Walaupun beberapa CASE tool dapat mentransformasikan ERD ke diagram relasi secara otomatis, analis tetap perlu memahami prosedur manualnya. Alasan berikut benar, kecuali ....",
"o": [
"CASE tidak dapat memodelkan data kompleks seperti relasi ternary dan supertype/subtype",
"terdapat beberapa alternatif transformasi sehingga perlu dipilih yang paling efektif",
"hasil transformasi oleh CASE kadang perlu diuji secara manual",
"transformasi manual selalu lebih cepat dan bebas kesalahan dibanding CASE"
],
"a": 3,
"e": "Nugroho (2004) memberi tiga alasan; tidak ada klaim bahwa cara manual selalu lebih cepat atau bebas salah."
},
{
"q": "Dalam analisis kelayakan organisasional, eksekutif tingkat atas (biasanya bukan dari departemen SI) yang memprakarsai dan mempromosikan proyek serta menyediakan dukungan sumber daya disebut ....",
"o": [
"project champion",
"system users",
"organizational management",
"manajer proyek"
],
"a": 0,
"e": "Champion adalah pendukung utama yang memprakarsai proyek dan menyediakan sumber daya."
},
{
"q": "Berikut ini termasuk jenis control node pada activity diagram, kecuali ....",
"o": [
"initial node",
"join node",
"object node",
"final-flow node"
],
"a": 2,
"e": "Object node memodelkan objek, bukan alur kontrol. Tujuh control node: initial, final-activity, final-flow, decision, merge, fork, join."
},
{
"q": "Diagram UML 2.0 berikut yang termasuk kelompok structure diagram adalah ....",
"o": [
"use case diagram",
"activity diagram",
"deployment diagram",
"sequence diagram"
],
"a": 2,
"e": "Deployment termasuk structure diagram. Use case, activity, dan sequence termasuk behavior diagram."
}
]
},
{
"id": "avd",
"name": "Analisis & Visualisasi Data",
"questions": [
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 50  Siswa 6 : 90\nSiswa 2 : 87  Siswa 7 : 50\nSiswa 3 : 85  Siswa 8 : 55\nSiswa 4 : 70  Siswa 9 : 45\nSiswa 5 : 80  Siswa 10 : 65\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai rata-rata mata kuliah Visualisasi Data adalah ....",
"o": [
"57,7",
"67,7",
"78,2",
"88,2"
],
"a": 1,
"e": "Jumlah = 677 → 677 / 10 = 67,7."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 60  Siswa 6 : 90\nSiswa 2 : 80  Siswa 7 : 60\nSiswa 3 : 90  Siswa 8 : 50\nSiswa 4 : 70  Siswa 9 : 50\nSiswa 5 : 80  Siswa 10 : 70\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai rata-rata mata kuliah Visualisasi Data adalah ....",
"o": [
"60",
"65",
"69",
"70"
],
"a": 3,
"e": "Jumlah = 700 → 700 / 10 = 70."
},
{
"q": "Diketahui hasil penjualan di Toko A rata-rata sebesar Rp. 100.000.000 dengan simpangan baku sebesar 2.000.000. Sedangkan Toko B memiliki rata-rata penjualan sebesar Rp. 150.000.000 dengan simpangan baku sebesar 3.000.000. Koefisien keragaman hasil penjualan Toko A dan Toko B adalah ....",
"o": [
"CV Toko A = 1% dan CV Toko B = 2%",
"CV Toko A = 2% dan CV Toko B = 2%",
"CV Toko A = 2% dan CV Toko B = 1,5%",
"CV Toko A = 1% dan CV Toko B = 1,6%"
],
"a": 1,
"e": "CV = (s / x̄ ) × 100%. A: 2jt/100jt = 2%. B: 3jt/150jt = 2%."
},
{
"q": "Diketahui kelas A memiliki nilai rata-rata mata kuliah Analisis Data 9 dengan simpangan baku sebesar 2. Pada mata kuliah yang sama, kelas B memiliki rata-rata sebesar 6 dengan simpangan baku sebesar 3. Koefisien keragaman kelas A dan kelas B adalah ....",
"o": [
"CV A = 22,2% dan CV B = 50%",
"CV A = 50% dan CV B = 22,5%",
"CV A = 450% dan CV B = 50%",
"CV A = 450% dan CV B = 200%"
],
"a": 0,
"e": "A: 2/9 = 22,2%. B: 3/6 = 50%."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 120  Siswa 6 : 100\nSiswa 2 : 125  Siswa 7 : 105\nSiswa 3 : 105  Siswa 8 : 100\nSiswa 4 : 115  Siswa 9 : 115\nSiswa 5 : 125  Siswa 10 : 120\nPada tabel tersebut berisi data terkait dengan hasil tes IQ dari 10 siswa. Berdasarkan data tersebut, simpangan baku dari data tersebut adalah ....",
"o": [
"√86",
"√100",
"√115",
"√120"
],
"a": 0,
"e": "x̄ = 1130/10 = 113. Σ(x − x̄ )² = 49+144+64+4+144+169+64+169+4+49 = 860. Ragam = 86 → s = √86."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 170  Siswa 6 : 169\nSiswa 2 : 173  Siswa 7 : 170\nSiswa 3 : 165  Siswa 8 : 180\nSiswa 4 : 175  Siswa 9 : 167\nSiswa 5 : 160  Siswa 10 : 171\nPada tabel tersebut berisi data tinggi badan 10 siswa. Berdasarkan data tersebut, simpangan baku dari data tersebut adalah ....",
"o": [
"√25",
"√26",
"√27",
"√28"
],
"a": 2,
"e": "x̄ = 170. Σ(x − x̄ )² = 270 → ragam = 270/10 = 27 → simpangan baku = √27."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 6   Siswa 6 : 9\nSiswa 2 : 8   Siswa 7 : 6\nSiswa 3 : 9   Siswa 8 : 5\nSiswa 4 : 7   Siswa 9 : 5\nSiswa 5 : 8   Siswa 10 : 7\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai median pada kumpulan nilai mata kuliah Visualisasi Data adalah ....",
"o": [
"6",
"6,5",
"6,9",
"7"
],
"a": 3,
"e": "Urut: 5,5,6,6,7,7,8,8,9,9 → (7+7)/2 = 7."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 6   Siswa 6 : 9\nSiswa 2 : 8   Siswa 7 : 5\nSiswa 3 : 8   Siswa 8 : 5\nSiswa 4 : 7   Siswa 9 : 5\nSiswa 5 : 8   Siswa 10 : 6\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai median pada kumpulan nilai mata kuliah Visualisasi Data adalah ....",
"o": [
"6",
"6,5",
"6,7",
"7"
],
"a": 1,
"e": "Urut: 5,5,5,6,6,7,8,8,8,9 → (6+7)/2 = 6,5."
},
{
"q": "Perhatikan tabel di bawah ini!\nKelompok 1    Kelompok 2                    Kelompok 3\n                                            Siswa 11 : 76\nSiswa 1 : 73  Siswa 6 : 77                  Siswa 12 : 77\nSiswa 2 : 80  Siswa 7 : 75                  Siswa 13 : 76\n                                            Siswa 14 : 74\nSiswa 3 : 73  Siswa 8 : 76                  Siswa 15 : 77\nSiswa 4 : 73  Siswa 9 : 74\nSiswa 5 : 81  Siswa 10 : 78\nPada tabel tersebut terdapat 3 kelompok data dengan perolehan nilai mata kuliah Visualisasi Data. Kelompok data yang memiliki data homogen adalah ....",
"o": [
"kelompok 1, memiliki rata-rata 76 dan nilai keragaman 13,6",
"kelompok 2, memiliki rata-rata 76 dan nilai keragaman 2",
"kelompok 3, memiliki rata-rata 76 dan nilai keragaman 1,2",
"kelompok 3, memiliki rata-rata 76 dan nilai keragaman 0,8"
],
"a": 2,
"e": "Rata-rata ketiganya sama (76), jadi yang paling homogen adalah ragam terkecil. Ragam: K1 = 68/5 = 13,6; K2 = 10/5 = 2; K3 = 6/5 = 1,2."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 6    Siswa 6 : 9\nSiswa 2 : 8    Siswa 7 : 5\nSiswa 3 : 8    Siswa 8 : 5\nSiswa 4 : 7    Siswa 9 : 5\nSiswa 5 : 7    Siswa 10 : 6\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai modus mata kuliah Visualisasi Data adalah ....",
"o": [
"5",
"6",
"7",
"8"
],
"a": 0,
"e": "5 muncul 3x (paling sering)."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 75   Siswa 6 : 76\nSiswa 2 : 76   Siswa 7 : 75\nSiswa 3 : 79   Siswa 8 : 72\nSiswa 4 : 72   Siswa 9 : 72\nSiswa 5 : 79   Siswa 10 : 74\nPada tabel tersebut berisi data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Keragaman nilai pada mata kuliah Visualisasi Data adalah ....",
"o": [
"0,4",
"4,8",
"6,2",
"7,6"
],
"a": 2,
"e": "x̄ = 750/10 = 75. Σ(x − x̄ )² = 0+1+16+9+16+1+0+9+9+1 = 62. Ragam = 62/10 = 6,2."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 170  Siswa 6 : 169\nSiswa 2 : 173  Siswa 7 : 170\nSiswa 3 : 165  Siswa 8 : 180\nSiswa 4 : 175  Siswa 9 : 167\nSiswa 5 : 160  Siswa 10 : 171\nPada tabel tersebut berisi data tinggi badan 10 siswa. Berdasarkan data tersebut, keragaman dari data tersebut adalah ....",
"o": [
"25",
"26",
"27",
"28"
],
"a": 2,
"e": "x̄ = 1700/10 = 170. Σ(x − x̄ )² = 0+9+25+25+100+1+0+100+9+1 = 270. Ragam = 270/10 = 27."
},
{
"q": "Perhatikan tabel di bawah ini!\nSiswa 1 : 6   Siswa 6 : 9\nSiswa 2 : 8   Siswa 7 : 6\nSiswa 3 : 9   Siswa 8 : 5\nSiswa 4 : 8   Siswa 9 : 5\nSiswa 5 : 8   Siswa 10 : 6\nPada tabel tersebut terdapat data 10 siswa dengan perolehan nilai mata kuliah Visualisasi Data. Nilai modus mata kuliah Visualisasi Data adalah ....",
"o": [
"5",
"6",
"8",
"6 dan 8"
],
"a": 3,
"e": "6 muncul 3x dan 8 muncul 3x (sama banyak) → bimodal: 6 dan 8."
},
{
"q": "Perhatikan tabel di bawah ini!\nKelompok 1    Kelompok 2            Kelompok 3\n                                    Siswa 11 : 86\nSiswa 1 : 85  Siswa 6 : 85          Siswa 12 : 87\n                                    Siswa 13 : 86\nSiswa 2 : 81  Siswa 7 : 75          Siswa 14 : 84\n                                    Siswa 15 : 88\nSiswa 3 : 85  Siswa 8 : 84\nSiswa 4 : 81  Siswa 9 : 84\nSiswa 5 : 81  Siswa 10 : 75\nPada tabel tersebut terdapat 3 kelompok data dengan perolehan nilai mata kuliah Visualisasi Data. Jika simpangan baku pada data kelompok 1 = 1,96, simpangan baku pada data kelompok 2 = 4,58 dan simpangan baku pada data kelompok 3 = 1,33. Kelompok data yang memiliki data homogen adalah ....",
"o": [
"kelompok 1, memiliki rata-rata 82,6 dan nilai koefisien keragaman 2,37",
"kelompok 2, memiliki rata-rata 80,6 dan nilai koefisien keragaman 5,68",
"kelompok 3, memiliki rata-rata 86,2 dan nilai koefisien keragaman 1,54",
"kelompok 2, memiliki rata-rata 80,6 dan nilai koefisien keragaman 1,8"
],
"a": 2,
"e": "CV = s/x̄ × 100%. K1 = 1,96/82,6 = 2,37%; K2 = 4,58/80,6 = 5,68%; K3 = 1,33/86,2 = 1,54%. CV terkecil = paling homogen."
},
{
"q": "Ukuran yang digunakan untuk menganalisis pemencaran, penyimpangan atau keragaman suatu kelompok data, adalah ukuran ....",
"o": [
"penyebaran data",
"pemusatan data",
"rata-rata data",
"jangkauan data"
],
"a": 0,
"e": "Pemencaran/penyimpangan/keragaman = ukuran penyebaran (dispersi)."
},
{
"q": "Istilah terhadap varian data yang memiliki kesamaan varian dari sisaan untuk semua pengamatan adalah ....",
"o": [
"transformasi data",
"heteroskedastisitas",
"distribusi data",
"homoskedastisitas"
],
"a": 3,
"e": "Varian sisaan sama = homoskedastisitas (kebalikannya heteroskedastisitas)."
},
{
"q": "Pernyataan berikut yang bukan masalah yang ditimbulkan ketika terdapat data hilang pada suatu penelitian adalah ....",
"o": [
"data yang hilang dapat menyebabkan bias dalam estimasi parameter",
"ketiadaan data pengamatan akan mengurangi kekuatan statistik pada pengujian hipotesis",
"data hilang dapat meningkatkan keterwakilan sampel sehingga memperkuat generalisasi dari hasil",
"adanya data hilang dapat meningkatkan galat baku dan menyebabkan kesimpulan menjadi tidak valid"
],
"a": 2,
"e": "Data hilang justru mengurangi keterwakilan sampel, bukan meningkatkan."
},
{
"q": "Dalam analisis regresi, variabel yang berperan sebagai faktor penyebab atau yang mempengaruhi variabel lain disebut ....",
"o": [
"variabel dependen (Y)",
"variabel independen (X)",
"variabel terikat",
"variabel kontrol"
],
"a": 1,
"e": "Variabel penyebab/yang memengaruhi = variabel bebas (independen, X)."
},
{
"q": "Pada tahap pra-pemrosesan data teks, kalimat \"Visualisasi data sangat membantu analisis\" dipecah menjadi unit \"visualisasi\", \"data\", \"sangat\", \"membantu\", \"analisis\". Proses ini disebut ....",
"o": [
"stemming",
"penghapusan stop words",
"normalisasi teks",
"tokenisasi"
],
"a": 3,
"e": "Memecah teks menjadi unit terkecil (kata atau kalimat) = tokenisasi."
},
{
"q": "Aplikasi visualisasi data interaktif dengan R Shiny minimal terdiri atas dua komponen utama, yaitu ....",
"o": [
"ui dan server",
"input dan library",
"ggplot dan plotly",
"data frame dan vektor"
],
"a": 0,
"e": "ui mengatur tampilan, server berisi logika pengolahan. Keduanya dijalankan dengan shinyApp(ui, server)."
},
{
"q": "Nilai yang dipandang dapat menggambarkan ukuran data yang berkaitan dengan letak (lokasi), adalah ukuran ....",
"o": [
"penyebaran data",
"pemusatan data",
"keragaman data",
"jangkauan data"
],
"a": 1,
"e": "Ukuran letak/lokasi = ukuran pemusatan (mean, median, modus)."
},
{
"q": "Sekumpulan data yang grafiknya membentuk lonceng dan simetris dengan nilai rata- ratanya ....",
"o": [
"distribusi data normal",
"transformasi data",
"distribusi data tidak normal",
"homoskedastisitas"
],
"a": 0,
"e": "Kurva lonceng simetris terhadap rata-rata = distribusi normal."
},
{
"q": "Dampak yang ditimbulkan ketika terdapat data hilang adalah ....",
"o": [
"galat baku yang dihasilkan semakin mengecil dan nilai statistik hitungnya akan cenderung mengecil",
"galat baku yang dihasilkan semakin mengecil dan nilai statistik hitungnya akan cenderung membesar",
"galat baku yang dihasilkan semakin membesar dan nilai statistik hitungnya akan cenderung mengecil",
"galat baku yang dihasilkan semakin membesar dan nilai statistik hitungnya akan cenderung membesar"
],
"a": 2,
"e": "Sampel berkurang → galat baku membesar. Statistik hitung = estimasi / galat baku, jadi nilainya mengecil."
},
{
"q": "Metode yang digunakan untuk menentukan hubungan sebab-akibat antara satu variabel dengan satu atau beberapa variabel lainnya adalah ....",
"o": [
"transformasi",
"regresi",
"visualisasi",
"scatter"
],
"a": 1,
"e": "Hubungan sebab-akibat antarvariabel dianalisis dengan regresi."
},
{
"q": "Kata-kata umum seperti \"dan\", \"atau\", dan \"tetapi\" dibuang dari korpus karena tidak memiliki makna penting untuk analisis. Tahap pra-pemrosesan ini disebut ....",
"o": [
"penghapusan stop words",
"tokenisasi",
"stemming",
"n-grams"
],
"a": 0,
"e": "Kata umum tanpa makna signifikan disebut stop words; membuangnya termasuk pra-pemrosesan."
},
{
"q": "Pada R Shiny, grafik yang dibuat di server dengan renderPlot() ditampilkan pada ui menggunakan fungsi ....",
"o": [
"selectInput()",
"tableOutput()",
"renderPlotly()",
"plotOutput()"
],
"a": 3,
"e": "Fungsi render*() di server berpasangan dengan *Output() di ui: renderPlot() dengan plotOutput()."
},
{
"q": "Jika jenis data yang diamati berupa numerik, distribusi data tidak simetris, maka ukuran pemusatan data yang digunakan adalah ....",
"o": [
"nilai rata-rata",
"nilai median",
"nilai modus",
"nilai jangkauan"
],
"a": 1,
"e": "Median tidak terpengaruh nilai ekstrem, jadi cocok untuk distribusi miring."
},
{
"q": "Sekumpulan data yang diamati memiliki pola tertentu yang diplotkan, pola ini dinamakan sebaran atau distribusi data. Sebaran data diklasifikasi sebagai sebaran normal jika memenuhi sifat-sifat berikut, kecuali ....",
"o": [
"grafiknya selalu berada di bawah sumbu x",
"bentuknya simetris pada x = μ",
"mempunyai satu modus yaitu x = μ",
"luas grafiknya sama dengan satu unit persegi"
],
"a": 0,
"e": "Kurva normal selalu berada di atas sumbu x, jadi pernyataan A salah."
},
{
"q": "Implikasi yang ditimbulkan ketika terdapat data hilang pada suatu penelitian adalah ....",
"o": [
"tidak menyebabkan bias dalam estimasi parameter dan meningkatkan galat baku",
"tidak menyebabkan bias dalam estimasi parameter dan mengurangi galat baku",
"dapat menyebabkan bias dalam estimasi parameter dan meningkatkan galat baku",
"dapat menyebabkan bias dalam estimasi parameter dan mengurangi galat baku"
],
"a": 2,
"e": "Data hilang bisa membuat estimasi bias dan galat baku naik."
},
{
"q": "Garis regresi dengan metode kuadrat terkecil (least square) adalah garis yang ....",
"o": [
"melalui semua titik data pengamatan",
"memaksimalkan nilai korelasi antara x dan y",
"meminimalkan jumlah deviasi mendatar titik data terhadap garis",
"meminimalkan jumlah kuadrat deviasi vertikal titik data terhadap garis"
],
"a": 3,
"e": "Least square memilih garis dengan jumlah kuadrat selisih vertikal (y − ŷ)² paling kecil."
},
{
"q": "Kata \"bermain\", \"permainan\", dan \"dimainkan\" diubah ke bentuk dasar \"main\" agar dihitung sebagai satu kata yang sama. Teknik pra-pemrosesan yang digunakan adalah ....",
"o": [
"normalisasi teks",
"tokenisasi",
"stemming",
"bigram"
],
"a": 2,
"e": "Mengembalikan kata ke bentuk dasar = stemming (atau lemmatization). Normalisasi hanya menyeragamkan format, misalnya huruf kecil."
},
{
"q": "Pada aplikasi Shiny, komponen yang memungkinkan pengguna memilih variabel yang ingin divisualisasikan melalui daftar pilihan (dropdown) adalah ....",
"o": [
"selectInput()",
"renderPrint()",
"verbatimTextOutput()",
"fluidPage()"
],
"a": 0,
"e": "selectInput() membuat dropdown pilihan. fluidPage() hanya mengatur tata letak halaman."
},
{
"q": "Bentuk penyajian data ini berfungsi untuk melihat perbandingan (dalam persentase atau proporsi). Bentuk penyajian ini juga merepresentasikan distribusi frekuensi relatif dari data kualitatif maupun data kuantitatif yang telah dikelompokkan. Bentuk penyajian data tersebut adalah ....",
"o": [
"pie chart",
"scatter plot",
"tabel frekuensi",
"bar graph"
],
"a": 0,
"e": "Perbandingan persentase/proporsi bagian dari keseluruhan = diagram lingkaran (pie chart)."
},
{
"q": "Diketahui kondisi hilangnya pengamatan pada variabel penelitian sebagai berikut: I. Tidak terisinya pengamatan pada variabel penghasilan pada suatu survei penelitian dikarenakan responden tidak ingin mengisinya II. Data hilang pada variabel tertentu dapat diduga berdasarkan data lengkap pada variabel lainnya Berdasarkan kondisi-kondisi tersebut, pernyataan berikut yang benar adalah ....",
"o": [
"kedua kondisi tersebut merupakan contoh MCAR",
"kedua kondisi tersebut merupakan contoh MAR",
"kondisi I merupakan contoh MCAR sedangkan kondisi II merupakan contoh MAR",
"kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR"
],
"a": 1,
"e": "Kondisi II jelas MAR (bisa diduga dari variabel lain). Kondisi I jelas bukan MCAR karena ada alasannya, bukan kebetulan. Jadi dari pilihan yang ada, jawabannya B. (Secara teori murni, menolak mengisi penghasilan bisa dianggap MNAR, tapi MNAR tidak ada di pilihan.)"
},
{
"q": "Sekumpulan data yang diamati memiliki pola tertentu yang diplotkan, pola ini dinamakan sebaran atau distribusi data. Sebaran data diklasifikasi sebagai sebaran normal jika memenuhi sifat-sifat berikut, kecuali ....",
"o": [
"Luas grafiknya sama dengan satu unit persegi, kira-kira 28% luasnya berada diantara daerah μ − σ dan μ + σ",
"Luas grafiknya sama dengan satu unit persegi, kira-kira 68% luasnya berada diantara daerah μ − σ dan μ + σ",
"Luas grafiknya sama dengan satu unit persegi, kira-kira 95% luasnya berada diantara daerah μ − 2σ dan μ + 2σ",
"Luas grafiknya sama dengan satu unit persegi, kira-kira 99% luasnya berada diantara daerah μ − 3σ dan μ + 3σ"
],
"a": 0,
"e": "Aturan empiris 68–95–99,7: daerah μ ± σ ≈ 68%, bukan 28%."
},
{
"q": "Perhatikan tabel di bawah ini!\nx  1  2  3  4                            5\ny  3  5  7  8                            12\nDengan metode kuadrat terkecil, persamaan garis regresi y = ax + b (a = kemiringan, b = konstanta) untuk data tersebut adalah ....",
"o": [
"y = 0,7x + 2,1",
"y = 2,1x + 7",
"y = 2,5x − 0,5",
"y = 2,1x + 0,7"
],
"a": 3,
"e": "Σx = 15, Σy = 35, Σxy = 126, Σx² = 55. a = (5·126 − 15·35)/(5·55 − 15²) = 105/50 = 2,1. b = (35 − 2,1·15)/5 = 0,7."
},
{
"q": "Visualisasi data teks yang menampilkan kata-kata paling sering muncul dalam korpus, dengan ukuran huruf setiap kata sebanding dengan frekuensinya, adalah ....",
"o": [
"bigram network",
"heatmap",
"bar plot frekuensi",
"word cloud"
],
"a": 3,
"e": "Ukuran kata menunjukkan frekuensi = word cloud. Bar plot juga menampilkan frekuensi, tapi lewat panjang batang."
},
{
"q": "Berikut ini merupakan ciri visualisasi data interaktif, kecuali ....",
"o": [
"pengguna dapat memilih variabel atau jenis grafik yang ditampilkan",
"detail nilai muncul saat kursor diarahkan ke titik data (hover)",
"tampilan grafik tetap dan tidak berubah oleh masukan pengguna",
"pengguna dapat memperbesar (zoom) atau memfilter data"
],
"a": 2,
"e": "Grafik yang tidak merespons masukan pengguna adalah grafik statis, bukan interaktif."
},
{
"q": "Bentuk penyajian data ini berfungsi untuk melihat distribusi atau perbandingan nilai, frekuensi, atau persentase di setiap kategori. Sumbu vertikal berupa nilai/frekuensi/persentase, dimana lebar tiap batang sama dengan interval kelas dan tinggi batang sesuai dengan nilai/frekuensi/persentase tiap kelas. Bentuk penyajian data tersebut adalah ....",
"o": [
"pie chart",
"scatter plot",
"tabel frekuensi",
"bar graph"
],
"a": 3,
"e": "Kata kuncinya \"batang\" → diagram batang (bar graph)."
},
{
"q": "Sekumpulan data yang diamati memiliki pola tertentu yang diplotkan, pola ini dinamakan sebaran atau distribusi data. Sebaran data diklasifikasi sebagai sebaran normal jika memenuhi sifat-sifat berikut, kecuali ....",
"o": [
"grafiknya selalu berada di atas sumbu x",
"bentuknya asimetris pada x = μ",
"mempunyai satu modus yaitu x = μ",
"luas grafiknya sama dengan satu unit persegi"
],
"a": 1,
"e": "Kurva normal simetris pada x = μ, jadi \"asimetris\" salah."
},
{
"q": "Diketahui kondisi hilangnya pengamatan pada variabel penelitian sebagai berikut: I. Data hilang pada variabel tertentu dapat diduga berdasarkan data lengkap pada variabel lainnya II. Tidak terisinya pengamatan pada variabel penghasilan pada suatu survei penelitian karena adanya kerusakan pada sistem entri data Berdasarkan kasus diatas, pernyataan berikut yang benar adalah ....",
"o": [
"kedua kondisi tersebut merupakan contoh MCAR",
"kedua kondisi tersebut merupakan contoh MAR",
"kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR",
"kondisi I merupakan contoh MCAR sedangkan kondisi II merupakan contoh MAR"
],
"a": 2,
"e": "I = MAR (bisa diduga dari variabel lain). II = MCAR (rusaknya sistem tidak terkait nilai datanya, murni acak)."
},
{
"q": "Penjualan suatu perusahaan (miliar rupiah) dimodelkan dengan garis regresi y = 9,1t + 6,2, dengan t = tahun − 2019. Estimasi penjualan pada tahun 2025 adalah ....",
"o": [
"51,7 miliar",
"54,6 miliar",
"60,8 miliar",
"69,9 miliar"
],
"a": 2,
"e": "t = 2025 − 2019 = 6 → y = 9,1 × 6 + 6,2 = 60,8 miliar rupiah."
},
{
"q": "Seorang analis ingin melihat pasangan kata yang sering muncul berdampingan dalam ulasan pelanggan, misalnya \"pengiriman cepat\" dan \"harga murah\", dalam bentuk jaringan simpul dan garis. Visualisasi yang tepat adalah ....",
"o": [
"word cloud",
"bigram network",
"histogram skor sentimen",
"heatmap distribusi kata"
],
"a": 1,
"e": "Hubungan dua kata yang berdekatan (bigram) digambarkan sebagai jaringan = bigram network."
},
{
"q": "Pada bagian server aplikasi Shiny, fungsi yang membuat suatu objek (misalnya data hasil filter) dihitung ulang secara otomatis setiap kali input pengguna berubah adalah ....",
"o": [
"library()",
"read_excel()",
"summary()",
"reactive()"
],
"a": 3,
"e": "reactive() membuat ekspresi reaktif yang otomatis diperbarui saat input berubah."
},
{
"q": "Pada bentuk penyajian data yang menyajikan nilai kumulatif umumnya nilai data disajikan dalam sumbu horizontal dan sumbu vertikal merepresentasikan frekuensi kumulatif. Bentuk penyajian data tersebut adalah ....",
"o": [
"pie chart",
"scatter plot",
"bar graph",
"ogive"
],
"a": 3,
"e": "Grafik frekuensi kumulatif = ogive."
},
{
"q": "Jika diketahui suatu persamaan regresi hasil transformasi data adalah y = 0,946 − 0,097 ln x, dimana nilai x adalah 7, maka nilai y adalah ....",
"o": [
"0,846",
"0,864",
"0,946",
"0,964"
],
"a": 1,
"e": "Kunci soal memakai log basis 10: log 7 = 0,845 → y = 0,946 − 0,097 × 0,845 = 0,864. (Kalau pakai ln asli hasilnya 0,757, tidak ada di pilihan.)"
},
{
"q": "Diketahui kondisi hilangnya pengamatan pada variabel penelitian sebagai berikut: I. Tidak terisinya pengamatan pada variabel pengeluaran pada suatu survei penelitian, namun data tersebut dapat diprediksi berdasarkan pekerjaan, tingkat pendapatan, jumlah tanggungan keluarga dan sebagainya II. Tidak terisinya pengamatan pada variabel jenis pekerjaan pada suatu survei penelitian karena adanya kerusakan pada sistem entri data Berdasarkan kasus diatas, pernyataan berikut yang benar adalah ....",
"o": [
"kedua kondisi tersebut merupakan contoh MCAR",
"kedua kondisi tersebut merupakan contoh MAR",
"kondisi I merupakan contoh MAR sedangkan kondisi II merupakan contoh MCAR",
"kondisi I merupakan contoh MCAR sedangkan kondisi II merupakan contoh MAR"
],
"a": 2,
"e": "I = MAR (bisa diprediksi dari variabel lain). II = MCAR (kerusakan sistem)."
},
{
"q": "Model regresi pengeluaran (ribu rupiah) terhadap pendapatan (ribu rupiah) adalah ŷ = 50 + 0,6x. Interpretasi koefisien 0,6 yang tepat adalah ....",
"o": [
"setiap kenaikan pendapatan 1 ribu rupiah, pengeluaran diperkirakan naik 0,6 ribu rupiah",
"pengeluaran saat pendapatan nol adalah 0,6 ribu rupiah",
"60% variasi pengeluaran dijelaskan oleh pendapatan",
"korelasi antara pendapatan dan pengeluaran sebesar 0,6"
],
"a": 0,
"e": "0,6 adalah kemiringan: perubahan rata-rata y untuk setiap kenaikan 1 satuan x. Nilai saat x = 0 adalah konstanta (50)."
},
{
"q": "Dengan kamus sentimen \"bing\", sebuah ulasan produk mengandung 7 kata positif dan 3 kata negatif. Jika skor sentimen = jumlah kata positif − jumlah kata negatif, skor dan kategori ulasan tersebut adalah ....",
"o": [
"4, sentimen positif",
"−4, sentimen negatif",
"10, sentimen positif",
"0, sentimen netral"
],
"a": 0,
"e": "Skor = 7 − 3 = 4. Skor di atas 0 berarti ulasan bersentimen positif."
},
{
"q": "Paket R yang dapat mengubah grafik ggplot2 menjadi grafik interaktif (bisa hover, zoom, dan geser) melalui fungsi ggplotly() adalah ....",
"o": [
"dplyr",
"readxl",
"tidytext",
"plotly"
],
"a": 3,
"e": "ggplotly() berasal dari paket plotly. dplyr untuk manipulasi data, readxl untuk membaca Excel."
},
{
"q": "Jika diketahui suatu persamaan regresi hasil transformasi data adalah y = 0,856 − 0,087 ln x, dimana nilai x adalah 1000, maka nilai y adalah ....",
"o": [
"0,688",
"0,595",
"0,698",
"0,786"
],
"a": 1,
"e": "log 1000 = 3 → y = 0,856 − 0,087 × 3 = 0,856 − 0,261 = 0,595."
},
{
"q": "Seorang peneliti melakukan analisis menggunakan variabel nilai ujian dan tugas mata kuliah Visualisasi Data serta lama waktu belajar. Terdapat siswa X yang tidak memiliki data untuk lama waktu belajar sehingga peneliti mengisi variabel tersebut dengan nilai tertentu berdasarkan nilai rataan dari sampel yang diperoleh. Metode penanganan data hilang yang dilakukan oleh peneliti adalah ....",
"o": [
"pairwise deletion",
"listwise or case deletion",
"mean substitution",
"regression imputation"
],
"a": 2,
"e": "Diisi dengan nilai rata-rata = mean substitution."
},
{
"q": "Output summary(model) regresi linear di R menunjukkan R-squared = 0,81. Artinya ....",
"o": [
"81% titik data berada tepat pada garis regresi",
"81% variasi variabel terikat dapat dijelaskan oleh variabel bebas dalam model",
"koefisien kemiringan garis regresi bernilai 0,81",
"peluang model menghasilkan prediksi salah sebesar 81%"
],
"a": 1,
"e": "R² (koefisien determinasi) = proporsi variasi Y yang dijelaskan model."
},
{
"q": "Dalam paket tidytext di R, fungsi yang memecah kolom teks menjadi satu kata per baris (tokenisasi) adalah ....",
"o": [
"anti_join()",
"unnest_tokens()",
"get_sentiments()",
"count()"
],
"a": 1,
"e": "unnest_tokens() = tokenisasi. anti_join(stop_words) membuang stop words, get_sentiments() mengambil kamus sentimen, count() menghitung frekuensi."
},
{
"q": "Perhatikan tabel di bawah ini!\nx  1  2  3                          4   5\ny  2  8  18                         32  50\nTentukan persamaan yang mewakili kumpulan data pada tabel di atas adalah ....",
"o": [
"y = (x2 Log(100))",
"y = 5 − (x2 Log(100))",
"y = 5 − (x Log(100))",
"y = (x Log(100))"
],
"a": 0,
"e": "y = 2x² dan Log(100) = 2, jadi y = x² Log(100). Cek: x = 3 → 9 × 2 = 18 ✓."
},
{
"q": "Metode penanganan data hilang yang dilakukan dengan cara mengganti nilai yang hilang pada variabel tertentu dengan nilai tertentu dengan memanfaatkan variabel lengkap lainnya untuk dilakukan dengan pemodelan regresi adalah ....",
"o": [
"pairwise deletion",
"listwise or case deletion",
"mean substitution",
"regression imputation"
],
"a": 3,
"e": "Diisi lewat model regresi dari variabel lain = regression imputation."
},
{
"q": "Setelah membuat model dengan lm() di R, plot residual terhadap nilai dugaan (fitted values) membentuk pola corong: sebaran residual makin melebar seiring naiknya nilai dugaan. Kesimpulan yang tepat adalah ....",
"o": [
"asumsi homoskedastisitas terpenuhi",
"terjadi multikolinearitas",
"terjadi heteroskedastisitas",
"residual saling independen"
],
"a": 2,
"e": "Varians residual tidak konstan (melebar) = heteroskedastisitas. Bisa diatasi dengan transformasi, misalnya logaritma."
},
{
"q": "Perhatikan tabel di bawah ini!\nx  1  2  3                          4   5\ny  8  6  4                          2   0\nTentukan persamaan yang mewakili kumpulan data pada tabel di atas adalah ....",
"o": [
"y = (x2 Log(100))",
"y = 10 − (x2 Log(100))",
"y = 10 − (x Log(100))",
"y = (x Log(100))"
],
"a": 2,
"e": "y turun 2 setiap x naik 1, dan x = 0 → y = 10. Jadi y = 10 − 2x = 10 − (x Log(100)). Cek: x = 5 → 10 − 10 = 0 ✓."
},
{
"q": "Metode penanganan data hilang yang sangat valid digunakan pada kondisi MAR (Missing at Random) adalah ....",
"o": [
"pairwise deletion",
"listwise or case deletion",
"mean substitution",
"regression imputation"
],
"a": 3,
"e": "MAR artinya data hilang bisa dijelaskan oleh variabel lain, jadi metode yang memanfaatkan variabel lain (regression imputation) paling cocok."
},
{
"q": "Metode penanganan data hilang yang sederhana dan cepat tetapi dapat menyebabkan berkurangnya data adalah ....",
"o": [
"pairwise deletion",
"listwise or case deletion",
"mean substitution",
"regression imputation"
],
"a": 1,
"e": "Listwise deletion menghapus seluruh baris yang ada data hilangnya: paling simpel, tapi paling banyak membuang data."
},
{
"q": "Andi memperoleh nilai 85 pada ujian Statistika (rata-rata kelas 75, simpangan baku 10) dan nilai 80 pada ujian Basis Data (rata-rata kelas 70, simpangan baku 5). Berdasarkan angka baku (z-score), pernyataan yang tepat adalah ....",
"o": [
"prestasi Statistika lebih baik karena nilai mentahnya lebih tinggi",
"prestasi Basis Data lebih baik karena z = 2, lebih besar dari z = 1 pada Statistika",
"prestasi keduanya setara karena sama-sama 10 poin di atas rata-rata",
"prestasi Statistika lebih baik karena z = 1,5"
],
"a": 1,
"e": "z = (x − x̄ )/s. Statistika: (85 − 75)/10 = 1. Basis Data: (80 − 70)/5 = 2. z lebih besar = posisi relatif lebih baik."
},
{
"q": "Sekumpulan data yang kita amati memiliki pola tertentu jika diplotkan, pola tersebut dikenal dengan istilah ....",
"o": [
"transformasi data",
"heteroskedastisitas",
"distribusi data",
"homoskedastisitas"
],
"a": 2,
"e": "Pola sebaran data saat diplotkan = distribusi data."
},
{
"q": "Menurut Rubin mekanisme data hilang terdiri dari ....",
"o": [
"missing not completely at random, missing at random dan missing not at random",
"missing completely at random, missing at random dan missing not at random",
"process which are measured, process which are not measured, proses acak",
"missing not at random, process which are measured, process which are not measured"
],
"a": 1,
"e": "Klasifikasi Rubin (1976): MCAR, MAR, dan MNAR. Opsi C adalah versi Graham."
},
{
"q": "Pada analisis regresi sederhana akan mencari model linear (garis lurus) antara variabel X dan variabel Y, kemudian mencari estimasi persamaan regresi estimasi dengan cara ....",
"o": [
"transformasi dan konfirmasi",
"eksplorasi dan konfirmasi",
"transformasi dan eksplorasi",
"transformasi dan klaster"
],
"a": 1,
"e": "Estimasi regresi bisa dicari dengan cara eksplorasi dan cara konfirmasi."
},
{
"q": "Diagram yang meringkas data dengan lima nilai (minimum, kuartil pertama, median, kuartil ketiga, maksimum) dan dapat menunjukkan pencilan (outlier) adalah ....",
"o": [
"ogive",
"diagram pareto",
"box plot (diagram kotak garis)",
"pie chart"
],
"a": 2,
"e": "Box plot menampilkan ringkasan lima angka; titik di luar garis (whisker) menandai pencilan."
},
{
"q": "Analisis yang dilakukan terhadap sekumpulan data, tidak bias meskipun data hilang tersebut tidak ditangani, kondisi tersebut dapat sesuai terhadap kategori data hilang ....",
"o": [
"Missing Completely at Random",
"Missing at Random",
"Missing Not at Random",
"Jawaban A, B dan C tidak benar"
],
"a": 0,
"e": "Pada MCAR, hilangnya data benar-benar acak, jadi analisis data yang tersisa tetap tidak bias."
},
{
"q": "Perhatikan langkah-langkah berikut! I. Memeriksa nilai residu (jumlah sisa variabel Y dikurangi nilai Y hasil estimasi) II. Mengurutkan seluruh hasil observasi mulai dari kecil ke besar III. Membagi seluruh hasil observasi menjadi beberapa bagian IV. Cari nilai pusat pada setiap bagian V. Tentukan persamaan regresi yang terbentuk Susun tahapan yang perlu dilakukan untuk melakukan analisis regresi estimasi cara eksplorasi adalah ....",
"o": [
"I → II → III → IV → V",
"II → III → IV → V → I",
"V → III → II → I → IV",
"II → V → III → IV → I"
],
"a": 1,
"e": "Urutan cara eksplorasi: urutkan data → bagi jadi beberapa bagian → cari nilai pusat tiap bagian → tentukan persamaan regresi → periksa residu. = II → III → IV → V → I."
},
{
"q": "Data kecepatan mobil (km/jam) dan jarak pengereman hingga berhenti (meter) dari 50 mobil ingin disajikan untuk melihat hubungan kedua variabel. Grafik yang paling tepat adalah ....",
"o": [
"scatter plot",
"pie chart",
"ogive",
"diagram pareto"
],
"a": 0,
"e": "Hubungan dua variabel kuantitatif = scatter plot (plot pencaran)."
},
{
"q": "Penghapusan pengamatan data hilang hanya dilakukan pada variabel yang akan dianalisis, mekanisme penanganan data hilang dengan cara tersebut adalah ....",
"o": [
"pairwise deletion",
"listwise or case deletion",
"mean substitution",
"regression imputation"
],
"a": 0,
"e": "Hapus hanya pada variabel yang dianalisis (per pasangan) = pairwise deletion. Listwise menghapus seluruh baris."
},
{
"q": "Perhatikan langkah-langkah berikut! I. Mengurutkan seluruh hasil observasi mulai dari kecil ke besar II. Tentukan persamaan regresi yang terbentuk III. Membagi seluruh hasil observasi menjadi beberapa bagian IV. Memeriksa nilai residu (jumlah sisa variabel Y dikurangi nilai Y hasil estimasi) V. Cari nilai pusat pada setiap bagian Susun tahapan yang perlu dilakukan untuk melakukan analisis regresi estimasi cara eksplorasi adalah ....",
"o": [
"I → II → III → IV → V",
"I → III → V → II → IV",
"V → III → II → I → IV",
"II → V → III → IV → I"
],
"a": 1,
"e": "Urutan cara eksplorasi: urutkan data → bagi jadi beberapa bagian → cari nilai pusat tiap bagian → tentukan persamaan regresi → periksa residu. = I → III → V → II → IV."
},
{
"q": "Metode penanganan data hilang yang memiliki tidak menambahkan informasi baru tetapi hanya meningkatkan ukuran sampel dan mengarah pada underestimate error adalah ....",
"o": [
"pairwise deletion dan listwise or case deletion",
"listwise or case deletion dan mean substitution",
"mean substitution dan pairwise deletion",
"regression imputation dan mean substitution"
],
"a": 3,
"e": "Hanya metode imputasi (mengisi nilai) yang \"menambah\" ukuran sampel. Metode deletion justru mengurangi sampel. Jadi jawabannya dua metode imputasi: regression imputation dan mean substitution."
},
{
"q": "Sebanyak 100 data akan disusun ke dalam tabel distribusi frekuensi. Dengan aturan k = 1 + 3,3 log n, banyak kelas yang sebaiknya dibuat adalah ....",
"o": [
"5",
"6",
"7",
"8"
],
"a": 3,
"e": "k = 1 + 3,3 × log 100 = 1 + 3,3 × 2 = 7,6, dibulatkan menjadi 8."
},
{
"q": "Data pendapatan rumah tangga memiliki kemencengan (skewness) positif yang sangat kuat: sebagian besar nilainya kecil, sedikit nilai sangat besar. Transformasi yang paling tepat agar distribusinya mendekati normal adalah ....",
"o": [
"transformasi logaritma",
"transformasi kuadrat",
"transformasi pangkat tiga",
"one-hot encoding"
],
"a": 0,
"e": "Skewness positif yang kuat diatasi dengan logaritma. Kuadrat justru dipakai untuk skewness negatif."
},
{
"q": "Menurut Graham mendeskripsikan data hilang merupakan kombinasi dari tiga hal berikut ....",
"o": [
"missing not completely at random, missing at random dan missing not at random",
"missing completely at random, missing at random dan missing not at random",
"process which are measured, process which are not measured, proses acak",
"missing not at random, process which are measured, process which are not measured"
],
"a": 2,
"e": "Graham (2009) menyebut data hilang sebagai kombinasi proses acak, proses yang terukur, dan proses yang tidak terukur. Opsi B (MCAR, MAR, MNAR) adalah klasifikasi mekanisme dari Rubin, bukan \"kombinasi tiga hal\" versi Graham."
},
{
"q": "Nilai ujian terendah di suatu kelas adalah 40 dan tertinggi 90. Dengan normalisasi min-max ke rentang 0 sampai 1, nilai 65 menjadi ....",
"o": [
"0,50",
"0,65",
"0,72",
"1,30"
],
"a": 0,
"e": "(65 − 40)/(90 − 40) = 25/50 = 0,50."
},
{
"q": "Metode penanganan data hilang yang mengisi nilai hilang dengan beberapa set nilai yang mungkin, lalu menganalisis setiap set secara terpisah dan menggabungkan hasilnya (di R dapat memakai paket mice), adalah ....",
"o": [
"mean substitution",
"regression imputation",
"multiple imputation (imputasi berganda)",
"listwise deletion"
],
"a": 2,
"e": "Beberapa set imputasi yang dianalisis terpisah lalu digabung = multiple imputation."
},
{
"q": "Untuk memeriksa normalitas secara visual, peneliti membandingkan kuantil data dengan kuantil distribusi normal. Jika data normal, titik-titik akan mengikuti garis lurus diagonal. Grafik ini disebut ....",
"o": [
"ogive",
"scatter plot",
"heatmap",
"Q-Q plot"
],
"a": 3,
"e": "Q-Q plot (Quantile-Quantile plot) membandingkan kuantil data dengan kuantil distribusi normal."
},
{
"q": "Dalam survei, responden berpendapatan sangat tinggi cenderung tidak melaporkan pendapatannya, sehingga hilangnya data bergantung pada besar nilai pendapatan itu sendiri. Mekanisme data hilang ini termasuk ....",
"o": [
"Missing Completely at Random (MCAR)",
"Missing at Random (MAR)",
"gabungan MCAR dan MAR",
"Missing Not at Random (MNAR)"
],
"a": 3,
"e": "Penyebab hilangnya data adalah nilai variabel itu sendiri yang tidak tercatat = MNAR. Jika MNAR ada di pilihan, kasus seperti ini dijawab MNAR."
},
{
"q": "Sebuah variabel memiliki beberapa nilai 0 dan akan ditransformasi dengan logaritma. Langkah yang perlu dilakukan terlebih dahulu adalah ....",
"o": [
"menambahkan konstanta positif ke seluruh nilai data",
"menghapus semua nilai di atas rata-rata",
"mengalikan seluruh data dengan −1",
"mengganti transformasi dengan one-hot encoding"
],
"a": 0,
"e": "Logaritma hanya berlaku untuk nilai positif (log 0 tidak terdefinisi), jadi tambahkan konstanta, misalnya log(x + 1)."
},
{
"q": "Berikut ini merupakan uji statistik untuk memeriksa normalitas data, kecuali ....",
"o": [
"uji Shapiro-Wilk",
"uji Kolmogorov-Smirnov",
"uji Jarque-Bera",
"Box-Cox"
],
"a": 3,
"e": "Box-Cox adalah metode transformasi data, bukan uji normalitas."
}
]
},
{
"id": "kwd",
"name": "Kewirausahaan Digital",
"questions": [
{
"q": "Blok-blok berikut termasuk dalam kanvas model bisnis (business model canvas), kecuali ....",
"o": [
"key partnerships",
"customer relationships",
"cost structure",
"unfair advantage"
],
"a": 3,
"e": "Unfair advantage adalah blok lean canvas; sembilan blok kanvas model bisnis antara lain memuat key partnerships, customer relationships, dan cost structure."
},
{
"q": "Value Proposition Canvas tersusun atas dua komponen utama, yaitu ....",
"o": [
"problem dan solution",
"customer profile dan value map",
"customer segments dan revenue streams",
"pains dan gains"
],
"a": 1,
"e": "Customer profile berisi customer jobs, pains, dan gains, sedangkan value map berisi products & services, pain relievers, dan gain creators."
},
{
"q": "Tahap design thinking yang merumuskan temuan dari tahap empati menjadi kebutuhan yang spesifik dan bermakna, sehingga masalah inti pengguna menjadi jelas, adalah ....",
"o": [
"empathize",
"ideate",
"test",
"define"
],
"a": 3,
"e": "Define mengubah temuan empati menjadi rumusan kebutuhan yang spesifik; ideate baru dilakukan setelah masalah inti itu ditemukan."
},
{
"q": "Jenis segmentasi yang mendefinisikan segmen pasar berdasarkan gaya hidup, aktivitas, minat, pendapat, dan kedudukan sosial konsumen adalah segmentasi ....",
"o": [
"perilaku",
"psikografis",
"demografis",
"geografis"
],
"a": 1,
"e": "Segmentasi psikografis mirip segmentasi perilaku, tetapi juga memperhitungkan aspek psikologis seperti gaya hidup dan kedudukan sosial."
},
{
"q": "Tahap design thinking yang mengubah ide-ide terkumpul menjadi bentuk fisik, misalnya catatan post-it di papan, kegiatan role play, atau contoh produk, adalah ....",
"o": [
"prototype",
"ideation",
"define",
"test"
],
"a": 0,
"e": "Prototype adalah proses mewujudkan ide ke dalam bentuk fisik atau nyata."
},
{
"q": "Pada periode awal sejarah kewirausahaan yang dimotori Marcopolo, dikenal pihak pasif dan pihak aktif. Yang dimaksud pihak aktif adalah ....",
"o": [
"pemilik modal yang menarik keuntungan sangat besar dari para pedagang yang ia biayai",
"pengatur proyek besar yang memakai sumber daya pemberian pemerintah",
"penemu yang membutuhkan dana pihak lain untuk mewujudkan inovasinya",
"pedagang yang memakai modal orang lain untuk berlayar dan menanggung risikonya"
],
"a": 3,
"e": "Pihak aktif menjalankan modal untuk berdagang mengelilingi lautan dengan keuntungan sekitar 25%."
},
{
"q": "Berikut ini karakteristik pasar red ocean, kecuali ....",
"o": [
"aturan main baru dibentuk sehingga kompetisi menjadi tidak relevan",
"batasan industri telah didefinisikan dan diterima pelaku bisnis",
"perusahaan berusaha mengalahkan pesaing untuk merebut pangsa pasar yang lebih besar",
"persaingan terjadi di ruang pasar yang sudah ada dan padat pesaing"
],
"a": 0,
"e": "Terbentuknya aturan main baru yang membuat kompetisi tidak relevan adalah ciri blue ocean."
},
{
"q": "Berikut ini merupakan ciri design thinking, kecuali ....",
"o": [
"proses berulang yang menantang asumsi dan mendefinisikan ulang masalah",
"berpusat pada kebutuhan manusia (human-centered design)",
"proses linier sekali jalan yang dimulai dari teknologi, bukan pengguna",
"melibatkan eksperimen berupa sketsa, prototipe, dan pengujian"
],
"a": 2,
"e": "Design thinking bersifat berulang dan berpusat pada manusia, bahkan tahap pengujiannya disebut bukan siklus sekali jalan."
},
{
"q": "Pendiri sebuah platform warung digital tidak menunggu peluang datang. Ia aktif menciptakan peluang dan menentukan sendiri arah usahanya dengan menyasar warung kecil yang belum digarap pemain besar. Prinsip efektuasi yang paling menonjol adalah ....",
"o": [
"bird in hand",
"crazy quilt",
"lemonade",
"pilot-in-the-plane"
],
"a": 3,
"e": "Pilot-in-the-plane menempatkan wirausaha sebagai pengendali arah usaha yang aktif membentuk masa depannya, seperti contoh Warung Pintar di materi pengayaan."
},
{
"q": "Menurut Kim dan Mauborgne (1997), salah satu manfaat kerangka kerja empat aksi bagi perusahaan adalah ....",
"o": [
"memusatkan upaya pada penciptaan dan peningkatan fitur agar unggul dari pesaing",
"merebut pangsa pasar yang sudah ada melalui penurunan harga",
"mendorong upaya diferensiasi dan biaya rendah dikejar secara bersamaan",
"membatasi pemahaman strategi hanya pada manajer puncak"
],
"a": 2,
"e": "Kerangka empat aksi membuat perusahaan mengejar diferensiasi sekaligus biaya rendah, dan justru menyerang perusahaan yang hanya fokus menciptakan dan meningkatkan."
},
{
"q": "Prinsip efektuasi yang menuntut wirausaha menetapkan seberapa besar kerugian finansial, waktu, tenaga, hingga psikologis yang sanggup ia tanggung sebelum memulai usaha adalah ....",
"o": [
"bird in hand",
"crazy quilt",
"pilot-in-the-plane",
"affordable loss"
],
"a": 3,
"e": "Affordable loss menekankan batas kerugian yang dapat ditoleransi agar wirausaha tetap bisa bangkit bila gagal."
},
{
"q": "Menurut Rhenald Kasali yang dikutip BMP, agar mampu berkiprah di masa depan (the future), wirausaha perlu didukung empat hal, yaitu ....",
"o": [
"new mindset, breakthrough, experiments, dan disruptive",
"adaptasi, kolaborasi, berbagi, dan keberanian mengambil risiko",
"visioner, kreatif, dorongan kuat, dan empati",
"sustaining innovation, efisiensi, ekspansi, dan kontrol biaya"
],
"a": 0,
"e": "BMP Modul 1 KB2 menyebut empat hal itu sebagai bekal menghadapi the future; adaptasi, kolaborasi, dan berbagi adalah tiga kunci sukses transformasi bisnis."
},
{
"q": "Produsen mobil memasang fitur penghangat kabin pada mobil yang dipasarkan di negara empat musim, tetapi tidak pada mobil untuk negara tropis. Dasar segmentasi yang dipakai adalah segmentasi ....",
"o": [
"demografis",
"perilaku",
"geografis",
"psikografis"
],
"a": 2,
"e": "Segmentasi geografis membagi konsumen menurut wilayah karena kebutuhan mereka berbeda sesuai tempat tinggalnya."
},
{
"q": "Penerapan Supply Chain Management dan Enterprise Resource Planning yang mendorong perusahaan menjalin kemitraan strategis dengan perusahaan lain mencerminkan fungsi teknologi informasi ....",
"o": [
"operasional",
"monitoring dan pengawasan",
"interorganisasional",
"perencanaan dan pengambilan keputusan"
],
"a": 2,
"e": "Fungsi interorganisasional dipicu globalisasi yang memaksa perusahaan berkolaborasi, misalnya melalui SCM dan ERP."
},
{
"q": "Pernyataan yang paling tepat mengenai Minimum Viable Product (MVP) adalah ....",
"o": [
"produk yang hanya memuat fitur inti, cukup untuk diuji penerimaannya di pasar dan menjaring umpan balik pelanggan",
"produk lengkap yang memuat semua fitur yang diminta pelanggan sejak peluncuran pertama",
"produk berharga paling murah di pasar untuk merebut pangsa pasar pesaing",
"versi produk yang biaya produksinya sudah dioptimalkan sebelum diuji ke pasar"
],
"a": 0,
"e": "MVP menyingkirkan fitur yang tidak dibutuhkan agar produk cepat diuji di pasar dan pelanggan dapat memberi umpan balik."
},
{
"q": "Seorang wirausaha merasa empat jam yang ia habiskan untuk merancang kemasan produk baru berlalu seperti sebentar saja. Dalam teori Flow (Nakamura & Csikszentmihalyi, 2009), gejala ini disebut ....",
"o": [
"distorsi pengalaman temporal",
"hilangnya kesadaran-diri reflektif",
"gabungan tindakan dan kesadaran",
"pengalaman autotelic"
],
"a": 0,
"e": "Distorsi pengalaman temporal adalah rasa waktu berlalu lebih cepat daripada biasanya."
},
{
"q": "Richard Cantillon memandang wirausahawan sebagai pengambil risiko. Perilaku yang menjadi dasar pandangan tersebut adalah ....",
"o": [
"memakai modal orang lain untuk berdagang mengarungi lautan",
"mengatur proyek besar dengan sumber daya pemberian pemerintah",
"membeli pada harga yang tetap, tetapi menjual pada harga yang tidak pasti",
"mengorganisasikan perusahaan untuk menambah nilai pribadi"
],
"a": 2,
"e": "Ketidakpastian harga jual itulah risiko wirausaha menurut Cantillon (abad ke-17); opsi lain adalah ciri periode Marcopolo, abad pertengahan, dan abad ke-19."
},
{
"q": "Prinsip efektuasi yang diibaratkan menyatukan potongan kain perca menjadi karya bernilai jual tinggi, yaitu membangun jejaring dan kemitraan dengan berbagai pihak, disebut ....",
"o": [
"crazy quilt",
"bird in hand",
"affordable loss",
"pilot-in-the-plane"
],
"a": 0,
"e": "Crazy quilt adalah kemampuan membangun jejaring lalu menggabungkannya menjadi usaha yang bermanfaat, misalnya Gojek yang menggandeng pengemudi dan restoran."
},
{
"q": "Dalam Blue Ocean Strategy, perubahan struktur biaya terutama diperoleh dari penghematan melalui aksi ....",
"o": [
"meningkatkan dan menciptakan elemen unik yang tidak dimiliki pesaing",
"meningkatkan faktor penting dan menurunkan harga jual",
"menghapuskan dan mengurangi komponen yang kurang bernilai",
"menciptakan value baru dan meninggalkan segmen lama"
],
"a": 2,
"e": "Materi menjelaskan bahwa penghematan biaya datang dari penghapusan dan pengurangan komponen yang kurang bernilai."
},
{
"q": "Prinsip bird in hand mengajak wirausaha menginventarisasi hal-hal berikut, kecuali ....",
"o": [
"siapa diri Anda",
"seberapa besar kerugian yang sanggup ditanggung",
"apa yang bisa Anda lakukan",
"siapa saja yang Anda kenal"
],
"a": 1,
"e": "Bird in hand berisi tiga pertanyaan: siapa diri Anda, apa yang bisa dilakukan, dan siapa yang dikenal; batas kerugian adalah prinsip affordable loss."
},
{
"q": "Burns mendefinisikan sebuah gaya kepemimpinan sebagai proses ketika pemimpin dan anggota saling meningkatkan moralitas dan motivasi ke tingkat yang lebih tinggi. Gaya kepemimpinan yang dimaksud adalah ....",
"o": [
"transaksional",
"transformasional",
"menginisiasi struktur",
"berorientasi pada tugas"
],
"a": 1,
"e": "Kepemimpinan transformasional menurut Burns menekankan peningkatan moralitas dan motivasi bersama."
},
{
"q": "Sebuah perusahaan rintisan memakai aplikasi obrolan kerja dan dokumen daring bersama agar karyawan antardivisi mudah berkomunikasi, berkolaborasi, dan berinteraksi. Peran teknologi informasi seperti ini termasuk fungsi ....",
"o": [
"operasional",
"perencanaan dan pengambilan keputusan",
"komunikasi",
"interorganisasional"
],
"a": 2,
"e": "Fungsi komunikasi menempatkan teknologi informasi sebagai sarana individu perusahaan berkomunikasi, berkolaborasi, dan berinteraksi; interorganisasional menyangkut kemitraan antarperusahaan."
},
{
"q": "Usaha perikanan laut dan pembuatan garam dari air laut termasuk wirausaha badan usaha ....",
"o": [
"agraris",
"ekstraktif",
"industri",
"perniagaan"
],
"a": 1,
"e": "Badan usaha ekstraktif mengambil langsung kekayaan yang sudah disediakan alam tanpa pengusahaan sebelumnya."
},
{
"q": "Dalam konsep AIDA pada pemasaran digital, tahap ketika konsumen mulai mencari tahu tentang produk melalui mesin pencari dan jejaring sosial setelah melihat iklan online adalah ....",
"o": [
"awareness",
"desire",
"interest",
"action"
],
"a": 2,
"e": "Interest muncul setelah kesadaran terbentuk, dan di ranah online ditandai pencarian lewat Google atau media sosial."
},
{
"q": "Menurut Barringer dan Ireland (2016), kesalahan umum dalam membentuk tim usaha baru antara lain sebagai berikut, kecuali ....",
"o": [
"menempatkan teman atau keluarga yang tidak memenuhi syarat di posisi manajemen",
"menganggap kesuksesan di industri lain otomatis berlaku di industri baru",
"menerapkan filosofi \"satu orang tim\" tanpa rencana dukungan tim",
"berbagi kepemilikan perusahaan dengan manajer puncak yang direkrut"
],
"a": 3,
"e": "Yang disebut kesalahan justru mempekerjakan manajer puncak tanpa berbagi kepemilikan."
},
{
"q": "Pada tingkat kesadaran merek ini, konsumen mampu mengingat sebuah merek tanpa perlu diberi stimulus apa pun. Tingkat tersebut adalah ....",
"o": [
"brand recall",
"brand recognition",
"top of mind",
"unaware brand"
],
"a": 0,
"e": "Brand recall berarti konsumen mengingat merek tanpa bantuan."
},
{
"q": "Dari pengamatannya, Saka menemukan paradoks: pengunjung datang ke kafe untuk produktif, tetapi pulang dengan kepala pening karena kebisingan (\"Work-from-Cafe Burnout\"). Mengidentifikasi masalah paling mendesak dan alasan nyata di balik perilaku pelanggan seperti ini merupakan langkah kanvas Problem-Solution Fit, yaitu ....",
"o": [
"problem-behavior fit",
"customer state fit",
"communication-channel fit",
"solution guess"
],
"a": 0,
"e": "Problem-behavior fit menyaring kebisingan untuk menemukan masalah paling mendesak dan alasan nyata di balik perilaku pelanggan."
},
{
"q": "Tim proyek peluncuran aplikasi sebuah startup dibubarkan setelah aplikasi berhasil dirilis dan seluruh tugas selesai. Dalam model lima tahap pengembangan kelompok, kondisi ini disebut tahap ....",
"o": [
"performing",
"norming",
"forming",
"adjourning"
],
"a": 3,
"e": "Adjourning adalah tahap tim bersiap berpisah dan bubar karena tujuan telah tercapai dan tugas selesai."
},
{
"q": "Berikut ini yang merupakan kelebihan strategi pemasaran digital dorong (push) adalah ....",
"o": [
"tidak memerlukan teknologi canggih untuk mengirim konten",
"tidak ada batasan isi maupun ukuran berkas",
"perusahaan bebas memakai metode apa pun untuk menarik konsumen",
"pesan dapat disesuaikan dengan kriteria konsumen sasaran"
],
"a": 3,
"e": "Strategi push memungkinkan pemilihan sasaran khusus, penyesuaian pesan, dan pelacakan rinci pilihan konsumen."
},
{
"q": "Kemampuan seseorang untuk mengerti dan peka terhadap perasaan, motivasi, serta watak orang lain, seperti yang dimiliki motivator dan fasilitator, termasuk inteligensi ....",
"o": [
"intrapersonal",
"interpersonal",
"linguistik",
"eksistensial"
],
"a": 1,
"e": "Inteligensi interpersonal berfokus pada pemahaman terhadap orang lain."
},
{
"q": "Setiap jilbab Modesta dikemas dengan kode Spotify berisi playlist produktivitas dan tautan filter Instagram untuk mencocokkan warna jilbab dengan warna kulit sebelum membeli. Dalam Value Proposition Canvas, fitur yang menambah manfaat bagi pelanggan ini termasuk ....",
"o": [
"pain relievers",
"gains",
"gain creators",
"customer jobs"
],
"a": 2,
"e": "Gain creators berada di value map dan menjelaskan cara produk menciptakan manfaat tambahan; gains adalah harapan pelanggan di customer profile."
},
{
"q": "Saka memasang panel peredam suara, membagi ruang menjadi Social Zone dan Deep-Work Zone, serta mengganti meja panjang dengan kubikel semi-privat berlampu yang dapat diatur. Ia sengaja menaikkan standar elemen yang sudah ada di industri jauh di atas rata-rata. Dalam kerangka kerja empat aksi, langkah ini termasuk aksi ....",
"o": [
"tingkatkan (raise)",
"hapuskan (eliminate)",
"kurangi (reduce)",
"ciptakan (create)"
],
"a": 0,
"e": "Aksi tingkatkan menaikkan faktor penting yang sudah ditawarkan industri jauh di atas standar, seperti kenyamanan dan fasilitas kerja."
},
{
"q": "Sebuah produsen menjual printer dengan harga sangat murah, bahkan di bawah biaya produksinya, lalu meraup laba dari penjualan tinta isi ulang yang mahal. Model bisnis ini disebut ....",
"o": [
"freemium",
"penghasilan dari persentase setiap transaksi",
"harga entri rendah dengan fitur harga tambahan",
"basis harga rendah, dapatkan uang dari barang sekali pakai (model silet)"
],
"a": 3,
"e": "Pada model silet, unit dasar dijual murah atau di bawah biaya dengan harapan pendapatan berkelanjutan dari persediaan yang mahal."
},
{
"q": "Agar pesanan ekspor terpenuhi tepat waktu, Ibu Ratna menerapkan SOP dan jadwal produksi yang teratur bagi para pengrajin Batik Luhur, lalu konsisten menjalankannya. Dari karakteristik unggul menurut Ralph Jabbour, sikap ini paling tepat disebut ....",
"o": [
"visioner",
"memiliki disiplin diri yang tinggi",
"kreatif",
"memiliki empati"
],
"a": 1,
"e": "Disiplin wirausaha tampak dari kebiasaan menyelesaikan pekerjaan serta menjalankan keputusan dan rencana yang telah ditetapkan."
},
{
"q": "Setelah merumuskan masalah \"Work-from-Cafe Burnout\", Saka mengumpulkan sebanyak mungkin gagasan solusi: zona sunyi, kubikel semi-privat, musik lofi bervolume rendah, dan menu kopi pendukung fokus. Dalam design thinking, kegiatan ini termasuk tahap ....",
"o": [
"define",
"prototype",
"ideate",
"test"
],
"a": 2,
"e": "Ideate adalah tahap menghasilkan ide setelah masalah inti pengguna didefinisikan; gagasan itu baru diwujudkan pada tahap prototype."
},
{
"q": "Manfaat menerapkan shared leadership dalam organisasi meliputi hal-hal berikut, kecuali ....",
"o": [
"mendorong perilaku inovatif dan berkomitmen di antara seluruh anggota tim",
"mendukung kerja tim dan menumbuhkan saling ketergantungan",
"memusatkan keputusan pada pimpinan puncak agar struktur tetap vertikal",
"meningkatkan kepuasan serta identifikasi anggota terhadap perusahaan"
],
"a": 2,
"e": "Shared leadership justru mengubah komposisi perusahaan yang vertikal dan mengintegrasikan tim."
},
{
"q": "Modal awal usaha rintisan umumnya paling mudah diperoleh dari keluarga dan teman dekat karena mereka percaya pada pribadi wirausaha, bukan semata pada idenya. Hal ini dibahas pada tahap proses kewirausahaan ....",
"o": [
"meningkatkan pendanaan usaha",
"menemukan ide bisnis yang tepat",
"mengembangkan rencana bisnis",
"mendapatkan pelanggan pertama"
],
"a": 0,
"e": "Tahap ketiga, meningkatkan pendanaan usaha, berfokus pada cara riil memperoleh dana awal, termasuk dari keluarga, teman, atau lembaga pinjaman mikro."
},
{
"q": "Gaya kepemimpinan yang ditunjukkan pemimpin dengan peduli pada anggota, menyatakan penghargaan dan dukungan, serta memperlakukan anggota secara setara disebut ....",
"o": [
"memiliki pertimbangan",
"berorientasi pada tugas",
"menginisiasi struktur",
"transaksional"
],
"a": 0,
"e": "Gaya memiliki pertimbangan menonjolkan kepedulian dan penghargaan kepada anggota, sedangkan menginisiasi struktur berfokus pada pengaturan peran dan tugas."
},
{
"q": "Menurut BMP, pertumbuhan e-commerce di Indonesia didorong oleh beberapa tren berikut, kecuali ....",
"o": [
"besarnya jumlah konsumen berusia muda",
"meningkatnya partisipasi UKM dalam bisnis online",
"bertambahnya jumlah gerai ritel konvensional",
"dukungan kebijakan dari pemerintah"
],
"a": 2,
"e": "BMP menyebut lima tren: besarnya konsumen muda, penggunaan ponsel, partisipasi UKM, meningkatnya investasi, dan dukungan kebijakan pemerintah."
},
{
"q": "Channels dalam kanvas model bisnis menjalankan fungsi-fungsi berikut, kecuali ....",
"o": [
"meningkatkan kesadaran pelanggan terhadap produk dan layanan perusahaan",
"membantu pelanggan mengevaluasi value proposition",
"menetapkan proporsi biaya tetap dan biaya variabel",
"menyediakan dukungan pasca pembelian"
],
"a": 2,
"e": "Channels berfungsi membangun kesadaran, membantu evaluasi, menyampaikan value proposition, dan memberi dukungan pasca pembelian."
},
{
"q": "Pengelola usaha Sambal Pecel Mbok Ginem memasang chatbot di toko online-nya sehingga pertanyaan pembeli langsung terjawab, dan pembeli yang puas kembali berbelanja. Strategi bisnis di era digital yang paling sesuai dengan langkah ini adalah ....",
"o": [
"memahami perilaku konsumen lewat forum situs atau media sosial",
"meningkatkan customer engagement dengan mengoptimalkan teknologi",
"membekali SDM dengan pengetahuan digital",
"mematangkan strategi digital secara menyeluruh"
],
"a": 1,
"e": "Materi memberi contoh chatbot sebagai cara meningkatkan engagement, karena layanan yang cepat membuat pelanggan puas dan kembali."
},
{
"q": "Blok pada lean canvas yang berisi keunggulan yang sulit ditiru pesaing, misalnya otoritas pribadi, komunitas, tim internal, dan reputasi, adalah ....",
"o": [
"unfair advantage",
"key metrics",
"unique value propositions",
"solution"
],
"a": 0,
"e": "Unfair advantage memuat hal yang membuat usaha menonjol, dengan contoh informasi internal, otoritas pribadi, komunitas, tim internal, dan reputasi."
},
{
"q": "Pengelola usaha Sambal Pecel Mbok Ginem memiliki dana promosi terbatas. Alih-alih bersaing sendirian, ia menggandeng content creator kuliner skala kecil, reseller, dan UMKM makanan lain untuk memperluas jangkauan. Langkah ini paling sesuai dengan kunci sukses transformasi bisnis berupa ....",
"o": [
"adaptasi",
"berbagi",
"kolaborasi",
"berani mengambil risiko"
],
"a": 2,
"e": "Menggandeng mitra alih-alih bersaing sendirian adalah wujud kolaborasi, kunci sukses kedua transformasi bisnis."
},
{
"q": "Pada tahap proses kewirausahaan ini, wirausaha melakukan riset pasar dan menentukan target konsumen, karena kelompok inilah yang akan berbagi pengalaman menyenangkan dan mendatangkan pelanggan berikutnya. Tahap tersebut adalah ....",
"o": [
"menemukan ide bisnis yang tepat",
"mengembangkan rencana bisnis",
"mendapatkan pelanggan pertama",
"meraih kesuksesan atau mengalami kegagalan"
],
"a": 2,
"e": "Tahap keempat, mendapatkan pelanggan pertama, menekankan riset pasar karena pelanggan awal akan menyebarkan pengalamannya kepada orang lain."
},
{
"q": "Belanja online merupakan contoh pasar abstrak. Berikut ini ciri pasar abstrak, kecuali ....",
"o": [
"penjual dan pembeli berada di tempat yang berjauhan",
"transaksi dilandasi rasa saling percaya",
"barang yang diperjualbelikan hanya berupa contoh",
"barang dapat langsung dibawa pulang saat transaksi"
],
"a": 3,
"e": "Barang yang bisa langsung dibawa adalah ciri pasar konkret, tempat penjual dan pembeli bertemu langsung."
},
{
"q": "Strategi peluncuran produk baru dengan harga rendah disertai biaya promosi yang besar disebut ....",
"o": [
"peluncuran cepat (rapid skimming)",
"peluncuran lambat (slow skimming)",
"penetrasi cepat (rapid penetration)",
"penetrasi lambat (slow penetration)"
],
"a": 2,
"e": "Penetrasi cepat memadukan harga rendah dan promosi besar."
},
{
"q": "Pada tahap pengembangan tim ini, anggota mulai mendorong batas yang ditetapkan sebelumnya, berdebat, dan bereksperimen dengan peran, sehingga banyak tim gagal di sini. Tahap tersebut adalah ....",
"o": [
"forming",
"norming",
"performing",
"storming"
],
"a": 3,
"e": "Storming ditandai konflik saat anggota berdebat dan mencoba mengambil peran kepemimpinan."
},
{
"q": "Konsep ekuitas merek menurut Aaker memiliki elemen inti berikut, kecuali ....",
"o": [
"brand loyalty (loyalitas merek)",
"protection (legalitas merek)",
"perceived quality (persepsi kualitas)",
"brand association (asosiasi merek)"
],
"a": 1,
"e": "Empat elemen inti Aaker adalah brand loyalty, brand awareness, perceived quality, dan brand association."
},
{
"q": "Pernyataan yang tepat mengenai hubungan e-commerce dan e-business adalah ....",
"o": [
"e-business merupakan bagian dari e-commerce yang cakupannya lebih luas",
"e-commerce merupakan bagian dari e-business yang cakupannya lebih luas",
"keduanya sama persis dan hanya berbeda dalam penyebutan",
"e-commerce mencakup kolaborasi mitra, sedangkan e-business hanya jual beli"
],
"a": 1,
"e": "E-business tidak hanya mencakup perniagaan, tetapi juga kolaborasi mitra bisnis, pelayanan nasabah, dan lowongan pekerjaan, sehingga e-commerce menjadi salah satu bagiannya."
},
{
"q": "Menurut Suryana (2011), penilaian potensi diri wirausaha dapat dilihat dari aspek-aspek berikut, kecuali ....",
"o": [
"disiplin diri",
"keberanian menghadapi risiko",
"kepercayaan diri",
"etos kerja"
],
"a": 3,
"e": "Enam aspek menurut Suryana adalah kepribadian, disiplin diri, kreativitas, dorongan atau keinginan, keberanian menghadapi risiko, dan kepercayaan diri."
},
{
"q": "Ibu Ratna menyediakan fasilitas pemeriksaan mata bagi pengrajin lansia yang penglihatannya mulai terganggu dan memberi upah di atas rata-rata. Dari karakteristik unggul menurut Ralph Jabbour, sikap ini paling tepat disebut ....",
"o": [
"memiliki empati",
"visioner",
"memiliki disiplin diri yang tinggi",
"memiliki dorongan kuat"
],
"a": 0,
"e": "Empati adalah kemampuan memahami dan merasakan apa yang dialami orang lain, seperti kondisi para pengrajin lansia."
},
{
"q": "Menurut Hermawan Kartajaya, konsumen era digital yang selalu fokus pada nilai, menimbang manfaat yang akan didapat, lalu membandingkan harga sebelum membeli disebut konsumen ....",
"o": [
"sombong",
"bebal",
"cerdas",
"wirausaha"
],
"a": 2,
"e": "Konsumen cerdas penuh perhitungan dan berfokus pada nilai produk."
},
{
"q": "Barang yang sudah atau belum diketahui konsumen, tetapi umumnya tidak menarik minat untuk dibeli, seperti batu nisan dan ensiklopedi, termasuk jenis barang konsumen ....",
"o": [
"convenience goods",
"shopping goods",
"specialty goods",
"unsought goods"
],
"a": 3,
"e": "Kotler (2010) menyebut barang seperti batu nisan dan ensiklopedi sebagai unsought goods; specialty goods justru dicari dengan usaha khusus karena mereknya unik."
},
{
"q": "Model bisnis digital yang menggratiskan fungsi dasar layanan, tetapi mengenakan biaya untuk layanan premium, seperti yang diterapkan LinkedIn, adalah model ....",
"o": [
"produk gratis dengan pendapatan dari pengiklan",
"freemium",
"pembayaran berlangganan rendah yang berulang",
"harga dasar rendah dengan pendapatan dari barang sekali pakai"
],
"a": 1,
"e": "Freemium mengubah sebagian pengguna gratis menjadi pelanggan berbayar melalui upgrade."
},
{
"q": "Sebelum merombak kedainya, Saka selama seminggu berpura-pura menjadi pengunjung di kedai kompetitor untuk mengamati perilaku dan mendengarkan keluhan anak muda yang bekerja di kafe. Dalam kerangka design thinking, kegiatan ini termasuk tahap ....",
"o": [
"define",
"ideate",
"empathize",
"test"
],
"a": 2,
"e": "Empathize adalah fondasi design thinking: memahami kebutuhan target pasar dengan mengamati dan mendengarkan pengguna."
},
{
"q": "Saka meluncurkan ulang kedainya di media sosial dengan slogan \"Kopi Saka: Tempat Pikiran Fokus Bekerja\" yang menyentuh rasa frustrasi pekerja muda terhadap kafe bising. Dalam kanvas Problem- Solution Fit, langkah ini paling sesuai dengan ....",
"o": [
"customer state fit",
"problem-behavior fit",
"solution guess",
"communication-channel fit"
],
"a": 3,
"e": "Communication-channel fit mempertajam komunikasi dengan pemicu kuat dan pesan emosional, lalu menjangkau pelanggan lewat saluran yang tepat."
},
{
"q": "Segmen \"The Corporate Hijabi\" yang dibidik Modesta Hijab mengeluhkan jilbab yang mudah lecek dan terasa gerah saat mereka harus berpindah dari rapat Zoom ke pertemuan tatap muka. Dalam Value Proposition Canvas, keluhan tersebut dicatat sebagai ....",
"o": [
"pains",
"customer jobs",
"gains",
"pain relievers"
],
"a": 0,
"e": "Pains adalah masalah atau tantangan yang dihadapi pelanggan, seperti jilbab yang lecek dan gerah."
},
{
"q": "Rian memandang ratusan lembar kain tenun yang dua tahun tidak terjual bukan sebagai kegagalan, melainkan bahan baku untuk strap jam tangan pintar, aksen kemeja linen, dan tas laptop yang diminati pasar global. Prinsip efektuasi yang paling tepat menggambarkan langkah ini adalah ....",
"o": [
"lemonade",
"crazy quilt",
"affordable loss",
"pilot-in-the-plane"
],
"a": 0,
"e": "Prinsip lemonade menuntut kreativitas mengubah situasi tidak menyenangkan, seperti stok mati, menjadi peluang baru."
},
{
"q": "Dalam menjalankan usahanya, wirausaha mengombinasikan faktor-faktor produksi untuk menghasilkan nilai tambah melalui sebuah proses yang disebut ....",
"o": [
"sustaining innovation",
"creative destruction",
"economies of scope",
"affordable loss"
],
"a": 1,
"e": "Materi Modul 2 menyebut proses perusakan yang kreatif (creative destruction) untuk menghasilkan added value, sehingga inti keterampilan wirausaha adalah kreativitas."
},
{
"q": "Setelah memilih keunggulan \"Effortless Elegant\" (jilbab anti-kusut yang tegak dalam 3 detik), Alya turun langsung dalam live shopping untuk memperagakan cara memakai satu jilbab Modesta untuk wawancara kerja, rapat klien, dan makan malam. Dalam proses penetapan posisi produk, langkah ini termasuk ....",
"o": [
"mengidentifikasi keunggulan bersaing",
"mengomunikasikan posisi yang telah dipilih",
"memilih keunggulan bersaing yang tepat untuk dipromosikan",
"memperluas segmen yang telah dipilih"
],
"a": 1,
"e": "Langkah ketiga penetapan posisi adalah mengomunikasikan posisi kepada konsumen sasaran lewat tindakan nyata."
},
{
"q": "Pengiriman perdana Batik Luhur ke Paris ditolak karena kain berjamur akibat kelembapan. Ibu Ratna tidak berhenti; ia mempelajari teknik pengemasan vakum lalu mencoba mengirim kembali hingga berhasil. Kualitas wirausaha yang paling menonjol dari tindakan ini adalah ....",
"o": [
"etika",
"menghilangkan ego",
"kepemimpinan",
"keuletan"
],
"a": 3,
"e": "Keuletan adalah kemampuan bertahan dalam kondisi tidak menentu dan bangkit dari kegagalan."
},
{
"q": "Menurut Hermawan Kartajaya, pemasaran yang mengintegrasikan saluran online dan offline melalui berbagai media dengan memanfaatkan mobile commerce disebut ....",
"o": [
"content marketing",
"omni channel marketing",
"engagement marketing",
"human centric marketing"
],
"a": 1,
"e": "Omni channel marketing memadukan online dan offline, sedangkan engagement marketing berfokus mempertahankan ikatan dengan konsumen."
},
{
"q": "Bagian job description yang menjelaskan persyaratan khusus sebagai compensable factor, seperti pendidikan terakhir, inisiatif, dan pengalaman kerja sebelumnya, adalah ....",
"o": [
"ringkasan pekerjaan",
"identifikasi pekerjaan",
"spesifikasi pekerjaan",
"kewajiban pekerjaan"
],
"a": 2,
"e": "Spesifikasi pekerjaan memuat keterampilan dan usaha yang dituntut sebuah jabatan, dan isinya dapat berbeda antarorganisasi."
},
{
"q": "Segmen yang dibidik Alya sangat dipengaruhi ulasan micro-influencer lewat konten Get Ready With Me dan komunitas fashion sebelum memutuskan membeli. Wawasan perilaku konsumen digital yang paling sesuai dengan kondisi ini adalah ....",
"o": [
"konsumen menjadi mudah berpindah",
"pemasaran dari mulut ke mulut",
"toleransi konsumen berkurang",
"konsumen selalu bereksperimen"
],
"a": 1,
"e": "Dalam pemasaran dari mulut ke mulut, konsumen memutuskan membeli berdasarkan ulasan orang yang sudah berpengalaman dengan produk."
},
{
"q": "Menurut Wiryasaputra, wirausaha yang senantiasa berpikir baik dan mampu mengubah setiap hambatan menjadi peluang, seperti Kolonel Sanders pencipta resep KFC, memiliki karakteristik ....",
"o": [
"genuine",
"visionary",
"democratic leader",
"positive"
],
"a": 3,
"e": "Positive berarti selalu berpikir baik dan mengubah hambatan menjadi peluang, dengan Kolonel Sanders sebagai contohnya di materi."
},
{
"q": "Dalam lean canvas, pendapatan hotel yang dihitung dari jumlah malam tamu menginap termasuk aliran pendapatan berupa ....",
"o": [
"biaya berlangganan",
"penjualan aset",
"biaya pengiriman atau instalasi",
"biaya penggunaan"
],
"a": 3,
"e": "Biaya penggunaan dibayar sesuai jumlah pemakaian, seperti menit telepon atau malam di kamar hotel; berlangganan memberi pemakaian tak terbatas dalam periode tertentu."
},
{
"q": "Selain bermanfaat, segmentasi pasar juga mengandung risiko. Berikut ini termasuk risiko segmentasi, kecuali ....",
"o": [
"biaya produksi lebih tinggi karena jangka waktu proses produksi lebih pendek",
"produk dapat didesain sesuai permintaan pasar",
"biaya riset pasar bertambah seiring banyaknya segmen yang ditetapkan",
"kemungkinan menghadapi pesaing yang membidik segmen serupa"
],
"a": 1,
"e": "Mendesain produk sesuai permintaan pasar adalah manfaat segmentasi, sedangkan tiga opsi lain termasuk risiko atau kelemahannya."
},
{
"q": "Menurut materi, faktor yang paling erat kaitannya dengan diterimanya produk atau jasa seorang wirausaha oleh pasar adalah ....",
"o": [
"kemampuan meraih kepercayaan banyak orang",
"keunikan dan kualitas produk",
"kecanggihan pola pemasaran di media digital",
"besarnya modal awal usaha"
],
"a": 0,
"e": "Materi menegaskan bahwa keunikan produk maupun kecanggihan pemasaran bukan penyebab utama; kesuksesan berwirausaha erat kaitannya dengan kemampuan meraih kepercayaan banyak orang."
},
{
"q": "Saka menerapkan pembelian minimum Rp60.000 untuk masuk Deep-Work Zone. Pengunjung tidak keberatan karena harga itu lebih murah dan fleksibel daripada menyewa co-working space harian. Pendekatan harga ini paling dekat dengan model ....",
"o": [
"harga berdasarkan biaya produk ditambah margin",
"pembayaran berlangganan rendah yang berulang",
"harga berjenjang berdasarkan volume penggunaan",
"harga berdasarkan nilai bagi pelanggan"
],
"a": 3,
"e": "Harga boleh ditetapkan sepadan dengan nilai atau penghematan yang dirasakan pelanggan, misalnya dibandingkan sewa co-working."
},
{
"q": "Satu unggahan keluhan pelanggan di media sosial dapat viral dalam hitungan jam dan merusak reputasi usaha, karena konsumen menuntut jawaban yang jelas dan cepat. Wawasan perilaku konsumen digital ini disebut ....",
"o": [
"konsumen menetapkan tolok ukur sendiri",
"toleransi konsumen berkurang",
"konsumen selalu bereksperimen",
"konsumen menjadi mudah berpindah"
],
"a": 1,
"e": "Toleransi konsumen berkurang: mereka ingin jawaban cepat, dan satu unggahan bisa membangun atau menghancurkan reputasi usaha."
},
{
"q": "Dalam tingkatan produk, manfaat sebenarnya yang dibutuhkan dan akan dikonsumsi konsumen dari setiap produk disebut ....",
"o": [
"produk utama (core benefit)",
"produk generik",
"produk harapan (expected product)",
"produk potensial"
],
"a": 0,
"e": "Produk utama adalah manfaat inti yang dicari konsumen; produk generik hanya rancangan minimal agar produk bisa berfungsi."
},
{
"q": "Jenis kemitraan dalam blok key partnership yang berupa kemitraan strategis antarpesaing disebut ....",
"o": [
"coopetition",
"aliansi strategis antara nonpesaing",
"usaha patungan (joint venture)",
"hubungan pembeli dan pemasok terpercaya"
],
"a": 0,
"e": "Materi menyebut cooptition (coopetition) sebagai kemitraan strategis antarpesaing."
},
{
"q": "Pemilik sebuah usaha selalu datang tepat waktu dan mematuhi setiap aturan yang ia tetapkan bagi karyawannya, sehingga ia tidak pernah bersikap \"lakukan apa yang saya katakan, bukan seperti yang saya lakukan\". Keterampilan kepemimpinan yang ia tunjukkan adalah ....",
"o": [
"menyusun visi strategis",
"meminta saran",
"mengembangkan pemimpin",
"memimpin dengan contoh (lead by example)"
],
"a": 3,
"e": "Memimpin dengan contoh berarti pemimpin memberi teladan; filosofi \"lakukan apa yang saya katakan\" disebut paling merusak moral perusahaan."
},
{
"q": "Setiap Selasa dan Kamis, Rian menutup laptopnya lalu duduk di sanggar bersama para tetua penenun untuk mendengarkan dan mendokumentasikan proses menenun tanpa diganggu urusan lain. Tindakan menutup laptop dan menyediakan waktu khusus itu paling sesuai dengan langkah menemukan flow, yaitu ....",
"o": [
"memilih kegiatan yang cukup menantang untuk menciptakan gairah",
"menghilangkan gangguan dan membingkai pengalaman",
"mengembangkan keterampilan yang mahir",
"menetapkan tujuan yang jelas"
],
"a": 1,
"e": "Langkah ini meminta kita menyingkirkan gawai dan distraksi serta menyediakan waktu yang cukup untuk masuk ke kondisi flow."
},
{
"q": "Pengusaha keripik Maicih menjual kerupuk biasa dengan kemasan yang menjual dan rasa yang unik. Menurut Wiryasaputra, contoh ini menggambarkan karakteristik wirausaha ....",
"o": [
"genuine",
"positive",
"goal oriented",
"healthy competitor"
],
"a": 0,
"e": "Genuine berarti orisinal: tidak harus menciptakan produk baru, tetapi memberi nilai lebih pada produk yang sudah ada agar mampu bersaing, dan Maicih adalah contohnya dalam materi."
},
{
"q": "Sebuah perusahaan memakai kegiatan pemasaran dan saluran distribusi yang sama untuk mendukung banyak produk sehingga biayanya lebih hemat. Karakteristik cost structure ini disebut ....",
"o": [
"economies of scale",
"biaya tetap",
"biaya variabel",
"economies of scope"
],
"a": 3,
"e": "Economies of scope adalah keuntungan biaya karena ruang lingkup operasi yang lebih luas."
},
{
"q": "Berdasarkan legalitas hukum badan usaha di Indonesia, wirausaha dapat berbentuk sebagai berikut, kecuali ....",
"o": [
"badan usaha perseorangan",
"persekutuan komanditer (CV)",
"wirausaha paruh waktu",
"perseroan terbatas (PT)"
],
"a": 2,
"e": "Wirausaha paruh waktu termasuk kategori khusus menurut Franky Slamet dkk. (2018), bukan bentuk legalitas hukum seperti perseorangan, firma, CV, dan PT."
},
{
"q": "Key activities pada usaha konsultan dan rumah sakit umumnya didominasi kegiatan ....",
"o": [
"penyelesaian masalah",
"produksi",
"platform atau jaringan",
"pengelolaan saluran distribusi"
],
"a": 0,
"e": "Kegiatan penyelesaian masalah memberi solusi baru bagi masalah pelanggan individu, sehingga butuh manajemen pengetahuan dan pelatihan berkelanjutan."
},
{
"q": "Menurut tips membangun MVP yang dibahas Wadhwani Foundation, fokus utama pada tahap MVP adalah ....",
"o": [
"mengoptimalkan biaya produksi sejak awal",
"mempercepat pembelajaran dari umpan balik pelanggan",
"memasukkan semua fitur yang diminta pelanggan sejak versi pertama",
"memberikan masa uji coba gratis yang panjang"
],
"a": 1,
"e": "Tip ketujuh menegaskan fokus pada belajar, bukan optimisasi; produksi dan biaya dioptimalkan kemudian."
},
{
"q": "Peran wirausaha dalam mendukung perekonomian negara meliputi hal-hal berikut, kecuali ....",
"o": [
"meningkatkan pendapatan nasional",
"menjamin pendapatan yang tetap bagi wirausaha setiap bulan",
"mengurangi kesenjangan sosial dan ekonomi",
"membuka lapangan pekerjaan bagi pengangguran di sekitar usaha"
],
"a": 1,
"e": "Empat peran wirausaha menurut materi adalah meningkatkan pendapatan nasional, membuka lapangan kerja, mengurangi kesenjangan, dan meningkatkan taraf hidup masyarakat."
}
]
},
{
"id": "po",
"name": "Perilaku Organisasi",
"questions": [
{
"q": "Kasus restrukturisasi Microsoft (Tugas Tutorial 2). Sebagian karyawan bersemangat mempelajari AI karena yakin usahanya akan menghasilkan kinerja yang dinilai baik dan berujung pada imbalan yang mereka anggap berharga, seperti proyek strategis dan peluang karier. Teori yang paling tepat menjelaskan motivasi kelompok ini adalah ....",
"o": [
"teori keadilan (Adams)",
"teori dua faktor (Herzberg)",
"teori ERG (Alderfer)",
"teori harapan (Vroom)"
],
"a": 3,
"e": "Teori harapan merumuskan motivasi sebagai hasil keyakinan bahwa usaha menghasilkan kinerja (harapan), kinerja menghasilkan imbalan (instrumentalitas), dan imbalan itu bernilai bagi individu (valensi)."
},
{
"q": "Sebuah pabrik mewajibkan setiap langkah perakitan mengikuti SOP tertulis dan daftar periksa baku. Elemen desain struktur yang tinggi pada pabrik ini adalah ....",
"o": [
"spesialisasi",
"sentralisasi",
"rentang kendali (span of control)",
"formalisasi"
],
"a": 3,
"e": "Formalisasi adalah tingkat pembakuan aturan dan prosedur kerja."
},
{
"q": "Perdebatan tajam tetapi terarah antara tim desain dan tim produksi menghasilkan prosedur keselamatan baru yang lebih baik. Konflik ini tergolong ....",
"o": [
"konflik disfungsional",
"konflik fungsional",
"konflik kepribadian",
"konflik lintas budaya"
],
"a": 1,
"e": "Konflik fungsional mendukung pencapaian tujuan, mendorong gagasan baru, dan memperbaiki kualitas keputusan; materi mencatat konflik tingkat moderat diperlukan untuk mencegah stagnasi."
},
{
"q": "Seorang supervisor senang memengaruhi arah keputusan rapat, ingin mengendalikan cara kerja timnya, dan berambisi memegang kewenangan yang lebih besar. Menurut teori kebutuhan McClelland, kebutuhan yang dominan pada dirinya adalah ....",
"o": [
"need for achievement (nAch)",
"need for affiliation (nAff)",
"need for power (nPow)",
"kebutuhan aktualisasi diri"
],
"a": 2,
"e": "nPow adalah kebutuhan memengaruhi, mengendalikan, dan memimpin orang lain; nAch berfokus pada dorongan unggul dan berprestasi."
},
{
"q": "Negosiasi yang berupaya “memperbesar kue”, mencari kesepakatan yang menguntungkan semua pihak, dan menjaga hubungan jangka panjang disebut ....",
"o": [
"negosiasi integratif",
"negosiasi distributif",
"gaya kompromi",
"gaya akomodasi"
],
"a": 0,
"e": "Negosiasi integratif bersifat win-win (solusi lawan solusi) dan membangun hubungan jangka panjang."
},
{
"q": "Kasus Microsoft (Tugas Tutorial 2). Di tim lintas fungsi yang besar, beberapa anggota mengurangi usahanya karena merasa kontribusi pribadinya tidak terlihat dan pekerjaan toh akan diselesaikan anggota lain. Gejala ini disebut ....",
"o": [
"groupthink",
"konformitas berlebihan",
"social loafing",
"kohesivitas kelompok"
],
"a": 2,
"e": "Social loafing adalah kecenderungan mengurangi usaha saat bekerja dalam kelompok, salah satu dampak negatif kelompok."
},
{
"q": "Penelitian Elton Mayo di pabrik Western Electric Hawthorne (1927–1932) menyimpulkan bahwa hubungan sosial karyawan ikut menentukan produktivitas. Temuan ini melahirkan pendekatan ....",
"o": [
"scientific management",
"behavioral science",
"birokrasi Weber",
"human relations"
],
"a": 3,
"e": "Studi Hawthorne membantah pandangan scientific management (Taylor) yang memperlakukan manusia sekadar faktor produksi, lalu melahirkan pendekatan human relations."
},
{
"q": "Seorang insinyur melapor kepada kepala departemen teknik sekaligus kepada manajer proyek tempat ia ditugaskan. Bentuk struktur organisasi ini adalah ....",
"o": [
"fungsional",
"matriks",
"divisional",
"simple structure"
],
"a": 1,
"e": "Struktur matriks menggabungkan pengelompokan fungsional dan proyek dengan sistem komando ganda."
},
{
"q": "Seorang karyawan sangat menghargai fleksibilitas kerja, tetapi tetap datang ke kantor setiap hari karena aturan. Ia merasa tidak nyaman karena sikap dan perilakunya tidak sejalan. Kondisi ini disebut ....",
"o": [
"persuasi (persuasion)",
"disonansi kognitif (cognitive dissonance)",
"persepsi selektif",
"keterlibatan kerja (job involvement)"
],
"a": 1,
"e": "Disonansi kognitif adalah ketidaknyamanan akibat ketidakkonsistenan antara sikap dan perilaku, dan menjadi salah satu jalur perubahan sikap."
},
{
"q": "Kasus Microsoft (Tugas Tutorial 2). Tim lintas fungsi yang baru dibentuk mulai berselisih tentang cara kerja dan siapa yang mengoordinasikan proyek. Menurut model tahap pembentukan kelompok, tim tersebut berada pada tahap ....",
"o": [
"forming",
"norming",
"performing",
"storming"
],
"a": 3,
"e": "Storming ditandai konflik internal dan perebutan peran atau struktur."
},
{
"q": "Menurut pembagian keterampilan manajerial Katz, keterampilan yang tetap dibutuhkan pada semua jenjang manajer, dari lini bawah sampai puncak, adalah keterampilan ....",
"o": [
"hubungan antarmanusia (human skill)",
"konseptual (conceptual skill)",
"teknis (technical skill)",
"pengambilan keputusan sebagai wirausahawan"
],
"a": 0,
"e": "Manajer puncak lebih dituntut keterampilan konseptual dan manajer lini bawah keterampilan teknis, tetapi keterampilan hubungan antarmanusia diperlukan di jenjang mana pun."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). Seorang insinyur yang baru ditugaskan ke fasilitas mitra di luar negeri awalnya antusias dan terpesona pada hal-hal baru. Beberapa bulan kemudian ia mulai frustrasi, membandingkan kebiasaan setempat dengan budaya asalnya, dan menilainya secara negatif. Fase yang sedang ia alami adalah ....",
"o": [
"honeymoon (bulan madu)",
"culture shock (kejutan budaya)",
"penyesuaian bertahap (adjustment)",
"adaptasi, merasa seperti di rumah sendiri"
],
"a": 1,
"e": "Setelah fase honeymoon, pendatang masuk fase culture shock yang ditandai frustrasi dan penilaian negatif pada budaya setempat, sebelum menyesuaikan diri."
},
{
"q": "Anggota sebuah tim yang sangat kompak cepat menyetujui rencana pimpinan karena enggan menyampaikan keberatan demi menjaga keharmonisan, sehingga alternatif lain tidak pernah dikaji. Gejala ini disebut ....",
"o": [
"social loafing",
"groupthink",
"tahap storming",
"Nominal Group Technique"
],
"a": 1,
"e": "Groupthink terjadi ketika dorongan untuk sepakat mengalahkan penilaian kritis atas alternatif lain."
},
{
"q": "Seorang pemimpin memberi arahan rinci kepada anggota baru, tetapi mendelegasikan keputusan kepada anggota senior yang sudah matang. Ia menyesuaikan gaya dengan tingkat kesiapan bawahan. Pendekatan ini sesuai dengan teori ....",
"o": [
"Hersey-Blanchard (kepemimpinan situasional)",
"model kontingensi Fiedler",
"path-goal",
"studi Ohio State"
],
"a": 0,
"e": "Teori Hersey-Blanchard menyatakan gaya kepemimpinan disesuaikan dengan tingkat kesiapan atau kematangan pengikut."
},
{
"q": "Kasus PT Inovasi Digital Indonesia (Forum Diskusi 4). Bonus tahunan sudah dibagikan, tetapi kepuasan kerja belum naik. Manajemen lalu menambah bentuk imbalan lain. Yang tergolong penghargaan nonfinansial adalah ....",
"o": [
"pengakuan publik atas prestasi dan program pengembangan karier",
"insentif kinerja untuk setiap proyek yang selesai",
"kenaikan gaji pokok bulanan",
"tambahan bonus akhir tahun"
],
"a": 0,
"e": "Pengakuan, promosi, pengembangan karier, dan fleksibilitas kerja bersifat nonfinansial; gaji, bonus, dan insentif bersifat finansial."
},
{
"q": "Seorang karyawan terlambat menyerahkan laporan bulanan. Ternyata hampir semua rekan di bagiannya juga terlambat bulan itu karena sistem aplikasi sempat terganggu. Menurut teori atribusi Kelley, informasi ini menunjukkan ....",
"o": [
"konsistensi tinggi, sehingga penyebabnya cenderung internal",
"konsensus tinggi, sehingga penyebabnya cenderung eksternal",
"kekhususan rendah, sehingga penyebabnya cenderung internal",
"konsensus rendah, sehingga penyebabnya cenderung eksternal"
],
"a": 1,
"e": "Bila banyak orang dalam situasi sama berperilaku serupa (konsensus tinggi), perilaku itu diatribusikan pada sebab eksternal, bukan sifat pribadi."
},
{
"q": "Dalam metafora gunung es (Selfridge & Sokolik), aspek informal organisasi berada di bawah permukaan. Komponen berikut termasuk aspek informal tersebut, kecuali ....",
"o": [
"politik dan kekuasaan di antara anggota",
"sentimen dan norma kelompok",
"rentang kendali dan deskripsi kerja",
"persepsi karyawan terhadap kepercayaan organisasional"
],
"a": 2,
"e": "Rentang kendali dan deskripsi kerja adalah komponen formal (overt atau hard component) yang tampak di permukaan dan berkaitan dengan struktur."
},
{
"q": "Kasus RTO (Tugas Tutorial 1). Seorang manajer menolak mengusulkan promosi bagi karyawan berprestasi dengan alasan “karyawan yang sering bekerja dari rumah umumnya kurang berkomitmen”, tanpa memeriksa capaian kerjanya. Kesalahan persepsi yang terjadi adalah ....",
"o": [
"stereotyping",
"halo effect",
"projection",
"selective perception"
],
"a": 0,
"e": "Stereotyping menilai seseorang dari persepsi terhadap kelompoknya, di sini kelompok pekerja jarak jauh."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). Manajemen dan karyawan berbeda persepsi tentang prioritas perubahan. Persoalannya kompleks dan banyak bersumber dari salah paham, sementara kedua pihak sama-sama penting bagi keberhasilan budaya keselamatan. Gaya manajemen konflik model Rahim yang paling tepat adalah ....",
"o": [
"dominating (dominasi): menang dengan menekan pihak lain",
"obliging (akomodasi): mengalah demi menjaga hubungan",
"avoiding (menghindar): menarik diri dari isu konflik",
"integrating (integral): kepedulian tinggi pada diri sendiri dan pihak lain"
],
"a": 3,
"e": "Gaya integral (win-win) cocok untuk masalah kompleks yang bersumber dari salah paham karena mencari solusi kolaboratif bagi kedua pihak."
},
{
"q": "Kasus RTO (Tugas Tutorial 1). Pernyataan karyawan berikut yang mencerminkan komponen perilaku (konatif) dari sikap kerja adalah ....",
"o": [
"“Saya yakin bekerja dari rumah membuat saya lebih fokus.”",
"“Saya kesal setiap kali harus menembus macet ke kantor.”",
"“Kalau aturan lima hari di kantor diberlakukan penuh, saya akan melamar ke perusahaan yang lebih fleksibel.”",
"“Menurut saya, kebijakan ini menunjukkan kurangnya kepercayaan manajemen.”"
],
"a": 2,
"e": "Komponen konatif berupa niat atau kecenderungan bertindak, misalnya berencana pindah kerja."
},
{
"q": "Kasus Microsoft (Tugas Tutorial 2). Perusahaan mendorong inovasi AI, keberanian mengambil risiko, kreativitas, dan adaptasi cepat terhadap perubahan teknologi. Menurut tipologi Competing Values, budaya yang ditonjolkan adalah ....",
"o": [
"clan culture",
"hierarchy culture",
"market culture",
"adhocracy culture"
],
"a": 3,
"e": "Adhocracy culture berfokus pada inovasi, risiko, kreativitas, dan adaptasi cepat; hierarchy culture menekankan kendali dan kepatuhan prosedur."
},
{
"q": "Dalam hierarki kebutuhan Maslow, kebutuhan akan status, pengakuan, prestasi, dan penghormatan dari orang lain termasuk tingkat kebutuhan ....",
"o": [
"sosial",
"aktualisasi diri",
"penghargaan",
"keamanan"
],
"a": 2,
"e": "Status, pengakuan, prestasi, dan penghormatan adalah isi kebutuhan penghargaan (esteem)."
},
{
"q": "Para staf mengikuti arahan seorang rekan senior karena mengagumi kepribadiannya dan ingin meneladaninya, padahal ia tidak memegang jabatan struktural dan keahliannya tidak lebih tinggi. Sumber kekuasaan rekan tersebut menurut French & Raven adalah ....",
"o": [
"expert power",
"legitimate power",
"referent power",
"reward power"
],
"a": 2,
"e": "Referent power bersumber dari daya tarik kepribadian."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). Untuk memperkuat budaya keselamatan, Boeing memasang slogan keselamatan di lantai produksi, menata ulang area kerja, dan menggelar seremoni penghargaan keselamatan. Menurut Schein, unsur budaya yang paling kasatmata ini disebut ....",
"o": [
"artefak",
"nilai yang dianut (espoused values)",
"asumsi dasar (basic assumptions)",
"norma kelompok informal"
],
"a": 0,
"e": "Artefak adalah unsur budaya yang terlihat, seperti simbol fisik, tata ruang, dan ritual."
},
{
"q": "Kasus PT Inovasi Digital Indonesia (Forum Diskusi 4). Produktivitas turun, karyawan merasa imbalan tidak sepadan dengan kontribusinya dibandingkan rekan kerja, evaluasi kinerja dianggap tidak transparan, dan beberapa karyawan berprestasi mengundurkan diri. Teori motivasi yang paling tepat menjelaskan kasus ini adalah ....",
"o": [
"teori harapan (expectancy theory)",
"teori penetapan tujuan",
"hierarki kebutuhan Maslow",
"teori keadilan (equity theory)"
],
"a": 3,
"e": "Teori keadilan menjelaskan bahwa karyawan membandingkan rasio input dan output dirinya dengan rekan sepadan, dan rasa tidak adil menurunkan motivasi."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). CEO baru perlu mengajak ribuan karyawan meninggalkan cara kerja lama dengan menanamkan visi budaya keselamatan dan menginspirasi mereka bekerja melampaui kepentingan pribadi. Gaya kepemimpinan yang paling sesuai adalah ....",
"o": [
"transaksional",
"transformasional",
"laissez-faire",
"otokratis"
],
"a": 1,
"e": "Kepemimpinan transformasional menginspirasi bawahan melampaui kepentingan pribadi demi visi besar, sehingga sesuai untuk memimpin perubahan budaya."
},
{
"q": "Berikut adalah dimensi budaya nasional dalam model Hofstede, kecuali ....",
"o": [
"jarak kekuasaan (power distance)",
"individualisme versus kolektivisme",
"clan culture versus market culture",
"penghindaran ketidakpastian (uncertainty avoidance)"
],
"a": 2,
"e": "Clan culture dan market culture adalah tipologi budaya organisasi dalam kerangka Competing Values, bukan dimensi budaya nasional."
},
{
"q": "Tenggat proyek yang ketat justru membuat seorang karyawan bersemangat, memicu ide baru, dan meningkatkan produktivitasnya. Jenis stres yang dialami karyawan tersebut adalah ....",
"o": [
"eustress",
"distress",
"burnout",
"konflik peran"
],
"a": 0,
"e": "Eustress adalah stres positif yang konstruktif dan mendorong motivasi serta produktivitas."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). Di beberapa lokasi mitra, karyawan enggan menyanggah keputusan atasan walaupun melihat potensi masalah mutu, karena ketimpangan kekuasaan dianggap wajar. Dimensi budaya yang paling relevan untuk menjelaskan perilaku ini adalah ....",
"o": [
"individualisme yang tinggi",
"jarak kekuasaan (power distance) yang tinggi",
"maskulinitas yang tinggi",
"orientasi jangka panjang"
],
"a": 1,
"e": "Jarak kekuasaan menggambarkan sejauh mana anggota yang kurang berkuasa menerima dan mengharapkan kekuasaan terbagi tidak merata, sehingga bawahan sungkan menentang atasan."
},
{
"q": "Menurut teori dua faktor Herzberg, hal berikut tergolong faktor hygiene, kecuali ....",
"o": [
"pengakuan atas usaha dan kontribusi",
"gaji dan kompensasi",
"kebijakan perusahaan",
"kondisi kerja fisik"
],
"a": 0,
"e": "Pengakuan (recognition) adalah faktor motivator, bersama prestasi, tanggung jawab, dan pengembangan diri."
},
{
"q": "Candaan yang sama dari seorang karyawan dianggap wajar saat acara santai kantor, tetapi dinilai tidak sopan ketika disampaikan dalam rapat resmi dengan direksi. Perbedaan persepsi ini terutama dipengaruhi faktor ....",
"o": [
"perceiver (pihak yang mempersepsi)",
"target (objek yang dipersepsi)",
"stereotyping terhadap kelompok",
"situasi atau konteks"
],
"a": 3,
"e": "Orang dan ucapannya sama; yang berbeda adalah waktu, tempat, dan suasana, jadi penentunya faktor situasi."
},
{
"q": "Seorang teknisi inspeksi di unit produksi menghubungi langsung manajer departemen pengadaan, yang berada di departemen lain dan pada jenjang lebih tinggi, untuk mempercepat perbaikan komponen. Arah komunikasi ini adalah ....",
"o": [
"vertikal ke atas",
"horizontal",
"diagonal",
"informal (grapevine)"
],
"a": 2,
"e": "Komunikasi diagonal melintasi tingkat hierarki sekaligus batas departemen untuk mempercepat pertukaran informasi spesifik."
},
{
"q": "Dalam penilaian kinerja tahunan, seorang manajer memberi hampir semua anggota timnya nilai “cukup” di tengah skala, sehingga karyawan yang sangat baik dan yang buruk tidak terbedakan. Kesalahan penilaian ini disebut ....",
"o": [
"central tendency error",
"recency error",
"halo effect",
"leniency error"
],
"a": 0,
"e": "Central tendency menumpuk penilaian di kategori rata-rata; leniency menilai terlalu murah hati, recency terlalu menimbang kejadian terakhir."
},
{
"q": "Kasus Boeing (Tugas Tutorial 3). Langkah pengelolaan lintas budaya yang paling tepat agar transformasi berjalan di banyak negara mitra adalah ....",
"o": [
"menyeragamkan seluruh praktik kerja dan gaya komunikasi mengikuti kebiasaan kantor pusat agar perubahan cepat dan seragam",
"memberi pelatihan lintas budaya dan menyesuaikan cara berkomunikasi dengan budaya setempat, sambil menjaga standar keselamatan yang sama",
"membiarkan tiap negara menetapkan standar keselamatannya sendiri sesuai kebiasaan setempat agar tidak ada penolakan",
"menghindari pembahasan perbedaan budaya dalam rapat lintas negara agar tidak memicu konflik antarmitra"
],
"a": 1,
"e": "Budaya masyarakat tertanam dalam sehingga cara berkomunikasi perlu disesuaikan, sementara standar inti seperti keselamatan tetap sama."
},
{
"q": "Kasus Microsoft (Tugas Tutorial 2). Manajemen menerapkan pengambilan keputusan yang lebih partisipatif dengan melibatkan anggota tim dalam diskusi terbuka sebelum menetapkan prioritas proyek. Gaya kepemimpinan yang sejalan dengan langkah ini adalah ....",
"o": [
"otokratis",
"demokratis",
"laissez-faire",
"transaksional"
],
"a": 1,
"e": "Gaya demokratis melibatkan anggota dalam keputusan dan mendorong diskusi terbuka; laissez-faire menyerahkan keputusan sepenuhnya kepada bawahan."
},
{
"q": "Urutan proses terbentuknya persepsi yang benar adalah ....",
"o": [
"sensasi → stimulus → interpretasi → organisasi → persepsi",
"stimulus → organisasi → sensasi → interpretasi → persepsi",
"stimulus → interpretasi → sensasi → organisasi → persepsi",
"stimulus → sensasi → organisasi → interpretasi → persepsi"
],
"a": 3,
"e": "Rangsangan diterima, diserap pancaindra, ditata di otak, lalu ditafsirkan berdasarkan pengalaman hingga menjadi persepsi."
},
{
"q": "Kasus RTO (Tugas Tutorial 1). Seorang konsultan menyimpulkan bahwa penolakan karyawan paling kuat muncul karena kebijakan diputuskan terpusat oleh kantor pusat tanpa melibatkan unit kerja, dan sistem penilaian kinerja diberlakukan seragam di seluruh perusahaan. Analisis tersebut berada pada level ....",
"o": [
"individu",
"organisasi",
"kelompok",
"lintas budaya"
],
"a": 1,
"e": "Sentralisasi keputusan, kebijakan, dan sistem penilaian adalah unsur struktur dan sistem organisasi, sehingga analisisnya berada di level organisasi."
},
{
"q": "Dua kepala divisi yang kekuatannya seimbang memperebutkan alokasi anggaran yang sama, dan tujuan keduanya saling berlawanan. Menurut model Rahim, gaya penanganan konflik yang paling cocok adalah ....",
"o": [
"compromising (kompromi)",
"obliging (akomodasi)",
"avoiding (menghindar)",
"dominating (dominasi)"
],
"a": 0,
"e": "Kompromi cocok bila kedua pihak sama kuat atau tujuannya saling bertentangan, sehingga masing- masing melepas sebagian kepentingannya."
},
{
"q": "Upaya berikut membantu mempertahankan budaya organisasi, kecuali ....",
"o": [
"menyeleksi calon karyawan yang nilainya sesuai dengan organisasi",
"keteladanan nyata dari pimpinan senior",
"membebaskan setiap unit menetapkan nilai intinya sendiri tanpa sosialisasi",
"memberi penghargaan pada perilaku yang mencerminkan nilai inti"
],
"a": 2,
"e": "Budaya dipertahankan lewat seleksi karyawan, tindakan pimpinan, sosialisasi, sistem penghargaan, serta simbol dan ritual."
},
{
"q": "Berikut tujuan utama evaluasi kinerja menurut materi, kecuali ....",
"o": [
"menghimpun kesalahan karyawan sebagai dasar menjatuhkan sanksi",
"mengukur pencapaian target kerja",
"memberikan umpan balik yang konstruktif",
"menjadi dasar perencanaan pelatihan dan SDM"
],
"a": 0,
"e": "Empat tujuan evaluasi kinerja: mengukur capaian target, umpan balik konstruktif, dasar perencanaan pelatihan dan SDM, serta acuan pemberian reward."
},
{
"q": "Seorang karyawan selalu antusias, disiplin datang tepat waktu, bertanggung jawab atas hasil kerjanya, setia pada organisasi, dan produktif. Menurut materi Modul 2, ciri-ciri ini menunjukkan tingginya ....",
"o": [
"disonansi kognitif",
"kemampuan fisik",
"nilai terminal",
"gairah kerja (work morale)"
],
"a": 3,
"e": "Antusias, disiplin, bertanggung jawab, loyal, dan produktif adalah ciri gairah kerja yang tinggi."
},
{
"q": "Seorang manajer membuat bawahannya patuh dengan ancaman surat peringatan dan mutasi ke unit terpencil bila target tidak tercapai. Sumber kekuasaan yang ia gunakan menurut French & Raven adalah ....",
"o": [
"coercive power",
"reward power",
"legitimate power",
"expert power"
],
"a": 0,
"e": "Coercive power bersumber dari kemampuan menjatuhkan sanksi atau hukuman, sedangkan reward power dari kemampuan memberi imbalan."
},
{
"q": "Masyarakat yang menekankan persaingan, ketegasan, dan keberhasilan materi, serta membedakan tegas peran sosial laki-laki dan perempuan, menurut Hofstede memiliki skor tinggi pada dimensi ....",
"o": [
"maskulinitas",
"jarak kekuasaan",
"penghindaran ketidakpastian",
"individualisme"
],
"a": 0,
"e": "Dimensi maskulinitas-feminitas menyangkut pembagian peran laki-laki dan perempuan; budaya maskulin menonjolkan ketegasan dan persaingan."
},
{
"q": "Seorang kepala tim memusatkan perhatiannya untuk melayani anggota, menyingkirkan hambatan kerja mereka, dan mengutamakan pertumbuhan setiap orang di timnya. Gaya kepemimpinan ini disebut ....",
"o": [
"authentic leadership",
"servant leadership",
"transaksional",
"laissez-faire"
],
"a": 1,
"e": "Servant leadership berfokus melayani dan menumbuhkan anggota; authentic leadership menekankan etika, kejujuran, dan kesesuaian nilai diri."
},
{
"q": "Seorang karyawan gagal memperoleh kesempatan pengembangan karier, lalu beralih menuntut kenaikan tunjangan dan keakraban dengan rekan kerja. Konsep yang paling tepat menjelaskan perilaku ini adalah ....",
"o": [
"pemenuhan kebutuhan bertingkat dalam hierarki Maslow",
"frustration–regression dalam teori ERG Alderfer",
"need for achievement dalam teori McClelland",
"faktor motivator dalam teori dua faktor Herzberg"
],
"a": 1,
"e": "Teori ERG menyatakan bila kebutuhan tingkat tinggi (growth) tidak terpenuhi, individu kembali memusatkan diri pada kebutuhan yang lebih rendah (relatedness dan existence)."
},
{
"q": "Faktor-faktor berikut berasal dari pihak yang mempersepsi (perceiver), kecuali ....",
"o": [
"pengalaman masa lalu",
"motivasi dan kebutuhan yang mendesak",
"harapan tentang apa yang akan terjadi",
"status dan latar belakang orang yang sedang dinilai"
],
"a": 3,
"e": "Status dan latar belakang orang yang dinilai adalah faktor target atau objek persepsi."
},
{
"q": "Model pengambilan keputusan yang mengakui bahwa pengambil keputusan menghadapi keterbatasan informasi dan waktu disebut model ....",
"o": [
"rasional terbatas",
"rasional",
"intuitif",
"konsensus"
],
"a": 0,
"e": "Model rasional terbatas menyadari keterbatasan informasi dan waktu."
},
{
"q": "Karyawan dari budaya yang menyukai aturan jelas, rencana rinci, dan stabilitas cenderung merasa terancam oleh perubahan mendadak. Ciri ini menunjukkan skor tinggi pada dimensi ....",
"o": [
"penghindaran ketidakpastian (uncertainty avoidance)",
"jarak kekuasaan (power distance)",
"kolektivisme",
"indulgence"
],
"a": 0,
"e": "Penghindaran ketidakpastian mengukur toleransi masyarakat terhadap ketidakpastian dan ambiguitas; budaya dengan skor tinggi lebih menyukai aturan dan stabilitas."
},
{
"q": "Seorang staf administrasi kini diberi tanggung jawab merencanakan, mengerjakan, dan memeriksa sendiri mutu laporannya, sehingga tugasnya lebih bervariasi dan bermakna. Strategi desain pekerjaan ini disebut ....",
"o": [
"job rotation",
"coaching dan mentoring",
"reward objektif",
"job enrichment"
],
"a": 3,
"e": "Job enrichment memperkaya variasi dan tanggung jawab dalam pekerjaan yang sama, sedangkan job rotation memindahkan karyawan antarperan."
},
{
"q": "Seorang atasan sejak awal yakin anggota timnya berbakat, sehingga ia memberi tugas menantang dan dukungan lebih. Kinerja tim kemudian benar-benar meningkat. Fenomena ini dikenal sebagai ....",
"o": [
"halo effect",
"self-fulfilling prophecy (Pygmalion effect)",
"manajemen impresi",
"contrast effect"
],
"a": 1,
"e": "Self-fulfilling prophecy terjadi ketika harapan seseorang terhadap orang lain memengaruhi perilaku sehingga harapan itu menjadi kenyataan."
},
{
"q": "Anggota sebuah tim proyek bersepakat bahwa setiap pesan terkait proyek harus dibalas paling lambat satu jam pada jam kerja. Kesepakatan ini merupakan contoh ....",
"o": [
"peran anggota",
"kohesivitas kelompok",
"norma kelompok",
"status anggota"
],
"a": 2,
"e": "Norma kelompok adalah standar perilaku yang diterima bersama oleh anggota."
},
{
"q": "Ketika citra perusahaan memburuk, seorang manajer menyampaikan bantahan dan penjelasan kepada publik melalui siaran pers (press release). Menurut Mintzberg, perilaku ini termasuk peran ....",
"o": [
"interpersonal, sebagai penghubung",
"informasional, sebagai juru bicara",
"pengambilan keputusan, sebagai negosiator",
"interpersonal, sebagai tokoh (figurehead)"
],
"a": 1,
"e": "Juru bicara menyampaikan informasi kondisi organisasi kepada pihak luar, misalnya lewat laporan tahunan atau siaran pers, dan termasuk peran informasional."
},
{
"q": "Seorang manajer membawahi 25 orang sekaligus sehingga kesulitan membimbing dan memantau tiap bawahannya secara efektif. Elemen desain struktur yang perlu ditinjau ulang adalah ....",
"o": [
"formalisasi",
"departementalisasi",
"span of control (rentang kendali)",
"spesialisasi"
],
"a": 2,
"e": "Span of control adalah jumlah bawahan yang dapat dikelola secara efektif oleh satu atasan."
},
{
"q": "Berikut ini karakteristik kepribadian sebagaimana dijelaskan dalam materi, kecuali ....",
"o": [
"berubah menyeluruh setiap kali situasi kerja berganti",
"relatif tetap dalam jangka panjang",
"unik, tidak ada dua individu yang identik",
"berkembang karena diperkaya pengalaman hidup"
],
"a": 0,
"e": "Kepribadian adalah pola berpikir, merasa, dan berperilaku yang relatif stabil, sehingga tidak berubah total mengikuti setiap situasi."
},
{
"q": "Kasus Microsoft (Tugas Tutorial 2). Agar anggota yang paling vokal tidak mendominasi keputusan prioritas proyek AI, setiap anggota diminta menuliskan usulannya secara mandiri, usulan dibahas secara terstruktur, lalu dipilih melalui pemungutan suara tertulis. Teknik yang digunakan adalah ....",
"o": [
"brainstorming",
"teknik Delphi",
"Nominal Group Technique (NGT)",
"voting suara terbanyak secara terbuka"
],
"a": 2,
"e": "NGT adalah diskusi terstruktur dengan pemungutan suara tertulis sehingga setiap anggota punya bobot yang sama."
},
{
"q": "Menurut teori penetapan tujuan (Locke & Latham), tujuan yang efektif memiliki ciri berikut, kecuali ....",
"o": [
"dirumuskan secara umum agar bebas ditafsirkan setiap karyawan",
"spesifik dan terdefinisi jelas",
"menantang tetapi realistis untuk dicapai",
"disertai umpan balik atas kemajuan secara berkala"
],
"a": 0,
"e": "Materi merumuskan tujuan efektif sebagai spesifik, menantang, dapat dicapai, terukur, dan disertai umpan balik."
},
{
"q": "Kejujuran, disiplin, dan tanggung jawab yang dipegang seseorang sebagai cara bertindak untuk mencapai tujuan hidupnya tergolong ....",
"o": [
"nilai terminal",
"asumsi dasar budaya",
"komponen afektif sikap",
"nilai instrumental"
],
"a": 3,
"e": "Nilai instrumental adalah nilai tentang cara mencapai tujuan, sedangkan nilai terminal adalah tujuan hidup yang ingin dicapai."
},
{
"q": "Kasus RTO (Tugas Tutorial 1). Penyebab stres berikut yang tergolong faktor organisasi adalah ....",
"o": [
"ketidakpastian kondisi ekonomi dan politik",
"persoalan keuangan pribadi karyawan",
"peningkatan target kerja disertai tuntutan beradaptasi dengan sistem kerja baru",
"karakteristik kepribadian karyawan yang mudah cemas"
],
"a": 2,
"e": "Beban kerja dan tuntutan tugas yang berlebih adalah sumber stres dari organisasi."
},
{
"q": "Perusahaan menghimpun karyawan dari bagian teknik, pemasaran, hukum, dan keuangan untuk menyelesaikan satu proyek pengembangan produk baru. Tipe tim ini adalah ....",
"o": [
"tim pemecahan masalah",
"tim virtual",
"tim mandiri (self-managed)",
"tim lintas fungsi"
],
"a": 3,
"e": "Tim lintas fungsi beranggotakan orang dari area kerja berbeda untuk proyek khusus."
},
{
"q": "Ketika seorang karyawan membaca dan menafsirkan makna email kebijakan dari manajemen, dalam model proses komunikasi ia sedang melakukan ....",
"o": [
"encoding",
"decoding",
"umpan balik (feedback)",
"pemilihan saluran (channel)"
],
"a": 1,
"e": "Decoding adalah tahap penerima menerjemahkan pesan yang diterima."
},
{
"q": "Beberapa karyawan dari bagian berbeda rutin makan siang bersama dan saling membantu karena hobi yang sama, tanpa pernah ditugaskan atasan. Kumpulan ini merupakan ....",
"o": [
"kelompok informal",
"kelompok formal",
"tim lintas fungsi",
"tim virtual"
],
"a": 0,
"e": "Kelompok informal tumbuh alami dari hubungan sosial dan kebutuhan bersama, sedangkan kelompok formal dibentuk resmi oleh organisasi."
},
{
"q": "Konsep budaya organisasi, yaitu pandangan hidup bersama yang diinternalisasikan dan diwariskan kepada anggota baru, masuk ke studi perilaku keorganisasian terutama lewat kontribusi disiplin ....",
"o": [
"sosiologi",
"psikologi",
"antropologi",
"ilmu politik"
],
"a": 2,
"e": "Antropologi mempelajari hubungan manusia dengan lingkungannya yang melahirkan budaya; sosiologi menyumbang dinamika kelompok, ilmu politik menyumbang kekuasaan dan konflik."
},
{
"q": "Dalam siklus hubungan evaluasi kinerja dan penghargaan menurut materi, tahap yang langsung mengikuti pemberian reward yang adil adalah ....",
"o": [
"pemetaan skor hasil penilaian",
"evaluasi kinerja periode berikutnya",
"penguatan motivasi",
"penetapan target baru yang lebih tinggi"
],
"a": 2,
"e": "Siklusnya: evaluasi kinerja, hasil penilaian, pemberian reward, penguatan motivasi, lalu peningkatan kinerja."
},
{
"q": "Seorang manajer mengumumkan kabar baik dengan nada datar, wajah tegang, dan menghindari kontak mata, sehingga karyawan meragukan pesannya. Sumber keraguan tersebut adalah unsur komunikasi ....",
"o": [
"tulisan",
"diagonal",
"informal (grapevine)",
"nonverbal"
],
"a": 3,
"e": "Intonasi suara, ekspresi wajah, dan kontak mata adalah komunikasi nonverbal yang bisa melemahkan pesan verbal."
},
{
"q": "Seorang direktur melibatkan para kepala unit dalam menyusun rencana perbaikan mutu agar mereka ikut menyepakati dan mendukung pelaksanaannya. Taktik pengaruh yang digunakan adalah ....",
"o": [
"rational persuasion",
"inspirational appeals",
"coalition tactics",
"consultation"
],
"a": 3,
"e": "Consultation melibatkan target dalam perencanaan untuk meningkatkan kesepakatan."
},
{
"q": "Seorang manajer menempatkan staf yang kuat penalaran logisnya di posisi analis data, bukan di posisi lapangan yang menuntut stamina tinggi. Prinsip yang ia terapkan adalah ....",
"o": [
"kesesuaian nilai individu dengan nilai organisasi (person–organization fit)",
"kesesuaian kemampuan dengan tuntutan pekerjaan (person–job fit)",
"rotasi pekerjaan untuk mencegah kebosanan",
"penilaian berdasarkan halo effect"
],
"a": 1,
"e": "Materi Modul 2 menegaskan bahwa makin sesuai kemampuan dengan tuntutan pekerjaan (job fit), makin besar peluang kinerja optimal."
},
{
"q": "Dalam konfigurasi organisasi Mintzberg, organisasi yang mengandalkan tenaga ahli profesional, bekerja dengan standar keahlian, dan menerapkan desentralisasi tinggi disebut ....",
"o": [
"machine bureaucracy",
"professional bureaucracy",
"simple structure",
"adhocracy"
],
"a": 1,
"e": "Professional bureaucracy bertumpu pada profesional berstandar keahlian dengan desentralisasi tinggi."
},
{
"q": "Berikut fungsi nilai individu dalam organisasi menurut materi, kecuali ....",
"o": [
"menjadi pedoman utama bagi perilaku individu",
"memengaruhi proses pengambilan keputusan",
"menetapkan garis wewenang formal antarjabatan",
"menentukan tingkat etika kerja karyawan"
],
"a": 2,
"e": "Garis wewenang formal diatur struktur organisasi, bukan nilai individu; tiga opsi lainnya termasuk lima fungsi nilai dalam materi."
},
{
"q": "Perusahaan multinasional yang menjalankan program perubahan budaya di banyak negara perlu memperhitungkan budaya masyarakat setempat. Alasan yang paling tepat menurut Hofstede adalah ....",
"o": [
"budaya organisasi selalu lebih kuat daripada budaya nasional, sehingga budaya lokal cukup diabaikan",
"budaya masyarakat hanya tampak pada artefak, sehingga mudah diseragamkan",
"perbedaan budaya hanya ditentukan oleh tingkat kemajuan ekonomi suatu negara",
"budaya masyarakat tertanam sejak kecil dalam nilai yang sering tidak disadari, sehingga lebih dalam daripada budaya organisasi yang berupa praktik"
],
"a": 3,
"e": "Hofstede (2011) menjelaskan bahwa budaya masyarakat atau nasional diperoleh sejak kecil dan bersemayam pada nilai, sedangkan budaya organisasi lebih berupa praktik yang dipelajari di tempat kerja."
},
{
"q": "Menurut materi, proses pembentukan budaya organisasi berawal dari ....",
"o": [
"norma perilaku yang disepakati anggota",
"sistem penghargaan bagi perilaku teladan",
"sosialisasi bagi karyawan baru",
"falsafah awal dan visi pendiri organisasi"
],
"a": 3,
"e": "Budaya bermula dari falsafah pendiri, lalu menjadi nilai utama, norma, dan budaya; penghargaan dan sosialisasi termasuk cara mempertahankan budaya."
},
{
"q": "Dalam proses terjadinya konflik, persaingan memperebutkan sumber daya dan ambiguitas peran berada pada tahap ....",
"o": [
"konflik dipersepsikan dan dirasakan",
"tindakan nyata seperti perdebatan dan resistensi",
"kondisi pemicu konflik",
"dampak fungsional atau disfungsional"
],
"a": 2,
"e": "Persaingan sumber daya dan ambiguitas peran adalah kondisi awal yang memicu konflik sebelum disadari, dirasakan, dan diwujudkan dalam tindakan."
},
{
"q": "Kapasitas individu untuk bernalar secara logis, menguraikan komponen masalah, dan menemukan solusi yang efektif termasuk kemampuan ....",
"o": [
"fisik",
"intelektual",
"kecerdasan emosional",
"konatif"
],
"a": 1,
"e": "Berpikir, menganalisis, dan memecahkan masalah adalah unsur kemampuan intelektual (mental)."
},
{
"q": "Strategi manajemen stres berikut dilakukan pada tingkat organisasi, kecuali ....",
"o": [
"teknik relaksasi dan meditasi yang dilakukan karyawan secara pribadi",
"memperbaiki desain pekerjaan agar beban kerja seimbang",
"menyediakan program konseling (Employee Assistance Program)",
"membangun komunikasi organisasi yang jelas dan terbuka"
],
"a": 0,
"e": "Relaksasi dan meditasi adalah strategi tingkat individu, bersama manajemen waktu, olahraga, dan dukungan sosial."
},
{
"q": "Keputusan tentang jadwal sif harian dan urutan pemeriksaan rutin di lantai produksi, yang terstruktur dan diambil manajemen tingkat bawah, tergolong keputusan ....",
"o": [
"strategis",
"taktis",
"intuitif",
"operasional"
],
"a": 3,
"e": "Keputusan operasional bersifat harian, rutin, dan terstruktur; taktis berjangka menengah, strategis berjangka panjang."
},
{
"q": "Budaya yang menjunjung ketekunan, sikap hemat, dan kesediaan berinvestasi demi imbalan di masa depan menunjukkan skor tinggi pada dimensi Hofstede ....",
"o": [
"indulgence",
"maskulinitas",
"orientasi jangka panjang",
"jarak kekuasaan"
],
"a": 2,
"e": "Orientasi jangka panjang menekankan ketekunan dan hemat untuk hasil masa depan; indulgence menyangkut kebebasan menikmati hidup."
},
{
"q": "Berikut merupakan bentuk sisi gelap kekuasaan (abuse of power), kecuali ....",
"o": [
"memberdayakan anggota tim agar berkembang dan berkontribusi maksimal",
"memakai wewenang untuk kepentingan pribadi",
"menakut-nakuti bawahan agar patuh",
"memanfaatkan jabatan untuk keuntungan pribadi dengan melanggar aturan"
],
"a": 0,
"e": "Memberdayakan anggota tim adalah praktik positif kekuasaan."
},
{
"q": "Seorang analis menilai sebuah perusahaan dari ukurannya, teknologi yang dipakai, lingkungan yang dihadapi, serta tujuan dan strateginya. Kelompok dimensi organisasi yang sedang ia nilai adalah ....",
"o": [
"dimensi struktural",
"aspek formal dalam metafora gunung es",
"proses penciptaan nilai tambah",
"dimensi kontekstual"
],
"a": 3,
"e": "Ukuran, teknologi, lingkungan, tujuan dan strategi, serta budaya adalah dimensi kontekstual yang melingkupi organisasi."
},
{
"q": "Berikut karakteristik komunikasi informal (grapevine) dalam organisasi, kecuali ....",
"o": [
"informasi menyebar sangat cepat antaranggota",
"fleksibel dan tidak terikat prosedur baku",
"dapat dihapus sepenuhnya oleh manajer melalui aturan formal",
"rentan distorsi sehingga memicu rumor"
],
"a": 2,
"e": "Materi menegaskan manajer tidak dapat menghilangkan jaringan informal, melainkan perlu memantaunya untuk meluruskan rumor."
},
{
"q": "Hal berikut merupakan keterbatasan kerja tim, kecuali ....",
"o": [
"konflik dari perbedaan pendapat yang tidak terkelola",
"sinergi, yaitu hasil kolektif melebihi jumlah hasil individu",
"biaya koordinasi berupa waktu dan sumber daya",
"pengambilan keputusan lambat karena konsensus berlarut-larut"
],
"a": 1,
"e": "Sinergi adalah manfaat tim, bukan keterbatasannya."
},
{
"q": "Dalam studi Ohio State, dimensi initiating structure menggambarkan perilaku pemimpin yang ....",
"o": [
"membangun hubungan kerja, rasa percaya, dan kepedulian pada bawahan",
"mengutamakan hubungan interpersonal dan keterlibatan karyawan",
"menekankan perencanaan kerja, penetapan peran, dan pencapaian tujuan",
"mengandalkan sifat bawaan seperti kecerdasan dan integritas"
],
"a": 2,
"e": "Initiating structure menekankan pengaturan tugas, peran, dan pencapaian tujuan."
}
]
},
{
"id": "pb",
"name": "Proses Bisnis",
"questions": [
{
"q": "Project Management Institute (PMI) menetapkan lima kelompok proses yang membentuk siklus hidup manajemen proyek. Urutan yang benar adalah ....",
"o": [
"perencanaan → inisiasi → pelaksanaan → penutupan → pemantauan dan pengendalian",
"inisiasi → pelaksanaan → perencanaan → pemantauan dan pengendalian → penutupan",
"inisiasi → perencanaan → pelaksanaan → pemantauan dan pengendalian → penutupan",
"inisiasi → perencanaan → pemantauan dan pengendalian → pelaksanaan → penutupan"
],
"a": 2,
"e": "Lima kelompok proses PMI: Initiating, Planning, Executing, Monitoring & Controlling, dan Closing. (BMP STSI4206, Tinjauan Mata Kuliah; Materi Inisiasi 3)"
},
{
"q": "Sistem informasi tingkat strategis yang berada di puncak piramida teknologi perusahaan dan dirancang untuk dioperasikan langsung oleh eksekutif adalah ....",
"o": [
"Sistem Pemrosesan Transaksi (TPS)",
"Sistem Informasi Manajemen (MIS)",
"data warehouse",
"Sistem Informasi Eksekutif (EIS)"
],
"a": 3,
"e": "EIS berada di puncak piramida; TPS dan MIS adalah sumber data internalnya. (Materi Inisiasi 7)"
},
{
"q": "Ciri yang paling membedakan pekerja pengetahuan (knowledge worker) adalah ....",
"o": [
"mengandalkan keahlian dan analisis data untuk mengubah informasi menjadi solusi",
"mengutamakan keterampilan fisik dan mengikuti prosedur kerja yang selalu tetap",
"hanya bekerja di divisi teknologi informasi",
"menyimpan keahlian secara pribadi agar posisinya sulit digantikan"
],
"a": 0,
"e": "Pekerja pengetahuan bekerja dengan pemikiran: mengolah informasi kompleks menjadi solusi nyata, di fungsi apa pun. (Materi Inisiasi 6)"
},
{
"q": "Pernyataan yang paling tepat menggambarkan perbedaan proses bisnis dan analisis proses bisnis adalah ....",
"o": [
"proses bisnis berfokus pada perbaikan, sedangkan analisis proses bisnis berfokus pada pelaksanaan aktivitas rutin",
"proses bisnis menghasilkan output bagi pelanggan, sedangkan analisis proses bisnis memahami dan mengevaluasi proses itu untuk perbaikan",
"proses bisnis hanya dijalankan sekali untuk setiap pelanggan, sedangkan analisis proses bisnis dijalankan berulang dengan cara yang sama",
"proses bisnis hanya ada di perusahaan manufaktur, sedangkan analisis proses bisnis berlaku untuk semua jenis organisasi"
],
"a": 1,
"e": "Proses bisnis adalah aktivitas terstruktur yang menghasilkan output spesifik; analisisnya memahami, mendokumentasikan, dan mengevaluasi proses itu untuk perbaikan. (Materi Inisiasi 1)"
},
{
"q": "Istilah Six Sigma merujuk pada tingkat kinerja proses yang setara dengan ....",
"o": [
"3,4 cacat per sejuta peluang (DPMO), atau 99,99966% output bebas cacat",
"3,4 cacat per seribu peluang, atau 99,66% output bebas cacat",
"6 cacat per sejuta unit produk, atau 99,9994% output bebas cacat",
"34 cacat per sejuta peluang, atau 99,9966% output bebas cacat"
],
"a": 0,
"e": "Six Sigma berarti hanya 3,4 cacat per sejuta peluang, setara 99,99966% output bebas cacat. (Materi Inisiasi 2)"
},
{
"q": "Urutan lima langkah proses manajemen risiko yang benar adalah ....",
"o": [
"identifikasi → prioritas → analisis → pemantauan → penerapan solusi",
"analisis → identifikasi → penerapan solusi → prioritas → pemantauan",
"identifikasi → analisis → penerapan solusi → prioritas → pemantauan",
"identifikasi → analisis → prioritas → penerapan solusi → pemantauan"
],
"a": 3,
"e": "Risiko dikenali, dinilai kemungkinan dan dampaknya, diurutkan, ditangani, lalu dipantau berkelanjutan. (Materi Inisiasi 5)"
},
{
"q": "Berikut ini termasuk sepuluh area pengetahuan dalam PMBOK, KECUALI ....",
"o": [
"manajemen teknologi proyek",
"manajemen pengadaan proyek",
"manajemen kualitas proyek",
"manajemen biaya proyek"
],
"a": 0,
"e": "Sepuluh area: integrasi, ruang lingkup, jadwal, biaya, kualitas, sumber daya, komunikasi, risiko, pengadaan, dan pemangku kepentingan. (Wikipedia: PMBOK)"
},
{
"q": "Pengetahuan implisit yang sulit didokumentasikan dan sering hilang ketika karyawan meninggalkan organisasi disebut ....",
"o": [
"pengetahuan eksplisit",
"overload informasi",
"pengetahuan tacit",
"data transaksional"
],
"a": 2,
"e": "Kehilangan pengetahuan tacit adalah salah satu tantangan manajemen pengetahuan; pengetahuan eksplisit sudah terdokumentasi. (Materi Inisiasi 6)"
},
{
"q": "Sebuah perusahaan ingin membangun proses layanan yang belum pernah ada sebelumnya dengan pendekatan Six Sigma. Metodologi yang paling sesuai adalah ....",
"o": [
"DMAIC (Define, Measure, Analyze, Improve, Control)",
"SIPOC (Supplier, Input, Process, Output, Customer)",
"DMADV (Define, Measure, Analyze, Design, Verify)",
"Value Stream Mapping"
],
"a": 2,
"e": "DMADV untuk mengembangkan proses baru; DMAIC untuk memperbaiki proses yang sudah ada. (Materi Inisiasi 2)"
},
{
"q": "Aliran informasi dari sistem level bawah ke EIS yang benar adalah ....",
"o": [
"MIS menangkap transaksi harian → TPS merangkum menjadi laporan terstruktur → EIS menyajikan informasi strategis",
"TPS menangkap transaksi harian → MIS merangkum menjadi laporan terstruktur → EIS menyaring dan menyajikan informasi strategis",
"EIS menangkap transaksi harian → MIS merangkum menjadi laporan terstruktur → TPS menyajikan informasi strategis",
"TPS menangkap transaksi harian → EIS merangkum menjadi laporan terstruktur → MIS menyajikan informasi strategis"
],
"a": 1,
"e": "TPS mencatat data operasional, MIS mengagregasinya, lalu EIS menyaring informasi yang relevan bagi eksekutif. (Materi Inisiasi 7)"
},
{
"q": "Kelompok proses yang bertujuan mendefinisikan proyek baru, memperoleh otorisasi, dan mengidentifikasi pemangku kepentingan utama adalah ....",
"o": [
"perencanaan",
"pelaksanaan",
"penutupan",
"inisiasi"
],
"a": 3,
"e": "Inisiasi memulai proyek secara resmi; perencanaan baru menetapkan ruang lingkup dan rencana tindakan setelah proyek diotorisasi. (Materi Inisiasi 3)"
},
{
"q": "BPMN sebagai standar global pemodelan proses bisnis dikembangkan oleh ....",
"o": [
"Object Management Group (OMG)",
"Project Management Institute (PMI)",
"American Productivity and Quality Center (APQC)",
"Motorola"
],
"a": 0,
"e": "BPMN dikembangkan OMG dan digambarkan lewat Business Process Diagram; PMI menerbitkan PMBOK. (Materi Inisiasi 8; Maulana, 2023)"
},
{
"q": "Dalam siklus manajemen, fungsi yang mengukur hasil dan melakukan tindakan korektif bila diperlukan adalah ....",
"o": [
"pengorganisasian",
"pengendalian",
"pelaksanaan",
"evaluasi"
],
"a": 1,
"e": "Siklus manajemen: perencanaan → pengorganisasian → pelaksanaan → pengendalian (ukur dan koreksi) → evaluasi (tinjau keseluruhan proses). (Materi Inisiasi 2)"
},
{
"q": "Pada tahap analisis risiko, setiap risiko dievaluasi berdasarkan dua faktor kunci, yaitu ....",
"o": [
"biaya dan jadwal penanganannya",
"jumlah pemangku kepentingan dan luas ruang lingkup",
"sumber data internal dan eksternal",
"kemungkinan terjadinya dan dampaknya"
],
"a": 3,
"e": "Analisis risiko menilai kemungkinan dan dampak, secara kualitatif (rendah, sedang, tinggi) atau kuantitatif (nilai numerik). (Materi Inisiasi 5)"
},
{
"q": "Elemen BPMN berbentuk belah ketupat yang mengendalikan percabangan dan penggabungan alur adalah ....",
"o": [
"gateway",
"event",
"activity",
"association"
],
"a": 0,
"e": "Gateway berbentuk belah ketupat; event berbentuk lingkaran dan activity persegi panjang bersudut membulat. (Materi Inisiasi 8)"
},
{
"q": "Ciri yang membedakan proyek dari kegiatan operasional atau proses bisnis rutin adalah ....",
"o": [
"dijalankan berulang kali dengan cara yang sama tanpa batas waktu akhir",
"selalu menghasilkan output yang identik dengan proyek sebelumnya",
"tidak memerlukan otorisasi karena langsung masuk tahap pelaksanaan",
"bersifat sementara, punya awal dan akhir yang jelas, serta menghasilkan produk, layanan, atau hasil yang unik"
],
"a": 3,
"e": "PMI mendefinisikan proyek sebagai upaya sementara untuk menghasilkan sesuatu yang unik; pekerjaan berulang dengan cara sama adalah ciri proses bisnis rutin. (PMI, dalam LibreTexts; Materi Inisiasi 1)"
},
{
"q": "Berikut ini adalah karakteristik utama pekerja pengetahuan, KECUALI ....",
"o": [
"pemikiran analitis terhadap data yang kompleks",
"menjalankan tugas berulang tanpa perlu mempelajari hal baru",
"inovasi berkelanjutan dalam memecahkan masalah",
"kolaborasi efektif dalam tim lintas fungsi"
],
"a": 1,
"e": "Empat karakteristiknya: pemikiran analitis, inovasi berkelanjutan, kolaborasi efektif, dan pembelajaran kontinu. (Materi Inisiasi 6)"
},
{
"q": "Berikut ini merupakan karakteristik utama proses bisnis, KECUALI ....",
"o": [
"dijalankan satu kali dengan cara yang berbeda setiap kali",
"memiliki input dan output yang jelas",
"melibatkan sumber daya manusia dan teknologi",
"terdiri atas aktivitas yang berurutan atau paralel"
],
"a": 0,
"e": "Proses bisnis justru dilaksanakan berulang kali dengan cara yang sama. (Materi Inisiasi 1)"
},
{
"q": "Dalam siklus manajemen pengetahuan, tahap yang dilakukan setelah organisasi dan penyimpanan pengetahuan adalah ....",
"o": [
"aplikasi dan pemanfaatan pengetahuan",
"akuisisi dan penciptaan pengetahuan",
"berbagi dan transfer pengetahuan",
"identifikasi pengetahuan"
],
"a": 2,
"e": "Siklusnya: identifikasi → akuisisi dan penciptaan → organisasi dan penyimpanan → berbagi dan transfer → aplikasi dan pemanfaatan. (Materi Inisiasi 6)"
},
{
"q": "Berikut ini termasuk lima prinsip dasar Lean, KECUALI ....",
"o": [
"nilai (value) menurut pelanggan",
"sistem dorong (push) untuk memaksimalkan jumlah output",
"aliran nilai (value stream)",
"kesempurnaan (perfection)"
],
"a": 1,
"e": "Lima prinsip Lean: nilai, aliran nilai, aliran kerja, sistem tarik (pull), dan kesempurnaan; yang benar sistem tarik, bukan sistem dorong. (Materi Inisiasi 3)"
},
{
"q": "Berikut ini termasuk connecting objects dalam BPMN, KECUALI ....",
"o": [
"sequence flow",
"message flow",
"exclusive gateway",
"association"
],
"a": 2,
"e": "Connecting objects terdiri atas sequence flow, message flow, dan association; exclusive gateway termasuk gateway. (Materi Inisiasi 8)"
},
{
"q": "PMBOK edisi ke-7 yang diterbitkan Project Management Institute pada 2021 memuat ....",
"o": [
"8 prinsip dan 12 domain kinerja proyek",
"12 prinsip dan 8 domain kinerja proyek",
"5 prinsip dan 10 domain kinerja proyek",
"10 prinsip dan 5 kelompok proses"
],
"a": 1,
"e": "PMBOK edisi ke-7 memuat 12 prinsip dasar dan 8 domain kinerja yang saling terhubung. (Materi Inisiasi 3)"
},
{
"q": "Berikut ini termasuk delapan jenis pemborosan yang dikenali dalam Lean, KECUALI ....",
"o": [
"waktu tunggu",
"pemrosesan berlebih",
"variasi output yang tidak diinginkan",
"bakat yang tidak dimanfaatkan"
],
"a": 2,
"e": "Mengurangi variasi adalah fokus Six Sigma; delapan pemborosan Lean: kelebihan produksi, waktu tunggu, transportasi, pemrosesan berlebih, inventori, gerakan, cacat, bakat tak dimanfaatkan. (Materi Inisiasi 3 dan 2)"
},
{
"q": "Dalam siklus hubungan proses bisnis, kinerja, dan pengukuran, tahap yang membandingkan hasil aktual dengan target untuk menemukan kesenjangan dan akar masalah adalah ....",
"o": [
"analisis",
"pengukuran",
"implementasi",
"perbaikan"
],
"a": 0,
"e": "Siklusnya desain → implementasi → pengukuran → analisis → perbaikan; pengukuran hanya mengumpulkan data KPI, perbandingan dengan target terjadi di tahap analisis. (Materi Inisiasi 1)"
},
{
"q": "Berikut ini merupakan karakteristik pembeda Sistem Informasi Eksekutif (EIS), KECUALI ....",
"o": [
"berfokus pada kebutuhan eksekutif",
"menyajikan pandangan holistik atas operasi bisnis",
"berfokus pada pencatatan rinci setiap transaksi operasional harian",
"berorientasi pada masa depan dan strategi"
],
"a": 2,
"e": "EIS membantu eksekutif 'melihat hutan, bukan hanya pohon'; pencatatan rinci transaksi harian adalah tugas TPS. (Materi Inisiasi 7)"
},
{
"q": "Berikut ini termasuk aktivitas utama manajemen pengetahuan, KECUALI ....",
"o": [
"mencatat dan memproses transaksi penjualan harian",
"menemukan dan memperbaiki error dalam database",
"membangun sistem peringatan dini dari pola data historis",
"membangun komunitas praktisi untuk berbagi pengetahuan"
],
"a": 0,
"e": "Memproses transaksi harian adalah fungsi TPS; aktivitas manajemen pengetahuan meliputi perbaikan kesalahan, antisipasi masalah, serta kolaborasi dan berbagi. (Materi Inisiasi 6 dan 7)"
},
{
"q": "Tim analis menggambarkan alur penanganan pesanan apa adanya seperti yang berjalan sekarang, sebelum merancang alur baru. Komponen analisis proses bisnis yang sedang dikerjakan adalah ....",
"o": [
"pemodelan proses masa depan (to-be process modeling)",
"pemetaan proses saat ini (as-is process mapping)",
"benchmarking dengan praktik terbaik industri",
"simulasi skenario proses dengan model komputer"
],
"a": 1,
"e": "As-is mapping memotret proses yang berjalan sekarang; to-be modeling baru dibuat setelah masalahnya dipahami. (Materi Inisiasi 1)"
},
{
"q": "Filosofi Lean dalam manajemen proyek berasal dari ... dan berfokus pada ....",
"o": [
"Toyota Production System; identifikasi dan eliminasi pemborosan (muda)",
"Motorola; pengurangan variasi proses berbasis statistik",
"Project Management Institute; standardisasi kelompok proses proyek",
"Object Management Group; notasi grafis untuk alur kerja"
],
"a": 0,
"e": "Lean lahir dari Toyota Production System (1950-an); Motorola asal Six Sigma, PMI penerbit PMBOK, OMG pengembang BPMN. (Materi Inisiasi 3)"
},
{
"q": "Berikut ini merupakan metode identifikasi risiko, KECUALI ....",
"o": [
"brainstorming dengan tim lintas departemen",
"analisis data historis dan tren industri",
"analisis SWOT",
"penetapan Key Risk Indicators (KRI)"
],
"a": 3,
"e": "KRI adalah komponen tahap pemantauan risiko, bukan metode identifikasi. (Materi Inisiasi 5)"
},
{
"q": "Untuk menjaga agar hasil perbaikan bertahan, tahap Control pada DMAIC menggunakan alat berikut, KECUALI ....",
"o": [
"control chart",
"Design of Experiments",
"Standard Operating Procedures (SOP)",
"monitoring plan"
],
"a": 1,
"e": "Design of Experiments adalah alat tahap Improve; tiga lainnya alat tahap Control. (Materi Inisiasi 2)"
},
{
"q": "Proses manajemen komunikasi proyek yang mengawasi komunikasi sepanjang siklus hidup proyek agar pesan sampai ke pemangku kepentingan yang dituju, dipahami, dan mendapat umpan balik adalah ....",
"o": [
"merencanakan manajemen komunikasi (plan communications management)",
"mengelola komunikasi (manage communications)",
"menyusun project charter",
"memantau komunikasi (monitor communications)"
],
"a": 3,
"e": "Tiga proses komunikasi: merencanakan, mengelola (membuat dan mendistribusikan informasi), dan memantau (memastikan pesan dipahami dan berbalas umpan balik). (Wrike)"
},
{
"q": "Untuk risiko data destinasi yang tidak akurat, manajer proyek Eco-Travel memvalidasi data sebelum dipakai, menetapkan standar kelengkapan, dan tidak memakai data yang belum terverifikasi sebagai data final. Strategi penanganan risiko ini termasuk ....",
"o": [
"menghindari (avoid)",
"transfer",
"mitigasi (mitigate)",
"menerima (accept)"
],
"a": 2,
"e": "Validasi dan standar data adalah kontrol preventif yang mengurangi kemungkinan dan dampak risiko; menghindari berarti menghentikan aktivitasnya. (Tugas Tutorial 2; Materi Inisiasi 5)"
},
{
"q": "Berikut ini merupakan prinsip dasar Six Sigma, KECUALI ....",
"o": [
"keputusan diambil berdasarkan intuisi dan pengalaman pimpinan",
"fokus pada pelanggan",
"berbasis data dan fakta",
"manajemen proaktif"
],
"a": 0,
"e": "Prinsip Six Sigma: fokus pelanggan, berbasis data dan fakta, perbaikan proses, manajemen proaktif, dan kolaborasi tanpa batas. (Materi Inisiasi 2)"
},
{
"q": "Pada siklus hidup manajemen proyek, deliverables proyek dibangun pada fase ....",
"o": [
"eksekusi",
"perencanaan",
"monitoring",
"penutupan"
],
"a": 0,
"e": "Eksekusi mengimplementasikan rencana dan membangun deliverables; perencanaan hanya menyusun rencana aksi rinci. (Materi Inisiasi 4)"
},
{
"q": "Project Charter, Voice of Customer (VOC), dan diagram SIPOC umumnya digunakan pada tahap DMAIC ....",
"o": [
"Measure",
"Analyze",
"Control",
"Define"
],
"a": 3,
"e": "Define memakai alat-alat itu untuk menetapkan masalah, ruang lingkup, dan tujuan proyek. (Materi Inisiasi 2)"
},
{
"q": "Dalam kasus Diskusi 2, sebuah pabrik mengalami kenaikan produk cacat. Tim lalu menelusuri apakah penyebabnya berasal dari operator, metode kerja, kondisi mesin, atau material. Kegiatan ini berada pada tahap DMAIC dan memakai alat ....",
"o": [
"Analyze, dengan fishbone diagram",
"Measure, dengan process capability analysis",
"Improve, dengan pilot implementation",
"Define, dengan diagram SIPOC"
],
"a": 0,
"e": "Mencari akar penyebab per kategori (manusia, metode, mesin, material) adalah kerja tahap Analyze dengan fishbone diagram. (Diskusi 2; Materi Inisiasi 2)"
},
{
"q": "Supervisor gudang bertanya berulang kali: mengapa pengiriman terlambat? Karena stok kosong. Mengapa stok kosong? Karena pesanan ke pemasok terlambat. Pertanyaan diteruskan sampai akar penyebab ditemukan. Teknik root cause analysis ini disebut ....",
"o": [
"time and motion study",
"value stream mapping",
"5 Whys",
"simulation"
],
"a": 2,
"e": "5 Whys menelusuri akar penyebab dengan bertanya 'mengapa' berulang kali; fishbone diagram dan fault tree analysis adalah metode root cause analysis lainnya. (Materi Inisiasi 1)"
},
{
"q": "Setiap pekan manajer proyek membandingkan progres pekerjaan dengan jadwal dan anggaran, lalu menyetujui tindakan korektif ketika pekerjaan tertinggal. Kegiatan ini termasuk kelompok proses ....",
"o": [
"pemantauan dan pengendalian",
"perencanaan",
"pelaksanaan",
"penutupan"
],
"a": 0,
"e": "Pemantauan dan pengendalian melacak, meninjau, dan mengatur kemajuan serta kinerja proyek; pelaksanaan hanya menjalankan pekerjaan sesuai rencana. (Materi Inisiasi 3)"
},
{
"q": "Agar kerugian akibat kerusakan server tidak ditanggung sendiri, perusahaan membeli polis asuransi dan menyerahkan pengelolaan hosting kepada vendor melalui kontrak. Strategi penanganan risiko ini adalah ....",
"o": [
"menghindari (avoid)",
"mitigasi (mitigate)",
"transfer",
"menerima (accept)"
],
"a": 2,
"e": "Transfer memindahkan risiko ke pihak ketiga lewat asuransi, outsourcing, atau kontrak vendor; mitigasi hanya mengurangi kemungkinan atau dampaknya. (Materi Inisiasi 5)"
},
{
"q": "Pengukuran kinerja proses penting karena memungkinkan perusahaan melakukan hal berikut, KECUALI ....",
"o": [
"memperbaiki proses cukup berdasarkan intuisi dan asumsi pimpinan",
"mengidentifikasi masalah secara dini",
"mengambil keputusan berbasis data",
"mengalokasikan sumber daya dengan tepat"
],
"a": 0,
"e": "Tanpa pengukuran, perbaikan hanya mengandalkan intuisi; prinsipnya 'apa yang tidak dapat diukur, tidak dapat dikelola' (Peter Drucker). (Materi Inisiasi 1)"
},
{
"q": "Pada diagram pemesanan produk, proses toko dan sistem pembayaran eksternal digambar dalam dua pool terpisah. Pertukaran pesan di antara keduanya dimodelkan dengan ....",
"o": [
"sequence flow",
"association",
"lane",
"message flow"
],
"a": 3,
"e": "Message flow menghubungkan dua partisipan (pool) yang berbeda; sequence flow mengurutkan aktivitas dalam satu proses. (Materi Inisiasi 8; OMG BPMN)"
},
{
"q": "Tim Six Sigma menyusun data collection plan dan memeriksa keandalan alat ukur melalui measurement system analysis untuk memperoleh data dasar kinerja proses saat ini. Kegiatan ini berada pada tahap DMAIC ....",
"o": [
"Define",
"Analyze",
"Improve",
"Measure"
],
"a": 3,
"e": "Measure mengumpulkan data dasar kinerja dengan data collection plan, process capability analysis, dan measurement system analysis. (Materi Inisiasi 2)"
},
{
"q": "Dalam tahap prioritas risiko, kategori yang memerlukan perhatian dan intervensi manajemen senior secara segera adalah risiko ....",
"o": [
"tinggi",
"sedang",
"ekstrem",
"rendah"
],
"a": 2,
"e": "Ekstrem butuh intervensi manajemen senior segera; tinggi butuh mitigasi aktif, sedang pemantauan berkala, rendah dapat diterima. (Materi Inisiasi 5)"
},
{
"q": "Sistem terstruktur yang terdiri atas prinsip, teknik, dan prosedur untuk membantu tim mengelola proyek secara efektif dari awal hingga akhir disebut ....",
"o": [
"siklus manajemen pengetahuan",
"Business Process Diagram",
"register risiko",
"metodologi manajemen proyek"
],
"a": 3,
"e": "Metodologi manajemen proyek (misalnya Lean dan PMBOK) mengatur perencanaan, pengelolaan sumber daya, dan pengukuran kemajuan proyek. (Materi Inisiasi 3)"
},
{
"q": "Perubahan mendasar PMBOK edisi ke-7 dibandingkan pendekatan sebelumnya adalah ....",
"o": [
"beralih dari pendekatan berbasis prinsip ke berbasis proses yang lebih rinci dan kaku",
"hanya mendukung pendekatan prediktif sehingga agile tidak lagi dibahas",
"beralih dari berbasis proses ke berbasis prinsip yang menekankan hasil (outcomes)",
"menghapus pemantauan dan pengendalian karena dianggap bagian dari pelaksanaan"
],
"a": 2,
"e": "Edisi ke-7 berbasis prinsip, menekankan outcomes, dan mendukung pendekatan prediktif, adaptif, agile, serta hybrid. (Materi Inisiasi 3)"
},
{
"q": "Keluaran utama dari proses merencanakan manajemen komunikasi adalah ....",
"o": [
"register risiko yang mencatat seluruh potensi risiko yang dapat memengaruhi tujuan proyek",
"project charter yang mendefinisikan masalah dan ruang lingkup proyek perbaikan",
"laporan analisis varian anggaran proyek",
"rencana manajemen komunikasi: mengapa, kepada siapa, apa, bagaimana, dan kapan informasi disampaikan"
],
"a": 3,
"e": "Perencanaan komunikasi menghasilkan rencana manajemen komunikasi; register risiko adalah keluaran identifikasi risiko. (Wrike; Materi Inisiasi 4 dan 5)"
},
{
"q": "Dashboard EIS otomatis menampilkan notifikasi merah kepada direktur ketika tingkat pembatalan pesanan melewati ambang batas yang ditetapkan. Elemen antarmuka EIS yang bekerja adalah ....",
"o": [
"drill-down",
"kustomisasi dashboard",
"sistem peringatan",
"visualisasi intuitif"
],
"a": 2,
"e": "Sistem peringatan memberi tahu eksekutif tentang anomali atau kondisi yang perlu perhatian segera; drill-down menelusuri ringkasan sampai detail. (Materi Inisiasi 7)"
},
{
"q": "Area pengetahuan PMBOK yang mengidentifikasi, menggabungkan, dan mengoordinasikan seluruh proses serta aktivitas manajemen proyek lainnya adalah ....",
"o": [
"manajemen integrasi proyek",
"manajemen ruang lingkup proyek",
"manajemen pemangku kepentingan proyek",
"manajemen sumber daya proyek"
],
"a": 0,
"e": "Manajemen integrasi menyatukan proses dari area pengetahuan lain; ruang lingkup memastikan proyek memuat semua, dan hanya, pekerjaan yang diperlukan. (Wikipedia: PMBOK)"
},
{
"q": "Tujuan utama manajemen pengetahuan dalam proses bisnis menurut materi adalah ....",
"o": [
"menyimpan seluruh data transaksi harian secara terpusat",
"membatasi akses pengetahuan hanya untuk manajemen puncak",
"membangun kepercayaan dan kolaborasi tim agar pengetahuan dibagikan secara efektif dan menciptakan nilai tambah",
"menggantikan peran pekerja pengetahuan dengan otomatisasi"
],
"a": 2,
"e": "Manajemen pengetahuan mengelola aset pengetahuan secara sistematis, dengan tujuan membangun kepercayaan dan kolaborasi agar pengetahuan dibagikan. (Materi Inisiasi 6)"
},
{
"q": "Menurut metodologi analisis proses bisnis pada materi, langkah yang dilakukan tepat setelah pemetaan proses adalah ....",
"o": [
"pengumpulan data melalui wawancara, observasi, dan penelusuran dokumen",
"root cause analysis untuk mencari akar penyebab masalah",
"definisi ruang lingkup, termasuk titik awal dan akhir proses",
"analisis nilai, yaitu memilah aktivitas yang menambah nilai dan yang tidak"
],
"a": 3,
"e": "Urutannya: ruang lingkup → pengumpulan data → pemetaan proses → analisis nilai → identifikasi masalah → root cause analysis → pemodelan alternatif → analisis dampak. (Materi Inisiasi 1)"
},
{
"q": "Ibu Riana (Tugas Tutorial 3) melihat penurunan pendapatan iklan media sosial di dashboard EIS, lalu menelusuri angka itu sampai ke rincian per klien dan per kampanye. Fitur EIS yang digunakan adalah ....",
"o": [
"sistem peringatan",
"drill-down",
"kustomisasi dashboard",
"simulasi skenario"
],
"a": 1,
"e": "Drill-down menelusuri data dari tingkat ringkasan sampai detail transaksi. (Tugas Tutorial 3; Materi Inisiasi 7)"
},
{
"q": "Manajer proyek Eco-Travel (Tugas Tutorial 2) mengajak pengembang, desainer, tim pemasaran, dan konsultan untuk brainstorming, lalu mencatat semua potensi risiko seperti data tidak akurat, pembengkakan anggaran, dan keterlambatan konsultan dalam satu dokumen. Dokumen keluaran tahap ini disebut ....",
"o": [
"dashboard Key Risk Indicators (KRI)",
"register risiko",
"rencana manajemen komunikasi",
"matriks prioritas risiko ekstrem, tinggi, sedang, dan rendah"
],
"a": 1,
"e": "Keluaran tahap identifikasi risiko adalah register risiko; KRI dipakai saat pemantauan, pengelompokan ekstrem sampai rendah saat prioritas. (Tugas Tutorial 2; Materi Inisiasi 5)"
},
{
"q": "Menurut materi, keberhasilan manajemen pengetahuan terletak pada integrasi yang efektif antara ....",
"o": [
"data, informasi, dan transaksi",
"biaya, mutu, dan waktu",
"orang, proses, dan teknologi",
"TPS, MIS, dan EIS"
],
"a": 2,
"e": "Hambatan manajemen pengetahuan datang dari manusia dan teknologi, sehingga kuncinya integrasi orang, proses, dan teknologi. (Materi Inisiasi 6)"
},
{
"q": "Dalam BPMN, events, activities, dan gateways dikelompokkan ke dalam kategori elemen dasar ....",
"o": [
"flow objects",
"connecting objects",
"swimlanes",
"artifacts"
],
"a": 0,
"e": "Empat kategori elemen dasar BPMN: flow objects (event, activity, gateway), connecting objects, swimlanes (pool, lane), dan artifacts. (OMG/BPMI, BPMN Section 3)"
},
{
"q": "Dalam alur perbaikan proses (identifikasi masalah, analisis proses, ..., implementasi, evaluasi), tahap yang merancang proses baru untuk mengatasi masalah yang ditemukan adalah ....",
"o": [
"identifikasi masalah",
"desain ulang",
"evaluasi",
"analisis proses"
],
"a": 1,
"e": "Lima langkahnya: identifikasi masalah → analisis proses → desain ulang → implementasi dengan manajemen perubahan → evaluasi. (Materi Inisiasi 1)"
},
{
"q": "Untuk EIS PT Visi Media Kreatif, data berikut yang termasuk sumber data eksternal adalah ....",
"o": [
"jumlah klik harian dari TPS",
"laporan tren industri periklanan dan data aktivitas kompetitor",
"laporan performa klien bulanan dari MIS",
"pendapatan dan biaya dari sistem akuntansi perusahaan"
],
"a": 1,
"e": "Sumber eksternal datang dari luar perusahaan (pasar, kompetitor, ekonomi, riset industri, media sosial); TPS, MIS, dan akuntansi adalah sumber internal. (Tugas Tutorial 3; Materi Inisiasi 7)"
},
{
"q": "Teknik Lean untuk memetakan seluruh aliran nilai sehingga aktivitas yang tidak bernilai tambah dan bottleneck terlihat adalah ....",
"o": [
"kaizen",
"Gantt chart",
"value stream mapping",
"control chart"
],
"a": 2,
"e": "Value stream mapping memvisualisasikan aliran nilai dari awal sampai akhir; kaizen adalah praktik perbaikan berkelanjutan. (Materi Inisiasi 3)"
},
{
"q": "Setelah pesanan disetujui, bagian gudang menyiapkan barang dan bagian keuangan menerbitkan faktur secara bersamaan, lalu kedua alur bertemu lagi sebelum pengiriman. Gateway BPMN yang tepat untuk memodelkan hal ini adalah ....",
"o": [
"exclusive gateway",
"intermediate event",
"association",
"parallel gateway"
],
"a": 3,
"e": "Parallel gateway menjalankan semua cabang sekaligus lalu menggabungkannya; exclusive gateway hanya memilih satu jalur berdasarkan kondisi. (Materi Inisiasi 8; OMG/BPMI, BPMN Section 3)"
},
{
"q": "Metrik keberhasilan Six Sigma yang menyatakan probabilitas sebuah produk melewati seluruh tahapan proses tanpa cacat adalah ....",
"o": [
"Defects Per Million Opportunities (DPMO)",
"Rolled Throughput Yield (RTY)",
"Process Capability Index (PCI)",
"Return on Investment (ROI)"
],
"a": 1,
"e": "RTY mengukur peluang produk bebas cacat di sepanjang proses; DPMO menghitung cacat per sejuta peluang. (Materi Inisiasi 2)"
},
{
"q": "Kegiatan pengelolaan biaya proyek yang bertujuan mengidentifikasi penyimpangan pengeluaran dari anggaran disebut ....",
"o": [
"estimasi biaya",
"pemantauan anggaran",
"Return on Investment (ROI)",
"analisis varian"
],
"a": 3,
"e": "Estimasi biaya memperkirakan biaya di awal, pemantauan anggaran melacak pengeluaran berkala, dan analisis varian menemukan penyimpangannya. (Materi Inisiasi 4)"
},
{
"q": "Dalam kasus Diskusi 1, PT Maju Bersama menambah karyawan karena banyak pesanan terlambat. Setelah dianalisis, keterlambatan ternyata disebabkan proses persetujuan yang terlalu panjang dan informasi antarbagian yang tidak terhubung. Kesalahan perusahaan sebelum melakukan analisis adalah ....",
"o": [
"menerapkan solusi yang sedang tren tanpa memeriksa kebutuhannya",
"menangani gejala masalah, bukan akar masalahnya",
"langsung merekayasa ulang seluruh proses secara total",
"terlalu banyak mengukur kinerja sehingga keputusan tertunda"
],
"a": 1,
"e": "Menambah staf untuk mengatasi keterlambatan adalah solusi jangka pendek yang mahal karena tidak menyentuh penyebabnya. (Diskusi 1; Materi Inisiasi 1)"
},
{
"q": "Sebagian tim kreatif PT Visi Media Kreatif enggan membagikan wawasan kampanye karena merasa 'pengetahuan adalah kekuatan'. Strategi implementasi manajemen pengetahuan yang paling langsung menjawab masalah ini adalah ....",
"o": [
"memilih platform manajemen pengetahuan dengan fitur paling lengkap dan mahal",
"menambah volume dokumen tidak terstruktur di repositori",
"membangun budaya berbagi dengan penghargaan bagi yang berbagi pengetahuan",
"mempercepat pelaporan transaksi harian di TPS"
],
"a": 2,
"e": "Resistensi berbagi adalah hambatan manusia, jadi jawabannya budaya dan penghargaan, bukan platform. (Tugas Tutorial 3; Materi Inisiasi 6)"
},
{
"q": "Dalam integrasi Six Sigma ke dalam siklus manajemen tradisional, fungsi pengorganisasian dipadankan dengan tahap ....",
"o": [
"Measure dan Analyze",
"Define",
"Improve",
"Control"
],
"a": 0,
"e": "Perencanaan → Define, pengorganisasian → Measure dan Analyze, pelaksanaan → Improve, pengendalian → Control. (Materi Inisiasi 2)"
},
{
"q": "Karyawan kesulitan menemukan dokumen yang relevan karena repositori perusahaan dipenuhi ribuan file tanpa struktur yang jelas. Tantangan manajemen pengetahuan yang terjadi adalah ....",
"o": [
"resistensi berbagi pengetahuan",
"kehilangan pengetahuan tacit",
"single point of failure",
"overload informasi"
],
"a": 3,
"e": "Overload informasi berarti terlalu banyak data tidak terstruktur sehingga pengetahuan yang relevan sulit ditemukan. (Materi Inisiasi 6)"
},
{
"q": "Antarmuka yang ramah pengguna dan dapat disesuaikan menjadi faktor kritis adopsi EIS oleh direksi PT Visi Media Kreatif. Alasan berikut mendukung hal itu, KECUALI ....",
"o": [
"waktu eksekutif untuk menganalisis data terbatas",
"eksekutif belum tentu memiliki keahlian teknis yang mendalam",
"direksi harus memasukkan sendiri setiap transaksi harian ke dalam sistem",
"eksekutif perlu melihat informasi dari berbagai perspektif"
],
"a": 2,
"e": "Input transaksi harian adalah pekerjaan TPS; alasannya: waktu terbatas, keahlian teknis minim, butuh akses cepat, dan perlu banyak perspektif. (Tugas Tutorial 3; Materi Inisiasi 7)"
},
{
"q": "Proses yang terdokumentasi memastikan pengetahuan kerja tidak hanya berada di kepala satu karyawan. Manfaat proses terencana dalam mengurangi risiko ini disebut ....",
"o": [
"meningkatkan kepatuhan regulasi",
"mempercepat onboarding karyawan baru",
"mengeliminasi single point of failure",
"memudahkan skalabilitas bisnis"
],
"a": 2,
"e": "Keempat opsi adalah manfaat proses terencana, tetapi yang menjawab ketergantungan pada satu orang adalah eliminasi single point of failure. (Materi Inisiasi 1)"
},
{
"q": "Saat mengintegrasikan Six Sigma ke dalam organisasi manajemen, perusahaan membangun struktur peran yang terdiri atas ....",
"o": [
"Product Owner, Scrum Master, dan Development Team",
"Champions, Black Belts, dan Green Belts",
"analis bisnis, pengembang teknis, dan eksekutif",
"Supplier, Process, dan Customer"
],
"a": 1,
"e": "Struktur peran Six Sigma (Champions, Black Belts, Green Belts) dibangun sebagai bagian dari integrasi Six Sigma ke siklus manajemen. (Materi Inisiasi 2)"
},
{
"q": "Setelah pemborosan dalam proyek ditemukan, tim rutin melakukan perbaikan kecil setiap minggu agar proses terus optimal dan menambah nilai bagi stakeholder. Praktik Lean ini disebut ....",
"o": [
"value stream mapping",
"Design of Experiments",
"fault tree analysis",
"kaizen"
],
"a": 3,
"e": "Kaizen adalah perbaikan berkelanjutan; value stream mapping hanya memetakan aliran nilai untuk menemukan pemborosan. (Materi Inisiasi 3)"
},
{
"q": "Area pengetahuan PMBOK yang mengatur pembelian atau perolehan produk, layanan, atau hasil dari luar tim proyek adalah manajemen ....",
"o": [
"integrasi proyek",
"pengadaan proyek",
"kualitas proyek",
"pemangku kepentingan proyek"
],
"a": 1,
"e": "Manajemen pengadaan mengurus perolehan produk, layanan, atau hasil dari luar tim proyek, termasuk kontrak dengan vendor. (Wikipedia: PMBOK)"
},
{
"q": "Dalam metode value chain yang dipakai untuk mengidentifikasi proses bisnis, berikut ini termasuk aktivitas utama, KECUALI ....",
"o": [
"pengadaan (procurement)",
"inbound logistics",
"outbound logistics",
"marketing and sales"
],
"a": 0,
"e": "Pengadaan adalah aktivitas pendukung; aktivitas utama meliputi inbound logistics, operations, outbound logistics, marketing and sales, dan services. (Maulana, 2023)"
},
{
"q": "Dalam activity analysis, aktivitas seperti menunggu tanda tangan persetujuan berlapis yang tidak menambah nilai bagi pelanggan maupun bisnis dikategorikan sebagai ....",
"o": [
"real value added (RVA)",
"business value added (BVA)",
"value stream mapping (VSM)",
"non value added (NVA)"
],
"a": 3,
"e": "Activity analysis memilah aktivitas menjadi RVA (nilai langsung bagi pelanggan), BVA (nilai bagi bisnis), dan NVA (tidak bernilai tambah). (Maulana, 2023)"
},
{
"q": "Sebelum mengubah tata letak lini produksi yang memerlukan investasi besar, perusahaan menguji beberapa skenario perubahan memakai model komputer. Teknik analisis proses yang digunakan adalah ....",
"o": [
"simulation",
"time and motion study",
"process mapping",
"fishbone diagram"
],
"a": 0,
"e": "Simulation menguji skenario proses dengan model komputer sebelum implementasi, seperti contoh PT Astra International pada materi. (Materi Inisiasi 1)"
},
{
"q": "Menurut tinjauan Maulana (2023), perbedaan utama pendekatan Business Process Re-engineering (BPR) dibandingkan BPI dan BPM adalah ....",
"o": [
"BPR tidak memerlukan pemodelan proses, sedangkan BPI dan BPM selalu memodelkan proses dengan BPMN",
"BPR merancang ulang proses secara menyeluruh, sedangkan BPI dan BPM memperbaiki bagian yang bermasalah",
"BPR hanya menyentuh perilaku karyawan, sedangkan BPI dan BPM hanya menyentuh teknologi",
"BPR berhenti pada tahap rekomendasi, sedangkan BPI dan BPM sampai tahap implementasi"
],
"a": 1,
"e": "Ketiganya sama-sama memodelkan, memperbaiki, dan mengimplementasikan proses; pembedanya cakupan, dan BPR bersifat menyeluruh. (Maulana, 2023)"
},
{
"q": "Teknik yang mengkaji secara rinci waktu dan gerakan untuk menyelesaikan suatu tugas, sehingga cocok untuk menemukan inefisiensi proses manual dan menghitung kapasitas proses, adalah ....",
"o": [
"time and motion study",
"process mapping",
"simulation",
"fault tree analysis"
],
"a": 0,
"e": "Time and motion study menganalisis waktu dan gerakan kerja; fault tree analysis adalah salah satu metode root cause analysis. (Materi Inisiasi 1)"
},
{
"q": "Sebuah proyek melibatkan 10 orang pemangku kepentingan. Jumlah saluran komunikasi potensial di antara mereka adalah ....",
"o": [
"20",
"90",
"100",
"45"
],
"a": 3,
"e": "Rumus saluran komunikasi n(n − 1)/2 = 10 × 9 / 2 = 45; angka 90 muncul bila lupa membagi dua. (PMBOK, dikutip PM PrepCast)"
},
{
"q": "Seorang teknisi senior menuangkan pengalaman dan triknya memperbaiki mesin ke dalam SOP tertulis dan video panduan. Dalam model SECI (Nonaka dan Takeuchi), konversi pengetahuan ini disebut ....",
"o": [
"sosialisasi (tacit ke tacit)",
"eksternalisasi (tacit menjadi eksplisit)",
"kombinasi (eksplisit ke eksplisit)",
"internalisasi (eksplisit menjadi tacit)"
],
"a": 1,
"e": "Eksternalisasi mengubah pengetahuan tacit menjadi eksplisit sehingga dapat dibagikan; sosialisasi berbagi tacit lewat pengamatan dan praktik bersama. (Wikipedia: SECI model)"
},
{
"q": "Analis data PT Visi Media Kreatif (Tugas Tutorial 3) menemukan bahwa kampanye dengan influencer menghasilkan konversi lebih tinggi. Agar temuan itu tidak hanya tersimpan di kepala analis dan dapat dipakai direksi, langkah yang paling tepat adalah ....",
"o": [
"membatasi akses temuan hanya untuk tim analis sebagai keunggulan pribadi",
"langsung mengalihkan seluruh anggaran klien ke influencer marketing tanpa evaluasi",
"mendokumentasikannya di repositori pengetahuan agar dapat diintegrasikan ke EIS",
"menghapus data kampanye lama agar tidak terjadi overload informasi"
],
"a": 2,
"e": "Manajemen pengetahuan mengubah wawasan individu menjadi aset organisasi lewat dokumentasi dan berbagi, sehingga EIS dapat menyajikannya. (Tugas Tutorial 3; Materi Inisiasi 6 dan 7)"
},
{
"q": "Pada Tugas Tutorial 1, siklus layanan pelanggan dipetakan menjadi: identifikasi, pengumpulan dan pemetaan data, analisis, perbaikan, implementasi, serta pemantauan dan evaluasi. Setelah solusi berjalan, kinerja dipantau dengan indikator yang sudah ditetapkan dan tindakan korektif diambil bila masih ada penyimpangan. Kegiatan ini termasuk tahap ....",
"o": [
"identifikasi",
"pengumpulan dan pemetaan data",
"perbaikan",
"pemantauan dan evaluasi"
],
"a": 3,
"e": "Membandingkan hasil dengan target setelah implementasi lalu mengambil tindakan korektif adalah inti pemantauan dan evaluasi. (Tugas Tutorial 1; Materi Inisiasi 2)"
},
{
"q": "Manajer proyek Eco-Travel memeriksa kebenaran data pada lembar tugas tim untuk melacak kemajuan, sekaligus mengawasi pekerjaan konsultan subkontrak beserta biayanya. Aktivitas ini mencerminkan peran manajer proyek dalam ....",
"o": [
"pengambilan keputusan sebagai fasilitator utama tim",
"pemantauan (pemantauan data dan koordinasi subkontrak)",
"kepemimpinan teknis untuk pengujian integrasi sistem",
"pengembangan kebijakan penanganan masalah"
],
"a": 1,
"e": "Peran pemantauan mencakup memastikan kebenaran data lembar tugas serta mengawasi subkontrak beserta biayanya. (Tugas Tutorial 2; Materi Inisiasi 4)"
},
{
"q": "Tim proyek drainase kota ingin memangkas aktivitas yang tidak perlu, tetapi juga membutuhkan kerangka kerja baku untuk mengelola pemangku kepentingan dan risiko. Kombinasi pendekatan yang paling sesuai adalah ....",
"o": [
"PMBOK untuk eliminasi pemborosan dan Lean untuk manajemen pemangku kepentingan dan risiko",
"Lean untuk eliminasi pemborosan dan PMBOK untuk kerangka kerja serta standardisasi praktik",
"DMADV untuk seluruh siklus proyek tanpa kerangka manajemen proyek",
"BPMN untuk eliminasi pemborosan dan EIS untuk manajemen risiko"
],
"a": 1,
"e": "Lean menyumbang eliminasi pemborosan; PMBOK menyumbang kerangka kerja, standar istilah, serta panduan stakeholder dan risiko. (Materi Inisiasi 3)"
}
]
},
{
"id": "sim",
"name": "Sistem Informasi Manajemen",
"questions": [
{
"q": "Studi kasus Tugas 3: manajer sebuah perusahaan mencari karyawan terbaik dengan tahapan keputusan rasional. Setelah masalah dipahami, ia menyusun beberapa alternatif, yaitu promosi internal, rekrutmen terbuka, atau memakai jasa lembaga perekrutan, lengkap dengan dampak positif dan negatif masing- masing. Tahap yang sedang dijalankan adalah ....",
"o": [
"perancangan",
"pencarian fakta",
"pemilihan",
"implementasi"
],
"a": 0,
"e": "Menyusun alternatif solusi beserta dampak positif dan negatifnya adalah tahap perancangan. (Tugas 3 no. 1; Inisiasi 8a)"
},
{
"q": "Studi kasus Tugas 1: mesin di sebuah ATM Center dipasang sangat berdekatan sehingga layar transaksi terlihat oleh pengguna di sebelahnya, walau keypad sudah diberi penutup. Jika seorang nasabah dirugikan lalu menggugat pengelola ke pengadilan untuk meminta ganti rugi, konsep yang paling relevan adalah ....",
"o": [
"akuntabilitas",
"tanggung jawab",
"liabilitas",
"hak kekayaan intelektual"
],
"a": 2,
"e": "Gugatan ganti rugi ke pengadilan adalah liabilitas, yaitu tanggung jawab dalam ranah hukum. (Tugas 1 no. 3; Inisiasi 3)"
},
{
"q": "Studi kasus Tugas 1: pemilik UMKM kerupuk ikan tenggiri ingin menelaah bagaimana tiap kegiatan, mulai dari pengadaan bahan baku, produksi, pengemasan, pemasaran, hingga penjualan, memberi nilai tambah pada produknya. Alat analisis Porter yang paling sesuai untuk tujuan ini adalah ....",
"o": [
"model kekuatan persaingan",
"model rantai nilai",
"Balanced Scorecard",
"Systems Development Life Cycle"
],
"a": 1,
"e": "Rantai nilai menelaah sumbangan tiap aktivitas terhadap nilai produk; model kekuatan persaingan menganalisis industri. (Tugas 1 no. 2; Inisiasi 2)"
},
{
"q": "Studi kasus Tugas 3: sebelum mencari karyawan terbaik, manajer menelusuri mengapa kinerja tim menurun, di bagian mana masalah itu muncul, dan apa dampaknya bagi perusahaan. Tahap pembuatan keputusan rasional yang sedang dijalankan adalah ....",
"o": [
"perancangan",
"pencarian fakta",
"pemilihan",
"implementasi"
],
"a": 1,
"e": "Mengidentifikasi dan memahami masalah (mengapa, di mana, apa dampaknya) adalah pencarian fakta, tahap pertama keputusan rasional. (Tugas 3 no. 1; Inisiasi 8a)"
},
{
"q": "Studi kasus Tugas 2: seorang pengguna setiap hari membuka MS Word melalui peramban tanpa menginstal aplikasi. Dokumennya tersimpan otomatis di cloud, dapat disunting bersama rekan secara real time, dan pembaruan fitur dilakukan penyedia dari server pusat. Model layanan komputasi awan yang dipakai adalah ....",
"o": [
"Infrastructure as a Service (IaaS)",
"Platform as a Service (PaaS)",
"client/server pada jaringan lokal",
"Software as a Service (SaaS)"
],
"a": 3,
"e": "Aplikasi jadi yang dipakai lewat peramban dan dipelihara penyedia adalah SaaS. (Tugas 2 no. 1; Inisiasi 4)"
},
{
"q": "Studi kasus Tugas 1: setelah berjualan daring, pengrajin rotan mencatat data pelanggan, pertanyaan yang sering muncul, dan pola pembelian untuk menjaga pelanggan lama agar tidak beralih ke pesaing serta menarik pelanggan baru. Fungsi ini paling sesuai dengan sistem ....",
"o": [
"Supply Chain Management (SCM)",
"Enterprise Resource Planning (ERP)",
"Learning Management System (LMS)",
"Customer Relationship Management (CRM)"
],
"a": 3,
"e": "Menjaga pelanggan lama dan menarik pelanggan baru adalah fungsi CRM. (Inisiasi 7; Tugas 1)"
},
{
"q": "Data yang sudah mengalami pengolahan sedemikian rupa sehingga dapat digunakan penggunanya untuk membuat keputusan disebut ....",
"o": [
"pengetahuan",
"basis data",
"informasi",
"teknologi informasi"
],
"a": 2,
"e": "Informasi adalah data olahan untuk membuat keputusan (Laudon & Laudon, 2018); pengetahuan adalah kerangka berpikir untuk memakai informasi itu. (Inisiasi 1; Inisiasi 6)"
},
{
"q": "Studi kasus Tugas 3: pemilik toko roti yang akan membuka cabang di Jakarta, Surabaya, dan Bandung menetapkan bahwa cabang baru hanya menjual sepuluh varian roti unggulan, tanpa layanan katering, dan hanya di tiga kota tersebut. Keputusan ini berkaitan dengan variabel ....",
"o": [
"ruang lingkup proyek",
"biaya pelaksanaan proyek",
"risiko proyek",
"kualitas"
],
"a": 0,
"e": "Menetapkan batas produk, layanan, dan wilayah adalah ruang lingkup proyek. (Tugas 3 no. 2; Inisiasi 8b)"
},
{
"q": "Mesin ATM awalnya menjadi keunggulan kompetitif Citibank. Kini hampir semua bank memilikinya, dan bank tanpa jaringan ATM dapat dipastikan tidak mampu bersaing. Dari enam tujuan strategis investasi sistem informasi, kepemilikan ATM oleh bank saat ini paling tepat digolongkan sebagai ....",
"o": [
"meraih keunggulan kompetitif",
"bertahan hidup",
"meraih keunggulan operasional",
"mengembangkan model usaha baru"
],
"a": 1,
"e": "Teknologi yang sudah dimiliki semua pesaing menjadi syarat bertahan hidup, bukan lagi keunggulan kompetitif. (Inisiasi 1; BMP Modul 1)"
},
{
"q": "Dalam pembuatan keputusan etis, mekanisme yang menentukan siapa yang bertindak dan siapa yang bertanggung jawab atas suatu tindakan disebut ....",
"o": [
"tanggung jawab",
"liabilitas",
"dilema etika",
"akuntabilitas"
],
"a": 3,
"e": "Akuntabilitas menentukan siapa yang bertindak dan siapa yang bertanggung jawab; liabilitas adalah ranah hukumnya. (Inisiasi 3)"
},
{
"q": "Studi kasus Tugas 3: sebuah toko roti akan membuka cabang di Jakarta, Surabaya, dan Bandung. Pemilik memperhitungkan perbedaan cuaca, kebiasaan masyarakat, dan ketersediaan bahan baku yang dapat mengganggu rencana, lalu menyiapkan langkah antisipasinya. Dari lima variabel keberhasilan proyek, kegiatan ini termasuk pengelolaan ....",
"o": [
"ruang lingkup",
"kualitas",
"risiko",
"waktu pelaksanaan"
],
"a": 2,
"e": "Mengantisipasi kejadian yang bisa mengganggu rencana adalah pengelolaan risiko. (Tugas 3 no. 2; Inisiasi 8b)"
},
{
"q": "Menurut Laudon & Laudon (2018), sistem informasi didefinisikan sebagai sistem yang digunakan untuk ....",
"o": [
"menyimpan, mengambil, mengirimkan, dan mengolah data menggunakan perangkat komputer",
"mengumpulkan, mengolah, menyimpan, dan mendistribusikan informasi",
"merancang, membangun, menguji, dan memelihara perangkat lunak organisasi",
"menghubungkan dua komputer atau lebih agar dapat berbagi sumber daya komputasi"
],
"a": 1,
"e": "SI berfungsi mengumpulkan, mengolah, menyimpan, dan mendistribusikan informasi; opsi A adalah definisi teknologi informasi. (Inisiasi 1)"
},
{
"q": "Manajer proyek harus mengidentifikasi risiko dan menyiapkan mitigasinya melalui beberapa dimensi risiko proyek. Berikut ini termasuk dimensi tersebut, KECUALI ....",
"o": [
"ukuran proyek",
"struktur proyek",
"pengalaman dengan teknologi yang digunakan",
"kualitas hasil proyek"
],
"a": 3,
"e": "Dimensi risiko proyek: ukuran, struktur, dan pengalaman dengan teknologi; kualitas adalah salah satu dari lima variabel keberhasilan proyek. (Inisiasi 8b)"
},
{
"q": "Serangkaian proses bisnis yang dikembangkan organisasi untuk menciptakan, menyimpan, menyemaikan, dan menerapkan pengetahuan disebut ....",
"o": [
"intelegensi bisnis",
"sistem manajemen basis data",
"Enterprise Resource Planning",
"manajemen pengetahuan"
],
"a": 3,
"e": "Itu definisi manajemen pengetahuan (Sparrow, 2001); intelegensi bisnis berfokus pada penyimpanan dan analisis data bisnis. (Inisiasi 6)"
},
{
"q": "Sistem yang mengintegrasikan berbagai perangkat lunak dengan fungsi berbeda ke dalam satu basis data terpusat sehingga memudahkan komunikasi dan koordinasi antardepartemen adalah ....",
"o": [
"Supply Chain Management (SCM)",
"Enterprise Resource Planning (ERP)",
"Customer Relationship Management (CRM)",
"Decision Support System (DSS)"
],
"a": 1,
"e": "ERP menyatukan aplikasi fungsional dalam satu basis data terpusat, misalnya SAP dan Oracle. (Inisiasi 7)"
},
{
"q": "Studi kasus Tugas 2: seorang mahasiswa UT membangun manajemen pengetahuan pribadi. Ia aktif menjawab di forum diskusi tutorial online, berbagi rangkuman di grup belajar, dan menjelaskan ulang materi kepada teman. Kegiatan ini termasuk tahap rantai nilai manajemen pengetahuan ....",
"o": [
"akuisisi",
"penyimpanan",
"penyemaian",
"penerapan"
],
"a": 2,
"e": "Membagikan pengetahuan kepada orang lain adalah tahap penyemaian (diseminasi). (Tugas 2 no. 3; Inisiasi 6)"
},
{
"q": "Infrastruktur untuk menyimpan, mengintegrasikan, menganalisis, dan melaporkan data yang berasal dari lingkungan bisnis, termasuk Big Data, disebut ....",
"o": [
"Balanced Scorecard",
"intelegensi bisnis",
"jaringan komputer",
"Enterprise Resource Planning"
],
"a": 1,
"e": "Itu definisi intelegensi bisnis, yang terbentuk dari sebuah ekosistem dan bukan sistem yang berdiri sendiri. (Inisiasi 8a)"
},
{
"q": "Sebelum masuk ke industri kopi kemasan, seorang manajer menganalisis ancaman pendatang baru, produk pengganti, daya tawar pemasok dan pembeli, serta persaingan antarperusahaan yang sudah ada. Alat analisis yang ia gunakan adalah ....",
"o": [
"model kekuatan persaingan Porter",
"model rantai nilai Porter",
"Balanced Scorecard",
"Decision Support System"
],
"a": 0,
"e": "Model kekuatan persaingan menganalisis persaingan di tingkat industri; rantai nilai menelaah aktivitas internal perusahaan. (Inisiasi 2 (Porter, 1998); rincian lima kekuatan: Laudon & Laudon (2018))"
},
{
"q": "Teknik pengendalian yang dirancang khusus untuk masing-masing aplikasi berbasis komputer disebut ....",
"o": [
"pengendalian aplikasi",
"pengendalian umum",
"Business Continuity Planning",
"penetration testing"
],
"a": 0,
"e": "Pengendalian aplikasi berlaku spesifik per aplikasi; pengendalian umum berlaku di seluruh organisasi. (Inisiasi 5)"
},
{
"q": "Urutan tahapan perkembangan infrastruktur teknologi informasi yang benar adalah ....",
"o": [
"komputer personal, mainframe dan minikomputer, client/server, komputasi awan dan bergerak, enterprise computing",
"mainframe dan minikomputer, komputer personal, client/server, enterprise computing, komputasi awan dan bergerak",
"mainframe dan minikomputer, client/server, komputer personal, enterprise computing, komputasi awan dan bergerak",
"mainframe dan minikomputer, komputer personal, enterprise computing, client/server, komputasi awan dan bergerak"
],
"a": 1,
"e": "Urutannya mainframe dan minikomputer, PC, client/server, enterprise computing, lalu komputasi awan dan bergerak. (Inisiasi 4)"
},
{
"q": "Berikut ini termasuk permasalahan pengelolaan data sebelum digunakannya DBMS, KECUALI ....",
"o": [
"format dan struktur data yang terstandardisasi",
"redundansi data karena data yang sama disimpan di beberapa aplikasi",
"ketergantungan data pada aplikasi tertentu",
"sulitnya mentransfer data antaraplikasi"
],
"a": 0,
"e": "Format dan struktur data yang terstandardisasi adalah keunggulan DBMS, bukan masalahnya. (Inisiasi 6)"
},
{
"q": "Dalam menetapkan anggaran promosi, sebagian angka dihitung dengan rumus baku perusahaan, sedangkan sebagian lain bergantung pada pertimbangan manajer terhadap kondisi pasar. Keputusan seperti ini termasuk keputusan ....",
"o": [
"terstruktur",
"tidak terstruktur",
"semi terstruktur",
"otomatis"
],
"a": 2,
"e": "Keputusan yang memuat unsur prosedur baku sekaligus pertimbangan pembuat keputusan adalah keputusan semi terstruktur. (Inisiasi 8a)"
},
{
"q": "Pendekatan sosio-teknikal yang dipelopori Tavistock Institute di London sejak dekade 1970-an berpandangan bahwa ....",
"o": [
"masalah sistem informasi pada dasarnya teknis sehingga cukup diselesaikan dengan model matematika dan perangkat keras",
"optimalisasi sistem informasi harus dilakukan pada sisi sosial dan sisi teknikal secara bersama-sama",
"perilaku pengguna adalah satu-satunya faktor yang perlu dioptimalkan dalam sistem informasi",
"teknologi tercanggih harus segera diterapkan agar organisasi tidak tertinggal dari pesaing"
],
"a": 1,
"e": "Sosio-teknikal mengoptimalkan sisi sosial dan teknikal bersama-sama; opsi A adalah pendekatan teknis (hard approach). (Inisiasi 1)"
},
{
"q": "Produsen mi instan memodelkan kebutuhan tepung dari para pemasok dan mengatur distribusi produk hingga ke pengecer. Pemasok, produsen, dan distributor itu adalah perusahaan yang berdiri sendiri. Sistem yang paling tepat untuk mengoordinasikan mereka adalah ....",
"o": [
"Customer Relationship Management (CRM)",
"Supply Chain Management (SCM)",
"Decision Support System (DSS)",
"Learning Management System (LMS)"
],
"a": 1,
"e": "SCM memodelkan kebutuhan pasokan dan mengelola distribusi antarperusahaan dari hulu ke hilir; CRM mengelola relasi dengan konsumen. (Inisiasi 7)"
},
{
"q": "Sumber daya teknologi yang digunakan bersama dan menjadi dasar bagi aplikasi sistem informasi spesifik suatu perusahaan disebut ....",
"o": [
"infrastruktur teknologi informasi",
"enterprise computing",
"jaringan komputer",
"komputasi awan"
],
"a": 0,
"e": "Itu definisi infrastruktur TI (Laudon & Laudon, 2018), yang meliputi perangkat keras, perangkat lunak, dan layanan TI. (Inisiasi 4)"
},
{
"q": "Berikut ini termasuk enam tahapan Systems Development Life Cycle (SDLC), KECUALI ....",
"o": [
"konversi sistem",
"pengujian sistem",
"penggunaan dan perawatan sistem",
"pembuatan purwarupa (prototyping)"
],
"a": 3,
"e": "Prototyping adalah metodologi penyempurna SDLC, bukan salah satu dari enam tahapannya. (Inisiasi 8b)"
},
{
"q": "Urutan hierarki data dari unit terkecil hingga terbesar adalah ....",
"o": [
"bit, byte, field, record, file, basis data",
"bit, byte, record, field, file, basis data",
"byte, bit, field, record, basis data, file",
"bit, field, byte, record, file, basis data"
],
"a": 0,
"e": "Urutannya bit, byte, field, record, file, basis data; record adalah kumpulan field. (Inisiasi 6)"
},
{
"q": "Sebuah perusahaan menerapkan kebijakan kata sandi, pembatasan akses ke ruang server, dan prosedur pencadangan data yang berlaku di seluruh unit organisasi. Jenis pengendalian ini adalah ....",
"o": [
"pengendalian aplikasi",
"penetration testing",
"Business Continuity Planning",
"pengendalian umum"
],
"a": 3,
"e": "Aturan keamanan perangkat TI dan data yang berlaku di seluruh tingkatan organisasi adalah pengendalian umum. (Inisiasi 5 (Gelinas et al., 2018))"
},
{
"q": "Studi kasus Tugas 1: seorang pengrajin rotan selama ini hanya menawarkan produk lewat brosur kepada pejalan kaki di depan tokonya. Konsultan menyarankan katalog digital di marketplace dan media sosial serta pemesanan melalui WhatsApp Business sehingga pembeli tidak harus datang ke toko. Saran ini paling sesuai dengan perubahan bisnis akibat perkembangan TI berupa ....",
"o": [
"model usaha baru dan ekspansi perdagangan secara elektronik",
"penurunan biaya supervisi karyawan secara internal",
"penerapan pengendalian umum atas perangkat teknologi informasi",
"pendekatan sosio-teknikal yang menunda adopsi teknologi"
],
"a": 0,
"e": "Memindahkan penjualan ke kanal digital termasuk model usaha baru dan ekspansi perdagangan elektronik. (Tugas 1 no. 1)"
},
{
"q": "Menurut Laudon & Laudon (2018), infrastruktur teknologi informasi modern terdiri atas tujuh komponen utama. Berikut ini termasuk komponen tersebut, KECUALI ....",
"o": [
"sistem operasi",
"internet",
"struktur organisasi dan hierarki manajemen",
"jasa layanan konsultasi teknologi dan integrasi sistem"
],
"a": 2,
"e": "Tujuh komponen infrastruktur TI tidak mencakup struktur organisasi dan hierarki manajemen. (Inisiasi 4)"
},
{
"q": "Keputusan yang urutan prosedurnya sudah jelas dan tindakan untuk setiap kondisi sudah digariskan secara tertulis disebut keputusan ....",
"o": [
"tidak terstruktur",
"semi terstruktur",
"strategis",
"terstruktur"
],
"a": 3,
"e": "Prosedur yang jelas dan sudah tertulis menandai keputusan terstruktur. (Inisiasi 8a)"
},
{
"q": "Sebuah toko daring lokal unggul karena fitur pelacakan pesanan real-time. Setahun kemudian pesaing meniru dan menyempurnakan fitur itu sehingga fitur tersebut hanya menjadi alat untuk bertahan. Situasi ini menggambarkan tantangan sistem informasi strategis berupa ....",
"o": [
"menjaga keunggulan kompetitif",
"menyelaraskan strategi sistem informasi dengan strategi bisnis",
"menentukan investasi infrastruktur secara bijak",
"menghadapi kesenjangan digital"
],
"a": 0,
"e": "Keunggulan yang cepat ditiru pesaing berubah jadi alat bertahan; ini tantangan menjaga keunggulan kompetitif. (Inisiasi 2)"
},
{
"q": "Sebuah universitas menghubungkan jaringan komputer di gedung rektorat, perpustakaan, dan fakultas yang berada dalam satu kompleks kampus. Berdasarkan jangkauannya, jaringan ini termasuk ....",
"o": [
"Campus Area Network (CAN)",
"Personal Area Network (PAN)",
"Metropolitan Area Network (MAN)",
"Wide Area Network (WAN)"
],
"a": 0,
"e": "Jaringan antargedung dalam satu kompleks kampus adalah CAN; MAN mencakup satu kota dan WAN wilayah yang lebih luas lagi. (Inisiasi 4; cakupan MAN/WAN: Laudon & Laudon (2018))"
},
{
"q": "Studi kasus Tugas 1: pengguna sebuah ATM Center merasa privasinya terganggu karena layar transaksinya mudah terlihat pengguna lain. Peraturan yang menurut materi menempatkan hak atas privasi sebagai bagian dari hak asasi manusia adalah ....",
"o": [
"Undang-Undang Nomor 36 Tahun 1999",
"Undang-Undang Nomor 11 Tahun 2008",
"Undang-Undang Nomor 16 Tahun 2009",
"Undang-Undang Nomor 39 Tahun 1999"
],
"a": 3,
"e": "Privasi sebagai HAM diatur UU No. 39/1999; UU No. 36/1999 mengatur larangan penyadapan. (Tugas 1 no. 3; Inisiasi 3)"
},
{
"q": "Fasilitas DBMS yang berisi daftar elemen data dalam basis data beserta karakteristiknya disebut ....",
"o": [
"Structured Query Language (SQL)",
"kamus data",
"fasilitas pelaporan",
"record"
],
"a": 1,
"e": "Kamus data memuat daftar elemen data dan karakteristiknya; SQL adalah bahasa untuk memanipulasi data. (Inisiasi 6)"
},
{
"q": "Extreme Programming, Scrum, dan Crystal Methods termasuk kelompok metodologi penyempurnaan SDLC yang disebut ....",
"o": [
"Rapid Application Development (RAD)",
"Joint Application Development (JAD)",
"Computer Aided Systems Engineering (CASE)",
"Agile Methods"
],
"a": 3,
"e": "Materi menyebut XP, Scrum, dan Crystal sebagai contoh Agile Methods (Sarosa, 2017). (Inisiasi 8b)"
},
{
"q": "Sebuah rumah sakit mengidentifikasi proses bisnis yang kritis, seperti pendaftaran pasien dan layanan farmasi, lalu menyiapkan rencana agar kegiatan itu tetap berjalan jika terjadi bencana. Dokumen yang disusun rumah sakit tersebut adalah ....",
"o": [
"Disaster Recovery Planning (DRP)",
"penetration testing",
"pengendalian aplikasi",
"Business Continuity Planning (BCP)"
],
"a": 3,
"e": "BCP menjaga proses bisnis kritis tetap berjalan; DRP memulihkan layanan SI yang terganggu. (Inisiasi 5)"
},
{
"q": "Seorang manajer menengah ingin mengetahui seberapa besar laba berubah jika harga bahan baku naik 10 persen dan volume penjualan turun 5 persen. Alat intelegensi bisnis yang paling tepat adalah ....",
"o": [
"Balanced Scorecard (BSC)",
"Decision Support System (DSS)",
"Enterprise Resource Planning (ERP)",
"Customer Relationship Management (CRM)"
],
"a": 1,
"e": "DSS dipakai manajer menengah untuk memprediksi perubahan suatu variabel saat variabel lain berubah; BSC untuk manajer puncak. (Inisiasi 8a (Eppen et al., 1998))"
},
{
"q": "Konsep \"dunia menjadi datar\" yang dikemukakan Thomas Friedman (2007) merujuk pada ....",
"o": [
"hilangnya lapisan manajemen menengah karena tugasnya diambil alih komputer",
"munculnya pasar, produk, dan pekerjaan baru yang mengubah peta usaha secara drastis",
"berkurangnya keunggulan dan kesenjangan antara negara maju dan negara lain akibat adopsi TI, terutama internet dan telekomunikasi",
"turunnya biaya transaksi karena peran perantara digantikan sistem informasi"
],
"a": 2,
"e": "Dunia datar berarti kesenjangan antarnegara menyusut karena TI; opsi B adalah pengertian disrupsi. (Inisiasi 1)"
},
{
"q": "Layanan pada internet yang menerjemahkan nama domain sebuah situs menjadi alamat IP, atau sebaliknya, adalah ....",
"o": [
"TCP/IP",
"IP versi 6",
"Domain Name System (DNS)",
"packet switching"
],
"a": 2,
"e": "DNS menerjemahkan nama domain ke alamat IP dan sebaliknya; TCP/IP adalah protokol komunikasinya. (Inisiasi 4)"
},
{
"q": "Sistem informasi baru membawa perubahan dalam organisasi. Berikut ini termasuk wujud perubahan tersebut, KECUALI ....",
"o": [
"otomatisasi proses bisnis",
"konversi sistem",
"rasionalisasi proses bisnis",
"pergeseran paradigma"
],
"a": 1,
"e": "Konversi sistem adalah tahapan SDLC, bukan wujud perubahan organisasi. (Inisiasi 8b)"
},
{
"q": "Kepala koki sebuah restoran mampu meracik bumbu dengan takaran yang pas berkat pengalaman bertahun-tahun, tetapi keahlian itu belum pernah dituliskan dalam resep atau prosedur. Bentuk pengetahuan ini adalah ....",
"o": [
"pengetahuan eksplisit",
"kamus data",
"pengetahuan tacit",
"informasi terstruktur"
],
"a": 2,
"e": "Pengetahuan yang masih tersimpan di benak individu dan belum didokumentasikan adalah tacit; yang sudah terdokumentasi adalah eksplisit. (Inisiasi 6; definisi tacit: Laudon & Laudon (2018))"
},
{
"q": "Berikut ini termasuk jenis hak kekayaan intelektual yang biasa digunakan menurut Brynjolfsson & Saunders (2010), KECUALI ....",
"o": [
"rahasia dagang",
"desain industri",
"hak guna usaha",
"merek dagang"
],
"a": 2,
"e": "HKI yang lazim: rahasia dagang, hak cipta, paten, merek dagang, dan desain industri; hak guna usaha bukan HKI. (Inisiasi 3)"
},
{
"q": "Secara teknis, organisasi didefinisikan sebagai ....",
"o": [
"sekumpulan asumsi, tata nilai, dan cara bekerja yang diterima sebagian besar anggotanya",
"struktur sosial formal yang stabil, yang mengambil sumber daya dari lingkungan untuk diolah menjadi keluaran",
"regulasi yang dikembangkan untuk menyelesaikan atau melaksanakan suatu tugas",
"sekumpulan komponen yang saling berinteraksi untuk mencapai tujuan yang sama"
],
"a": 1,
"e": "Definisi teknis organisasi: struktur sosial formal yang stabil yang mengolah sumber daya menjadi keluaran; opsi A adalah budaya organisasi. (Inisiasi 2)"
},
{
"q": "Perangkat lunak jahat yang mengenkripsi data di komputer korban sehingga pengguna tidak dapat mengakses data tersebut disebut ....",
"o": [
"virus komputer",
"sniffing",
"spoofing",
"ransomware"
],
"a": 3,
"e": "Ransomware mengenkripsi data korban; virus menempelkan diri pada perangkat lunak atau data lain. (Inisiasi 5)"
},
{
"q": "Menurut materi, salah satu kelebihan metodologi SDLC adalah ....",
"o": [
"perancangannya fleksibel sehingga mudah menyesuaikan perubahan kebutuhan",
"selalu mampu memenuhi kebutuhan manajemen dengan cepat",
"tidak membebani tim dengan pekerjaan perawatan sistem",
"memiliki standar dokumentasi baku serta tahapan dengan batas (cutover) dan artefak yang jelas"
],
"a": 3,
"e": "Kelebihan SDLC ada pada dokumentasi baku dan tahapan yang jelas; perancangan tidak fleksibel dan beban perawatan justru kelemahannya. (Inisiasi 8b)"
},
{
"q": "Alat intelegensi bisnis bagi manajer puncak yang mengukur kinerja setiap dimensi pengukuran menggunakan Key Performance Indicator (KPI) adalah ....",
"o": [
"Decision Support System (DSS)",
"Enterprise Resource Planning (ERP)",
"Balanced Scorecard (BSC)",
"Supply Chain Management (SCM)"
],
"a": 2,
"e": "BSC dipakai manajer puncak dengan KPI; DSS dipakai manajer menengah. (Inisiasi 8a)"
},
{
"q": "Seorang nasabah menerima tautan menuju situs yang tampilannya sangat mirip situs resmi banknya, lalu diminta mengisi data pribadi. Jenis kejahatan komputer ini adalah ....",
"o": [
"sniffing",
"DDoS attack",
"spoofing",
"carding"
],
"a": 2,
"e": "Spoofing membuat situs palsu yang mirip aslinya untuk menjaring data pribadi. (Inisiasi 5)"
},
{
"q": "Prinsip tentang hal yang baik dan salah, yang digunakan seseorang dengan kehendak bebas untuk membuat keputusan dan membimbing perilakunya, disebut ....",
"o": [
"etika",
"hukum",
"akuntabilitas",
"budaya organisasi"
],
"a": 0,
"e": "Itu definisi etika (Boylan, 2014); etika dibutuhkan justru ketika aturan atau regulasinya belum ada. (Inisiasi 3)"
},
{
"q": "Server situs pendaftaran sebuah kampus tiba-tiba berhenti bekerja karena dibanjiri permintaan data dalam jumlah berlebihan pada waktu yang bersamaan. Jenis kejahatan komputer ini adalah ....",
"o": [
"carding",
"DDoS attack",
"sniffing",
"ransomware"
],
"a": 1,
"e": "DDoS membanjiri server dengan permintaan berlebihan sampai kewalahan; sniffing menyadap informasi di jaringan. (Inisiasi 5)"
},
{
"q": "Dalam proses pengolahan data menjadi informasi, mekanisme pengendalian yang memastikan hasil pengolahan tetap sesuai dengan tujuan organisasi disebut ....",
"o": [
"masukan",
"keluaran",
"umpan balik",
"lingkungan"
],
"a": 2,
"e": "Siklusnya masukan, pengolahan, keluaran; umpan balik berperan sebagai kontrol agar hasilnya sesuai tujuan organisasi. (Inisiasi 1)"
},
{
"q": "Tim TI sebuah koperasi membangun aplikasi analitik yang canggih, padahal pengurus sedang berfokus memperluas layanan simpan pinjam di desa. Aplikasi itu akhirnya tidak menunjang target usaha koperasi. Tantangan sistem informasi strategis yang muncul adalah ....",
"o": [
"menjaga keunggulan kompetitif",
"menghadapi perubahan teknologi",
"menentukan tata kelola infrastruktur teknologi informasi",
"menyelaraskan strategi sistem informasi dengan strategi bisnis"
],
"a": 3,
"e": "Strategi SI yang berjalan sendiri tanpa menunjang strategi bisnis adalah masalah penyelarasan, tantangan kedua SI strategis. (Inisiasi 2)"
},
{
"q": "Menurut materi, keputusan kapan pengujian dan koreksi sebuah sistem informasi terus dilakukan dan kapan dihentikan pada dasarnya ....",
"o": [
"ditetapkan oleh standar kualitas sistem informasi yang baku",
"diatur dalam Undang-Undang Informasi dan Transaksi Elektronik",
"merupakan diskresi pengembang sistem informasi dan manajer proyek",
"ditentukan oleh produsen perangkat keras yang digunakan"
],
"a": 2,
"e": "Belum ada panduan pasti soal standar kualitas SI, jadi batas pengujian diserahkan pada diskresi pengembang dan manajer proyek. (Inisiasi 3)"
},
{
"q": "Mesin-mesin di sebuah pabrik dilengkapi sensor yang saling bertukar data dan otomatis menyesuaikan kecepatan produksi tanpa campur tangan operator. Tren teknologi menurut Turban et al. (2018) yang tergambar dalam kasus ini adalah ....",
"o": [
"teknologi mesin ke mesin",
"Big Data dan Data Analytics",
"konektivitas perusahaan dengan konsumen dan mitra usaha",
"digitalisasi yang ekstensif dan intensif"
],
"a": 0,
"e": "Mesin cerdas yang saling berkomunikasi tanpa campur tangan manusia adalah tren teknologi mesin ke mesin. (Inisiasi 1)"
},
{
"q": "Derajat sebuah produk perdagangan elektronik ditentukan oleh tingkat digitalisasinya pada tiga dimensi, yaitu ....",
"o": [
"harga, promosi, serta tempat",
"pemasok, produsen, serta konsumen",
"perangkat keras, perangkat lunak, serta jaringan",
"transaksi dan pembayaran, produk, serta distribusi"
],
"a": 3,
"e": "Tiga dimensi digitalisasi: transaksi dan pembayaran, produk, serta distribusi. (Inisiasi 7)"
},
{
"q": "Alat manajemen pengetahuan yang digunakan untuk mengelola, menyampaikan, menjejak, dan menilai berbagai pelatihan dan pembelajaran adalah ....",
"o": [
"Enterprise Content Management (ECM)",
"Learning Management System (LMS)",
"Database Management System (DBMS)",
"Customer Relationship Management (CRM)"
],
"a": 1,
"e": "LMS mengelola pelatihan dan pembelajaran; ECM menangani pengetahuan eksplisit yang terstruktur dan semi terstruktur. (Inisiasi 6)"
},
{
"q": "Google Drive yang menyediakan layanan penyimpanan berbasis komputasi awan merupakan contoh sumber pendapatan perdagangan elektronik berupa ....",
"o": [
"penyedia jasa",
"penyedia konten",
"portal",
"penyedia pasar"
],
"a": 0,
"e": "Materi memberi Google Drive sebagai contoh penyedia jasa. (Inisiasi 7)"
},
{
"q": "Menurut Williamson (1981), dampak ekonomi teknologi informasi yang paling utama pada organisasi berkaitan dengan ....",
"o": [
"biaya, karena TI menurunkan biaya produksi, biaya transaksi, dan biaya supervisi karyawan",
"struktur, karena TI selalu menambah lapisan hierarki agar pengawasan lebih ketat",
"budaya, karena TI menghilangkan keengganan karyawan untuk berubah",
"politik, karena TI menggeser kekuatan di antara kelompok dalam organisasi"
],
"a": 0,
"e": "Dampak ekonomi utama TI ada pada biaya: produksi, transaksi, dan supervisi karyawan. (Inisiasi 2)"
},
{
"q": "Direksi sebuah rumah sakit menimbang apakah pusat datanya akan dibangun dan dikelola sendiri atau diserahkan kepada penyedia jasa alih daya, karena biaya kedua pilihan itu sangat besar. Tantangan pengelolaan infrastruktur TI yang dihadapi adalah ....",
"o": [
"menghadapi perubahan teknologi",
"menyelaraskan strategi sistem informasi dengan strategi bisnis",
"penentuan investasi yang bijak",
"menjaga keunggulan kompetitif"
],
"a": 2,
"e": "Materi mengaitkan pilihan swakelola atau alih daya dengan besarnya biaya, yaitu tantangan penentuan investasi yang bijak. (Inisiasi 4)"
},
{
"q": "Berikut ini termasuk keunggulan menggunakan model dalam pengambilan keputusan, KECUALI ....",
"o": [
"model lebih murah dan mudah dimanipulasi daripada kondisi sesungguhnya",
"model memungkinkan simulasi dalam waktu yang lebih singkat",
"model memberi kesempatan belajar tanpa harus mengalami peristiwanya sendiri",
"model menghilangkan ketidakpastian sehingga keputusan yang dihasilkan pasti benar"
],
"a": 3,
"e": "Model justru bisa memasukkan unsur ketidakpastian lewat analisis bagaimana-jika; model tidak menjamin keputusan benar. (Inisiasi 8a)"
},
{
"q": "Proyek pengembangan sistem informasi yang akhirnya selesai, tetapi melewati jadwal, melebihi anggaran, dan tidak semua fitur yang diharapkan terwujud, termasuk kategori proyek ....",
"o": [
"bermasalah",
"gagal",
"berhasil",
"ditunda"
],
"a": 0,
"e": "Selesai tetapi lewat jadwal, lewat anggaran, dan fitur kurang berarti proyek bermasalah; proyek gagal dihentikan di tengah jalan. (Inisiasi 8b)"
},
{
"q": "Menurut materi, dampak negatif penggunaan teknologi informasi terhadap lingkungan berupa ....",
"o": [
"konsumsi energi listrik dan penggunaan bahan berbahaya dan beracun",
"kesenjangan digital antarkelompok masyarakat",
"kaburnya batas antara kehidupan profesional dan pribadi",
"pergeseran kekuatan secara politis"
],
"a": 0,
"e": "Dampak lingkungan TI: konsumsi energi dan bahan B3 seperti timah hitam, merkuri, arsenik, dan kadmium; tiga opsi lain adalah dampak pada kualitas kehidupan. (Inisiasi 3 (Jain & Chawla, 2014))"
},
{
"q": "Berikut ini termasuk komponen penyusun sebuah jaringan komputer menurut materi, KECUALI ....",
"o": [
"switch dan router",
"sistem operasi jaringan",
"media penghubung dan antarmuka jaringan",
"kamus data"
],
"a": 3,
"e": "Jaringan terdiri atas client, server, media penghubung, antarmuka jaringan, switch, router, dan sistem operasi jaringan; kamus data adalah fasilitas DBMS. (Inisiasi 4; Inisiasi 6)"
},
{
"q": "Berikut ini termasuk faktor yang membuat perdagangan elektronik berkembang pesat menurut materi, KECUALI ....",
"o": [
"jangkauan global sehingga pembeli di luar negeri dapat memesan dari Indonesia",
"harga barang yang dijual secara daring selalu lebih murah daripada di toko fisik",
"informasi dan transaksi dapat disesuaikan dengan preferensi pribadi",
"penjual dapat berhubungan langsung dengan pembeli sebelum, selama, dan sesudah transaksi"
],
"a": 1,
"e": "Materi tidak menyebut harga yang selalu lebih murah; yang disebut antara lain jangkauan global, personalisasi, dan interaksi langsung penjual dengan pembeli. (Inisiasi 7)"
},
{
"q": "Situasi ketika seseorang harus memilih di antara dua keharusan moral, sementara semua alternatif keputusan tidak dapat diterima atau sama-sama tidak lebih disukai, disebut ....",
"o": [
"liabilitas",
"kesenjangan digital",
"dilema etika",
"pergeseran kekuatan politis"
],
"a": 2,
"e": "Dilema etika muncul saat harus memilih di antara dua keharusan moral yang alternatifnya sama- sama tidak dapat diterima. (Inisiasi 3)"
},
{
"q": "Pernyataan yang sesuai dengan dimensi pengetahuan menurut materi adalah ....",
"o": [
"pengetahuan adalah aset yang tidak habis ketika didayagunakan, tetapi membutuhkan sumber daya untuk diciptakan dan digunakan",
"pengetahuan bersifat universal sehingga dapat diterapkan dengan cara yang sama dalam semua situasi",
"pengetahuan hanya berbentuk eksplisit, yaitu yang sudah terdokumentasi",
"pengetahuan mudah dipindahkan karena tersimpan dalam benak individu"
],
"a": 0,
"e": "Pengetahuan tidak habis dipakai tetapi butuh sumber daya; sifatnya situasional, berbentuk tacit dan eksplisit, dan sulit dipindahkan. (Inisiasi 6)"
},
{
"q": "Studi kasus Tugas 2: seorang pegawai tidak sengaja menghapus file berisi data pegawai, dan file itu sudah tidak ada di Recycle Bin. Dengan pendekatan computer forensic, langkah pertama yang paling tepat adalah ....",
"o": [
"langsung memasang aplikasi pemulihan di hard disk yang sama lalu memindainya",
"menjalankan file carving langsung pada hard disk asli agar hasilnya lebih cepat",
"menghentikan pemakaian komputer agar ruang bekas file tidak tertimpa data baru",
"menyimpan file hasil pemulihan kembali ke hard disk asal"
],
"a": 2,
"e": "Hentikan pemakaian dulu agar ruang bekas file tidak tertimpa; pemulihan dikerjakan pada salinan disk. (Tugas 2 no. 2)"
},
{
"q": "Sebuah perusahaan dahulu membeli banyak perangkat BlackBerry dan melatih karyawan untuk memakainya. Sejak 2012 perangkat Android dan iOS mendominasi sehingga nasib investasi tersebut dipertanyakan. Kasus ini contoh tantangan pengelolaan infrastruktur TI berupa ....",
"o": [
"tata kelola infrastruktur teknologi informasi",
"menghadapi perubahan teknologi",
"penentuan investasi antara swakelola dan alih daya",
"pengendalian aplikasi"
],
"a": 1,
"e": "Contoh BlackBerry di materi menggambarkan tantangan menghadapi perubahan teknologi. (Inisiasi 4)"
},
{
"q": "Dalam pendekatan berbasis perilaku, disiplin ilmu yang mempelajari proses produksi produk digital, dinamika pasar digital, serta perubahan pengendalian dan struktur biaya perusahaan akibat sistem informasi baru adalah ....",
"o": [
"Sosiologi",
"Psikologi",
"Manajemen Sains",
"Ilmu Ekonomi"
],
"a": 3,
"e": "Ilmu Ekonomi mengkaji produk dan pasar digital serta struktur biaya; Manajemen Sains termasuk pendekatan teknis. (Inisiasi 1)"
},
{
"q": "Berikut ini termasuk contoh masalah keamanan di internet yang disebut dalam materi, KECUALI ....",
"o": [
"serangan pada DNS sehingga pengguna tidak dapat mengakses suatu situs",
"data percakapan VoIP yang tidak terenkripsi",
"enkripsi data pada jaringan nirkabel internal kantor",
"penyadapan perangkat melalui WiFi publik"
],
"a": 2,
"e": "Enkripsi adalah upaya pengamanan; tiga opsi lain adalah contoh ancaman internet di materi. (Inisiasi 5)"
},
{
"q": "Berikut ini termasuk dampak negatif teknologi informasi terhadap kualitas kehidupan manusia, KECUALI ....",
"o": [
"kaburnya batas antara kehidupan profesional dan pribadi",
"ketergantungan pada sistem informasi berbasis komputer",
"kesenjangan digital",
"turunnya biaya transaksi antarperusahaan"
],
"a": 3,
"e": "Turunnya biaya transaksi adalah dampak ekonomi yang menguntungkan, bukan dampak negatif pada kualitas hidup. (Inisiasi 3)"
},
{
"q": "Sebuah bank menyewa tim keamanan untuk mencoba masuk ke sistem informasinya dengan menemukan lalu mengeksploitasi celah keamanan, sebelum celah itu dimanfaatkan peretas. Teknik ini disebut ....",
"o": [
"sniffing",
"penetration testing",
"Disaster Recovery Planning",
"pengendalian aplikasi"
],
"a": 1,
"e": "Penetration testing sengaja masuk lewat kelemahan sistem untuk menemukan celah; DRP berisi langkah pemulihan setelah bencana. (Inisiasi 5)"
},
{
"q": "Berikut ini termasuk peran pekerja pengetahuan dalam organisasi, KECUALI ....",
"o": [
"memasukkan data transaksi penjualan harian ke sistem kasir",
"menjaga kebaruan pengetahuan internal seiring perkembangan pengetahuan di luar organisasi",
"menjadi konsultan internal di bidang keahliannya",
"menjadi agen perubahan terkait pengetahuan dan manajemen pengetahuan"
],
"a": 0,
"e": "Input transaksi harian adalah pekerjaan operasional, bukan peran pekerja pengetahuan. (Inisiasi 6)"
},
{
"q": "Pernyataan yang benar mengenai alamat IP adalah ....",
"o": [
"IP versi 4 memakai 8 blok bilangan heksadesimal",
"IP versi 6 memakai 4 blok angka antara 0 sampai 255",
"IP versi 6 memakai 8 blok, masing-masing berisi 4 bilangan heksadesimal",
"alamat IP hanya diberikan kepada server, sedangkan client cukup memakai nama domain"
],
"a": 2,
"e": "IPv6 memakai 8 blok berisi 4 bilangan heksadesimal; IPv4 memakai 4 blok angka 0 sampai 255. (Inisiasi 4)"
},
{
"q": "Investasi teknologi informasi sering gagal memberi imbal hasil yang memuaskan karena tidak disertai investasi pelengkap. Berikut ini termasuk kelompok aset pelengkap tersebut, KECUALI ....",
"o": [
"aset organisasi, misalnya model bisnis yang tepat dan proses bisnis yang efisien",
"aset finansial berupa cadangan kas dan surat berharga perusahaan",
"aset manajerial, misalnya manajemen yang kuat dan pelatihan",
"aset sosial, misalnya infrastruktur telekomunikasi, standar industri, dan regulasi"
],
"a": 1,
"e": "Aset pelengkap terdiri atas aset organisasi, manajerial, dan sosial; aset finansial tidak termasuk. (BMP Modul 1)"
},
{
"q": "Berikut ini termasuk tantangan dalam implementasi ERP, KECUALI ....",
"o": [
"data setiap departemen tersebar di banyak basis data yang terpisah",
"perusahaan harus mengubah proses bisnisnya agar kompatibel dengan proses yang terdefinisi dalam ERP",
"biaya dan waktu implementasi yang besar",
"biaya pengalihan dari satu produk ERP ke produk ERP lainnya"
],
"a": 0,
"e": "Data yang tersebar justru masalah yang diatasi ERP, bukan tantangan implementasinya. (Inisiasi 7)"
},
{
"q": "Agar pembuatan keputusan dapat diambil alih komputer secara otomatis, dibutuhkan beberapa hal berikut, KECUALI ....",
"o": [
"persetujuan manual dari manajer puncak untuk setiap keputusan",
"algoritma yang merinci langkah demi langkah untuk menghasilkan keputusan",
"basis data yang sangat besar",
"komputer berkecepatan sangat tinggi"
],
"a": 0,
"e": "Kebutuhannya: algoritma, basis data sangat besar, komputer sangat cepat, dan aplikasi yang dioptimalkan; persetujuan manual bertentangan dengan otomatisasi. (Inisiasi 8a (Laudon & Laudon, 2018))"
},
{
"q": "Sebuah situs menjadi tempat para pencinta sepeda dari berbagai kota bertemu, berdiskusi, dan berbagi pengalaman di dunia maya. Model sumber pendapatan perdagangan elektronik yang dijalankan situs ini adalah ....",
"o": [
"penyedia pasar",
"portal",
"perantara transaksi",
"penyedia komunitas"
],
"a": 3,
"e": "Penyedia komunitas mempertemukan suatu komunitas untuk berinteraksi di dunia maya; penyedia pasar mempertemukan penjual dan pembeli. (Inisiasi 7)"
},
{
"q": "Selain UU No. 11 Tahun 2008 tentang ITE, materi menyebut beberapa regulasi lain yang dapat dipakai untuk menjaga kerahasiaan data dan keamanan sistem informasi. Berikut termasuk regulasi tersebut, KECUALI ....",
"o": [
"Peraturan Menteri Kominfo Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi",
"Peraturan Menteri Kesehatan Nomor 269 Tahun 2008 tentang rekam medis",
"Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan",
"Undang-Undang Nomor 16 Tahun 2009 tentang Ketentuan Umum Perpajakan"
],
"a": 2,
"e": "Regulasi di materi: Permenkominfo 20/2016, Permenkes 269/2008, dan UU 16/2009; UU Ketenagakerjaan tidak termasuk. (Inisiasi 5)"
},
{
"q": "Komponen ekosistem intelegensi bisnis yang menekankan bahwa keluaran lebih mudah dipahami jika disajikan secara visual, bukan sekadar teks atau tabel, adalah ....",
"o": [
"platform untuk menyampaikan informasi",
"antarmuka pengguna",
"alat analisis data bisnis",
"infrastruktur intelegensi bisnis"
],
"a": 1,
"e": "Antarmuka pengguna menyangkut tampilan visual keluaran; platform menyangkut distribusinya. (Inisiasi 8a)"
}
]
},
{
"id": "web",
"name": "Pemrograman Berbasis Web",
"questions": [
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <button @click=\"tambah\">Tambah</button>\n       <p>Nilai: {{ counter }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { counter: 0 },\n       methods: {\n          tambah() { this.counter++; }\n       }\n    })\n    </script>\nSaat halaman dimuat dan tombol diklik sekali, apa perilaku yang benar?",
"o": [
"<p> tetap menampilkan \"Nilai: 0\"",
"<p> menampilkan \"Nilai: 1\"",
"<p> menampilkan \"Nilai: tambah\"",
"Error karena counter bukan method"
],
"a": 1,
"e": "Klik memanggil tambah() yang menaikkan counter dari 0 menjadi 1."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p>{{ kuadrat }}</p>\n       <p>{{ kuadrat() }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { angka: 4 },\n       computed: {\n          kuadrat() { return this.angka * this.angka; }\n       },\n       methods: {\n          kuadrat() { return this.angka ** 2; }\n       }\n    })\n    </script>\nPernyataan yang benar adalah ....",
"o": [
"{{ kuadrat }} memanggil computed property, sedangkan {{ kuadrat() }} memanggil method",
"Keduanya hanya memanggil computed property",
"Keduanya hanya memanggil method",
"Keduanya akan error"
],
"a": 0,
"e": "Konsep yang diuji: tanpa kurung berarti computed, dengan kurung berarti method. Catatan: saat dijalankan di Vue 2 asli, computed bernama sama diabaikan (muncul warning), jadi jangan pakai nama yang sama di proyek nyata."
},
{
"q": "Perhatikan baris program berikut:\n    <div id=\"app\">\n       <input v-model=\"x\" type=\"text\">\n       <input v-model.number=\"y\" type=\"text\">\n       <p>{{ x + y }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { x: 10, y: '5' }\n    })\n    </script>\nKeluaran dari kode program di atas adalah ....",
"o": [
"15",
"105",
"5",
"Error"
],
"a": 1,
"e": "Modifier .number hanya mengubah input dari pengguna; nilai awal y tetap string '5', jadi 10 + '5' = \"105\"."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p v-text=\"pesan\"></p>\n       <p>{{ pesan }}</p>\n    </div>\n    <script>\n       new Vue({\n          el: '#app',\n          data: {\n              pesan: 'Hello Vue!',\n              pesan: 'Hello Vue1'\n          }\n       })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"<p v-text=\"pesan\"></p> <p>{{ pesan }}</p>",
"Hello Vue1 Hello Vue1",
"Hello Vue1 Hello Vue1 (satu baris)",
"Hello Vue! Hello Vue!"
],
"a": 1,
"e": "Jika sebuah objek punya dua key yang sama, nilai terakhir yang dipakai, yaitu 'Hello Vue1'; tiap <p> tampil di barisnya sendiri."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-if=\"judul\">Judul: {{ judul }}</p>\n       <p v-else>Tidak ada judul</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { judul: '' }\n    })\n    </script>\nApa yang tampil saat render pertama?",
"o": [
"Judul: (kosong)",
"Judul: {{ judul }}",
"Tidak ada judul",
"Tidak ada yang tampil"
],
"a": 2,
"e": "String kosong '' bernilai falsy, jadi blok v-else yang tampil."
},
{
"q": "Perhatikan baris program berikut:\n    <div id=\"app\">\n       <input v-model=\"x\" type=\"text\">\n       <input v-model.number=\"y\" type=\"text\">\n       <p>{{ x + y }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { x: '10', y: 5 }\n    })\n    </script>\nKeluaran dari kode program di atas adalah ....",
"o": [
"15",
"105",
"10 + 5",
"Error"
],
"a": 1,
"e": "Nilai awal x adalah string '10', jadi '10' + 5 digabung menjadi \"105\"."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p>{{ angka + 5 }}</p>\n    </div>\n    <script>\n       new Vue({\n          el: '#app',\n          data: {\n              angka: 10\n          }\n       })\n    </script>\nOutput di browser adalah ....",
"o": [
"Error",
"angka + 5",
"10 + 5",
"15"
],
"a": 3,
"e": "Ekspresi di dalam {{ }} dievaluasi dulu, jadi yang tampil adalah hasilnya, 15."
},
{
"q": "Perhatikan program berikut:\n    <div id=\"app\">\n       <p>{{ buah[buah.length - 1] }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { buah: ['Apel', 'Jeruk', 'Mangga', 'Pisang'] }\n    })\n    </script>\nApa yang ditampilkan?",
"o": [
"Apel",
"Jeruk",
"Mangga",
"Pisang"
],
"a": 3,
"e": "buah.length - 1 = 3, dan indeks 3 (dihitung dari 0) berisi Pisang."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <button @click=\"tambah(2)\">Tambah</button>\n       <p>{{ count }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { count: 3 },\n       methods: {\n          tambah(n) { this.count += n; }\n       }\n    })\n    </script>\nSetelah tombol diklik sekali, berapa nilai count?",
"o": [
"3",
"4",
"5",
"6"
],
"a": 2,
"e": "tambah(2) menambahkan 2 ke count: 3 + 2 = 5."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p>{{ angka + 5 }}</p>\n       <p>{{ angka + 4 }}</p>\n    </div>\n    <script>\n       new Vue({\n          el: '#app',\n          data: {\n              angka: 10\n          }\n       })\n    </script>\nOutput di browser adalah ....",
"o": [
"15",
"15",
"15",
"15 saja"
],
"a": 2,
"e": "Mustache menghitung ekspresi JavaScript di dalamnya: 10 + 5 = 15 dan 10 + 4 = 14."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-if=\"aktif\" v-show=\"tampil\">Panel Aktif</p>\n       <p v-else>Panel Nonaktif</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { aktif: true, tampil: true }\n    })\n    </script>\nOutput dari kodingan di atas adalah ....",
"o": [
"Panel Aktif",
"Panel Aktif (tersembunyi)",
"Panel Nonaktif",
"Tidak ada apa pun"
],
"a": 0,
"e": "aktif true membuat elemen dirender, dan tampil true membuat v-show tidak menyembunyikannya."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-if=\"judul\">Judul: {{ judul }}</p>\n       <p v-else>Tidak ada judul</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { judul: 'Belajar Vue' }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"Judul: Belajar Vue",
"Tidak ada judul",
"Error",
"Kosong"
],
"a": 0,
"e": "'Belajar Vue' bernilai truthy, jadi blok v-if tampil beserta isi judulnya."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <button @click=\"tambah\">Tambah</button>\n       <p>{{ count }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { count: 4 },\n       methods: {\n          tambah() { this.count += 1; }\n       }\n    })\n    </script>\nSetelah tombol diklik sekali, berapa nilai count?",
"o": [
"3",
"4",
"5",
"6"
],
"a": 2,
"e": "tambah() menambahkan 1 ke count: 4 + 1 = 5."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <button @click=\"salam\">Klik</button>\n       <p>{{ salam() }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { nama: 'Budi' },\n       methods: {\n          salam() { return \"Halo \" + this.nama; }\n       }\n    })\n    </script>\nSaat halaman dimuat dan tombol diklik, apa perilaku yang benar?",
"o": [
"<p> kosong, tombol memunculkan alert",
"<p> menampilkan \"Halo Budi\", tombol tidak melakukan apa-apa",
"<p> menampilkan \"Halo Budi\", tombol juga menampilkan \"Halo Budi\" di console",
"Error karena methods tidak bisa dipanggil di template dan event bersamaan"
],
"a": 1,
"e": "salam() hanya mengembalikan string; saat dipanggil lewat klik, nilai kembaliannya tidak dipakai untuk apa pun."
},
{
"q": "Perhatikan potongan kode berikut:\n    let kata = \"JAVASCRIPT\";\n    let huruf = kata.charAt(4);\nApa isi variabel huruf?",
"o": [
"\"J\"",
"\"V\"",
"\"S\"",
"\"C\""
],
"a": 2,
"e": "Indeks dimulai dari 0: J(0) A(1) V(2) A(3) S(4)."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <input v-model=\"usernameView\">\n       <p>{{ username }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          username: 'Kani'\n       },\n       computed: {\n          usernameView() {\n              return this.username.toUpperCase();\n          }\n       }\n    })\n    </script>\nSaat pengguna mengetik \"kani123\" pada input, apa yang terjadi?",
"o": [
"<p> berubah menjadi kani123",
"<p> tetap Kani, karena perubahan di input tidak tersinkron ke username",
"<p> berubah menjadi KANI123",
"Error runtime karena computed tidak punya setter"
],
"a": 1,
"e": "Computed tanpa setter tidak bisa mengubah username, jadi <p> tetap \"Kani\"; Vue hanya memberi warning di console, bukan error runtime."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <label><input type=\"radio\" v-model=\"paket\" value=\"basic\"> Basic</label>\n       <label><input type=\"radio\" v-model=\"paket\" value=\"premium\"> Premium</label>\n       <label><input type=\"radio\" v-model=\"paket\" value=\"vip\"> VIP</label>\n       <p>Total: {{ total }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          harga: 100,\n          paket: 'basic'\n       },\n       computed: {\n          diskon() {\n              switch (this.paket) {\n                 case 'premium': return 0.10;\n                 case 'vip': return 0.20;\n                 default: return 0;\n              }\n          },\n          total() {\n              return this.harga * (1 - this.diskon);\n          }\n       }\n    })\n    </script>\nNilai Total saat render pertama adalah ....",
"o": [
"80",
"90",
"100",
"120"
],
"a": 2,
"e": "paket 'basic' masuk ke default (diskon 0), jadi total tetap 100."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-bind:class=\"warna\">Teks</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { warna: 'merah' }\n    })\n    </script>\n    /* CSS */\n    .merah { color: red; }\n    .biru { color: blue; }\nOutput dari kodingan di atas adalah ....",
"o": [
"Teks berwarna biru",
"Teks berwarna merah",
"Teks hitam tanpa warna",
"Error"
],
"a": 1,
"e": "Class yang terpasang hanya merah; aturan .biru tidak terpakai karena tidak ada elemen ber-class biru."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <label><input type=\"radio\" v-model=\"level\" value=\"silver\"> Silver</label>\n       <label><input type=\"radio\" v-model=\"level\" value=\"gold\"> Gold</label>\n       <label><input type=\"radio\" v-model=\"level\" value=\"platinum\"> Platinum</label>\n       <p>Total: {{ total }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          harga: 100,\n          level: 'gold' // nilai awal\n       },\n       computed: {\n          diskon() {\n              switch (this.level) {\n                 case 'gold': return 0.10;\n                 case 'platinum': return 0.20;\n                 default: return 0; // silver\n              }\n          },\n          total() {\n              return this.harga * (1 - this.diskon);\n          }\n       }\n    })\n    </script>\nNilai Total saat render pertama adalah ....",
"o": [
"80",
"90",
"100",
"120"
],
"a": 1,
"e": "level awal 'gold' memberi diskon 0.10, jadi total = 100 x (1 - 0.10) = 90."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <input v-model=\"usernameView\">\n       <p>{{ username }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          username: 'Kani'\n       },\n       computed: {\n          usernameView() {\n              return this.username.toLowerCase();\n          }\n       }\n    })\n    </script>\nTeks yang tampil di dalam kotak input saat halaman dimuat adalah ....",
"o": [
"KANI",
"kani",
"Kosong",
"Error"
],
"a": 1,
"e": "Input terikat ke computed usernameView, yaitu 'Kani'.toLowerCase() = \"kani\"; teks <p> sendiri tetap \"Kani\"."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-bind:class=\"warna\">Teks</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { warna: 'merah' }\n    })\n    </script>\nJika di CSS terdapat .merah { color: red; }, bagaimana tampilan teksnya?",
"o": [
"Teks berwarna merah",
"Teks biru",
"Teks merah {{ warna }}",
"Biru dan merah tampil"
],
"a": 0,
"e": "v-bind:class=\"warna\" mengisi class dengan nilai data 'merah', sehingga aturan .merah berlaku."
},
{
"q": "Perhatikan potongan kode berikut:\n    let kata = \"JAVASCRIPT\";\n    let huruf = kata.charAt(kata.length - 1);\nApa isi variabel huruf?",
"o": [
"\"J\"",
"\"T\"",
"\"P\"",
"\"C\""
],
"a": 1,
"e": "kata.length - 1 = 9, yaitu indeks huruf terakhir: T."
},
{
"q": "Perhatikan kode program berikut:\n    const s = \"universitas\";\n    const a = s.slice(2, -1);\n    console.log(a);\nVariabel a akan berisi nilai ....",
"o": [
"\"universita\"",
"\"iversita\"",
"\"iversitas\"",
"\"versita\""
],
"a": 1,
"e": "slice(2, -1) mengambil dari indeks 2 sampai sebelum karakter terakhir: \"iversita\"."
},
{
"q": "Simak kode program berikut:\n    <div id=\"app\">\n       <p v-text=\"pesan\"></p>\n       <p v-html=\"pesan\"></p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { pesan: '<b>Halo Vue</b>' }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"Halo Vue (tanpa tebal) dan <b>Halo Vue</b>",
"<b>Halo Vue</b> dan Halo Vue (tebal)",
"Halo Vue (tanpa tebal) dan Halo Vue (tebal)",
"Error"
],
"a": 1,
"e": "v-text menampilkan tag HTML apa adanya sebagai teks, sedangkan v-html merender tag tersebut (teks menjadi tebal)."
},
{
"q": "Perhatikan kode program berikut:\n    const s = \"programming\";\n    const a = s.slice(2, -1);\n    console.log(a);\nVariabel a akan berisi nilai ....",
"o": [
"\"programmin\"",
"\"grammin\"",
"\"ogrammin\"",
"\"ogrammi\""
],
"a": 2,
"e": "slice(2, -1) membuang 2 huruf di awal dan 1 huruf di akhir: \"ogrammin\"."
},
{
"q": "Jika terdapat kode program berikut:\n    <div id=\"app\">\n       <p>{{ pesan }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          pesan: \"Belajar\\nVue\\nMenyenangkan\"\n       }\n    })\n    </script>\nBagaimana hasil tampilannya di browser?",
"o": [
"Belajar Vue Menyenangkan (satu baris)",
"Belajar, lalu baris baru Vue, lalu baris baru Menyenangkan",
"Error karena karakter \\n tidak valid",
"Hanya menampilkan \"Belajar\""
],
"a": 0,
"e": "Browser menganggap karakter baris baru (\\n) di dalam teks HTML sebagai spasi biasa, jadi teks tampil dalam satu baris."
},
{
"q": "Perhatikan kodingan berikut:\n    <div id=\"app\">\n       <p v-if=\"aktif\" v-show=\"tampil\">Panel Aktif</p>\n       <p v-else>Panel Nonaktif</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { aktif: false, tampil: true }\n    })\n    </script>\nOutput dari kodingan di atas adalah ....",
"o": [
"Panel Aktif",
"Panel Aktif (tersembunyi)",
"Panel Nonaktif",
"Tidak ada apa pun"
],
"a": 2,
"e": "v-if bernilai false sehingga elemen pertama tidak dirender sama sekali (v-show tidak berpengaruh), lalu v- else yang tampil."
},
{
"q": "Perhatikan program berikut:\n    <div id=\"app\">\n       <p>{{ buah[0].toUpperCase() }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { buah: ['Apel', 'Jeruk', 'Mangga', 'Pisang'] }\n    })\n    </script>\nApa yang ditampilkan?",
"o": [
"apel",
"Apel",
"APEL",
"Error"
],
"a": 2,
"e": "buah[0] berisi Apel, lalu toUpperCase() mengubah semua hurufnya menjadi kapital: APEL."
},
{
"q": "Perhatikan potongan kode program berikut:\n    <div id=\"app\">\n       <p v-text=\"x + y\"></p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { x: '10', y: 2 }\n    })\n    </script>\nOutput layar kode program di atas adalah ....",
"o": [
"12",
"x + y",
"102",
"\"10 + 2\""
],
"a": 2,
"e": "x bertipe string, jadi '10' + 2 adalah penggabungan string: \"102\"."
},
{
"q": "Simak kode program berikut:\n    <div id=\"app\">\n       <p>{{ pesan }}</p>\n       <p v-html=\"pesan\"></p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { pesan: '<i>Belajar Vue</i>' }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"Belajar Vue (tanpa miring) dan <i>Belajar Vue</i>",
"<i>Belajar Vue</i> dan Belajar Vue (miring)",
"Belajar Vue (tanpa miring) dan Belajar Vue (miring)",
"Error"
],
"a": 1,
"e": "Mustache menampilkan string mentah termasuk tag <i>, sedangkan v-html merendernya menjadi teks miring."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p v-text=\"pesan\"></p>\n       <p>{{ pesan }}</p>\n    </div>\n    <script>\n       new Vue({\n          el: '#app',\n          data: {\n              pesan: 'Hello Vue!'\n          }\n       })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"<p v-text=\"pesan\"></p> <p>{{ pesan }}</p>",
"Hello Vue! Hello Vue!",
"Hello Vue! {{ pesan }}",
"Error"
],
"a": 1,
"e": "v-text dan {{ }} sama-sama menampilkan isi data pesan sebagai teks."
},
{
"q": "Agar kode JavaScript tidak mengganggu pemuatan konten HTML, sebaiknya tag <script> diletakkan di ....",
"o": [
"Awal <head>",
"Tengah <body>",
"Bagian akhir sebelum </body>",
"Di dalam atribut <style>"
],
"a": 2,
"e": "Script sebelum </body> dijalankan setelah HTML selesai dimuat, sehingga tidak menahan tampilan halaman."
},
{
"q": "Dalam CSS, isi atau nilai yang diberikan pada suatu properti disebut ....",
"o": [
"Properti",
"Tag",
"Value",
"Selector"
],
"a": 2,
"e": "Pada color: red; bagian color adalah properti dan red adalah value."
},
{
"q": "Jika di template kita menulis {{ kaliDua }} dan {{ kaliDua() }}, apa kemungkinan perbedaannya?",
"o": [
"{{ kaliDua }} merujuk ke computed, sedangkan {{ kaliDua() }} memanggil methods",
"Keduanya merujuk ke methods",
"Keduanya merujuk ke computed",
"Tidak bisa dipakai di template"
],
"a": 0,
"e": "Computed dipanggil seperti properti (tanpa kurung), sedangkan method dipanggil sebagai fungsi (dengan kurung)."
},
{
"q": "Tag HTML yang digunakan untuk menampilkan gambar adalah ....",
"o": [
"<alt>",
"<pic>",
"<src>",
"<img>"
],
"a": 3,
"e": "Gambar ditampilkan dengan <img>; src dan alt adalah atributnya, bukan tag."
},
{
"q": "Jika menggunakan Vue.js dengan CDN, maka untuk memuat file library Vue ke dalam halaman HTML perlu menggunakan atribut ....",
"o": [
"src",
"class",
"id pada elemen HTML",
"href"
],
"a": 0,
"e": "Library Vue dimuat lewat <script src=\"alamat CDN Vue\">."
},
{
"q": "Agar kode JavaScript yang bersifat penting dapat diproses lebih awal, sebaiknya tag <script> diletakkan di ....",
"o": [
"Awal <head>",
"Tengah <body>",
"Bagian akhir sebelum </body>",
"Di dalam atribut <style>"
],
"a": 0,
"e": "Script di <head> dibaca sebelum isi <body>, cocok untuk kode yang harus siap paling awal."
},
{
"q": "Elemen HTML yang digunakan untuk membuat hyperlink/link adalah ....",
"o": [
"<nav>",
"<link>",
"<href>",
"<a>"
],
"a": 3,
"e": "Hyperlink dibuat dengan <a> beserta atribut href; <link> dipakai untuk memuat file eksternal seperti CSS."
},
{
"q": "Dalam aturan CSS, bagian yang menentukan elemen HTML mana yang akan diubah adalah ....",
"o": [
"Properti",
"Tag",
"Nilai",
"Selector"
],
"a": 3,
"e": "Selector (misalnya p, .kelas, #id) menentukan elemen yang diberi gaya."
},
{
"q": "Jika menggunakan Vue.js dengan CDN, maka untuk menghubungkan Vue instance dengan HTML perlu menggunakan atribut ....",
"o": [
"src",
"class",
"id pada elemen HTML",
"href"
],
"a": 2,
"e": "Opsi el: '#app' menghubungkan instance Vue ke elemen yang memiliki id=\"app\"."
},
{
"q": "Hasil dari ekspresi berikut adalah ....\nNumber(\"10\") + true + 9",
"o": [
"20",
"\"1010\"",
"\"20\"",
"NaN"
],
"a": 0,
"e": "Number(\"10\") menjadi 10, true dikonversi menjadi 1, lalu 10 + 1 + 9 = 20."
},
{
"q": "Jika kode berikut dijalankan:\n    let usia = 20;\n    let status = \"mahasiswa\";\n    if (usia <= 18) {\n       if (status === \"mahasiswa\") {\n          console.log(\"Diskon 50%\");\n       } else {\n          console.log(\"Diskon 10%\");\n       }\n    } else {\n       console.log(\"Tidak dapat diskon\");\n    }\nMaka hasilnya adalah ....",
"o": [
"Diskon 10%",
"Tidak dapat diskon",
"Error",
"Diskon 50%"
],
"a": 1,
"e": "usia = 20 tidak memenuhi usia <= 18, jadi program langsung masuk ke else terluar."
},
{
"q": "Hasil dari ekspresi berikut adalah ....\n\"10\" + 10",
"o": [
"20",
"\"1010\"",
"\"20\"",
"\"10 + 10\""
],
"a": 1,
"e": "Jika salah satu operand string, operator + menggabungkan teks: \"10\" + 10 = \"1010\"."
},
{
"q": "Perhatikan kode program berikut:\n    let total = 0;\n    for (let i = 1; i <= 5; i++) {\n       total += i;\n    }\n    console.log(total);\nOutput dari program di atas adalah ....",
"o": [
"5",
"10",
"15",
"20"
],
"a": 2,
"e": "Loop menjumlahkan 1 + 2 + 3 + 4 + 5 = 15."
},
{
"q": "Jika kode berikut dijalankan:\n    let umur = 20;\n    let status = \"mahasiswa\";\n    if (umur >= 18) {\n       if (status === \"mahasiswa\") {\n          console.log(\"Diskon 50%\");\n       } else {\n          console.log(\"Diskon 10%\");\n       }\n    } else {\n       console.log(\"Tidak dapat diskon\");\n    }\nMaka hasilnya adalah ....",
"o": [
"Diskon 10%",
"Tidak dapat diskon",
"Error",
"Diskon 50%"
],
"a": 3,
"e": "umur >= 18 bernilai true dan status === \"mahasiswa\" juga true, jadi cabang pertama yang dijalankan."
},
{
"q": "Perhatikan kode program berikut:\n    let total = 0;\n    for (let i = 1; i <= 4; i++) {\n       total += i;\n    }\n    console.log(total);\nOutput dari program di atas adalah ....",
"o": [
"5",
"10",
"15",
"20"
],
"a": 1,
"e": "Loop menjumlahkan 1 + 2 + 3 + 4 = 10."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <img v-bind:src=\"foto\" :alt=\"nama\">\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { foto: 'img/logo-ut.png', nama: 'Logo UT' }\n    })\n    </script>\nHasil render elemen <img> di browser adalah ....",
"o": [
"<img src=\"foto\" alt=\"nama\">",
"<img src=\"{{ foto }}\" alt=\"{{ nama }}\">",
"<img src=\"img/logo-ut.png\" alt=\"Logo UT\">",
"<img> tanpa atribut src dan alt"
],
"a": 2,
"e": "v-bind mengisi atribut dengan nilai data, bukan teks nama variabelnya; mustache {{ }} tidak berlaku di dalam atribut."
},
{
"q": "Kehadiran website resmi sebuah perusahaan dapat meningkatkan citra dan kepercayaan masyarakat. Manfaat ini termasuk ....",
"o": [
"Sumber informasi",
"Tampil profesional",
"Penuangan ide",
"Sarana promosi"
],
"a": 1,
"e": "Website resmi membuat perusahaan terlihat kredibel di mata publik, itulah manfaat tampil profesional."
},
{
"q": "Perhatikan kode program berikut:\n    const tanggal = \"2026-11-22\";\n    const bagian = tanggal.split(\"-\");\n    console.log(bagian[1]);\nOutput dari program di atas adalah ....",
"o": [
"\"2026\"",
"\"-\"",
"\"11\"",
"\"22\""
],
"a": 2,
"e": "split('-') memecah string menjadi array ['2026', '11', '22'], dan indeks 1 berisi '11'."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p v-for=\"(nilai, kunci) in buku\">{{ kunci }}: {{ nilai }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          buku: { judul: 'Vue Dasar', halaman: 120 }\n       }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"Vue Dasar: judul, lalu 120: halaman",
"0: Vue Dasar, lalu 1: 120",
"Error karena v-for hanya untuk array",
"judul: Vue Dasar, lalu halaman: 120"
],
"a": 3,
"e": "Saat v-for dipakai pada objek, parameter pertama berisi nilai dan parameter kedua berisi nama properti (key)."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p v-if=\"nilai >= 80\">Sangat Baik</p>\n       <p v-else-if=\"nilai >= 70\">Baik</p>\n       <p v-else-if=\"nilai >= 60\">Cukup</p>\n       <p v-else>Kurang</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { nilai: 70 }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"Baik",
"Sangat Baik",
"Cukup",
"Baik dan Cukup"
],
"a": 0,
"e": "Kondisi diperiksa berurutan; 70 >= 70 adalah kondisi pertama yang benar, dan cabang setelahnya tidak dirender."
},
{
"q": "Seorang mahasiswa membuat blog pribadi untuk menulis opini, artikel, dan berbagi karya. Manfaat website dalam hal ini adalah ....",
"o": [
"Penuangan ide dan gagasan",
"Meningkatkan bisnis",
"Tampil profesional",
"Sarana promosi"
],
"a": 0,
"e": "Blog pribadi dipakai untuk menulis opini dan karya, jadi manfaatnya sebagai sarana menuangkan ide."
},
{
"q": "Perhatikan kode program berikut:\n    <ul id=\"app\">\n       <li v-for=\"(mk, i) in matkul\">{{ i }}. {{ mk }}</li>\n    </ul>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { matkul: ['HTML', 'CSS', 'Vue'] }\n    })\n    </script>\nBaris terakhir yang tampil adalah ....",
"o": [
"3. Vue",
"1. Vue",
"2. CSS",
"2. Vue"
],
"a": 3,
"e": "Parameter kedua pada v-for adalah indeks yang dimulai dari 0, sehingga Vue berada di indeks 2."
},
{
"q": "Protokol apa yang menjadi dasar utama untuk komunikasi jaringan internet, termasuk mendukung transfer data seperti halaman web, email, dan streaming?",
"o": [
"HTTP",
"FTP",
"DNS",
"TCP/IP"
],
"a": 3,
"e": "TCP/IP adalah protokol dasar seluruh komunikasi internet; HTTP, FTP, dan DNS berjalan di atasnya."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p v-for=\"mhs in daftar\">{{ mhs.nama }} ({{ mhs.nilai }})</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: {\n          daftar: [\n              { nama: 'Ani', nilai: 80 },\n              { nama: 'Budi', nilai: 75 }\n          ]\n       }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"[object Object] sebanyak dua kali",
"mhs.nama (mhs.nilai) sebanyak dua kali",
"Ani (80), lalu Budi (75)",
"Hanya Ani (80)"
],
"a": 2,
"e": "v-for mengulang setiap objek di dalam array, dan properti tiap objek diakses dengan namanya (mhs.nama, mhs.nilai)."
},
{
"q": "Perhatikan kode program berikut:\n    let teks = \"satu-dua-tiga\";\n    let hasil = teks.replace(\"-\", \" \");\n    console.log(hasil);\nOutput dari program di atas adalah ....",
"o": [
"\"satu dua-tiga\"",
"\"satu dua tiga\"",
"\"satu-dua tiga\"",
"\"satudua-tiga\""
],
"a": 0,
"e": "replace() dengan pola berupa string hanya mengganti kemunculan pertama; untuk mengganti semuanya dipakai replaceAll() atau regex /-/g."
},
{
"q": "Perhatikan kode program berikut:\n    <!-- isi style.css: p { color: green; } -->\n    <head>\n       <link rel=\"stylesheet\" href=\"style.css\">\n       <style>\n          p { color: blue; }\n       </style>\n    </head>\n    <body>\n       <p style=\"color: red;\">Teks</p>\n    </body>\nWarna teks yang tampil adalah ....",
"o": [
"Hijau",
"Biru",
"Hitam",
"Merah"
],
"a": 3,
"e": "Inline CSS (atribut style) punya prioritas paling tinggi dibanding CSS internal (<style>) dan eksternal (file .css)."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p>{{ nama | kapital }}</p>\n       <p>{{ nama }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { nama: 'vue' },\n       filters: {\n          kapital(teks) {\n              return teks.toUpperCase();\n          }\n       }\n    })\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"VUE, lalu VUE",
"vue, lalu VUE",
"vue, lalu vue",
"VUE, lalu vue"
],
"a": 3,
"e": "Filter (ditulis setelah tanda |) hanya mengubah keluaran; nilai data nama tetap 'vue'."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <input type=\"date\" v-model=\"tgl\">\n       <p>{{ tgl }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { tgl: '' }\n    })\n    </script>\nPengguna memilih tanggal 17 Agustus 2026. Teks pada <p> adalah ....",
"o": [
"17/08/2026",
"08-17-2026",
"Objek Date lengkap dengan jam",
"2026-08-17"
],
"a": 3,
"e": "Input bertipe date selalu memberi nilai string berformat YYYY-MM-DD, apa pun format tampilannya di browser."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <input v-model.number=\"qty\" type=\"number\">\n       <p>Total: {{ total }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { harga: 50000, qty: 1, total: 0 },\n       watch: {\n          qty(baru) {\n              this.total = this.harga * baru;\n          }\n       }\n    })\n    </script>\nSaat halaman pertama kali dimuat (qty belum diubah), teks pada <p> adalah ....",
"o": [
"Total: 50000",
"Total: 0",
"Total: NaN",
"Error"
],
"a": 1,
"e": "Watcher hanya berjalan ketika qty berubah, bukan saat render pertama, jadi total masih bernilai awal 0."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <input v-model=\"km\" type=\"text\">\n       <p>{{ meter }} meter</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { km: 0, meter: 0 },\n       watch: {\n          km(nilaiBaru) {\n              this.meter = nilaiBaru * 1000;\n          }\n       }\n    })\n    </script>\nJika pengguna mengganti isi input menjadi 2, teks pada <p> menjadi ....",
"o": [
"0 meter",
"2 meter",
"NaN meter",
"2000 meter"
],
"a": 3,
"e": "Watcher km berjalan setiap km berubah; '2' * 1000 otomatis dikonversi menjadi angka 2000 karena operator * memaksa string menjadi number."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p :style=\"{ color: warna, fontSize: ukuran + 'px' }\">Halo</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { warna: 'blue', ukuran: 20 }\n    })\n    </script>\nTampilan teks Halo adalah ....",
"o": [
"Biru dengan ukuran 20px",
"Hitam dengan ukuran 20px",
"Biru dengan ukuran default browser",
"Error karena fontSize harus ditulis font-size"
],
"a": 0,
"e": "v-bind:style menerima objek; nama properti camelCase fontSize otomatis diterjemahkan menjadi font- size: 20px."
},
{
"q": "Protokol dasar yang digunakan untuk mentransfer halaman web adalah ....",
"o": [
"HTTP",
"FTP",
"DNS",
"TCP/IP"
],
"a": 0,
"e": "HTTP (Hypertext Transfer Protocol) khusus mengirim halaman web dari server ke browser."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <tombol-hitung></tombol-hitung>\n       <tombol-hitung></tombol-hitung>\n    </div>\n    <script>\n    Vue.component('tombol-hitung', {\n       data() {\n          return { n: 0 };\n       },\n       template: '<button @click=\"n++\">Klik {{ n }}</button>'\n    });\n    new Vue({ el: '#app' });\n    </script>\nTombol pertama diklik dua kali, tombol kedua tidak diklik. Teks kedua tombol menjadi ....",
"o": [
"Klik 2 dan Klik 2",
"Klik 1 dan Klik 1",
"Klik 2 dan Klik 0",
"Klik 0 dan Klik 0"
],
"a": 2,
"e": "data pada komponen ditulis sebagai fungsi, sehingga setiap instance punya salinan n sendiri."
},
{
"q": "Fasilitas Vue.js yang digunakan untuk menjalankan aksi tertentu setiap kali nilai sebuah data berubah adalah ....",
"o": [
"watch",
"filters",
"methods",
"v-bind"
],
"a": 0,
"e": "Watcher memantau satu data dan menjalankan fungsinya setiap data itu berubah; methods baru berjalan bila dipanggil, misalnya lewat event klik."
},
{
"q": "Berdasarkan jenisnya, elemen <br> dan <img> termasuk ....",
"o": [
"Elemen bersarang",
"Atribut",
"Selector",
"Elemen kosong"
],
"a": 3,
"e": "Elemen kosong tidak punya isi dan tag penutup; kebalikannya, elemen bersarang berisi elemen lain di dalamnya."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <kartu-mk judul=\"Basis Data\"></kartu-mk>\n       <kartu-mk judul=\"Pemrograman Web\"></kartu-mk>\n    </div>\n    <script>\n    Vue.component('kartu-mk', {\n       props: ['judul'],\n       template: '<h3>MK: {{ judul }}</h3>'\n    });\n    new Vue({ el: '#app' });\n    </script>\nOutput dari kode program di atas adalah ....",
"o": [
"MK: {{ judul }} sebanyak dua kali",
"Basis Data Pemrograman Web (tanpa \"MK:\")",
"Hanya MK: Basis Data",
"MK: Basis Data, lalu MK: Pemrograman Web"
],
"a": 3,
"e": "Setiap tag <kartu-mk> membuat satu instance komponen, dan atribut judul dikirim ke komponen lewat props."
},
{
"q": "Perbedaan v-if dan v-show ketika kondisinya bernilai false adalah ....",
"o": [
"v-if menghapus elemen dari DOM, sedangkan v-show tetap merender elemen dengan style display: none",
"v-show menghapus elemen dari DOM, sedangkan v-if memberi style display: none",
"Keduanya menghapus elemen dari DOM",
"Keduanya hanya memberi style display: none"
],
"a": 0,
"e": "v-if benar-benar menambah atau menghapus elemen dari DOM, sedangkan v-show selalu merender elemen dan hanya mengubah CSS display."
},
{
"q": "Bentuk singkat (shorthand) dari v-bind:src dan v-on:click secara berurutan adalah ....",
"o": [
"@src dan :click",
"#src dan @click",
":src dan #click",
":src dan @click"
],
"a": 3,
"e": "v-bind disingkat dengan titik dua (:), sedangkan v-on disingkat dengan tanda @."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <input v-model=\"kata\" @keyup.enter=\"simpan\">\n       <p>{{ hasil }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { kata: '', hasil: 'Belum ada' },\n       methods: {\n          simpan() { this.hasil = this.kata; }\n       }\n    })\n    </script>\nPengguna mengetik \"halo\" pada input tetapi tidak menekan tombol Enter. Teks pada <p> adalah ....",
"o": [
"Belum ada",
"halo",
"(kosong)",
"Error"
],
"a": 0,
"e": "@keyup.enter hanya memanggil simpan() saat tombol Enter dilepas, jadi hasil belum berubah."
},
{
"q": "Perhatikan kode program berikut:\n    <div id=\"app\">\n       <p @mouseover=\"pesan = 'Masuk'\"\n            @mouseleave=\"pesan = 'Keluar'\">{{ pesan }}</p>\n    </div>\n    <script>\n    new Vue({\n       el: '#app',\n       data: { pesan: 'Arahkan kursor' }\n    })\n    </script>\nKursor diarahkan ke teks, lalu digeser keluar dari teks. Teks yang tampil terakhir adalah ....",
"o": [
"Arahkan kursor",
"Masuk",
"Masuk Keluar",
"Keluar"
],
"a": 3,
"e": "mouseover mengubah pesan menjadi 'Masuk', lalu mouseleave menimpanya menjadi 'Keluar'."
},
{
"q": "Perhatikan kode program berikut:\n    let i = 10;\n    do {\n       console.log(i);\n       i++;\n    } while (i < 5);\nOutput dari program di atas adalah ....",
"o": [
"10",
"Tidak ada output",
"5 6 7 8 9",
"10 11 12 13 14"
],
"a": 0,
"e": "do-while menjalankan isi blok minimal sekali sebelum mengecek kondisi, jadi 10 tercetak satu kali."
},
{
"q": "Perhatikan kode program berikut:\n    let a = 5;\n    let b = \"5\";\n    console.log(a == b, a === b);\nOutput dari program di atas adalah ....",
"o": [
"true true",
"true false",
"false true",
"false false"
],
"a": 1,
"e": "== hanya membandingkan nilai (setelah konversi tipe), sedangkan === juga membandingkan tipe datanya."
},
{
"q": "Perhatikan kode program berikut:\n    let hasil = \"\";\n    for (let i = 1; i <= 5; i++) {\n       if (i === 3) continue;\n       if (i === 5) break;\n       hasil += i;\n    }\n    console.log(hasil);\nOutput dari program di atas adalah ....",
"o": [
"\"12\"",
"\"1234\"",
"\"124\"",
"\"1245\""
],
"a": 2,
"e": "continue melewati i = 3, break menghentikan loop saat i = 5, dan karena hasil bertipe string angkanya digabung: \"124\"."
},
{
"q": "Perhatikan kode program berikut:\n    let warna = [\"merah\", \"hijau\"];\n    console.log(typeof warna);\nOutput dari program di atas adalah ....",
"o": [
"\"array\"",
"\"object\"",
"\"string\"",
"\"list\""
],
"a": 1,
"e": "Di JavaScript, array termasuk tipe object; untuk memastikan sebuah nilai adalah array dipakai Array.isArray()."
},
{
"q": "Pasangan teknologi dan penciptanya yang tepat adalah ....",
"o": [
"HTML diciptakan oleh Brendan Eich",
"JavaScript diciptakan oleh Evan You",
"CSS diusulkan oleh Håkon Wium Lie",
"Vue.js diciptakan oleh Tim Berners-Lee"
],
"a": 2,
"e": "HTML oleh Tim Berners-Lee, CSS oleh Håkon Wium Lie (1994), JavaScript oleh Brendan Eich (1995), dan Vue.js oleh Evan You (2014)."
},
{
"q": "Layanan internet yang menerjemahkan nama domain seperti ut.ac.id menjadi alamat IP server adalah ....",
"o": [
"DNS",
"Web hosting",
"URL",
"SEO"
],
"a": 0,
"e": "DNS (Domain Name System) memetakan nama domain ke alamat IP, mirip buku telepon internet."
},
{
"q": "Pada Vue.js, elemen pembungkus yang dipakai untuk memberi efek animasi saat sebuah elemen muncul atau hilang (bersama v-if atau v-show) adalah ....",
"o": [
"<animate>",
"<template>",
"<keyframes>",
"<transition>"
],
"a": 3,
"e": "<transition> otomatis menambahkan class seperti v-enter-active dan v-leave-active yang bisa diberi animasi CSS."
},
{
"q": "Perhatikan kode program berikut:\n    <canvas id=\"papan\" width=\"200\" height=\"100\"></canvas>\n    <script>\n    const kanvas = document.getElementById(\"papan\");\n    const ctx = kanvas.__________;\n    ctx.fillRect(10, 10, 100, 50);\n    </script>\nBagian kosong yang tepat agar persegi dapat digambar adalah ....",
"o": [
"getContext(\"2d\")",
"getElementById(\"2d\")",
"draw2D()",
"createContext(\"2d\")"
],
"a": 0,
"e": "canvas.getContext('2d') mengembalikan objek konteks yang punya method gambar seperti fillRect() dan arc()."
},
{
"q": "Vue.js berjalan di browser (sisi klien). Cara yang tepat agar aplikasi Vue dapat menampilkan data dari database di server adalah ....",
"o": [
"Menulis query SQL langsung di dalam template Vue",
"Menyimpan tabel database di dalam file style.css",
"Memakai directive v-database pada elemen HTML",
"Mengirim request (misalnya fetch atau axios) ke API di server, lalu menyimpan hasilnya ke data Vue"
],
"a": 3,
"e": "Browser tidak mengakses database server secara langsung; Vue meminta data lewat API atau skrip server, lalu hasilnya disimpan ke data dan dirender."
}
]
}
];
