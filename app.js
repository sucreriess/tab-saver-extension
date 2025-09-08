/*
function save() {
    let input = document.getElementById("input-text").innerText
    textArr.push(input)
    console.log(textArr)
}
    
// Alternative way of calling a function upon some activity
*/
let myTabs = []
const inputEl = document.getElementById("input-text")
const inputBtn = document.getElementById("save")
const ulEl = document.getElementById("uo-list")

const delBtn = document.getElementById("delete")

//string to array
//.parse() - to convert string to array, .stringify()- to convert array to string
//const tabsFromLocalStorage = JSON.parse(localStorage.getItem("my Tabs"))

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
    inputEl.value = "" //clears the text area
    //ulEl.textContent = myTabs
    //ulEl.innerHTML += "<li>" + inputEl.value + "</li>"   costly method,
    //instead do store list elements in another variable
    //and final update the ulel
    localStorage.setItem("my Tabs", JSON.stringify(myTabs))
    ele()

    /*const li = document.createElement("li")
    li.textContent = inputEl.value
    ulEl.append(li)*/

}) 



function ele(){
    let eleArr = ""
    for( let i =0; i <myTabs.length ; i++){
       // eleArr +="<li>" +"<a target = '_blank' href='" + myTabs[i] +"'>" + myTabs[i] + "<a>" + "</li>"
       //alternative way using back ticks i.e. template strings/literals
       eleArr +=`
            <li>
                <a target = '_blank' href= '${myTabs[i]}'>
                    ${myTabs[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = eleArr
}



