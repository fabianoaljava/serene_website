import { AppConfig } from '@/utils/AppConfig';

const ContactInfo = () => (
  <section id="contact" className="bg-surfaceLow py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
        {/* Contacts */}
        <div>
          <div className="mb-5 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-onSurface"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect
                x="11.5"
                y="2.5"
                width="24"
                height="43"
                rx="1.5"
                fill="#fef1f1"
                stroke="currentColor"
              />
              <rect x="20" y="7" width="7" height="1" fill="currentColor" />
              <circle cx="23.5" cy="39.5" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <h6 className="font-500 mb-3 font-body text-lg tracking-wide">
            Contacts
          </h6>
          <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/60">
            T: {AppConfig.phone}
            <br />
            {AppConfig.email}
          </p>
        </div>

        {/* Hours */}
        <div>
          <div className="mb-5 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-onSurface"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24.5"
                cy="24.5"
                r="19"
                fill="#fef1f1"
                stroke="currentColor"
              />
              <path d="M24 12.5V25.5L30 31.5" stroke="currentColor" />
            </svg>
          </div>
          <h6 className="font-500 mb-3 font-body text-lg tracking-wide">
            Hours
          </h6>
          <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/60">
            {AppConfig.hours.map((line, i) => (
              <span key={i}>
                {line}
                {i < AppConfig.hours.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* Location */}
        <div>
          <div className="mb-5 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-onSurface"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M39.5 18.5C39.5 22.9 37.7 26.9 34.7 31.2C32.8 34 30.3 36.9 27.6 40.2C26.3 41.7 24.9 43.4 23.5 45.2C22.3 43.8 21.1 42.4 20 41C17 37.4 14.3 34.2 12.2 31.2C9.3 26.9 7.5 22.9 7.5 18.5C7.5 9.7 14.7 2.5 23.5 2.5C32.3 2.5 39.5 9.7 39.5 18.5Z"
                fill="#fef1f1"
                stroke="currentColor"
              />
              <circle
                cx="23.5"
                cy="17.5"
                r="6"
                fill="white"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="font-500 mb-3 font-body text-lg tracking-wide">
            Location
          </h6>
          <p className="font-300 font-body text-[15px] leading-relaxed text-onSurface/60">
            {AppConfig.address_line1}
            <br />
            {AppConfig.address_line2}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { ContactInfo };
