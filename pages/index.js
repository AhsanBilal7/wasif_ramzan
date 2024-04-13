import Head from "next/head";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import styles from "../styles/Home.module.css";
import hero from "../images/wasif.png";
import { Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🧑‍💻Wasif Ramzan</title>
        <meta name="description" content="Ahsan Portfolio" />
      </Head>

      <div style={{marginBottom:"30px"} } className={`${styles.heroContainer}`}>
        <div className={styles.textSection}>
          <h1 className="">Hey There !</h1>
          <h2>
          I am a Commerce graduate student 🎓 with a keen interest in Accounting 🧾. Additionally, I excel in problem-solving 🧩.</h2>
          {/* //////////////////////////// */}
          <div className={styles.icon}>
            <div className="d-flex flex-row m-0 justify-content-start p-0">
              {/* <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.facebook.com/ahsan.cricko"
                />
              </div> */}
              {/* <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.flickr.com/photos/193071231@N06"
                />
              </div>
              <div className="mx-1">

              <SocialIcon
                target="_blank"
                url="https://www.behance.net/ahsanbilal3"
              />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/ahsanbilal7"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://github.com/AhsanBilal7"
                />
              </div> */}
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.instagram.com/wasif.ramzan.58?utm_source=qr&igsh=eDM4aWRycDRlMGI2"
                />
              </div>
              <div className="mx-1">
                <SocialIcon
                  target="_blank"
                  url="https://www.facebook.com/share/ctzqqYTc599coD1q/?mibextid=qi2Omg"
                />
              </div>
            </div>


          </div>

           <Link  target="_blank" rel="noopener noreferrer"  href="#" ><div className="m-2">   <Button >View Resume</Button></div></Link>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.image}>
            {" "}
            <Image width={300} height={300} src={hero} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}
