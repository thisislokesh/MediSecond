import { Shield, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid gap-8">
            <div className="flex items-center">
              <Shield className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
                <p>AIIMS is the gold standard in healthcare, known for its expertise and excellence.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Top Doctors from AIIMS</h3>
                <p>Our platform connects you directly with renowned doctors from AIIMS.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-12 h-12 mr-4 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Consultations</h3>
                <p>Get expert medical advice within hours, not days.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image 
              src="https://i.ibb.co/GfD9pbf/2b2c4280-e52b-44d3-bb16-6a416064d3f7.jpg" 
              alt="AIIMS doctors providing expert medical advice" 
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

