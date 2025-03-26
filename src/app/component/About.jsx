import React from "react";

function FeatureCard({ title, description, children }) {
  return (
    <div className="bg-transparent border border-gray-400 p-6 rounded-3xl w-full max-w-sm">
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-gray/50 mt-2">{description}</p>
      </div>
    </div>
  );
}
export default function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.00"
      className="w-full py-10 bg-transparent gap-8 mt-0 flex flex-wrap justify-center"
    >
      <FeatureCard
        title="Real-time Collaboration"
        description="Work together seamlessly with conflict-free team editing"
      >
        👥
      </FeatureCard>

      <FeatureCard
        title="Interactive Prototyping"
        description="Engage your clients with prototypes that react to user actions"
      >
        <div className="aspect-video flex items-center justify-center">
          <p className="text-4xl font-extrabold text-blue-300 text-center">
            We've achieved{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              incredible
            </span>{" "}
            growth this year
          </p>
        </div>
      </FeatureCard>

      <FeatureCard
        title="Keyboard Quick Actions"
        description="Powerful commands to help you create designs more quickly"
      >
        <div className="aspect-video flex items-center justify-center">
          <p className="text-4xl font-extrabold text-blue-300 text-center">
            We've achieved{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              incredible
            </span>{" "}
            growth this year
          </p>
        </div>
      </FeatureCard>
    </div>
  );
}
