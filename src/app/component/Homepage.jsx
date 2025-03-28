import About from "./About";

export default function Homepage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".15"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 pb-0 pt-20 md:pt-40 lg:pt-40 gap-0 sm:p-35 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#88BDF2] to-white w-full flex flex-col items-center text-center"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:flex-start w-full">
        <h1 className="text-8xl sm:text-6xl md:text-8xl font-bold font-[Libre_Baskerville] text-center">
          Build a{" "}
          <span className="font-[Montserrat] font-extrabold">Website</span>
          <br />
          Create Your Future
        </h1>

        <h1 className="text-2xl font-medium font-[Libre_Baskerville] text-center text-black-100 dark:text-black-100">
          IMS is a software system for tracking inventory levels, orders, sales
          and deliveries.
        </h1>
        <About />
      </main>
    </div>
  );
}
