'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function CTASection() {
  const router = useRouter()

  const handleBookAppointment = () => {
    router.push('/#appointment-form')
    setTimeout(() => {
      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Consultation Today!</h2>
        <p className="text-xl mb-8">Get fast online doctor consultation from India's top AIIMS medical experts.</p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={handleBookAppointment}>
          Book Your Appointment Now
        </Button>
      </div>
    </section>
  )
}

