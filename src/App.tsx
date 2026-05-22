import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  Menu,
  X,
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Star
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Example services
  const services = [
    { name: 'Dental Care', icon: <Stethoscope className="w-8 h-8 text-primary" />, desc: 'Comprehensive dental services for a healthy smile.' },
    { name: 'Skin Treatment', icon: <Heart className="w-8 h-8 text-primary" />, desc: 'Advanced dermatological treatments for all skin types.' },
    { name: 'Physiotherapy', icon: <Activity className="w-8 h-8 text-primary" />, desc: 'Expert physical therapy to restore movement and function.' },
    { name: 'Child Care', icon: <Baby className="w-8 h-8 text-primary" />, desc: 'Pediatric care ensuring the well-being of your little ones.' },
  ];

  // Example testimonials
  const testimonials = [
    { name: 'Sarah M.', text: 'The doctor was very patient and explained everything clearly. Highly recommend!', rating: 5 },
    { name: 'John D.', text: 'Clean clinic, friendly staff, and minimal wait time. Excellent experience.', rating: 5 },
    { name: 'Priya K.', text: 'My skin condition improved significantly within weeks. Thank you!', rating: 4 },
  ];

  // Example gallery photos (Unsplash placeholders)
  const galleryPhotos = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=400&fit=crop'
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-xl">
                <Heart className="text-primary w-6 h-6" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-2xl text-slate-900">MediCare Clinic</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
              <a href="#appointment" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50">About</a>
              <a href="#services" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50">Services</a>
              <a href="#gallery" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50">Gallery</a>
              <a href="#testimonials" onClick={handleNavClick} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50">Testimonials</a>
              <a href="#appointment" onClick={handleNavClick} className="block px-3 py-3 mt-4 text-center rounded-full bg-primary text-white text-base font-medium hover:bg-primary-dark">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting New Patients
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
                Expert Care<br />
                <span className="text-gray-400 italic font-light">For Your Family</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience world-class healthcare with a personal touch. Our multi-specialty clinic provides compassionate care to help you live a healthier, happier life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#appointment" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
                  Book Appointment
                  <Calendar className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <Phone className="w-5 h-5 text-green-500" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden rounded-bl-none shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" 
                  alt="Doctor with patient" 
                  className="object-cover w-full h-full"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Star className="text-primary w-6 h-6" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">4.9/5</p>
                    <p className="text-sm border-gray-500">From 500+ Patients</p>
                  </div>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[3rem] rounded-bl-none -z-10 translate-x-4 translate-y-4"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- About Doctor Section --- */}
      <section id="about" className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="Dr. Smith" className="object-cover w-full h-full" />
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Meet Your Doctor</h4>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Dr. Emily Smith, MD</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                With over 15 years of experience in internal medicine, Dr. Smith is dedicated to providing patient-centered care. She believes in treating the whole person, not just the symptoms.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-md mt-1">
                    <Stethoscope className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Qualifications</h5>
                    <p className="text-sm text-slate-600">MBBS, MD (Internal Medicine) from Harvard Medical School</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-md mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">Clinic Timings</h5>
                    <p className="text-sm text-slate-600">Mon - Sat: 9:00 AM - 5:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Our Specialties</h4>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Comprehensive Care</h2>
            <p className="text-slate-600">We offer a wide range of medical services to meet the diverse needs of your entire family in one convenient location.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Take a Look Inside</h4>
              <h2 className="text-4xl font-display font-bold text-slate-900">Our Clinic Gallery</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <img 
                key={idx} 
                src={photo} 
                alt={`Clinic interior ${idx + 1}`} 
                className="w-full h-64 object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section id="testimonials" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Patient Feedback</h4>
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-16">What Our Patients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform border border-gray-100 text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{test.text}"</p>
                <div className="font-semibold text-slate-900">— {test.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Appointment & Map --- */}
      <section id="appointment" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            
            {/* Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-display font-bold mb-2">Book an Appointment</h3>
              <p className="text-slate-600 mb-8">Fill out the form below and we will confirm your appointment shortly.</p>
              
              <form action="https://formspree.io/f/your_formspree_id" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input type="date" name="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                  Request Appointment
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4 text-center">Powered by Formspree. No backend needed.</p>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto w-full bg-gray-100 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.00000000001!2d-122.0838511!3d37.3860517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzEwLjAiTiAxMjLCsDA1JzAxLjkiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer & WhatsApp Floating Button --- */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-primary w-6 h-6" fill="currentColor" />
              <span className="font-display font-bold text-xl text-white">MediCare Clinic</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">Dedicated to providing the best healthcare services for you and your family.</p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              123 Health Ave, Medical City, MC 90210
            </div>
          </div>
          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#about" className="hover:text-primary">About Doctor</a></li>
               <li><a href="#services" className="hover:text-primary">Services</a></li>
               <li><a href="#testimonials" className="hover:text-primary">Patient Feedback</a></li>
             </ul>
          </div>
          <div>
             <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
             <ul className="space-y-2 text-sm mb-4">
               <li>Phone: +1 234 567 8900</li>
               <li>Email: info@medicareclinic.com</li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          © {new Date().getFullYear()} MediCare Clinic. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd5a] hover:scale-110 transition-all z-50 flex items-centerjustify-center group"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-7 h-7" fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
          Need help? Chat with us!
        </span>
      </a>

    </div>
  );
}
