import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';

interface LoginCardProps {
  className?: string;
  onLoginSubmit?: (data: { username: string; password: string }) => Promise<void>;
}

const LoginCard: React.FC<LoginCardProps> = ({ className, onLoginSubmit }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (onLoginSubmit) {
        await onLoginSubmit({ username, password });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        console.log('Login submitted (default handler):', { username, password });
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Consider setting an error state to display to the user
    } finally {
      setIsLoading(false);
    }
  }, [username, password, onLoginSubmit]);

  const handleSignUpClick = useCallback(() => {
    console.log('Sign up link clicked');
    // This would typically navigate to a sign-up page or open a sign-up modal
  }, []);

  return (
    <Card className={cn(
      "w-[400px] bg-card rounded-md shadow-md", // As per layout requirements
      className
    )}>
      <form onSubmit={handleSubmit}>
        <CardContent className="p-6 flex flex-col gap-4"> {/* p-6 for padding, gap-4 for spacing between items */}
          <h2 className="text-3xl font-bold text-card-foreground">
            Log in
          </h2>
          <InputField
            id="username"
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            required
            disabled={isLoading}
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            required
            disabled={isLoading}
          />
          <PrimaryButton 
            type="submit" 
            isLoading={isLoading} 
            disabled={isLoading}
            className="mt-2" // Add a small top margin for visual separation as seen in some designs
          >
            Log in
          </PrimaryButton>
          <SecondaryLink 
            onClick={handleSignUpClick}
            disabled={isLoading}
          >
            or, sign up
          </SecondaryLink>
        </CardContent>
      </form>
    </Card>
  );
};

export default LoginCard;
