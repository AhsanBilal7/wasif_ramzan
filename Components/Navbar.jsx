import logo from "../images/logo.svg";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navstyle from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import hamicon from "../images/hamburger.png";
import crossicon from "../images/close.png";
function NavbarComp() {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const [icondis, seticondis] = useState(true);
  const [crossdis, setcrossdis] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    seticondis(!icondis);
    setcrossdis(!crossdis);
  };

  return (
    <>
      <Navbar
        data-bs-theme="light"
        className={`${navstyle.main} "justify-content-evenly bg-white"`}
      >
        <Container
          style={{ alignItems: "flex-start" }}
          className={`${navstyle.mobcontainer}`}
        >
          <Link href="/" passHref>
            <div className={navstyle.logoImage}>
              <Image alt="Logo" src={logo} width={200} />
            </div>
          </Link>

        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;