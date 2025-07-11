export default {
  name: 'foreignListings',
  type: 'document',
  title: 'Foreign Listings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'availability',
      type: 'string',
      title: 'Availability',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [{type: 'text', name: 'alt', title: 'Alt Text'}],
    },
    {
      name: 'moreImages',
      title: 'More Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt Text'}],
        },
      ],
    },
    {
      name: 'guests',
      type: 'string',
      title: 'Guests',
    },
    {
      name: 'bedroom',
      type: 'string',
      title: 'Bedroom',
    },
    {
      name: 'bed',
      type: 'string',
      title: 'Bed',
    },
    {
      name: 'bath',
      type: 'string',
      title: 'Bath',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {type: 'image', fields: [{type: 'text', name: 'alt', title: 'Alt Text'}]},
      ],
    },
  ],
}
