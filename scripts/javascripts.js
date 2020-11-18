
courseList = [{code: "ACIT 1620", name: "Web Tech"},
{code: "ACIT 1515", name: "Python"},
{code: "ACIT 1420", name: "System Admins"}];

do {
    var code = prompt("Enter a 4-digit course code: ");
} while ( (isNaN(code) == true) || (code.length > 4 || code.length < 4))

courseexists = false;
code = "ACIT " + String(code);
for (i=0;i<courseList.length;i++){
    if (courseList[i].code == code){
        console.log(`Yes I am taking the course: ${courseList[i].code} ${courseList[i].name}`);
        courseexists = true;
    }
}

if (courseexists == false ){
    course = {code: code, name: null}
    courseList.push(course)
    console.log(`Successfully added new course: ${code}`)
}