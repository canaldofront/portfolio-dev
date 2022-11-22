export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      { name: 'image', title: 'Image', type: 'image' },
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'text',
        title: 'About text',
        type: 'array',
        of: [
          {
            title: 'About Text',
            type: 'object',
            fields: [
              {
                name: 'paragraph',
                title: 'Paragraph',
                type: 'text',
              },
            ],
          },
        ],
      },
      { name: 'button', title: 'Button', type: 'string' },
      { name: 'url', title: 'URL', type: 'string' },
    ],
  };
  