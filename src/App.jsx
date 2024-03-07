import Pomodoro from "./pages/Pomodoro";
import LongBreak from "./pages/LongBreak";
import ShortBreak from "./pages/ShortBreak";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/pomodoro" element={<Pomodoro />}></Route>
          <Route path="/shortbreak" element={<ShortBreak />}></Route>
          <Route path="/longbreak" element={<LongBreak />}></Route>
        </Routes>
      </div>
    </>
  );
}
