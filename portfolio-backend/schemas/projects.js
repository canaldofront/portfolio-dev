export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          title: 'Projects',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [
                {
                  title: 'Technologies',
                  type: 'object',
                  fields: [
                    {
                      name: 'technology',
                      title: 'Technology',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
    { name: 'button', title: 'Button', type: 'string' },
    { name: 'url', title: 'URL', type: 'string' },
  ],
};
