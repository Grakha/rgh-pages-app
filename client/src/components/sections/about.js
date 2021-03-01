
// Files for download
import beer from '../../files/beer.jpg'
import cop from '../../files/cop_cars.png'
import english from '../../files/my_english.png'

const pics = [beer, cop, english]

const leads = [
  { desc: 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.' },
  { desc: 'You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!' }
]

const About = () => {

  function randomPics() {
    return pics[Math.floor(Math.random() * pics.length)]
  }

  const leadItems = leads.map((lead, index) => {
    const indent = ['ml-auto', 'mr-auto']
    return <div className={`col-lg-4 ${indent[index]}`} key={index}><p className="lead">{ lead.desc }</p></div>;
  })
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
            { leadItems }
        </div>

        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href={randomPics()} download>
            <i className="fas fa-download mr-2"></i>
            Free Download!
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
