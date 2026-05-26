import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  stroke?: string;
  className?: string;
}

export function Icon({ name, size = 24, stroke = 'currentColor', className = '' }: IconProps) {
  // Convert dashed names to PascalCase if needed, or map directly if possible
  // E.g., 'sparkle' -> Sparkles
  const map: Record<string, string> = {
    'sparkle': 'Sparkles',
    'users': 'Users',
    'message-circle': 'MessageCircle',
    'pie-chart': 'PieChart',
    'target': 'Target',
    'bot': 'Bot',
    'credit-card': 'CreditCard',
    'bar-chart': 'BarChart',
    'calendar': 'Calendar',
  };

  const IconName = map[name] || name;
  const LucideIcon = (icons as any)[IconName];

  if (!LucideIcon) return null;

  return <LucideIcon size={size} color={stroke} className={className} />;
}
