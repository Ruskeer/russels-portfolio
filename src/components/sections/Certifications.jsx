import React, { useState, useRef } from 'react'
import { Award, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { certifications } from '../../data/certification';
import FadeIn from '../animations/FadeIn';

const Certifications = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const closeViewer = () => {
    setSelectedCert(null);
    setZoomed(false);
  };

  // slide the row so card number "index" is in view
  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // next card (the % goes back to the first card after the last one)
  const nextCertification = () => {
    scrollToIndex((currentIndex + 1) % certifications.length);
  };

  // previous card (goes to the last card from the first one)
  const prevCertification = () => {
    scrollToIndex((currentIndex - 1 + certifications.length) % certifications.length);
  };

  const certificationStats = [
    { value: '6', label: 'Certificates' },
    { value: '3', label: 'Cisco Networking Academy' },
    { value: '2', label: 'Certiport IT Specialist' },
    { value: '1040', label: 'OJT Hours Completed' },
  ];

  return (
    <section id="certifications" className='relative py-20 bg-black overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/3 left-0 w-96 h-96 bg-primary/20 opacity-50 rounded-full blur-3xl'/>
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Heading */}
        <FadeIn delayed={0}>
          <div className='text-center mb-12'>
            <div className='flex inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6'>
              <Award className='w-4 h-4 text-primary'/>
              <span className='text-sm text-primary font-medium'>Certifications</span>
            </div>
            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
              Certifications and Diploma 
            </h2>
            <p className='text-lg text-white/60 max-w-2xl mx-auto'>
              Certificates and Diploma I earned through coursework and a 4 years college course, plus a 1040 hours of on-the-job internship experience.
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delayed={100}>
          <div className='relative'>


            <div
              ref={scrollContainerRef}
              className='overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar rounded-2xl'
              // 'x mandatory' = snap sideways and always land on a card
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className='flex'>
                {certifications.map((cert) => (

                  <div
                    key={cert.id}
                    className='w-full shrink-0 snap-start'
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className='grid md:grid-cols-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>

                      {/* Certificate image */}
                      <div className='bg-black/40 p-4 flex items-center justify-center cursor-zoom-in' onClick={() => setSelectedCert(cert)}>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className='w-full h-64 md:h-full object-contain'
                        />
                      </div>

                      {/* Certificate info */}
                      <div className='p-6 md:p-8 flex flex-col justify-center'>
                        <div className='flex items-center gap-2 mb-3'>
                          <Award className='w-4 h-4 text-primary'/>
                          <p className='text-sm text-primary font-medium'>{cert.issuer}</p>
                        </div>

                        <h3 className='text-2xl font-normal text-white mb-2'>{cert.title}</h3>
                        <p className='text-white/60 mb-6'>{cert.date}</p>

                        {/* only shows if the certificate has a verify link */}
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='self-start px-5'
                          >
                          
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                ))}
              </div>

            

          
              {/* Arrows */}
              <button
                onClick={prevCertification}
                className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 items-center justify-center h-10 w-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/20 transition-all duration-300 z-10'
                aria-label='Previous certificate'
              >
                <ChevronLeft className='w-6 h-6 text-white'/>
              </button>

              <button
                onClick={nextCertification}
                className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 items-center justify-center h-10 w-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/20 transition-all duration-300 z-10'
                aria-label='Next certificate'
              >
                <ChevronRight className='w-6 h-6 text-white'/>
              </button>

            </div>

            {/* Dots */}
            <div className='flex items-center justify-center gap-2 mt-8'>
              {certifications.map((cert, index) => (
                <button
                  key={cert.id}
                  onClick={() => scrollToIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-primary w-6 h-2'
                      : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delayed={200}>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
            {certificationStats.map((stat, index) => (
              <div key={index} className='text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-300'>
                <div className='text-3xl font-normal text-primary mb-1'>{stat.value}</div>
                <div className='text-sm text-white/60 '>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>

      {/* Certificate viewer - when user clicks the certificate card */}
      {selectedCert && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4'
          onClick={closeViewer}
        >
          <button
            onClick={closeViewer}
            className='absolute top-4 right-4 p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 z-10'
            aria-label='Close'
          >
            <X className='w-6 h-6 text-white'/>
          </button>

          <div
            className='w-full max-w-5xl max-h-[90vh] overflow-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              onClick={() => setZoomed(!zoomed)}
              className={`rounded-lg transition-all duration-300 ${
                zoomed
                  ? 'w-[200%] max-w-none cursor-zoom-out'
                  : 'w-full max-h-[85vh] object-contain cursor-zoom-in'
              }`}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications