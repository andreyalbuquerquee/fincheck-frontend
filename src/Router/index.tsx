import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom';

interface AuthGuardProps {
    isPrivate: boolean;
}

function AuthGuard ({ isPrivate }: AuthGuardProps) {
    const signedIn = false;

    if (!signedIn && isPrivate) {
        return <Navigate to="/login" replace/>
    }
 
    if (signedIn && !isPrivate) {
        return <Navigate to="/" replace/>
    }
    
    return <Outlet/>
}

export function Router() {
    return (
        <BrowserRouter>
            <Routes>             
                
                <Route element={ <AuthGuard isPrivate={false}/> } >
                    <Route path="/login" element={<h1>Login</h1>}/>
                    <Route path="/register" element={<h1>Register</h1>}/>                 
                </Route>
                
                <Route element={ <AuthGuard isPrivate/> }>
                    <Route path="/" element={<h1>Dashboard</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}