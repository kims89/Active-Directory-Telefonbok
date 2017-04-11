var ActiveDirectory = require('activedirectory');
var fs = require('fs');
var cron = require('node-cron');

cron.schedule('0 0 * * *', function(){
  console.log(Date()+': Jobb starter');
  var config = { url: 'ldap://lab.intern',
                 baseDN: 'OU=Brukere,DC=lab,DC=intern',
                 username: 'srvc_ph@lab.intern',
                 password: 'Pa$$w0rd',
                 attributes: {
                                   user: [ 'mobile', 'title', 'company', 'department','physicalDeliveryOfficeName','ipPhone', 'sn', 'givenName', 'mail', 'userPrinicipalName','displayName' ]
                                 }
  }

  var ad = new ActiveDirectory(config);
  var groupName = 'Employees';

  ad.getUsersForGroup(groupName, function(err, users) {
    if (err) {
      console.log(Date()+': Skjedde en feil. Ikke kontakt med Active Directory');
      console.log('ERROR: ' +JSON.stringify(err));
      return;
    }


    if ((! users) || (users.length == 0)) console.log('No users found.');
    else {
      var outputFilename = 'bruker.json';
      users.sort(function(a, b){
        var x = a.givenName.toLowerCase();
        var y = b.givenName.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      }).reverse();

      fs.writeFile('bruker.json', JSON.stringify(users), function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log(Date()+': JSON er lagret til ' + outputFilename);
          }
      });
      console.log(Date()+': Jobb ferdig');
    }
  });
});
