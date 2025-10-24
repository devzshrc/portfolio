// Simple authentication utility
// In production, use a proper auth solution like NextAuth.js or Supabase Auth

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com"
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "password123"

export interface AuthSession {
  email: string
  isAuthenticated: boolean
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  // In production, hash passwords and store securely
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function getSessionFromCookie(cookieValue?: string): AuthSession | null {
  if (!cookieValue) return null
  try {
    const decoded = JSON.parse(Buffer.from(cookieValue, "base64").toString())
    return decoded
  } catch {
    return null
  }
}

export function createSessionCookie(email: string): string {
  const session: AuthSession = {
    email,
    isAuthenticated: true,
  }
  return Buffer.from(JSON.stringify(session)).toString("base64")
}
