import './App.css'
import Perfil from './components/Perfil'
import Conteudo from './components/Conteudo'

function App() {

	
	return (
		<div className='bg-neutral-900 py-5 text-white pt-10
			sm:grid sm:grid-cols-1
			md:flex md:justify-evenly
			h-screen
			'>
			<Perfil />
			<Conteudo />
		</div>
	)
}

export default App