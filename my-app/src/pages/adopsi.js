import React from "react";
import withAuth from "../components/withAuth.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { Link } from "react-router-dom";
import "../styles/styleadopsi.css";

function Adopsi() {
  return (
    <>
      <Navbar />
      <div class="body-adopsi">
        <div className="bg-tertiary" style={{ backgroundColor: "#F8D571" }}>
          <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="adopsi-links">
                <a href="#" class="me-3">
                  Semua
                </a>
                <a href="#" class="me-3">
                  Anjing
                </a>
                <a href="#">Kucing</a>
              </div>
            </div>
            <div class="d-flex">
              <form class="d-flex" role="search">
                <input
                  class="adopsi"
                  type="search"
                  placeholder="Cari Lokasi"
                  aria-label="Search"
                  style={{
                    paddingLeft: "20px",
                    width: "500px",
                    height: "20px",
                    marginRight: "10px",
                    fontSize: "15px",
                  }}
                />
                <select
                  class="form-select me-2"
                  aria-label="Default select example"
                >
                  <option selected>Jenis Kelamin</option>
                  <option value="1">Semua Tipe</option>
                  <option value="2">Betina</option>
                  <option value="3">Jantan</option>
                </select>
                <select
                  class="form-select me-2"
                  aria-label="Default select example"
                >
                  <option selected>Usia</option>
                  <option value="1">Semua Usia</option>
                  <option value="2">1-6 Bulan</option>
                  <option value="3">1-2 Tahun</option>
                  <option value="3">3 Tahun Ke atas</option>
                </select>
                <button
                  class="btn btn-adopsi bi bi-search"
                  type="submit"
                  style={{
                    paddingLeft: "20px",
                    width: "300px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  Cari Hewan
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {Array.from(Array(12), (e, i) => {
              return (
                <div class="col">
                 <Link to="/detailadopsi" className="card card-adopsi">
                    <img
                      src="../../img/kucing-adopsi.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body card-text-adopsi">
                      <h5 className="card-title">Oyen</h5>
                      <p className="card-text">Jenis Kelamin : Betina</p>
                      <p className="card-text mb-3">Usia: 3 bulan</p>
                      <p className="card-text bi bi-geo-alt-fill">Bogor, Jawa Barat</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <nav
          class="custom-nav"
          aria-label="Page navigation example justify-content-center"
        >
          <ul class="pagination justify-content-center mt-5">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        <Footer />
      </div>
    </>
  );
}

export default withAuth(Adopsi)