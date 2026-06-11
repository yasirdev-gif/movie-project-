
// import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favourite from './pages/Favourites'
import Navbar from './components/Navbar'
import { MovieProvider } from './context/FavoriteContext'
import './App.css'
function App() {

  return (
   <MovieProvider>
   <Navbar />
   <main className="main-content">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
       </Routes>
   </main>

   </MovieProvider>

)
}

export default App
