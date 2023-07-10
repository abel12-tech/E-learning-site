import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import course1 from "../img/special_cource_1.png";
import course2 from "../img/special_cource_2.png";
import course3 from "../img/special_cource_3.png";
import author1 from "../img/author/author_1.png";
import author2 from "../img/author/author_2.png";
import author3 from "../img/author/author_3.png";
import star from "../img/icon/color_star.svg";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="all-courses">
      <Navbar />
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>Our Courses</h2>
                  <p>
                    Home<span>/</span>Courses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Top courses start*/}
      <section className="special_cource">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>Our courses</p>
                <h2>All our Courses</h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <div className="single_special_cource">
                <img src={course1} className="special_img" alt="" />
                <div className="special_cource_text">
                  <Link to="/1" className="btn_4">
                    Wordpress
                  </Link>
                  <h4>$140.00</h4>
                  <Link to="/1">
                    <h3>Wordpress Development</h3>
                  </Link>
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
                  <Link to="/2" className="btn_4">
                    design
                  </Link>
                  <h4>$160.00</h4>
                  <Link to="/2">
                    {" "}
                    <h3>Web UX/UI Design </h3>
                  </Link>
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
                  <Link to="/3" className="btn_4">
                    Wordpress
                  </Link>
                  <h4>$140.00</h4>
                  <Link to="/3">
                    {" "}
                    <h3>Wordpress Development</h3>{" "}
                  </Link>
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
      {/*All courses end*/}
      <Footer />
    </div>
  );
};

export default Courses;
