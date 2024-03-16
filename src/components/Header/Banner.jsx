const Banner = () => {
    return (
        <div className="bg-banner-bg bg-cover bg-center rounded-3xl hero min-h-screen">
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[70%]">
                    <h1 className="mb-6 text-5xl font-bold leading-[76px]">Discover the Joy of Cooking with Our Flavorful Recipe Selection</h1>
                    <p className="mb-10 text-lg leading-8">A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Kitchen Creations dining experience with our recipes.</p>
                    <div className="flex gap-6 justify-center">
                        <button className="btn glass bg-buttonColor rounded-full hover:border-none hover:text-white hover:ring-buttonColor hover:ring-2 font-semibold text-xl px-8 py-5 h-full transition-all duration-300 ease-in hover:bg-transparent">Explore Now</button>
                        <button className="btn glass bg-transparent rounded-full hover:border-none font-semibold text-xl px-8 py-5 h-full text-neutral-50 border-solid border hover:bg-buttonColor hover:ring-white hover:ring-2 transition-all duration-300 ease-in hover:text-textColor">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;