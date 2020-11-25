
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
            
            courseExists = true;
            break;
        }
    }
    if (courseExists == false ){
        course = {code: code, name: null}
        courseList.push(course)
        console.log(`Successfully added new course: ${code}`)
    }
}

courseList = createCourseArray(courseList);

findCourse(courseList);