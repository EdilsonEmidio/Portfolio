import { useState } from "react"

type conteudoProps = {
   conteudo: (value: boolean) => void
}

export default function Menu({conteudo}:conteudoProps) {

   const [flag, setFlag] = useState(true)

   const divClassName1 =
       `text-neutral-400 hover:text-white hover:bg-neutral-400 py-2 px-4
      cursor-pointer rounded-lg
      ${flag ? "bg-neutral-500 text-white" : ""}`

      const divClassName2 =
       `text-neutral-400 hover:text-white hover:bg-neutral-400 py-2 px-4
      cursor-pointer rounded-lg
      ${flag ? "" : "bg-neutral-500 text-white"}`

   return (
      <ul className='inline-flex bg-neutral-700 rounded-lg absolute right-0 top-0 text-xl font-bold border border-neutral-500'>

         <li className={divClassName1} 
            onClick={()=>{conteudo(true),setFlag(true)}}>
            Sobre mim
         </li>

         <li className={divClassName2}
            onClick={()=>{conteudo(false),setFlag(false)}}>
            Projetos
         </li>
      </ul>
   )
}