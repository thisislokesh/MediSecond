import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MediSecond</h3>
            <p>Your trusted platform for second medical opinions from AIIMS doctors.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: support@medisecond.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter"><Twitter size={24} /></Link>
              <Link href="#" aria-label="Instagram"><Instagram size={24} /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MediSecond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

