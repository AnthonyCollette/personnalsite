import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Mentions from './pages/Mentions'
import Footer from './components/footer'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mentions-legales" element={<Mentions />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
