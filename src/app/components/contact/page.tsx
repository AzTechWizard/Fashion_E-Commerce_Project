import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '600'],
});

function Footer() {
    return (
        <footer className={` ${playfair.variable} ${poppins.variable} bg-green-900 text-white px-16 pb-16 pt-20`}> 
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">

                <div>
                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Rivo</h2>
                    <p className="text-lg font-semibold mb-4">Social Media</p>
                    <div className="flex space-x-4">
                        <FaFacebookF className="text-2xl cursor-pointer hover:text-green-300" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-green-300" />
                        <FaInstagram className="text-2xl cursor-pointer hover:text-green-300" />
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-playfair)'}}>SHOP</h3>
                    <ul className="space-y-2 text-base">
                        <li>Products</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Releases</li>
                    </ul>
                </div>

               <div>
                    <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-playfair)'}}>COMPANY</h3>
                    <ul className="space-y-2 text-base">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>News</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-playfair)'}}>STAY UP TO DATE</h3>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow p-3 text-green-900 rounded-l focus:outline-none border-4 border-green-300"
                        />
                        <button className="bg-green-300 px-4 py-3 rounded-r-md text-green-900 font-semibold">SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-green-700 pt-6 flex justify-between">
                <div className="flex space-x-8 text-lg font-bold">
                    <a href="#" className="hover:text-green-300">Terms</a>
                    <a href="#" className="hover:text-green-300">Privacy</a>
                    <a href="#" className="hover:text-green-300">Cookies</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;