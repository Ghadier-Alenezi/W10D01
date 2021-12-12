import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About us</li>
        </Link>
        <Link href="/contact">
          <li>Contact us</li>
        </Link >
        <Link href="/posts">
          <li>Posts</li>
        </Link>
      </ul>
    </>
  );
};

export default NavBar;
