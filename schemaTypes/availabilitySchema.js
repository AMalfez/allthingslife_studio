export default {
  name: 'availability',
  title: 'Consultation Availability',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timeSlots',
      title: 'Available Time Slots',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'Format: HH:MM (24-hour format, e.g., 15:00 for 3:00 PM)',
              validation: Rule => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
                name: 'time',
                invert: false
              }).error('Please use HH:MM format (24-hour)')
            },
            {
              name: 'isBooked',
              title: 'Is Booked',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'bookedBy',
              title: 'Booked By',
              type: 'object',
              hidden: ({parent}) => !parent?.isBooked,
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'email',
                  title: 'Email',
                  type: 'string',
                },
                {
                  name: 'message',
                  title: 'Message',
                  type: 'text',
                }
              ],
            },
          ],
          preview: {
            select: {
              time: 'time',
              isBooked: 'isBooked',
            },
            prepare({time, isBooked}) {
              return {
                title: time,
                subtitle: isBooked ? '🔴 Booked' : '🟢 Available',
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      date: 'date',
      timeSlots: 'timeSlots',
    },
    prepare({date, timeSlots}) {
      const available = timeSlots?.filter(slot => !slot.isBooked).length || 0;
      return {
        title: date,
        subtitle: `${available} slot(s) available`,
      }
    },
  },
}