import { experiences } from "./data";

const Experience = () => (
  <section
    id="experience"
    className="py-20 bg-gray-900 text-white border-t border-b border-gray-800 font-raleway"
  >
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-raleway">
        Learning <span className="text-orange-500">Journey</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-[#0a0a0a] rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:shadow-2xl hover:shadow-orange-500/10"
          >
            <div className="mb-3">
              <p className="text-xs uppercase tracking-[0.2em] text-orange-400 font-semibold">
                {exp.period}
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-orange-400 font-raleway">
              {exp.title}
            </h3>
            <p className="text-gray-400 mt-1 font-raleway">{exp.company}</p>
            <p className="mt-4 text-gray-300 leading-relaxed font-raleway">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
