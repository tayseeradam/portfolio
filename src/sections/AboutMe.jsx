// import arrow from "../assets/arrow.svg";
const AboutMe = () => {
  return (
    <main
      id="aboutMe"
      className="h-screen bg-slate-200 flex flex-col items-center justify-center z-0">
      <div className="max-w-5xl mx-auto space-y-4 flex flex-col justify-center items-center h-[80%] bg-white rounded-[20px]  px-10 relative">
        <div className="text-gray-800 absolute w-[100px] h-[100px] -top-[40px] right-0 "><svg
            className="image-with-text__title-arrow image-with-text__title-arrow--green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 90"
            fill="none"
          >
            <path
              d="M1.18379 3.88222C0.416608 4.19482 0.0480954 5.07016 0.360697 5.83734C0.673299 6.60453 1.54864 6.97304 2.31582 6.66044L1.18379 3.88222ZM47.4992 33.5936L46.0077 33.753L47.4992 33.5936ZM77.8443 88.5532C78.2997 89.2453 79.2298 89.4372 79.9219 88.9819L91.2 81.5621C91.8921 81.1067 92.084 80.1766 91.6287 79.4845C91.1734 78.7924 90.2432 78.6005 89.5512 79.0558L79.5262 85.6512L72.9308 75.6262C72.4754 74.9341 71.5453 74.7422 70.8532 75.1975C70.1611 75.6528 69.9692 76.583 70.4245 77.2751L77.8443 88.5532ZM2.31582 6.66044C8.94281 3.96017 19.0179 2.1508 27.7992 5.25982C32.1556 6.80222 36.2142 9.55927 39.4256 14.0675C42.6455 18.5876 45.0666 24.9434 46.0077 33.753L48.9908 33.4343C48.0087 24.242 45.4555 17.3616 41.8691 12.327C38.2743 7.28059 33.6947 4.16465 28.8004 2.43184C19.0804 -1.00957 8.20396 1.02173 1.18379 3.88222L2.31582 6.66044ZM46.0077 33.753C47.1817 44.7417 44.9127 52.0845 41.3487 56.5918C37.7909 61.0914 32.8116 62.9395 28.1492 62.7285C23.4533 62.5159 19.1873 60.2276 16.9868 56.5735C14.828 52.9885 14.4743 47.7719 18.2208 41.2715L15.6216 39.7735C11.459 46.9959 11.574 53.4002 14.4168 58.1211C17.218 62.7728 22.4867 65.4753 28.0136 65.7254C33.5739 65.977 39.5056 63.7596 43.702 58.4525C47.8923 53.153 50.2208 44.9479 48.9908 33.4343L46.0077 33.753ZM18.2208 41.2715C21.8968 34.8933 27.8974 31.6654 34.8102 31.1171C41.7665 30.5653 49.6487 32.7394 56.8299 37.2428C71.1693 46.2353 82.3991 64.306 77.6284 87.4256L80.5665 88.0319C85.6243 63.521 73.6751 44.2657 58.4237 34.7013C50.8095 29.9262 42.2935 27.5141 34.573 28.1265C26.8091 28.7423 19.8546 32.4289 15.6216 39.7735L18.2208 41.2715Z"
              fill="currentColor"
            ></path>
          </svg></div>
        {/* <img src={arrow} alt="" className="absolute w-[100px] h-[100px] -top-[40px] right-0" /> */}
        <h1 className="font-bold text-[3vw] text-gray-700">About Me</h1>
        <p className="text-justify text-[1.7vw] hi">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          distinctio, epudiandae vitae pariatur cum blanditiis ad consectetur?
          Delectus blanditiis ratione ex sint quod dolore culpa, amet voluptatem
          cumque dolorem cupiditate? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae quod possimus dolor. Consequatur,
          blanditiis, magnam aliquam ut numquam dolorum ab consequuntur corporis
          laudantium dolor aspernatur rem minima totam labore sint. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Amet possimus, fugiat
          necessitatibus magni beatae culpa molestias quae nisi est consequatur
          repellat consectetur nesciunt vitae sapiente, quis eius praesentium
          accusamus. Possimus?
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
