import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (10th), CBSE</h4>
                <h5>Divine Public School — Gorakhpur, UP</h5>
              </div>
              <h3>2021–2022</h3>
            </div>
            <p>
              Completed 10th grade with 91%. Built a strong academic foundation across Mathematics and Science.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (12th), CBSE</h4>
                <h5>Academic Global School — Gorakhpur, UP</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>
              Completed 12th grade with 83.4%. Developed strong analytical and problem-solving skills.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Dayananda Sagar College of Engineering — Bengaluru, KA</h5>
              </div>
              <h3>2025–2029</h3>
            </div>
            <p>
              Pursuing B.Tech with a CGPA of 9.0. Actively building projects, participating in hackathons, and exploring modern web technologies and competitive programming.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer Intern</h4>
                <h5>QSkill — Virtual Internship</h5>
              </div>
              <h3>Apr–May 2026</h3>
            </div>
            <p>
              Built responsive UI components using HTML, CSS, and JavaScript. Improved user experience and optimized frontend performance. Collaborated on real-world projects during a 31-day internship.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
