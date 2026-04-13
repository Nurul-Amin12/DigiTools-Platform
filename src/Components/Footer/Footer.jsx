import fbImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import xImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 w-[80%] mx-auto px-6">
        
        {/* Logo & Description */}
        <div className="">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              DigiTools
            </h2>
          </div>

          <p className="text-zinc-400 text-lg max-w-md">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>

        </div>

        <div className="grid grid-cols-4 gap-5">

          {/* Quick Links */}
          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integration
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contract
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <ul className="flex space-x-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={instagramImg} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={fbImg} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  <img src={xImg} />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="mt-16 w-[80%] mx-auto pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-red-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-red-400 transition">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;