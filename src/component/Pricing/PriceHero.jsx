const PriceHero = () => {
  return (
    <div className="relative bg-[#FAFBFD] min-h-screen flex items-center justify-center">
      {/* Left Semicircle */}
      <div className="absolute top-3 left-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-r-full"></div>

      {/* Right Semicircle */}
      <div className="absolute bottom-5 right-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-l-full"></div>

      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl mx-auto max-w-[1100px] pb-5">
          Choose the Right Plan for Your Success
        </h1>
        <p className="text-lg mb-6 mx-auto max-w-[700px]">
          Whether you&apos;re just starting your job search or looking to
          advance your career, our plans provide the tools and resources you
          need to create standout resumes and cover letters.
        </p>
        <button className="bg-[#673AB7] text-white px-6 py-3 rounded-xl text-lg md:text-xl font-semibold">
          Choose Your Plan
        </button>
      </div>
    </div>
  );
};

export default PriceHero;
