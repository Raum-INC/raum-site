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
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [{type: 'text', name: 'alt', title: 'Alt Text'}],
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
