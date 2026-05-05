import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  review: {
    id: string;
    name: string;
    location: string;
    service: string;
    rating: number;
    text: string;
    platform: string;
  };
}

export function ReviewCard({ review }: Props) {
  return (
    <Card className="h-full border-border/50 shadow-card bg-card" data-testid={`card-review-${review.id}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex text-[#FFB800]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < review.rating ? "fill-current text-[#FFB800]" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs font-bold bg-secondary text-secondary-foreground px-2 py-1 rounded-md">{review.platform}</span>
        </div>
        <p className="text-muted-foreground italic mb-6 flex-1">"{review.text}"</p>
        <div className="mt-auto">
          <p className="font-bold text-card-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.location} · {review.service}</p>
        </div>
      </CardContent>
    </Card>
  );
}