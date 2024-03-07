import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/pomodoro">
        <button>POMODORO</button>
      </Link>

      <Link to="/shortbreak">
        <button>SHORT BREAK</button>
      </Link>

      <Link to="/longbreak">
        <button>LONG BREAK</button>
      </Link>
    </div>
  );
}
