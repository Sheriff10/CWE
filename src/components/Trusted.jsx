import React from "react";

export default function Trusted() {
   return (
      <div className="trusted bg-dark2 text-light py-5">
         <div className="container">
            <div className="head text-center mb-3">
                <span className=" fs-4fw-bold">
                    WORKED AND TRUSTED BY
                </span>
            </div>
            <div className="d-flex gap-5 justify-content-center  w-100 ">
               <img src="/asset/dtg.jpeg" alt="trusted" />
               <img src="/asset/fewcha.jpeg" alt="trusted" />
               <img src="/asset/smc.jpeg" alt="trusted" />
               <img src="/asset/tsuf.jpeg" alt="trusted" />
            </div>
         </div>
      </div>
   );
}
