"use client"

import React, { useState } from "react";
import withAuth from "../components/withAuth.js";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../styles/styledonasi.css";


function Donasi() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div class="body-blog">
      <Navbar />
      <main>
        <div className="donation">
          <div className="donation-bg">
            <img src="/img/donation.png" alt="Donation" />
            <div className="donation-box">
              <img src="/img/logo3.png" alt="REPAW" className="donation-logo" />
              <h2 className="donation-title">
                Kami butuh bantuan Anda ! <br />
                Bantu shelter hewan dengan donasi anda Guna keberlangsungan
                hidup para hewan!
              </h2>
              <p className="donation-description">
                Satu donasi dari Anda bisa menyelamatkan hidup mereka, dengan
                memberi bantuan berupa makanan, bantuan pengobatan medis dan
                kesehatan bagi mereka. Tidak perlu khawatir, kami akan terus
                membuat berita terbaru sebagai bentuk laporan bagi Anda tentang
                penyaluran donasi ini. Bersama-sama, kita bisa menjadi pelindung
                bagi yang tak berbicara. Ayo, mari kita jadikan dunia ini lebih
                hangat dengan kasih sayang kita!
              </p>
            </div>
          </div>
          <div className="donation-form">
            <div className="option-group">
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-1"
                  value={10000}
                />
                <label htmlFor="donation-option-1">Rp. 10.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-2"
                  value={20000}
                />
                <label htmlFor="donation-option-2">Rp. 20.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-3"
                  value={50000}
                />
                <label htmlFor="donation-option-3">Rp. 50.000</label>
              </div>
            </div>
            <div className="option-group">
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-4"
                  value={100000}
                />
                <label htmlFor="donation-option-4">Rp. 100.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-5"
                  value={150000}
                />
                <label htmlFor="donation-option-5">Rp. 150.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-6"
                  value={200000}
                />
                <label htmlFor="donation-option-6">Rp. 200.000</label>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-text">Rp.</div>
                <input
                  type="number"
                  className="input"
                  placeholder="Nominal Lainnya"
                />
              </div>
            </div>
            <div className="form-group">
              <span className="form-label">Pilih Tipe Donasi untuk Hewan</span>
              <div className="option-group">
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-1"
                    value="Pengobatan"
                  />
                  <label htmlFor="donation-type-1">Pengobatan</label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-2"
                    value="Makanan"
                  />
                  <label htmlFor="donation-type-2">Makanan</label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-3"
                    value="Kesehatan"
                  />
                  <label htmlFor="donation-type-3">Kesehatan</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <span className="form-label">Isi data diri</span>
              <input type="text" className="input" placeholder="Nama Lengkap" />
              <input
                type="email"
                className="input"
                placeholder="Alamat Email"
              />
              <input type="tel" className="input" placeholder="Nomor Telepon" />
            </div>
             <button className="btn btn-form-donasi" onClick={() => setModalShow(true)}>DONASI SEKARANG</button>
             <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              />
          </div>
        </div>
        <h2 className="blog-heading">Informasi Seputar Penyaluran Donasi</h2>
        <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {Array.from(Array(3), (e, i) => {
              return (
                <div class="col">
                  <div class="card news-card">
                    <img
                      src="../../img/content-blog.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h6 class="blog-card-title">
                        Peduli Akan Kesejahteraan Hewan Terlantar, Repaw Kembali
                        Memberi Bantuan ke Shelter Hewan di Tange..
                      </h6>
                      <p class="card-text">Fitriyani | 20 Mei 2034</p>
                      <Link to="/detailblog" className="btn btn-blog">
                        Lebih lanjut
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pagination pagination-side">
          <Link to="/blog" className="pagination-link">
            Lihat Selengkapnya
          </Link>
        </div>
      </main>

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
      className="qris-modal custom-size"
    >
      <Modal.Header closeButton className="custom-modal-header">
            <p>Pindai kode QR ini <br></br>untuk berdonasi melalui Repaw</p>
      </Modal.Header>
      <Modal.Body>
        <div className="qris-content">
          
          <div className="qris-qr-code">
            <img src="../../img/iconQris 1.png" alt="QR Code" />
          </div>
          <div className="qris-qr-codebig">
            <img src="../../img/iconQris 2.png" alt="QR Code" />
          </div>
          <div className="qris-payment-methods">
            <div className="payment-icons">
              <img src="../../img/iconPembayaran.png" alt="GPN" />
            </div>
          </div>
          <Button className="check-status-btn">Cek Status</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default withAuth(Donasi)
