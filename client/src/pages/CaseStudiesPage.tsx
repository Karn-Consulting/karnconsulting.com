import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import aiDashboard from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";
import automation from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import infrastructure from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";
import dataViz from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import mlProcess from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import digitalTransform from "@assets/stock_images/digital_transformati_b71991f3.jpg";
import logoImage from "@assets/image_1760332792562.png";

const caseStudies = [
  {
    id: "major-bank-ai",
    title: "AI-Powered Risk Assessment",
    client: "Major International Bank",
    industry: "Financial Services",
    description: "Revolutionized credit risk assessment with ML models, reducing default rates by 42%",
    image: aiDashboard,
    metrics: [
      { value: "94%", label: "Accuracy" },
      { value: "3x", label: "Faster Processing" },
      { value: "$12M", label: "Annual Savings" },
    ],
    tags: ["Machine Learning", "Risk Management", "FinTech"]
  },
  {
    id: "retail-automation",
    title: "Autonomous Inventory Management",
    client: "Leading Retail Chain",
    industry: "Retail & E-commerce",
    description: "Deployed self-governing systems for inventory optimization across 500+ stores",
    image: automation,
    metrics: [
      { value: "89%", label: "Accuracy" },
      { value: "35%", label: "Less Waste" },
      { value: "$8M", label: "Cost Savings" },
    ],
    tags: ["Automation", "Retail", "Supply Chain"]
  },
  {
    id: "healthcare-prediction",
    title: "Predictive Patient Care",
    client: "National Healthcare Provider",
    industry: "Healthcare",
    description: "AI-driven patient monitoring and early intervention system saving lives daily",
    image: infrastructure,
    metrics: [
      { value: "91%", label: "Accuracy" },
      { value: "48hrs", label: "Earlier Detection" },
      { value: "500+", label: "Lives Saved/Year" },
    ],
    tags: ["Healthcare", "Predictive Analytics", "IoT"]
  },
  {
    id: "manufacturing-optimization",
    title: "Smart Factory Optimization",
    client: "Global Manufacturing Corporation",
    industry: "Manufacturing",
    description: "End-to-end AI integration for predictive maintenance and quality control",
    image: dataViz,
    metrics: [
      { value: "99.7%", label: "Uptime" },
      { value: "45%", label: "Defect Reduction" },
      { value: "$15M", label: "Annual Savings" },
    ],
    tags: ["Manufacturing", "IoT", "Quality Control"]
  },
  {
    id: "insurance-claims",
    title: "Automated Claims Processing",
    client: "Fortune 500 Insurance Company",
    industry: "Insurance",
    description: "Intelligent document processing and fraud detection system",
    image: mlProcess,
    metrics: [
      { value: "85%", label: "Automation" },
      { value: "10x", label: "Faster Processing" },
      { value: "$25M", label: "Cost Reduction" },
    ],
    tags: ["Insurance", "NLP", "Fraud Detection"]
  },
  {
    id: "telecom-network",
    title: "Network Intelligence Platform",
    client: "Leading Telecom Provider",
    industry: "Telecommunications",
    description: "Self-healing network infrastructure with predictive outage prevention",
    image: digitalTransform,
    metrics: [
      { value: "99.99%", label: "Uptime" },
      { value: "55%", label: "Fewer Outages" },
      { value: "$30M", label: "OPEX Savings" },
    ],
    tags: ["Telecom", "Infrastructure", "Predictive Maintenance"]
  }
];

export default function CaseStudiesPage() {
  const [, setLocation] = useLocation();
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div 
            className="cursor-pointer group"
            onClick={() => setLocation("/")}
          >
            <img 
              src={logoImage} 
              alt="Karn Consulting" 
              className="h-10 md:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
              style={{ 
                filter: "brightness(1.3) contrast(1.2) drop-shadow(0 0 10px rgba(79, 172, 254, 0.3))"
              }}
            />
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="group"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 blur-3xl rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped leading organizations transform their operations with 
              cutting-edge AI and machine learning solutions. Real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-primary/10 bg-card/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$100M+</div>
              <div className="text-muted-foreground">Client Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="group overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setLocation(`/project/${study.id}`)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                      {study.industry}
                    </span>
                  </div>
                  
                  {/* Client Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm font-medium text-foreground/90">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-primary/10">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn mt-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-8 bg-gradient-to-br from-primary/10 via-background to-chart-2/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Write Your <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how our AI and ML solutions can transform your business operations 
            and deliver measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="group shadow-xl shadow-primary/20"
              onClick={() => setShowLeadForm(true)}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setLocation("/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Karn Consulting. All rights reserved.
        </div>
      </footer>

      {/* Lead Form Dialog */}
      <LeadFormDialog open={showLeadForm} onOpenChange={setShowLeadForm} />
    </div>
  );
}
