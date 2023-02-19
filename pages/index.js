import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react'
import WidgetBot from '@widgetbot/react-embed'

export default function Home() {
  const [client, setClient] = useState(false)
  useEffect(() => setClient(true), [])
  return (
    <div>
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
                <div className="z-10 whitespace-nowrap rounded-full bg-gradient-to-r from-candy1 to-candy2 px-5 py-[12px] font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 hover:drop-shadow-xl transition-all duration-500">
                  Add To Server &rarr;
                </div>
                {/* <div className="child top-0 bottom-0 right-0 left-0 absolute inset-0 h-full w-full max-w-0 rounded-full ring-white transition-all duration-1000 group-hover:inline group-hover:max-w-full group-hover:ring-2 z-0"></div> */}
              </button>
            </div>

            <div className='pl-3'>
              <button className='rounded-full px-5 py-[12px] bg-white hover:shadow-lg hover:shadow-white/50 hover:drop-shadow-xl transition-all duration-500'>
                <div className='text-black font-bold '>
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
              className='2xl:w-4/6 w-5/6 h-[700px] relative drop-shadow-xl'
            />}
          </div>
        </div>

        {/* Feature Spotlight 1 */}

        <div className='py-10'>
          <div className='text-center font-bold text-5xl'>
            <span className='text-white'>Software that</span>
            <span className='bg-clip-text bg-gradient-to-r from-nebula1 to-nebula2 text-transparent'> accelerates </span>
            <span className='text-white'>your research.</span>
          </div>
          <div className='text-center font-bold text-xl pt-2'>
            <span className='text-white'>More</span>
            <span className='text-gray-400'> than an academic database.</span>
          </div>
        </div>

        <div className='px-48'>
          {/* container box with different color of shade in the box */}
          {/* "the ultimateresearch assistant | incresing access while being faster than academic databases" */}
          <div className='backdrop-opacity-10 backdrop-invert rounded-lg'>
            {/* inner container */}
            <div className='py-14 pl-14 flex'>
              <div className='flex flex-col pr-8 justify-center'>
                {/* cmd title */}
                <div className='font-bold'>
                  <div>
                    <span className='text-nebula2 text-3xl'>/</span>
                    <span className='text-white text-2xl'>get</span>
                  </div>
                  <div>
                    <span className='text-nebula2 text-3xl'>/</span>
                    <span className='text-white text-2xl'>getbook</span>
                  </div>
                </div>

                {/* cmd subtitle */}
                <div className='pt-4 text-white font-bold'>
                  <span className='text-xl'>Search, Resolve, Access, Cite — </span>
                  <span className='text-xl decoration underline decoration-orangewheel decoration-4'>All in one.</span>
                </div>

                {/* cmd details */}
                {/* 100mil records, doi resolve, pdf + direct access, bib text*/}
                <div className='pt-14 text-white'>
                  <div className='text-base pb-2'>
                    <span>🔍 </span>
                    <span className='font-bold'>Search </span>
                    <span>from </span>
                    {/* on hover: (Google Scholar, arXiv, Semantic Scholar, SSRN) */}
                    <span className='decoration underline decoration-dotted decoration-orangewheel' title='Google Scholar, arXiv, Semantic Scholar, SSRN, Sci-Hub, Library Genesis'>100 million+</span>
                    <span> journals, articles & books.</span>
                  </div>
                  <div className='text-base pb-2'>
                    <span>🧩 </span>
                    <span className='font-bold'>Resolve & Unlock </span>
                    <span>any DOI instantly. No more fuss with logins.</span>
                  </div>
                  <div className='text-base pb-2'>
                    <span>📃 </span>
                    <span className='font-bold'>Access</span>
                    <span> articles via a downloadable PDF copy or the source URL.</span>
                  </div>
                  <div className='text-base pb-2'>
                    {/* alt 🔖  */}
                    <span>📑 </span>
                    <span className='font-bold'>Cite & Record</span>
                    <span> your research from the built-in article metadata.</span>
                  </div>
                </div>
              </div>

              <div className='flex overflow-hidden drop-shadow-xl'>
                <Image
                  src='/demo1v2.png'
                  width='700'
                  height='1588'
                  className='rounded-tl-md rounded-bl-md'
                />
              </div>
            </div>
            {/* image */}

          </div>

          {/* feature spotlight 2 */}

          <div className='pb-10 pt-20'>
            <div className='grid gap-4 grid-cols-4 grid-rows-1'>
              <div className='text-left font-bold text-5xl col-span-3'>
                <div>
                  {/* the largest competitive debate tabulation site, _now at your fingertips_  */}
                  <span className='text-white'>The largest competitive debate tabulation site, </span>
                  <span className='bg-clip-text bg-gradient-to-r from-unicorn1 to-unicorn2 text-transparent'>now on Discord</span>
                  <span className='text-white'>.</span>
                </div>
              </div>

              <div>
                <Image
                  src='/spotlight2v1.png'
                  width='500'
                  height='200'
                  className='float-right pt-4'
                />
              </div>
            </div>

            <div className='py-10'>
              <div className='backdrop-opacity-10 backdrop-invert rounded-lg'>
                <div className='py-14 pr-14 flex'>
                  <div className='flex flex-col drop-shadow-xl'>
                    <Image
                      src='/demo2v2.png'
                      height='1500'
                      width='1500'
                      className='rounded-tr-md rounded-br-md pb-4'
                    />
                    <Image
                      src='/demo21v1.png'
                      height='500'
                      width='1000'
                      className='rounded-tr-md rounded-br-md'
                    />
                  </div>

                  <div className='flex'>
                    <div className='pl-8 flex flex-col justify-center'>
                      {/* cmds 2 */}
                      <div className='font-bold'>
                        <div>
                          <span className='text-unicorn1 text-3xl'>/</span>
                          <span className='text-white text-2xl'>judgeinfo</span>
                        </div>
                        <div>
                          <span className='text-unicorn1 text-3xl'>/</span>
                          <span className='text-white text-2xl'>follow</span>
                          <span className='text-orangewheel text-xl'> (coming soon!)</span>
                        </div>
                      </div>

                      {/* cmd 2 subtitle */}
                      {/* Judge Paradigms, Judging Statistics, Pairing Notifications — Right in Discord.*/}
                      <div className='pt-4 text-white font-bold'>
                        <span className='text-xl'>Judge Paradigms, Judging Statistics, Pairing Notifications — </span>
                        <span className='text-xl decoration underline decoration-orangewheel decoration-4'>Right in your server.</span>
                      </div>

                      {/* cmd details */}
                      <div className='pt-14 text-white'>
                        <div className='text-base pb-2'>
                          <span>💭 </span>
                          <span className='font-bold'>Access & Read</span>
                          <span> Tabroom paradigms.</span>
                        </div>
                        <div className='text-base pb-2'>
                          <span>📊 </span>
                          <span className='font-bold'>View & Analyze</span>
                          <span> judging </span>
                          <span>statistics</span>
                          <span> for any judge on Tabroom.</span>
                        </div>
                        <div className='text-base pb-2'>
                          <span>🔗 </span>
                          <span className='font-bold'>Share</span>
                          <span> a direct link to any paradigm on Tabroom.</span>
                        </div>
                        <div className='text-base pb-2'>
                          <span>📣 </span>
                          <span className='font-bold'>Receive</span>
                          <span> live pairing notifications ("Tabroom Blasts") in Discord for any team active in a tournament.</span>
                          <span className='text-orangewheel font-bold'> (coming soon!)</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
        {/* dev placeholder */}
        <div className='h-[300px]'></div>
      </div>


      {/* Not on Tabroom? _No problem._ */}
      {/* Other tools to make your life _easy._*/}
      {/* stats + user spotlight */}
      {/* <div className='bg-black py-10'>
        <p className='text-white text-center font-bold text-lg'>
          Helping Thousands of Students & Scholars Worldwide
        </p>
        <p className='text-gray-500 text-center capitalize font-bold'>

        </p>
      </div> */}


    </div>
  )
}