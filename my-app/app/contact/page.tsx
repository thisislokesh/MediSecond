import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p>
              Have questions or need assistance? We're here to help. Fill out the form below or use our contact information to get in touch.
            </p>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Email: support@medisecond.com</p>
              <p className="mb-2">Phone: +91 123 456 7890</p>
              <p className="mb-4">Address: 123 Healthcare Street, Medical District, Mumbai 400001</p>
              <h3 className="text-xl font-semibold mb-2 text-primary">Customer Support Hours</h3>
              <p>Monday to Friday: 9 AM to 9 PM</p>
              <p>Saturday and Sunday: 10 AM to 6 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

