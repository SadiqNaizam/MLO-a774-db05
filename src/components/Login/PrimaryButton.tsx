import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "w-full", // Full width as typically seen in login forms
        // Default variant of Shadcn Button uses 'bg-primary text-primary-foreground'
        // which matches the "accent blue background and white text" requirement.
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default PrimaryButton;
