const STORAGE_KEY = "readmemint_state_v3";

let TECH_STACK = [
  { name: "C", color: "00599C", logo: "c", logoColor: "white", selected: true },
  { name: "C++", color: "004482", logo: "cplusplus", logoColor: "white", selected: false },
  { name: "Python", color: "3776AB", logo: "python", logoColor: "white", selected: true },
  { name: "JavaScript", color: "F7DF1E", logo: "javascript", logoColor: "black", selected: true },
  { name: "HTML5", color: "E34F26", logo: "html5", logoColor: "white", selected: false },
  { name: "CSS3", color: "1572B6", logo: "css3", logoColor: "white", selected: false },
  { name: "Linux", color: "FCC624", logo: "linux", logoColor: "black", selected: false },
  { name: "OpenCV", color: "5C3EE8", logo: "opencv", logoColor: "white", selected: false },
  { name: "SQLite", color: "003B57", logo: "sqlite", logoColor: "white", selected: false },
  { name: "React", color: "20232A", logo: "react", logoColor: "61DAFB", selected: false },
  { name: "Node.js", color: "339933", logo: "nodedotjs", logoColor: "white", selected: false },
  { name: "Docker", color: "2496ED", logo: "docker", logoColor: "white", selected: false },
  { name: "Git", color: "F05032", logo: "git", logoColor: "white", selected: false },
  { name: "Vercel", color: "000000", logo: "vercel", logoColor: "white", selected: false }
];

const TEMPLATES = {
  "c-cli": {
    title: "Monitor de Processos CLI em C",
    desc: "Utilitário de terminal ultraleve escrito em C puro para monitoramento de memória, CPU e processos ativos com zero dependências externas.",
    user: "DevEduLP",
    repo: "c-process-monitor",
    demo: "",
    banner: "",
    techs: ["C", "Linux", "Git"],
    prereq: "Compilador GCC ou Clang\nSistema operacional Linux (leitura via /proc)",
    features: "Leitura direta de métricas do kernel sem bibliotecas pesadas\nConsumo mínimo de memória RAM\nSaída formatada em tempo real no terminal",
    tree: "src/main.c\nsrc/cpu_stats.c\ninclude/cpu_stats.h\nMakefile\nREADME.md",
    install: "git clone https://github.com/DevEduLP/c-process-monitor.git\ncd c-process-monitor\nmake && ./monitor",
    license: "MIT",
    author: "Eduardo Livi Pedruzzi"
  },
  "python-cv": {
    title: "Detector de Gestos e Rastreamento Ocular",
    desc: "Sistema de visão computacional em tempo real utilizando Python e OpenCV para análise de movimento ocular e comandos por gestos via webcam.",
    user: "DevEduLP",
    repo: "opencv-gesture-tracker",
    demo: "",
    banner: "",
    techs: ["Python", "OpenCV", "Git"],
    prereq: "Python 3.10 ou superior\nWebcam funcional",
    features: "Detecção facial e rastreamento de pupila em tempo real\nReconhecimento de gestos manuais sem GPU dedicada\nProcessamento 100% local com foco em privacidade",
    tree: "src/detector.py\nsrc/utils.py\nrequirements.txt\nREADME.md",
    install: "git clone https://github.com/DevEduLP/opencv-gesture-tracker.git\ncd opencv-gesture-tracker\npip install -r requirements.txt\npython src/detector.py",
    license: "MIT",
    author: "Eduardo Livi Pedruzzi"
  },
  "web-app": {
    title: "ReadmeMint - Gerador de README.md",
    desc: "Ferramenta web open source e offline-first para criar arquivos README.md profissionais, badges dinâmicos, árvores de diretórios e licenças em segundos.",
    user: "DevEduLP",
    repo: "readme-forge",
    demo: "https://devedulp.github.io/readme-mint/",
    banner: "",
    techs: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    prereq: "Qualquer navegador moderno (Chrome, Firefox, Edge)",
    features: "Preview visual lado a lado em tempo real\nGerador automático de árvore ASCII de pastas\nDownload direto de README.md e LICENSE preenchidos",
    tree: "index.html\nstyle.css\napp.js\nLICENSE\nREADME.md",
    install: "git clone https://github.com/DevEduLP/readme-mint.git\ncd readme-mint\n# Abra o arquivo index.html diretamente no navegador",
    license: "MIT",
    author: "Eduardo Livi Pedruzzi"
  },
  "academic": {
    title: "Simulador de Algoritmos de Compressão",
    desc: "Implementação didática e benchmark experimental de algoritmos de compressão sem perdas (Huffman e RLE) desenvolvido para pesquisa em Computação Aplicada.",
    user: "DevEduLP",
    repo: "compression-benchmark",
    demo: "https://devedulp.github.io/readme-mint/",
    banner: "",
    techs: ["C", "Python", "Linux"],
    prereq: "GCC 11+\nPython 3.10+ (para geração dos gráficos comparativos)",
    features: "Construção dinâmica de árvore binária de Huffman\nMedição de taxa de compressão e tempo de execução\nScripts automatizados para geração de relatórios",
    tree: "core/huffman.c\ncore/huffman.h\nscripts/benchmark.py\ndocs/artigo.md\nREADME.md",
    install: "git clone https://github.com/DevEduLP/compression-benchmark.git\ncd compression-benchmark\ngcc -O2 core/huffman.c -o huffman\n./huffman arquivo_teste.txt",
    license: "GPL-3.0",
    author: "Eduardo Livi Pedruzzi"
  }
};

