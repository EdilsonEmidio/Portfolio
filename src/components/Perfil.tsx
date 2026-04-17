import foto from '../assets/foto.jpeg'
import img_chip from '../assets/chip.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import { useState } from 'react';

export default function Perfil() {
   const [expandido, setExpandido] = useState(false);

	return (
		<div className='bg-neutral-800 p-10 rounded-lg border border-neutral-500
			ml-5 mr-5 sm:mr-0'>
			<div className='flex sm:block pb-5 border-b border-neutral-500 		sm:border-0 justify-around sm:justify-normal'>
				<div className='xs: flex justify-center md:border-b md:border-neutral-500 pb-5'>

					<img src={foto} alt="foto de perfil do usuario"
						className='rounded-full object-cover w-38 h-38'

                  onClick={()=>setExpandido(true)}/>
               
                  {//isso aqui é para expandir a foto quando clicada
                     expandido && (
                        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        onClick={()=>setExpandido(false)}>
                           <img src={foto} 
                              alt="imagem de perfil em tela grande" 
                              className="max-w-[90%] max-h-[90%] rounded-lg transition-all"/>
                        </div>
                     )
                  }
               
				</div>
				<div className='text-center mt-3 flex flex-col justify-center items-center'>
					<h1 className='text-xl font-bold mb-3'>Edilson Emidio</h1>
					<h2 className='bg-emerald-700 rounded-xl inline px-5 py-1'>Desenvolvedor Fullstack</h2>
				</div>
			</div>
			
			<div className='text-center mt-5'>

				<div className='justify-start mt-5 text-left gap-1 flex flex-col'>
					<h2>
						<img src={linkedin} alt="LinkedIn" className='inline-block w-6 to-white mr-1' />
						<span className='text-neutral-400'>LinkedIn: </span><br />
						<a target='_blank' rel='noopener noreferrer' 
						href="https://www.linkedin.com/in/edilson-emidio-9b9a4634a"
						className='hover:underline hover:text-emerald-500'>
							Edilson Emidio
						</a>
					</h2>
					<h2>
						<img src={gmail} alt="Gmail" className='inline-block w-6 to-white mr-1' />
						<span className='text-neutral-400'>Email: </span><br />
						Edilsonemidio93@gmail.com
					</h2>
					<h2>
						<img src={img_chip} alt="Chip" className='inline-block w-6 to-white mr-1' />
						<span className='text-neutral-400'>Formação: </span><br />
						Cursando Ciência da Computação - UNIVASF
					</h2>
				</div>
				
			</div>
		</div>
	)
}