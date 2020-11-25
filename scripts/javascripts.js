
courseList = [{code: "ACIT 1620", name: "Web Tech"},
{code: "ACIT 1515", name: "Python"},
{code: "ACIT 1420", name: "System Admins"}];

function createCourseArray(courseList){
    let courseArray = [];
    for(i=0; i<courseList.length;i++){
        courseName = courseList[i].code +' ' + courseList[i].name;
        courseObj = {code: courseName, date: "Fall 2020"};
        courseArray[i] = courseObj;
    } 
    return courseArray;
}

function findCourse(courseList){
    
    do {
        var code = prompt("Enter a 4-digit course code: ");
    } while ( (isNaN(code) == true) || (code.length != 4))
    
    courseExists = false;

    for (i=0;i<courseList.length;i++){
        if (courseList[i].code.includes(code)){
            console.log(`Yes I am taking the course: ${courseList[i].code}`);
            document.getElementById(code).style.backgroundColor="green";
            courseExists = true;
            break;
        }
    }
    if (courseExists == false ){
        course = {code: code + " N/A", date: "Fall 2020"}
        courseList.push(course);
        console.log(`Successfully added new course: ${code}`);

        
        var courseName = document.createElement("p");
        courseName.classList.add("link")
        var date = document.createElement("p");
        courseName.appendChild(date)
        var description = document.createElement("p");
        description.classList.add("blurb")

        var textnode = document.createTextNode("ACIT-" + code);
        var textnode2 = document.createTextNode("Fall 2020")
        var textnode3 = document.createTextNode("N/A")

        courseName.append(textnode);
        date.append(textnode2);
        description.append(textnode3);

        var mainElement = document.getElementById("courses");
        mainElement.appendChild(courseName)
        mainElement.appendChild(description)
    }
}


courseList = createCourseArray(courseList);

findCourse(courseList);

console.log(courseList);