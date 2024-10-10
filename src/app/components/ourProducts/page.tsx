import Link from "next/link";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { Poppins, Playfair_Display } from "next/font/google";


const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600'],
  });

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

function OurProducts(){

    const products = [
        {
            id: 1,
            name: "Spread Collar Shirt",
            price: '$48.99',
            rating: '5.0',
            imageUrl: '/prod1.png',
            highlight : '',
        },

        {
            id: 2,
            name: "Tailored Jacket",
            price: '$46.00',
            rating: '4.9',
            imageUrl: '/prod7.png',
            highlight : '',
        },

        {
            id: 3,
            name: "Shine On Me Blouse",
            price: '$42.99',
            rating: '4.8',
            imageUrl: '/prod3.png',
            highlight : '',
        },

        {
            id: 4,
            name: "Gray Solid Padded Jacket",
            price: '$32.99',
            rating: '4.7',
            imageUrl: '/prod4.png',
            highlight : '',
        },

        {
            id: 5,
            name: "Printed Loose T-shirt",
            price: '$39.99',
            rating: '5.0',
            imageUrl: '/prod5.png',
            highlight : '',
        },

        {
            id: 6,
            name: "Summer Wind Crop Shirt",
            price: '$39.95',
            rating: '4.7',
            imageUrl: '/prod6.png',
            highlight : '',
        },

        {
            id: 7,
            name: "Tailored Jacket",
            price: '$46.00',
            rating: '4.9',
            imageUrl: '/prod7.png',
            highlight : '',
        },

        {
            id: 8,
            name: "Solid Round Neck T-shirt",
            price: '$36.00',
            rating: '5.0',
            imageUrl: '/prod8.png',
            highlight : '',
        },
    ];

    return(
        <section className={` ${poppins.variable} ${playfair.variable} py-8 px-16`}>
            <h2 className="text-7xl font-bold text-center my-4 text-green-900" style={{ fontFamily: 'var(--font-playfair)' }}>Our products</h2>
            <div className="flex-grow flex justify-center items-center space-x-12 text-2xl my-16" style={{ fontFamily: 'var(--font-poppins)' }}>
                <Link href='/sale' className="text-black hover:text-green-800 hover:underline duration-300">SALE</Link>
                <Link href='/hot' className="text-black hover:text-green-800 hover:underline duration-300">HOT</Link>
                <Link href='/new arrivals' className="text-black hover:text-green-800 hover:underline duration-300">NEW ARRIVALS</Link>
                <Link href='/accessories' className="text-black hover:text-green-800 hover:underline duration-300 ">ACCESSORIES</Link>
            </div>
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {
                    products.map((product)=>(
                        // <div key={product.id} className={` ${poppins.variable} p-6 bg-white hover:border-4 rounded-lg shadow-md ${product.highlight ? 'border-4 border-blue-500' : ''}`}>
                        <div key={product.id} className={` ${poppins.variable} p-6 bg-white rounded-lg shadow-md transition-transform duration-300 
                        ease-in-out transform hover:scale-105 hover:shadow-xl 
                        ${product.highlight ? 'border-4 border-blue-500' : 'hover:border-4 border-transparent'}`}>
                            <Image src={product.imageUrl} alt={product.name} width={318} height={378} className={`rounded-md  ${product.id == 8 ? 'bg-customLightGreen' : null} `} />
                            <h3 className="text-2xl font-semibold mt-4 text-center" style={{fontFamily: 'var(--font-poppins)'}}>{product.name}</h3>
                            <div className="flex items-center justify-evenly mt-2 font-semibold">
                                <span className="text-lg font-medium text-gray-900" style={{fontFamily: 'var(--font-poppins)'}}>{product.price}</span>
                                <div className="font-bold">|</div>
                                <div className="flex items-center">
                                    <span className="text-lg mr-1">{product.rating}</span>
                                    <MdStar className="text-yellow-500"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default OurProducts;