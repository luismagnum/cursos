"use client";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { googleProvider } from "@/firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import Image from "next/image";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
        setEmail("");
        setPassword("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Usuario creado exitosamente");
        setShowSuccessMessage(true);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Inicio de sesión exitoso");
        setShowSuccessMessage(true);
      }
    } catch (err) {
      if (isRegistering) {
        if (err.code === "auth/email-already-in-use") {
          setError("El correo electrónico ya está registrado.");
        } else {
          setError("Ocurrió un error durante el registro. Inténtalo de nuevo.");
        }
      } else {
        setError("Ocurrió un error. Inténtalo de nuevo.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setSuccessMessage("Inicio de sesión exitoso con Google");
      setShowSuccessMessage(true);
    } catch (err) {
      setError("Ocurrió un error con el inicio de sesión con Google.");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Muestra el mensaje de éxito por 3 segundos antes de redirigir
        setTimeout(() => {
          setShowSuccessMessage(false);
          window.location.href = '/dashboard';
        }, 3000);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className={`bg-white rounded-lg shadow-md ${showSuccessMessage ? 'opacity-50' : ''}`}>
        <div className="w-full max-w-md p-8 space-y-6">
          <h1 className="text-2xl font-bold text-center">
            {isRegistering ? "Registrarse" : "Iniciar sesión"}
          </h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleEmailLogin}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              {isRegistering ? "Registrarse" : "Iniciar sesión"}
            </button>
          </form>
          <hr className="my-6" />
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-green-500"
          >
            <Image
              src="/gogle.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            {isRegistering ? "Registrarse con Google" : "Iniciar sesión con Google"}
          </button>
          <p className="text-center mt-4">
            {isRegistering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-500 hover:underline"
            >
              {isRegistering ? "Iniciar sesión" : "Registrarse"}
            </button>
          </p>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <p className="text-xl font-semibold text-center mb-4">{successMessage}</p>
            <div className="mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13l3 3m0 0l3-3m-3 8h16M3 21a9 9 0 01-9 9m9-9H6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      <Link href="/" className="mt-4 text-blue-500 hover:underline">Volver al Home</Link>
    </div>
  );
};

export default LoginForm;
