const KeyFeatures = () => {
  return (
    <div className="flex flex-wrap justify-between p-6 mx-auto max-w-screen-xl py-10 ">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Why Choose Resume.ai ?</h2>
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-[#673AB7] hover:underline">
            Expertly-crafted Templates
          </a>
          <a href="#" className="text-[#673AB7] hover:underline">
            Personalized Recommendations
          </a>
          <a href="#" className="text-[#673AB7] hover:underline">
            Comprehensive Feedback
          </a>
          <a href="#" className="text-[#673AB7] hover:underline">
            Affordable Pricing
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">
          Key Features <br />{" "}
          <span className="text-[#673AB7]">Crafted By Experts</span>
        </h2>
        <p className="mb-4  max-w-[500px] text-gray-600 ">
          Our team of resume experts and career coaches has designed templates
          and tools to help you create a resume that stands out.
        </p>
        <p className="mb-4 max-w-[500px] text-gray-600">
          Our AI analyzes job descriptions and provides personalized suggestions
          to optimize your resume for the role.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-[#673AB7] hover:underline">
            Resume Builder
          </a>
          <a href="#" className="text-[#673AB7] hover:underline">
            Cover Letter Builder
          </a>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
