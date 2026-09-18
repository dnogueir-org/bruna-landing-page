import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'post',
        label: 'Artigos',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Data de publicação',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categoria',
            options: [
              'Direito Médico e da Saúde',
              'Direito Administrativo',
              'Direito Civil e do Consumidor',
            ],
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Imagem de capa',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Resumo (aparece na listagem)',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Conteúdo do artigo',
            isBody: true,
          },
        ],
      },
    ],
  },
});
