export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
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
      name: 'authorImage',
      type: 'image',
      title: 'AuthorImage',
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