const els = {
  title: document.getElementById("project-title"),
  desc: document.getElementById("project-desc"),
  user: document.getElementById("github-user"),
  repo: document.getElementById("github-repo"),
  demo: document.getElementById("demo-url"),
  banner: document.getElementById("banner-url"),
  badgeStyle: document.getElementById("badge-style"),
  techGrid: document.getElementById("tech-badges"),
  customName: document.getElementById("custom-tech-name"),
  customColor: document.getElementById("custom-tech-color"),
  btnAddBadge: document.getElementById("btn-add-badge"),
  badgeLicense: document.getElementById("badge-license"),
  badgeStars: document.getElementById("badge-stars"),
  badgeIssues: document.getElementById("badge-issues"),
  badgeCommit: document.getElementById("badge-lastcommit"),
  optToc: document.getElementById("opt-toc"),
  optContrib: document.getElementById("opt-contrib"),
  prereq: document.getElementById("prereq-list"),
  features: document.getElementById("features"),
  treeInput: document.getElementById("tree-input"),
  installCmd: document.getElementById("install-cmd"),
  licenseSelect: document.getElementById("license-select"),
  authorName: document.getElementById("author-name"),
  mdOutput: document.getElementById("markdown-output"),
  licenseOutput: document.getElementById("license-output"),
  previewOutput: document.getElementById("preview-render"),
  saveStatus: document.getElementById("save-status"),
  btnCopy: document.getElementById("btn-copy"),
  btnDownloadMd: document.getElementById("btn-download-md"),
  btnDownloadLic: document.getElementById("btn-download-lic"),
  btnReset: document.getElementById("btn-reset"),
  toast: document.getElementById("toast")
};

let toastTimer;

function showToast(msg) {
  if (!els.toast) return;
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function renderTechChips() {
  els.techGrid.innerHTML = "";
  TECH_STACK.forEach((tech, index) => {
    const chip = document.createElement("span");
    chip.className = `chip ${tech.selected ? "selected" : ""}`;
    chip.textContent = tech.name;
    chip.addEventListener("click", () => {
      TECH_STACK[index].selected = !TECH_STACK[index].selected;
      chip.classList.toggle("selected");
      updateAll();
    });
    els.techGrid.appendChild(chip);
  });
}

els.btnAddBadge.addEventListener("click", () => {
  const rawName = els.customName.value.trim();
  if (!rawName) return;
  const hex = els.customColor.value.replace("#", "");
  TECH_STACK.push({
    name: rawName,
    color: hex,
    logo: rawName.toLowerCase().replace(/\s+/g, ""),
    logoColor: "white",
    selected: true
  });
  els.customName.value = "";
  renderTechChips();
  updateAll();
  showToast(`✓ Badge "${rawName}" adicionada!`);
});

function applyTemplate(key) {
  const tpl = TEMPLATES[key];
  if (!tpl) return;
  els.title.value = tpl.title;
  els.desc.value = tpl.desc;
  els.user.value = tpl.user;
  els.repo.value = tpl.repo;
  els.demo.value = tpl.demo;
  els.banner.value = tpl.banner;
  els.prereq.value = tpl.prereq;
  els.features.value = tpl.features;
  els.treeInput.value = tpl.tree;
  els.installCmd.value = tpl.install;
  els.licenseSelect.value = tpl.license;
  els.authorName.value = tpl.author;

  TECH_STACK.forEach(t => {
    t.selected = tpl.techs.includes(t.name);
  });

  renderTechChips();
  updateAll();
}

document.querySelectorAll(".tpl-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tpl-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyTemplate(btn.dataset.tpl);
  });
});

