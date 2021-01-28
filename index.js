const SteamUser = require("steam-user");
const client = new SteamUser();

client.logOn({
  accountName: process.env.username,
  password: process.env.password,
});


client.on("loggedOn", async function (details) {
  console.clear();
  client.setPersona(SteamUser.EPersonaState.Invisible);

  client.requestFreeLicense(1361350, function(err, grantedPackages, grantedAppIDs){})
});

client.on("error", function (e) {
  // Some error occurred during logon
  console.log(e);
});

client.on("licenses", function (licenses) {
  console.log(licenses);
});
