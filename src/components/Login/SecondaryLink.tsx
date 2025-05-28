import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface SecondaryLinkProps extends ButtonProps {
  // href could be added if direct navigation is needed, then 'asChild' prop on Button would be used with an <a> tag.
  // For this example, it's a button styled as a link, action handled by onClick.
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      variant="link" // Use Shadcn's link variant as a base
      className={cn(
        "text-sm font-normal", // "smaller text", override default link font-weight
        "text-muted-foreground", // "contrast primary button", uses muted text color
        "hover:text-card-foreground/80", // Subtle hover effect
        "hover:no-underline", // Preference: remove underline on hover
        "p-0 h-auto", // Remove default button padding and height for a more compact link appearance
        "w-full text-center", // Ensures text is centered if link takes full width (due to flex parent)
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryLink;
