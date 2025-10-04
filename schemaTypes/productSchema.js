// schemas/product.js
export default {
  name: 'product',
  title: 'Digital Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'introVideo',
      title: 'Intro Video',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fitness', value: 'fitness' },
          { title: 'Travel', value: 'travel' },
          { title: 'Business', value: 'business' },
          { title: 'Health', value: 'health' },
          { title: 'Personal Development', value: 'personal-development' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'PDF',
          type: 'file',
          options: {
            accept: 'application/pdf'
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'filename',
          title: 'Download Filename',
          type: 'string',
          description: 'Filename to use when user downloads (e.g., "fitness-guide.pdf")',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'additionalVideos',
      title: 'Additional Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*'
              }
            },
            {
              name: 'filename',
              title: 'Download Filename',
              type: 'string',
              description: 'Filename to use when user downloads (e.g., "workout-tutorial.mp4")'
            }
          ]
        }
      ]
    },
    {
      name: 'numberOfDownloads',
      title: 'Number of Downloads',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(5)
    },
    {
      name: 'timeToComplete',
      title: 'Time to Complete',
      type: 'string',
      description: 'e.g., "2 hours", "1 week", "30 days"',
      validation: Rule => Rule.required()
    },
    {
      name: 'contentOverview',
      title: 'Content Overview',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'whatsIncluded',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },

  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
      subtitle: 'category'
    }
  }
}