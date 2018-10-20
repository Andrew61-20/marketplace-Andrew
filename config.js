const dbUser = "andrew61";
const dbPassword = "a610102";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb://${ dbUser }:${ dbPassword }@ds139841.mlab.com:39841/myusers`
};

module.exports = config;