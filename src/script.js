// Get the current URL
var currentURL = window.location.href;
// Extract the file name from the URL
var fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);
    
// Check the file name
if (fileName === "/") {
  // Set the HTML title to "Home"
  document.title = "Home";
} else if (fileName === "cv.html") {
  // Set the HTML title to "About Us"
  document.title = "CV";
} else if (fileName === "impressum.html") {
  // Set the HTML title to "Contact Us"
  document.title = "Impressum";
} else if (fileName === "about.html") {
  // Set the HTML title to "Contact Us"
  document.title = "About";
} else if (fileName === "now.html") {
  // Set the HTML title to "Contact Us"
  document.title = "Now";
} else if (fileName === "blogindex.html") {
  // Set the HTML title to "Contact Us"
  document.title = "Blog";
}else {
    // Get all the h1 tags
    var h1Tags = document.getElementsByTagName("h1");
	
    if(h1Tags.length>0){
    // Get the content of the first h1 tag
    var h1Content = h1Tags[0].innerText;
    // Set the HTML title to the content of the h1 tag
    document.title = h1Content;
    }
}