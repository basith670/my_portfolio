
import {
    FaCode,
    FaLaptopCode,
    FaDatabase,
    FaServer,
  } from "react-icons/fa";
  
  import FadeIn from "../common/FadeIn";
  
  function About() {
    const highlights = [
      {
        icon: <FaCode />,
        title: "Frontend",
        text: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap",
      },
      {
        icon: <FaServer />,
        title: "Backend",
        text: "Python, Django, Django REST Framework, REST APIs, JWT Authentication",
      },
      {
        icon: <FaDatabase />,
        title: "Database",
        text: "PostgreSQL, MySQL, SQLite",
      },
      {
        icon: <FaLaptopCode />,
        title: "Software Engineering",
        text: "Git, GitHub, Authentication, API Integration, Clean Architecture",
      },
    ];
  
    return (
      <FadeIn>
        <section
          id="about"
          className="py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
  
            {/* Heading */}
  
            <div className="text-center">
  
              <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                About Me
              </p>
  
              <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
                Passionate About Building
                <span className="text-blue-600"> Modern Software</span>
              </h2>
  
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
                I enjoy building scalable full-stack applications that combine
                intuitive user experiences with secure and efficient backend
                systems.
              </p>
  
            </div>
  
            {/* Content */}
  
            <div className="grid lg:grid-cols-2 gap-20 mt-24 items-center">
  
              {/* Left Side */}
  
              <div>
  
                <h3 className="text-3xl font-bold text-slate-900">
                  Software Engineer &
                  <span className="text-blue-600">
                    {" "}Python Full Stack Developer
                  </span>
                </h3>
  
                <p className="mt-8 text-lg leading-9 text-slate-600">
                  I recently completed my Bachelor of Technology in Computer
                  Science and Engineering and focus on developing modern web
                  applications using React, Django, Django REST Framework and
                  PostgreSQL.
                </p>
  
                <p className="mt-6 text-lg leading-9 text-slate-600">
                  My projects span healthcare, education, recruitment and
                  geospatial analytics, giving me practical experience in
                  responsive UI development, REST API design, authentication,
                  database management and deployment.
                </p>
  
                <p className="mt-6 text-lg leading-9 text-slate-600">
                  I continuously strengthen my software engineering skills through
                  hands-on projects, HackerRank problem solving, virtual industry
                  programs and internship experience while following clean coding
                  principles and modern development practices.
                </p>
  
              </div>
  
              {/* Right Side */}
  
              <div className="grid sm:grid-cols-2 gap-6">
  
                {highlights.map((item, index) => (
  
                  <div
                    key={index}
                    className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                  >
  
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
  
                      {item.icon}
  
                    </div>
  
                    <h4 className="mt-6 text-xl font-bold text-slate-900">
  
                      {item.title}
  
                    </h4>
  
                    <p className="mt-4 leading-7 text-slate-600">
  
                      {item.text}
  
                    </p>
  
                  </div>
  
                ))}
  
              </div>
  
            </div>
  
          </div>
        </section>
      </FadeIn>
    );
  }
  
  export default About;