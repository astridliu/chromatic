Package.describe({
  name: 'mdg:chromatic',
  version: '0.2.3',
  summary: 'a visualizer for react components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'mdg:chromatic-api@0.2.3',
    'mdg:chromatic-explorer@0.2.3'
  ], 'client');

  api.mainModule('main.js', 'client');
});
