# LifeFit - Gym & Training

Website da academia **LifeFit**, desenvolvido com base no protótipo Figma. Projeto acadêmico — Fundamentos Web UX (N3).

## Links

- **Figma:** [Protótipo LifeFit](https://www.figma.com/proto/LLjcoiwIJqekuU9L0gYQrb/LifeFit?node-id=0-1)
- **Site online:** [https://erik743-git.github.io/lifefit/](https://erik743-git.github.io/lifefit/)
- **Repositório:** [https://github.com/Erik743-git/lifefit](https://github.com/Erik743-git/lifefit)

## Tecnologias

HTML5 · CSS3 · JavaScript (Vanilla) · Git · GitHub Pages

## Estrutura do projeto

```
├── index.html                  # Home (hero + planos)
├── pages/
│   ├── login.html              # Tela de login
│   ├── planos.html             # Seleção e detalhe dos planos
│   ├── depoimentos.html        # Antes/depois dos alunos
│   ├── infraestrutura.html     # Fotos da academia
│   ├── perfil.html             # Perfil do usuário
│   ├── configuracoes.html      # Toggles de configuração
│   ├── sobre.html              # Resumo do projeto (Figma Capa)
│   └── contato.html            # Formulário de contato
├── css/
│   ├── reset.css
│   ├── variables.css           # Cores vermelho/preto do Figma
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js                 # Menu mobile
│   ├── login.js                # Validação de login
│   ├── planos.js               # Navegação entre planos
│   ├── perfil.js               # Modal encerrar matrícula
│   ├── configuracoes.js        # Toggle switches
│   └── contato.js              # Validação do formulário
└── assets/images/logo.png
```

## Páginas e responsabilidades (para avaliação individual)

| Integrante   | Página / Componente        | Arquivo principal        |
|--------------|----------------------------|--------------------------|
| Integrante 1 | Home + Header              | `index.html`, `style.css`|
| Integrante 2 | Login + Planos             | `login.html`, `planos.js`|
| Integrante 3 | Perfil + Configurações     | `perfil.js`, `configuracoes.js` |
| Integrante 4 | Depoimentos + Infraestrutura | `depoimentos.html`, `infraestrutura.html` |
| Integrante 5 | Sobre + Contato            | `sobre.html`, `contato.js` |

## Como rodar

1. Abra `index.html` no navegador ou use **Live Server** no VS Code
2. Teste no mobile com F12 → modo responsivo

## GitHub Pages

1. Repositório público no GitHub
2. `git push origin main`
3. **Settings → Pages → Deploy from branch → main → / (root) → Save**
4. Aguarde 2–5 minutos e acesse `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

## Paleta de cores (Figma)

| Cor        | Hex       | Uso                    |
|------------|-----------|------------------------|
| Vermelho   | `#cc0000` | Botões, sidebar, destaques |
| Preto      | `#121212` | Fundo principal        |
| Cinza card | `#2a2a2a` | Cards de planos        |
| Branco     | `#ffffff` | Textos e inputs        |

## Equipe

Erik Manarin · Ana Lima · Pedro Silva · Mariana Costa

*(Ajuste com os nomes reais do seu grupo)*
