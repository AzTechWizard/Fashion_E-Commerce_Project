import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
});

function Navbar() {
  return (
    <nav className={`${poppins.variable} flex items-center justify-between px-6 py-4 bg-green-200 shadow-md`}>
      <div className="flex items-center">
        <Image src='/logo.png' alt="logo" width={120} height={120} />
      </div>
      <div className="lg:hidden flex items-center">
        <AiOutlineMenu className="text-green-700 text-3xl" />
      </div>
      <div className="hidden lg:flex lg:flex-grow lg:justify-center lg:items-center lg:space-x-12 text-xl"
           style={{ fontFamily: 'var(--font-poppins)' }}>
        <Link href="/" className="text-green-700 hover:text-green-900 duration-300 font-semibold">
          HOME
        </Link>
        <Link href="/shop" className="text-green-700 hover:text-green-900 duration-300 font-semibold">
          SHOP
        </Link>
        <Link href="/features" className="text-green-700 hover:text-green-900 duration-300 font-semibold">
          FEATURES
        </Link>
        <Link href="/contact" className="text-green-700 hover:text-green-900 duration-300 font-semibold">
          CONTACT
        </Link>
      </div>
      <div className="hidden lg:flex items-center space-x-6">
        <MdOutlineShoppingBag className="text-4xl text-green-600 hover:text-green-800 transition-colors" />
        <button className="px-6 py-2 border-2 border-green-700 rounded-md text-green-800 hover:text-green-800 font-medium text-lg">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;



