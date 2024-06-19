const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


/****************Display Courses*******************/
const card = document.getElementById("courses");
function GetCourses() {
    let sumCredit= 0;
    let content = "";
    courses.forEach((course) => {
        if (course.completed == false) {
            content += `<p style="background-color: rgb(247, 202, 163);">${course.subject} ${course.number}</p>`;
        } else {
            content += `<p>${course.subject} ${course.number}</p>`;
        }
        sumCredit+= course.credits;
  });
  card.innerHTML = content;
  totalCredits.innerHTML =`Total Credits: ${sumCredit}`;
}


/*Sum credits */
const totalCredits = document.getElementById("credits");


/* Filter CSE */

function GetCSE() {
    let content = "";
    let sumCredit= 0;
    let cse = courses.filter((course) => course.subject == 'CSE');
    cse.forEach((course) => {
        if (course.completed == false) {
            content += `<p style="background-color: rgb(247, 202, 163);">${course.subject} ${course.number}</p>`;
        } else {
            content += `<p>${course.subject} ${course.number}</p>`;
        }
        sumCredit+= course.credits;
      });
      card.innerHTML = content;
      totalCredits.innerHTML =`Total Credits: ${sumCredit}`;

  }
//GetCSE();

/*Filter WDD*/

function GetWDD() {
    let content = "";
    let sumCredit= 0;
    let wdd = courses.filter((course) => course.subject == 'WDD');
    wdd.forEach((course) => {
        if (course.completed == false) {
            content += `<p style="background-color: rgb(247, 202, 163);">${course.subject} ${course.number}</p>`;
        } else {
            content += `<p>${course.subject} ${course.number}</p>`;
        }
        sumCredit+= course.credits;
      });
      card.innerHTML = content;
      totalCredits.innerHTML =`Total Credits: ${sumCredit}`;
}

GetCourses();

const all = document.getElementById("all");
all.addEventListener("click", function () {
    card.innerHTML =" ";
    let sumCredit=0;
    GetCourses();
});

const CSE = document.getElementById("cse");
CSE.addEventListener("click", function () {
    card.innerHTML =" ";
    let sumCredit=0;
    GetCSE();
});


const WDD = document.getElementById("wdd");
WDD.addEventListener("click", function () {
    card.innerHTML =" ";
    let sumCredit=0;
    GetWDD();
});


