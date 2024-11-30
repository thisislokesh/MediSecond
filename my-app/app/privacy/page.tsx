import Layout from '@/components/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p>
              At MediSecond, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal and medical information.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Information Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We collect personal and medical information that you provide when using our service. This includes but is not limited to your name, contact details, and medical records.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Use of Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The information we collect is used solely for the purpose of providing you with medical second opinions. We do not share your information with third parties unless required by law.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-primary">Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We implement strict security measures to ensure the confidentiality and security of all uploaded medical records and personal details. Our systems are regularly audited and updated to maintain the highest standards of data protection.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You have the right to access, modify, or delete your personal information at any time. If you have any questions or concerns about our privacy practices, please contact us at privacy@medisecond.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

