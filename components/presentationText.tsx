
const styles = {
  glassBackground: {
    background: "rgba( 0, 0, 0, 0.65 )",
    //boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px ) ",
    webtoolkitBackdropFilter: "blur( 20px )",
  },
};

function PresentationText() {
  return (
    <section style={styles.glassBackground} id="about" className="px-20 sm:px-32">
      <div className="flex justify-between">
        <div className="text-left max-w-3xl">
          <h1 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold text-white">Um pouco sobre mim...</h1>
          <div className="text-base text-justify text-white">
            <br />
            <p>
              Moro em <b className="text-teal-500">São Luís - MA, Brasil</b>. Sou
              um desenvolvedor júnior na reta final da minha graduação em
              Ciência da Computação pela Universidade Federal do Maranhão.
            </p>
            <br />
            <p>
              Gosto de estar sempre me desafiando a aprender coisas novas. Meus
              campos de interesse são{" "}
              <b className="text-teal-500">Desenvolvimento Web</b>, além de{" "}
              <b className="text-teal-500">Desenvolvimento de Jogos</b> e{" "}
              <b className="text-teal-500">Machine Learning</b>.
            </p>
            <br />
            <p>
              Durante a minha jornada adquiri conhecimentos em{" "}
              <b className="text-teal-500 font-semibold">
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
