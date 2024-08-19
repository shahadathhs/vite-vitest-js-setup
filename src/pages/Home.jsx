import { Link } from "react-router-dom";
import { useTheme } from "./../hooks/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Home</h1>

      <br />
      <p>This is the home page.</p>

      <br />
      <button onClick={toggleTheme} className="btn btn-primary">
        Toggle Theme ({theme})
      </button>
      <br />

      <br />
      <Link to="/about" className="text-blue-500 px-4 py-2 border-2 rounded-md">
        Go to About
      </Link>
      <br />
      <br />
      <Link
        to="/contact" className="text-blue-500 px-4 py-2 border-2 rounded-md"
      >
        Go to Contact
      </Link>
      <br />
      <br />
      <Link to="/users" className="text-blue-500 px-4 py-2 border-2 rounded-md">
        Go to Users
      </Link>
    </div>
  );
}
