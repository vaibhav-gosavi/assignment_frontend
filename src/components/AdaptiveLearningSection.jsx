const AdaptiveLearningSection = () => {
  return (
    <section className="py-6 md:py-10 px-4 md:px-10 text-center min-h-[80vh] md:min-h-[100vh] flex flex-col justify-center items-center bg-[#06286E] text-white">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 relative">
        See {/* SVG Underline */}
        <span
          className="relative text-[#5189FC] font-bold"
          style={{
            backgroundImage: `url("/underline_brush.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 10px",
            backgroundPosition: "0 calc(100% + 5px)",
          }}
        >
          Adaptive Learning
        </span>{" "}
        in Action
      </h2>

      {/* Video Container */}
      <div className="w-full max-w-[1024px] bg-white rounded-[16px] relative p-4 md:p-8 flex flex-col items-center">
        {/* Browser Window Controls */}
        <div className="flex justify-start items-center space-x-2 absolute top-4 left-4 z-10">
          <div className="bg-[#E11D48] rounded-full h-[6px] w-[6px] md:h-[8px] md:w-[8px]"></div>
          <div className="bg-[#FBBF24] rounded-full h-[6px] w-[6px] md:h-[8px] md:w-[8px]"></div>
          <div className="bg-[#22C55E] rounded-full h-[6px] w-[6px] md:h-[8px] md:w-[8px]"></div>
        </div>

        {/* Responsive Video Iframe */}
        <div className="relative pt-[56.25%] w-full">
          {/* 16:9 Aspect Ratio Box */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-[8px]"
            src="https://www.youtube.com/embed/88NJP9j-qNo?list=PLgyJAK8noDUG81VJAP38cF9GVRVKLipmZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveLearningSection;
