import React from "react";

function Featured() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full py-20 px=100 bg-[#BDDDFC]" >
      <div className="w-full px-20">
        <h1 className="text-7xl mb-10">Our Templates</h1>

        <div className="cards w-full flex gap-10 mt-10">
            

          {/* Left Container */}
          <div data-scroll data-scroll-section data-scroll-speed="-.004" className="card container relative w-1/2 h-[80vh] flex items-center justify-center overflow-hidden">
            <h1 className="absolute bg-transparent-500 text-amber-300 left-1/1 -translate-x-1/2 -translate-y-1/2 leading-none z-[9] text-9xl font-[Founders_Grotesk_x-Condensed]">
              Some
            </h1>
            <div className="card rounded-xl w-full h-full bg-red-500 overflow-hidden">
              <div className="rounded-xl w-full h-full scale-50">
                <img
                  className="w-full h-full object-cover"
                  src="https://pbc-webdev.com/wp-content/uploads/2024/04/pbc-webdev-user-profile-card.png"
                  alt="Template Preview"
                />
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div data-scroll data-scroll-section data-scroll-speed="-.004" className="card container relative w-1/2 h-[80vh] flex items-center justify-center overflow-hidden">
            <h1 className="absolute bg-blue-500 text-amber-300 right-1/1 translate-x-1/2 -translate-y-1/2 leading-none z-[9] text-9xl font-[Founders_Grotesk_x-Condensed]">
              Fame
            </h1>
            <div className="card rounded-xl w-full h-full bg-red-500 overflow-hidden">
              <div className="rounded-xl w-full h-full scale-50">
                <img
                  className="w-full h-full object-cover"
                  src="https://pbc-webdev.com/wp-content/uploads/2024/04/pbc-webdev-user-profile-card.png"
                  alt="Template Preview"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
