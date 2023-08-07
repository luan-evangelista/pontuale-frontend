import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const Context = createContext();

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const handleLogin = async (params) => {

        try {
            const res = await api.post('./authenticate', params, { timeout: 2000 });
            console.log("🚀 ~ file: AuthContext.js:11 ~ handleLogin ~ res:", res)


            localStorage.setItem('@token', JSON.stringify(res.data.token));
            api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

            console.log(res.data.token);

            setAuthenticated(true);
        } catch (error) {
            console.log("🚀 ~ file: AuthContext.js:25 ~ handleLogin ~ error:", error)
            if (error.response.status === 401) {
                setError(true);
            }
            setAuthenticated(false);
        }

    };

    const handleLogout = async () => {
        localStorage.removeItem('@token');
        api.defaults.headers.Authorization = undefined;
        setAuthenticated(false);
        setError(false);
        console.log('LIMPOU TUDO', authenticated);
    }

    useEffect(() => {
        const token = localStorage.getItem('@token');
        console.log("TOKEN useEffect:", token)

        if (token) {
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    return (
        <Context.Provider value={{ authenticated, handleLogin, loading, handleLogout, error }}>
            {children}
        </Context.Provider>
    );
}

export { AuthProvider, Context };
