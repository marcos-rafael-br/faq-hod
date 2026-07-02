import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/faq-hod/",
  title: "FAQ Interno",
  description: "Base de Conhecimento para Analistas",

  themeConfig: {
    // 1. Ativa a barra de busca instantânea e local
    search: {
      provider: 'local'
    },

    // 2. Menu Superior (Fica no topo do site o tempo todo)
    nav: [
      { text: 'Início', link: '/' },
      {
        text: 'Empresas',
        items: [
          { text: 'Outlier (Aether)', link: '/outlier/aether/' }
        ]
      }
    ],

    // 3. Menu Lateral Dinâmico (Muda conforme a pasta que o analista acessa)
    sidebar: {
      // Sidebar exclusiva para quando o usuário estiver em /rws/
      '/rws/': [
        {
          text: 'Base de Conhecimento RWS',
          items: [
            { text: 'Dúvidas Gerais', link: '/rws/' }
            // Quando você criar novos arquivos, basta adicionar aqui, ex:
            // { text: 'Diretrizes', link: '/rws/diretrizes' },
            // { text: 'Pagamentos', link: '/rws/pagamentos' }
          ]
        }
      ],
      
      // Sidebar exclusiva para quando o usuário estiver em /appen/
      '/appen/': [
        {
          text: 'Base de Conhecimento Appen',
          items: [
            { text: 'Dúvidas Gerais', link: '/appen/' }
            // { text: 'Acesso Twingate', link: '/appen/twingate-acesso' }
          ]
        }
      ],

      // Sidebar exclusiva para quando o usuário estiver em /outlier/
      '/outlier/': [
        {
          text: 'Outlier',
          items: [
            {
              text: 'Projeto Aether',
              collapsed: false,
              items: [
                { text: 'Primeiros passos', link: '/outlier/aether/' },
                { text: 'Aulas', link: '/outlier/aether/aulas' },
                { text: 'Problemas', link: '/outlier/aether/problemas' }
              ]
            }
          ]
        }
      ]
    }
  }
})