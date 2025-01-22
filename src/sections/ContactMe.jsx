import profile from '../assets/profile.jpg'
import {FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope} from 'react-icons/fa'
import Input from '../components/Input';
import Label from '../components/Label';
import Button from '../components/Button'

const ContactMe = () => {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center">
      <div id="contactMe" className="w-[70%] h-[90%]  bg-white flex justify-center items-center rounded-[30px] ">
        <div className="  w-full h-[100%] my-10 rounded-l-[30px] py-3 flex items-center flex-col justify-center space-y-4">
          <img className="w-[200px] h-[200px] object-cover rounded-[50%] justify-self-center" src={profile} alt="Photo" />
          <div className="flex flex-col items-center w-full rounded-bl-[30px] h-60">
              <p className="font-bold text-lg text-gray-800">Follow Me:</p>
             <div className="flex text-gray-600 py-2 space-x-2">
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center" title="Github" href="https://github.com/MonaJacob359" target="_blank"><FaGithub className=" text-2xl mx-2"/></a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center" title="Linkedin" href="" target="_blank"><FaLinkedin  className=" text-2xl mx-2 " /> </a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center" title="Facebook" href="" target="_blank"><FaFacebook  className=" text-2xl mx-2"/> </a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center" title="Instagram" href="" target="_blank"><FaInstagram className=" text-2xl mx-2 "/></a>
            </div>
            <div className="p-3 space-y-1 flex flex-col justify-center ">
            <p className="font-bold text-lg text-gray-800 text-center">Email Or Text Me:</p>
            <a className=" text-blue-700" href="#" title="Go to Email" target="_blank"><FaEnvelope className="inline text-2xl  text-gray-600 mx-2"/>monayagoub359@gmail.com</a>
            <a className="text-gray-700 font-bold" href="https://wa.me/qr/HVLLUZWW6VLVF1" title="Go to WhatsApp " target="_blank"><FaWhatsapp className="inline  text-3xl text-gray-600 mx-1" /> +250734579450</a>
            </div>
          </div>
        </div>
        <form className="   w-full h-[100%] rounded-r-[30px] py-4 space-y-1 px-6">
          <h1 className="text-2xl font-bold text-center">Get in touch 😊</h1>
          <Label htmlFor="fullName" text="Full Name:" />
          <Input type="text" id="fullName" placeholder="Your Full Name" required="required"/>
          <Label htmlFor="email" text="Email Address:"/>
          <Input type="email" id="email" placeholder="Your Email Address" required="required"/>
          <Label htmlFor="phoneNum" text="Phone Number:"/>
          <Input type="number" id="phoneNum" placeholder="Your Phone Number" required="required"/>
          <Label htmlFor="message" text="How can I help You?"/>
          <textarea className=" w-full h-[150px] border-2 border-gray-300 rounded-md outline-none focus:border-[#364eee] focus:border-2 focus:bg-[#eef0ff] p-2" type="textarea" id="message" placeholder="Write Your Message Here..." required/>
          <div className="flex justify-center">
          <Button btnText="Submit" onClick="" className="outline-none w-full py-2 px-10 bg-blue-800 rounded-md text-white hover:bg-blue-700"/>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactMe;
