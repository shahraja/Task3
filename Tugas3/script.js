const tentang_html = `
<p>
Saya Mahasiswa Institut Teknologi Sumatera program studi Teknik Informatika. Saya menggemari olahraga futsal. <br>
saya juga ikut dalam organisasi dan ikut juga dalam kepanitiaan ITERA. <br>
</p><hr>

<h2>
PROFIL
</h2>
<table>
<tr>
    <td>
        Nama
    </td>
    <td>
        :
    </td>
    <td>
        Shah Raja Abdullah Al Turtusi
    </td>
</tr>
<tr>
    <td>
        NIM
    </td>
    <td>
        :
    </td>
    <td>
        120140064
    </td>
</tr>
<tr>
    <td>
        Tempat Tanggal Lahir
    </td>
    <td>
        :
    </td>
    <td>
        Tangerang, 1 Desember 2002
    </td>
</tr>
<tr>
    <td>
        Alamat
    </td>
    <td>
        :
    </td>
    <td>
        Jl. P. Tirtayasa Gg Rewok Perum Puri Cantika
    </td>
</tr>
</table><hr>

<h2>PENGALAMAN</h2>
<h4>Staff kepanitiaan PPLK 2022</h4>
<h4>Penanggung jawab game PB IO 2022</h4>
<h4>Kepala Divisi Point Blank Teraesports 2022</h4>
<h4>Cyber Jawara 2019</h4><hr>

`;
const hubungiSAYA = `<h2>KONTAK</h2>
<table>
<tr>
    <td>
        Instagram
    </td>
    <td>
        :
    </td>
    <td>
        <a href="https://www.instagram.com/shahrajaa_/?hl=id">@shahrajaa_</a>
    </td>
</tr>
<tr>
    <td>
        Email
    </td>
    <td>
        :
    </td>
    <td>
        shah.120140064@student.itera.ac.id
    </td>
</tr>
</table>

</td>
</tr>
</table>


</center>

</body>
</html>`;
const riwayatSAYA = `<h2 id="riwayat">Riwayat pendidikan</h2>
<div class="kolom">
  <table border="1">
    <thead>
      <tr>
        <th rowspan="2">No</th>
        <th rowspan="2">Tingkat Pendidikan</th>
        <th rowspan="2">Nama Sekolah</th>
        <th colspan="2">Tahun Lulus</th>
      </tr>
      <tr>
        <th>MULAI</th>
        <th>SELESAI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-align="center">1</td>
        <td>SD</td>
        <td>SDN 3 PWH</td>
        <td>2007</td>
        <td>2013</td>
      </tr>
      <tr>
        <td>2</td>
        <td>SMP</td>
        <td>SMPN 29 BANDAR LAMPUNG</td>
        <td>2013</td>
        <td>2017</td>
      </tr>
      <tr>
        <td>3</td>
        <td>SMK</td>
        <td>SMKN 4 BANDAR LAMPUNG</td>
        <td>2017</td>
        <td>2020</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Kuliah</td>
        <td>INSTITUT TEKNOLOGI SUMATERA</td>
        <td>2020</td>
        <td>Sekarang</td>
      </tr>
    </tbody>
  </table>
</div>`;
function tampil() {
  const tabel = document.getElementById("tabel");
  tabel.classList.remove("tabel");
  tabel.classList.add("tabel");
  const judul = document.getElementById("judul");
  judul.innerText = "CURRICULUM VITAE";
  const main = document.getElementById("main");
  main.innerHTML = ` <img src="raja.jpg" alt />
  <h1>Shah Raja Abdullah Al Turtusi</h1>
  <nav>
    <ul class="bio">
      <a href="#" onclick="tentang()">Tentang Saya</a>
      <a href="#" onclick="riwayat()">Riwayat Pendidikan</a>
      <a href="#" onclick="hubungi()">Hubungi Saya</a>
    </ul>
  </nav>
  <div id="content">${tentang_html}${riwayatSAYA}${hubungiSAYA}</div> `;
}
function tentang() {
  const content = document.getElementById("content");
  content.innerHTML = `${tentang_html}${riwayatSAYA}${hubungiSAYA}`;
}
function riwayat() {
  const content = document.getElementById("content");
  content.innerHTML = riwayatSAYA;
}
function hubungi() {
  const content = document.getElementById("content");
  content.innerHTML = hubungiSAYA;
}