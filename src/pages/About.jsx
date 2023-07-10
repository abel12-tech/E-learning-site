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
                  <p>
                    Home<span>/</span>About Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/* feature_part start*/}
      <section className="feature_part single_feature_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 align-self-center">
              <div className="single_feature_text ">
                <h2>
                  Awesome <br /> Feature
                </h2>
                <p>
                  Set have great you male grass yielding an yielding first their
                  you're have called the abundantly fruit were man{" "}
                </p>
                <a href="." className="btn_1">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <i className="ti-layers" /> Icon
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Set have great you male grasses yielding yielding first
                    their to called deep abundantly Set have great you male
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <i className="ti-new-window" /> Icon
                  </span>
                  <h4>Qualified Trainers</h4>
                  <p>
                    Set have great you male grasses yielding yielding first
                    their to called deep abundantly Set have great you male
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part single_feature_part_2">
                  <span className="single_service_icon style_icon">
                    <i className="ti-light-bulb" />Icon
                  </span>
                  <h4>Job Oppurtunity</h4>
                  <p>
                    Set have great you male grasses yielding yielding first
                    their to called deep abundantly Set have great you male
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature_part end*/}

      <Footer />
    </div>
  );
};

export default About;
