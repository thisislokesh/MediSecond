import { Upload, CreditCard, Phone } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid gap-8">
            <div className="flex items-center">
              <Upload className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Upload your details</h3>
                <p>Securely share your medical problem and relevant documents.</p>
              </div>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Pay the consultation fee</h3>
                <p>A flat fee of ₹700 for a detailed review of your case.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Get a call from an AIIMS doctor</h3>
                <p>Receive expert advice within 2–5 hours.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image 
              src="https://i.ibb.co/fSncnpg/b3cdc839-287a-4147-8c50-4a52b206961a.jpg" 
              alt="Step-by-step process for getting a second medical opinion" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

