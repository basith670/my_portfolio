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
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Skills
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Technologies I Work With
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
              I specialize in modern full-stack web development using
              React, Django, REST APIs and PostgreSQL while following
              clean architecture and best software engineering practices.
            </p>

          </div>

          <div className="mt-20 space-y-10">

            {skills.map((group) => (

              <div
                key={group.category}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8"
              >

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-4">

                  {group.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-5 py-3 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
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