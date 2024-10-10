import { Playfair_Display, Roboto, Poppins } from "next/font/google";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ['400','500'],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ['400','600'],
});


function BestSelling(){

    const products = [
        {
            id : 1,
            name : "Regular Fit Long Sleeve Top",
            price : '$38.99',
            rating: '5.0',
            imageUrl: '/pic1.png',
            highlight : '',
        },

        {
            id : 2,
            name : "Black Crop Tailored Jacket",
            price : '$62.99',
            rating: '4.9',
            imageUrl: '/pic2.png',
            highlight : '',
        },

        {
            id: 3,
            name: 'Textured Sunset Shirt',
            price: '$49.99',
            rating: '5.0',
            imageUrl: '/pic3.png',
            highlight : '',
        },
    ];

    return(
        <section className={` ${playfair.variable} ${roboto.variable} py-8 px-16`}>
            <h2 className="text-7xl font-bold text-center my-4 text-green-900" style={{ fontFamily: 'var(--font-playfair)' }}>Best selling</h2>
            <p className="text-4xl text-center text-green-900 my-12" style={{fontFamily: 'var(--font-roboto' }}>Get in on the trend with our curated selection of best-selling styles.</p>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                    products.map((product)=>(
                        <div key={product.id} className={` ${poppins.variable} p-6 bg-white rounded-lg shadow-md ${product.highlight ? 'border-4 border-blue-500' : ''}`} >  
                            <Image src={product.imageUrl} alt={product.name} width={430} height={566} className="rounded-md bg-customGreen"/>
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
            <div className="flex justify-center mt-12">
                <button className="font-semibold text-xl px-10 py-3 border-2 border-green-900 text-green-900 rounded hover:bg-green-900 hover:text-white transition duration-300 flex items-center gap-2">See all <GoArrowRight className="text-2xl" /></button>
            </div>
        </section>
    )
}

export default BestSelling;