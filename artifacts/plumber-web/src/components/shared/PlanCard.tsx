import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  plan: {
    id: string;
    name: string;
    price: string;
    billingCycle: string;
    annualNote: string;
    highlighted: boolean;
    badge?: string;
    features: string[];
    cta: { label: string; href: string };
  };
}

export function PlanCard({ plan }: Props) {
  return (
    <Card 
      className={`h-full flex flex-col relative transition-all duration-300 ${
        plan.highlighted 
          ? "border-accent shadow-card-hover scale-105 z-10 bg-primary text-primary-foreground" 
          : "border-border shadow-card bg-card"
      }`}
      data-testid={`plan-card-${plan.id}`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
          {plan.badge}
        </div>
      )}
      
      <CardHeader className="text-center pb-2">
        <CardTitle className={`text-2xl font-display mb-2 ${plan.highlighted ? "text-white" : ""}`}>{plan.name}</CardTitle>
        <div className="mb-2">
          <span className={`text-4xl font-bold font-display ${plan.highlighted ? "text-white" : "text-primary"}`}>{plan.price}</span>
          <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}> /{plan.billingCycle.replace('per ', '')}</span>
        </div>
        <p className={`text-xs ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>{plan.annualNote}</p>
      </CardHeader>
      
      <CardContent className="flex-1 pt-6">
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle size={18} className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
              <span className={plan.highlighted ? "text-white/90" : "text-muted-foreground"}>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          asChild 
          className={`w-full font-bold ${
            plan.highlighted 
              ? "bg-accent hover:bg-accent/90 text-white" 
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          }`}
        >
          <Link href={plan.cta.href}>{plan.cta.label}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}