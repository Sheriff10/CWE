import React from "react";

export default function Intro() {
   return (
      <div className="intro bg-dark py-5 text-light">
         <div className="container py-lg-3">
            <div className="row align-items-center">
               <div className="col-md-6">
                  <div className="intro-text">
                     <h1>
                        Welcome to{" "}
                        <span className="text-pink">CWEmbassy's</span>{" "}
                        Blockchain Universe
                     </h1>
                     <span className="text-gray">
                        Bringing Your Crypto Visions to Life – Your Go-To
                        Blockchain Consultant
                     </span> <br />
                     <span className="text-gray">
                        Bringing Your Crypto Visions to Life – Your Go-To
                        Blockchain Consultant
                     </span>
                  </div>
                  <div className="btn-wrap mt-4 d-flex gap-2 col-lg-8">
                     <button className="btn btn-lg bg-grad text-light col">
                        {" "}
                        Hire Me
                     </button>
                     <button className="btn btn-lg btn-outline-light col">
                        {" "}
                        About me
                     </button>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="img-wrap">
                     <img src="/asset/cw.jpeg" alt="CWE" />
                     <img src="/asset/cw.jpeg" alt="CWE" />
                     <img src="/asset/cw.jpeg" alt="CWE" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
