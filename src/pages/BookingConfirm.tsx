import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Euro, Calendar, Clock } from 'lucide-react'

const mockService = {
  id: '1',
  title: 'Professionelle Hausreinigung',
  provider: {
    id: 'p1',
    name: 'Maria Schmidt',
  },
  price: 25,
  priceType: 'hourly',
  taxRate: 0.19,
}

const BookingConfirm: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const serviceId = searchParams.get('serviceId')
  const date = searchParams.get('date')
  const time = searchParams.get('time')

  if (!serviceId || !date || !time) {
    return <div className="p-4">Invalid booking details.</div>
  }

  // Calculate price breakdown
  const basePrice = mockService.price
  const taxAmount = basePrice * mockService.taxRate
  const totalPrice = basePrice + taxAmount

  const handlePayment = () => {
    alert('Payment flow to be implemented with Stripe Connect.')
    // TODO: Integrate Stripe payment here
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{mockService.title}</h2>
            <p>Provider: {mockService.provider.name}</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Calendar />
            <span>{date}</span>
            <Clock />
            <span>{time}</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Euro />
              <span>Base Price: {basePrice.toFixed(2)}€</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro />
              <span>Tax (19%): {taxAmount.toFixed(2)}€</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <Euro />
              <span>Total: {totalPrice.toFixed(2)}€</span>
            </div>
          </div>
          <Button className="w-full" onClick={handlePayment}>
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingConfirm
