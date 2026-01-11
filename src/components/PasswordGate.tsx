import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Simple hash function for basic protection
const simpleHash = async (str: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Set your admin password here (hashed for basic protection)
// To generate a new hash, run in browser console:
// crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourpassword')).then(buf => console.log(Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')))
const ADMIN_PASSWORD_HASH = 'govindrajgupta'; // Default: "admin"

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const { toast } = useToast();

  // Check if already authenticated in this session
  useEffect(() => {
    const authToken = sessionStorage.getItem('admin_auth');
    if (authToken === ADMIN_PASSWORD_HASH) {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const hashedPassword = await simpleHash(password);
      
      if (hashedPassword === ADMIN_PASSWORD_HASH) {
        sessionStorage.setItem('admin_auth', ADMIN_PASSWORD_HASH);
        setIsAuthenticated(true);
        toast({ title: 'Access granted' });
      } else {
        toast({ 
          title: 'Incorrect password', 
          variant: 'destructive' 
        });
        setPassword('');
      }
    } catch (error) {
      toast({ 
        title: 'Authentication error', 
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="bg-muted rounded-2xl p-8 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-muted-foreground text-center mb-6">
            Enter password to access the admin panel
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              autoFocus
              className="text-center"
            />
            <Button 
              type="submit" 
              className="w-full rounded-full"
              disabled={isLoading || !password}
            >
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Unlock
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
