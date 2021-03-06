Package.describe({
  name: 'mdg:date-components',
  version: '0.2.4',
  summary: 'Simple rendering of dates',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.5',
    'mdg:chromatic-api@0.2.4',
    'mdg:tooltips@0.2.5',
    'momentjs:moment@2.10.6',
    'react-meteor-data@0.2.9',
    'tracker'], 'client');
  api.addFiles([
    'DateVar.js',
    'RelativeDate.jsx',
    'FullDate.jsx'], 'client');
  api.export(['RelativeDate', 'FullDate'], 'client');
});
