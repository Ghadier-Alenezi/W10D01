import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css'

const NavBar = () => {
  return (
    <>
      <div className={styles.div}>
        <ul className={styles.list}>
          <Link href="/">
            <li>
              <Image
                src="/image.png"
                alt="logoImg"
                width={120}
                height={120}
              />
            </li>
          </Link>
          <Link href="/about">
            <li>About us</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
