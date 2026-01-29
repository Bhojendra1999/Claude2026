import { cookies } from 'next/headers';
import { AdminSession } from '@/types/admin';

export const ADMIN_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// In-memory session store (works on Vercel but doesn't persist across function restarts)
// For production, migrate to Vercel KV, Redis, or database
const sessions = new Map<string, AdminSession>();

function loadSessions(): Map<string, AdminSession> {
  return sessions;
}

function saveSessions(): void {
  // No-op for in-memory storage
  // Sessions are already in the Map, no need to save to file
}

export function generateSessionToken(): string {
  return crypto.randomUUID();
}

export function verifyCredentials(username: string, password: string): boolean {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    console.error('Admin credentials not configured in environment variables');
    return false;
  }

  return username === adminUsername && password === adminPassword;
}

export function createSession(): string {
  const sessions = loadSessions();
  const token = generateSessionToken();
  const session: AdminSession = {
    token,
    expiresAt: Date.now() + SESSION_DURATION,
  };
  sessions.set(token, session);
  saveSessions();
  return token;
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;

  const sessions = loadSessions();
  const session = sessions.get(token);
  if (!session) return false;

  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    saveSessions();
    return false;
  }

  return true;
}

export function deleteSession(token: string): void {
  const sessions = loadSessions();
  sessions.delete(token);
  saveSessions();
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value;
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getSessionToken();
  return isValidSession(token);
}
