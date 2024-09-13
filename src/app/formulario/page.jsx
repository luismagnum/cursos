"use client";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { googleProvider } from "@/firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import Image from "next/image"; // Importa Image

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

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
        setLoginSuccess(true);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setLoginSuccess(true);
      }
    } catch (err) {
      if (isRegistering) {
        if (err.code === "auth/email-already-in-use") {
          setError("El correo electrónico ya está registrado.");
        } else {
          setError("Ocurrió un error durante el registro. Inténtalo de nuevo.");
        }
      } else {
        if (err.code === "auth/wrong-password") {
          setError("La contraseña es incorrecta.");
        } else if (err.code === "auth/user-not-found") {
          setError("El correo electrónico no está registrado.");
        } else {
          setError("Ocurrió un error. Inténtalo de nuevo.");
        }
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
            src="/gogle.png" // Asegúrate de que la ruta sea correcta
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          {isRegistering ? "Registrarse con Google" : "Iniciar sesión con Google"}
        </button>
        {loginSuccess && (
          <Link
            href="/dashboard"
            className="block w-full px-4 py-2 mt-4 text-center text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Empezar curso
          </Link>
        )}
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
