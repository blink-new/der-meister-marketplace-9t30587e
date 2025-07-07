import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'
import { Search, MapPin, Star, Clock, Euro, Heart, Filter } from 'lucide-react'
import { User } from '@/types'

interface HomeProps {
  user: User
}

export const Home: React.FC<HomeProps> = ({ user }) => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  // Mock data for services
  const services = [
    {
      id: '1',
      title: 'Professionelle Hausreinigung',
      category: 'cleaning',
      provider: 'Maria Schmidt',
      rating: 4.8,
      reviews: 127,
      price: 25,
      priceType: 'hourly',
      location: 'Berlin Mitte',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
      verified: true
    },
    {
      id: '2',
      title: 'Sanitär-Notdienst',
      category: 'plumbing',
      provider: 'Hans Müller',
      rating: 4.9,
      reviews: 89,
      price: 80,
      priceType: 'fixed',
      location: 'Berlin Charlottenburg',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
      verified: true
    },
    {
      id: '3',
      title: 'Elektroinstallation & Reparatur',
      category: 'electrical',
      provider: 'Stefan Weber',
      rating: 4.7,
      reviews: 156,
      price: 45,
      priceType: 'hourly',
      location: 'Berlin Prenzlauer Berg',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
      verified: true
    },
    {
      id: '4',
      title: 'Garten- & Landschaftspflege',
      category: 'gardening',
      provider: 'Anna Hoffmann',
      rating: 4.6,
      reviews: 73,
      price: 30,
      priceType: 'hourly',
      location: 'Berlin Kreuzberg',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
      verified: false
    }
  ]

  const categories = [
    { id: 'cleaning', icon: '🧹', name: t('cleaning') },
    { id: 'plumbing', icon: '🔧', name: t('plumbing') },
    { id: 'electrical', icon: '⚡', name: t('electrical') },
    { id: 'gardening', icon: '🌱', name: t('gardening') },
    { id: 'handyman', icon: '🔨', name: t('handyman') },
    { id: 'painting', icon: '🎨', name: t('painting') },
    { id: 'moving', icon: '📦', name: t('moving') },
    { id: 'tutoring', icon: '📚', name: t('tutoring') }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Der Meister
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Willkommen, {user.name}
              </span>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                {user.name[0]}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero_title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero_subtitle')}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={t('search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={t('location_placeholder')}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                <Search className="h-5 w-5 mr-2" />
                Suchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Beliebte Kategorien
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="text-sm font-medium text-gray-700">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {t('popular_services')}
            </h3>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    {service.verified && (
                      <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                        ✓ Verifiziert
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 truncate">{service.title}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{service.provider}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="h-4 w-4" />
                      {service.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Euro className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-600">
                          {service.price}€ {service.priceType === 'hourly' ? '/h' : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {service.reviews} {t('reviews')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}