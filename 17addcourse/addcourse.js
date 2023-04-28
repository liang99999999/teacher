const studentid =document.querySelector("#studentid")
const stuname =document.querySelector("#stuname")
const courseid =document.querySelector("#courseid")
const btn =document.querySelector("#btn")
const couse =document.querySelector("#couse")

const id =document.querySelector("#id")
const studentname =document.querySelector("#studentname")
const coursenum =document.querySelector("#coursenum")
const coursename =document.querySelector("#coursename")
const schoolday =document.querySelector("#schoolday")
const start =document.querySelector("#start")
const end =document.querySelector("#end")
const credit =document.querySelector("#credit")

btn.addEventListener("click", function() {
    let body = {
        "selectCourseList": [
            {
             "studentId":studentid.value,
             "name":stuname.value,
             "courseNumber":courseid.value
             }
         ]
    }
    fetch("http://localhost:8080/add_select_course", {

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
            if(data.message ==="選課成功"){
                couse.setAttribute("class","pok")
                couse.innerHTML=data.message 
                id.innerHTML="學號 : "+data.selectCourseList[0].studentId
                studentname.innerHTML="姓名 : "+data.selectCourseList[0].name
                coursenum.innerHTML="課程代碼 : "+data.selectCourseList[0].courseNumber
                coursename.innerHTML="課程名稱 : "+data.selectCourseList[0].courseName
                schoolday.innerHTML="上課日期 : "+data.selectCourseList[0].schoolDay
                start.innerHTML="上課時間 : "+data.selectCourseList[0].startTime
                end.innerHTML="下課時間 : "+data.selectCourseList[0].endTime
                credit.innerHTML="學分 : "+data.selectCourseList[0].credit
                return;
            }
            if(data.message !=="選課成功")
            couse.setAttribute("class","perror")
            couse.innerHTML=data.message
            id.innerHTML=null
            studentname.innerHTML=null
            coursenum.innerHTML=null
            coursename.innerHTML=null
            schoolday.innerHTML=null
            start.innerHTML=null
            end.innerHTML=null
            credit.innerHTML=null
        })
        .catch(err => console.log(err))
})