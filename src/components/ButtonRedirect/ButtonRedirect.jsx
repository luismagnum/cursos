import Link from 'next/link';

const ButtonRedirect = () => {
  return (
    <div data-aos="zoom-in" className="bg-blue-100 p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md mx-auto mt-6">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
        ¡Inscríbete en nuestros cursos de portugués o ingles!
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-6">
        ¿Estás listo para aprender portugués o ingles? ¡Únete a nosotros y comienza tu viaje de aprendizaje hoy mismo!
      </p>
      <Link href="/formulario" legacyBehavior>
        <a className="bg-sky-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 inline-block">
          Inscribirme
        </a>
      </Link>
    </div>
  );
};

export default ButtonRedirect;


