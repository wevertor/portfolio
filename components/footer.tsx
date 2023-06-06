import { FaGithub, FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";

const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.90 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )",
  },
};

function Footer() {
  return (
    <section style={styles.glassBackground} className="px-32 py-6" >
      <div className="flex text-white items-center flex-col-reverse lg:flex-row lg:justify-between sm:mx-8"
      >
        <h6 className="text-sm text-center sm:text-left lg:text-base">
          Projetado e Desenvolvido por Weverton Trindade
        </h6>
        <div className="flex flex-row space-x-6">
          <a href="https://github.com/wevertor"><FaGithubSquare className="text-3xl" /></a>
          <a  href="https://linkedin.com/in/wevertor"><FaLinkedin className="text-3xl" /></a>
          <a href="https://instagram.com/trindamaster"><FaInstagram className="text-3xl" /></a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
