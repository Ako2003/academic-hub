import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='bg-[#002395]'>
      <div className='flex'>
        {footerLinks.map((link)=>{
          return (
            <div key={link.name} className='flex flex-col items-center justify-center w-16 h-16 border-b-2 border-[#18d3ff] hover:bg-[#18d3ff]'>
              <Link href={link.path}>
                <Image src={`/${link.icon}`} width={24} height={24} alt={link.name} />
              </Link>
              <span className='text-xs text-white'>{link.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
