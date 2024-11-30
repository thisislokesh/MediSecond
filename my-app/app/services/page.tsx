import Layout from '@/components/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      title: "Second Opinions for Medical Consultations",
      description: "Get expert advice on your diagnosis or treatment plan from top AIIMS doctors."
    },
    {
      title: "Expertise Across All Departments",
      description: "Our network covers cardiology, oncology, orthopedics, pediatrics, and more."
    },
    {
      title: "Quick Turnaround",
      description: "Receive your second opinion within 2-5 hours of submitting your case."
    },
    {
      title: "Affordable Pricing",
      description: "A flat fee of ₹700 for a comprehensive review of your case by an AIIMS expert."
    }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-primary">Our Services</h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p>
              MediSecond offers a range of services to ensure you get the best medical advice for your health concerns.
            </p>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

