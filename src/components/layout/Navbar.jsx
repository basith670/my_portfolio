import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

import Container from "../common/Container";
import Button from "../common/Button";
import navigation from "../../constants/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <Container>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-bold text-blue-600 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            MB
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="text-blue-600 font-bold"
                className="cursor-pointer text-slate-700 hover:text-blue-600 transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <Button href="/resume/Muhammad_Basith_Resume.pdf">
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-6 border border-slate-200"
          >
            <div className="flex flex-col gap-6">

              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-slate-700 hover:text-blue-600 text-lg transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ))}

              <Button
                href="/resume/Muhammad_Basith_Resume.pdf"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Button>

            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;