// Not working variant. We get a near-zero time

// ------ Start timer ------
var start = performance.timeOrigin + performance.now();

// Make post on keyword
document.getElementById("edit-keys").value = key;
document.getElementById("edit-submit").click();

// ------ Stop timer ------
var end = performance.timeOrigin + performance.now();
var time = end - start;