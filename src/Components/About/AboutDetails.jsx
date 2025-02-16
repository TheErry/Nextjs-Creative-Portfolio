import React from 'react'
import ItemLayout from './ItemLayout'

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
            A Juggler
          </h2>
          <p className='font-light text-xs sm:text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae, ad delectus praesentium quaerat magni dolorum 
            enim perspiciatis alias ducimus ullam error. Harum similique mollitia illum quos dicta placeat dolores?
          </p>
        </ItemLayout>
        <ItemLayout className={"lg:col-span-4 xs:col-span-6 col-span-full"}>
          <p className='font-semibold w-full text-left sm:text-5xl text-2xl text-accent flex lg:items-center md:items-center sm:items-center'>
            25+ <sub className='font-semibold text-base mx-2'>clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"lg:col-span-4 xs:col-span-6 col-span-full"}>
          <p className='font-semibold w-full text-left sm:text-5xl text-2xl text-accent flex lg:items-center md:items-center sm:items-center'>
            4+ <sub className='font-semibold text-base mx-2'>years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full sm:col-span-full md:col-span-4 p-0!"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=theerry&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt='Erikas stats' loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 p-0!"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=theerry&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt='Erikas stats' loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,ae,atom,babel,bash,blender,bootstrap,codepen,discord,docker,express,figma,firebase,gamemakerstudio,git,gitlab,heroku,ai,jenkins,kubernetes,less,linkedin,mongodb,netlify,nextjs,nodejs,npm,ps,postman,powershell,py,react,redux,stackoverflow,svg,tailwind,threejs,ts,vscode,yarn" alt='Erikas known programmes' loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 p-0!"}>
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=theerry&theme=dark&hide_border=true&type=svg&background=762A2A00&ring-3=FEFE5B" alt='Erikas streaks stats' loading='lazy'/>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=theerry&repo=snake_pygame&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt='Erikas known programmes' loading='lazy'/>
        </ItemLayout>
      </div>
    </section>
  )
}

export default AboutDetails