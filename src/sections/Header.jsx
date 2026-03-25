import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-blue-900 shadow-md ">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

      <div className="flex items-center gap-3">
      <Link to="/">
        <img
          className="h-10"
          src="https://diana1874.wordpress.com/wp-content/uploads/2014/06/mundito.png"
          alt="logo mundito"/>
      </Link>
      <span className="text-white font-bold text-xl">Paises prueba</span>
      </div>


      <nav>
        <ul className="flex gap-6 text-lg font-semibold">
            <li><NavLink to="/" className={({isActive})=> isActive?"text-emerald-200":"text-white"}>Inicio</NavLink></li>
            {/*<li><NavLink to="/extra" className={({isActive})=> isActive?"text-green-500":"text-white hover:text-green-200"}>Extra</NavLink></li>*/}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;
