import React from 'react'
import Carousel from '../carousel'
import Image from 'next/image'
export default function PonsChoice() {
    return (
      <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p style={{textAlign: "center"}} className="text-base font-normal text-gray-500 dark:text-gray-400"><br /><br />
        This is the about page<br /><br /></p>
      </div>
    
      <div style={{display: "flex", justifyContent: "center"}}>
        <Image 
        src="/Deltarune.png" alt='goldship was here'
        width="500" height="50"
        loading="eager"
        />
      </div>
      <div className="mx-auto max-w-2xl space-y-6">
      </div>
      <div>
        <Carousel />
      </div>
      </>
    )
}
