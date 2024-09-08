import { auth } from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (Component) => {
  return function WithAuth(props) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
        } else {
          router.push("/login");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <p>Cargando...</p>;
    }

    return authenticated ? <Component {...props} /> : null;
  };
};

export default withAuth;
