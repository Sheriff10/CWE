import React from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {
   const toggle = () => {
      document.querySelector(".header .menu-con").classList.toggle("open");
   };
   return (
      <div className="header bg-dark text-light py-3">
         <div className="wrap">
            <div className="container">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="logo-con">
                    <img src="/asset/logo.png" alt="CWE Consult" width={50} />
                  </div>
                  <div className="menu-con flex-wrap">
                     {/* MB-Display  */}
                     <div className="mb-header bg-dark2 p-4 align-items-center justify-content-between col-12">
                        <div className="text-wrap">
                           <span className="m-header fs-5 fw-bold">
                              {" "}
                              CWE{" "}
                              <span className="text-black px-2 rounded bg-pink">
                                 Consult
                              </span>
                           </span>
                        </div>
                        <div className="x">
                           <span
                              className="bg-dark rounded shadow p-2 px-3 small"
                              onClick={toggle}
                           >
                              X
                           </span>
                        </div>
                     </div>

                     {/* Menu link */}
                     <ul className="d-flex gap-4 mt-3 list-unstyled">
                        <li>
                           <a href="#about">About CWE</a>
                        </li>
                        <li>
                           <a href="#trustee">Trustee</a>
                        </li>
                        <li>
                           <a href="#experience">Experience</a>
                        </li>
                        <li>
                           <a href="#contact">Contact</a>
                        </li>
                     </ul>
                  </div>

                  <div className="mb-bar">
                     <span
                        className="bg-pink rounded d-flex align-items-center justify-content-between shadow py-1 px-2 small"
                        onClick={toggle}
                     >
                        <FaBars />
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
