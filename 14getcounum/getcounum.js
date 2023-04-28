const courseid =document.querySelector("#courseid")
const btn =document.querySelector("#btn")
const course =document.querySelector("#course")

const coursenum =document.querySelector("#coursenum")
const coursename =document.querySelector("#coursename")
const schoolday =document.querySelector("#schoolday")
const start =document.querySelector("#start")
const end =document.querySelector("#end")
const credit =document.querySelector("#credit")

btn.addEventListener("click", function() {
    let body = {
        "courseList": [{
            "courseNumber":courseid.value
        }]
    }
    fetch("http://localhost:8080/get_cource_by_course_number", {
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
            if(data.message ==="課程資料查詢成功"){
                course.setAttribute("class","pok")
                course.innerHTML=data.message 
                coursenum.innerHTML="課程代碼 : "+data.courseSet[0].courseNumber
                coursename.innerHTML="課程名稱 : "+data.courseSet[0].courseName
                schoolday.innerHTML="上課日期 : "+data.courseSet[0].schoolDay
                start.innerHTML="上課時間 : "+data.courseSet[0].startTime
                end.innerHTML="下課時間 : "+data.courseSet[0].endTime
                credit.innerHTML="學分 : "+data.courseSet[0].credit
                return;
            }
            if(data.message !=="課程資料查詢成功")
            course.setAttribute("class","perror")
            course.innerHTML=data.message
            coursenum.innerHTML=null
            coursename.innerHTML=null
            schoolday.innerHTML=null
            start.innerHTML=null
            end.innerHTML=null
            credit.innerHTML=null
        })
        .catch(err => console.log(err))
})