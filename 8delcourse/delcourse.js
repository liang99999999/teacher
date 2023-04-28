const coursenum = document.querySelector("#coursenum")
const coursename = document.querySelector("#coursename")
const btn = document.querySelector("#btn")
const course = document.querySelector("#course")

const courseid =document.querySelector("#courseid")
const couname =document.querySelector("#couname")
const schoolday =document.querySelector("#schoolday")
const start =document.querySelector("#start")
const end =document.querySelector("#end")
const credit =document.querySelector("#credit")

btn.addEventListener("click", function () {
    let body = {
        "courseList": [{
            "courseNumber": coursenum.value,
            "courseName": coursename.value
        }]
    }
    fetch("http://localhost:8080/delete_course", {

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
            if (data.message === "刪除課程成功") {
                course.setAttribute("class", "pok")
                course.innerHTML = data.message
                courseid.innerHTML="課程代碼 : "+data.courseList[0].courseNumber
                couname.innerHTML="課程名稱 : "+data.courseList[0].courseName
                schoolday.innerHTML="上課日期 : "+data.courseList[0].schoolDay
                start.innerHTML="上課時間 : "+data.courseList[0].startTime
                end.innerHTML="下課時間 : "+data.courseList[0].endTime
                credit.innerHTML="學分 : "+data.courseList[0].credit
                return;
            }
            if (data.message !== "刪除課程成功")
                course.setAttribute("class", "perror")
            course.innerHTML = data.message
            courseid.innerHTML=null
            couname.innerHTML=null
            schoolday.innerHTML=null
            start.innerHTML=null
            end.innerHTML=null
            credit.innerHTML=null
        })
        .catch(err => console.log(err))
})