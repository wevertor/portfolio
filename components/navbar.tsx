import { Poppins } from "next/font/google";
import { ScrollLink } from "./ScrollLink";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";

const styles = {
  navbar: {
    background: "rgba( 0, 0, 0, 0.65 )",
    backdropFilter: "blur(20px)"
  },
};

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
});

function NavigationBar() {
  const items = [
    { link: "#about", title: "Sobre" },
    { link: "#projects", title: "Projetos" },
    { link: "#contact", title: "Contato" },
  ];

  return (
    <nav style={styles.navbar} className={"px-32 py-3"}>
      <div className="flex md:justify-between text-sm text-white justify-center">
        <ul className="md:flex space-x-20 py-8 flex-row hidden">
          {items.map((item, index) => (
            <li key={index}>
              <ScrollLink href={item.link} className=" font-light">
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-6 py-8 flex-row">
            <li><a><FaLinkedin className="text-3xl" /></a></li>
            <li><a><FaGithubSquare className="text-3xl" /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
