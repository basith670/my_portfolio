import { useState } from "react";
import FadeIn from "../common/FadeIn";
import projects from "../../data/projects";

import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  const filters = ["All", "Full Stack", "AI Project", "Machine Learning"];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <FadeIn>
      <section
        id="projects"
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Portfolio
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Featured Projects
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600">
              Some of the real-world applications I have built using React,
              Django, Django REST Framework, PostgreSQL and Machine Learning.
            </p>

          </div>

          {/* Filter Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-14">

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-600"
                }`}
              >
                {filter}
              </button>

            ))}

          </div>

          {/* Project Cards */}

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {filteredProjects.map((project) => (

              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}

                <div className="relative overflow-hidden group">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-600 hover:text-white transition"
                    >
                      Repository
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                  {/* Category */}

                  <div className="absolute top-5 left-5">

                    <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>

                  </div>

                  {/* Status */}

                  <div className="absolute top-5 right-5">

                    <span className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow-lg">
                      {project.status}
                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-600 hover:text-white transition duration-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
                    >
                      <FiGithub />
                      Repository
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Projects;