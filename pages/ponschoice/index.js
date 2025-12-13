import React from 'react'
import Carousel from '../carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function PonsChoice() {
    return (
      <>
      <Link href="https://store.steampowered.com/app/1973530/Limbus_Company/"><div style={{display: "flex", justifyContent: "center"}}>
      <p style={{textAlign: "center", color: '#012b2bdc', fontFamily: 'Comic Sans MS'}} className="text-base font-normal text-gray-500 dark:text-gray-400 "><br /><br />LIMBUS COMPANY<br /><br /></p>
      </div>
    
      <div style={{display: "flex", justifyContent: "center"}}>
      <Image 
      src="/limbus.jfif" alt='limbus company'
      width="500" height="50"
      loading="eager"
      />
      </div></Link>
      <div style={{display: "flex", justifyContent: "center"}}>
      <p style={{textAlign: "center"}} className="text-base font-normal text-gray-500 dark:text-gray-400"><br /><br />
       Limbus Company is a turn based Korean Horror Game rpg that takes place 
       in a dreary dystopian place called the city, You and your gaggle band 
       of 12 other idiots called your sinners are tasked with retrieving golden glowing tree branches 
       respectively called the golden bough, as you and your team navigate through 
       multiple districts that is large enough to be considered a country
       never forget this motto as you move on your journey
        to <b>FACE THE SIN AND SAVE THE EGO<br/><br/><br/><br/><br/><br/></b></p> 
      </div>
      <Link href="https://store.steampowered.com/app/3224770/Umamusume_Pretty_Derby/"><div style={{display: "flex", justifyContent: "center"}}>
      <p style={{textAlign: "center", color: '#012b2bdc', fontFamily: 'Comic Sans MS'}} className="text-base font-normal text-gray-500 dark:text-gray-400 ">
        <br/><br />Umamusume Pretty Derby<br /><br /></p>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Image 
      src="/Umamusume Pretty Derby.png" alt='Umamusume Pretty Derby'
      width="500" height="50"
      loading="eager"
      />
      </div></Link>
      <div style={{display: "flex", 
        justifyContent: "center"}}>
      <p style={{textAlign: 
        "center"}} 
        className="text-base font-normal 
        text-gray-500 dark:text-gray-400"><br /><br />
      Umamusume Pretty Derby is a Japanese mobile game that
      combines two of the most addicting things in the world, gacha and horse racing
      as you are a Trainer tasked with raising one of these Umamusume who is a mix of horse and Girl
      to become the best racer they can be, in this idol training, horse racing and game novel.
     <b> MAKE SURE YOUR DAUGHTER WINS THE URA FINALE TORENAH</b> goodluck! 
       </p> 
     </div>
      <Link href="https://store.steampowered.com/app/108600/Project_Zomboid/"><div style={{display: "flex", justifyContent: "center"}}>
      <p style={{textAlign: "center", color: '#012b2bdc', fontFamily: 'Comic Sans MS'}} className="text-base font-normal text-gray-500 dark:text-gray-400 ">
        <br/><br />Project Zomboid<br /><br /></p>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Image 
      src="/Project Zomboid.png" alt='Project Zomboid'
      width="500" height="50"
      loading="eager"/>
      </div></Link>
      <div style={{display: "flex", 
        justifyContent: "center"}}>
      <p style={{textAlign: 
        "center"}} 
        className="text-base font-normal 
        text-gray-500 dark:text-gray-400"><br /><br />
      Project Zomboid is an Isometric Survival Horror game available on mobile and PC where 
      you are just one dude in the state of kentucky trying to survive the zombie 
      apocalypse, swing, hide , shoot and craft your way through
      the hordes, build your home and scavenge supplies to live as long as you can
      for no matter what you do, your death is guaranteed for this <b>is the story of how you died</b>
       </p> 
            </div>
      <Link href="https://store.steampowered.com/app/1671210/DELTARUNE/"><div style={{display: "flex", justifyContent: "center"}}>
      <p style={{textAlign: "center", color: '#012b2bdc', fontFamily: 'Comic Sans MS'}} className="text-base font-normal text-gray-500 dark:text-gray-400 ">
        <br/><br />Umamusume Pretty Derby<br /><br /></p>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Image 
      src="/Undertale.png" alt='Undertale'
      width="500" height="50"
      loading="eager"
      />
      </div></Link>
      <div style={{display: "flex", 
        justifyContent: "center"}}>
      <p style={{textAlign: 
        "center"}} 
        className="text-base font-normal 
        text-gray-500 dark:text-gray-400"><br /><br />
      Undertale is a Indie 2D RPG Bullethell where all of your choices matter,
      player as a child who has fallen into the underground populated 
      solely by creatures dubbed as monsters, it is the player's discretion
      to spare, fight or flee from them as you make your way to the exit hopefully with 
      your <b> SOUL</b> and morality intact.
       </p> 
      </div>
      <div className="mx-auto max-w-2xl space-y-6">
      <Carousel />
      </div>
      </>
    )
}
