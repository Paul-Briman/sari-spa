import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import About from './sections/About'
import Treatments from './sections/Treatments'
import Experience from './sections/Experience'
import WhySari from './sections/WhySari'
import Testimonials from './sections/Testimonials'
import BookingCTA from './sections/BookingCTA'
import Location from './sections/Location'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Experience />
        <WhySari />
        <Testimonials />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* Spacer so the mobile sticky bar never hides footer content */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  )
}
