import * as React from 'react';
import Card from '../Card';
import { GithubIcon, GlobeIcon } from 'lucide-react';

interface IProjectCardProps {
    title: string
    description: string
    technologies: string
    github: string
    site?: string
}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, description, technologies, github, site }) => {
  return (
    <Card className='w-[25.5rem] h-[13rem] border border-sky-500 text-center pl-5 pr-5'>
        <h1 className='text-[#61dafb] font-bold text-xl pt-3 pb-1'>{title}</h1>
        <p className='text-[#61dafb] font-bold pb-3'>[ {technologies} ]</p>
        <p className='text-white'>{description}</p>

        <div className='flex flex-row justify-center mt-8'>
            <a href={github}>
                <div className='flex flex-row text-[#61dafb] cursor-pointer'>
                    <GithubIcon />
                    <h1 className='ml-1 font-bold'>Code</h1>
                </div>
            </a>
            <a href={site}>
                <div className='flex flex-row text-[#61dafb] ml-5 cursor-pointer'>
                    <GlobeIcon />
                    <h1 className='ml-1 font-bold'>Site</h1>
                </div>
            </a>
        </div>

    </Card>
  );
};

export default ProjectCard;
