import Projetos from './Projetos'
import SobreMim from './SobreMim'
import Menu from './Menu'
import { useState } from 'react'

export default function Conteudo() {

   const [conteudo, setConteudo] = useState(true)

   return (
      <div className='bg-neutral-800 p-10 rounded-lg relative
         border border-neutral-500 mr-5 ml-5 sm:ml-0 w-1/2'>

         <Menu conteudo={setConteudo}/>
         <div className='flex justify-between items-center mb-5'>
            <h1 className='text-3xl font-bold'>{conteudo ? "Sobre mim" : "Projetos"}</h1>
         </div>
         {
            conteudo ? <SobreMim /> : <Projetos />
         }
         
      </div>
   )

}