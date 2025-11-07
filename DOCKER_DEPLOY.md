# 🐳 Guia de Deploy Docker - Aplicação React (Vite)

Este guia contém instruções completas para fazer deploy da aplicação React usando Docker em uma VPS.

## 📋 Pré-requisitos

- Docker instalado (versão 20.10 ou superior)
- Docker Compose instalado (versão 2.0 ou superior)
- Acesso SSH à sua VPS
- Git (para clonar o repositório, se aplicável)

## 🏗️ Estrutura dos Arquivos

```
.
├── Dockerfile              # Dockerfile multi-stage
├── .dockerignore          # Arquivos ignorados no build
├── docker-compose.yml     # Orquestração do container
├── nginx.conf            # Configuração do Nginx para SPA
└── DOCKER_DEPLOY.md      # Este arquivo
```

## 🚀 Opção 1: Deploy com Docker Compose (Recomendado)

### 1. Preparar o ambiente

```bash
# Clonar o repositório (se ainda não tiver)
git clone <seu-repositorio>
cd autoflow-digital-growth

# Ou se já tiver o código, navegue até o diretório
cd autoflow-digital-growth
```

### 2. Configurar variáveis de ambiente (Opcional)

Se sua aplicação usa variáveis de ambiente `REACT_APP_*`, você pode:

**Opção A: Criar arquivo `.env` na raiz do projeto:**
```bash
REACT_APP_API_URL=https://api.exemplo.com
REACT_APP_ENV=production
```

**Opção B: Passar via docker-compose.yml:**
Edite o arquivo `docker-compose.yml` e descomente as linhas de `args` e `environment`.

### 3. Build e execução

```bash
# Build e start do container
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Parar o container
docker-compose down

# Parar e remover volumes (se houver)
docker-compose down -v
```

### 4. Verificar se está funcionando

```bash
# Verificar status
docker-compose ps

# Verificar healthcheck
docker-compose ps

# Acessar a aplicação
# http://seu-ip-vps ou http://seu-dominio.com
```

## 🐳 Opção 2: Deploy com Docker (Manual)

### 1. Build da imagem

```bash
# Build básico
docker build -t autoflow-react-app:latest .

# Build com variáveis de ambiente
docker build \
  --build-arg REACT_APP_API_URL=https://api.exemplo.com \
  --build-arg REACT_APP_ENV=production \
  -t autoflow-react-app:latest .
```

### 2. Executar o container

```bash
# Executar na porta 80
docker run -d \
  --name autoflow-react-app \
  --restart unless-stopped \
  -p 80:80 \
  autoflow-react-app:latest

# Executar em outra porta (ex: 3000)
docker run -d \
  --name autoflow-react-app \
  --restart unless-stopped \
  -p 3000:80 \
  autoflow-react-app:latest
```

### 3. Gerenciar o container

```bash
# Ver logs
docker logs -f autoflow-react-app

# Parar o container
docker stop autoflow-react-app

# Iniciar o container
docker start autoflow-react-app

# Remover o container
docker rm autoflow-react-app

# Remover a imagem
docker rmi autoflow-react-app:latest
```

## 🔧 Configurações Avançadas

### Mapeamento de Portas

**Porta padrão (80):**
```bash
-p 80:80
```

**Porta customizada (3000):**
```bash
-p 3000:80
```

**Múltiplas portas:**
```bash
-p 80:80 -p 443:443
```

### Restart Automático

O container está configurado para reiniciar automaticamente com `--restart unless-stopped`:

- `no`: Não reinicia automaticamente (padrão)
- `always`: Sempre reinicia, mesmo após parada manual
- `on-failure`: Reinicia apenas em caso de falha
- `unless-stopped`: Reinicia sempre, exceto se parado manualmente (recomendado)

### Variáveis de Ambiente em Runtime

⚠️ **Importante**: Variáveis `REACT_APP_*` são embutidas no build. Para mudá-las, você precisa:

1. **Rebuild da imagem** com novos valores
2. **Ou usar uma solução de runtime injection** (mais complexo)

**Exemplo de rebuild com novas variáveis:**
```bash
docker build \
  --build-arg REACT_APP_API_URL=https://nova-api.com \
  -t autoflow-react-app:latest .
docker-compose up -d --build
```

