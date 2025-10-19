import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, MessageSquare, Share2, Layout, Workflow, Zap, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";
import logo from "@/assets/logo-autoflow.png";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 69, 255, 0.95), rgba(179, 136, 255, 0.9)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(139,69,255,0.2)_100%)]" />
        
        {/* Animated tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <div className="inline-block animate-fade-in mb-4">
              <img src={logo} alt="AutoFlow IA²" className="h-40 md:h-48 mx-auto drop-shadow-[0_0_30px_rgba(179,136,255,0.5)]" />
            </div>

            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6 shadow-[var(--shadow-glow)]">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Automação Inteligente com IA</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Automatize seus processos e escale seu negócio com Inteligência Artificial
            </h1>

            <p className="text-xl md:text-2xl text-white/95 leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Em 30 minutos nossa equipe irá analisar estrategicamente todos os processos do seu negócio e entregar um plano de ação para automatizar atendimento, agendamentos, CRM e muito mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button 
                variant="cta" 
                size="xl"
                onClick={scrollToCTA}
                className="w-full sm:w-auto text-lg font-bold"
              >
                <Zap className="mr-2 h-5 w-5" />
                Quero Automatizar Meu Negócio
              </Button>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent backdrop-blur-sm rounded-lg animate-pulse shadow-lg">
              <span className="text-lg font-bold">🚨 87% das vagas foram preenchidas</span>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Automações que Oferecemos */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-[var(--gradient-tech)] to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(270_70%_50%_/_0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
                <Workflow className="w-4 h-4" />
                <span className="text-sm font-semibold">Nossas Soluções</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Automações que transformam seu negócio
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Integração completa de IA nos principais pontos de contato com seus clientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Atendimento Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Chatbots com IA que atendem 24/7, entendem contexto e resolvem dúvidas automaticamente via WhatsApp, site e redes sociais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Agendamento Automático</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sistema inteligente de agendamentos que sincroniza sua agenda, envia lembretes e reduz faltas em até 80%.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <Share2 className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Redes Sociais Automatizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Publicações automáticas, respostas inteligentes e análise de engajamento para manter sua marca sempre ativa.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">CRM Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Gestão automatizada de leads, follow-ups inteligentes e pipeline de vendas que trabalha por você.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Landing Pages Otimizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Páginas de alta conversão com IA integrada para captura e qualificação automática de leads.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-primary/5 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:shadow-[var(--shadow-glow)] transition-all">
                    <Workflow className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Workflows Personalizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automação completa de processos internos conectando todas as ferramentas que você já usa.
                  </CardDescription>
                </CardContent>
              </Card>
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
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Empresas em Crescimento</h3>
                      <p className="text-muted-foreground">
                        Para negócios que querem escalar operações sem aumentar proporcionalmente a equipe através de automação inteligente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Processos Manuais Demais</h3>
                      <p className="text-muted-foreground">
                        Para empresas que perdem tempo com tarefas repetitivas que poderiam ser automatizadas com IA.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Atendimento Sobrecarregado</h3>
                      <p className="text-muted-foreground">
                        Para negócios que recebem muitas mensagens e não conseguem atender todos rapidamente.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Visão de Inovação</h3>
                      <p className="text-muted-foreground">
                        Para empresários que querem estar à frente da concorrência usando tecnologia de ponta.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Leva Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(270_70%_50%_/_0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                O que você leva na consultoria
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mapeamento Completo dos Processos</h3>
                    <p className="text-muted-foreground text-base">
                      Análise detalhada de todos os processos manuais que podem ser automatizados, identificando gargalos e oportunidades de melhoria imediata.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Estratégia de Automação Personalizada</h3>
                    <p className="text-muted-foreground text-base">
                      Plano estratégico detalhando quais automações implementar primeiro para gerar o maior ROI e impacto no seu negócio.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Roadmap de Implementação</h3>
                    <p className="text-muted-foreground text-base">
                      Cronograma prático com etapas claras de implementação, estimativa de tempo e custo-benefício de cada automação proposta.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Por que escolher a AutoFlow?
            </h2>
            
            <div className="mb-8 space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Somos especialistas em <span className="font-bold text-primary">Inteligência Artificial aplicada a automação de processos</span>. Nossa missão é transformar negócios através da tecnologia, eliminando tarefas repetitivas e liberando sua equipe para o que realmente importa.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Com a <span className="font-bold text-primary">AutoFlow IA²</span>, já ajudamos mais de 100 empresas a reduzirem custos operacionais em até 60% e aumentarem a satisfação de clientes através de atendimento automatizado 24/7.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Redução de Custos</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Atendimento</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Gratuita</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="cta-final" className="py-20 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(139, 69, 255, 0.95), rgba(179, 136, 255, 0.9)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Vagas Limitadas</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto para automatizar e escalar seu negócio?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Agende agora sua consultoria estratégica gratuita e descubra como a IA pode transformar seus processos e multiplicar seus resultados.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)]"
            >
              <Zap className="mr-2 h-5 w-5" />
              Quero Minha Consultoria Gratuita Agora
            </Button>
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-accent backdrop-blur-sm rounded-xl animate-pulse shadow-xl border-2 border-white/20">
              <span className="text-lg md:text-xl font-bold">🚨 87% das vagas foram preenchidas - Garanta a sua!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img src={logo} alt="AutoFlow IA²" className="h-16 mx-auto opacity-80" />
          </div>
          <p className="text-muted-foreground">
            © 2024 AutoFlow IA² - Automação Inteligente de Processos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
