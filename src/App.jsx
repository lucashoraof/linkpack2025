import { useState, useEffect } from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { IoMoon, IoSunnyOutline } from 'react-icons/io5'
import bgMobileLight from './assets/bg-mobile-light.jpg'
import bgMobile from './assets/bg-mobile.jpg'
import avatar from './assets/avatar.png'

function App() {
  const [theme, setTheme] = useState('dark')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [images, setImages] = useState([
    'src/assets/image1.jpg',
    'src/assets/image2.jpg',
    'src/assets/image3.jpg',
    'src/assets/image4.jpg',
    'src/assets/image5.jpg'
  ])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000) // Muda a cada 3 segundos

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className={`bg-[url('${bgMobileLight}')] dark:bg-[url('${bgMobile}')] bg-cover bg-center bg-no-repeat min-h-screen font-inter bg-background text-foreground`}>
      <div className="w-full max-w-[360px] mx-auto pt-14">
        <button
          onClick={toggleTheme}
          className="animate-fadeIn opacity-0 [animation-delay:300ms] absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 dark:bg-black/20 
                    border border-black/5 dark:border-white/10 backdrop-blur-sm
                    flex items-center justify-center transition-colors
                    hover:bg-black/5 dark:hover:bg-white/5"
        >
          <IoMoon className="text-black/70 dark:hidden text-lg" />
          <IoSunnyOutline className="text-white hidden dark:block text-lg" />
        </button>

        <div className="animate-scaleIn opacity-0 text-center py-6">
          <img src={avatar} alt="Foto de perfil" className="w-[130px] mx-auto rounded-full" />
          <p className="font-semibold text-lg leading-6 mt-4 text-black dark:text-white">
            Pr. Rafael Oliveira
          </p>
        </div>

        <div className="animate-fadeIn opacity-0 [animation-delay:600ms] text-center mb-4">
          <p className="text-sm text-muted-foreground -mt-4 mb-4">
            ⛪ Pastor Presidente da Igreja Nova. <br />
            🎙️ Pregador do evangelho e escritor. <br />
            👇 Toque abaixo para mais informações.
          </p>

          <div className="flex justify-center gap-2">
            <a className="animate-slideLeft opacity-0 [animation-delay:900ms]">
              <a
                href="https://youtube.com/@pastorrafaeloliveiraoficia8317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 dark:bg-black/20 
                          border border-black/5 dark:border-white/10 backdrop-blur-sm
                          hover:bg-black/5 dark:hover:bg-white/5 transition-colors
                          text-black/70 dark:text-white/70"
              >
                <BsYoutube className="text-lg" />
                <span className="text-xs">YouTube</span>
              </a>
            </a>
            <a className="animate-fadeIn opacity-0 [animation-delay:1100ms]">
              <a
                href="https://tiktok.com/@prrafaeloliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 dark:bg-black/20 
                          border border-black/5 dark:border-white/10 backdrop-blur-sm
                          hover:bg-black/5 dark:hover:bg-white/5 transition-colors
                          text-black/70 dark:text-white/70"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="text-xs">TikTok</span>
              </a>
            </a>
            <a className="animate-slideRight opacity-0 [animation-delay:1300ms]">
              <a
                href="https://instagram.com/prrafaeloliveiraoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 dark:bg-black/20 
                          border border-black/5 dark:border-white/10 backdrop-blur-sm
                          hover:bg-black/5 dark:hover:bg-white/5 transition-colors
                          text-black/70 dark:text-white/70"
              >
                <BsInstagram className="text-lg" />
                <span className="text-xs">Instagram</span>
              </a>
            </a>
          </div>
        </div>

        <ul className="flex flex-col gap-2.5 py-4 px-4">
          <li className="animate-slideLeft opacity-0 [animation-delay:1500ms]">
            <a
              href="https://produto.mercadolivre.com.br/MLB-3677348895-livro-amar-cura-_JM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to
                        rounded border border-white/20 backdrop-blur-sm
                        hover:from-gradient-via hover:via-gradient-to hover:to-gradient-from
                        transition-all duration-300 animate-gradient bg-[length:200%_auto] group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="6" y="11" width="12" height="2" rx="0.5" fill="currentColor"/>
                    <rect x="6" y="15" width="12" height="2" rx="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-white font-medium tracking-wide">Livro Amar Cura</span>
                  <span className="text-[13px] text-white/90 font-normal">Todo o valor será destinado a obra do nosso terreno</span>
                </div>
              </div>
              <div className="w-8 h-8 border border-white/10 rounded flex items-center justify-center 
                              group-hover:border-white/20 transition-colors">
                <svg className="w-4 h-4 text-white/60 group-hover:text-white/80" viewBox="0 0 24 24" fill="none">
                  <path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </li>

          <li className="animate-slideLeft opacity-0 [animation-delay:1700ms]">
            <a
              href="https://wa.me/5521998838470?text=Ol%C3%A1%2C+gra%C3%A7as+e+paz%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+agenda+do+Pr.+Rafael+Oliveira."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white/20 dark:bg-black/10 
                        border border-black/10 dark:border-white/10 rounded backdrop-blur-sm 
                        hover:bg-black/10 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black/20 dark:bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-black/70 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 15C13.79 16.333 10.208 16.333 8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-black/90 dark:text-white font-medium tracking-wide">Convites e Agendas</span>
                  <span className="text-[13px] text-black/60 dark:text-[#94a3b8] font-normal">Faça contato pelo whatsapp para convites e agendas</span>
                </div>
              </div>
              <div className="w-8 h-8 border border-black/20 dark:border-white/10 rounded flex items-center justify-center 
                                group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors">
                <svg className="w-4 h-4 text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80" viewBox="0 0 24 24" fill="none">
                  <path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </li>

          <li className="animate-slideLeft opacity-0 [animation-delay:1900ms]">
            <a
              href="https://wa.me/5521971112233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white/20 dark:bg-black/10 
                        border border-black/10 dark:border-white/10 rounded backdrop-blur-sm 
                        hover:bg-black/10 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black/20 dark:bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-black/70 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 6H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 14H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 18H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-black/90 dark:text-white font-medium tracking-wide">Suporte Comercial</span>
                  <span className="text-[13px] text-black/60 dark:text-[#94a3b8] font-normal">Atendimento comercial para a categoria de produtos</span>
                </div>
              </div>
              <div className="w-8 h-8 border border-black/20 dark:border-white/10 rounded flex items-center justify-center 
                                group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors">
                <svg className="w-4 h-4 text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80" viewBox="0 0 24 24" fill="none">
                  <path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </li>

          <li className="animate-slideLeft opacity-0 [animation-delay:2100ms]">
            <a
              href="https://instagram.com/inova.sede"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white/20 dark:bg-black/10 
                        border border-black/10 dark:border-white/10 rounded backdrop-blur-sm 
                        hover:bg-black/10 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black/20 dark:bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-black/70 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8.71001L13.667 4.56201C13.199 4.19792 12.623 4.00024 12.03 4.00024C11.437 4.00024 10.861 4.19792 10.393 4.56201L5.05903 8.71001C4.73847 8.9593 4.47912 9.27854 4.30078 9.64336C4.12245 10.0082 4.02984 10.4089 4.03003 10.815V18.015C4.03003 18.5454 4.24074 19.0542 4.61582 19.4292C4.99089 19.8043 5.49967 20.015 6.03003 20.015H18.03C18.5604 20.015 19.0692 19.8043 19.4442 19.4292C19.8193 19.0542 20.03 18.5454 20.03 18.015V10.815C20.03 9.99201 19.65 9.21501 19 8.71001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 15C13.79 16.333 10.208 16.333 8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-black/90 dark:text-white font-medium tracking-wide">Inova Sede</span>
                  <span className="text-[13px] text-black/60 dark:text-[#94a3b8] font-normal">Todas as informações da nossa igreja, faça-nos uma visita</span>
                </div>
              </div>
              <div className="w-8 h-8 border border-black/20 dark:border-white/10 rounded flex items-center justify-center 
                                group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors">
                <svg className="w-4 h-4 text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80" viewBox="0 0 24 24" fill="none">
                  <path d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </li>
        </ul>

        <div className="animate-fadeIn opacity-0 [animation-delay:2300ms] px-4 py-6">
          <div className="bg-white/20 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded backdrop-blur-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[15px] text-black/90 dark:text-white font-medium tracking-wide">
                Fotos Recentes
              </h2>
              <div className="flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-1 rounded-sm transition-colors ${
                      currentSlide === index 
                        ? 'bg-black/60 dark:bg-white/60' 
                        : 'bg-black/20 dark:bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="min-w-full h-full">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="animate-fadeIn opacity-0 [animation-delay:2500ms] py-6 text-center text-sm text-foreground">
          Feito com ♥ por
          <a
            href="https://instagram.com/lucashoraof"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-primary"
          >
            {' '}
            Lucas Hora
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App 