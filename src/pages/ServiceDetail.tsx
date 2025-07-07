import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, MapPin } from 'lucide-react'

const mockService = {
  id: '1',
  title: 'Professionelle Hausreinigung',
  provider: {
    id: 'p1',
    name: 'Maria Schmidt',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80',
    location: 'Berlin Mitte',
    rating: 4.8,
  },
  description: 'Wir bieten professionelle Hausreinigung mit umweltfreundlichen Produkten.',
  images: [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    'https://images.unsplash.com/photo-1590080877777-3a7a7a7a7a7a?w=600&q=80'
  ],
  price: 25,
  priceType: 'hourly',
  availability: [
    { date: '2024-07-01', slots: ['09:00', '10:00', '14:00'] },
    { date: '2024-07-02', slots: ['11:00', '15:00'] },
    { date: '2024-07-03', slots: ['09:00', '13:00', '16:00'] },
  ]
}

const ServiceDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTime(null) // reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Navigate to booking confirmation with params
      navigate(`/booking/confirm?serviceId=${id}&date=${selectedDate}&time=${selectedTime}`)
    }
  }

  const availabilityForDate = mockService.availability.find(a => a.date === selectedDate)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{mockService.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="flex items-center gap-4 mb-4">
            <img src={mockService.provider.avatar} alt={mockService.provider.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="font-semibold">{mockService.provider.name}</h2>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4" />
                <span>{mockService.provider.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{mockService.provider.location}</span>
              </div>
            </div>
          </div>
          <p className="mb-4">{mockService.description}</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {mockService.images.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i + 1}`} className="rounded-lg object-cover h-48 w-full" />
            ))}
          </div>
          <div className="text-2xl font-bold mb-4">
            {mockService.price}€ {mockService.priceType === 'hourly' ? '/h' : 'fixed'}
          </div>
        </div>
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Verfügbarkeit wählen</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar onSelectDate={handleDateSelect} selectedDate={selectedDate} availability={mockService.availability} />
              {availabilityForDate && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Verfügbare Zeiten</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {availabilityForDate.slots.map((slot) => (
                      <button
                        key={slot}
                        className={`px-3 py-1 rounded border ${selectedTime === slot ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-100'}`}
                        onClick={() => handleTimeSelect(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Button
                className="mt-6 w-full"
                disabled={!selectedDate || !selectedTime}
                onClick={handleBooking}
              >
                Buchen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail