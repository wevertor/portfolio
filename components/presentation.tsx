
const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.65 )",
    //boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px ) ",
    // webtoolkitBackdropFilter: "blur( 20px )",
    padding: "9rem 10rem",
    paddingBottom: "0rem",
  },
  textContainer: {
    textAlign: "left",
    alignSelf: "center",
    fontFamily: "Poppins, Sans-serif",
  },
  firstLine: {
    color: "#0EE6B7",
    fontSize: "3em",
  },
  secondLine: {
    color: "white",
    fontWeight: "600",
    fontSize: "4em",
  },
  thirdLine: {
    fontSize: "5em",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0)",
    webkitTextStrokeWidth: "1px",
    webkitTextStrokeColor: "#0EE6B7",
  },
  banner: {
    width: "auto",
    maxWidth: "50%",
  },
};

function Presentation() {
  return (
    <section>
      <div style={styles.glassBackground}>
        <div>
          <div style={styles.textContainer}>
            <h1 style={styles.firstLine}>Olá!</h1>
            <h1 style={styles.secondLine}>Eu sou Weverton Trindade</h1>
          </div>
          {/* <Image src="img/banner.png" fluid style={styles.banner} /> */}
        </div>
      </div>
    </section>
  );
}

export default Presentation;