function buildAsciiTree(rawPaths) {
  const lines = rawPaths.split("\n").map(l => l.trim()).filter(Boolean);
  if (!lines.length) return "";

  const root = {};
  lines.forEach(path => {
    const parts = path.split("/").filter(Boolean);
    let current = root;
    parts.forEach(part => {
      if (!current[part]) current[part] = {};
      current = current[part];
    });
  });

  function renderNode(node, prefix = "") {
    const keys = Object.keys(node);
    let result = "";
    keys.forEach((key, idx) => {
      const isLast = idx === keys.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const hasChildren = Object.keys(node[key]).length > 0;
      result += `${prefix}${connector}${key}${hasChildren ? "/" : ""}\n`;
      if (hasChildren) {
        result += renderNode(node[key], prefix + (isLast ? "    " : "│   "));
      }
    });
    return result;
  }

  return ".\n" + renderNode(root).trimEnd();
}

function generateLicenseText(type, author) {
  const year = new Date().getFullYear();
  const holder = author || "Autor do Projeto";

  if (type === "MIT") {
    return `MIT License

Copyright (c) ${year} ${holder}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  }

  if (type === "Apache-2.0") {
    return `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright ${year} ${holder}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
  }

  return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) ${year} ${holder}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.`;
}

function updateAll() {
  const title = els.title.value.trim() || "Título do Projeto";
  const desc = els.desc.value.trim();
  const user = els.user.value.trim() || "usuario";
  const repo = els.repo.value.trim() || "repositorio";
  const demo = els.demo.value.trim();
  const banner = els.banner.value.trim();
  const style = els.badgeStyle.value;
  const license = els.licenseSelect.value;
  const author = els.authorName.value.trim();

  const repoBadges = [];
  if (els.badgeLicense.checked) repoBadges.push(`![License](https://img.shields.io/github/license/${user}/${repo}?style=flat-square)`);
  if (els.badgeStars.checked) repoBadges.push(`![Stars](https://img.shields.io/github/stars/${user}/${repo}?style=flat-square)`);
  if (els.badgeIssues.checked) repoBadges.push(`![Issues](https://img.shields.io/github/issues/${user}/${repo}?style=flat-square)`);
  if (els.badgeCommit.checked) repoBadges.push(`![Last Commit](https://img.shields.io/github/last-commit/${user}/${repo}?style=flat-square)`);

  const techBadges = TECH_STACK.filter(t => t.selected).map(t => {
    const encodedName = encodeURIComponent(t.name.replace(/-/g, "--"));
    return `![${t.name}](https://img.shields.io/badge/${encodedName}-${t.color}?style=${style}&logo=${t.logo}&logoColor=${t.logoColor})`;
  });

  const prereqList = els.prereq.value.split("\n").map(l => l.trim()).filter(Boolean).map(l => `- ${l}`).join("\n");
  const featuresList = els.features.value.split("\n").map(l => l.trim()).filter(Boolean).map(l => `- ${l}`).join("\n");
  const asciiTree = buildAsciiTree(els.treeInput.value);
  const install = els.installCmd.value.trim();

  const tocItems = [];
  if (techBadges.length) tocItems.push("- [Tecnologias](#%EF%B8%8F-tecnologias-utilizadas)");
  if (featuresList) tocItems.push("- [Funcionalidades](#-funcionalidades)");
  if (prereqList) tocItems.push("- [Pré-requisitos](#-pré-requisitos)");
  if (asciiTree) tocItems.push("- [Estrutura do Projeto](#-estrutura-do-projeto)");
  if (install) tocItems.push("- [Como Executar](#-como-executar)");
  if (els.optContrib.checked) tocItems.push("- [Como Contribuir](#-como-contribuir)");
  tocItems.push("- [Licença](#-licença)");

  let md = `# ${title}\n\n`;
  if (repoBadges.length) md += `${repoBadges.join(" ")}\n\n`;
  if (desc) md += `${desc}\n\n`;
  if (demo) md += `🔗 **Demo Online:** [${demo}](${demo})\n\n`;
  if (banner) md += `![Preview do Projeto](${banner})\n\n`;

  if (els.optToc.checked && tocItems.length > 1) {
    md += `## 📑 Sumário\n\n${tocItems.join("\n")}\n\n`;
  }

  if (techBadges.length) md += `## 🛠️ Tecnologias Utilizadas\n\n${techBadges.join(" ")}\n\n`;
  if (featuresList) md += `## ✨ Funcionalidades\n\n${featuresList}\n\n`;
  if (prereqList) md += `## 📋 Pré-requisitos\n\n${prereqList}\n\n`;
  if (asciiTree) md += `## 📂 Estrutura do Projeto\n\n\`\`\`text\n${asciiTree}\n\`\`\`\n\n`;
  if (install) md += `## 🚀 Como Executar\n\n\`\`\`bash\n${install}\n\`\`\`\n\n`;

  if (els.optContrib.checked) {
    md += `## 🤝 Como Contribuir\n\n1. Faça um **Fork** do projeto\n2. Crie uma branch para sua funcionalidade (\`git checkout -b feature/nova-funcionalidade\`)\n3. Faça o commit das alterações (\`git commit -m 'feat: adiciona nova funcionalidade'\`)\n4. Envie para a branch (\`git push origin feature/nova-funcionalidade\`)\n5. Abra um **Pull Request**\n\n`;
  }

  md += `## 📄 Licença\n\nEste projeto está sob a licença **${license}**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.\n\n`;
  if (author) md += `---\nDesenvolvido por **${author}** 🚀\n`;

  els.mdOutput.value = md;
  els.licenseOutput.value = generateLicenseText(license, author);

  renderPreview({
    title,
    desc,
    demo,
    banner,
    repoBadges,
    techBadges,
    featuresList,
    prereqList,
    asciiTree,
    install,
    license,
    author,
    contrib: els.optContrib.checked
  });
  saveState();
}

