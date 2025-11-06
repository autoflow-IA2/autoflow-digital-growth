import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Calendar, MessageSquare, Share2, Layout, Workflow, Zap, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-art.png";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import AnimatedSection from "@/components/AnimatedSection";

// Nova logo do Supabase
const logoUrl = "https://iygvxnnumykapvaufncm.supabase.co/storage/v1/object/public/logo/logonova-Photoroom.png";

const Index = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Design Moderno e Impactante */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 sm:py-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sutil para contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white space-y-12 sm:space-y-16">
            
            {/* Logo Section - Destaque máximo */}
            <div className="flex justify-center items-center animate-fade-in mb-8 sm:mb-12">
              <img 
                src={logoUrl} 
                alt="AutoFlow IA² - Automação Inteligente com IA" 
                className="h-32 sm:h-40 md:h-52 lg:h-60 transition-all duration-500 hover:scale-110 hover:rotate-2" 
                loading="eager"
                width="240"
                height="240"
                aria-label="Logo AutoFlow IA²"
                style={{ 
                  backgroundColor: 'transparent',
                  filter: 'drop-shadow(0 8px 32px rgba(255, 255, 255, 0.8)) drop-shadow(0 16px 64px rgba(139, 92, 246, 0.6)) brightness(1.2)',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'h-32 sm:h-40 md:h-52 lg:h-60 flex items-center justify-center bg-transparent px-8';
                  fallback.innerHTML = '<span class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white" style="text-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3);">AutoFlow IA²</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>

            {/* Slogan/Tagline - Badge destaque */}
            <div className="inline-block animate-scale-in">
              <div className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border-2 border-white/50 backdrop-blur-xl bg-white/15 shadow-2xl hover:scale-105 transition-all duration-300">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-accent animate-pulse" />
                <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-wide" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
                  Automação Inteligente com IA
                </span>
              </div>
            </div>

            {/* Headline Principal - Impacto máximo */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] animate-fade-in px-4 sm:px-8 max-w-5xl mx-auto" 
                style={{ 
                  textShadow: '0 8px 32px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4), 0 0 60px rgba(139,92,246,0.4)',
                  letterSpacing: '-0.03em'
                }}>
              <span className="text-white">Automatize</span> seus processos e{' '}
              <span className="text-white">escale</span> seu negócio com{' '}
              <span className="block mt-4 sm:mt-6 bg-gradient-to-r from-accent via-yellow-200 to-accent bg-clip-text text-transparent animate-shimmer" style={{ textShadow: 'none' }}>
                Inteligência Artificial
              </span>
            </h1>

            {/* Sub-headline/Descrição - Clareza e impacto */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-[1.6] animate-fade-in max-w-5xl mx-auto px-4 font-semibold" 
               style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 2px 12px rgba(0,0,0,0.3)' }}>
              Em <span className="font-black text-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">30 minutos</span> nossa equipe irá analisar estrategicamente todos os processos do seu negócio e entregar um{' '}
              <span className="font-black text-accent">plano de ação</span> para automatizar atendimento, agendamentos, CRM e muito mais.
            </p>

            {/* CTAs - Destaque máximo */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in pt-8 sm:pt-12 px-4">
              <Button 
                variant="gradient" 
                size="2xl"
                onClick={scrollToCTA}
                className="w-full sm:w-auto min-w-[300px] text-xl sm:text-2xl font-black shadow-[0_16px_60px_rgba(139,92,246,0.7)] hover:shadow-[0_24px_80px_rgba(139,92,246,0.9)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              >
                <Zap className="mr-3 h-7 w-7" />
                Agendar Consultoria Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="2xl"
                onClick={scrollToCTA}
                className="w-full sm:w-auto min-w-[280px] text-xl sm:text-2xl font-black bg-white hover:bg-white/95 text-primary border-4 border-white hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-[0_12px_40px_rgba(255,255,255,0.5)]"
              >
                <MessageSquare className="mr-3 h-7 w-7" />
                Falar com Especialista
              </Button>
            </div>

            {/* Urgency Badge - Escassez destaque */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl backdrop-blur-xl bg-red-500 border-4 border-red-300/70 animate-pulse shadow-[0_12px_48px_rgba(239,68,68,0.6)] hover:scale-105 transition-all duration-300">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white text-center" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                🚨 Apenas 5 vagas restantes esta semana!
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Automações que Oferecemos */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-background via-[var(--gradient-tech)] to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(270_70%_50%_/_0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up" speed="slow">
              <div className="text-center mb-24 sm:mb-32 space-y-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/15 text-primary rounded-2xl mb-6 border-2 border-primary/30 shadow-lg hover:scale-105 transition-all duration-300">
                  <Workflow className="w-6 h-6" />
                  <span className="text-lg font-bold">Nossas Soluções</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
                  Automações que <span className="gradient-text">transformam</span> seu negócio
                </h2>
                <p className="text-2xl sm:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                  Integração completa de IA nos principais pontos de contato com seus clientes
                </p>
                <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
              <AnimatedSection animation="zoom-in" delay={0} speed="normal" easing="bounce">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">Atendimento Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Chatbots com IA que atendem <span className="font-bold text-primary">24/7</span>, entendem contexto e resolvem dúvidas automaticamente via WhatsApp, site e redes sociais.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="zoom-in" delay={100} speed="normal" easing="bounce">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">Agendamento Automático</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Sistema inteligente de agendamentos que sincroniza sua agenda, envia lembretes e reduz faltas em até <span className="font-bold text-primary">80%</span>.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="zoom-in" delay={200} speed="normal" easing="bounce">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <Share2 className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">Redes Sociais Automatizadas</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Publicações automáticas, respostas inteligentes e análise de engajamento para manter sua marca sempre <span className="font-bold text-primary">ativa</span>.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0} speed="normal">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">CRM Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Gestão automatizada de leads, follow-ups inteligentes e pipeline de vendas que <span className="font-bold text-primary">trabalha por você</span>.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100} speed="normal">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <Layout className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">Landing Pages Otimizadas</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Páginas de alta conversão com IA integrada para captura e qualificação automática de <span className="font-bold text-primary">leads</span>.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200} speed="normal">
                <Card className="border-2 hover:border-primary transition-all duration-500 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)] bg-gradient-to-br from-card to-primary/8 group rounded-2xl overflow-hidden h-full">
                  <CardHeader className="pb-8 pt-10 px-10">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-8 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                      <Workflow className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black gradient-text mb-4">Workflows Personalizados</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <CardDescription className="text-lg leading-relaxed font-medium">
                      Automação completa de processos internos conectando todas as ferramentas que você <span className="font-bold text-primary">já usa</span>.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-down" speed="slow">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 border border-primary/20">
                  <Workflow className="w-4 h-4" />
                  <span className="text-sm font-semibold">Público-Alvo</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Para quem é a <span className="gradient-text">consultoria</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-in-left" speed="normal">
                <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all duration-500 bg-gradient-to-br from-card to-primary/5 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 gradient-text">Empresas em Crescimento</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Para negócios que querem <span className="font-semibold text-primary">escalar operações</span> sem aumentar proporcionalmente a equipe através de automação inteligente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" speed="normal">
                <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all duration-500 bg-gradient-to-br from-card to-primary/5 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <Bot className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 gradient-text">Processos Manuais Demais</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Para empresas que perdem tempo com <span className="font-semibold text-primary">tarefas repetitivas</span> que poderiam ser automatizadas com IA.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-left" speed="normal" delay={100}>
                <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all duration-500 bg-gradient-to-br from-card to-primary/5 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <MessageSquare className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 gradient-text">Atendimento Sobrecarregado</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Para negócios que recebem muitas mensagens e não conseguem <span className="font-semibold text-primary">atender todos rapidamente</span>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" speed="normal" delay={100}>
                <Card className="border-l-4 border-l-primary hover:shadow-[var(--shadow-card)] transition-all duration-500 bg-gradient-to-br from-card to-primary/5 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 gradient-text">Visão de Inovação</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Para empresários que querem estar à frente da concorrência usando <span className="font-semibold text-primary">tecnologia de ponta</span>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* O Que Você Leva Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up" speed="slow">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">O Que Você Recebe</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  O que você <span className="gradient-text">leva na consultoria</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection animation="fade-right" delay={0}>
                <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent group">
                  <CardContent className="flex items-start gap-6 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 gradient-text">Mapeamento Completo dos Processos</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Análise detalhada de todos os processos manuais que podem ser <span className="font-semibold text-primary">automatizados</span>, identificando gargalos e oportunidades de melhoria imediata.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={100}>
                <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent group">
                  <CardContent className="flex items-start gap-6 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 gradient-text">Estratégia de Automação Personalizada</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Plano estratégico detalhando quais automações implementar primeiro para gerar o maior <span className="font-semibold text-primary">ROI e impacto</span> no seu negócio.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={200}>
                <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-[var(--shadow-card)] bg-gradient-to-r from-primary/5 to-transparent group">
                  <CardContent className="flex items-start gap-6 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 gradient-text">Roadmap de Implementação</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Cronograma prático com etapas claras de implementação, estimativa de tempo e <span className="font-semibold text-primary">custo-benefício</span> de cada automação proposta.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection animation="blur-in" speed="slow">
              <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Por Que Escolher</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Por que escolher a <span className="gradient-text">AutoFlow</span>?
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" speed="slow" delay={100}>
              <div className="mb-16 space-y-8 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Somos especialistas em <span className="font-bold text-primary">Inteligência Artificial aplicada a automação de processos</span>. Nossa missão é transformar negócios através da tecnologia, eliminando tarefas repetitivas e liberando sua equipe para o que realmente importa.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Com a <span className="font-bold text-primary">AutoFlow IA²</span>, já ajudamos mais de <span className="font-bold text-accent">100 empresas</span> a reduzirem custos operacionais em até <span className="font-bold text-accent">60%</span> e aumentarem a satisfação de clientes através de atendimento automatizado 24/7.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedSection animation="bounce-in" delay={0} easing="bounce">
                <div className="text-center p-8 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-all duration-300">100+</div>
                  <div className="text-lg font-semibold text-muted-foreground">Empresas Atendidas</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="bounce-in" delay={100} easing="bounce">
                <div className="text-center p-8 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-all duration-300">60%</div>
                  <div className="text-lg font-semibold text-muted-foreground">Redução de Custos</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="bounce-in" delay={200} easing="bounce">
                <div className="text-center p-8 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-all duration-300">24/7</div>
                  <div className="text-lg font-semibold text-muted-foreground">Atendimento</div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="bounce-in" delay={300} easing="bounce">
                <div className="text-center p-8 rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-all duration-300">Grátis</div>
                  <div className="text-lg font-semibold text-muted-foreground">Consultoria</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section with Form */}
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
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/80 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-8 text-white">
              <div className="inline-block animate-scale-in">
                <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-white/30 mb-4 shadow-[var(--shadow-glow)]">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">Apenas 5 Vagas Restantes</span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                Pronto para <span className="gradient-text">automatizar</span> e <br className="hidden sm:block" />
                <span className="gradient-text">escalar</span> seu negócio?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto animate-fade-in">
                Agende agora sua <span className="font-bold text-accent">consultoria estratégica gratuita</span> de 30 minutos e receba um plano completo de automação personalizado para seu negócio.
              </p>
            </div>

            {/* Lead Capture Form */}
            <div className="animate-fade-in">
              <LeadCaptureForm />
            </div>

            {/* Urgency Badge */}
            <div className="text-center animate-fade-in">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 sm:px-8 py-4 glass rounded-xl animate-pulse shadow-2xl border-2 border-accent/30">
                <span className="text-base sm:text-lg font-bold text-white text-center">⚡ Resposta em até 30 minutos • 100% Gratuito • Sem Compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-t from-secondary/40 to-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center items-center animate-fade-in">
              <img 
                src={logoUrl} 
                alt="AutoFlow IA² - Logo da empresa de automação com inteligência artificial" 
                className="h-16 sm:h-20 opacity-90 transition-opacity duration-300 hover:opacity-100" 
                loading="lazy"
                width="80"
                height="80"
                aria-label="Logo AutoFlow IA²"
                style={{ 
                  backgroundColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px white) drop-shadow(0 0 16px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 24px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 32px rgba(255, 255, 255, 0.2))'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'h-16 sm:h-20 flex items-center justify-center bg-transparent px-4';
                  fallback.innerHTML = '<span class="text-lg font-bold gradient-text">AutoFlow IA²</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
            
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-2xl font-bold gradient-text">AutoFlow IA²</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transformando negócios através da <span className="font-semibold text-primary">Inteligência Artificial</span> e automação de processos.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in">
              <span>© 2024 AutoFlow IA²</span>
              <span>•</span>
              <span>Automação Inteligente de Processos</span>
              <span>•</span>
              <span>Feito com ❤️ no Brasil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
