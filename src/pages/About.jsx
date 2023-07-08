import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="about-page">
        <Navbar/>
{/* breadcrumb start*/}
<section className="breadcrumb breadcrumb_bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb_iner text-center">
          <div className="breadcrumb_iner_item">
            <h2>About Us</h2>
            <p>Home<span>/</span>About Us</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* breadcrumb start*/}

        <Footer/>
        </div>
    );
}
 
export default About;