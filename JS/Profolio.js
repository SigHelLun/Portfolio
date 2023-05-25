var dt = document.lastModified;    
dt = dt.replace("/", " ");
dt = dt.replace("/", " ");
dt = dt.replace("-", " ");
dt = dt.replace("-", " ");
// '/' or '-' replcae these separtors with empty space
// Now your string can be parsed to Date Object
var anotherDateObject = new Date(Date.parse(dt));
//anotherDateObject + " -- " + anotherDateObject.getHours(); 


window.onload = function() {
    document.getElementById("tid").innerHTML = anotherDateObject + " -- " + anotherDateObject.getHours();        
}