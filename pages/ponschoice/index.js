import React from 'react'
import Carousel from '../carousel'
import Image from 'next/image'
export default function PonsChoice() {
    return (
      <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p style={{textAlign: "center"}} className="text-base font-normal text-gray-500 dark:text-gray-400"><br /><br />The title placed here<br /><br /></p>
      </div>
    
      <div style={{display: "flex", justifyContent: "center"}}>
        <Image 
        src="/bweh.png" alt='goldship was here'
        width="500" height="50"
        loading="eager"
        />
      </div>
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400"><br /><br />The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.<br /><br />
        </p>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Image 
        src="/limbus.jfif" alt='goldship was here'
        width="500" height="500"
        loading="eager"
        />
      </div> 
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400"><br /><br />The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.<br /><br />
        </p>
      </div>
      <div>
        <Carousel />
      </div>
      </>
    )
}
