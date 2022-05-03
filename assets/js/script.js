let konten = [
  {
    title: "Sejarah",
    content:
      "Sejarah jaringan komputer bermula dari lahirnya konsep jaringan komputer pada tahun 1940-an di Amerika yang digagas oleh sebuah proyek pengembangan komputer MODEL I di laboratorium Bell dan group riset Universitas Harvard yang dipimpin profesor Howard Aiken. Pada mulanya proyek tersebut hanyalah ingin memanfaatkan sebuah perangkat komputer yang harus dipakai bersama. Untuk mengerjakan beberapa proses tanpa banyak membuang waktu kosong dibuatlah proses beruntun (Batch Processing), sehingga beberapa program bisa dijalankan dalam sebuah komputer dengan kaidah antrian. <br><br> Kemudian pada tahun 1950-an ketika komputer mulai berkembang sampai terciptanya super komputer, maka sebuah komputer harus melayani beberapa tempat yang tersedia (terminal), untuk itu ditemukan konsep distribusi proses berdasarkan waktu yang dikenal dengan nama TSS (Time Sharing System). Maka untuk pertama kalinya bentuk jaringan (network) komputer diaplikasikan. Pada sistem TSS beberapa terminal terhubung secara seri ke sebuah komputer atau perangkat lainnya yang terhubung dalam suatu jaringan (host) komputer. <br><br>Pada Tahun 1973 keatas dikenal sebagai Kelahiran dari internet atau jaringan internasional (International Network), Terdapat dua orang ahli komputer yang mengembangkan dan juga mengusulkan sebuah jaringan yang bersifat sangat luas dan dapat digunakan oleh semua orang di dunia. Vinton Cerf dan juga Bob Kahn adalah kedua orang tersebut, yang membuat sebuah gagaasan besar, yang sebenarnya menjadi sebuah cikal bakal dari terciptanya internet atau international network. Saat ini, internet pun sudah menjelma menjadi jaringan terbesar yang ada di dunia, dan dapat menghubungkan setiap orang di berbagai belahan dunia.<br>",
    img: "assets/image/network2.jpg",
    source: "https://binus.ac.id/bandung/2019/11/sejarah-mulainya-jaringan-komputer/",
  },
  {
    title: "Klasifikasi Jaringan Komputer",
    content:
      "Klasifikasi jaringan komputer terbagi menjadi: <ol><li>Berdasarkan geografisnya, jaringan komputer terbagi menjadi Jaringan area lokal atau Local Area Network (LAN), Jaringan area metropolitan atau Metropolitan Area Network (MAN), dan Jaringan area luas atau Wide Area Network (WAN). Jaringan area lokal merupakan jaringan milik pribadi di dalam sebuah gedung atau tempat yang berukuran sampai beberapa 1 - 10 kilometer. LAN sering kali digunakan untuk menghubungkan komputer-komputer pribadi dan stasiun kerja (workstation) dalam kantor suatu perusahaan atau pabrik-pabrik untuk memakai bersama sumber daya (misalnya pencetak (printer) dan saling bertukar informasi. Sedangkan Jaringan area metropolitan merupakan perluasan jaringan LAN sehingga mencakup satu kota yang cukup luas, terdiri atas puluhan gedung yang berjarak 10 - 50 kilometer. Kabel transmisi yang digunakan adalah kabel serat optik (Fiber Optic). Jaringan area luas Merupakan jaringan antarkota, antar propinsi, antar negara, bahkan antar benua. Jaraknya bisa mencakup seluruh dunia, misalnya jaringan yang menghubungkan semua bank di Indonesia, atau jaringan yang menghubungkan semua kantor Perwakilan Indonesia di seluruh dunia. Media transmisi utama adalah komunikasi lewat satelit, tetapi banyak yang mengandalkan koneksi serat optik antar negara.</li>" +
      "<br><li>Berdasarkan fungsi, terbagi menjadi Jaringan Klien-server (Client-server) dan Jaringan Ujung ke ujung (Peer-to-peer). Jaringan klien-server pada dasarnya ada satu komputer yang disiapkan menjadi peladen (server) dari komputer lainnya yang sebagai klien (client). Semua permintaan layanan sumber daya dari komputer klien harus dilewatkan ke komputer peladen, komputer peladen ini yang akan mengatur pelayanannya. Apabila komunikasi permintaan layanan sangat sibuk bahkan bisa disiapkan lebih dari satu komputer menjadi peladen, sehingga ada pembagian tugas, misalnya file-server, print-server, database server dan sebagainya.</li>" +
      "<br><li>Berdasarkan topologi jaringan, jaringan komputer dapat dibedakan atas:<ol><li>Topologi Bus</li><li>Topologi Bintang</li><li>Topologi Cincin</li><li>Topologi Mesh</li><li>Topologi Pohon</li><li>Topologi Linier</li></ol></li>" +
      "<br><li>Berdasarkan distribusi sumber informasi/data<ol><li>Jaringan terpusat <br> Jaringan ini terdiri dari komputer klien dan peladen yang mana komputer klien yang berfungsi sebagai perantara untuk mengakses sumber informasi/data yang berasal dari satu komputer peladen.</li><li>Jaringan terdistribusi <br> Merupakan perpaduan beberapa jaringan terpusat sehingga terdapat beberapa komputer peladen yang saling berhubungan dengan klien membentuk sistem jaringan tertentu.</li></ol></li>" +
      "<br><li>Berdasarkan media transmisi data<ol><li>Jaringan Berkabel (Wired Network)<br>Pada jaringan ini, untuk menghubungkan satu komputer dengan komputer lain diperlukan penghubung berupa kabel jaringan. Kabel jaringan berfungsi untuk mengirim informasi dalam bentuk sinyal listrik antar komputer jaringan.</li><li>Jaringan Nirkabel (Wireless Network) <br > Merupakan jaringan dengan medium berupa gelombang elektromagnetik. Pada jaringan ini tidak diperlukan kabel untuk menghubungkan antar komputer karena menggunakan gelombang elektromagnetik yang akan mengirimkan sinyal informasi antar komputer jaringan.</li></ol></li></ol>",
    img: "assets/image/network3.jpg",
    source: "https://id.wikipedia.org/wiki/Jaringan_komputer",
  },
];
let isi = document.getElementById("section");
konten.forEach((konten) => {
  let section = document.createElement("section");
  let a = document.createElement("a");
  for (let key in konten) {
    isi.appendChild(section);
    section.innerHTML = "<h2>" + `${konten[(key = "title")]}` + "</h2><img src=" + `${konten[(key = "img")]}` + " class='mini-image' /><p>" + `${konten[(key = "content")]}` + "<br>sumber :</p>";
    section.appendChild(a);
    a.setAttribute("href", `${konten[(key = "source")]}`);
    a.setAttribute("target", "__blank");
    a.innerHTML = `${konten[(key = "source")]}`;
  }
});
