import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  service: {
    id: string;
    slug: string;
    icon: string;
    name: string;
    shortDesc: string;
    badge: string | null;
  };
}

export function ServiceCard({ service }: Props) {
  const Icon = getIcon(service.icon);
  
  return (
    <Link href={`/services/${service.slug}`} className="block h-full group" data-testid={`card-service-${service.id}`}>
      <Card className="h-full border-border/50 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover bg-card overflow-hidden relative">
        {service.badge && (
          <div className="absolute top-4 right-4 bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-md">
            {service.badge}
          </div>
        )}
        <CardContent className="p-6 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <Icon size={24} />
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-card-foreground group-hover:text-accent transition-colors">{service.name}</h3>
          <p className="text-muted-foreground mb-6 flex-1">{service.shortDesc}</p>
          <div className="flex items-center text-sm font-bold text-accent group-hover:translate-x-1 transition-transform">
            View Service <ArrowRight size={16} className="ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}