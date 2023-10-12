import { barLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BottomBar() {
  return (
    <section className='fixed w-screen bottom-0'>
      <div className='flex'>
        {barLinks.map((link)=>{
          return (
            <div key={link.name} className={`pb-2 flex-1 justify-center border-t-2`}>
              <Link 
                href={link.path}
                className='py-2 flex flex-col items-center'
                >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={25}
                  height={25}
                />
              </Link>
              <p className='text-xs flex justify-center'>{link.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
