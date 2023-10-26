import React from "react";
import { FaBitcoin, FaBullhorn, FaChessPawn, FaCode, FaPen, FaUserPen, FaUserSecret } from "react-icons/fa6";

export default function Skills() {
   const dum = [1, 2, 3, 4];
   const skillFunc = (icon, title) => {
      return { icon, title };
   };
   const skillArr = [
      skillFunc(<FaUserSecret />, "Crypto Trader"),
      skillFunc(<FaCode />, "Solidity Developer"),
      skillFunc(<FaChessPawn />, "DeFi-Degen Trader"),
      skillFunc(<FaBullhorn />, "Marketer"),
      skillFunc(<FaPen />, "WP Writer"),
   ]
   return (
      <div className="skill py-5">
         <div className="container">
            <div className="row">
               {skillArr.map((i, index) => (
                  <div
                     className="col-lg-3 col-6 mb-3 col-md-4 col-sm-6 px-lg-5"
                     key={index}
                  >
                     <div className="box p-3 bg-dark2 h-100 text-light text-center">
                        <div className="box-icon text-pink">
                           <span>
                              {i.icon}
                           </span>
                        </div>
                        <div className="box-text fw-bold">
                           <small className="fs-5 ">{i.title}</small>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
