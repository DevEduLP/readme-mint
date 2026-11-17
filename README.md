# ⚡ ReadmeMint

![License](https://img.shields.io/github/license/DevEduLP/readme-mint?style=flat-square)
![Stars](https://img.shields.io/github/stars/DevEduLP/readme-mint?style=flat-square)
![Issues](https://img.shields.io/github/issues/DevEduLP/readme-mint?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/DevEduLP/readme-mint?style=flat-square)

Estúdio web open source, leve e 100% client-side para criar arquivos **README.md** profissionais, **badges dinâmicos** (Shields.io), **árvores de diretórios em ASCII** e arquivos **LICENSE** preenchidos em segundos - sem precisar criar conta ou instalar dependências.

🔗 **Demo Online:** [https://devedulp.github.io/readme-forge/](https://devedulp.github.io/readme-mint/)

> **Gostou da ferramenta?** Deixe uma ⭐ no repositório para apoiar o projeto open source!

---

##  Sumário

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Roadmap](#-roadmap)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)

---

##  Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

##  Funcionalidades

- **Preview Visual em Tempo Real:** Visualize o documento lado a lado exatamente como será renderizado no GitHub, com alternância instantânea entre **GitHub Dark** e **GitHub Light**.
- **Templates Prontos em 1 Clique:** Modelos pré-configurados para projetos **C / CLI**, **Python / IA & Dados**, **Web App** e **Pesquisa / Acadêmico**.
- **Seletor e Criador de Badges:** Escolha tecnologias prontas, alterne estilos (`for-the-badge`, `flat-square`, `flat`, `plastic`) ou crie badges personalizadas com nome e cor customizados.
- **Gerador de Árvore ASCII (`tree`):** Digite os caminhos dos arquivos (ex: `src/main.c`) e gere automaticamente a estrutura hierárquica formatada para Markdown.
- **Gerador de Arquivo `LICENSE`:** Gere e baixe os textos oficiais das licenças **MIT**, **GNU GPLv3** e **Apache 2.0** já preenchidos com o ano atual e o nome do mantenedor.
- **Offline-First & Auto-Save:** Todo o progresso é salvo automaticamente no `localStorage` do navegador, sem envio de dados para servidores externos.

---

##  Estrutura do Projeto

```text
.
├── index.html      # Estrutura da interface (Editor, Preview e Abas de Saída)
├── style.css       # Estilização moderna (Dark UI, responsividade e temas do Preview)
├── app.js          # Motor de geração de Markdown, árvore ASCII, LICENSE e localStorage
├── LICENSE         # Licença MIT do projeto
└── README.md       # Documentação oficial
```

---

##  Como Executar

Como o projeto foi construído com **HTML, CSS e JavaScript puro** (zero dependências ou etapas de build), basta clonar o repositório e abrir no navegador:

```bash
# 1. Clone o repositório
git clone https://github.com/DevEduLP/readme-mint.git

# 2. Acesse a pasta do projeto
cd readme-mint

# 3. Abra o arquivo index.html no seu navegador preferido
```

---

##  Roadmap

Ideias planejadas para as próximas versões (contribuições são bem-vindas!):

- [ ] Gerador integrado de arquivo `.gitignore` por linguagem/IDE
- [ ] Exportação em pacote `.zip` contendo `README.md` + `LICENSE` + `.gitignore`
- [ ] Suporte a tabelas comparativas e blocos de alerta do GitHub (`[!NOTE]`, `[!TIP]`, `[!WARNING]`)
- [ ] Modo bilíngue (Português / Inglês) nos templates rápidos

---

## 🤝 Como Contribuir

1. Faça um **Fork** deste repositório
2. Crie uma branch para sua melhoria (`git checkout -b feature/nova-funcionalidade`)
3. Faça o commit das alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Envie para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido por **Eduardo Livi Pedruzzi** 🚀
