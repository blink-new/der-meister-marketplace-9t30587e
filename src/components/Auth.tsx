import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/contexts/LanguageContext'
import { User } from '@/types'
import { User as UserIcon, MapPin, Phone, Mail, Lock } from 'lucide-react'

interface AuthProps {
  onComplete: (user: User) => void
}

export const Auth: React.FC<AuthProps> = ({ onComplete }) => {
  const { t } = useLanguage()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    location: '',
    role: 'customer' as 'customer' | 'provider'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate authentication
    setTimeout(() => {
      const user = {
        id: '1',
        email: formData.email,
        name: formData.name || 'User',
        role: formData.role,
        phone: formData.phone,
        location: formData.location,
        language: 'de',
        verified: false
      }
      onComplete(user)
      setLoading(false)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
            <CardTitle className="text-center text-2xl font-bold">
              Der Meister
            </CardTitle>
            <p className="text-center text-blue-100 text-sm">
              {isLogin ? t('login') : t('signup')}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t('email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  {t('password')}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      {t('name')}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {t('phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {t('location')}
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Berlin, Deutschland"
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>{t('select_role')}</Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">{t('customer')}</SelectItem>
                        <SelectItem value="provider">{t('provider')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                disabled={loading}
              >
                {loading ? t('loading') : isLogin ? t('login') : t('create_account')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {isLogin ? t('dont_have_account') : t('already_have_account')}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}