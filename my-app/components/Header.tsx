'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleBookAppointment = () => {
    router.push('/#appointment-form')
    setTimeout(() => {
      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary">
          MediSecond
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
          <Button variant="outline">Login</Button>
          <Button onClick={handleBookAppointment}>Book Appointment</Button>
        </div>
      </nav>
    </header>
  )
}

