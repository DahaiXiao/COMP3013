import Image from"next/image";
import Link from "next/link";
//import SiteNav from"./site-nav";


const Header =() =>{

    return(



<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
   <li><Link href="/">home | </Link></li> 
  <li><Link href="/blocks/new">create post | </Link></li>
   
    </ul>
  </div>
</div>



);



}

export default Header;