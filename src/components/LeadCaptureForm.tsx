import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Phone mask function
const maskPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, ddd, first, second) => {
      if (second) return `(${ddd}) ${first}-${second}`;
      if (first) return `(${ddd}) ${first}`;
      if (ddd) return `(${ddd}`;
      return numbers;
    });
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (_, ddd, first, second) => {
    if (second) return `(${ddd}) ${first}-${second}`;
    if (first) return `(${ddd}) ${first}`;
    if (ddd) return `(${ddd}`;
    return numbers;
  });
};

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(14, "Telefone inválido").max(15), // (11) 99999-9999 = 15 chars
  company: z.string().trim().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100),
});

type LeadFormData = z.infer<typeof leadSchema>;

export const LeadCaptureForm = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const { toast } = useToast();

  const handleChange = (field: keyof LeadFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Apply phone mask
    if (field === "phone") {
      value = maskPhone(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    try {
      leadSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof LeadFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof LeadFormData] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Encode data for WhatsApp
      const message = encodeURIComponent(
        `🎯 *Nova Solicitação de Consultoria - AutoFlow IA²*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `🏢 *Empresa:* ${formData.company}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.phone}\n\n` +
        `Solicitado em: ${new Date().toLocaleString('pt-BR')}`
      );
      
      // Open WhatsApp in new tab (keeps page open)
      const whatsappNumber = "5511917302219"; // Seu WhatsApp: 11 91730-2219
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      
      setIsSuccess(true);
      toast({
        title: "Solicitação enviada!",
        description: "Abrindo WhatsApp. Nossa equipe responderá em até 30 minutos!",
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", company: "" });
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl font-bold gradient-text">Solicitação Enviada!</h3>
            <p className="text-lg text-muted-foreground max-w-md">
              Você será redirecionado para o WhatsApp. Nossa equipe responderá em até <span className="font-bold text-primary">30 minutos</span>!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 shadow-[var(--shadow-card)] max-w-2xl mx-auto hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Vagas Limitadas</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
            Agende Sua Consultoria Gratuita
          </h3>
          <p className="text-muted-foreground text-lg">
            Preencha os dados e receba seu plano de automação personalizado
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Nome Completo *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="João Silva"
              value={formData.name}
              onChange={handleChange("name")}
              className={`h-12 text-base ${errors.name ? "border-destructive" : ""}`}
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-base font-semibold">
              Nome da Empresa *
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Sua Empresa Ltda"
              value={formData.company}
              onChange={handleChange("company")}
              className={`h-12 text-base ${errors.company ? "border-destructive" : ""}`}
              disabled={isSubmitting}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              autoComplete="organization"
            />
            {errors.company && (
              <p id="company-error" className="text-sm text-destructive" role="alert">
                {errors.company}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange("email")}
                className={`h-12 text-base ${errors.email ? "border-destructive" : ""}`}
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Telefone/WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleChange("phone")}
                className={`h-12 text-base ${errors.phone ? "border-destructive" : ""}`}
                disabled={isSubmitting}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                autoComplete="tel"
                maxLength={15}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="xl"
            className="w-full text-lg font-bold animate-glow"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Garantir Minha Vaga Gratuita
              </>
            )}
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
