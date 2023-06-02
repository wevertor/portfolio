import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.90 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )",
    padding: "1.3rem",
  },
  icons: {
    margin: "0.3rem",
  },
  iconsLink: {
    color: "white",
  },
};

function Footer() {
  return (
    <section style={styles.glassBackground}>
      <div
        style={{
          color: "white",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "8rem",
          marginRight: "8rem",
        }}
      >
        <div style={{ textAlign: "left" }}>
          Projetado e Desenvolvido por Weverton Trindade
        </div>
        <div style={{ textAlign: "right" }}>
          <a href="https://github.com/wevertor" style={styles.iconsLink}>
            <FaGithub size={24} style={styles.icons} />
          </a>

          <a href="https://linkedin.com/in/wevertor" style={styles.iconsLink}>
            <FaLinkedin size={24} style={styles.icons} />
          </a>

          <a href="https://instagram.com/trindamaster" style={styles.iconsLink}>
            <FaInstagram size={24} style={styles.icons} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
