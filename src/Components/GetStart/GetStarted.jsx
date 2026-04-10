
const GEtStarted = () => {

    return (
        <>
            <div className="bg-base-200">
                <div className="py-15 w-[80%] mx-auto text-center space-y-5">
                    <h3 className="text-4xl font-bold">Get Started in 3 Steps</h3>
                    <p>Start using premium digital tools in minutes, not hours.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">

                        <div class="card card-border bg-base-100 w-90 shadow p-3">
                            <div class="card-body space-y-5">
                                <span className="flex justify-end">
                                    <div className="w-8 h-8 justify-center flex items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">
                                        01
                                    </div>
                                </span>
                                <span className="mx-auto w-20 h-20 p-3 rounded-full bg-violet-300">
                                    <img src={"../src/assets/user.png"} alt="" />
                                </span>
                                <span className="flex flex-col items-center text-center space-y-2">
                                    <h2 class="card-title">Create Account</h2>
                                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                                </span> 
                            </div>
                        </div>
                        <div class="card card-border bg-base-100 w-90 shadow p-3">
                            <div class="card-body space-y-5">
                                <span className="flex justify-end">
                                    <div className="w-8 h-8 justify-center flex items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">
                                        02
                                    </div>
                                </span>
                                <span className="mx-auto w-20 h-20 p-3 rounded-full bg-violet-300">
                                    <img src={"../src/assets/package.png"}/>
                                </span>
                                <span className="flex flex-col items-center text-center space-y-2">
                                    <h2 class="card-title">Choose Products</h2>
                                    <p>Browse our catalog and select the tools that fit your needs.</p>
                                </span> 
                            </div>
                        </div>
                        <div>
                        
                            <div class="card card-border bg-base-100 w-90 shadow p-3">
                                <div class="card-body space-y-5">
                                    <span className="flex justify-end">
                                        <div className="w-8 h-8 justify-center flex items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">
                                            03
                                        </div>
                                    </span>
                                    <span className="mx-auto w-20 h-20 p-3 rounded-full bg-violet-300">
                                        <img src={"../src/assets/rocket.png"}/>
                                    </span>
                                    <span className="flex flex-col items-center text-center space-y-2">
                                        <h2 class="card-title">Start Creating</h2>
                                        <p>Download and start using your premium tools immediately.</p>
                                    </span> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default GEtStarted;