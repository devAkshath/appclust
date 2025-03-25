export default function Footer() {
  return (
    <footer data-scroll data-scroll-section data-scroll-speed=".2" className="bg-white w-screen ">
      <div className="container mx-auto px-8 py-22 flex flex-wrap justify-between">
        {/* Product Section */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Website Templates",
              "Website Builder",
              "Website Design",
              "Wix Features",
              "App Market",
              "Web Hosting",
              "Domain Names",
              "Website Accessibility",
              "Mobile App Builder",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Online Store",
              "Online Booking",
              "Restaurant Website",
              "Blog Website",
              "Portfolio Website",
              "eCommerce Website",
              "Wix Studio",
              "Enterprise Solutions",
              "Student Website",
              "Professional Tools",
              "Logo Maker",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Learn Section */}
        <div>
          <h3 className="font-semibold mb-4">Learn</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Wix Blog",
              "Privacy and Security Hub",
              "SEO Learning Hub",
              "Wix Encyclopedia",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Help Center",
              "Hire a Professional",
              "Report Abuse",
              "System Status",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Press & Media",
              "Investor Relations",
              "Capital",
              "Accessibility Statement",
              "Patent Notice",
              "Sitemap",
              "Careers",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold mb-4">App Clust</h2>
          <p className="text-gray-600 mb-4">
            Appclust website builder offers a complete solution from
            enterprise-grade infrastructure to advanced SEO and marketing
            tools—enabling anyone to create and grow online.
          </p>
          <div className="space-y-2">
            <a href="#" className="block font-semibold">
              About
            </a>
            <a href="#" className="block font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-600">
            🔵
          </a>
          <a href="#" className="hover:text-gray-600">
            ▶️
          </a>
          <a href="#" className="hover:text-gray-600">
            📷
          </a>
          <a href="#" className="hover:text-gray-600">
            🎵
          </a>
          <a href="#" className="hover:text-gray-600">
            📌
          </a>
          <a href="#" className="hover:text-gray-600">
            ❌
          </a>
          <a href="#" className="hover:text-gray-600">
            🔗
          </a>
        </div>
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">
            Terms of Use
          </a>
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <p>© 2006-2025 Erratums.com, Inc</p>
        </div>
      </div>
    </footer>
  );
}
