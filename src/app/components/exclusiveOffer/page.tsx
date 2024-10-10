import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600'],
  });

function ExclusiveOffer(){
    return(
        <section className={` ${playfair.variable} ${poppins.variable} flex flex-col lg:flex-row items-center bg-green-100 rounded-lg px-12 mx-16 my-16`}>
            <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2 flex justify-center">
                <Image src='/offer.png' alt="offer_pic" width={482} height={596} className="rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
                <h2 className="text-6xl font-bold text-green-900 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>Exclusive offer</h2>
                <p className="text-3xl text-green-900 mb-8" style={{fontFamily: 'var(--poppins-lora)'}}>Unlock the ultimate style upgrade with our exclusive offer. 
                    Enjoy savings of up to 40% off on our latest <Link href='/new arrivals'className="hover:text-black hover:underline duration-300">New Arrivals</Link> .</p>
                <div className="flex justify-center lg:justify-start space-x-8 mb-8">
                    <Image src='/days.png' alt="days" width={150} height={150} />
                    <Image src='/hours.png' alt="hours" width={150} height={150} />
                    <Image src='/mins.png' alt="mins" width={150} height={150} />
                </div>
                <button className="px-16 py-5 bg-green-900 font-semibold text-xl text-white rounded hover:bg-green-700 transition">BUY NOW</button>
            </div>
        </section>
    )
}

export default ExclusiveOffer;