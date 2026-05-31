import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Mindset from './pages/Mindset'
import Service from './pages/Service'
import Work from './pages/Work'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="mindset" element={<Mindset />} />
        <Route path="books" element={<Books />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
