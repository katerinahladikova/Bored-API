const activity = document.getElementById("activity")
const getActivity = document.getElementById("get-activity")


getActivity.addEventListener("click", function(){
    fetch("https://boredapi.katerinahladikova.cz/random")
    .then(r => r.json())
    .then(data => activity.textContent = data.activity)
})

