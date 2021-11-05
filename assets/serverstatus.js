// Handling errors
function handleErrors(response) {
    if (!response.ok) {
        document.getElementById("serverStatus").innerHTML = "";
        document.getElementById("serverStatusM").innerHTML = "";
        document.getElementById("serverLogoName").classList.remove("hidden");
    }
    return response;
}

// Fetch API, mcsrvstat
fetch("https://api.mcsrvstat.us/2/31.41.59.26:5358")
    .then(handleErrors)
    .then(response => {
        return response.json();
    })
.then(data => {
    if (data.online == true) {
        
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;We're online!&ensp;&middot;&ensp;${data.players.online} playing</p>`;
        
    }
    else {
        
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Sorry! We're offline...</p>`;
        
    }
});