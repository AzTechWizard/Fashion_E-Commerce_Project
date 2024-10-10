import { Playfair_Display, Roboto, Poppins } from "next/font/google";
import Image from "next/image";


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

function DesignerClothes(){

    const products = [
        {
            id: 1,
            name: 'Accessories',
            imageUrl: '/des1pic.png',
            des: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
        },

        {
            id: 2,
            name: 'Dresses',
            imageUrl: '/designer2.png',
            des: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
        },

        {
            id: 3,
            name: 'Outerwear',
            imageUrl: '/designer3.png',
            des: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
        },
    ]

    return(
        <section className={` ${playfair.variable} ${roboto.variable} py-8 px-16`}>
            <div>
                <h2 className="text-6xl font-bold text-center my-4 text-green-900" style={{ fontFamily: 'var(--font-playfair)' }}>Designer Clothes For You</h2>
                <p className="text-2xl font-medium text-center text-green-900 my-12" style={{fontFamily: 'var(--font-roboto' }}>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        products.map((product)=>(
                            <div key={product.id} className={` ${poppins.variable} p-6 bg-white rounded-lg shadow-md `} >
                                <Image src={product.imageUrl} alt={product.name} width={430} height={566} className="rounded-md bg-customGreen"/>
                                <h3 className="text-2xl text-slate-800 font-semibold mt-4 text-center py-4" style={{fontFamily: 'var(--font-poppins)'}}>{product.name}</h3>
                                <p className="text-slate-700 text-xl font-medium text-center"style={{fontFamily: 'var(--font-roboto)'}}>{product.des}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default DesignerClothes;