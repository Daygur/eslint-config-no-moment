module.exports = {
    plugins: [],
    rules: {
      'no-restricted-imports': ['error', {
        name: 'moment',
        message: 'Usage of moment.js is forbidden. Please use alternatives like date-fns or native Date methods.'
      }],
      'no-restricted-modules': ['error', {
        name: 'moment',
        message: 'Usage of moment.js is forbidden. Please use alternatives like date-fns or native Date methods.'
      }]
    },
  };