function renderPreview(data) {
  const toImgs = arr => arr.map(m => {
    const match = m.match(/\((https?:\/\/[^\)]+)\)/);
    return match ? `<img src="${match[1]}" alt="badge" />` : "";
  }).join("");

  const toUl = raw => `<ul>${raw.split("\n").map(i => `<li>${escapeHtml(i.replace(/^- /, ""))}</li>`).join("")}</ul>`;

  let html = `<h1>${escapeHtml(data.title)}</h1>`;
  if (data.repoBadges.length) html += `<div class="preview-badges">${toImgs(data.repoBadges)}</div>`;
  if (data.desc) html += `<p>${escapeHtml(data.desc)}</p>`;
  if (data.demo) html += `<p> <strong>Demo Online:</strong> <a href="${escapeHtml(data.demo)}" target="_blank" style="color:#58a6ff">${escapeHtml(data.demo)}</a></p>`;
  if (data.banner) html += `<img src="${escapeHtml(data.banner)}" class="preview-banner" alt="Banner do projeto" />`;
  if (data.techBadges.length) html += `<h2> Tecnologias Utilizadas</h2><div class="preview-badges">${toImgs(data.techBadges)}</div>`;
  if (data.featuresList) html += `<h2> Funcionalidades</h2>${toUl(data.featuresList)}`;
  if (data.prereqList) html += `<h2> Pré-requisitos</h2>${toUl(data.prereqList)}`;
  if (data.asciiTree) html += `<h2> Estrutura do Projeto</h2><pre>${escapeHtml(data.asciiTree)}</pre>`;
  if (data.install) html += `<h2> Como Executar</h2><pre>${escapeHtml(data.install)}</pre>`;
  if (data.contrib) {
    html += `<h2>🤝 Como Contribuir:</h2><p>1. Faça um Fork <br>• 2. Crie sua Branch <br>• 3. Commit <br>• 4. Push <br>• 5. Abra um Pull Request</p>`;
  }
  html += `<h2>📄 Licença</h2><p>Este projeto está sob a licença <strong>${escapeHtml(data.license)}</strong>.</p>`;
  if (data.author) {
    html += `<hr style="border-color:rgba(139,148,158,0.25);margin:1.2rem 0"/><p>Desenvolvido por <strong>${escapeHtml(data.author)}</strong> </p>`;
  }

  els.previewOutput.innerHTML = html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function saveState() {
  const state = {
    title: els.title.value,
    desc: els.desc.value,
    user: els.user.value,
    repo: els.repo.value,
    demo: els.demo.value,
    banner: els.banner.value,
    badgeStyle: els.badgeStyle.value,
    badgeLicense: els.badgeLicense.checked,
    badgeStars: els.badgeStars.checked,
    badgeIssues: els.badgeIssues.checked,
    badgeCommit: els.badgeCommit.checked,
    optToc: els.optToc.checked,
    optContrib: els.optContrib.checked,
    prereq: els.prereq.value,
    features: els.features.value,
    treeInput: els.treeInput.value,
    installCmd: els.installCmd.value,
    licenseSelect: els.licenseSelect.value,
    authorName: els.authorName.value,
    techStack: TECH_STACK
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  els.saveStatus.textContent = "● Salvo";
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    applyTemplate("web-app");
    return;
  }
  try {
    const s = JSON.parse(saved);
    els.title.value = (s.title || "").replace(/—/g, "-");
    els.desc.value = (s.desc || "").replace(/—/g, "-");
    els.user.value = s.user || "";
    els.repo.value = s.repo || "";
    els.demo.value = s.demo || "";
    els.banner.value = s.banner || "";
    els.badgeStyle.value = s.badgeStyle || "for-the-badge";
    els.badgeLicense.checked = !!s.badgeLicense;
    els.badgeStars.checked = !!s.badgeStars;
    els.badgeIssues.checked = !!s.badgeIssues;
    els.badgeCommit.checked = !!s.badgeCommit;
    els.optToc.checked = !!s.optToc;
    els.optContrib.checked = !!s.optContrib;
    els.prereq.value = s.prereq || "";
    els.features.value = s.features || "";
    els.treeInput.value = s.treeInput || "";
    els.installCmd.value = s.installCmd || "";
    els.licenseSelect.value = s.licenseSelect || "MIT";
    els.authorName.value = s.authorName || "";
    if (Array.isArray(s.techStack)) TECH_STACK = s.techStack;
    renderTechChips();
    updateAll();
  } catch {
    applyTemplate("web-app");
  }
}

