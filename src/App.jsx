import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Plus, Minus, X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const WheatIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22v-8"/>
    <path d="M12 14c-2-1.5-3-3-3-5 0-1 1-2 2-2s2 1.5 2 3"/>
    <path d="M12 14c2-1.5 3-3 3-5 0-1-1-2-2-2s-2 1.5-2 3"/>
    <path d="M11 11c-1.5-1.5-2.5-3-2.5-4.5 0-1 1-1.5 1.5-1.5s2 1.5 2 3"/>
    <path d="M13 11c1.5-1.5 2.5-3 2.5-4.5 0-1-1-1.5-1.5-1.5s-2 1.5-2 3"/>
    <path d="M10 8c-1-1.5-2-2.5-2-4 0-.5.5-1 1-1s1.5 1 1.5 2.5"/>
    <path d="M14 8c1-1.5 2-2.5 2-4 0-.5-.5-1-1-1s-1.5 1-1.5 2.5"/>
  </svg>
);

const catalog = [
  {
    id: 'gny',
    name: 'Galletas New York',
    desc: 'Disfruta nuestras irresistibles galletas estilo New York: grandes, suaves por dentro y ligeramente crujientes por fuera. Cada una está generosamente rellena para una explosión de sabor en cada mordida.\nSabores disponibles: cereza, Lucky Charms con relleno de chocolate blanco, mantequilla de maní con chocolate y más.\n✨ Perfectas para darte un gusto dulce o compartir.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a1dc5735e?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Unidad', price: 7000 }]
  },
  {
    id: 'gv',
    name: 'Galletas de Vainilla',
    desc: 'Delicadas galletas de vainilla con textura suave y un delicioso relleno de mora que equilibra lo dulce con un toque ácido.\n💜 Ideales para acompañar con café o como snack dulce en cualquier momento.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Bolsa x2', price: 6000 }, { label: 'Caja x4', price: 12000 }]
  },
  {
    id: 'alf',
    name: 'Alfajores',
    desc: 'Suaves y delicados alfajores rellenos de cremoso arequipe, que se derriten en la boca. Cada bocado es una mezcla perfecta de dulzura y tradición.\n✨ Un clásico irresistible para los amantes de lo dulce.',
    image: 'https://images.unsplash.com/photo-1512223625736-224484bc9c43?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Bolsa x2', price: 6000 }, { label: 'Caja x4', price: 12000 }]
  },
  {
    id: 'brw',
    name: 'Brownies',
    desc: 'Brownies intensos de chocolate, húmedos y con una textura perfecta. Disponibles en versiones con Milo para un toque único y delicioso.\n🤎 Perfectos para los verdaderos amantes del chocolate.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Unidad', price: 7000 }]
  },
  {
    id: 'cuch',
    name: 'Cuchareables',
    desc: 'Postres en vaso llenos de capas de sabor y textura. Ideales para disfrutar a cucharadas:\nAlfajor, leche Klim, panderitos, red velvet, cheesecake de frutos rojos y más.\n✨ Cremosos, indulgentes y perfectos para darte un gusto especial.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Unidad', price: 15000 }]
  },
  {
    id: 'tcn',
    name: 'Torta Casera / Naranja',
    desc: 'Esponjosa, fresca y con ese sabor casero que reconforta. Nuestra torta de naranja tiene un toque cítrico delicioso que la hace ligera y perfecta para cualquier ocasión.\n☕ Ideal para acompañar con una bebida caliente.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Porción', price: 12000 }]
  },
  {
    id: 'tz',
    name: 'Torta de Zanahoria',
    desc: 'Suave bizcocho de zanahoria con trocitos de nuez, lleno de sabor y con una textura húmeda irresistible.\n✨ Perfecta combinación entre lo casero y lo gourmet.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800',
    options: [{ label: 'Entera (6-8 porciones)', price: 60000 }]
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (product, option) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.optionLabel === option.label);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.optionLabel === option.label
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, name: product.name, image: product.image, optionLabel: option.label, price: option.price, qty: 1 }];
    });
  };

  const updateQty = (id, optionLabel, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.optionLabel === optionLabel) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id, optionLabel) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.optionLabel === optionLabel)));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);

  const handleWompiCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      window.location.href = "https://checkout.wompi.co/l/test_VPOS_Sm21WY";
    }, 1500);
  };

  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen bg-[#FDFBFB] font-sans text-[#4A3B3C] selection:bg-[#E5C2C4] selection:text-[#4A3B3C] overflow-hidden relative">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-3deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        .bg-polka {
          background-image: radial-gradient(#E5C2C4 10%, transparent 11%);
          background-size: 24px 24px;
          opacity: 0.15;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #E5C2C4 1px, transparent 1px), linear-gradient(to bottom, #E5C2C4 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none bg-polka z-0"></div>

      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-40 bg-[#FDFBFB]/85 backdrop-blur-xl border-b-2 border-dashed border-[#E5C2C4]/40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between relative z-10">
          <div className="flex flex-col items-center justify-center cursor-pointer animate-pulse-soft group mt-1 md:mt-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dashed border-[#C88D92] p-0.5 flex items-center justify-center bg-white shadow-sm overflow-hidden mb-0.5 md:mb-1">
              <img src="/logo.jpeg" alt="Logo Morita" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex items-center gap-1 text-[#C88D92]">
              <Star size={6} fill="currentColor" />
              <span className="text-xs md:text-sm font-black tracking-tighter text-[#C88D92] leading-none" style={{ fontFamily: 'Georgia, serif' }}>
                MORITA'S
              </span>
              <Star size={6} fill="currentColor" />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
            <a href="https://wa.me/573003485009?text=Hola%20Moritas%20Bakery!%20Quiero%20hacer%20un%20pedido." target="_blank" rel="noreferrer" className="text-[#A76569] hover:text-[#C88D92] transition-colors hover:scale-110 transform duration-300" aria-label="WhatsApp">
              <WhatsAppIcon size={22} />
            </a>
            <a href="https://www.instagram.com/moritabakery__?igsh=MTg3bTYwYmMxdDY0bw==" target="_blank" rel="noreferrer" className="text-[#A76569] hover:text-[#C88D92] transition-colors hover:scale-110 transform duration-300" aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <button onClick={() => setIsCartOpen(true)} className="relative p-1.5 md:p-2 text-[#4A3B3C] hover:text-[#C88D92] transition-colors hover:scale-110 transform duration-300">
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#C88D92] text-white text-[0.6rem] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="absolute top-20 left-4 md:left-20 text-[#C88D92]/40 animate-float hidden md:block">
          <WheatIcon size={70} />
        </div>
        <div className="absolute top-40 right-4 md:right-20 text-[#C88D92]/40 animate-float-reverse hidden md:block">
          <WheatIcon size={80} className="rotate-[30deg]" />
        </div>
        <div className="absolute bottom-10 left-10 text-[#F5B5BA]/60 animate-float-reverse">
          <Star size={30} fill="currentColor" className="-rotate-12" />
        </div>
        <div className="absolute top-10 right-1/4 text-[#F5B5BA]/60 animate-float">
          <Sparkles size={30} fill="currentColor" />
        </div>

        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-8 md:mb-10 rounded-full border-4 border-dashed border-[#C88D92] p-1.5 md:p-2 bg-white shadow-[0_10px_40px_rgba(200,141,146,0.2)] hover:scale-105 transition-transform duration-500 group">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2 text-[#C88D92] group-hover:scale-110 transition-transform">
            <Star size={16} fill="currentColor" />
            <Star size={24} fill="currentColor" className="-translate-y-2" />
            <Star size={16} fill="currentColor" />
          </div>
          <img src="/logo.jpeg" alt="Moritas Bakery Logo" className="w-full h-full object-cover rounded-full" />
          <div className="absolute -bottom-2 md:-bottom-4 -left-4 md:-left-6 text-[#C88D92] group-hover:-rotate-12 transition-transform">
            <WheatIcon size={40} className="md:w-12 md:h-12 -rotate-45" />
          </div>
          <div className="absolute -bottom-2 md:-bottom-4 -right-4 md:-right-6 text-[#C88D92] group-hover:rotate-12 transition-transform">
            <WheatIcon size={40} className="md:w-12 md:h-12 rotate-45 scale-x-[-1]" />
          </div>
        </div>

        <span className="inline-block py-1.5 px-4 rounded-full bg-[#E5C2C4]/30 text-[#A76569] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 backdrop-blur-sm border border-[#C88D92]/20 shadow-sm">
          <Sparkles size={12} className="inline mr-2 -translate-y-[1px]" />
          Horneado al instante
          <Sparkles size={12} className="inline ml-2 -translate-y-[1px]" />
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#4A3B3C] mb-4 md:mb-6 leading-[1.1]">
          Frescura que se <br/><span className="text-[#C88D92]">siente.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#A76569] max-w-2xl mx-auto font-light leading-relaxed mb-8 md:mb-10 px-2">
          Repostería artesanal de alta calidad. Trabajamos <strong>solo por encargo</strong> para garantizar que cada bocado llegue a ti con la frescura y el amor que mereces.
        </p>
        <button
          onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#C88D92] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full font-medium tracking-wide hover:bg-[#A76569] hover:shadow-lg hover:shadow-[#C88D92]/30 transition-all duration-300 transform hover:-translate-y-1 animate-pulse-soft"
        >
          Explorar el Menú
        </button>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="py-24 px-6 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10 border-t-4 border-dashed border-[#E5C2C4]/30">
        <div className="absolute top-0 inset-x-0 h-10 bg-grid-pattern rounded-t-[3rem]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <WheatIcon size={32} className="text-[#E5C2C4] scale-x-[-1] rotate-12 animate-pulse-soft" />
            <h3 className="text-3xl font-semibold tracking-tight text-[#4A3B3C] px-2 text-center">Nuestro Catálogo</h3>
            <WheatIcon size={32} className="text-[#E5C2C4] -rotate-12 animate-pulse-soft" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {catalog.map((product) => (
              <div key={product.id} className="group flex flex-col bg-[#FDFBFB] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(200,141,146,0.2)] hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-[#E5C2C4]/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0e8e8] m-2 rounded-t-[1.5rem] rounded-b-xl border-2 border-dashed border-[#E5C2C4]/60">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B3C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <Sparkles size={24} className="text-white drop-shadow-md" />
                  </div>
                </div>
                <div className="p-5 md:p-8 pt-4 flex flex-col flex-grow">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-[#4A3B3C] group-hover:text-[#C88D92] transition-colors">{product.name}</h4>
                  <p className="text-[#A76569] text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">{product.desc}</p>
                  <div className="space-y-3 mt-auto">
                    {product.options.map((opt, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-3 md:p-3.5 rounded-2xl border border-[#E5C2C4]/40 group-hover:border-[#C88D92]/40 transition-colors">
                        <div className="flex flex-col">
                          <span className="text-[10px] md:text-xs font-semibold text-[#A76569] uppercase tracking-wider">{opt.label}</span>
                          <span className="text-base md:text-lg font-bold text-[#4A3B3C]">{formatPrice(opt.price)}</span>
                        </div>
                        <button
                          onClick={() => addToCart(product, opt)}
                          className="bg-[#FDFBFB] text-[#C88D92] border border-[#C88D92] h-9 w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center hover:bg-[#C88D92] hover:text-white hover:rotate-90 transition-all duration-300"
                          aria-label="Agregar al carrito"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4A3B3C] text-[#FDFBFB] py-16 text-center relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C88D92] to-transparent opacity-50"></div>
        <div className="absolute -left-10 -bottom-10 text-[#E5C2C4]/10 pointer-events-none">
          <WheatIcon size={200} className="rotate-45" />
        </div>
        <div className="absolute -right-10 -bottom-10 text-[#E5C2C4]/10 pointer-events-none">
          <WheatIcon size={200} className="-rotate-45 scale-x-[-1]" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full border-2 border-dashed border-[#C88D92] p-1 mb-6 hover:scale-110 transition-transform cursor-pointer overflow-hidden">
            <img src="/logo.jpeg" alt="Logo Footer" className="w-full h-full object-cover rounded-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
          <div className="flex justify-center gap-2 mb-4 text-[#C88D92]">
            <Star size={14} fill="currentColor" />
            <Star size={18} fill="currentColor" className="-translate-y-1" />
            <Star size={14} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-[#C88D92] mb-2" style={{ fontFamily: 'Georgia, serif' }}>MORITA'S</h2>
          <p className="text-[#E5C2C4] mb-8 text-sm tracking-widest uppercase">Panadería & Repostería</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="https://www.instagram.com/moritabakery__?igsh=MTg3bTYwYmMxdDY0bw==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#FDFBFB] hover:text-[#C88D92] transition-colors">
              <InstagramIcon size={20} />
              <span>@moritabakery__</span>
            </a>
            <a href="https://wa.me/573003485009?text=Hola%20Moritas%20Bakery!%20Quiero%20hacer%20un%20pedido." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#FDFBFB] hover:text-[#C88D92] transition-colors">
              <WhatsAppIcon size={20} />
              <span>+57 3003485009</span>
            </a>
          </div>
          <p className="mt-12 text-[#A76569] text-xs">© 2026 Morita's Bakery. Diseñado con dulzura y calidad.</p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href="https://wa.me/573003485009?text=Hola%20Moritas%20Bakery!%20Quiero%20hacer%20un%20pedido." target="_blank" rel="noreferrer" className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 bg-[#25D366] text-white p-3 md:p-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 animate-float" aria-label="Chat en WhatsApp">
        <WhatsAppIcon size={28} />
      </a>

      {/* CARRITO */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-[#4A3B3C]/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full sm:max-w-md bg-[#FDFBFB] h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#E5C2C4]/30 bg-white">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#4A3B3C]">Tu Orden</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 bg-[#FDFBFB] rounded-full text-[#A76569] hover:bg-[#E5C2C4]/30 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#A76569] space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} className="text-[#E5C2C4]" />
                  <p className="text-lg">Tu carrito está vacío</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-[#C88D92] font-semibold hover:underline">Ver el catálogo</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.optionLabel}`} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-[#E5C2C4]/20">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div className="flex-grow">
                        <h4 className="font-bold text-[#4A3B3C] text-sm leading-tight">{item.name}</h4>
                        <span className="text-xs text-[#A76569]">{item.optionLabel}</span>
                        <div className="font-semibold text-[#C88D92] mt-1">{formatPrice(item.price)}</div>
                      </div>
                      <div className="flex flex-col items-center gap-2 bg-[#FDFBFB] p-1 rounded-full border border-[#E5C2C4]/30">
                        <button onClick={() => updateQty(item.id, item.optionLabel, 1)} className="p-1 text-[#A76569] hover:text-[#4A3B3C]"><Plus size={14} /></button>
                        <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => { if (item.qty === 1) removeItem(item.id, item.optionLabel); else updateQty(item.id, item.optionLabel, -1); }} className="p-1 text-[#A76569] hover:text-[#4A3B3C]">
                          {item.qty === 1 ? <X size={14} /> : <Minus size={14} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E5C2C4]/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#A76569]">Subtotal</span>
                  <span className="font-semibold text-[#4A3B3C]">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-[#4A3B3C]">Total a pagar</span>
                  <span className="text-2xl font-black text-[#C88D92]">{formatPrice(cartTotal)}</span>
                </div>
                <button
                  onClick={handleWompiCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-[#181820] text-white py-4 rounded-2xl font-bold tracking-wide flex justify-center items-center gap-3 hover:bg-black transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15)] disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <span className="animate-pulse">Conectando...</span>
                  ) : (
                    <>
                      <span>Pagar con</span>
                      <span className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Wompi</span>
                      <ArrowRight size={20} className="ml-2 opacity-80" />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-[#A76569] mt-4 flex items-center justify-center gap-1">
                  <CheckCircle2 size={12} /> Pago 100% seguro y encriptado
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
