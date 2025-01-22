import Card from '../components/Card';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {  skillName: "Html",
      skillLevel:  "Advance",
      skillBgColor: "bg-green-300 hover:bg-green-200",
      skillBorderColor: "border-green-800" ,
      skillLevelColor:  "text-green-800",
      skillIcon: <FaHtml5 />,
      skillIconStyle: "text-orange-700 group-hover:text-orange-600"
     },
    {  skillName: "Css",
      skillLevel:  "Advance",
      skillBgColor: "bg-green-300 hover:bg-green-200" ,
      skillBorderColor: "border-green-800",
      skillLevelColor:  "text-green-800",
      skillIcon: <FaCss3Alt/>,
      skillIconStyle: "text-[#1d3bb2] group-hover:text-[#264de4]"
      },
    {  skillName: "JavaScript",
      skillLevel:  "Itermediate",
      skillBgColor: "bg-yellow-300 hover:bg-yellow-200" ,
      skillBorderColor: "border-yellow-500" ,
      skillLevelColor:  "text-yellow-700",
      skillIcon:<DiJavascript1/>,
      skillIconStyle: "text-[#e1c300] group-hover:text-[#f7df1e] "
      },
    {  skillName: "React",
      skillLevel:  "Beginner",
      skillBgColor: "bg-red-300 hover:bg-red-200" ,
      skillBorderColor: "border-red-800" ,
      skillLevelColor:  "text-red-800",
      skillIcon:<FaReact/>,
      skillIconStyle: " text-[#56c3e1] group-hover:text-[#61dafb]"
    },
    {  skillName: "Tailwind Css", 
      skillLevel:  "Advance",
      skillBgColor: "bg-green-300 hover:bg-green-200" ,
      skillBorderColor: "border-green-800" ,
      skillLevelColor:  "text-green-800",
      skillIcon:<SiTailwindcss />,
      skillIconStyle: " text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
   
  ];
  
  return (
    <main id="skills" className=" h-screen flex items-center flex-col space-y-8 py-12"> 
      <h1 className="text-center text-4xl font-bold text-gray-700">Skills</h1> 
      <div className=" max-w-5xl mx-auto flex flex-wrap items-center gap-5 gap-y-8">
        {
         skills.map((skill) => {
        
    return( <Card 
          key={skill.skillName}
          skillName={skill.skillName}
          skillNameColor={skill.skillNameColor}
          skillLevel={skill.skillLevel}
          skillBgColor={skill.skillBgColor}
          skillBorderColor={skill.skillBorderColor}
          skillLevelColor={skill.skillLevelColor}
          skillIcon={skill.skillIcon}
          skillIconStyle={skill.skillIconStyle}
          />)
         
        })}
      
      </div>
    </main>
  )
}

export default Skills
