# Portfólio - Larissa Viana (Contadora)

Este é um projeto de portfólio profissional e landing page para serviços contábeis, desenvolvido com **Next.js (App Router)** e **CSS puro**, sem dependência de frameworks externos de estilo para garantir máxima performance e um código limpo.

O site é focado em captar clientes para os serviços de **MEI, Imposto de Renda e Aposentadoria**, utilizando princípios de UI/UX minimalista e copywriting voltado para conversão.

## 🎨 Principais Funcionalidades e Design
- **Identidade Visual Profissional:** Paleta de cores que transmite confiança (Azul Marinho, Dourado e Branco).
- **Copywriting Otimizado:** Textos estruturados para gerar autoridade imediata, focando nas dores do cliente em vez de jargões contábeis.
- **CTAs Dinâmicos:** Botões integrados à API do WhatsApp (`wa.me`) que já entregam mensagens pré-definidas para cada serviço específico (ex: "Quero regularizar meu MEI").
- **Design Responsivo Avançado:** Layout totalmente fluido com navegação "hambúrguer" construída do zero (sem libs) para a versão mobile.
- **SEO & Open Graph:** Compartilhamento de links otimizado para WhatsApp e redes sociais (mostrando "Contadora Larissa Viana" no card de preview).
- **Zero Config de CSS:** Total ausência de Tailwind/Bootstrap, usando apenas variáveis nativas (`globals.css`) e Flexbox/Grid modernos.

## 🚀 Como Executar Localmente

1. Instale as dependências do projeto:
```bash
npm install
```
2. Inicie o servidor local:
```bash
npm run dev
```
3. Acesse `http://localhost:3000` no seu navegador.

## ☁️ Como Fazer o Deploy na AWS Amplify

O projeto está pronto para ser hospedado na AWS de forma automatizada, utilizando o serviço **AWS Amplify Hosting**.

1. Cesse o painel da AWS (https://aws.amazon.com/) e busque pelo serviço **Amplify**.
2. Vá em "Hospedagem" (Hosting) ou clique em "Get Started" e escolha **Host your web app**.
3. Selecione o **GitHub** como o seu provedor de código e conecte a sua conta.
4. Selecione este repositório (`pedro-machado98/portifolio-larissa-viana`) e a branch `main`.
5. O Amplify identificará automaticamente a configuração do Next.js (SSR, API Routes, App Router).
6. Revise os detalhes e clique em **Save and deploy**.
7. Pronto! A AWS fará o build da sua aplicação e te fornecerá uma URL pública gerada automaticamente (ex: `https://main.xxxxxx.amplifyapp.com`). Posteriormente, você pode vincular seu próprio domínio (`.com.br`) na aba "Domain management" do Amplify.

---
*Projeto desenvolvido e otimizado com a assistência da suíte Antigravity.*
