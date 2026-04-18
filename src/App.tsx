import './App.css'
import Perfil from './components/Perfil'
import Conteudo from './components/Conteudo'

function App() {

	
	return (
		<div className='bg-neutral-900 text-white
			grid 
			sm:flex
			grid-cols-1
         min-h-screen
			max-h-max
			gap-5
			py-5
         justify-center'>
			<Perfil />
			<Conteudo />
		</div>
	)
}

export default App