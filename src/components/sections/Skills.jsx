import FadeIn from "../common/FadeIn";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    category: "Database",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    category: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Render",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="py-20 lg:py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm sm:text-base">
              Skills
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Technologies I Work With
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              I specialize in modern full-stack web development using
              React, Django, REST APIs and PostgreSQL while following
              clean architecture and best software engineering practices.
            </p>

          </div>

          {/* Skill Groups */}

          <div className="mt-16 lg:mt-20 space-y-6 lg:space-y-8">

            {skills.map((group) => (

              <div
                key={group.category}
                className="bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-slate-200 p-6 lg:p-8 hover:shadow-lg transition duration-300"
              >

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 lg:mb-6">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {group.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm sm:text-base font-medium border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Skills;