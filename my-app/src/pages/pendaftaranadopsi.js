import React from "react";
import withAuth from "../components/withAuth.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/stylependaftaranadopsi.css";


function PendaftaranAdopsi() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div class="body-details">
      <Navbar />
      <div class="container form-container-padopsi mt-5">
    <div class="row">
      <div class="col-md-7">
        <h3 class="mb-3 titlepadopsi fw-bold" style={{color:"#32A5BB"}}>Oyen (Kucing Domestik)</h3>
        <p>
          Lengkapi data di bawah ini untuk proses pengajuan adopsi. Apabila telah disetujui oleh pemilik hewan akan ditentukan jadwal kunjungan ataupun pengantaran hewan sesuai kebijakan masing-masing.
        </p>
        <form>
          <div class="row mb-3">
            <div class="col">
              <label for="firstName" class="form-label">Nama Depan</label>
              <input type="text" class="form-control" id="firstName" placeholder="Nama Depan"/>
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Nama Belakang</label>
              <input type="text" class="form-control" id="lastName" placeholder="Nama Belakang"/>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Email"/>
            </div>
            <div class="col">
              <label for="phone" class="form-label">Nomor Telepon</label>
              <input type="text" class="form-control" id="phone" placeholder="Nomor Telepon"/>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="age" class="form-label">Usia</label>
              <input type="text" class="form-control" id="age" placeholder="Usia"/>
            </div>
            <div class="col">
              <label for="address" class="form-label">Alamat</label>
              <input type="text" class="form-control" id="address" placeholder="Alamat"/>
            </div>
          </div>
          <div class="mb-3">
            <label for="document" class="form-label">Dokumen foto atau video beberapa bagian Rumah Anda (PDF)</label>
            <div class="input-group">
              <input type="file" class="form-control" id="document" accept=".pdf"/>
              <button class="btn btn-outline-secondary" style={{backgroundColor:"#F29762"}} type="button">Pilih</button>
            </div>
          </div>
          <div class="mb-3">
            <label for="pet" class="form-label">Apakah Anda memiliki hewan peliharaan lain? Sertakan jenis hewan apa</label>
            <input type="text" class="form-control" id="pet" placeholder="Jenis Hewan"/>
          </div>
          <div class="mb-3">
            <label for="people" class="form-label">Siapa dan berapa orang yang ada di tempat tinggal Anda? sertakan usia dan alergi jika ada</label>
            <textarea class="form-control" id="people" rows="3" placeholder="Keterangan"></textarea>
          </div>
          <button type="button" class="btn btn-orange me-2" onClick={() => setModalShow(true)} >Kirim</button>
          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              />
          <button type="button" class="btn btn-white">Batal</button>
        </form>
      </div>
      <div class="col-md-5 d-flex align-items-center">
        <img src="../img/pendaftaran-adopsi.png" class="adoption-image" alt="Kucing Adopsi"/>
      </div>
    </div>
  </div>

      

      <Footer />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="custom-modal"
      >
        <Modal.Body className="custom-modal-body">
          <div className="modal-content">
            <div className="modal-icon">
              <img src="../../img/succes-icon.png" alt="Success Icon" />
            </div>
            <h5 className="modal-subtitle">BERHASIL TERKIRIM!</h5>
            <p className="modal-text">Data yang terkirim sedang dalam proses pemeriksaan</p>
            <Button className="custom-btn check-status-btn-padopsi">Cek Status Adopsi</Button>
            <Button className="custom-btn cancel-btn" onClick={props.onHide}>Kembali</Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  

export default withAuth(PendaftaranAdopsi)