import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from '../components/Navbar.js';
import {Footer} from '../components/Footer.js';
import '../styles/styleevent.css';


export default function Event() {
  return (
    <>
    <Navbar/>
    <div class="body-event">
    <div class="card text-white">
      <img src="../../img/h-event.png" class="card-img-hero" alt="..."/>
      <div class="card-img-overlay">
        <div class="row hero-text-event">
          <div class="col-md-7">
            <h1 class="fw-bold display-3">Welcome to Pet REPAWvent The Best Pet Adoption and Exhibition Event!</h1>
            <p class="fs-5">By Repaw</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid container-event">
        <div className="event-action">
          <div className="event-links">
            <Link href="#">Terbaru</Link>
            <Link href="#">Info</Link>
            <Link href="#">Events</Link>
          </div>
          <div className="event-search">
            <input type="search" placeholder="Search" />
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div class="d-flex">
        <img src="../../img/kaki-orange.png" class="img-event" alt="..."/>
          <h1 class="mb-4 title-event fw-bold">Event Paling Populer</h1>
        </div>

      
        <div class="d-flex content-event">
          <div class="row">
            <div class="col-md-3">
              <div class="card card-event">
                <img src="../../img/event-1.png" class="card-img-top" alt="Pet Photography Sessions"/>
                <div class="card-body">
                <div class="card-title-container">
                    <h5 class="card-title">Pet-Friendly Gatherings</h5>
                    <i class="bi bi-heart"></i>
                  </div>
                  <p class="card-text"><i class="bi bi-calendar-event"></i> 22 Mei 2025</p>
                </div>
              </div>
            </div>
           <div class="col-md-3">
              <div class="card card-event">
                <img src="../../img/event-2.png" class="card-img-top" alt="Pet Photography Sessions"/>
                <div class="card-body">
                <div class="card-title-container">
                    <h5 class="card-title">Pet-Friendly Gatherings</h5>
                    <i class="bi bi-heart"></i>
                  </div>
                  <p class="card-text"><i class="bi bi-calendar-event"></i> 22 Mei 2025</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card card-event">
                <img src="../../img/event-3.png" class="card-img-top" alt="Pet Photography Sessions"/>
                <div class="card-body">
                <div class="card-title-container">
                    <h5 class="card-title">Pet-Friendly Gatherings</h5>
                    <i class="bi bi-heart"></i>
                  </div>
                  <p class="card-text"><i class="bi bi-calendar-event"></i> 22 Mei 2025</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card card-event">
                <img src="../../img/event-4.png" class="card-img-top" alt="Pet Photography Sessions"/>
                <div class="card-body">
                <div class="card-title-container">
                    <h5 class="card-title">Pet-Friendly Gatherings</h5>
                    <i class="bi bi-heart"></i>
                  </div>
                  <p class="card-text"><i class="bi bi-calendar-event"></i> 22 Mei 2025</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div class="d-flex">
          <img src="../../img/kaki-biru.png" class="img-event" alt="..."/>
            <h1 class="mb-4 title-event fw-bold">Paw Info</h1>
          </div>

          <div class="d-flex content-paw">
          <div class="row">

          {Array.from(Array(3), (e, i) => {
          return (
            <div class="col-md-4">
            <div class="card custom-card-paw-info" style={{width: "18rem;"}}>
            <div class="position-relative">
                <img src="../../img/paw-info1.png" class="card-img-top-paw-info" alt="Pet Connection Workshop"/>
                <div class="tag">Pengetahuan</div>
                <div class="arrow">&rarr;</div>
                <div class="card-body-paw-info">
                  <h5 class="card-title">Pet Connection Workshop</h5>
                  <p class="card-text">Jalin hubungan lebih erat dengan hewan peliharaan Anda melalui lokakarya ini. Pelajari cara merespons kebutuhan dan keinginan mereka dengan lebih baik. Tempat terbatas, segera daftar!</p>
              </div>
            </div>
            </div>
            </div>
              );
            })}
            </div>
          </div>


          <div class="d-flex mt-4">
            <img src="../../img/event-line.png" class="card-img" alt="..."/>
          </div>


          <div class="d-flex">
          <img src="../../img/kaki-biru.png" class="img-event" alt="..."/>
            <h1 class="mb-4 title-event fw-bold">Paw Event</h1>
          </div>

          <div class="d-flex content-paw">
          <div class="row">
          {Array.from(Array(6), (e, i) => {
          return (
            <div class="col-md-4">
                <div class="card card-custom-paw-event">
                    <img src="../../img/paw-event1.png" class="card-img-top" alt="World Pet Expo 2020"/>
                    <div class="notification-icon">
                        <i class="bi bi-bell-fill"></i>
                    </div>
                    <div class="card-body">
                    <div class="row gx-5">
                        <div class="col-auto">
                            <div class="date-box">
                              <div class="month">APRIL</div>
                              <div class="day">22</div>
                            </div>
                        </div>
                        <div class="col">
                          <h5 class="card-title-paw-event">Jakarta - World Pet Expo 2020</h5>
                          <p class="card-text">Memberikan pengalaman kepada seluruh pengunjung melalui hewan-hewan unik yang nantinya kami perkenalkan sebagai sarana edukasi.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             );
            })}



            </div>
            </div>


    </div>
    
    
      <Footer/>
    </div>
    </>
  );
}