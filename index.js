const activity = document.getElementById("activity")
const getActivity = document.getElementById("get-activity")
const filterBoxes = document.querySelectorAll(`input[type="checkbox"]`)
const api = `https://boredapi.katerinahladikova.cz/filter`


getActivity.addEventListener("click", async function(){
    const data = []
    for (let filterBox of filterBoxes){
        if (filterBox.checked){
            const result = await fetch(`${api}?type=${filterBox.value}`)
            const r = await result.json()
            data.push(...r)
        }
    }

    console.log(data)
})

