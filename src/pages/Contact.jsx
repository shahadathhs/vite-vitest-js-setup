import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <br />
      <p>This is the contact page.</p>

      <br />
      <Link to="/">Go to Home</Link>

      <br />
      <Link to="/about">Go to About</Link>
    </div>
  )
}