document.querySelectorAll("input, textarea, select").forEach(el => {
  if (el.id === "custom-tech-name" || el.id === "custom-tech-color") return;
  el.addEventListener("input", updateAll);
  el.addEventListener("change", updateAll);
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".output-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`view-${tab.dataset.tab}`).classList.add("active");
  });
});

els.btnCopy.addEventListener("click", async () => {
  await navigator.clipboard.writeText(els.mdOutput.value);
  const orig = els.btnCopy.textContent;
  els.btnCopy.textContent = "Copiado! ✓";
  showToast("✓ Código Markdown copiado!");
  setTimeout(() => (els.btnCopy.textContent = orig), 1600);
});

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`✓ Arquivo ${filename} baixado!`);
}

els.btnDownloadMd.addEventListener("click", () => downloadFile("README.md", els.mdOutput.value));
els.btnDownloadLic.addEventListener("click", () => downloadFile("LICENSE", els.licenseOutput.value));

els.btnReset.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  document.querySelectorAll(".tpl-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.tpl-btn[data-tpl="web-app"]').classList.add("active");
  applyTemplate("web-app");
  showToast("✓ Modelo padrão restaurado!");
});

const btnToggleTheme = document.getElementById("btn-toggle-theme");
const ghCard = document.getElementById("gh-preview-card");
const themeLabel = document.getElementById("preview-theme-label");

btnToggleTheme.addEventListener("click", () => {
  const isLight = ghCard.classList.toggle("light-mode");
  btnToggleTheme.textContent = isLight ? "🌙 Dark" : "☀️ Light";
  themeLabel.textContent = isLight ? "GitHub Light" : "GitHub Dark";
});

loadState();
