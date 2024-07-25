import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaPinterest, FaTwitter, FaLinkedin, FaWhatsapp ,FaEnvelope, FaPhone, FaMapMarkerAlt} from 'react-icons/fa';
import './Portfolio.css';

const Portfolio: React.FC = () => {

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("header nav ul li a");

    const onScroll = () => {
      let current: string = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || '';
        }
      });

      navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
          a.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div>
      <header>
        <div className="landing">
          <div className="intro">
            <h3>I'M <span>Abdul-Qoyyum</span><br />Full Stack Developer &<br />Aspiring Software Developer</h3>
            <button><a className="buttoncontact" href="#contact-loc">Contact Me</a></button>
          </div>
          <div className="socials">
            <div className="line"></div>
            <a href="https://github.com/QoyyumO"><FaGithub /></a>
            <a href="https://www.pinterest.com/QoyyuumO/_created/"><FaPinterest /></a>
            <a href="https://twitter.com/AbdulOyadeyi"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/abdul-qoyyum-oyadeyi-77725b1b3/"><FaLinkedin /></a>
            <a href="#contact-loc"><FaWhatsapp /></a>
          </div>
        </div>
      </header>
      <section className="about">
        <h1>About Me</h1>
        <div className="description">
          <div className="line"></div>
          <p>Full-stack web developer and UI/UX designer with expertise in both front-end and back-end technologies. 
            Proficient in HTML5, CSS frameworks, JavaScript, TypeScript, React, Vue.js, Nest.js, and TypeORM. Skilled 
            in containerization with Docker and server management with Nginx. Combines technical prowess with creative
             design to build intuitive, visually appealing, and fully functional web applications. Passionate about delivering 
             seamless user experiences through innovative digital solutions. My ultimate goal remains to design experiences that resonate deeply with users, 
            ensuring a seamless and enjoyable browsing journey.
          </p>
        </div>
      </section>
      <section className="skills">
        <h1>My Skills</h1>
        <div className="cards">
          {[
            { src: 'assets/react.svg', alt: 'React JS/Native', label: 'React JS/Native' },
            { src: 'assets/css.svg', alt: 'CSS', label: 'CSS' },
            { src: 'assets/html.svg', alt: 'HTML', label: 'HTML' },
            { src: 'assets/js.svg', alt: 'JavaScript', label: 'JavaScript' },
            { src: 'assets/mos.png', alt: 'Microsoft Office Specialist', label: 'Microsoft Office Specialist' },
            { src: 'assets/ux-ui-logo.svg', alt: 'UI/UX', label: 'UI/UX' },
            { src: 'assets/Adobe_Photoshop_CC_icon.svg.png', alt: 'Adobe Photoshop', label: 'Adobe Photoshop' },
            { src: 'assets/Adobe_Illustrator_CC_icon.svg.png', alt: 'Adobe Illustrator', label: 'Adobe Illustrator' },
            { src: 'assets/c++.svg', alt: 'C++', label: 'C++' },
            { src: 'assets/nodejs.svg', alt: 'Node JS', label: 'Node JS' },
            { src: 'assets/pg.png', alt: 'PostgreSQL', label: 'PostgreSQL' },
            { src: 'assets/nestjs.png', alt: 'Nest JS', label: 'Nest JS' },
            { src: 'assets/vuejs.png', alt: 'Vue JS', label: 'Vue JS' },
            { src: 'assets/vite.svg', alt: 'Vite JS', label: 'Vite JS' },
            { src: 'assets/tailwind.png', alt: 'Tailwind CSS', label: 'Tailwind CSS' }
          ].map(skill => (
            <div className="skill-card" key={skill.alt}>
              <img src={skill.src} alt={skill.alt} />
              <h2>{skill.label}</h2>
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio" id="portfolio-loc">
        <h1>Projects</h1>
        <div className="portfolio-cards">
          {[
            { src: 'assets/toothfixers.png', alt: 'Toothfixers', label: 'Toothfixers', desc: 'A web-based application for managing patients clinical records for ToothFixers Ltd., a large dental company with multiple dentists.', link: 'https://github.com/QoyyumO/toothfixers-project' },
            { src: 'assets/result-summary.png', alt: 'Result Summary', label: 'Result Summary', desc: 'Another web design template to show the review or summary of a test done.', link: 'https://result-summary-QoyyumO.vercel.app' },
            { src: 'assets/CBT.jpg', alt: 'CBT project', label: 'CBT project', desc: 'A C++ project on Computer based testing', link: 'https://github.com/QoyyumO/CBT' }
          ].map(project => (
            <div className="portfolio-card" key={project.alt}>
              <img src={project.src} alt={project.alt} />
              <div className="overlay">
                <h3>{project.label}</h3>
                <p>{project.desc}</p>
                <button><a href={project.link}>See More -{'>'}</a></button>
              </div>
            </div>
          ))}
        </div>
        <button style={{ marginLeft: '30px' }}><Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
        View More
      </Link></button>
      </section>
      <section className="experience">
        <div className="darker-div"></div>
        <h1>Experience</h1>
        <div className="lighter-div">
          {[
            { title: 'Assistant IT administrator', company: 'Top-tech Engineering Limited, Lagos', desc: '● Server Systems Troubleshooting: Diagnosed and resolved server system issues promptly to ensure uninterrupted operations. Utilized advanced troubleshooting techniques to identify and rectify server-related problems, minimizing downtime.<br>● User Experience Optimization: Spearheaded initiatives to enhance the user experience for employees, resulting in increased productivity and satisfaction. Streamlined server configurations and settings to deliver faster response times and reduced latency.<br>● Laptop Integration and IP Address Management: Successfully integrated new laptops into the company network, ensuring seamless connectivity and access to resources. Managed IP address allocation and assignment to maintain a well-organized and efficient network infrastructure. Implemented robust security measures to protect against unauthorized access and data breaches.' },
            { title: 'Lead Programmer', company: 'First Global Challenge, Geneva', desc: '• Led a cross-functional team in the design, programming, and construction of a cutting-edge robot for the prestigious First Global Challenge held in Geneva. Directed the project from inception to completion, overseeing all phases, including design, programming, and system integration.<br>• Developed and maintained detailed documentation that captured the entire lifecycle of the robot, from the initial design concept to the final implementation. Created comprehensive technical reports and manuals to facilitate knowledge transfer within the team and future reference for similar projects.<br>• Faced and resolved a multitude of complex challenges throughout the project, significantly enhancing critical thinking and problem-solving skills. Employed innovative solutions to overcome obstacles, demonstrating a proactive and resourceful approach to project management.' }
          ].map(exp => (
            <div className="exp" key={exp.title}>
              <h2>{exp.title}</h2>
              <div className="exp-desc">
                <h3>{exp.company}</h3>
                <p dangerouslySetInnerHTML={{ __html: exp.desc }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-me" id="contact-loc">
        <h1>Contact Me</h1>
        <div className="contact">
        <div className="contact-card">
        <FaEnvelope />
        <p>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=oyinlolaoyadeyi@gmail.com" className="contact-link">
            oyinlolaoyadeyi@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-card">
        <FaPhone />
        <p>
          <a className="contact-link" href="https://wa.me/+2348052628593">
            +234 805 262 8593
          </a>
        </p>
      </div>
      <div className="contact-card">
        <FaMapMarkerAlt />
        <p>Lagos, Nigeria</p>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
