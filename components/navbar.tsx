"use client";

import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const styles = {
  navbar: {
    background: "rgba( 0, 0, 0, 0.65 )",
    backdropFilter: "blur(20px)"
  },
};

function NavigationBar() {
  const items = [
    { link: "#about", title: "Sobre" },
    { link: "#projects", title: "Projetos" },
    { link: "#contact", title: "Contato" },
  ];
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
  });

  const handleClick = (id: String) =>
    document.querySelector("[id=" + id + "]").scrollIntoView();

  return (
    <Navbar
      style={styles.navbar}
      expand="lg"
      fixed={isPageScrolled ? "top" : undefined}
    >
      <Nav className="justify-center">
        <ul className="flex py-4 flex-row-reverse">
          {items.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index}>
              <a
                href={item.link}
                onClick={() => handleClick(item.link)}
                className="px-8 text-lg text-white"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
