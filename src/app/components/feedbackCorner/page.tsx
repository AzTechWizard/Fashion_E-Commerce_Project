
import { Playfair_Display, Poppins, Roboto } from "next/font/google";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ['400','600'],
});

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ['400','500'],
});

function FeedbackCorner(){

    const feedbacks = [
        {
            id: 1,
            name: "Emily Wilson",
            message: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied! ",
        },

        {
            id: 2,
            name: "Sarah Thompson",
            message: "I absolutely love the quality and style of the clothing I purchased from this website, customer service was outstanding, and I received my order quickly. Highly recommended!",
        },

        {
            id: 3,
            name: "Olivia Martinez",
            message: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
        },
    ];

    return (
        <section className={` ${playfair.variable} ${poppins.variable} ${roboto.variable} py-16 px-8`}>
            <h2 className="text-5xl font-bold text-center mb-16 text-green-900 pt-16" style={{ fontFamily: 'var(--font-playfair)' }}>Feedback Corner</h2>
            <div className="mx-4 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-16">
                {
                    feedbacks.map((feedback)=>(

                        <div 
                          key={feedback.id} 
                          className={`px-12 py-12 rounded-lg shadow-md transition-all duration-300 ${feedback.id === 2 ? 'bg-green-100' : 'bg-white'}`}
                        >
                            <div className="text-green-900 text-6xl">
                              “
                            </div>
                            <h3 className="text-3xl font-semibold text-green-900 text-left mb-2" style={{fontFamily: 'var(--font-playfair)'}}>{feedback.name}</h3><br />
                            <p className="text-gray-700 text-lg font-medium text-left" style={{fontFamily: 'var(--font-roboto)'}}>{feedback.message}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
                <button className="p-3 bg-white rounded-full shadow-md hover:bg-green-100 transition">
                    <AiOutlineLeft className="text-green-800 text-2xl" />
                </button>
                <button className="p-3 bg-white rounded-full shadow-md hover:bg-green-100 transition">
                    <AiOutlineRight className="text-green-800 text-2xl" />
                </button>
            </div>
        </section>
    )
}

export default FeedbackCorner;
