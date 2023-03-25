// TODO: https://play.tailwindcss.com/8QiuMQz6X2 - btn gradient flare
import Head from 'next/head'
import { Link } from "react-scroll"
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react';
import { RiCharacterRecognitionLine, RiDoubleQuotesL, RiEraserLine } from 'react-icons/ri'
import { MdOutlineImagesearchRoller } from 'react-icons/md'
import { SiReact, SiTailwindcss, SiNextdotjs, SiVercel, SiCloudflare } from 'react-icons/si'
import { useEffect, useRef, useState } from 'react'
import WidgetBot from '@widgetbot/react-embed'
import CountUp, { useCountUp } from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function Home() {
  const [client, setClient] = useState(false)
  useEffect(() => setClient(true), [])

  const [counterOn, setCounterOn] = useState(false)


  return (
    <div className='overflow-hidden'>
      <Analytics />
      <Head>
        <title>Home | db8bot</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
              {/* <button className='relative parent'> */}
              {/* <div className="z-10 whitespace-nowrap rounded-full bg-gradient-to-r from-candy1 to-candy2 px-5 py-[12px] font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 hover:drop-shadow-xl transition-all duration-500"> */}
              {/* <div className="z-10 whitespace-nowrap rounded-md bg-gradient-to-r from-candy1 to-candy2 px-5 py-[12px] font-bold text-white transition-all duration-500"> */}
              {/* Add To Server &rarr; */}
              {/* </div> */}
              {/* <div className="child top-0 bottom-0 right-0 left-0 absolute inset-0 h-full w-full max-w-0 rounded-full ring-white transition-all duration-1000 group-hover:inline group-hover:max-w-full group-hover:ring-2 z-0"></div> */}
              {/* </button> */}

              <a href="https://discord.com/oauth2/authorize?client_id=689368779305779204&permissions=310647056497&scope=bot%20applications.commands" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-candy1 via-candymid to-candy2 group-hover:from-candy1 group-hover:via-candymid group-hover:to-candy2 absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-[600ms]">
                  <div className='text-center'>
                    <span className="relative font-bold text-white">Add To Server &rarr;</span>
                  </div>
                </span>
              </a>

            </div>

            <div className='pl-3'>
              {/* <button className='rounded-full px-5 py-[12px] bg-white hover:shadow-lg hover:shadow-white/50 hover:drop-shadow-xl transition-all duration-500'> */}
              <a href="#learnMoreStart">
                <button className='rounded-md px-6 py-[14px] bg-white hover:bg-bgBlack transition-all duration-500 border inset-0 text-black hover:text-white font-bold'>
                  {client && <Link
                    activeclassName="active"
                    to="learnMoreStart"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <div>
                      Learn More
                    </div>
                  </Link>}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* widgetbot */}
        {/* md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-48 */}
        <div className='pt-20 pb-20'>

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

        <div className='lg:px-48'>
          {/* container box with different color of shade in the box */}
          {/* Feature Spotlight 1 */}
          <div className='py-10'>
            <div className='py-10'>
              <div className='text-center font-bold text-5xl' id='learnMoreStart'>
                <span className='text-white'>Software that</span>
                <span className='bg-clip-text bg-gradient-to-r from-nebula1 to-nebula2 text-transparent'> accelerates </span>
                <span className='text-white'>your research.</span>
              </div>
              <div className='text-center font-bold text-xl pt-2'>
                <span className='text-white'>More</span>
                <span className='text-gray-400'> than an academic database.</span>
              </div>
            </div>
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

                <div className='md:flex md:overflow-hidden md:drop-shadow-xl hidden'>
                  {/* image */}
                  <Image
                    src='/demo1v2.png'
                    width='700'
                    height='1588'
                    className='rounded-tl-md rounded-bl-md'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* feature spotlight 2 */}

          <div className='py-10'>
            <div className='grid gap-4 grid-cols-4 grid-rows-1'>
              <div className='text-left font-bold text-5xl col-span-3'>
                <div>
                  {/* the largest competitive debate tabulation site, _now at your fingertips_  */}
                  <span className='text-white'>The largest competitive debate tabulation site, </span>
                  <span className='bg-clip-text bg-gradient-to-r from-unicorn1 to-unicorn2 text-transparent'>now on Discord</span>
                  <span className='text-white'>.</span>
                </div>
              </div>

              <div className='hidden md:block'>
                <Image
                  src='/spotlight2v1.png'
                  width='500'
                  height='200'
                  className='float-right pt-4'
                />
              </div>
            </div>

            <div className='pt-10'>
              <div className='backdrop-opacity-10 backdrop-invert rounded-lg'>
                <div className='py-14 pr-14 flex'>
                  <div className='flex flex-col drop-shadow-xl'>
                    <div className='md:pb-4 md:block hidden'>
                      <Image
                        src='/demo2v2.png'
                        height='1500'
                        width='1500'
                        className='rounded-tr-md rounded-br-md'
                      />
                    </div>
                    <div className='hidden md:block'>
                      <Image
                        src='/demo21v1.png'
                        height='500'
                        width='1000'
                        className='rounded-tr-md rounded-br-md'
                      />
                    </div>
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

          {/* feature spotlight 3 */}
          {/* Not on Tabroom? _No problem._ */}
          <div className='py-10'>
            <div>
              <div className='text-center font-bold text-5xl'>
                <div>
                  <span className='text-white'>Not on Tabroom? </span>
                  <span className='bg-clip-text bg-gradient-to-r from-water1 to-water2 text-transparent'>No Problem</span>
                  <span className='text-white'>.</span>
                </div>
              </div>
              <div className='text-center font-bold text-xl pt-2'>
                <span className='text-gray-400'>Built-in tracking for </span>
                <span className='text-white'>any</span>
                <span className='text-gray-400'> debate.</span>
              </div>
            </div>

            <div className='pt-10'>
              <div className='backdrop-opacity-10 backdrop-invert rounded-lg'>
                <div className='p-14'>
                  {/* cmd titles */}
                  <div className='font-bold text-center'>
                    <div>
                      <span className='text-water1 text-3xl'>/</span>
                      <span className='text-white text-2xl'>startround</span>
                    </div>
                    <div>
                      <span className='text-water1 text-3xl'>/</span>
                      <span className='text-white text-2xl'>roundstatus</span>
                    </div>
                    <div>
                      <span className='text-water1 text-3xl'>/</span>
                      <span className='text-white text-2xl'>setspeech</span>
                    </div>
                    <div>
                      <span className='text-water1 text-3xl'>/</span>
                      <span className='text-white text-2xl'>endround</span>
                    </div>
                  </div>
                  {/* cmd subtitles */}
                  <div className='pt-4 text-white text-center font-bold'>
                    <span className='text-xl'>Create, View, Update, End — </span>
                    <span className='text-xl decoration underline decoration-orangewheel decoration-4'>For any type of debate; All in one place.</span>
                  </div>
                  {/* cmd details */}
                  <div className='pt-14 text-white text-center'>
                    <div className='text-base pb-2'>
                      <span>▶ </span>
                      <span className='font-bold'>Create</span>
                      <span> a round.</span>
                    </div>
                    <div className='text-base pb-2'>
                      <span>👓 </span>
                      <span className='font-bold'>View</span>
                      <span> the status of all rounds in your server.</span>
                    </div>
                    <div className='text-base pb-2'>
                      <span>📝 </span>
                      <span className='font-bold'>Update & Track</span>
                      <span> the current speech for a round.</span>
                    </div>
                    <div className='text-base pb-2'>
                      <span>⏹ </span>
                      <span className='font-bold'>End</span>
                      <span> a round & enter a decision.</span>
                    </div>
                    <div className='text-base pb-2'>
                      <span>🏷️ </span>
                      <span className='font-bold'>Automatically Assign</span>
                      <span> "Currently Debating" & "Currently Judging" roles.</span>
                    </div>
                  </div>
                  {/* image */}
                  <div className='md:pt-4 md:drop-shadow-xl md:block hidden'>
                    <Image
                      src='/demo3v2.png'
                      height='1000'
                      width='1500'
                      className='rounded-md'
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* feature spotlight 4 */}
          {/* Other tools to make your life _easy._*/}

          <div className='py-10'>
            <div className='flex pt-10'>




              <div className='backdrop-opacity-10 backdrop-invert rounded-lg'>
                <div className='xl:py-14 xl:pr-14 xl:drop-shadow-xl xl:block hidden'>
                  <Image
                    src='/demo4v2.png'
                    height='2000'
                    width='1000'
                    className='rounded-tr-md rounded-br-md'
                  />
                </div>
              </div>



              <div className='flex flex-col items-center justify-start'>

                <div className='self-start text-center font-bold text-5xl'>
                  <span className='text-white'>Other tools to make online debate & learning </span>
                  <span className='bg-clip-text bg-gradient-to-r from-melon1 to-melon2 text-transparent'>easy</span>
                  <span className='text-white'>.</span>
                </div>

                <div className='flex flex-1 items-center justify-center md:pl-8 pt-6'>
                  <div className='md:p-4'>
                    <div className='grid grid-cols-2 grid-rows-2 text-white bg-gradient-to-br from-melon1/75 to-melon2/75  rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md md:h-[500px] md:w-[500px] w-[320px] h-[340px] lg:h-[600px] lg:w-[600px] xl:h-[700px] xl:w-[700px] 2xl:h-[750px] 2xl:w-[750px]'>
                      <div className='text-center items-center justify-center flex flex-col border-r border-b'>
                        <RiCharacterRecognitionLine
                          className='text-8xl md:text-9xl'
                        />
                        <span className='hidden md:block'>Optical Character Recognition (OCR)</span>
                        <span className='md:hidden'>Optical Character Recognition</span>
                      </div>

                      <div className='text-center items-center justify-center flex flex-col border-b'>
                        <RiDoubleQuotesL
                          className='text-7xl md:text-9xl'
                        />
                        <span className='px-2'>Quotes from Baudrillard, Bataille, Agamben, Foucault & more</span>
                      </div>

                      <div className='text-center items-center justify-center flex flex-col border-r'>
                        <MdOutlineImagesearchRoller
                          className='text-7xl md:text-9xl'
                        />
                        <span className='px-2'>Add white background to Rich text copied from Microsoft Word</span>
                      </div>

                      <div className='text-center items-center justify-center flex flex-col'>
                        <RiEraserLine
                          className='text-7xl md:text-9xl'
                        />
                        <span>Bulk purge messages</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
        {/* dev placeholder */}
        {/* <div className='h-[300px]'></div> */}
      </div>


      {/* stats + user spotlight*/}
      <div className='bg-black py-10'>
        <div className='text-center'>
          <span className='text-white text-3xl'>You are in good hands</span>
        </div>
        <div className='text-center'>
          <span className='text-gray-400 text-lg'>Increasing academic access for thousands across the world.</span>
        </div>

        <div className='lg:px-48 lg:py-4 px-2'>
          <div className='grid grid-cols-3 grid-rows-1 text-white'>

            {/* <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}> */}

            <div className='text-center font-bold'>
              <ScrollTrigger onEnter={() => setCounterOn(true)}>
              </ScrollTrigger>
              <p className='text-2xl md:text-3xl'>
                {counterOn && <CountUp start={0} end={980} suffix='+' duration={2} delay={0} />}
              </p>
              <p className='text-lg sm:text-2xl md:text-3xl'>Communities</p>
            </div>
            <div className='text-center'>

              <div className='font-bold text-2xl md:text-3xl'>
                <p>{counterOn && <CountUp start={0} end={370000} suffix='+' separator=',' duration={2} delay={0} />}
                </p>
                <p>Active Users</p>
              </div>
              <div>
                <p>{counterOn && <CountUp start={0} end={650000} suffix='+' separator=',' duration={2} delay={0} />}
                </p>
                <p>Cumulative Users</p>
              </div>

            </div>
            <div className='text-center font-bold text-2xl md:text-3xl'>
              <div>
                <p>{counterOn && <CountUp start={0} end={20} suffix='+' duration={2} delay={0} />}
                </p>
                <p>Countries</p>
              </div>

            </div>
          </div>
          {/* logo spotlights */}

          <div className='md:pt-4 px-2 md:px-0'>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Select Debate Communities: Used by the people at</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            {/* section 1 1 */}
            <div className='grid grid-cols-5 grid-rows-2 px-2 md:px-0'>
              <a href='https://www.kentuckydebate.com/' target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/UK_Debate.png'
                    height='192'
                    width='192'
                    className='grayscale invert'
                  />
                </div>
              </a>

              <a href="https://uh.edu/honors/Programs-Minors/co-curricular-programs/debate/policy-debate.php" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/UH_Debate.png'
                    height='192'
                    width='192'
                    className='grayscale'
                  />
                </div>
              </a>

              <a href="https://www.fultonschools.org/alpharettahs" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Alpharetta_Debate.png'
                    height='128'
                    width='128'
                    className='grayscale invert'
                  />
                </div>
              </a>

              <a href="https://www.pinecrest.edu/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/PineCrest_Debate.png'
                    height='128'
                    width='128'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://pvphs.pvpusd.net/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Penisula_Debate.png'
                    height='192'
                    width='192'
                    className='grayscale'
                  />
                </div>
              </a>

              <a href="https://www.damien-hs.edu/apps/pages/debateoverview" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Damien_Debate.jpg'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://bsd405.org/interlake/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Interlake_Debate.png'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www.smtexas.org/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/StMarks_Debate.png'
                    height='128'
                    width='128'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://michigandebate.com/institutes/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/UMICH_Debate.png'
                    height='128'
                    width='128'
                    className='grayscale'
                  />
                </div>
              </a>

            </div>
          </div>


          <div className='pt-2 px-2 md:px-0'>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Select Academic Communities: Used by the people at</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='grid grid-cols-5 grid-rows-2 px-2 md:px-0'>
              <a href="https://dornsife.usc.edu/chemistry/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/USC_Chem.jpg'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www.csi.cuny.edu/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/College_of_Staten_Island.png'
                    height='128'
                    width='128'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www.pepperdine.edu/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Pepperdine_University.png'
                    height='192'
                    width='192'
                    className='grayscale'
                  />
                </div>
              </a>

              <a href="https://neuro.udp.cl/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/CENHN.png'
                    height='256'
                    width='266'
                    className='grayscale'
                  />
                </div>
              </a>

              <a href="https://lirauni.ac.ug/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Lira_U.png'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www.ust-legazpi.edu.ph/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/UST-Legazpi.png'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www2.upmin.edu.ph/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Unibersidad_ng_Pilipinas_Mindanao.png'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>


              <a href="https://twitter.com/xujpia" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/JuniorIAXU.jpg'
                    height='192'
                    width='192'
                    className='grayscale'
                  />
                </div>
              </a>

              <a href="https://neust.edu.ph/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/Nueva_Ecija_University.jpg'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

              <a href="https://www.pup.edu.ph/ce/" target='_blank' className='m-auto'>
                <div>
                  <Image
                    src='/logos/PH_Poly.png'
                    height='192'
                    width='192'
                    className='invert grayscale'
                  />
                </div>
              </a>

            </div>
          </div>
          <div className='text-center pt-4'>
            <span className='text-gray-400 text-lg'>Note: The organizations listed above represent a selection of groups that use db8bot. db8bot does not endorse or sponsor any of the above organizations or their products, services, or activity. Direct takedowns to <a href="mailto:jim@db8bot.app" className="underline decoration-dashed">jim@db8bot.app</a>.</span>
          </div>
        </div>

      </div>

      {/* supporting organizations */}
      <div className='bg-black pt-10 pb-14 px-2'>
        <div className='text-center'>
          <span className='text-white text-3xl'>Supporting & Sponsoring Organizations</span>
        </div>
        <div className='text-center'>
          <span className='text-gray-400 text-lg'>Thank you for supporting our mission to make learning accessible to all.</span>
          {/* We could not have done it without you. */}
        </div>
        <div className='pt-4'>
          <a href="https://opencollective.com/db8bot" target='_blank'>
            <div>
              <Image
                src='/sponsors/OSC.png'
                height='189'
                width='750'
                className='m-auto'
              />
            </div>
          </a>
        </div>
      </div>

      {/* questions? */}
      <div className='bg-bgBlack'>
        <div className='py-4 px-2 md:p-14'>
          <div className='text-center'>
            <span className='font-bold text-transparent bg-clip-text text-6xl bg-gradient-to-r from-candy1 to-candy2'>Questions?</span>
          </div>
          <div className='pt-6 md:pt-12 flex flex-col items-center'>
            <div className='max-w-[600px] flex'>
              <div className='pr-3 group'>
                <a href="https://discord.gg/rEQc7C7">
                  <button className='rounded-md px-6 py-[14px] bg-white hover:bg-bgBlack transition-all duration-500 border inset-0 text-black hover:text-white font-bold'>
                    <div>
                      Join the Support Server
                    </div>
                  </button>
                </a>
              </div>

              <div className='pl-3'>
                <a href="https://discord.com/oauth2/authorize?client_id=689368779305779204&permissions=310647056497&scope=bot%20applications.commands" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                  <span className="w-full h-full bg-gradient-to-br from-candy1 via-candymid to-candy2 group-hover:from-candy1 group-hover:via-candymid group-hover:to-candy2 absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-[600ms]">
                    <div className='text-center'>
                      <span className="relative text-white text-center">Try it out!</span>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className='pt-6 md:pt-0 bg-bgBlack'>

        <div className='text-center text-white'>
          <p>
            &copy; 2023 db8bot
          </p>
          <p>
            The db8bot project is open-sourced under the MIT license on <a href="https://github.com/db8bot" target='_blank' className='underline decoration-dashed decoration-white'>GitHub</a>.
          </p>
          <p>
            Please see db8bot's GitHub Readme for legal information & our privacy policy.
          </p>
          <div className='flex justify-center'>
            <p className='mr-1'>Site Built With</p>
            <SiReact className="text-2xl mr-2" title='React' />
            <SiTailwindcss className="text-2xl mr-2" title='Tailwind CSS' />
            <SiNextdotjs className="text-2xl mr-2" title='Next.js' />
            {/* <SiVercel className="text-2xl mr-2" title='Vercel' /> */}
            <SiCloudflare className="text-2xl" title='Cloudflare' />
          </div>
          <div className='flex justify-center'>
            <a href="https://vercel.com/?utm_source=db8bot&utm_campaign=oss" target="_blank">
              <Image
                src='/vercel.svg'
                width='212'
                height='44'
                className=''
              />
            </a>
          </div>
          <p className='pb-2 px-2'>
            Emergency Webmaster Contact: <a href="mailto:jim@db8bot.app" className="underline decoration-dashed">jim@db8bot.app</a>
          </p>
        </div>
      </div>


    </div>
  )
}