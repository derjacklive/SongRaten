// Funktion zum Setzen des Sprach-Cookies, nur wenn cookiesAccepted=true
function setLanguageCookie(language) {
    if (cookiesAccepted) {
      var expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
      
      var cookieValue = "language=" + language + "&cookiesAccepted=true";
      
      document.cookie = cookieValue + "; expires=" + expirationDate.toUTCString() + "; path=/";
    }
  }
  
  // Funktion zum Abrufen der Sprache und Zustimmung
  function getLanguageAndConsentintern() {
    var name = "language=";
    var cookies = document.cookie.split(';');
    
    for(var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      
      if (cookie.indexOf(name) === 0) {
        var cookieValue = cookie.substring(name.length, cookie.length);
        var cookieData = cookieValue.split('&');
        
        var language = cookieData[0];
        var consent = cookieData[1].split('=')[1];
        
        return {
          language: language,
          consent: consent === "true"
        };
      }
    }
    
    return null;
  }
  
  // Beispiel für die Verwendung:
  function getlngandcons() {
  var languageAndConsent = getLanguageAndConsentintern();
  if (languageAndConsent) {
    var language = languageAndConsent.language;
    var consent = languageAndConsent.consent;
    
    console.log("Gespeicherte Sprache: " + language);
    console.log("Cookies akzeptiert: " + consent);
  } else {
    console.log("Keine gespeicherten Daten gefunden");
  }
}

getlngandcons();
localStorage.setItem("lang", language);
localStorage.setItem("cconsent", consent);