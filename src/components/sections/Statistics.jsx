import {
  FaProjectDiagram,
  FaBriefcase,
  FaCode,
  FaAward,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: "10+",
      title: "Projects",
      subtitle: "Full Stack & AI Applications",
    },
    {
      icon: <FaBriefcase />,
      number: "6",
      title: "Months",
      subtitle: "Internship Experience",
    },
    {
      icon: <FaCode />,
      number: "3",
      title: "Live Apps",
      subtitle: "Production Deployments",
    },
    {
      icon: <FaAward />,
      number: "5★",
      title: "HackerRank",
      subtitle: "Problem Solving",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-slate-900 to-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-10 border border-white/10 hover:bg-blue-600 transition-all duration-500 text-center hover:-translate-y-2"
            >

              <div className="text-4xl lg:text-5xl text-blue-400 flex justify-center">

                {item.icon}

              </div>

              <h2 className="mt-5 lg:mt-6 text-4xl lg:text-5xl font-bold text-white">

                {item.number}

              </h2>

              <h3 className="mt-3 lg:mt-4 text-lg lg:text-xl font-semibold text-white">

                {item.title}

              </h3>

              <p className="mt-2 lg:mt-3 text-sm sm:text-base text-slate-300">

                {item.subtitle}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;