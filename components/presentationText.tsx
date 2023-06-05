
const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.65 )",
    //boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )",
    padding: "9rem 10rem",
  },
  textContainer: {
    maxWidth: "50rem",
    textAlign: "left",
    alignSelf: "center",
    fontFamily: "Poppins, Sans-serif",
    color: "white",
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: "36pt",
  },
  paragraphs: {
    textAlign: "left",
    maxWidth: "50rem",
    fontSize: "14pt",
  },
  highlight: {
    color: "#20C3A0",
    fontWeight: 600,
  },
  profileImage: {
    maxheight: "100%",
    width: "auto",
    marginRight: "5rem",
    borderRadius: 1000
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
};

function PresentationText() {
  return (
    <section style={styles.glassBackground} id="about">
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Um pouco sobre mim...</h1>
          <div style={styles.paragraphs}>
            <br />
            <p>
              Moro em <b style={styles.highlight}>São Luís - MA, Brasil</b>. Sou
              um desenvolvedor júnior na reta final da minha graduação em
              Ciência da Computação pela Universidade Federal do Maranhão.
            </p>
            <br />
            <p>
              Gosto de estar sempre me desafiando a aprender coisas novas. Meus
              campos de interesse são{" "}
              <b style={styles.highlight}>Desenvolvimento Web</b>, além de{" "}
              <b style={styles.highlight}>Desenvolvimento de Jogos</b> e{" "}
              <b style={styles.highlight}>Machine Learning</b>.
            </p>
            <br />
            <p>
              Durante a minha jornada adquiri conhecimentos em{" "}
              <b style={styles.highlight}>
                Javascript (Node.js, React.js), Java (Spring Boot), Python
                (scikit-learn, tensorflow) e C# (Unity)
              </b>
              .
            </p>
          </div>
        </div>
        {/*<img
          src="https://avatars.githubusercontent.com/u/19598108?v=4"
          style={styles.profileImage}
        />*/}
      </div>
    </section>
  );
}

export default PresentationText;
