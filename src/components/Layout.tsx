import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Preloader from './Preloader'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Preloader />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
