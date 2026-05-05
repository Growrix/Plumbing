import { AlertTriangle, Waves, Droplets, Flame, Wrench, Filter, Bath, Search, Phone, CheckCircle, FileText, Trophy, ShieldCheck, Clock, Award, Heart, DollarSign, BookOpen, Truck, Users, Star, Zap, Shield } from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  AlertTriangle, Waves, Droplets, Flame, Wrench, Filter, Bath, Search,
  Phone, CheckCircle, FileText, Trophy, ShieldCheck, Clock, Award, Heart,
  DollarSign, BookOpen, Truck, Users, Star, Zap, Shield,
};

export function getIcon(name: string) {
  return iconMap[name] ?? Wrench;
}