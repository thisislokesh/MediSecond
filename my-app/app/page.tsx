import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </Layout>
  )
}

