import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook, Twitter, ChefHat, Cake, Heading as Bread, Coffee, Store, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectors = [
    {
      title: "Pâtisserie",
      icon: <Cake size={32} className="text-primary" />,
      description: "Délices sucrés fusion entre tradition sénégalaise et modernité"
    },
    {
      title: "Boulangerie",
      icon: <Bread size={32} className="text-primary" />,
      description: "Pains artisanaux et viennoiseries authentiques"
    },
    {
      title: "Restaurant Select",
      icon: <ChefHat size={32} className="text-primary" />,
      description: "Cuisine gastronomique sénégalaise contemporaine"
    },
    {
      title: "Fast Food",
      icon: <Coffee size={32} className="text-primary" />,
      description: "Saveurs locales en format rapide et pratique"
    },
    {
      title: "Boutique",
      icon: <Store size={32} className="text-primary" />,
      description: "Produits artisanaux et épicerie fine africaine"
    }
  ];

  const team = [
    {
      name: "Aminata Diallo",
      role: "PDG & Fondatrice",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800&q=80",
      description: "Visionnaire de la gastronomie sénégalaise moderne"
    },
    {
      name: "Omar Seck",
      role: "Chef Exécutif",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      description: "Maître de la fusion culinaire"
    },
    {
      name: "Fatou Sy",
      role: "Directrice des Opérations",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
      description: "Experte en gestion d'entreprise"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-3xl font-display font-bold text-gradient">CMILKA</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
              <a href="#sectors" className="hover:text-primary transition-colors">Nos Secteurs</a>
              <a href="#team" className="hover:text-primary transition-colors">Notre Équipe</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
            <a href="#sectors" className="hover:text-primary transition-colors">Nos Secteurs</a>
            <a href="#team" className="hover:text-primary transition-colors">Notre Équipe</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=1920&q=80" 
            alt="Cuisine Sénégalaise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-display text-white mb-6">CMILKA</h1>
            <p className="text-xl md:text-2xl text-white mb-8">L'Excellence Culinaire Sénégalaise</p>
            <a 
              href="#sectors" 
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Découvrir Nos Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display mb-6">Notre Histoire</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fondée en 2020, Cmilka est née de la passion d'Aminata Diallo pour la cuisine sénégalaise 
                et de sa vision d'une gastronomie africaine moderne. Notre entreprise combine traditions 
                culinaires ancestrales et innovations contemporaines pour créer des expériences 
                gastronomiques uniques.
              </p>
              <div className="flex items-center space-x-4">
                <Users size={24} className="text-primary" />
                <span>Plus de 100 employés passionnés</span>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" 
                alt="Cuisine Traditionnelle" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-16">Nos Secteurs d'Activité</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-xl font-display mb-2">{sector.title}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-16">Notre Équipe Dirigeante</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-display mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display mb-8">Contactez-Nous</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin size={24} className="text-primary" />
                  <span>123 Avenue Léopold Sédar Senghor, Dakar</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-primary" />
                  <span>+221 XX XXX XX XX</span>
                </div>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div className="h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
                alt="Notre Établissement" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Cmilka. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;