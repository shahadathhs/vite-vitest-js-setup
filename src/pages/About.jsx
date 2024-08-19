import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <br />
      <p>This is the about page.</p>

      <br />
      <Link to="/">Go to Home</Link>

      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  )
}
