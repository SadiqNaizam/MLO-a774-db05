import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  className, // For the wrapper div
  ...rest
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-card-foreground">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest} // Passes other props like 'required', 'autoComplete', 'disabled'
        // Shadcn Input component is styled via global CSS and theme variables (e.g., border, ring color)
      />
    </div>
  );
};

export default InputField;
