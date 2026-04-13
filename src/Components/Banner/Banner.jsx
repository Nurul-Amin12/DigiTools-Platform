import bannerImg from "../../assets/banner.png";
import circleImg from "../../assets/group-5.png";

const Banner = () => {
    return (
    <>
        <div className="grid md:grid-cols-2 w-[80%] mx-auto my-15 gap-20">

            <div className="flex items-center order-2 md:order-1">

                <div className="space-y-7">
                    <div className="flex gap-2 p-2 rounded-full items-center w-71 bg-[#e1e7ff]">
                    <span><img src= {circleImg} /></span>
                        <p>New: AI-Powered Tools Available</p>
                    </div>
                    <p className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</p>
                    <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                    <div className="flex  gap-2">
                        <button class="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Explore Products</button>
                        <button class="btn rounded-full border-violet-500"> 
                            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w5 h-5">
                                <defs>
                                    <linearGradient id="playGradient" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stopColor="#4F39F6" /> <stop offset="100%" stopColor="#9514FA" />
                                    </linearGradient>
                                </defs>
                                <path d="M8 5v14l11-7z" fill="none" stroke="url(#playGradient)" strokeWidth="2" />
                                </svg>
                                Watch Demo
                            </span>
                        </button>


                    </div>
                </div>

            </div>

            <div className="order-1 md:order-2">
                <img className="w-full" src={bannerImg}/>
            </div>

        </div>
    </>
    );
}

export default Banner;