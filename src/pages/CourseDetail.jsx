import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import star from "../img/icon/color_star.svg";
import single_cource from "../img/single_cource.png"
import cource1 from "../img/cource/cource_1.png"
import cource2 from "../img/cource/cource_2.png"
import cource3 from "../img/cource/cource_3.png"
const CourseDetail = () => {
    return (  
        <div className="course-detail">
        <Navbar/>
{/* breadcrumb start*/}
<section className="breadcrumb breadcrumb_bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb_iner text-center">
          <div className="breadcrumb_iner_item">
            <h2>Course Details</h2>
            <p>Home<span>/</span>Course Details</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* breadcrumb start*/}

{/*================ Start Course Details Area =================*/}
<section className="course_details_area section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 course_details_left">
        <div className="main_image">
          <img className="img-fluid" src={single_cource} alt='' />
        </div>
        <div className="content_wrapper">
          <h4 className="title_top">Objectives</h4>
          <div className="content">
            When you enter into any new area of science, you almost always find yourself with a
            baffling new language of
            technical terms to learn before you can converse with the experts. This is certainly
            true in astronomy both in
            terms of terms that refer to the cosmos and terms that describe the tools of the trade,
            the most prevalent
            being the telescope.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea
            commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum.
          </div>
          <h4 className="title">Eligibility</h4>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea
            commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum.
          </div>
          <h4 className="title">Course Outline</h4>
          <div className="content">
            <ul className="course_list">
              <li className="justify-content-between align-items-center d-flex">
                <p>Introduction Lesson</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Basics of HTML</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Getting Know about HTML</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Tags and Attributes</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Basics of CSS</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Getting Familiar with CSS</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Introduction to Bootstrap</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Responsive Design</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
              <li className="justify-content-between align-items-center d-flex">
                <p>Canvas in HTML 5</p>
                <a className="btn_2 text-uppercase" href=".">View Details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 right-contents">
        <div className="sidebar_top">
          <ul>
            <li>
              <a className="justify-content-between d-flex" href=".">
                <p>Trainer’s Name</p>
                <span className="color">George Mathews</span>
              </a>
            </li>
            <li>
              <a className="justify-content-between d-flex" href=".">
                <p>Course Fee </p>
                <span>$230</span>
              </a>
            </li>
            <li>
              <a className="justify-content-between d-flex" href=".">
                <p>Available Seats </p>
                <span>15</span>
              </a>
            </li>
            <li>
              <a className="justify-content-between d-flex" href=".">
                <p>Schedule </p>
                <span>2.00 pm to 4.00 pm</span>
              </a>
            </li>
          </ul>
          <a href="." className="btn_1 d-block">Enroll the course</a>
        </div>
        <h4 className="title">Reviews</h4>
        <div className="content">
          <div className="review-top row pt-40">
            <div className="col-lg-12">
              <h6 className="mb-15">Provide Your Rating</h6>
              <div className="d-flex flex-row reviews justify-content-between">
                <span>Quality</span>
                <div className="rating">
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt=''/></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                </div>
                <span>Outstanding</span>
              </div>
              <div className="d-flex flex-row reviews justify-content-between">
                <span>Puncuality</span>
                <div className="rating">
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                </div>
                <span>Outstanding</span>
              </div>
              <div className="d-flex flex-row reviews justify-content-between">
                <span>Quality</span>
                <div className="rating">
                <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                </div>
                <span>Outstanding</span>
              </div>
            </div>
          </div>
          <div className="feedeback">
            <h6>Your Feedback</h6>
            <textarea name="feedback" className="form-control" cols={10} rows={10} defaultValue={""} />
            <div className="mt-10 text-right">
              <a href="." className="btn_1">Read more</a>
            </div>
          </div>
          <div className="comments-area mb-30">
            <div className="comment-list">
              <div className="single-comment single-reviews justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src={cource1} alt='' />
                  </div>
                  <div className="desc">
                    <h5><a href=".">Emilly Blunt</a>
                    </h5>
                    <div className="rating">
                    <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                    </div>
                    <p className="comment">
                      Blessed made of meat doesn't lights doesn't was dominion and sea earth
                      form
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list">
              <div className="single-comment single-reviews justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src={cource2} alt='' />
                  </div>
                  <div className="desc">
                    <h5><a href=".">Elsie Cunningham</a>
                    </h5>
                    <div className="rating">
                    <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                    </div>
                    <p className="comment">
                      Blessed made of meat doesn't lights doesn't was dominion and sea earth
                      form
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list">
              <div className="single-comment single-reviews justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src={cource3} alt='' />
                  </div>
                  <div className="desc">
                    <h5><a href=".">Maria Luna</a>
                    </h5>
                    <div className="rating">
                    <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                  <a href="."><img src={star} alt='' /></a>
                    </div>
                    <p className="comment">
                      Blessed made of meat doesn't lights doesn't was dominion and sea earth
                      form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*================ End Course Details Area =================*/}

        <Footer/>
        </div>
    );
}
 
export default CourseDetail;