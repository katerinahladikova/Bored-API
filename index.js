const activity = document.getElementById("activity")
const getActivity = document.getElementById("get-activity")
const filterBoxes = document.querySelectorAll(`input[type="checkbox"]`)
const api = `https://boredapi.katerinahladikova.cz/`


getActivity.addEventListener("click", async function(){
    const data = []
    if ([...filterBoxes].filter(box => box.checked).length > 0){
        for (let filterBox of filterBoxes){
            if (filterBox.checked){
                const result = await fetch(`${api}filter?type=${filterBox.value}`)
                const r = await result.json()
                data.push(...r)
            }
        }
    } else {
        const result = await fetch(`${api}random`)
        const r = await result.json()
        data.push(r)
    }

    const getRandom = data[Math.floor(Math.random()*data.length)];
    activity.textContent = getRandom.activity
})
