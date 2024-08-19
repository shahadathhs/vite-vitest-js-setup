import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <br />
      <p>This is the home page.</p>

      <br />
      <Link to="/about">Go to About</Link>

      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  )
}
