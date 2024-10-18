import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {

  return (
      <Router>
        <Navbar/>
        <AppRoutes />
      </Router>
  )
}

export default App
