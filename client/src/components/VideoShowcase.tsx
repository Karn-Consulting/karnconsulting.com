import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const gifs = [
  {
    title: "Neural Network Processing",
    description: "Watch AI neural networks analyze and process complex data patterns in real-time",
    gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWo0ZTZlbGx5NGJ0OGFhcmtmbnFpNm1vNGhqb3Y2Z3Fwd2JhNXFuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
    category: "Machine Learning",
  },
  {
    title: "Data Analytics Engine",
    description: "Advanced algorithms transforming raw data into actionable business intelligence",
    gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZ4NmNiZmdieHd2enp3cG1ma3l0MjhxbzRoOGVqZnBraTN2Z2Y0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lFw057lAJQMwg0/giphy.gif",
    category: "Analytics",
  },
  {
    title: "AI Model Training",
    description: "Deep learning models continuously improving through automated training cycles",
    gifUrl: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNwMXJ1YnJ5YWs4ejUxdGJzaXdxeGhhOWI2dmNvd2x3b3kwenVocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9C25UNTwfZuk85WP/giphy-downsized-large.gif",
    category: "Deep Learning",
  },
];

export default function VideoShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-8 relative bg-card/30" data-testid="section-video-showcase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-video-title">
            Experience <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Innovation</span> in Motion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-video-description">
            High-performance AI demonstrations showcasing intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gifs.map((gif, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 hover-elevate active-elevate-2 transition-all cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`video-card-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-chart-2/5">
                <img 
                  src={gif.gifUrl} 
                  alt={gif.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  data-testid={`video-thumbnail-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sparkle Icon Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                    <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-xs font-medium text-primary border border-primary/30">
                  {gif.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold" data-testid={`video-title-${index}`}>
                  {gif.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`video-description-${index}`}>
                  {gif.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}