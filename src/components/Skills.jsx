import React from "react";
import { FaBitcoin } from "react-icons/fa6";

export default function Skills() {
   const dum = [1, 2, 3, 4];
   return (
      <div className="skill py-5">
         <div className="container">
            <div className="row">
               {dum.map((i, index) => (
                  <div className="col-lg-3 mb-3 col-md-4 col-sm-6 px-lg-5" key={index}>
                     <div className="box p-3 bg-dark2 text-light text-center">
                        <div className="box-icon text-pink">
                           <span>
                              <FaBitcoin />
                           </span>
                        </div>
                        <div className="box-text fw-bold">
                           <small className="fs-5 ">Crypto Trader</small>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
