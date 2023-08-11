import * as React from 'react';
import Card from './components/Card';
import { FileTextIcon, TextIcon, GithubIcon, LinkedinIcon, MailIcon, WallpaperIcon } from 'lucide-react';
import ProjectCard from './components/ProjectCard';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col items-center'>
        <h1 className='text-white text-4xl mt-[5rem] font-bold'>Gabriel Martins de Lima</h1>
        <h3 className='text-[#61dafb] font-bold text-2xl'>Backend Developer</h3>

        <Card className='flex flex-row mb-7 mt-2'>
          <a href="https://github.com/gabrielmrts">
            <div className='flex flex-row text-[#61dafb] cursor-pointer'>
              <GithubIcon />
              <h1 className='ml-1 font-bold'>Github</h1>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/sudogabriel/">
            <div className='flex flex-row text-[#61dafb] cursor-pointer ml-5'>
              <LinkedinIcon />
              <h1 className='ml-1 font-bold'>Linkedin</h1>
            </div>
          </a>

          <a href="mailto:gabrielmrts@yahoo.com">
            <div className='flex flex-row text-[#61dafb] cursor-pointer ml-5'>
              <MailIcon />
              <h1 className='ml-1 font-bold'>Email</h1>
            </div>
          </a>
        </Card>

        <div className='flex flex-row'>
          <TextIcon size={35} className='text-white' />
          <h1 className='text-white text-3xl ml-2 mb-[1rem] font-bold'>Experience</h1>
        </div>

        <Card className='w-[25.5rem] h-[10rem] text-white border border-sky-500'>
          <div className='flex flex-col items-center'>
            <p className='mt-3'>Native Portuguese, Advanced English</p>
            <ul>
              <li><code>[Langs] Python, Golang, Javascript/NodeJS</code></li>
              <li><code>[Tools] Docker, Kubernetes, RabbitMQ</code></li>
              <li><code>[DBMS] Postgres, MySQL, MongoDB, Redis</code></li>
              <li><code>[Cloud] AWS, DigitalOcean, Linux, CI/CD</code></li>
            </ul>
          </div>
        </Card>

        <div className='flex flex-row mt-[2rem]'>
          <TextIcon size={35} className='text-white' />
          <h1 className='text-white text-3xl ml-2 mb-[1rem] font-bold'>Resume (CV)</h1>
        </div>

        <div className='flex flex-row'>
          <a href="./assets/gabriel_martins_de_lima.pdf" download>
            <Card className='w-[12rem] h-[5rem] text-center flex items-center justify-center border border-sky-500 cursor-pointer'>
              <FileTextIcon className='text-white' /> 
              <h1 className='text-white ml-2'>Portuguese.pdf</h1>
            </Card>
          </a>

          <a href="./assets/gabriel_martins_de_lima_en.pdf" download>
            <Card className='w-[12rem] h-[5rem] ml-5 text-center flex items-center justify-center border border-sky-500 cursor-pointer'>
              <FileTextIcon className='text-white' />
              <h1 className='text-white ml-2'>English.pdf</h1>
            </Card>
          </a>
        </div>

        <div className='flex flex-row mt-[2rem] mb-[1rem]'>
          <WallpaperIcon className='text-white mt-1' size={28} />
          <h1 className='text-white text-3xl ml-2 font-bold'>Projects</h1>
        </div>

        <div className='flex flex-col'>
          <ProjectCard 
            title='MyBooks' 
            description='A site thats allow the author to publish and sell their book.' 
            technologies='Golang, Docker, Postgres'
            github='https://github.com/gabrielmrts/mybooks-golang-api'  
          />
        </div>
      </div>
    </div>
  );
};

export default App;
