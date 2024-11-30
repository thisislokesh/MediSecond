'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  const handleBookAppointment = () => {
    router.push('/#appointment-form')
    setTimeout(() => {
      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get a Second Opinion from AIIMS Doctors
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your health deserves the best advice. Book a consultation with India's most trusted medical experts in just a few clicks.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" onClick={handleBookAppointment}>
            Book Your Appointment Now
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="https://i.ibb.co/hK2vZ6m/6398c6e6-ee1b-467c-a9ad-6ccda97e63d2.jpg" 
            alt="Doctor providing online consultation" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

