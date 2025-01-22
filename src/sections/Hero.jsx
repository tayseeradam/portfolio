import profileImg from '../assets/profile.jpg'
import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <main id="home" className="bg-gray-100 main ">
      <div className="max-w-5xl mx-auto w-[100%]  flex  items-center h-screen gap-10">
        <div className="w-3/5 space-y-8 ">
          <h1 className="font-bold text-4xl text-gray-700 ">Hi I&apos;m Mona</h1>
          <p className="text-justify text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sint
            non illo recusandae alias velit. Perferendis, magnam ex error
            numquam animi autem? Tenetur, ipsa qui! Eius saepe corporis eaque
            dolorem!
          </p>
          <Button
            btnText="Hire Me"
            // style={{color:`${ linear-gradient()}`}}
            className="bg-gray-600 text-[18px] text-white
         py-4 px-12 rounded-full hover:bg-gray-500 
         focus:ring-[2px] focus:ring-gray-600 focus:ring-offset-2 outline-none"
          />
        </div>
        <div className="w-2/5 flex justify-center">
          <img
            src={profileImg}
            alt="Profile Image"
            className="w-[200px] h-[200px] object-cover object-top rounded-full"
          />
        </div>
      </div>
    </main>
  ); 
};

export default Hero;
