# LifeFit - Website

Website institucional do app **LifeFit** (planejador de dieta saudável), desenvolvido como projeto acadêmico da disciplina **Fundamentos Web UX**.

## Link do site

> Após publicar no GitHub Pages, adicione o link aqui:
> `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

## Link do Figma

- [Protótipo LifeFit](https://www.figma.com/proto/LLjcoiwIJqekuU9L0gYQrb/LifeFit?node-id=0-1)
- [Design (Dev Mode)](https://www.figma.com/design/LLjcoiwIJqekuU9L0gYQrb/LifeFit?node-id=0-1)

## Tecnologias utilizadas

- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid)
- JavaScript (Vanilla)
- Git / GitHub
- GitHub Pages

## Estrutura de arquivos

```
lifefit/
├── index.html          # Página inicial
├── pages/
│   ├── sobre.html      # Sobre o projeto
│   ├── planos.html     # Planos e preços
│   └── contato.html    # Formulário de contato
├── css/
│   ├── reset.css       # Reset de estilos
│   ├── variables.css   # Cores, fontes e espaçamentos
│   ├── style.css       # Estilos principais
│   └── responsive.css  # Media queries (mobile/desktop)
├── js/
│   ├── main.js         # Menu mobile, scroll, animações
│   ├── planos.js       # Toggle mensal/anual
│   └── contato.js      # Validação do formulário
├── assets/
│   └── images/         # Imagens do projeto
└── README.md
```

## Funcionalidades

| Página   | Funcionalidade                                      | Arquivo JS    |
|----------|-----------------------------------------------------|---------------|
| Todas    | Menu hambúrguer responsivo                          | `main.js`     |
| Todas    | Sombra no header ao rolar                           | `main.js`     |
| Início   | Animação de cards ao scroll                         | `main.js`     |
| Planos   | Alternância de preços mensal/anual                  | `planos.js`   |
| Contato  | Validação de formulário (nome, e-mail, mensagem)    | `contato.js`  |

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/lifefit.git
   ```
2. Abra a pasta no VS Code
3. Use a extensão **Live Server** ou abra o `index.html` diretamente no navegador

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub
2. Envie o código para o repositório
3. Vá em **Settings > Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
5. Salve e aguarde alguns minutos
6. Acesse: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

## Equipe

| Integrante     | Responsabilidade        |
|----------------|-------------------------|
| Erik Manarin   | HTML / estrutura geral  |
| Ana Lima       | CSS / design responsivo |
| Pedro Silva    | JavaScript              |
| Mariana Costa  | Documentação / GitHub   |

> Ajuste os nomes conforme sua equipe real.

## Responsividade

O site foi desenvolvido com abordagem **mobile-first** e testado nos breakpoints:

- Desktop: 1200px+
- Tablet: 768px – 1024px
- Mobile: até 768px

## Licença

Projeto acadêmico — uso educacional.
