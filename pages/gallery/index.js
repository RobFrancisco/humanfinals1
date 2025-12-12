import React from 'react'
import Link from 'next/link'

const gallery = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/FF 16.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Single Player, Role-Playing</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Final Fantasy 16</h1></Link>
            <p class="leading-relaxed">An epic dark fantasy where fates are decided by mighty Eikons and the Dominants who wield them.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/MC 2.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Simulator, Adventure</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Minecraft</h1></Link>
            <p class="leading-relaxed">Minecraft is a 3D sandbox game developed by Mojang Studios.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/Red Dead Redemption 2.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Action, Adventure</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Red Dead Redemption 2</h1></Link>
            <p class="leading-relaxed">An action-adventure game by Rockstar Games, the third entry and a prequel in the Red Dead series.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/Stardew Valley2.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Role-Playing</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Stardew Valley</h1></Link>
            <p class="leading-relaxed">open-ended country-life RPG by ConcernedApe where you inherit your grandfather`s farm.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/Valorant.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">First-Person Shooter</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Valorant</h1></Link>
            <p class="leading-relaxed">Free-to-play hero shooter and tactical shooter by Riot Games</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/assets/SkullGirls.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">2D, Fighting-Game</h2>
            <Link href="/"><h1 class="title-font text-lg font-medium text-gray-900 mb-3">SkullGirls</h1></Link>
            <p class="leading-relaxed">Players engage in team-based battles with unique fighters, each with distinct styles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default gallery