// pages/index.js
import Image from "next/image";
import styles from "./page.module.scss";
import star from "./star.svg";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.boxContainer1}>
          <div className={styles.text1}>
            Crafting Seamless Trades, <br />
            Bowl by Bowl{" "}
            <Image src={star} alt="shine" className={styles.star} />
          </div>
          <div className={styles.textsmall}>
            Crafting <br />
            Seamless <Image src={star} alt="shine" className={styles.star} />
            <br />
            Trades, Bowl <br /> by Bowl
          </div>
        </div>

        <div className={styles.boxContainer2}>
          <div className={styles.left}>
            <video
              autoPlay
              loop
              controls={false}
              className={styles.tokenImg}
              src="https://gateway.lighthouse.storage/ipfs/QmZRZDhMr3zgh5LLUzQJEodi4CApfxw3hRGpkv4rGHsVa4"
            ></video>
          </div>

          <div className={styles.right}>
            <div className={styles.text2}>
              Experience Seamless Trading, <br /> Instant Liquidity, Unmatched{" "}
              <br />
              Security, Experience the Future of <br />
              Decentralized Finance.
            </div>
          </div>
        </div>
      </main>
      <div className={styles.flower}></div>
    </>
  );
}
