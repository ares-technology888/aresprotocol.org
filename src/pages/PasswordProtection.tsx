import { ReactNode } from 'react';

interface PasswordProtectionProps {
  children: ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  // Password protection disabled - direct access allowed
  return <>{children}</>;
}