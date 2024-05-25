import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AuthContextProps {
  session: Session | null;
  setSession: Dispatch<SetStateAction<Session | null>>;
}

export const AuthContext = createContext({} as AuthContextProps);

interface UserData {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  img: string | null;
}

interface Session {
  user: UserData;
  accessToken?: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}
