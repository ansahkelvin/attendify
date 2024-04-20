import bcrypt from 'bcrypt';

export async function saltAndHashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Cost factor for hashing the password
    try {
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error; // Re-throw to handle it at a higher level if needed
    }
}