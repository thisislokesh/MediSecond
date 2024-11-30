'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Upload, Send, X } from 'lucide-react'
import { supabase } from '../SupabaseClient';
import { useRouter } from 'next/navigation'; // Import useRouter

export function AppointmentForm() {
  const router = useRouter(); // Initialize router
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    hospital: '',
    speciality: '',
    remarks: '',
    report: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Submitting data:', formData); // Log the form data

    const { data, error } = await supabase
      .from('reg_form')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          hospital: formData.hospital,
          speciality: formData.speciality,
          remarks: formData.remarks,
        },
      ]);

    if (error) {
      console.error('Error inserting data:', error); // Log the error
      return;
    }

    console.log('Data inserted successfully');
    setShowSuccessPopup(true);

    // Navigate to the appointment form URL
    router.push('/appointment-form'); // Navigate to the desired URL
  }

  return (
    <>
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-semibold text-primary mb-4">Thank You!</h3>
            <p className="text-gray-700">
              Thank You for showing interest. You will be soon getting a call from the AIIMS Doctor.
            </p>
            <Button 
              onClick={() => setShowSuccessPopup(false)}
              className="mt-6 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
      <section id="appointment-form" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">Book Your Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Get Second Opinion</h3>
              <ul className="space-y-4 text-sm list-none">
                {[
                  'Select your preferred hospital and speciality',
                  'Upload your medical reports',
                  'Submit your query',
                  'Receive expert opinion from AIIMS doctors'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-base font-normal text-primary">
                <Phone className="h-5 w-5" />
                <span>Call Us +91 92688 80303</span>
              </div>
            </div>
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="border-blue-200 focus:border-blue-500" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-blue-200 focus:border-blue-500" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile No.</label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                        🇮🇳 +91
                      </div>
                      <Input 
                        id="mobile" 
                        type="tel" 
                        placeholder="Enter mobile number" 
                        className="rounded-l-none border-blue-200 focus:border-blue-500"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="hospital" className="text-sm font-medium text-gray-700">Hospital</label>
                    <Input 
                      id="hospital" 
                      placeholder="Enter hospital name" 
                      className="border-blue-200 focus:border-blue-500" 
                      value={formData.hospital}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="speciality" className="text-sm font-medium text-gray-700">Speciality</label>
                    <Input 
                      id="speciality" 
                      placeholder="Enter speciality" 
                      className="border-blue-200 focus:border-blue-500" 
                      value={formData.speciality}
                      onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="report" className="text-sm font-medium text-gray-700">Upload Report</label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="report" 
                        type="file" 
                        className="hidden"
                        accept=".pdf,.jpg,.doc,.png"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            setFormData({ ...formData, report: files[0] });
                          } else {
                            setFormData({ ...formData, report: null });
                          }
                        }}
                      />
                      <Button type="button" variant="outline" onClick={() => document.getElementById('report')?.click()}>
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      <span className="text-sm text-gray-500">No file chosen</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted formats: PDF, JPG, DOC, PNG
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="remarks" className="text-sm font-medium text-gray-700">Remarks</label>
                  <Textarea 
                    id="remarks" 
                    placeholder="Please enter any additional information or questions"
                    rows={4}
                    className="border-blue-200 focus:border-blue-500"
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Appointment Request
                </Button>
                <p className="text-sm text-center text-gray-500">
                  Email - digitalquery@maxhealthcare.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

