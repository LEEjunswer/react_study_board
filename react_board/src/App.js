import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Board from './pages/Board';
import ThemeProvider from "./providers/ThemeProvider";
import CreateBoard from "./pages/CreateBoard";
import User from "./pages/User";
function App() {
  return (
<>
  <ThemeProvider>
  <Routes>
  <Route path={"/"} element={<Home />}/>
  <Route path={"/type/:id"} element={<Board />} />
  <Route path={"/createUser"} element={<User />}/>
  <Route path={"/createBoard"} element={<CreateBoard />}/>
  </Routes>
  </ThemeProvider>
  </>
  );
}

export default App;
