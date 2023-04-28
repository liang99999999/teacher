const coursenum = document.querySelector("#coursenum")
const coursename = document.querySelector("#coursename")
const schoolday = document.querySelector("#schoolday")
const start = document.querySelector("#start")
const end = document.querySelector("#end")
const credit = document.querySelector("#credit")
const btn = document.querySelector("#btn")


btn.addEventListener("click", function () {
    let body = {
        "courseList": [{
            "courseNumber": coursenum.value,
            "courseName": coursename.value,
            "schoolDay": schoolday.value,
            "startTime": start.value,
            "endTime": end.value,
            "credit": credit.value
        }]
    }
    fetch("http://localhost:8080/update_course", {

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
            if (data.message === "修改課程成功") {
                couse.setAttribute("class", "pok")
                couse.innerHTML = data.message
            }
            if (data.message !== "修改課程成功")
                couse.setAttribute("class", "perror")
                couse.innerHTML = data.message
        })
        .catch(err => console.log(err))
})