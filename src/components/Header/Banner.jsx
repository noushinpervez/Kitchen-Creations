const Banner = () => {
    return (
        <div className="bg-banner-bg bg-cover bg-center rounded-3xl hero min-h-screen">
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-[70%] w-11/12">
                    <h1 className="mb-2 lg:mb-6 text-2xl lg:text-5xl font-bold lg:leading-[76px]">Discover the Joy of Cooking with Our Flavorful Recipe Selection</h1>
                    <p className="mb-5 lg:mb-10 text-sm lg:text-lg lg:leading-8">A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Kitchen Creations dining experience with our recipes.</p>
                    <div className="flex gap-2 lg:gap-6 justify-center">
                        <button className="btn glass bg-buttonColor rounded-full hover:border-none hover:text-white hover:ring-buttonColor hover:ring-2 font-semibold lg:text-xl px-4 lg:px-8 lg:py-5 h-full transition-all duration-300 ease-in hover:bg-transparent">Explore Now</button>
                        <button className="btn glass bg-transparent rounded-full hover:border-none font-semibold lg:text-xl px-4 lg:px-8 lg:py-5 h-full text-neutral-50 border-solid border hover:bg-buttonColor hover:ring-white hover:ring-2 transition-all duration-300 ease-in hover:text-textColor">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;