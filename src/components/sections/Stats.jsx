import CountUp from "react-countup";
import FadeIn from "../common/FadeIn";

const stats = [
  {
    end: 10,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    end: 300,
    suffix: "+",
    label: "HackerRank Problems",
  },
  {
    end: 3,
    suffix: "+",
    label: "Major Full Stack Projects",
  },
  {
    end: 2,
    suffix: "",
    label: "Industry Programs",
  },
];

function Stats() {
  return (
    <FadeIn>
      <section
        id="stats"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-700"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item) => (

              <div
                key={item.label}
                className="group text-center bg-white/10 backdrop-blur-md rounded-2xl py-10 px-6 border border-white/20 hover:scale-110 hover:bg-white/20 hover:shadow-2xl transition-all duration-300"
              >

<h2 className="text-5xl font-extrabold text-white">
  {item.end}
  {item.suffix}
</h2>

                <p className="mt-4 text-blue-100 font-medium group-hover:text-white transition duration-300">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Stats;