### Healthcheck

O container inclui healthcheck automático. Verifique o status:

```bash
docker ps  # Ver STATUS (healthy/unhealthy)
docker inspect autoflow-react-app | grep Health
```

## 📊 Monitoramento

### Ver logs em tempo real
```bash
docker-compose logs -f
# ou
docker logs -f autoflow-react-app
```

### Ver uso de recursos
```bash
docker stats autoflow-react-app
```

### Verificar tamanho da imagem
```bash
docker images autoflow-react-app
```

## 🔒 Segurança

### Firewall (UFW - Ubuntu/Debian)

```bash
# Permitir porta 80
sudo ufw allow 80/tcp

# Permitir porta 443 (se usar HTTPS)
sudo ufw allow 443/tcp

# Verificar status
sudo ufw status
```

### HTTPS com Nginx Reverse Proxy

Para adicionar HTTPS, você pode usar um Nginx reverso proxy na VPS ou configurar SSL diretamente. Exemplo básico:

```nginx
server {
    listen 443 ssl http2;
    server_name seu-dominio.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🐛 Troubleshooting

### Container não inicia

```bash
# Ver logs de erro
docker logs autoflow-react-app

# Verificar se a porta está em uso
sudo netstat -tulpn | grep :80
# ou
sudo lsof -i :80
```

### Build falha

```bash
# Limpar cache do Docker
docker builder prune

# Rebuild sem cache
docker-compose build --no-cache
```

### Aplicação não carrega (404 em rotas)

Verifique se o `nginx.conf` está correto e se o arquivo foi copiado:
```bash
docker exec autoflow-react-app cat /etc/nginx/conf.d/default.conf
```

### Variáveis de ambiente não funcionam

Lembre-se: variáveis `REACT_APP_*` precisam ser passadas no **build time**, não em runtime. Faça rebuild da imagem.

## 📝 Comandos Úteis

```bash
# Entrar no container
docker exec -it autoflow-react-app sh

# Verificar arquivos buildados
docker exec autoflow-react-app ls -la /usr/share/nginx/html

# Testar nginx config
docker exec autoflow-react-app nginx -t

# Recarregar nginx (sem reiniciar container)
docker exec autoflow-react-app nginx -s reload
```

## 🔄 Atualização da Aplicação

### Com Docker Compose

```bash
# 1. Fazer pull das mudanças (se usar Git)
git pull

# 2. Rebuild e restart
docker-compose up -d --build

# 3. Limpar imagens antigas (opcional)
docker image prune -f
```

### Com Docker

```bash
# 1. Parar e remover container antigo
docker stop autoflow-react-app
docker rm autoflow-react-app

# 2. Rebuild da imagem
docker build -t autoflow-react-app:latest .

# 3. Iniciar novo container
docker run -d \
  --name autoflow-react-app \
  --restart unless-stopped \
  -p 80:80 \
  autoflow-react-app:latest
```

## 📦 Tamanho da Imagem

A imagem final deve ter aproximadamente **20-30MB** (nginx:alpine + arquivos buildados).

Para verificar:
```bash
docker images autoflow-react-app
```

## ✅ Checklist de Deploy

- [ ] Docker e Docker Compose instalados
- [ ] Código atualizado no servidor
- [ ] Variáveis de ambiente configuradas (se necessário)
- [ ] Build executado com sucesso
- [ ] Container rodando (`docker ps`)
- [ ] Healthcheck passando
- [ ] Aplicação acessível via navegador
- [ ] Rotas do React Router funcionando
- [ ] Firewall configurado
- [ ] HTTPS configurado (se aplicável)
- [ ] Restart automático configurado

## 🆘 Suporte

Em caso de problemas:
1. Verifique os logs: `docker logs autoflow-react-app`
2. Verifique o status: `docker ps -a`
3. Verifique a configuração do nginx: `docker exec autoflow-react-app nginx -t`
4. Verifique os arquivos buildados: `docker exec autoflow-react-app ls -la /usr/share/nginx/html`

---

**Última atualização**: 2024
**Versão Docker**: 20.10+
**Versão Node**: 20-alpine
**Versão Nginx**: alpine

