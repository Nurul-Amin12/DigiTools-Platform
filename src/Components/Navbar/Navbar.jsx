

const Navbar = ({carts}) => {

    return (
    <>    
        <div className="navbar w-[80%] mx-auto flex justify-between">
            <div className="flex items-start">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Product</a></li>
                            <li><a>Feature</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-3xl">
                    <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</p>
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal lg:gap-3 px-1 text-lg">
                <li>
                    <a>Products</a>
                </li>
                <li>
                    <a>Features</a>
                </li>
                <li>
                    <a>Pricing</a>
                </li>
                <li>
                    <a>Testimonial</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
                </ul>
            </div>
            
            <div className="navbar-end gap-1">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        { carts.length === 0 ? '' : <span class="badge badge-sm indicator-item bg-red-600 w-5 h-5 rounded-full p-1">{carts.length}</span>}
                    </div>
                </div>
                <a className="btn rounded-full">Login</a>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
        <div className="border border-gray-100"> </div>
    </>
  );
}

export default Navbar;