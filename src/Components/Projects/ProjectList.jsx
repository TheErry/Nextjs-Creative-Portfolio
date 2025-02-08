import React from 'react'
import ProjectLayout from './ProjectLayout'

const ProjectList = ({projects}) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 px-16 max-w-4x1 w-full h-screen py-16 my-10'>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />
      })}
    </div>
  )
}

export default ProjectList