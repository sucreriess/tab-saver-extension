
let myTabs = []
const inputEl = document.getElementById("input-text")
const inputBtn = document.getElementById("save")
const ulEl = document.getElementById("uo-list")

const delBtn = document.getElementById("delete")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("my Tabs"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myTabs.push(leadsFromLocalStorage)
    ele()  
}

delBtn.addEventListener("dblclick", function(){
    myTabs = []
    localStorage.clear()
    ele()
})

inputBtn.addEventListener("click", function(){
    myTabs.push(inputEl.value)
    inputEl.value = "" 
    localStorage.setItem("my Tabs", JSON.stringify(myTabs))
    ele()
}) 



function ele(){
    let eleArr = ""
    for( let i =0; i <myTabs.length ; i++){
       eleArr +=`
            <li>
                <a target = '_blank' href= '${myTabs[i]}'>
                    ${myTabs[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = eleArr
}



