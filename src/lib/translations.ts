export const translations = {
  en: {
    // Navigation
    home: 'Home',
    login: 'Login',
    signup: 'Sign Up',
    dashboard: 'Dashboard',
    profile: 'Profile',
    logout: 'Logout',
    
    // Home page
    hero_title: 'Find Local Services in Germany',
    hero_subtitle: 'Connect with skilled professionals for all your needs',
    search_placeholder: 'Search for services...',
    location_placeholder: 'Enter your location',
    popular_services: 'Popular Services',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirm_password: 'Confirm Password',
    name: 'Full Name',
    phone: 'Phone Number',
    location: 'Location',
    select_role: 'I am a',
    customer: 'Customer',
    provider: 'Service Provider',
    create_account: 'Create Account',
    already_have_account: 'Already have an account?',
    dont_have_account: 'Don\'t have an account?',
    
    // Services
    view_service: 'View Service',
    book_now: 'Book Now',
    hourly: 'per hour',
    fixed: 'fixed price',
    rating: 'Rating',
    reviews: 'Reviews',
    
    // Categories
    cleaning: 'Cleaning',
    plumbing: 'Plumbing',
    electrical: 'Electrical',
    gardening: 'Gardening',
    handyman: 'Handyman',
    painting: 'Painting',
    moving: 'Moving',
    tutoring: 'Tutoring',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    loading: 'Loading...',
  },
  de: {
    // Navigation
    home: 'Startseite',
    login: 'Anmelden',
    signup: 'Registrieren',
    dashboard: 'Dashboard',
    profile: 'Profil',
    logout: 'Abmelden',
    
    // Home page
    hero_title: 'Lokale Dienstleistungen in Deutschland finden',
    hero_subtitle: 'Verbinden Sie sich mit qualifizierten Fachleuten für alle Ihre Bedürfnisse',
    search_placeholder: 'Nach Dienstleistungen suchen...',
    location_placeholder: 'Ort eingeben',
    popular_services: 'Beliebte Dienstleistungen',
    
    // Auth
    email: 'E-Mail',
    password: 'Passwort',
    confirm_password: 'Passwort bestätigen',
    name: 'Vollständiger Name',
    phone: 'Telefonnummer',
    location: 'Standort',
    select_role: 'Ich bin ein',
    customer: 'Kunde',
    provider: 'Dienstleister',
    create_account: 'Konto erstellen',
    already_have_account: 'Bereits ein Konto?',
    dont_have_account: 'Noch kein Konto?',
    
    // Services
    view_service: 'Service ansehen',
    book_now: 'Jetzt buchen',
    hourly: 'pro Stunde',
    fixed: 'Festpreis',
    rating: 'Bewertung',
    reviews: 'Bewertungen',
    
    // Categories
    cleaning: 'Reinigung',
    plumbing: 'Sanitär',
    electrical: 'Elektrik',
    gardening: 'Gartenbau',
    handyman: 'Handwerker',
    painting: 'Malerei',
    moving: 'Umzug',
    tutoring: 'Nachhilfe',
    
    // Common
    save: 'Speichern',
    cancel: 'Abbrechen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    confirm: 'Bestätigen',
    loading: 'Wird geladen...',
  }
}

export type Language = 'en' | 'de'
export type TranslationKey = keyof typeof translations.en