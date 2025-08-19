import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ThemeProvider from "./providers/ThemeProvider";
function App() {
  return (
<>
  <ThemeProvider>
  <Routes>
  <Route path={"/"} element={<Home />}/>
  </Routes>
  </ThemeProvider>
  </>
  );
}

export default App;
