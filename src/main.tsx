import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Filter from './components/Filter.tsx'
import Card from './components/Card.tsx'
import Info from './components/Info.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col bg-[#F4FBFF] h-screen'>
      <Header />
      <main className='flex-1 max-w-300 w-full m-auto'>
        <Filter
          title='Busque o conteúdo que desesja assistir hoje'
          placeholder='Busque seu curso'
        />
        <div className='bg-white rounded-md mt-4 py-2'>
          <p
            className='text-[#00A2F7] font-bold text-center'>Os cursos mais buscados
          </p>
          <div className='grid grid-cols-5 gap-2 mt-3'>
            <Card
              title='Fundamentos do React.js'
              img='https://cdn.brandfetch.io/idREYlLkpD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B'
              hour='9h'
            />
            <Card
              title='Fundamentos do Node.js'
              img='./node.png'
              hour='9h'
            />
            <Card
              title='Fundamentos do Next.js'
              img='Next.png'
              hour='9h'
            />
            <Card
              title='Fundamentos do TailwindCSS'
              img='TailwindCSS.png'
              hour='9h'
            />
            <Card
              title='Fundamentos do Vue.js'
              img='https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
              hour='9h'
            />
          </div>
        </div>
        <Info />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
