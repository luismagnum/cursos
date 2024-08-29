import Slider from 'react-slick';
import BgImage from '../../../public/curso.png'

const BgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:"repeat",
};

const TestimonialData = [
    {
        id: 1,
        name: "luis diaz",
        text:  "Gracias a este curso, ahora puedo hablar con fluidez en inglés. Los profesores son increíbles y las lecciones muy dinámicas. ¡Lo recomiendo al 100%!",
        imag: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: "luis diaz",
        text: "Nunca pensé que aprender Portugues sería tan fácil. El contenido es claro y práctico, y el apoyo del equipo docente es excepcional.",
        imag: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        name: "luis diaz",
        text: "El curso de ingles me ayudó a mejorar mi vocabulario rápidamente. Las clases en línea son interactivas y efectivas. Estoy muy contenta con mi progreso.",
        imag: "https://picsum.photos/200/300",
    },
    {
        id: 4,
        name: "luis diaz",
        text: "Este curso de portugues superó mis expectativas. Aprendí a leer y escribir en portugues en pocas semanas. ¡Una experiencia de aprendizaje maravillosa!",
        imag: "https://picsum.photos/200/300",
    },
]

const Testimonials = () => {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
  return (
    <div style={BgStyle}>
      <div className='bg-white/80'>
        <div className="container">
            <div data-aos="fade-up" className='text-center mb-12'>
                <h1 className='text-3xl text-sky-900 font-bold'>Testimonials</h1>
            </div>
            <div data-aos= "zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map(({id, name, text, imag}) =>{
                        return (
                            <div key={id} className='my-6'>
                                <div className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-sky-900'>
                                    <div className='flex flex-col items-center'>
                                            <p className='text-xs text-white'>{text}</p>
                                    </div>
                                    <div>
                                        <img src={imag} alt={name} className="rounded-full w-16 h-16"/>
                                        <p className='text-sm text-black ml-2'>{name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
