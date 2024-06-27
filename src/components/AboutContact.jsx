const AboutContact = () => {
  return (
    <div className="border-2 w-full text-justify mx-10 mt-10 border-black rounded-lg flex flex-col justify-start ">
      <h2 className="text-2xl font-bold px-5 pt-5 text-[#DCC72E]">
        My Contact
      </h2>
      <p className="text-4xl font-bold px-5 pt-5 text-[#9A2EDC]">
        I would love to hear from you! You can reach me through the following
        ways:
      </p>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex gap-20 pt-8 justify-center items-center">
          <div id="mail">
            <a href="mailto:sutradharamit001@gmail.com">
              <img
                src="/contact/email1.jpeg"
                alt="email"
                width={60}
                height={60}
              />
            </a>
          </div>
          <div id="facebook">
            <a
              href="https://www.facebook.com/profile.php?id=100077445633356"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 193 193"
              >
                <rect width="193" height="193" fill="#1778f2" rx="96.5" />
                <path
                  fill="#fdfdfd"
                  d="M104.195 150.969v-51.655h17.339l2.6-20.131h-19.939V66.33c0-5.828 1.619-9.8 9.977-9.8h10.66v-18a142.87 142.87 0 0 0-15.534-.792c-15.37 0-25.892 9.381-25.892 26.61v14.835h-17.383v20.131h17.383v51.655h20.789Z"
                />
              </svg>
            </a>
          </div>
          <div id="github">
            <a href="https://github.com/AmitSutradhar001" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
                width={52}
                height={52}
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
            </a>
          </div>
          <div id="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              id="instagram"
              width="52"
              height="52"
            >
              <defs>
                <clipPath id="b">
                  <circle cx="64" cy="64" r="64" fill="none"></circle>
                </clipPath>
                <clipPath id="c">
                  <path
                    fill="none"
                    d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"
                  ></path>
                </clipPath>
                <clipPath id="e">
                  <circle cx="82" cy="209" r="5" fill="none"></circle>
                </clipPath>
                <clipPath id="g">
                  <path
                    fill="none"
                    d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"
                  ></path>
                </clipPath>
                <clipPath id="h">
                  <path
                    fill="none"
                    d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
                  ></path>
                </clipPath>
                <clipPath id="i">
                  <circle cx="82" cy="-117" r="5" fill="none"></circle>
                </clipPath>
                <radialGradient
                  id="a"
                  cx="27.5"
                  cy="121.5"
                  r="137.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffd676"></stop>
                  <stop offset=".25" stopColor="#f2a454"></stop>
                  <stop offset=".38" stopColor="#f05c3c"></stop>
                  <stop offset=".7" stopColor="#c22f86"></stop>
                  <stop offset=".96" stopColor="#6666ad"></stop>
                  <stop offset=".99" stopColor="#5c6cb2"></stop>
                </radialGradient>
                <radialGradient
                  id="d"
                  cx="27.5"
                  cy="-41.5"
                  r="148.5"
                  href="#a"
                ></radialGradient>
                <radialGradient
                  id="f"
                  cx="13.87"
                  cy="303.38"
                  r="185.63"
                  href="#a"
                ></radialGradient>
                <radialGradient
                  id="j"
                  cx="13.87"
                  cy="-22.62"
                  r="185.63"
                  href="#a"
                ></radialGradient>
              </defs>
              <g clipPath="url(#b)">
                <circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)"></circle>
              </g>
              <g clipPath="url(#c)">
                <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
              </g>
              <g clipPath="url(#e)">
                <circle
                  cx="13.87"
                  cy="303.38"
                  r="185.63"
                  fill="url(#f)"
                ></circle>
              </g>
              <g clipPath="url(#g)">
                <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
              </g>
              <g clipPath="url(#h)">
                <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
              </g>
              <g clipPath="url(#i)">
                <circle
                  cx="13.87"
                  cy="-22.62"
                  r="185.63"
                  fill="url(#j)"
                ></circle>
              </g>
              <circle cx="82" cy="46" r="5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
              ></path>
              <rect
                width="64"
                height="64"
                x="32"
                y="32"
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="8"
                rx="12"
                ry="12"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="flex gap-20 pt-8 justify-center items-center">
          <div id="linkedin">
            <a
              href="https://www.linkedin.com/in/amit-sutradhar-103ab6293/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.87 28.87"
                width="52"
                height="52"
                id="linkedin"
                className="rounded-full"
              >
                <g>
                  <g>
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="#0b86ca"
                      rx="6.48"
                      ry="6.48"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div id="whhatsapp">
            <a
              href="https://wa.me/918768656335"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 1219.547 1225.016"
                id="whatsapp"
              >
                <path
                  fill="#E0E0E0"
                  d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                ></path>
                <linearGradient
                  id="a"
                  x1="609.77"
                  x2="609.77"
                  y1="1190.114"
                  y2="21.084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#20b038"></stop>
                  <stop offset="1" stopColor="#60d66a"></stop>
                </linearGradient>
                <path
                  fill="#50FB80"
                  d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                ></path>
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#D9D9D9"
                  d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
