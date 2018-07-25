// Authenticate Google:
function initClient() {

  $("#instructions").text("authenticating credentials...");
  $("#instructions").addClass("instructions");
  const API_KEY = "";
  
  // Heroku: https://dashboard.heroku.com/apps/dynamic-reporting-platform/settings
    // Config Vars
    // Config vars change the way your app behaves. In addition to creating your own, some add-ons come with their own.
    // const API_KEY = credentials.gapi_Key; // LOCAL ENV


  const CLIENT_ID = "636126207964-eu6thv1vbffi8g7t0smvstctlgmmb6t6.apps.googleusercontent.com";
  // const CLIENT_ID = credentials.gapi_Client; // LOCAL ENV
  const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(function () {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function updateSignInStatus() {
  $("#instructions").text(
    "You are signed in. Please select a report from the nav bar."
  );
  if (!$("#instructions").hasClass("instructions")) {
    $(this).addClass("instructions");
  }
}

function handleSignInClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// ERROR CHECK FEATURE: logs file loaded to console
logFile();

