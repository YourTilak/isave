import styles from "./footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.container}>
      <p>Made with ❤️</p>
      <p>Copyright ©️ 2022 - isave.cc</p>

      <p>
        <span>
          <Link href="/privacy-policy">Privacy policy</Link>
        </span>{" "}
        |{" "}
        <span>
          <Link href="/contact-us">Contact us</Link>
        </span>
      </p>
    </footer>
  );
}

export default Footer;