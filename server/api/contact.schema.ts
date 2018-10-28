export const postSchema = {
  subject: {
    in: 'body',
    trim: true,
    isLength: {
      errorMessage: 'Subject should be at least 5 chars long and at last 40 chars long',
      options: { min: 5, max: 40 },
    },
  },
  email: {
    in: 'body',
    trim: true,
    isEmail: {
      errorMessage: 'Not a valid email',
    },
    normalizeEmail: true,
    isLength: {
      errorMessage: 'Email should be at least 5 chars long and at last 80 chars long',
      options: { min: 5, max: 80 },
    },
  },
  message: {
    in: 'body',
    trim: true,
    isLength: {
      errorMessage: 'Message should be at least 5 chars long and at last 500 chars long',
      options: { min: 10, max: 500 },
    },
  },
}
