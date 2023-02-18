import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react'
import WidgetBot from '@widgetbot/react-embed'

export default function Home() {
  const [client, setClient] = useState(false)
  useEffect(() => setClient(true), [])
  return (
    <div className='py-5 px-[25px] min-h-screen bg-bgBlack flex flex-col'>
      <div className='md:h-12 lg:h-28 xl:32' />

      {/* catch phrase */}
      <div className='flex flex-col items-center'>
        <div className='py-5 max-w-[600px] text-center'>
          <span className='font-bold text-6xl text-white'>Academic access and digital learning </span>
          <span className='font-bold text-transparent bg-clip-text text-6xl bg-gradient-to-r from-candy1 to-candy2'>for all</span>
          <span className='font-bold text-6xl text-white'>.</span>
        </div>
      </div>

      {/* desc */}
      <div className='flex flex-col items-center'>
        <div className='py-3 max-w-[650px] text-center font-semibold'>
          {/* mobile text-16px */}
          <span className='text-[20px] leading-[1.4] text-gray-400'>
            db8bot helps you </span>
          <span className='text-white text-[20px] leading[1.4]'>track debates, connect Tabroom.com to Discord, and find open-access versions of paywalled journals </span>
          <span className='text-white text-[20px] leading-[1.4] text-gray-400'>by </span>
          <span className='text-gray-400 text-[20px] leading-[1.4] underline underline-offset-[6px]'>automatically indexing</span>
          <span className='text-gray-400 text-[20px] leading-[1.4]'>  pre-publication & other bibliographical databases.</span>
        </div>
      </div>

      {/* invite btn & learn more btn */}
      <div className='flex flex-col items-center pt-2'>
        <div className='max-w-[600px] flex'>
          <div className='pr-3 group'>
            <button className='relative parent'>
              <div className="z-10 whitespace-nowrap rounded-full bg-gradient-to-r from-candy1 to-candy2 px-5 py-[12px] font-bold text-white shadow-lg shadow-blue-500/50 drop-shadow-xl">
                Add To Server &rarr;
              </div>
              {/* <div className="child top-0 bottom-0 right-0 left-0 absolute inset-0 h-full w-full max-w-0 rounded-full ring-white transition-all duration-1000 group-hover:inline group-hover:max-w-full group-hover:ring-2 z-0"></div> */}
            </button>
          </div>

          <div className='pl-3'>
            <button className='rounded-full px-5 py-[12px] bg-white'>
              <div className='text-black font-bold'>
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* widgetbot */}
      <div className='md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-48 pb-20'>

        <div className="relative group flex justify-center">
          <div className='absolute 2xl:w-4/6 w-5/6 h-[700px]'>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-3xl -inset-3 opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
          </div>
          {client && <WidgetBot
            server='1072951238905311392'
            channel='1072951239446368288'
            className='2xl:w-4/6 w-5/6 h-[700px] relative'
          />}
        </div>
      </div>

      {/* stats + user spotlight */}
      <div className='bg-black py-10'>
        <span className='text-white text-center capitalize font-bold text-lg'>
          you are in good company
        </span>
        <span className='text-gray-500 text-center capitalize font-bold'>
            increasing access & trusted by thousands daily
        </span>
      </div>

    </div>
  )
}