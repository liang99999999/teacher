const studentid =document.querySelector("#studentid")
const studentname =document.querySelector("#studentname")
const btn =document.querySelector("#btn")
const student =document.querySelector("#student")
const id =document.querySelector("#id")
const stuname =document.querySelector("#stuname")

btn.addEventListener("click", function() {
    let body = {
        "studentList": [{

            "studentId": studentid.value,
            "name": studentname.value
            
        }]
    }
    fetch("http://localhost:8080/delete_student", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data); 
            if(data.message ==="刪除學號成功"){
                student.setAttribute("class","pok")
                student.innerHTML=data.message
                id.innerHTML="學號 : "+data.studentList[0].studentId
                stuname.innerHTML="姓名 : "+data.studentList[0].name
                return;
            }
            if(data.message !=="刪除學號成功")
            student.setAttribute("class","perror")
            student.innerHTML=data.message
            id.innerHTML =null
            stuname.innerHTML =null
        })
        .catch(err => console.log(err))
})