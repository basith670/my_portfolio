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
        number: "5+",
        title: "Projects",
        subtitle: "Full Stack & ML Projects",
      },
      {
        icon: <FaBriefcase />,
        number: "6",
        title: "Months",
        subtitle: "Internship Experience",
      },
      {
        icon: <FaCode />,
        number: "20+",
        title: "REST APIs",
        subtitle: "Developed using Django REST",
      },
      {
        icon: <FaAward />,
        number: "5★",
        title: "HackerRank",
        subtitle: "Problem Solving Badges",
      },
    ];
  
    return (
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
  
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
  
            {stats.map((item, index) => (
  
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:bg-blue-600 transition duration-500 text-center"
              >
  
                <div className="text-5xl text-blue-400 flex justify-center">
  
                  {item.icon}
  
                </div>
  
                <h2 className="mt-6 text-5xl font-bold text-white">
  
                  {item.number}
  
                </h2>
  
                <h3 className="mt-4 text-xl font-semibold text-white">
  
                  {item.title}
  
                </h3>
  
                <p className="mt-3 text-slate-300">
  
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