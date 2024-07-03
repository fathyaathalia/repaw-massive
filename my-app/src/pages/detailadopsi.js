import React from "react";
import withAuth from "../components/withAuth.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { Link } from "react-router-dom";


function DetailAdopsi() {
  return (
    <div class="body-details">
      <Navbar />
      <div class="row w-100 p-5">
      <div class="row row-cols-5 col">
        <img src="../../img/kucing-adopsi.jpg" class="col-12 object-fit-cover mb-3" height="500px" alt="rectangle" />
        <img src="../../img/kucing-adopsi.jpg" class="col pe-1 object-fit-cover" width="300px" height="80px" alt="rectangle" />
        <img src="../../img/kucing-adopsi.jpg" class="col pe-1 object-fit-cover" width="300px" height="80px" alt="rectangle" />
        <img src="../../img/kucing-adopsi.jpg" class="col pe-1 object-fit-cover" width="300px" height="80px" alt="rectangle" />
        <img src="../../img/kucing-adopsi.jpg" class="col pe-1 object-fit-cover" width="300px" height="80px" alt="rectangle" />
        <img src="../../img/kucing-adopsi.jpg" class="col object-fit-cover" width="300px" height="80px" alt="rectangle" />
      </div>
      <div class="col border rounded p-4">
        <div class="py-3 border-bottom">
          <div class="d-flex align-items-center">
            <div class="border rounded p-1 me-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4" style={{width: "20px"}}>
                <path
                  fill-rule="evenodd"
                  d="M8 3.5c-.771 0-1.537.022-2.297.066a1.124 1.124 0 0 0-1.058 1.028l-.018.214a.75.75 0 1 1-1.495-.12l.018-.221a2.624 2.624 0 0 1 2.467-2.399 41.628 41.628 0 0 1 4.766 0 2.624 2.624 0 0 1 2.467 2.399c.056.662.097 1.329.122 2l.748-.748a.75.75 0 1 1 1.06 1.06l-2 2.001a.75.75 0 0 1-1.061 0l-2-1.999a.75.75 0 0 1 1.061-1.06l.689.688a39.89 39.89 0 0 0-.114-1.815 1.124 1.124 0 0 0-1.058-1.028A40.138 40.138 0 0 0 8 3.5ZM3.22 7.22a.75.75 0 0 1 1.061 0l2 2a.75.75 0 1 1-1.06 1.06l-.69-.69c.025.61.062 1.214.114 1.816.048.56.496.996 1.058 1.028a40.112 40.112 0 0 0 4.594 0 1.124 1.124 0 0 0 1.058-1.028 39.2 39.2 0 0 0 .018-.219.75.75 0 1 1 1.495.12l-.018.226a2.624 2.624 0 0 1-2.467 2.399 41.648 41.648 0 0 1-4.766 0 2.624 2.624 0 0 1-2.467-2.399 41.395 41.395 0 0 1-.122-2l-.748.748A.75.75 0 1 1 1.22 9.22l2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h5>Oyen (Kucing Oren).</h5>
          </div>
          <p>Biaya Adopsi : Rp. 500.000.</p>
        </div>
        <div class="py-3">
          <div class="row">
            <p class="col-4 fw-bold">Jenis Kelamin :</p>
            <p class="col-7">Jantan</p>
          </div>
          <div class="row">
            <p class="col-4 fw-bold">Usia :</p>
            <p class="col-7">2 Tahun 4 Bulan</p>
          </div>
          <div class="row">
            <p class="col-4 fw-bold">Berat Badan :</p>
            <p class="col-7">12 kg</p>
          </div>
          <div class="row">
            <p class="col-4 fw-bold">Steril :</p>
            <p class="col-7">Sudah Steril</p>
          </div>
          <div class="row">
            <p class="col-4 fw-bold">Vaksin :</p>
            <p class="col-7">Sudah divaksi, Vaksin DP dan Vaksin PiBr</p>
          </div>
          <div class="row">
            <p class="col-4 fw-bold">Lokasi :</p>
            <p class="col-7">Jl. Pondok Jagung Timur Gang Pasir No.8, Pd. Jagung Tim., Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15326</p>
          </div>
        </div>
        <div class="d-flex">
        <Link to="/pendaftaranadopsi" className="btn btn-primary me-3">Adopsi Sekarang</Link>
          <button type="button" class="btn btn-secondary">Tambah Favorite</button>
        </div>
      </div>
      
    </div>
    


    <div class="p-5">
      <div class="border rounded p-2 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img class="object-fit-cover" src="../../img/Rumah Singgah.png" width="80px" height="80px" alt="" />
          <div class="ms-2">
            <p class="mb-3 fs-5">Maria Stray Home</p>
            <span class="d-flex"><button type="button" class="btn btn-sm btn-primary me-2">Kunjungi</button> <button type="button" class="btn btn-sm btn-secondary">Hubungi</button></span>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24"  style={{width: "40px"}}>
            <path
              d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"  style={{width: "40px"}}>
            <path
              d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"  style={{width: "40px"}}>
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"  style={{width: "40px"}}>
            <path
              d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="p-5">
      
      <div class="border rounded p-4">
        <div>
          <h4>Syarat dan Ketentuan</h4>
          <ul class="mt-3">
            <li>Pastikan dulu keluarga dan lingkunganmu tidak ada masalah jika kamu pelihara anjing.</li>
            <li>Hitung dulu semua pengeluaranmu sebelum kamu adopsi anjing karena pelihara anjing butuh biaya.</li>
            <li>Sesuaikan keadaan rumahmu. Jika rumahmu tidak terlalu besar jangan pelihara anjing besar.</li>
            <li>
              Saat proses pengajuan data, Siapkan foto bagian halaman depan/belakang rumah, foto dalam rumah tempat hewan peliharaan tidur nantinya kedalam bentuk dokumen PDF, hal ini bertujuan untuk peninjauan kelayakan rumah sebagai
              tempat tinggal anjing nantinya.
            </li>
            <li>Anjing yg ada di shelter kebanyakan adalah anjing kampung.</li>
            <li>Semua anjing yg ada di Maria Stray Home sudah di kebiri/steril jadi jangan berharap adopsi untuk dijadikan pejantan/indukan.</li>
            <li>Rumah adopter harus berpagar untuk meminimalisir anjing kabur, tidak dikandangi/diikat 24 jam.</li>
          </ul>
          <p>
            Apabila semua syarat sudah terpenuhi, akan dibuatkan tanggal kunjungan ke Shelter untuk melihat secara langsung atau akan diantarkan langsung ke rumahmu sesuai dengan hasil kesepakatan bersama. Biaya adopsi yang tertera
            merupakan biaya vaksin dan makan.
          </p>
        </div>
        <div>
          <h4>Deskripsi</h4>
          <p class="mt-3">
            Ini adalah cerita asal asul ditemukannya si Bonbon. Bonbon telah melalui begitu banyak hal sehingga dia akhirnya dibuang dan saat ini berada di tempat penampungan hewan Maria Stray Home. Bonbon sebelumnya ditemukan dengan
            kondisi yang kotor dan lemas. Karena itu kami bawa ke dokter hewan untuk dirawat. Kami sempat khawatir dengan kondisi Bonbon yang sangat memprihatinkan, dia saat itu berada di kondisi kelaparan dan juga dehidrasi, namun berkat
            dari usaha dan doa dari semua pihak yang terlibat akhirnya Bonbon bisa kembali ceria dan lincah. Sebenarnya Bonbon adalah anjing luar biasa manis dan cerdas yang terkadang juga bisa menjadi sedikit teritorial bagi keluarganya di
            rumah. Dia kecil dan sangat mudah dikendalikan, Bonbon juga sangat ramah dengan anak-anak dan juga ramah dengan jenis anjing lainnya. Dia adalah anjing yang manis dan penyayang dan berhak mendapatkan rumah yang baik jika dia
            ingin melakukan sedikit pelatihan pasti dia akan baik-baik saja. Bonbon sudah berada cukup lama di shelter dan masih menunggu seseorang untuk memilih mengadopsinya. Kondisi Bonbon saat ini sangat sehat, sudah disteril dan
            divaksin.
          </p>
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default withAuth(DetailAdopsi)