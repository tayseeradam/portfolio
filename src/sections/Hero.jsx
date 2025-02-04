// import profile from "../assets/profile.jpg";
// import Button from '../components/Button.jsx';

// const Hero = () => {
//   return (
//     <main id="home" className=" h-screen bg-gray-100 main  items-center flex justify-center gap-10">
//       <div className="max-w-5xl  mx-auto w-[100%] flex flex-col-reverse md:flex-row md:items-center h-screen gap-10">
//         <div className="w-3/5 space-y-8">
//           <h1 className="font-bold text-4xl text-gray-700 text-center">Hi I&apos;m Tayseer</h1>
//           <p className="text-justify text-2xl text-gray-500">
//           I&apos;m Tayseer, a passionate full-stack web developer 
//           skilled in both front-end and back-end technologies. 
//           I create responsive web applications using tools like React, 
//           Tailwind CSS, Node.js, Express, and databases like MongoDB and MySQL. 
//           I focus on delivering high-quality code and an excellent user experience, 
//           always striving to learn and improve. 
//           If seeking an innovative and dedicated developer, 
//           I&apos;m ready to collaborate!e!
//           </p>
//           <Button
//             btnText="Hire Me"
//             className="bg-gray-600 text-[18px] text-white py-4 px-12 rounded-full
//              hover:bg-gray-500 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 outline-none"
//           />
//         </div>
//         <div className="w-2/5 flex justify-center ">
//           <img
//             src={profile}
//             alt="profile"
//             className="w-[200px] h-[200px] object-cover object-top rounded-full rotate-3"
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Hero;




import Typewriter from 'typewriter-effect';
import profile from "../assets/profile.jpg";
import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <main id="home" className="h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row 
      md:items-center h-screen gap-10">
        <div className="w-full md:w-3/5 space-y-8 justify max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl 
           md:text-left font-serif text-slate">
            <Typewriter 
            options={{
              strings:[
                '<span style="color: black;">Hi, I&apos;m Tayseer</span>',
                '<span style="color:slate;">Hi,I&apos;m Tayseer</span>',
                ],
              autoStart:true,
              loop:true, 
              delay: 75,
            }}
            />

          </h1>
          <p className="text-justify  md:justify-center sm:text-xl md:text-2xl text-gray-700 font-serif">
            I&apos;m Tayseer, a passionate full-stack web developer skilled in both front-end and back-end technologies. 
            I create responsive web applications using tools like React, Tailwind CSS, Node.js, Express, and databases like MongoDB and MySQL. 
            I focus on delivering high-quality code and an excellent user experience, always striving to learn and improve. 
            If seeking an innovative and dedicated developer I&apos;m ready to collaborate!
          </p>
          <Button
            btnText="Hire Me"
            className="bg-gray-500 text-lg sm:text-xl text-white py-4 px-12 rounded-full font-serif
             hover:bg-gray-400 focus:ring focus:ring-gray-500 focus:ring-offset-2 outline-none"
          />
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <img
            src={profile}
            alt="profile"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]
            l shadow-[0_0_30px_rgba(139,139,139,0.5)] transition duration-300 ease-in-out
             md:w-[340px] md:h-[340px] object-cover object-top ml-10 rounded-full
              rotate-3 backdrop-blur-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;



