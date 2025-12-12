import { Geist, Geist_Mono } from "next/font/google";
import Hpto from './hpto'
import Carousel from './carousel'
import Gallery from './gallery'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>

      <Hpto />
      <Carousel />
      <Gallery />

    </div>
  
  );
}
