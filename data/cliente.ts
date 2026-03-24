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
    whatsappNumber: "5544999324635",
    whatsappLink: "https://wa.me/5544999324635?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "Rua Deodoro da Fonseca, s/n - Zona Norte - Maringá - PR, CEP: 87.1000-000",
    telefone: "(44) 99932-4635",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Dedetizadora e Desentupidora Lady Bug",
    subtitulo: "Serviços de dedetização e desentupimento quando você mais precisa.\nEstamos prontos para ajudar 24/7.",
    sobreNos:
      "Somos uma empresa especializada em serviços de dedetização e desentupimento com atendimento 24 horas. Oferecemos soluções rápidas e confiáveis para todos os tipos de pragas e entupimentos. Nossa equipe é experiente e utiliza equipamentos de última geração para garantir segurança, qualidade e eficácia.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Dedetização",
      descricao: "Controle completo de pragas e insetos",
      icone: "🐛",
    },
    {
      id: 2,
      titulo: "Desentupimento",
      descricao: "Solução rápida para todos os tipos de entupimento",
      icone: "🔧",
    },
    {
      id: 3,
      titulo: "Profissionais Certificados",
      descricao: "Equipe treinada e qualificada",
      icone: "👨‍⚕️",
    },
    {
      id: 4,
      titulo: "Atendimento 24/7",
      descricao: "Disponível todos os dias, sem intervalo",
      icone: "⏰",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Resposta Rápida",
      descricao: "Atendimento em menos de 30 minutos",
    },
    {
      titulo: "Serviços Variados",
      descricao: "Residencial, comercial e industrial",
    },
    {
      titulo: "Preços Transparentes",
      descricao: "Orçamento honesto sem taxas ocultas",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Dedetizadora e Desentupidora Lady Bug | (44) 99932-4635",
    description:
      "Serviços de dedetização e desentupimento em Maringá. Atendimento 24 horas. Profissionais certificados e preços transparentes.",
    url: "https://dedetizadora-lady-bug.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
