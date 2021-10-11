import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import "./About.css"

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Alex Monson &amp; Software Engineer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, My name is Alexander Monson and I am a software engineer. I have always had a passion for computer science and was able to learn a variety of skills and coding languages through AppAcademy. I have worked on numerous projects which has given me the opportunity to showcase my talent as well as learn from fellow devlopers through constant collaboration. I am eager to continue to develop and grow in my skillset and look forward to showcasing my talent in future projects. 
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>012.28.1990
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>30
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Los Angeles, California, USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">monson.alex@rocketmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">(310) 730 3886</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>App Academy
                  </p>
                </li>
                <li>
                  {/* <p>
                    <span>Freelance:</span>Available
                  </p> */}
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                     
                      <span className="label">
                         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
                      </span>
                        <span className="label">
                           <a href="https://www.python.org/psf/"><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /></a>
                        </span>
                          <span className="label"><a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
                          </span>
                          <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white" /></a>     
                          <span>
                             <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"/></a>
                            </span>
                            <span>
                             <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" /></a>
                            </span>
                            <span>
                            <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" /></a>
                            </span>
                       

                        {/* <span className="number">95%</span> */}
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="progress_inner" data-value="80"> */}
                    
                        {/* <span className="number">80%</span> */}
                      
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    {/* </div> */}

                    <div className="progress_inner" data-value="90">
                     
                    </div>
                    </div>
                        {/* <span className="number">90%</span> */}
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                  

                   
                    
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>How I am continuing to learn!</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner">

                      <ul>
                          <li>
                        I freuqently subcribe to sites to further my professional devlopment as a programmer such as CodeAcademy and CodeWars.

                          </li>
                          <li>
                        I seek various opportunities to practice the concepts and skills I have acquired by collaboraintg with a multitude of developers to create new projects.  

                          </li>
                          <li>
                        I have a github repository with a fellow software developer, Amanda Hinton, named "Problem of the Day" where we contribute our solutions to problems on the popular site CodeWars.
                          </li>
                      </ul>
                    
                      {/* <span>
                        <span className="label">English</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Japanese</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Arabian</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      {/* <h3>777+</h3> */}
                      <span>I love animals and have 3 pets of my own which include 2 dogs and 1 cat. In fact, my cat is featured on my splash page for the PetFriendly site I created.</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      {/* <h3>3K</h3>/ */}
                      <span>Through meticulous research, I was able to build my own computer and still use it for gaming purposes.</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      {/* <h3>9K+</h3> */}
                      <span>I love ramen and my favorite restaurant is Jinya Ramen bar in Studio City, CA.</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  {/* <h3>Our Partners</h3> */}
                </div>
                {/* <Brand /> */}
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
