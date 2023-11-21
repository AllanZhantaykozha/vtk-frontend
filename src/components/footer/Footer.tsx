import Link from "next/link";
import styles from "./Footer.module.scss";
import { BsTelegram } from "react-icons/Bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.fio}>Сайт создан студентом из группы РПО-23-3 Жантайкожа Аллан Ерланулы </p>
      <div className={styles.numbers}>
        <div className={styles.number}>+7 706 656 3420</div>
        <div className={styles.number}>+7 700 240 4104</div>
      </div>
      <div className={styles.social}>
        <div className={styles.media}>
          <BsTelegram />
          <Link href={'https://t.me/theallan765'}> @theallan765</Link>
        </div>
        <div className={styles.media}>
          <AiFillInstagram />
          <Link href={'https://www.instagram.com/theallan765/'}> @theallan765</Link>
        </div>
        <div className={styles.media}>
          <AiFillGithub />
          <Link href={'https://github.com/AllanZhantaykozha'}>theallan765</Link>
        </div>
      </div> 
    </footer>
  );
}
