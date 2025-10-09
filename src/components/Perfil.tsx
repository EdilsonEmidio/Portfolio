import foto from '../assets/foto.webp'


export default function Perfil() {
	return (
		<div className='bg-neutral-800 p-10 rounded-lg '>
			<div>
				<img src={foto} alt="foto de perfil do usuario"
					className='rounded-full object-cover w-38 h-38' />
			</div>
			<div className='text-center mt-5'>
				<h1 className='text-xl font-bold'>Edilson Emidio</h1>
			</div>
		</div>
	)
}