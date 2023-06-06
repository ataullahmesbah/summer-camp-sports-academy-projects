import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const authInfo = {
        user,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;