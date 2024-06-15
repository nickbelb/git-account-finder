import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import User from "./pages/User";


function App() {
  return (
  <main>
    <div className="container">
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/user' element={<User />}/>
          </Routes>
    </div>
  </main>
  );
}

export default App;
