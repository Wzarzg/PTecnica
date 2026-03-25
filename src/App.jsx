import Header from "./sections/Header"
import Countries from "./pages/Countries"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountryDetail from "./pages/CountryDetail";


//<Route path="/:name"element={<CountryDetail/>} />
const App =()=>(
  <div className="min-h-screen bg-emerald-50">
  <Router>
      <Header/>
      <main className="pt-22"></main>
        <Routes>
          <Route path="/"element={<Countries/>}></Route>
          <Route path="/:name"element={<CountryDetail></CountryDetail>}></Route>
        </Routes>
  </Router>
  </div>
)
export default App;
