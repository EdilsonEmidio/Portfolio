import './App.css'
import Perfil from './components/Perfil'
import Conteudo from './components/Conteudo'

function App() {

	
	return (
		<div className='bg-neutral-900 py-5 text-white 
			xs:grid xs:grid-cols-1 
			sm:flex sm:justify-center gap-10'>
			<Perfil />
			<Conteudo />
		</div>
	)
}

export default App