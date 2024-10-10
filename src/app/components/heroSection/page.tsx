import Image from "next/image";
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({
    subsets : ['latin'],
    variable: '--font-playfair',

})

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
})

function HeroSection(){
    return(
        <section className={`${playfair.variable} ${lora.variable} flex flex-col lg:flex-row items-center justify-center lg:justify-between px-32 py-16 bg-green-200 rounded-lg`}>
            <div className="max-w-lg mb-8 lg:mb-0 lg:w-1/2 ">
                <h1 className=" text-7xl font-bold mb-4 text-green-900 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Discover and Find Your Own Fashion!</h1>
                <p className="text-2xl my-14 text-green-700" style={{fontFamily: 'var(--font-lora)'}}>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                <button className="px-16 py-6 bg-green-900 text-2xl text-white rounded-md hover:bg-green-700 transition">EXPLORE NOW</button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <Image src='/hero.png' alt='Img' width={570} height={717} className="rounded-lg shadow-lg"/>
            </div>
        </section>
    )
}

export default HeroSection;