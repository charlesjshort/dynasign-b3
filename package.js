Package.describe({
    summary: "interactive e-mail/passoword sign-up / authentication using Mailgun validation API, Iron-Router, Parsley, and helpless-b3  ..."
});

Package.on_use(function (api) {
    api.use(['standard-app-packages', 'http', 'parsleyb3', 'underscore', 'jquery'], 'client');
    api.use(['coffeescript', 'helpless-b3', 'accounts-base', 'accounts-password', 'iron-router'], ['client', 'server']);
    api.imply(['accounts-base', 'accounts-password', 'helpless-b3'],['client', 'server']);

    api.add_files('mailgun-key.coffee', 'client');

    api.add_files('dynaConfigs.coffee', ['client', 'server']);

    api.add_files([
    'parsley-defaults.coffee',
    'dynaSign.html'
    ], ['client']);
 
    api.add_files('dynaSign.coffee', ['client', 'server']);

  
});

