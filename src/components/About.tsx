import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Passionate Front-End Developer and B.Tech CSE student at Dayananda Sagar College of Engineering, Bengaluru (CGPA: 9.0). I build fast, responsive, and beautiful web applications — turning ideas into polished digital experiences.
        </p>
        <div className="achievements-list">
          <div className="achievement-item">
            <span className="achievement-dot"></span>
            <span>ACM India Summer School 2026 at IIT Guwahati — Selected for NLP & Language Technology</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-dot"></span>
            <span>Google Big Code 2026 — Top 1500, qualified up to Round 2</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-dot"></span>
            <span>Triada CTF 2026 — 11th rank among 64 teams</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
