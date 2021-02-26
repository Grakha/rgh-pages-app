import React from 'react'

// Components
import Header from "./header/header";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./footer/footer";


const App = () => {
  return (
    <React.Fragment>
      {/*Header Section*/}
      <Header />

      {/*Portfolio Section*/}
      <Portfolio />

      {/*About Section*/}
      <About />

      {/*Contact Section*/}
      <Contact />

      {/*Footer*/}
      <Footer />

      {/*Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
      </div>
       {/*<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">*/}
       {/*     <div class="modal-dialog modal-xl" role="document">*/}
       {/*         <div class="modal-content">*/}
       {/*             <button class="close" type="button" data-dismiss="modal" aria-label="Close">*/}
       {/*                 <span aria-hidden="true"><i class="fas fa-times"></i></span>*/}
       {/*             </button>*/}
       {/*             <div class="modal-body text-center">*/}
       {/*                 <div class="container">*/}
       {/*                     <div class="row justify-content-center">*/}
       {/*                         <div class="col-lg-8">*/}
       {/*                             <!-- Portfolio Modal - Title-->*/}
       {/*                             <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Log Cabin</h2>*/}
       {/*                             <!-- Icon Divider-->*/}
       {/*                             <div class="divider-custom">*/}
       {/*                                 <div class="divider-custom-line"></div>*/}
       {/*                                 <div class="divider-custom-icon"><i class="fas fa-star"></i></div>*/}
       {/*                                 <div class="divider-custom-line"></div>*/}
       {/*                             </div>*/}
       {/*                             <!-- Portfolio Modal - Image-->*/}
       {/*                             <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />*/}
       {/*                             <!-- Portfolio Modal - Text-->*/}
       {/*                             <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>*/}
       {/*                             <button class="btn btn-primary" data-dismiss="modal">*/}
       {/*                                 <i class="fas fa-times fa-fw"></i>*/}
       {/*                                 Close Window*/}
       {/*                             </button>*/}
       {/*                         </div>*/}
       {/*                     </div>*/}
       {/*                 </div>*/}
       {/*             </div>*/}
       {/*         </div>*/}
       {/*     </div>*/}
       {/* </div>*/}
    </React.Fragment>
  )
}

export default App;
