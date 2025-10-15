

export default function Menu() {
   return (
      <ul className='inline-flex bg-neutral-700 rounded-lg absolute right-0 top-0 text-xl font-bold border border-neutral-500'>

         <li className='text-neutral-400 hover:text-white hover:bg-neutral-500 hover:rounded-lg py-2 px-4 cursor-pointer'>
            Sobre mim
         </li>

         <li className='text-neutral-400 hover:text-white hover:bg-neutral-500 hover:rounded-lg py-2 px-3 cursor-pointer'>
            Projetos
         </li>
      </ul>
   )
}