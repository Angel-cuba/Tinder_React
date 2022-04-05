import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import OnBoard from './pages/OnBoard';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/onboard" element={<OnBoard />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

export default App;
