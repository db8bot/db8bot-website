import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useEffect, useRef } from 'react'
import WidgetBot from '@widgetbot/react-embed'

export default function Home() {
  return (
    <div className='py-5 px-[25px] min-h-screen bg-bgBlack flex flex-col'>
      <div className='h-[100px]' />

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
          <div className='pr-3'>
            <button className='rounded-full bg-gradient-to-r from-candy1/75 to-candy2/75 px-5 py-[12px]'>
              <div className='text-white font-bold flex'>
                Add To Server <HiArrowNarrowRight className='mt-[1px] ml-2 text-2xl' />
              </div>
            </button>
          </div>

          <div className='pl-3'>
            <button className='rounded-full px-5 py-[12px] bg-btnLearnMore'>
              <div className='text-white font-bold'>
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* widgetbot */}
      <div>
        <WidgetBot
          server="1072951238905311392"
          channel="1072951239446368288"
        />
      </div>
    </div>
  )
}