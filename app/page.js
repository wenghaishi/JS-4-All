import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <Navbar />
      <Image
          src="/hero.jpg"
          width={5000}
          height={500}
          alt="Picture of the author"
          className='top-0 fixed'
        />
        <div className='z-30 flex flex-col items-center justify-center lg:mt-10 p-20 rounded-xl'>
          <h1 className='z-30 text-indigo-900 text-4xl lg:text-9xl font-black mb-10'>JS-4-all</h1>
          <h2 className='text-indigo-900 mb-10 font-black text-lg lg:text-3xl'>Learn javascript anytime, anywhere! If you are a...</h2>
          <div className='flex -flex-row gap-4'>
            <h2 className='text-indigo-900 font-black hover:bg-indigo-900/20 px-10 py-6 border border-neutral-50/20 rounded-2xl'>Student</h2>
            <h2 className='text-indigo-900 font-black hover:bg-indigo-900/20 px-10 py-6 border border-neutral-50/20 rounded-2xl'>Aspiring developer</h2>
            <h2 className='text-indigo-900 font-black hover:bg-indigo-900/20 px-10 py-6 border border-neutral-50/20 rounded-2xl'>Hobbyist</h2>
          </div>
        </div>
    </main>
  )
}
