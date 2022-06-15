import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="aboutLink">About my site....</div>
      <br />
      <Link className="homeLink" to="/">
        Home Page
      </Link>
    </>
  );
}
