/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";

const HeroSection = () => {
  const sentences = [
    <p className="text-[14px] font-[Roboto] font-medium leading-[16px] text-justify text-[rgba(81,137,252,0.8)]">
      Akash <span className="text-[#0F2669]"> has scored </span> 9/10{" "}
      <span className="text-[#0F2669]"> in self-awareness test </span> Just now
    </p>,
    <p className="text-[14px] font-[Roboto] font-medium leading-[16px] text-justify text-[rgba(81,137,252,0.8)]">
      250+ Students <span className="text-[#0F2669]"> have taken our </span> self-awareness test{" "}
      <span className="text-[#0F2669]"> in the last 24 Hours </span>
    </p>,
    <p className="text-[14px] font-[Roboto] font-medium leading-[16px] text-justify text-[rgba(81,137,252,0.8)]">
      1250 Students Reported <span className="text-[#0F2669]"> Improvement in their Grades with </span> HyggeX learning
    </p>,
    <p className="text-[14px] font-[Roboto] font-medium leading-[16px] text-justify text-[rgba(81,137,252,0.8)]">
      4235+ Students <span className="text-[#0F2669]"> take our Sectional Tests on a </span> weekly basis
    </p>,
    <p className="text-[14px] font-[Roboto] font-medium leading-[16px] text-justify text-[rgba(81,137,252,0.8)]">
      Akash <span className="text-[#0F2669]"> has scored </span> 9/10{" "}
      <span className="text-[#0F2669]"> in self-awareness test </span> Just now
    </p>,
  ];

  const [visibleSentence, setVisibleSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSentence((prev) => (prev + 1) % sentences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <section className="py-8 text-center h-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-16">
        <div className="flex flex-col items-start justify-around w-full md:w-1/2 h-auto">
          <div className="flex items-center gap-4 mb-4">
            {/* Icons and Text */}
            {["Students", "Teachers", "Parents"].map((role, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <img
                  src={`/${role.toLowerCase()}icon.png`}
                  alt={role}
                  className="w-5 h-5"
                />
                <span className="text-sm font-roboto text-[#0F2669]">{role}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-[36px] md:text-[48px] font-bold leading-tight text-left text-[#0F2669] font-[Poppins] mb-4">
            Beyond{" "}
            <span
              className="relative font-bold"
              style={{
                backgroundImage: `url("/blueline.svg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 10px',
                backgroundPosition: '0 100%',
              }}
            >
              Learning
            </span>
            , Becoming.
          </h1>

          {/* Paragraph */}
          <p className="text-justify text-[16px] md:text-[20px] font-[Roboto] font-medium mb-6 text-[rgba(15,38,105,0.8)]">
            Say goodbye to stressful study sessions. With HyggeX's AI-powered
            learning paths, you can improve your grades and well-being in less
            time, with less stress.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <button className="flex items-center justify-center w-full md:w-40 h-12 bg-[#407FFF] text-white font-[Poppins] rounded-lg shadow-md">
              Start Learning
              <span className="ml-2">&#x3e;</span>
            </button>
            <button className="flex items-center justify-center w-full md:w-40 h-12 bg-[rgba(64,127,255,0.2)] text-[rgba(81,137,252,0.8)] font-[Poppins] rounded-lg shadow-sm">
              Book a Demo
            </button>
          </div>

          {/* Dynamic Text */}
          <div className="relative w-full flex justify-start items-center h-16 overflow-hidden">
            {sentences.map((sentence, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-1000 ease-in-out ${
                  visibleSentence === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {sentence}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center w-full md:w-1/2 h-auto">
          <img src="/imagefront.png" alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#407FFF0A] p-2">
        <div className="text-left mb-4 md:mb-0 md:ml-20 md:w-[300px]  ">
          <p className="text-[#0F2669] font-bold font-roboto  ">
            Trusted by<br/>the best<p className="text-[#6B6B6B] font-bold">in the industry</p>
          </p>
        </div>
        <div className="flex  justify-center items-center gap-4 md:gap-12 w-full">
          {["razorpay", "startinup", "vishalakshi", "wadhwani", "microsoft", "startupindia"].map((partner, index) => (
            <img
              key={index}
              src={`/${partner}.png`}
              alt={partner}
              className="h-12 w-28 md:w-36 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
