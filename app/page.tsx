import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import ProjectsSection from '@/components/ProjectsSection'
import ClientsSection from '@/components/ClientsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <ShowcaseSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}