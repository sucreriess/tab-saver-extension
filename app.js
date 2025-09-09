
let myTabs = []
const inputEl = document.getElementById("input-text")
const inputBtn = document.getElementById("save")
const ulEl = document.getElementById("uo-list")

const delBtn = document.getElementById("delete")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    leads =leadsFromLocalStorage
    ele(leads)
}

delBtn.addEventListener("dblclick", function(){
    myTabs = []
    localStorage.clear()
    ele()
})

inputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value)
    inputEl.value = "" 
    localStorage.setItem("myleads", JSON.stringify(myTabs))
    ele()
}) 



function ele(leads){
    let eleArr = ""
    for( let i =0; i <leads.length ; i++){
       eleArr +=`
            <li>
                <a target = '_blank' href= '${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = eleArr
}



