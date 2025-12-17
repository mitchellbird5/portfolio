export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        This website has no endorsement or affiliation with any named technologies on this page.
      </p>
      <p className="footer-text">
        All product names, logos, and brands are property of their respective owners.
      </p>
      <p className="footer-text footer-copy">
        © {new Date().getFullYear()} Mitchell Bird. All rights reserved.
      </p>
    </footer>
  );
}
