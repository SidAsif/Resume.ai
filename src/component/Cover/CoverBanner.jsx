const CoverBanner = () => {
  return (
    <div className="bg-[#DBE2F2] ">
      <div className=" flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-12 py-14 space-y-6 md:space-y-0 space-x-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Cover Letter Generator"
            className="w-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Get Started Today!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Try our cover letter generator for free and enhance your job
            application process. It&apos;s quick and easy to use, allowing you
            to create a compelling cover letter in minutes!
          </p>
          <button className="bg-[#673AB7] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Build My Cover Letter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
