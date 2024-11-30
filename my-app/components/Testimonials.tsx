import { Card, CardContent } from '@/components/ui/card'
import { User } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "I was unsure about my diagnosis. The second opinion I got here saved me from unnecessary procedures!",
      author: "Rajesh K., Mumbai",
    },
    {
      id: 2,
      content: "The AIIMS doctor provided clear explanations and helped me make an informed decision about my treatment.",
      author: "Priya S., Bangalore",
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6 flex items-start space-x-4">
                <User className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="mb-4 italic">{testimonial.content}</p>
                  <p className="font-semibold">– {testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

