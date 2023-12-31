import Avatar from '../assets/avatar.jpg'

import {
 EnvelopIcon,
 GithubIcon,
 HomeIcon,
 Linkedn,
 MobilePhoneIcon,
} from '../Icons'

const Information = () => (
 <div>
  {/* Avatar, Name and Role */}
  <div>
   <div className="grid justify-items-center">
    <img
     src={Avatar}
     className="object-contain rounded-full w-44 border-solid border-1 border-black"
    ></img>
   </div>

   <div>
    <h1 className="text-2xl text-center leading-normal mt-0 font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
     Edrian Jan Solatorio
    </h1>
   </div>

   <div>
    <h1 className="text-1xl text-center font-normal leading-normal mt-0 text-white-000">
     Full-Stack Web Developer
    </h1>
   </div>
  </div>

  {/* Summary  */}
  <div className="mt-4">
   <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:ml-2 lg:ml-0">
    Summary
   </h1>

   <h1 className="text-1xl text-justify font-normal leading-normal mt-2 text-white-000 md:mx-2 lg:mx-0">
    Highly motivated Full-Stack Developer with 3 of experience building
    user-friendly and responsive web applications. Skilled in experise, Laravel,
    such as HTML, CSS, JavaScript, VueJs, Node.js, MySQL, APIs and Strong
    ability to work collaboratively with team members, and learn quickly, Eager
    to join a team of experienced professionals to develop cutting-edge web
    applications while gaining valuable experience and learning from mentors.
   </h1>
  </div>

  {/* Contacts  */}

  <div className="mt-4">
   <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:ml-2 lg:ml-0">
    Contacts
   </h1>

   <div className="mt-2">
    <ul className="space-y-3 md:mx-2 lg:mx-0">
     <li className="flex items-center">
      <div>
       <EnvelopIcon />
      </div>
      <div>edrianjansolatorio@gmail.com</div>
     </li>
     <li className="flex items-center">
      <div>
       <MobilePhoneIcon />
      </div>
      <div>+639605328862</div>
     </li>
     <li className="flex items-start">
      <div className="mt-1">
       <HomeIcon />
      </div>
      Blk 31 Lot 9, Diego St., Cityville Subd., Fortune Towne, Brgy. Estefania,
      Bacolod City, Negros Occidental, PH, 6100
     </li>
     <li className="flex items-center">
      <div className="mt-1">
       <GithubIcon />
      </div>
      <div>github.com/scarfaceshing</div>
     </li>
     <li className="flex items-center">
      <div className="mb-1">
       <Linkedn />
      </div>
      <div>linkedn.com/in/ej-solatorio</div>
     </li>
    </ul>
   </div>
  </div>

  {/* Skills */}

  <div className="mt-4">
   <div>
    <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:mx-2 lg:mx-0">
     Primary Skills
    </h1>
   </div>
   <div className="ml-4 mt-2">
    <ul className="grid grid-cols-3 gap-x-6 list-disc list-outside md:mx-2 lg:mx-0">
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>PHP</li>
     <li>MySQL</li>
     <li>VueJs</li>
     <li>Laravel</li>
    </ul>
   </div>
  </div>

  {/* Miscellaneous  */}

  <div className="mt-4">
   <div>
    <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:mx-2 lg:mx-0">
     Miscellaneous Skills
    </h1>
   </div>
   <div className="ml-4 mt-2">
    <ul className="grid grid-cols-3 gap-x-6 list-disc list-outside md:mx-2 lg:mx-0">
     <li>Android</li>
     <li>Angular</li>
     <li>Python</li>
     <li>Microsoft Office</li>
     <li>Python</li>
     <li>Jira</li>
     <li>Ionic</li>
     <li>Capacitor</li>
     <li>Linux OS</li>
     <li>Bash</li>
     <li>Golang</li>
     <li>Docker</li>
    </ul>
   </div>
  </div>

  {/* Educations */}

  <div className="mt-4">
   <div>
    <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent underline decoration-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:mx-2 lg:mx-0">
     Education
    </h1>

    <div className="space-y-3 mt-2 md:mx-2 lg:mx-0">
     <p>
      Carlos Hilado Memorial State College <br />
      Bachelor of Science in Information Systems <br />
      2014 - 2018
     </p>
    </div>
   </div>
  </div>

  {/* Achievments  */}

  <div className="mt-4">
   <div>
    <h1 className="text-2xl text-left font-normal font-semibold leading-normal mt-0 text-transparent underline decoration-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:mx-2 lg:mx-0">
     Achievements
    </h1>

    <div className="space-y-3 mt-2 md:mx-2 lg:mx-0">
     <p>
      PSITS I.T TECH FEST - Programming <br />
      Carlos Hilado Memorial State College <br />
      Champion <br />
      2016 - 2017
     </p>
     <p>
      PSITS I.T TECH FEST - Animation <br />
      Carlos Hilado Memorial State College <br />
      1st Place <br />
      2016 - 2017
     </p>
    </div>
   </div>
  </div>
 </div>
)

export default Information
