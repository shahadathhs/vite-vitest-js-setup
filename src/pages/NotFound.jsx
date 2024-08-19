import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found - 404</h1>

      <p>This page does not exist.</p>

      <Link to="/">Go to Home</Link>
    </div>
  )
}
