
const Cart = ({carts, setCarts}) => {
    
    const totalPrice = carts.reduce((sum,item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
    }

    const handleDelete = (item) => {
        const filterArray = carts.filter(cart => cart.id !== item.id);

        setCarts(filterArray);
    }
    
    return (
    <>
        <div className="card w-[80%] shadow mx-auto text-left p-5 space-y-5">
            
            <h2 className="font-bold">Your Cart</h2>

            {
                carts.length === 0 ? 
                    <>
                        <div className="text-2xl text-gray-400 p-10 text-center">
                            Cart is Empty...
                        </div>
                    </>
                :
                    <>
                        {
                            carts.map(cart => 
                                <div className="bg-base-200 rounded-2xl flex justify-between p-5 items-center">
                                    <div className="flex gap-5">
                                        <div className="bg-base-100 rounded-full shadow-2xl">
                                            <img className="w-full p-3" src={cart.icon} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold"> {cart.name} </h3>
                                            <p className="text-gray-500"> ${cart.price} </p>
                                        </div>
                                    </div>

                                    <button onClick={()=> handleDelete(cart)} className="btn text-red-500"> Remove </button>

                                </div>
                        )}  
                    </>
            }

                   

            <div className="flex justify-between p-5">
                <p>Total:</p>
                <h2 className="font-bold text-2xl">${totalPrice}</h2>
            </div>

            <button onClick={handlePayment} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-6"> Proceed To Checkout </button>



        </div>
    </>
    );
}

export default Cart;