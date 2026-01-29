import { cookies } from 'next/headers';
import { AdminSession } from '@/types/admin';
import fs from 'fs';
import path from 'path';

export const ADMIN_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const SESSIONS_FILE = path.join(process.cwd(), 'src', 'data', 'sessions.json');

// File-based session store for MVP persistence
function loadSessions(): Map<string, AdminSession> {
  try {
    if (fs.existsSync(SESSIONS_FILE)) {
      const data = fs.readFileSync(SESSIONS_FILE, 'utf-8');
      const sessionsObj = JSON.parse(data);
      return new Map(Object.entries(sessionsObj));
    }
  } catch {
    // Ignore errors, return empty map
  }
  return new Map();
}

function saveSessions(sessions: Map<string, AdminSession>): void {
  try {
    const sessionsObj = Object.fromEntries(sessions);
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessionsObj, null, 2));
  } catch (error) {
    console.error('Failed to save sessions:', error);
  }
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
  saveSessions(sessions);
  return token;
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;

  const sessions = loadSessions();
  const session = sessions.get(token);
  if (!session) return false;

  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    saveSessions(sessions);
    return false;
  }

  return true;
}

export function deleteSession(token: string): void {
  const sessions = loadSessions();
  sessions.delete(token);
  saveSessions(sessions);
}

export async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE_NAME)?.value;
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getSessionToken();
  return isValidSession(token);
}
