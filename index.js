// fill in javascript code here
let myForm = document.querySelector("form")
let inp1 = document.getElementById("name")
let inp2 = document.getElementById("doctor_id")
let inp3 = document.getElementById("specialization")
let inp4 = document.getElementById("experience")
let inp5 = document.getElementById("email")
let inp6 = document.getElementById("mobile")
let tbody = document.querySelector("tbody")
let allData = [];

myForm.addEventListener("submit",function(e)
{
    e.preventDefault()
    let data = {
        name : inp1.value,
        docID : inp2.value,
        dept : inp3.value,
        exp : inp4.value,
        email : inp5.value,
        mbl : inp6.value,
    };
    allData.push(data)
    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
    inp4.value = ""
    inp5.value = ""
    inp6.value = ""
    tbody.innerHTML = null;
    console.log(allData)



    allData.map((ele) =>
    {
        const row = document.createElement("tr")
        const col1 = document.createElement("td")
        const col2 = document.createElement("td")
        const col3 = document.createElement("td")
        const col4 = document.createElement("td")
        const col5 = document.createElement("td")
        const col6 = document.createElement("td")
        const col7 = document.createElement("td")
        const col8 = document.createElement("td")

        col1.innerText = ele.name
        col2.innerText = ele.docID
        col3.innerText = ele.dept
        col4.innerText = ele.exp
        col5.innerText = ele.email
        col6.innerText = ele.mbl
        col8.innerHTML = `<button type="button" id="btn">Delete</button>`

        if(ele.exp > 5){
            col7.innerText = "Senior"
        }
        else if(ele.exp >= 2 && ele.exp <= 5){
            col7.innerText = "Junior"
        }
        else if(ele.exp <= 1){
            col7.innerText = "Trainee"
        }
        col8.addEventListener("click",function()
        {
            tbody.removeChild(row)
        })

        row.append(col1,col2,col3,col4,col5,col6,col7,col8)
        tbody.append(row)

    })
    
})


