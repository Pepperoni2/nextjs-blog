import Link from "next/dist/client/link";
function Footer() {
    return(
    <footer id="footer">
    <div id="wrpfooter">
      <div id="logo1" ></div>
      <li>
        Copyright 2021
      </li>

      <li>
      <Link href="#">About</Link>
      </li>
    </div>
  </footer>
    );
}
export default Footer;