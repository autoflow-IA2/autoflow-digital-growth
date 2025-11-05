import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechSolutions",
    company: "TechSolutions",
    rating: 5,
    text: "A AutoFlow transformou nosso atendimento. Reduzimos 70% do tempo de resposta e nossos clientes estão muito mais satisfeitos. O ROI foi imediato!",
    initials: "CM",
    color: "from-primary to-primary-glow"
  },
  {
    name: "Mariana Costa",
    role: "Diretora Comercial, Clínica Vida",
    company: "Clínica Vida",
    rating: 5,
    text: "Automatizar os agendamentos foi a melhor decisão. Eliminamos as faltas em 80% e nossa equipe pode focar no que realmente importa: o atendimento.",
    initials: "MC",
    color: "from-accent to-primary"
  },
  {
    name: "Roberto Silva",
    role: "Fundador, E-commerce Plus",
    company: "E-commerce Plus",
    rating: 5,
    text: "Implementamos o CRM inteligente e dobramos nossa taxa de conversão em 3 meses. A equipe da AutoFlow entende muito de negócios, não só de tecnologia.",
    initials: "RS",
    color: "from-primary-glow to-accent"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 border border-primary/20">
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-semibold">Depoimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que nossos clientes <span className="gradient-text">dizem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados reais de empresas que transformaram seus processos com IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group animate-fade-in relative"
              >
                <CardContent className="p-8 space-y-6">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed text-base relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white font-bold text-lg`}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 glass rounded-xl border border-primary/20">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-bold gradient-text">4.9/5.0</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">Baseado em 100+ avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
