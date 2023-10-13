import { barLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  return (
    <section>
      <div className='flex flex-col bg-[#00b9e4]'>
        {barLinks.map((link)=>{
          return (
            <div key={link.name} className='flex flex-col items-center justify-center w-16 h-16 border-b-2 border-[#18d3ff] hover:bg-[#18d3ff]'>
              <Link href={link.path}>
                <Image src={`/${link.icon}`} width={24} height={24} alt={link.name} />
              </Link>
              <span className='text-xs text-[#002395]'>{link.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
