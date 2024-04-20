import 'next-auth';

declare module 'next-auth' {
    /**
     * Extends the built-in session.user type from NextAuth.js
     * This is useful for when you're adding custom properties to the session user object.
     */
    interface User {
        id: string; // Assuming id is a number. Adjust the type accordingly.
    }

    /**
     * Extends the built-in session type from NextAuth.js
     */
    interface Session {
        user: User; // Overriding the user property with our extended User type
    }
}