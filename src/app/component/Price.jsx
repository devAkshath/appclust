import React from "react";
import { Public_Sans } from "next/font/google";

const publicSans  = Public_Sans({ subsets: ["latin"], weight: ["700"] });
const publicSans400  = Public_Sans({ subsets: ["latin"], weight: ["400"] });
const publicSans200  = Public_Sans({ subsets: ["latin"], weight: ["200"] });


const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Best for learning how to use Bubble",
      features: [
        "Development version",
        "API connector",
        "Component library",
        "1 app editor",
        "50k workload units/mo",
        "6 hours of server logs",
      ],
      buttonText: "Try Free",
    },
    {
      name: "Starter",
      price: "₹29",
      description: "Best for launching your app and testing",
      features: [
        "Live app",
        "Custom domain",
        "Recurring workflows",
        "Basic version control",
        "175k workload units/mo",
        "2 days of server logs",
      ],
      buttonText: "Start a free trial",
    },
    {
      name: "Growth",
      price: "₹119",
      description: "Best for growing your user base",
      features: [
        "2 app editors",
        "Premium version control",
        "Two-factor authentication",
        "10 custom branches",
        "250k workload units/mo",
        "14 days of server logs",
      ],
      buttonText: "Get started",
      recommended: true,
    },
    {
      name: "Team",
      price: "₹349",
      description: "Best for scaling your team and business",
      features: [
        "5 app editors",
        "Sub apps",
        "25 custom branches",
        "500k workload units/mo",
        "20 days of server logs",
      ],
      buttonText: "Get started",
    },
  ];

  return (
    <div
    className={`bg-[#ffffff] w-full py-16 ${publicSans200.className} `}
    data-scroll
    data-scroll-section
    data-scroll-speed="-0.003"
  >
  
      <div className="flex flex-col items-center px-6">
        <h2 className={`text-5xl font-bold mb-10 text-gray-900 py-6 ${publicSans.className}`}>Pricing Plans</h2>
        
        {/* Centered pricing cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="max-w-[300px] w-full p-8 border-2 border-blue-200  bg-white rounded-3xl shadow-xl cursor-pointer transition-all duration-300 group hover:bg-[#D3EFFD] hover:shadow-2xl hover:shadow-blue-500/70 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <h3 className={`text-2xl font-semibold text-gray-800 py-3 group-hover:text-gray-800 mb-3 ${publicSans200.className}}`}>
                {plan.name}
              </h3>

              <span className="block text-5xl font-bold text-gray-800 group-hover:text-gray-800 mb-3">
                {plan.price}
              </span>

              <span className="block text-gray-600 font-medium group-hover:text-gray-800 mb-6">
                {plan.description}
              </span>

              <a
                className="relative group inline-block w-full py-3 px-6 text-center text-gray-800 bg-white font-semibold border border-blue-300 rounded-full overflow-hidden transition duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500"
                href="#"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300/90 via-blue-300/40 to-blue-800/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <p className="relative z-10">{plan.buttonText}</p>
              </a>

              <ul className="mt-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-4 text-gray-700 group-hover:text-gray-800">
                    <svg
                      className="w-6 h-6 fill-current text-green-500 group-hover:text-green-700"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
