"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/navigation';

export function UserDetails() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    if (!user) {
        return null;
    }
    else {
        return (
            <p className="mt-4">
                Welcome, {user.displayName} ({user.email})
            </p>)
    }
}

export default function LandingPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const router = useRouter();

    const handleLogin = async () => {
        // Sign in to Firebase with GitHub authentication
        await gitHubSignIn();
        router.push('/week-9/shopping-list');
    }

    const handleLogout = async () => {
        // Sign out of Firebase
        await firebaseSignOut();
    };

    return (
        <main className="p-6 text-center">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">
                Welcome to the CPRG 306 Week 9 Portal
            </h1>
            <button
                onClick={user ? handleLogout : handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {user ? "Logout" : "Login with GitHub"}
            </button>
            <UserDetails />
        </main>
    );
}