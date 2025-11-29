# High End Systems – Personalised UI

Este repositório contém a interface inicial de um site corporativo da **High End Systems**, com páginas estáticas em HTML, CSS e JavaScript, incluindo um sistema de preferências do usuário (tema, fonte, animação, nome e escritório preferido), armazenado localmente no navegador.

A aplicação é leve, responsiva e construída com foco em acessibilidade e personalização.

---

## Funcionalidades

- Personalização de exibição:
  - Tema (Claro, Escuro ou Sistema)
  - Tamanho da fonte (87–125%)
  - Alto contraste
  - Redução de movimento
- Salvamento automático das preferências no dispositivo
- Saudação personalizada com nome do usuário
- Memorização do escritório preferido
- Navegação entre páginas estáticas:  
  **Home**, **About Us**, **Contact Us**
- Design responsivo e otimizado
- Conteúdo e UI pensados para acessibilidade (WCAG 2.2 AA-minded)

---

## Estrutura do Projeto

/
├── index.html # Página inicial com atalhos e destaque de serviços
├── about.html # Página "About Us"
├── contact.html # Página "Contact Us"
├── styles.css # Estilos e layout geral do site
├── prefs.js # Script de personalização e salvamento de preferências
├── logo-temp.svg # Logotipo temporário
└── README.md # Documento atual


---

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- LocalStorage para persistência de dados
- Design sem dependências externas

---

## ⚙️ Como executar o projeto

###  1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git

2. Abrir o projeto

Basta abrir o arquivo index.html no navegador.
