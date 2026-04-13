import { use, useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";

const Model = ({modelPromise}) => {
    const models = use(modelPromise);
    
    const [activeTab, setActiveTab] = useState("Products")
    console.log(activeTab);


    return (
    <>
        <div className="w-[80%] mx-auto py-15 text-center space-y-5">
            <h3 className="text-4xl font-bold">Premium Digital Tools</h3>
            <p>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box bg-transparent justify-center">
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab rounded-full w-30" 
                    aria-label="Products"
                    onClick={() => setActiveTab("Products")} 
                    defaultChecked 
                />
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab rounded-full w-30" 
                    onClick={() => setActiveTab("Cart")}
                    aria-label="Cart" 
                />
            </div>
            
            { activeTab =='Products' ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                    {models.map(model=> <div key={model.id} >
                            <Cards model={model}/>
                        </div>
                    )}
                </div> 
                : null
            }

            { activeTab == 'Cart' ? <Cart/> : null }

        </div>
    </>
    );
}

export default Model;