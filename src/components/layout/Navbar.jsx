import Container from "../common/Container";
import Button from "../common/Button";
import navigation from "../../constants/navigation";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <Container>
      <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="text-3xl font-bold text-blue-600 cursor-pointer">
                MB
                </div>

          {/* Navigation */}
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

          {/* Resume Button */}
          <Button
            href="/resume/Muhammad_Basith_Resume.pdf"
            >
            Resume
            </Button>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;