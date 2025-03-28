export function Appimage() {
  return (
    <div className="appimage w-full h-screen sm:h-[50vh] md:h-[80vh] lg:h-screen overflow-hidden px-0">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w-full h-full bg-center bg-no-repeat bg-cover sm:bg-contain"
        style={{
          backgroundImage:
            'url("https://cdn.dribbble.com/userupload/12558687/file/original-70e8ce05a8cb30fca6f09ea599aa489a.png?resize=1600x1200&vertical=center")',
        }}
      ></div>
    </div>
  );
}

export default Appimage;
