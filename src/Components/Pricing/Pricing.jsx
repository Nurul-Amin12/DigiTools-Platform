
const Pricing = () => {

    return(
    <>
        <div className="py-15 w-[80%] mx-auto text-center space-y-3">
            <h3 className="text-4xl font-bold">Simple, Transparent Pricing</h3>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                <div className="card w-full max-w-sm bg-base-200 shadow-md h-full mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-2xl font-bold">Starter</h2>
                                <p>Perfect for getting started</p>
                                <span className="text-[12] py-5"><span className="text-3xl font-bold">$0</span>/Month</span>
                            </div>
                            
                            <ul className="flex flex-col gap-2 text-xs items-start">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community Support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div class="mt-6">
                            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-sm card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md h-full mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
                    <span className="badge badge-xs badge-warning absolute left-1/2 -translate-x-1/2 -translate-y-1/2">Most Popular</span>
            
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-2xl font-bold">Pro</h2>
                                <p>Best for professionals</p>
                                <span className="text-[12] py-5"><span className="text-3xl font-bold">$29</span>/Month</span>
                            </div>
                            
                            <ul className="flex flex-col gap-2 text-xs items-start">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority Support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advance analytics</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div class="mt-6">
                            <button className="btn btn-block text-white rounded-full"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>

                <div className="card w-full max-w-sm bg-base-200 shadow-md h-full mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-2xl font-bold">Enterprise</h2>
                                <p>For teams and businesses</p>
                                <span className="text-[10] py-5"><span className="text-3xl font-bold">$99</span>/Month</span>
                            </div>
                            
                            <ul className="flex flex-col gap-2 text-xs items-start">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated Support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                        <div class="mt-6">
                            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </>
    );
}

export default Pricing;