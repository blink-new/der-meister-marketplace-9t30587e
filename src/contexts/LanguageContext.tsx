import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, TranslationKey, translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('der-meister-language')
    return (saved as Language) || 'de' // Default to German for German market
  })

  useEffect(() => {
    localStorage.setItem('der-meister-language', language)
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}