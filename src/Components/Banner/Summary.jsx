
const Summary = () => {
    return(
    <>
        <div className="mb-15 p-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="w-[80%] mx-auto text-white font-bold flex justify-between">
                <div className="px-7 space-y-1">
                    <h2 className="text-4xl">50k+</h2>
                    <p className="text-gray-300">Active Users</p>
                </div>

                <div className="border border-gray-300">  </div>
                
                <div className="px-7 space-y-1">
                    <h2 className="text-4xl">200k+</h2>
                    <p className="text-gray-300">Premium Tools</p>
                </div>
                
                <div className="border border-gray-300">  </div>
                
                <div className="px-7 space-y-1">
                    <h2 className="text-4xl">4.9</h2>
                    <p className="text-gray-300">Rating</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Summary;