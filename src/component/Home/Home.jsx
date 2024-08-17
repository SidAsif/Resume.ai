const Home = () => {
  return (
    <div className="relative bg-[#FAFBFD] min-h-screen flex items-center justify-center">
      {/* Left Semicircle */}
      <div className="absolute top-3 left-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-r-full"></div>

      {/* Right Semicircle */}
      <div className="absolute bottom-5 right-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-l-full"></div>

      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl mx-auto max-w-[1100px] pb-5">
          Create an AI-Powered Resume for Success
        </h1>
        <p className="text-lg mb-6 mx-auto max-w-[700px]">
          Resume.ai is the ultimate AI-powered resume and cover letter creating
          tool. Our advanced algorithms generate ATS-friendly resumes and cover
          letters, helping you stand out and land your dream job.
        </p>
        <button className="bg-[#673AB7] text-white px-6 py-3 rounded-xl text-lg md:text-xl font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
