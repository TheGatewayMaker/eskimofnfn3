export const DownloadApp = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="scroll-fade-in text-white">
            <img
              src="https://i.ibb.co/d4z3607G/eskimologo.png"
              alt="Eskimo Logo"
              className="w-20 h-20 mb-6"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 tracking-tight">
              Download Our Official App
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed font-medium">
              Get instant access to all Eskimo features on your phone. Manage
              your eSIM, track your data, and enjoy seamless global connectivity
              with our intuitive mobile app.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
              <a
                href="https://apps.apple.com/us/app/eskimo-esim-travel-internet/id1590276868"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <img
                  src="https://i.ibb.co/dJQX5Cvs/appstore.png"
                  alt="Download on App Store"
                  className="h-16 w-auto transition-all duration-300"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=travel.eskimo.esim&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <img
                  src="https://i.ibb.co/F4VKNmcC/playstore.png"
                  alt="Get it on Google Play"
                  className="h-16 w-auto transition-all duration-300"
                />
              </a>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-blue-200 mt-8 sm:mt-10 font-medium">
              Available for iOS and Android. Download now and get 500MB free
              data on signup.
            </p>
          </div>

          <div
            className="scroll-fade-in flex justify-center"
            style={{ animationDelay: "100ms" }}
          >
            <img
              src="https://www.eskimo.travel/_next/static/media/bg-home-page-phone.7d9b7e62.png"
              alt="Eskimo App"
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
