import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa6";

export default function Contact() {
   return (
      <div className="contact" id="contact">
         <div className="bg-wrap py-5">
            <div className="container">
               <div className="head">
                  <small className="bg-gray text-dark rounded px-2 py-1">
                     Contact
                  </small>{" "}
                  <br />
                  <h1 className="text-light">Reach Out to ME!</h1>
               </div>
               <div className="body">
                  <div className="row">
                     <div className="col-lg-6">
                        <form className="">
                           <div className="form-group mb-4">
                              <label className="text-light fw-bold">
                                 {" "}
                                 Email
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="johndoe@xyz.com"
                              />
                           </div>
                           <div className="form-group mb-4">
                              <label className="text-light fw-bold">
                                 {" "}
                                 Subject
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="My subject"
                              />
                           </div>
                           <div className="form-group mb-4">
                              <label className="text-light fw-bold">
                                 {" "}
                                 Message
                              </label>
                              <textarea
                                 rows={3}
                                 className="form-control"
                                 placeholder="Type your message"
                              />
                           </div>
                           <div className="btn-wrap">
                              <button className="btn btn-black p-3 w-100 bg-black text-light">
                                 Send Message
                              </button>
                           </div>
                        </form>
                     </div>
                     <div className="col-lg-6 d-flex align-items-center mt-4">
                        <div className="socials p-3 text-light col-12">
                           <div className="text-wrap my-4 d-flex gap-2 align-items-center">
                              <span className="icon">
                                 <FaTelegram />
                              </span>{" "}
                              <span>Telegram: <br /> <small className="text-pink">@CWEmbassy</small></span>
                           </div> 
                           <div className="text-wrap mb-4 d-flex gap-2 align-items-center">
                              <span className="icon">
                                 <FaTwitter />
                              </span>{" "}
                              <span>Twitter <br /> <small className="text-pink">@CWEmbassy_DTG</small></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
