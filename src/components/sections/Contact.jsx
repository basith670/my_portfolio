import FadeIn from "../common/FadeIn";
import {
    FaGithub,
    FaLinkedin,
    FaHackerrank,
    FaPhoneAlt,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  import { MdEmail } from "react-icons/md";
  
  function Contact() {
    return (
        <FadeIn>
      <section
        id="contact"
        className="py-28 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center">
  
            <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Contact
            </p>
  
            <h2 className="mt-3 text-5xl font-bold text-slate-900">
              Let's Build Something Great
            </h2>
  
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-8">
              I'm actively looking for Software Engineer and Python Full Stack
              Developer opportunities. Feel free to connect with me.
            </p>
  
          </div>
  
          {/* Card */}
  
          <div className="mt-20 bg-white rounded-3xl shadow-xl p-10">
  
            <div className="grid md:grid-cols-2 gap-12">
  
              {/* Left */}
  
              <div className="space-y-8">
  
                <div className="flex items-center gap-5">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                  <span className="text-lg font-medium">
                    +91 9048884058
                  </span>
                </div>
  
                <div className="flex items-center gap-5">
                  <MdEmail className="text-blue-600 text-2xl" />
                  <span className="text-lg font-medium">
                    basithkdrbk@gmail.com
                  </span>
                </div>
  
                <div className="flex items-center gap-5">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                  <span className="text-lg font-medium">
                    Chennai, India
                  </span>
                </div>
  
              </div>
  
              {/* Right */}
  
              <div>
  
                <h3 className="text-2xl font-bold mb-8">
                  Connect With Me
                </h3>
  
                <div className="flex gap-6 text-4xl">
  
                  <a
                    href="https://github.com/basith670"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaGithub />
                  </a>
  
                  <a
                    href="https://linkedin.com/in/muhammad-basith-k-13307034b"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaLinkedin />
                  </a>
  
                  <a
                    href="https://www.hackerrank.com/mk0227"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaHackerrank />
                  </a>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
      </FadeIn>
    );
  }
  
  export default Contact;