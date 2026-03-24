// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#d4af37", // Dourado
    secondaryColor: "#1a1a1a", // Preto
    accentColor: "#c9a227", // Dourado escuro
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5543996181457",
    whatsappLink: "https://wa.me/5543996181457?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "Av. Mario José Romagnoli, 447 - Jardim dos Estados, Londrina - PR, 86083-140",
    telefone: "(43) 99618-1457",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Souza Controle de Praga - Soluções em Limpeza e Dedetização",
    subtitulo: "Protegendo sua saúde e seu patrimônio em Londrina e região. Atendimento rápido e técnico.",
    sobreNos:
      "Somos uma empresa especializada em serviços de dedetização profissional, limpeza de caixas d'água e manutenção de placas solares. Oferecemos soluções rápidas e confiáveis para proteger sua residência e empresa. Nossa equipe é experiente e utiliza equipamentos de última geração para garantir segurança, qualidade e eficácia.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Dedetização Profissional",
      descricao: "Controle de insetos, roedores e pragas urbanas com segurança",
      icone: "🐛",
    },
    {
      id: 2,
      titulo: "Limpeza de Caixa d'Água",
      descricao: "Higienização completa para garantir a pureza da sua água",
      icone: "💧",
    },
    {
      id: 3,
      titulo: "Limpeza de Placas Solares",
      descricao: "Manutenção técnica para aumentar a eficiência da sua geração de energia",
      icone: "☀️",
    },
    {
      id: 4,
      titulo: "Atendimento Rápido e Técnico",
      descricao: "Profissionais qualificados e certificados",
      icone: "⏰",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Especialistas em Londrina",
      descricao: "Serviços confiáveis e técnicos para sua região",
    },
    {
      titulo: "Três Especialidades",
      descricao: "Dedetização, limpeza de água e placas solares",
    },
    {
      titulo: "Profissionais Qualificados",
      descricao: "Equipe experiente e certificada",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Souza Controle de Praga | Londrina - PR | (43) 99618-1457",
    description:
      "Especialistas em dedetização, limpeza de caixas d'água e manutenção de placas solares em Londrina. Qualidade e confiança para sua residência ou empresa.",
    url: "https://souza-controle-praga.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
