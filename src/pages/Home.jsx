import { Link } from "react-router-dom";
import { useTheme } from "./../hooks/useTheme";
import TestWithMockData from './../components/TestWithMockData';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const data = [
    { id: 1, first_name: 'Fletcher', last_name: 'McVanamy', email: 'mmcvanamy0@e-recht24.de' },
    { id: 2, first_name: 'Clarice', last_name: 'Harrild', email: 'charrild1@dion.ne.jp' },
  ]

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

     <main className="min-h-screen">
      <TestWithMockData data={data} />
    </main>
    </div>
  );
}
