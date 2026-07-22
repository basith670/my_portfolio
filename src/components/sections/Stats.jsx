import FadeIn from "../common/FadeIn";
import AnimatedCounter from "../common/AnimatedCounter";

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
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

            {stats.map((item) => (

              <div
                key={item.label}
                className="group text-center bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl py-6 sm:py-8 lg:py-10 px-4 sm:px-6 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                {/* Animated Counter */}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">

                  <AnimatedCounter
                    end={item.end}
                    duration={2000}
                  />

                  {item.suffix}

                </h2>

                {/* Label */}

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-blue-100 font-medium leading-6 group-hover:text-white transition duration-300">

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