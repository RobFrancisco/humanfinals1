import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const discount = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Red Dead Redemption.png"/>
        </a>
        <div class="mt-4">
         <h2 class="text-gray-900 title-font text-lg font-medium">Red Dead Redemption</h2>
          <p class="mt-1">Before $16.00 | Now $10.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/nier.jpg"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Nier: Automata</h2>
          <p class="mt-1">Before $21.99 | Now $14.99</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/LFD 2.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Left for Dead 2</h2>
          <p class="mt-1">Before $12.00 | Now $6.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Metal Gear 5.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Metal Gear 5 Snake Eater</h2>
          <p class="mt-1">Before $18.99 | Now $12.99</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Peak.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Peak</h2>
          <p class="mt-1">Before $16.00 | Now $9.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Project Zomboid.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Project Zomboid</h2>
          <p class="mt-1">Before $10.99 | Now $6.99</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Umamusume Pretty Derby.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Umamusume Pretty Derby</h2>
          <p class="mt-1">Before $12.00 | Now $8.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/assets/Undertale.png"/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Undertale</h2>
          <p class="mt-1">Before $18.99 | Now $10.99</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default discount