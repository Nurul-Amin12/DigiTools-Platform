import { use } from "react";

const Model = ({modelPromise}) => {
    const models = use(modelPromise);
    // console.log(models);

    
    return (
    <>
        <div className="w-[80%] mx-auto py-15 text-center space-y-3">
            <h3 className="text-4xl font-bold">Premium Digital Tools</h3>
            <p>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>


            <div className="flex justify-center gap-2 mt-8 bg-base-200 w-41 rounded-full mx-auto">
                <button class="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Products</button>
                <button class="btn bg-base-200 rounded-full">Cart</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {models.map(model=> <div>
                        <div className="card w-88 bg-base-200 shadow-md h-full mx-auto">
                            <div className="card-body flex flex-col justify-between">
                                
                                <div>
                                    <div className="flex justify-end">
                                        { model.tag == 'New' && <span class="bg-[#dbfce7] text-[#0a883e] px-3 py-1 rounded-full">{model.tag}</span>}
                                        { model.tag == 'Popular' && <span class="bg-[#e1e7ff] text-violet-600 px-3 py-1 rounded-full">{model.tag}</span>}
                                        { model.tag == 'Best Seller' && <span class="bg-[#fef3c6] text-[#bb4d00] px-3 py-1 rounded-full">{model.tag}</span>}
                                    </div>
                                    <div className="w-10 bg-base-100 rounded-full shadow-2xl"><img className="w-full p-2" src={model.icon}/></div>
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
                                    <button class="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
                        
        </div>
    </>
    );
}

export default Model;