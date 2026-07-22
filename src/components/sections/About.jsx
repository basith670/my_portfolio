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
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              About Me
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Passionate About Building
              <span className="text-blue-600">
                {" "}Modern Software
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              I enjoy building scalable full-stack applications that combine
              intuitive user experiences with secure and efficient backend
              systems.
            </p>

          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16 lg:mt-24 items-center">

            {/* Left Side */}

            <div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Software Engineer &
                <span className="text-blue-600">
                  {" "}Python Full Stack Developer
                </span>
              </h3>

              <p className="mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                I recently completed my Bachelor of Technology in Computer
                Science and Engineering and focus on developing modern web
                applications using React, Django, Django REST Framework and
                PostgreSQL.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                My projects span healthcare, education, recruitment and
                geospatial analytics, giving me practical experience in
                responsive UI development, REST API design, authentication,
                database management and deployment.
              </p>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                I continuously strengthen my software engineering skills through
                hands-on projects, HackerRank problem solving, virtual industry
                programs and internship experience while following clean coding
                principles and modern development practices.
              </p>

            </div>

            {/* Right Side */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {highlights.map((item, index) => (

                <div
                  key={index}
                  className="group bg-slate-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >

                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl lg:text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">

                    {item.icon}

                  </div>

                  <h4 className="mt-5 text-lg lg:text-xl font-bold text-slate-900">

                    {item.title}

                  </h4>

                  <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">

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