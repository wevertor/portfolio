import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.65 )",
    //boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )",
  },
};

function Contact() {
  return (
    <section style={styles.glassBackground} id="contact" className="px-32 py-48">
      <div className="text-white justify-self-center text-center">
        <h1 className="font-semibold text-3xl sm:text-5xl">Encontre-me em:</h1>
        <p className="text-lg">Sinta-se livre para se conectar comigo</p>
        <div className="flex justify-center">
            <div className="flex flex-row">
          <a href="https://github.com/wevertor" className="m-1">
            <FaGithub size={32} />
          </a>

          <a href="https://linkedin.com/in/wevertor" className="m-1">
            <FaLinkedin size={32} />
          </a>

          <a href="https://instagram.com/trindamaster" className="m-1">
            <FaInstagram size={32} />
          </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
