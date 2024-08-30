"use client";
import { useEffect} from 'react';
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Idiomas from '@/components/idiomas/Idiomas';
import Modalidad from '@/components/modalidad/Modalidad';
import Profe from '@/components/profe/Profe';
import Planes from '@/components/planes/Planes';
import Footer from '@/components/footer/Footer';
import Boton from '@/components/boton/Boton';
import Testimonials from '@/components/testimonials/Testimonials';
import ButtonRedirect from '@/components/ButtonRedirect/ButtonRedirect';
import ButonIma from '@/components/ButonIma/ButonIma';
import ButonPre from '@/components/ButonPre/ButonPre';
import ContactPage from '@/components/ContactPage/ContactPage';
import Frecuente from '@/components/frecuente/Frecuente';

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);

  return (
    <div>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      <div id='idiomas'>
        <Idiomas />
      </div>
        <ButtonRedirect />
        <ButonPre />
        <ButonIma />
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id='modalidad'>
        <Modalidad />
      </div>
      <div id='profe'>
        <Profe />
      </div>
      <div id='planes'>
        <Planes />
      </div>
      <div>
        <Frecuente />
      </div>
      <div>
      <ContactPage /> 
      </div>
      <div id='footer'>
        <Footer />
      </div>
      <Boton />
    </div>
  )
}

export default Home
