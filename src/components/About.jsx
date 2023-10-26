import React from "react";

export default function About() {
   return (
      <div className="about bg-grad py-5" id="about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6">
                  <div className="head text-light">
                     <small className="bg-gray text-dark rounded px-2 py-1">About Me</small> <br />
                     <h1>Meet Crypto Wealth Embassy</h1>
                  </div>
                  <div className="body bg-dark2 p-4 text-light shadow">
                     <span className="text-gray">
                        Crypto Wealth Embassy is the founder of Defitiger token
                        ($DTGI, a decentralized meme asset driven by a community
                        of Decentralized Finance enthusiasts with a unique love
                        for Felines.He's also a founding member of the Sir Mapy
                        and Co (SMC) DAO. <br /> <br />
                        Popularly know on X as WE,he's a Web 3 marketing
                        strategist, writer,crypto spaces host and a solidity
                        developer He has built great influence in this space and
                        has ambassadorial deals for crypto projects. <br />{" "}
                        <br />
                        He has helped in onboarding Nigerians and Africans to
                        the crypto industry, teaching and adding value to
                        investors.He's a firm believer in leveraging
                        opportunities in the Web 3.0 space for growth and
                        personal development. <br /> <br />
                     </span>
                  </div>
               </div>
               <div className="col-md-6 text-center">
                  <img
                     src="/asset/cw.jpeg"
                     alt="CWEmbassy"
                     className="img-fluid"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
