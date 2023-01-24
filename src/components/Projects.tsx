import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Card from './Card'
import { ProjectCards } from '@/pages'

const Projects: React.FC<ProjectCards> = ({ cards }) => {

    const card = cards.map(data => {
      return (
        <Card
          key={data['id']}
          id={data['id']}
          name={data['name']}
          blurb={data['blurb']}
          github={data['github']}
          image={data['image']}
        />
      )
    })
  return (
    <div id='projects' className='w-full bg-gradient-to-br from-sky-800 via-jet to-sky-300 flex flex-col items-center overflow-hidden'>
        <h1 className='font-headText text-amber text-5xl mt-16 mb-14 md:self-start md:ml-40'>PROJECTS</h1>
        <div className='flex flex-col lg:grid xl:grid-cols-2 gap-10 mx-5'>
          {card}
        </div>
      </div>
  )
}

export default Projects