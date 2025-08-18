fetch("https://boredapi.katerinahladikova.cz/random")
.then(r => r.json())
.then(data => console.log(data))

