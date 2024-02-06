//the copyright year (the current year) in the footer's first paragraph
function getCopyrightYear() {
  const year = new Date().getFullYear();
  return `&copy ${year}`
}
//the date the document was last modified in the second paragraph
function getLastModified() {
  const date = new Date(document.lastModified);
  return date.toLocaleString();
}

document.getElementById("lastModified").innerHTML = `Last Modification: ${getLastModified()} `;