import { MapPin, Phone } from "lucide-react"

function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="max-w-4xl pt-16 md:pt-32 lg:pt-44 pb-20">
          <h1 className="pb-4">
            Mai più <br /> Brutte Sorprese.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl pt-2">
            Lorem ipsum dolor sit amet consectetur. Pharetra tempor viverra <br className="hidden md:block" />
            mattis libero. Id in enim curabitur sit eu turpis sit sodales
            vitae.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4 pt-10">
            <button
              type="button"
              className="bg-white text-dark rounded-full px-20 py-3 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white text-sm font-medium focus:outline-none transition-all duration-300"
            >
              Scopri di più
            </button>
            <button
              type="button"
              className="btn-primary-outline !py-3 hover:bg-white hover:text-dark transition-all duration-300"
            >
              Contattaci
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-10 md:pt-24 lg:pt-44">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#979797]" />
              <span className="flex-base md:text-xl font-bold">
                Via corso della repubblica 322
              </span>
            </div>
            <p className="flex-base md:text-xl text-[#717171]">Velletri (RM) 00049</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-sm md:text-base text-[#979797]" />
            <span className="text-base md:text-xl font-bold">+39 379 211 5840</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero