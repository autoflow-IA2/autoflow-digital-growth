# Stage 1: Build
FROM node:20-alpine AS builder

# Instalar dependências do sistema necessárias
RUN apk add --no-cache libc6-compat

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências (usando npm ci para builds reproduzíveis)
RUN npm ci --only=production=false

# Copiar código fonte
COPY . .

# Build da aplicação
# Variáveis de ambiente podem ser passadas via --build-arg
ARG REACT_APP_API_URL
ARG REACT_APP_ENV
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_ENV=$REACT_APP_ENV

RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Instalar wget para healthcheck (ou usar curl que já vem no alpine)
RUN apk add --no-cache curl

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos buildados do stage anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Criar diretório de logs se não existir
RUN mkdir -p /var/log/nginx

# Verificar se index.html existe (garantir que o build foi bem-sucedido)
RUN if [ ! -f /usr/share/nginx/html/index.html ]; then \
      echo "ERRO: index.html não encontrado! Build pode ter falhado." && exit 1; \
    fi

# Expor porta 80
EXPOSE 80

# Healthcheck usando curl (mais confiável no alpine)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

# Comando para iniciar nginx em foreground
CMD ["nginx", "-g", "daemon off;"]

