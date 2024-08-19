import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found - 404</h1>

      <br />
      <p>This page does not exist.</p>

      <br />
      <Link to="/" className="text-blue-500 px-4 py-2 border-2 rounded-md">Go to Home</Link>
    </div>
  )
}
