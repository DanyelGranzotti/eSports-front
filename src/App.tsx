import './styles/main.css'
import {MagnifyingGlassPlus} from 'phosphor-react'

import logoImage from './assets/logo.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu  
        <span className='bg-title-gradient bg-clip-text text-transparent'> duo </span>
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="src\assets\image-7.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>
              Game Name
            </strong>
            <span className='text-zinc-300 text-sm block'>
              N anúncios
            </span>
          </div>
        </a>

      </div>

      <div className='mt-8 pt-1 bg-title-gradient self-stretch rounded-lg overflow-hidden'>

      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>
            Não encontrou seu duo?
          </strong>
          <span className='text-zinc-400 block'>
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <button className='px-4 py-3 text-white rounded bg-violet-500 hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio 
        </button>
      </div>
      </div>
    </div>
  )
}

export default App
