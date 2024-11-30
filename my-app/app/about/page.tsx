import Layout from '@/components/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4">
              At MediSecond, we aim to provide accessible and expert medical advice to everyone. By partnering with AIIMS doctors, we bring you clarity and confidence in your healthcare decisions.
            </p>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Why a Second Opinion Matters</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 mb-4">
              <li>Helps avoid common misdiagnoses</li>
              <li>Provides clarity on complex medical conditions</li>
              <li>Ensures you're getting the most appropriate treatment</li>
            </ul>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Meet Our Experts</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4">
              Our platform connects you with top AIIMS doctors across various specialties. While we maintain doctor anonymity, rest assured that you're getting advice from some of India's most experienced medical professionals.
            </p>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Our Promise</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              We are committed to providing transparent, confidential, and reliable second opinions. Your health data is secure, and your privacy is our top priority.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

