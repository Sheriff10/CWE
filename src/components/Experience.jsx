import React from "react";
import Skills from "./Skills";

export default function Experience() {
   return (
      <div className="exp py-5 bg-dark" id="experience">
         <div className="container">
            <div className="head d-flex  mb-4">
               <div className="h-wrap">
                  <small className="bg-gray text-dark rounded px-2 py-1">
                     Expertise
                  </small>
                  <h1 className="text-light">Professional Profile</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 mt-2  d-flex justify-content-center align-items-center">
                  <div className="exp-year bg-grad text-center">
                     <div className="wrap">
                        <div className="text-wrap">
                           <h1>10+</h1>
                           <span>Years Experience</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 my-5 d-flex align-items-center justify-content-center">
                  <div className="wrap text-gray">
                     <div className="text-wrap">
                        <span>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Vel aspernatur quisquam itaque inventore, harum
                           cumque, sapiente asperiores fuga qui eveniet
                           accusantium eum facilis tempore alias hic provident.
                           Cupiditate, assumenda omnis?
                        </span>
                     </div>
                     <div className="btn-wrap mt-2">
                        <button className="btn btn-lg bg-grad text-light col-6 col-sm-6">
                           {" "}
                           Hire Me
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="wrap text-center text-gray">
                     <div className="text-wrap mb-4">
                        <span className="fs-2 text-white fw-bold">14</span> <br />
                        <small>Award Winner</small>
                     </div>
                     <div className="text-wrap mb-4">
                        <span className="fs-2 text-white fw-bold">1.4k</span> <br />
                        <small>Project promoted</small>
                     </div>
                     <div className="text-wrap mb-4">
                        <span className="fs-2 text-white fw-bold">50k<sup>+</sup> </span> <br />
                        <small>X followe</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* SKILLS */}
         <Skills />
      </div>
   );
}
