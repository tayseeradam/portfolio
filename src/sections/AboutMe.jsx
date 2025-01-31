import arrow from "../assets/arrow.svg";
const AboutMe = () => {
  return (
    <main
      id="aboutMe"
      className="h-screen bg-slate-200 flex md:flex-col md:items-center md:justify-center z-0">
      <div className="md:max-w-5xl mx-auto space-y-4 flex flex-col justify-center items-center 
      h-[80%] bg-white rounded-[20px]  px-10 relative shadow-md">
        <div className="text-gray-800 absolute w-[100px] h-[100px] -top-[40px] right-0 "> <svg
            className="image-with-text__title-arrow image-with-text__title-arrow--green"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92 90"
            fill="none">
          </svg>
          </div>
        <img src={arrow} alt="" className="absolute w-[100px] h-[100px] -top-[40px] right-0" />
        <h1 className="font-bold text-[3vw] text-gray-700 font-serif">About Me</h1>
        <p className="text-justify text-[1.7vw] font-serif justify-center ">
        Hi, I’m Tayseer Suliman Ishag, a passionate software developer with a focus on full-stack development. 
        Over the past year, I’ve gained hands-on experience in several web development technologies, 
        including HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express, MongoDB, Mongoose, MySQL, Git, and GitHub. 
        I’m constantly learning and refining my skills to build efficient, dynamic, and user-friendly applications. 
         I’m excited to continue growing in the field and working on impactful projects. 
        I am always eager to learn and excited to take on new challenges in the world of software development.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
