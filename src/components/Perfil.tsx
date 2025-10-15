import foto from '../assets/foto.webp'


export default function Perfil() {
	return (
		<div className='bg-neutral-800 p-10 rounded-lg border border-neutral-500 md:w-1/4 '>
			<div className='xs: flex justify-center border-b border-neutral-500 pb-5'>
				<img src={foto} alt="foto de perfil do usuario"
					className='rounded-full object-cover w-38 h-38' />
			</div>
			
			<div className='text-center mt-5'>
				<h1 className='text-xl font-bold mb-3'>Edilson Emidio</h1>
				<h2 className='bg-emerald-700 rounded-xl inline px-5 py-1'>Desenvolvedor</h2>

				<div className='justify-start mt-5 text-left gap-1 flex flex-col'>
					<h2>
						<span className='text-neutral-400'>LinkedIn: </span>
						<a target='_blank' rel='noopener noreferrer' 
						href="https://www.linkedin.com/in/edilson-emidio-9b9a4634a"
						className='hover:underline hover:text-emerald-500'>
							Edilson Emidio
						</a>
					</h2>
					<h2>
						<span className='text-neutral-400'>Email: </span>
						Edilsonemidio93@gmail.com
					</h2>
					<h2>
						<span className='text-neutral-400'>Formação: </span>
						Cursando Ciência da Computação - UNIVASF
					</h2>
				</div>
				
			</div>
		</div>
	)
}