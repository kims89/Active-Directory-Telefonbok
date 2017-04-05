var ActiveDirectory = require('activedirectory');
var fs = require('fs');
var cron = require('node-cron');

cron.schedule('0 0 * * *', function(){
  var config = { url: 'ldap://lab.intern',
                 baseDN: 'OU=Brukere,DC=lab,DC=intern',
                 username: 'srvc_ph@lab.intern',
                 password: 'Pa$$w0rd',
                 attributes: {
                                   user: [ 'mobile', 'title', 'company', 'department','physicalDeliveryOfficeName','ipPhone', 'sn', 'givenName', 'mail', 'userPrinicipalName','displayName' ]
                                 }
  }
  var dataTime = new Date();
  sumTime = dataTime.getHours();
  var ad = new ActiveDirectory(config);
  var groupName = 'Employees';

  ad.getUsersForGroup(groupName, function(err, users) {
    if (err) {
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
            console.log("___Time is: "+sumTime);
            console.log("JSON saved to " + outputFilename);
          }
      });
      console.log('findUsers: '+JSON.stringify(users));
    }
  });
});
