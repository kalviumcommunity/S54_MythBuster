function getCookie(cookieName) {
    // Split the cookies string into an array of individual cookies
    var cookies = document.cookie.split(';');
    
    // Loop through each cookie to find the one with the specified name
    for(var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Check if this cookie is the one we're looking for
      if(cookie.indexOf(cookieName + '=') === 0) {
        // If found, return the cookie value
        return cookie.substring(cookieName.length + 1);
      }
    }
    // If cookie not found, return null
    return null;
  }

export {getCookie}