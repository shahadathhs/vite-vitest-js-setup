import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <br />
      <p>This is the about page.</p>

      <br />
      <Link to="/" className="text-blue-500 px-4 py-2 border-2 rounded-md">Go to Home</Link>
      <br />
      <br />
      <Link to="/contact" className="text-blue-500 px-4 py-2 border-2 rounded-md">Go to Contact</Link>
    </div>
  )
}
