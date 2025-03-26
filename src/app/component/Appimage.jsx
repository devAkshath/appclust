export function Appimage() {
    return (
      <div className="appimage w-full h-screen overflow-hidden px-100">
        <div data-scroll data-scroll-section data-scroll-speed=".0"
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://cdn.dribbble.com/userupload/12558687/file/original-70e8ce05a8cb30fca6f09ea599aa489a.png?resize=1600x1200&vertical=center")',
          }}
        ></div>
      </div>
    );
  }
  
  export default Appimage;
  