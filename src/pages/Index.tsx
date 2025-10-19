import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Users, Award, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(69, 147, 255, 0.95), rgba(69, 147, 255, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Consultoria Estratégica Gratuita</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Consultoria Estratégica para negócios que desejam se posicionar e atrair novos clientes através do digital
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Em 30 minutos nossa agência irá analisar estrategicamente toda estrutura e posicionamento do seu negócio, e vamos te entregar um plano de ação para que sua empresa consiga novos clientes de forma recorrente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button 
                variant="cta" 
                size="xl"
                onClick={scrollToCTA}
                className="w-full sm:w-auto"
              >
                Eu quero a consultoria grátis
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/90 backdrop-blur-sm rounded-lg animate-pulse">
              <span className="text-lg font-bold">🚨 87% das vagas para consultoria foram preenchidas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Para quem é a consultoria
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Otimização de Posicionamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para donos de negócios que querem otimizar o posicionamento do seu negócio para atrair mais clientes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Novas Estratégias</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para empresários que já tentaram se posicionar e atrair clientes no digital mas não obtiveram sucesso.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Impulsionar Faturamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para empresas que querem ter novas fontes de clientes, para conseguir impulsionar seu faturamento.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Reconhecimento Nacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Para quem está disposto a deixar o seu negócio reconhecido nacionalmente.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Leva Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                O que você irá levar nessa consultoria
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diagnóstico do momento atual</h3>
                    <p className="text-muted-foreground text-base">
                      Diagnóstico completo do momento atual da sua empresa no ambiente digital
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Análise estratégica completa</h3>
                    <p className="text-muted-foreground text-base">
                      Análise estratégica e minuciosa sobre todos os pilares que sua empresa precisa gerenciar para crescer no digital
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Plano de ação personalizado</h3>
                    <p className="text-muted-foreground text-base">
                      Plano de ação detalhado com o que precisa fazer para conseguir levar o seu negócio para o próximo nível no digital
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Conheça mais sobre nós
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Quem somos nós para te ajudar nisso?
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Somos a <span className="font-bold text-primary">AutoFlow</span>, especialistas em estratégias de posicionamento online e tráfego pago. Com orgulho, já auxiliamos mais de 100 clientes a alcançarem seus objetivos online.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nosso propósito atual é continuar impulsionando negócios e marcas, conectando-as com seus públicos de forma estratégica e impactante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30min</div>
                <div className="text-muted-foreground">Duração da Consultoria</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="cta-final" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Pronto para levar seu negócio para o próximo nível?
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Agende agora sua consultoria estratégica gratuita e descubra como podemos transformar sua presença digital.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Quero minha consultoria gratuita agora
            </Button>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent backdrop-blur-sm rounded-lg animate-pulse">
              <span className="text-lg font-bold">🚨 87% das vagas foram preenchidas - Garanta a sua!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 AutoFlow - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
