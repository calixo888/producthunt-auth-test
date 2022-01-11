// JUST GRABBING ACCESS CODE FROM URL
const url_string = window.location.href
const url = new URL(url_string);
const searchParams = new URLSearchParams(url.search);
document.getElementById("access_code").innerHTML = `Access code: ${searchParams.get("code")}`