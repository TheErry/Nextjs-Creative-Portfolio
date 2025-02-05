import { BtnList } from '@/app/data'
import React from 'react'

function Navigation() {
  return (
    <div className='flex justify-between items-center relative'> 
      {
        BtnList.map((btn, index) => {
          return <button key={index}>{btn.label}</button>
        })
      }
    </div>
  )
}

export default Navigation