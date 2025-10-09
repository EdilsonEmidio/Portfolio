
import Menu from './Menu'

export default function Conteudo() {

   return (
      <div className='bg-neutral-800 p-10 rounded-lg relative
         sm:w-1/2 md:w-2/3'>
         <Menu />
         <div className='flex justify-between items-center mb-5'>
            <h1 className='text-3xl font-bold'>Sobre mim</h1>
         </div>
         
         <p>
            Bem-vindo ao meu portfolio! Aqui você encontrará alguns dos meus projetos mais recentes.
         </p>
      </div>
   )

}