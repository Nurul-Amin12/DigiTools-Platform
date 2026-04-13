import { useState } from "react";
import { toast } from "react-toastify";

const Cards = ({model, carts, setCarts}) => {
    const [isBuy, setISBuy] = useState(false);

    const handleBuy = () => {
        setISBuy(true);

        const isFound = carts.find(cart=> cart.id === model.id);

        if(isFound) {
            toast.error("Item already in Cart")
            return;
        }

        setCarts([...carts, model]);

        toast.success("Item added to Cart");
    }

    return (
    <>
        <div className="card w-88 hover:w-90 bg-base-200 shadow-md h-full mx-auto">
            <div className="card-body flex flex-col justify-between">
                
                <div>
                    <div className="flex justify-end">
                        { model.tag == 'New' && <span class="bg-[#dbfce7] text-[#0a883e] px-3 py-1 rounded-full">{model.tag}</span>}
                        { model.tag == 'Popular' && <span class="bg-[#e1e7ff] text-violet-600 px-3 py-1 rounded-full">{model.tag}</span>}
                        { model.tag == 'Best Seller' && <span class="bg-[#fef3c6] text-[#bb4d00] px-3 py-1 rounded-full">{model.tag}</span>}
                    </div>
                    <div className="w-10 bg-base-100 rounded-full shadow-lg"> <img className="w-10 h-10 rounded-full p-1.5" src={model.icon}/></div>
                </div>

                <div>
                    <div className="flex flex-col items-start space-y-2">
                        <h2 className="text-2xl font-bold">{model.name}</h2>
                        <p className="text-left">{model.description}</p>
                        <span className="text-[12] py-5"><span className="text-3xl font-bold">${model.price}</span>/{model.period}</span>
                    </div>
                    
                    <ul className="flex flex-col gap-2 text-xs items-start">
                        {model.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="size-4 me-2 inline-block text-green-500" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                </div>
                
                <div class="mt-6">
                    <button onClick={handleBuy} className= {`btn btn-block text-white rounded-full ${isBuy ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>
                        {isBuy ? "Added to Card" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>    
    </>    
    );
}

export default Cards;