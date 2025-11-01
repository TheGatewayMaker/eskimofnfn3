export const DownloadApp = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="scroll-fade-in text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Our Official App
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Get instant access to all Eskimo features on your phone. Manage
              your eSIM, track your data, and enjoy seamless global connectivity
              with our intuitive mobile app.
            </p>

            <div className="space-y-4">
              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/us/app/eskimo-esim-travel-internet/id1590276868"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/dJQX5Cvs/appstore.png"
                  alt="Download on App Store"
                  className="h-14 w-auto"
                />
              </a>

              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=travel.eskimo.esim&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/F4VKNmcC/playstore.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </div>

            <p className="text-sm text-blue-200 mt-8">
              Available for iOS and Android. Download now and get 500MB free
              data on signup.
            </p>
          </div>

          {/* Right side - Phone Image */}
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
