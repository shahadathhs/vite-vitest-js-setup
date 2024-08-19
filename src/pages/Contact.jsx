import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <br />
      <p>This is the contact page.</p>

      <br />
      <Link to="/" className="text-blue-500 px-4 py-2 border-2 rounded-md">Go to Home</Link>
      <br />
      <br />
      <Link to="/about" className="text-blue-500 px-4 py-2 border-2 rounded-md">Go to About</Link>
    </div>
  )
}
