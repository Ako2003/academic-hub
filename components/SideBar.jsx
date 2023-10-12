import { barLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function SideBar() {
  return (
    <section>
      <div className='flex flex-col'>
        {barLinks.map((link)=>{
          return (
            <div key={link.name} className='flex flex-col items-center justify-center w-16 h-16'>
              <Image src={`/icons/${link.icon}`} width={24} height={24} alt={link.name} />
              <span className='text-xs'>{link.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
