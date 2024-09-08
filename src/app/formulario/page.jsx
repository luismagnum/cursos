"use client";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { googleProvider } from "@/firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";

const googleLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 mr-2">
    <path
      fill="#4285F4"
      d="M24 9.5c2.06 0 3.94.72 5.42 1.9l4.02-4.02C30.88 5.34 27.61 4 24 4 15.94 4 9.44 9.96 8.05 17.54l4.95 3.86C14.12 14.64 18.63 9.5 24 9.5z"
    />
    <path
      fill="#34A853"
      d="M24 44c5.84 0 10.72-1.93 14.28-5.26l-4.95-3.9c-2.58 1.73-5.85 2.76-9.33 2.76-5.4 0-10-3.46-11.66-8.28l-5.01 3.86C10.33 39.88 16.7 44 24 44z"
    />
    <path
      fill="#FBBC05"
      d="M42.72 24.5c0-.8-.07-1.57-.2-2.32H24v6.82h10.64c-.46 2.22-1.71 4.09-3.49 5.36l5 3.9c2.92-2.7 4.57-6.67 4.57-11.76z"
    />
    <path
      fill="#EA4335"
      d="M12.34 28.32C11.93 27.07 11.7 25.8 11.7 24.5s.23-2.57.64-3.82l-4.96-3.86C6.49 19.18 6 21.79 6 24.5s.49 5.32 1.38 7.68l4.96-3.86z"
    />
  </svg>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false); 

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
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true); 
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta.");
      } else if (err.code === "auth/user-not-found") {
        setError("El correo electrónico no está registrado.");
      } else {
        setError("Ocurrió un error. Inténtalo de nuevo.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoginSuccess(true); 
    } catch (err) {
      setError("Ocurrió un error con el inicio de sesión con Google.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Contraseña
            </label>
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
            Iniciar sesión
          </button>
        </form>
        <hr className="my-6" />
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-green-500"
        >
          {googleLogo}
          Iniciar sesión con Google
        </button>
        {loginSuccess && (
          <Link
            href="/dashboard" 
            className="block w-full px-4 py-2 mt-4 text-center text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Empezar curso
          </Link>
        )}
      </div>
      <Link
        href="/"
        className="flex text-center justify-center text-sky-900 hover:text-blue-500 font-bold ml-4"
      >
        Volver al Home
      </Link>
    </div>
  );
};

export default LoginForm;
