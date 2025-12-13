import React from 'react'
import Carousel from '../carousel'

export default function Genre() {
    return (
      <div>
     <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 style={{textAlign: "center", color: '#d1d3d3dc', fontFamily: 'Comic Sans MS', fontSize: '3rem'}} ><br /><br />GENRES<br /><br /></h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/category/anime">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Umamusume Pretty Derby.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">ANIME</h1>
        <p class="leading-relaxed">games classified under japanese art styles</p>
        </div></a>
      </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/category/survival">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Project Zomboid.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">SURVIVAL</h1>
        <p class="leading-relaxed">games where living  through hazardous scenarios is the objective</p>
        </div></a>
      </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/category/horror">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="fnaf.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">HORROR</h1>
        <p class="leading-relaxed">games where being afraid IS the fun, please don't play this if you have heart problems</p>
        </div></a>
      </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/tags/en/action">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="SkullGirls.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">ACTION</h1>
        <p class="leading-relaxed">Heart Pumping ACTION! FIGHT TO YOUR HEARTS CONTENT!</p>
        </div></a>
      </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/tags/en/Indie/">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Deltarune.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">INDIE</h1>
        <p class="leading-relaxed">games made by those independent from publishers usually a small team</p>
        </div></a>
      </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative">
        <a href="https://store.steampowered.com/tag/browse/#global_492">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="bweh.png"></img>
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
        <h1 class="title-font text-lg font-medium text-white mb-3">MORE</h1>
        <p class="leading-relaxed">More Genres for EVERYONE!!!!!!!!</p>
        </div></a>
      </div>
      </div>
    </div>
    </div>
  </section>
       <div>
        <Carousel />
          </div>
      
      </div>
        );
}
