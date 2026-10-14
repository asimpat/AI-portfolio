import React from "react";
import { FaCode, FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import { projects } from "./data";

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-[#0a0a0a] text-white border-t border-b border-gray-800 font-raleway"
  >
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-raleway">
        Featured <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-900 rounded-xl shadow-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 ${
              project.id === 1
                ? "border-orange-500/30 hover:border-orange-500"
                : "border-gray-800 hover:border-orange-500"
            }`}
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-0">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  project.id === 1
                    ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                    : "border-sky-500/40 bg-sky-500/10 text-sky-300"
                }`}
              >
                {project.id === 1 ? "Bootcamp Project" : "Group Project"}
              </span>
            </div>
            {/* Conditional Image or Placeholder */}
            {project.imgUrl ? (
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
            ) : (
              <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-800 p-4 text-gray-500">
                <FaCode className="text-5xl mb-3 text-orange-500" />
                <p className="text-center font-semibold font-raleway">
                  {project.id === 2
                    ? "Project documentation available"
                    : "Backend project"}
                </p>
                <p className="text-sm font-raleway">
                  {project.id === 2
                    ? "This project is documented rather than deployed as a live site."
                    : "Code-based project with no live frontend preview."}
                </p>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold font-raleway text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed font-raleway">
                {project.description}
              </p>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed font-raleway">
                {project.details}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {/* Live Demo */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium bg-orange-600 px-3 py-1.5 rounded-lg hover:bg-orange-700 transition font-raleway"
                  >
                    <FaExternalLinkAlt className="mr-2 text-xs" />
                    Live Demo
                  </a>
                )}

                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium border border-orange-500 text-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-500 hover:text-white transition font-raleway"
                  >
                    <FaFileAlt className="mr-2 text-xs" />
                    Project Docs
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-400 px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-700 transition font-raleway"
                  >
                    <FaGithub className="mr-2 text-xs" />
                    {project.id === 2 ? "View Doc" : "Source Code"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
