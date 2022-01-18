import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: 'http://192.168.29.2:8080/auth/', 
    realm: 'medicare', 
    clientId: 'nodejs-microservice'
 }

 const keycloak = new Keycloak(keycloakConfig);

// const keycloak =  new Keycloak();

// const keycloak = new Keycloak('/keycloak.json');

// const initKeycloak = (onAuthenticatedCallback) => {
//     keycloak.init({
//         onload: 'login-required',
//         // silentCheckSsoRedirectUri: 
//         // pkceMethod:
//     })
//     .then((authenticated) => {
//         if(authenticated){
//             onAuthenticatedCallback()
//         }else{
//             console.warn("Authenticated Unsuccessfull");
//             doLogin();
//         }
//     })
// }

// const doLogin = keycloak.login;
// const doLogout = keycloak.logout;

// const getToken = () => keycloak.token;

// const updateToken = (successCallback) =>
// keycloak.updateToken(5)
// .then(successCallback)
// .catch(doLogin);

// const getUserName = () => keycloak.tokenParsed ? preferred_username : '',
// const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

// const UserService = {
//     initKeycloak,
//     doLogin,
//     doLogout,
//     updateToken,
//     getToken,
//     getUserName,
//     hasRole
// }

export default keycloak;