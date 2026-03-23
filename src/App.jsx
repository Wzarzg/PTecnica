import Header from "./sections/Header"
import Countries from "./pages/Countries"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



const App =()=>(
<Router>
    <Header/>
    <main className="pt-20"></main>
      <Routes>
        <Route path="/"element={<Countries/>}></Route>
      </Routes>
</Router>
)
export default App;
