import { Link } from "react-router-dom";



const NavBar = () => {

    const navLinks = <>
    <li><Link className=" text-white" to='/'>Home</Link></li>
    <li><Link className=" text-white" to='/liveScore'>Live Score</Link></li>
    <li><Link className=" text-white" to='/schedule'>Schedule</Link></li>
    <li><Link className=" text-white" to='/archives'>Archives</Link></li>
    <li><Link className=" text-white" to='/news'>News</Link></li>
    <li><Link className=" text-white" to='/series'>Series</Link></li>
    <li><Link className=" text-white" to='/teams'>Teams</Link></li>
    <li><Link className=" text-white" to='/rankings'>Rankings</Link></li>
    <li><Link className=" text-white" to='/more'>More</Link></li>
    

    </>
    const navList = <>
    <li><Link className=" text-white" to='/'>Matches</Link></li>
    <li><Link className=" text-white" to='/liveScore'>Live Score</Link></li>
    <li><Link className=" text-white" to='/schedule'>Schedule</Link></li>
    <li><Link className=" text-white" to='/archives'>Archives</Link></li>
    <li><Link className=" text-white" to='/news'>News</Link></li>
    <li><Link className=" text-white" to='/series'>Series</Link></li>
    <li><Link className=" text-white" to='/teams'>Teams</Link></li>
    <li><Link className=" text-white" to='/rankings'>Rankings</Link></li>
    <li><Link className=" text-white" to='/more'>More</Link></li>
    

    </>
        
    return (
        <div className=" h-[18px] ">
          <div className="navbar bg-[#009270]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {navLinks}
      </ul>
    </div>
    <img className=" w-[90px]" src="https://static.cricbuzz.com/images/cb_logo.svg" alt="" />
    <a className="btn btn-ghost text-xl italic"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
      
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>

{/* second navbar */}

<div>
<div className="navbar bg-[#333333]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {navList}
      </ul>
    </div>
    
    <a className="btn btn-ghost text-xl italic"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navList}
      
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>
</div>
      </div>
    );
};

export default NavBar;