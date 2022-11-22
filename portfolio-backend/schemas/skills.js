export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'text' },
      { name: 'skills_title', title: 'Skills Title', type: 'string' },
      {
        name: 'skills_list',
        title: 'Skills',
        type: 'array',
        of: [
          {
            title: 'Skills',
            type: 'object',
            fields: [
              {
                name: 'skill',
                title: 'Skill',
                type: 'string',
              },
            ],
          },
        ],
      },
      { name: 'experience_title', title: 'Experience Title', type: 'string' },
      {
        name: 'experience',
        title: 'Experience',
        type: 'array',
        of: [
          {
            title: 'Experience',
            type: 'object',
            fields: [
              {
                name: 'experience',
                title: 'Experience',
                type: 'string',
              },
              {
                name: 'company',
                title: 'Company',
                type: 'string',
              },
              {
                name: 'period',
                title: 'Period',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  