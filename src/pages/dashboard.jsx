"use client"
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import Link from "next/link";

const Dashboard = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (user === null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>No estás autenticado</h1>
        <Link href="/" className= "block w-full px-4 py-2 mt-4 text-center text-white bg-green-500 rounded-lg hover:bg-green-600">
          Ir a la página de inicio de sesión
        </Link>
      </div>
    );
  }

  return (
    <div className="flex text-center items-center justify-center">
      <h1 className="text-center text-xl font-bold">Bienvenido, <span className="text-sm">{user.email}</span></h1>
      <p className="text-center text-xl font-bold">Hola curso de portugues</p>
      
      <Link href="/formulario"
        onClick={handleLogout}
        className="px-4 py-2 mt-4 text-center text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Cerrar sesión y Logout
      </Link>
    </div>
  );
};

export default Dashboard;