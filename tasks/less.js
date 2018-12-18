module.exports = {
  development: {
    options: {
      outputSourceFiles: true
    },
    files: {
      'src/css/style.css': 'src/less/style.less',
    }
  },
  production: {
    options: {
      outputSourceFiles: true,
      separator: '\n',
      compress: true,
      livereload: true, //! important
    },
    files: {
      'src/css/style.min.css': 'src/less/style.less',
    }
  }
};
