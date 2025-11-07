# 🚀 Deploy no EasyPanel - Guia de Troubleshooting

## Problema: 502 Bad Gateway e Container Desligando

Se você está vendo erros **502 Bad Gateway** e o container está recebendo `SIGQUIT` e desligando, siga estes passos:

### ✅ Correções Aplicadas

1. **Healthcheck corrigido**: Agora usa `curl` ao invés de `wget` (mais confiável no Alpine)
2. **Logs habilitados**: Nginx agora registra logs para debug
3. **Validação de build**: Dockerfile verifica se `index.html` existe antes de iniciar

### 🔧 Passos para Resolver

#### 1. Rebuild da Imagem

No EasyPanel ou via terminal:

```bash
# Se estiver usando docker-compose
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Se estiver usando docker diretamente
docker build --no-cache -t autoflow-react-app:latest .
docker run -d --name autoflow-react-app --restart unless-stopped -p 80:80 autoflow-react-app:latest
```

#### 2. Verificar se o Build Funcionou

```bash
# Entrar no container
docker exec -it autoflow-react-app sh

# Verificar se os arquivos existem
ls -la /usr/share/nginx/html/

# Deve mostrar index.html e outros arquivos
```

#### 3. Verificar Logs do Nginx

```bash
# Ver logs de erro
docker logs autoflow-react-app

# Ver logs dentro do container
docker exec autoflow-react-app cat /var/log/nginx/error.log
docker exec autoflow-react-app cat /var/log/nginx/access.log
```

#### 4. Testar Nginx Manualmente

```bash
# Testar configuração do nginx
docker exec autoflow-react-app nginx -t

# Deve retornar: "syntax is ok" e "test is successful"
```

### 🐛 Problemas Comuns no EasyPanel

#### Problema 1: Porta não configurada corretamente

**Sintoma**: 502 Bad Gateway

**Solução**: 
- No EasyPanel, certifique-se de que a porta está mapeada corretamente
- Verifique se está usando porta `80` (HTTP) ou `443` (HTTPS)

#### Problema 2: Build falhando silenciosamente

**Sintoma**: Container inicia mas não serve arquivos

**Solução**:
```bash
# Verificar se o build gerou os arquivos
docker run --rm -it autoflow-react-app:latest ls -la /usr/share/nginx/html/
```

#### Problema 3: Variáveis de ambiente não funcionam

**Sintoma**: Aplicação funciona mas variáveis `REACT_APP_*` não aparecem

**Solução**: 
- Variáveis `REACT_APP_*` precisam ser passadas no **build time**, não runtime
- No EasyPanel, configure as variáveis como **Build Args**:
  ```
  REACT_APP_API_URL=https://api.exemplo.com
  REACT_APP_ENV=production
  ```

#### Problema 4: Container reiniciando constantemente

**Sintoma**: Logs mostram SIGQUIT repetidamente

**Solução**:
1. Verifique se o healthcheck está passando:
   ```bash
   docker inspect autoflow-react-app | grep -A 10 Health
   ```

2. Aumente o `start_period` do healthcheck se necessário
3. Verifique recursos do servidor (memória/CPU)

### 📋 Checklist de Verificação

- [ ] Build executado com sucesso (sem erros)
- [ ] Arquivos em `/usr/share/nginx/html/` existem
- [ ] `index.html` está presente
- [ ] Nginx config está válida (`nginx -t`)
- [ ] Porta 80 está exposta e mapeada
- [ ] Healthcheck está passando
- [ ] Logs não mostram erros críticos
- [ ] Container está rodando (`docker ps` mostra como "Up")

### 🔍 Comandos de Debug

```bash
# Status do container
docker ps -a | grep autoflow

# Logs em tempo real
docker logs -f autoflow-react-app

# Entrar no container
docker exec -it autoflow-react-app sh

# Dentro do container:
# - Verificar arquivos
ls -la /usr/share/nginx/html/

# - Testar nginx
nginx -t

# - Verificar processos
ps aux

# - Testar curl localmente
curl http://localhost:80/

# - Ver configuração do nginx
cat /etc/nginx/conf.d/default.conf
```

### 🆘 Se Nada Funcionar

1. **Limpar tudo e recomeçar**:
   ```bash
   docker-compose down -v
   docker system prune -f
   docker-compose build --no-cache
   docker-compose up -d
   ```

2. **Verificar se o problema é específico do EasyPanel**:
   - Tente rodar localmente primeiro
   - Se funcionar localmente, o problema pode ser configuração do EasyPanel

3. **Verificar recursos do servidor**:
   ```bash
   # Memória disponível
   free -h
   
   # Espaço em disco
   df -h
   
   # CPU
   top
   ```

### 📞 Informações para Suporte

Se precisar de ajuda, forneça:

1. Logs completos: `docker logs autoflow-react-app`
2. Status do container: `docker inspect autoflow-react-app`
3. Configuração do nginx: `docker exec autoflow-react-app cat /etc/nginx/conf.d/default.conf`
4. Lista de arquivos: `docker exec autoflow-react-app ls -la /usr/share/nginx/html/`
5. Versão do Docker: `docker --version`
6. Sistema operacional: `uname -a`

---

**Última atualização**: Após correção do healthcheck e validação de build

