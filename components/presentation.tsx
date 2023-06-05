const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.65 )",
    //boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )"}
};

function Presentation() {
  return (
    <section>
      <div style={styles.glassBackground} className="px-32 py-48">
        <div className="text-center self-center">
          <h1 className="text-6xl text-teal-500">Olá!</h1>
          <h1 className="text-5xl font-semibold text-white">Eu sou Weverton Trindade</h1>
        </div>
        {/* <Image src="img/banner.png" fluid style={styles.banner} /> */}
      </div>
    </section>
  );
}

export default Presentation;
