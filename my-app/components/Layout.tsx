import Header from './Header'
import Footer from './Footer'
import { AppointmentForm } from './AppointmentForm'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}

