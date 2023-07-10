import course1 from "../img/special_cource_1.png";
import course2 from "../img/special_cource_2.png";
import course3 from "../img/special_cource_3.png";
import author1 from "../img/author/author_1.png";
import author2 from "../img/author/author_2.png";
import author3 from "../img/author/author_3.png";
import bannerImg from "../img/banner_img.png"
import star from "../img/icon/color_star.svg";
import test1 from "../img/testimonial_img_1.png";
import test2 from "../img/testimonial_img_2.png";
import test3 from "../img/testimonial_img_3.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home">
      {/*header part start*/}
      <Navbar />
      {/* Header part end*/}
      {/* banner part start*/}
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6  col-xl-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Every child yearns to learn</h5>
                  <h1>Making Your Childs World Better</h1>
                  <p>
                    Replenish seasons may male hath fruit beast were seas saw
                    you arrie said man beast whales his void unto last session
                    for bite. Set have great you'll male grass yielding yielding
                    man
                  </p>
                  <a href="." className="btn_1">
                    View Course
                  </a>
                  <a href="." className="btn_2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-xl-6">
              <div className="banner_image">
               <img src={bannerImg} alt="no"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner part start*/}
      {/* member_counter counter start */}
      <section className="member_counter bg-dar">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">1024</span>
                <h4>All Teachers</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">960</span>
                <h4> All Students</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">1020</span>
                <h4>Online Students</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">820</span>
                <h4>Ofline Students</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* member_counter counter end */}
      {/*Top courses start*/}
      <section className="special_cource ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>popular courses</p>
                <h2>Special Courses</h2>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course1} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    Wordpress
                  </a>
                  <h4>$140.00</h4>
                  <a href="course-details.html">
                    {" "}
                    <h3>Wordpress Development</h3>{" "}
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author1} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course2} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    design
                  </a>
                  <h4>$160.00</h4>
                  <a href="course-details.html">
                    {" "}
                    <h3>Web UX/UI Design </h3>
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author2} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course3} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    Wordpress
                  </a>
                  <h4>$140.00</h4>
                  <a href="course-details.html">
                    {" "}
                    <h3>Wordpress Development</h3>{" "}
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author3} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course1} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    Web Development
                  </a>
                  <h4>$130.00</h4>
                  <a href="course-details.html">
                    <h3>Web Development</h3>
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author1} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course2} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    design
                  </a>
                  <h4>$160.00</h4>
                  <a href="course-details.html">
                    {" "}
                    <h3>Web UX/UI Design </h3>
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author2} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course3} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="course-details.html" className="btn_4">
                    Wordpress
                  </a>
                  <h4>$140.00</h4>
                  <a href="course-details.html">
                    {" "}
                    <h3>Wordpress Development</h3>{" "}
                  </a>
                  <p>
                    Which whose darkness saying were life unto fish wherein all
                    fish of together called
                  </p>
                  <div className="author_info">
                    <div className="author_img">
                      <img src={author3} alt="" />
                      <div className="author_info_text">
                        <p>Conduct by:</p>
                        <h5>
                          <a href=".">James Well</a>
                        </h5>
                      </div>
                    </div>
                    <div className="author_rating">
                      <div className="rating">
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                        <a href=".">
                          <img src={star} alt="" />
                        </a>
                      </div>
                      <p>3.8 Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Top courses end*/}
      {/*Testimonials_part start*/}
      <section className="testimonial_part p-4 bg-dark">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>tesimonials</p>
                <h2>Happy Students</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="textimonial_iner owl-carousel">
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src={test1} alt="#" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src={test1} alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src={test2} alt="#" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src={test1} alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src={test3} alt="#" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Behold place was a multiply creeping creature his
                          domin to thiren open void hath herb divided divide
                          creepeth living shall i call beginning third sea
                          itself set
                        </p>
                        <h4>Michel Hashale</h4>
                        <h5> Sr. Web designer</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src={test1} alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonials_part end*/}
      {/* footer part start*/}
      <Footer />
      {/* footer part end*/}
    </div>
  );
};

export default Home;
