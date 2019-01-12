// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий,
//     в каком квадранте в декартовой системе координат находится данная точка.
//     Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.
// var point = {
//     x: 1,   
//     y: 3,
//     GetQuadrant: function () {
//         if (this.x >= 0 && this.y >= 0){
//             return "Данная точка находится в I квадранте";
//         }
//         else if (this.x <= 0 && this.y >= 0){
//             return "Данная точка находится во II квадранте";
//         }
//         else if (this.x <= 0 && this.y <= 0){
//             return "Данная точка находится в III квадранте";
//         }
//         else if (this.x >= 0 && this.y <= 0){
//             return "Данная точка находится в IV квадранте";
//         }
//     }
// }

// point.x = +prompt ("Введите 'х' координату точки:");
// point.y = +prompt ("Введите 'y' координату точки:");

// console.log(point.GetQuadrant());

        
// // 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// //     Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// //     В зависимости от принятого знака операции, вызвать соответствующий метод.
// var calculator = {
//     x: 1,   
//     y: 3,
//     sign: "+",
//         add: function () {
//                 return x + y;
//         },   
//         minus:   function() {
//                 return x - y;
//         },    
//         multiply: function() {
//                 return x * y;
//         }, 
//         divide:function () {
//                 return x / y;
//         }
//     }

// var x = +prompt("Введите первое число: ");
// var sign = prompt("Введите знак арифметической операции: + - * /");
// var y = +prompt("Введите второе число: ");
// var result;
    
//     switch (sign) {
//         case "+":
//             result = calculator.add();
//             break;
//         case "-":
//             result = calculator.minus();
//             break;
//         case "*":
//             result = calculator.multiply();
//             break;
//         case "/":
//             result = calculator.divide();
//             break;
//         default:
//             document.write(sign + "- не является знаком арифметической операции");
//     }
    
//     if (result != undefined) {
//         document.write("Результат операции: " + result);
//     }
// // 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// //     содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// //     Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
var human = new Array();
var count = +prompt("Введите количество сотрудников: ");
for (var i = 0; i < count; i++){
    human[i];
}
function addPerson () {
    for (var i = 0; i < count; i++){
        human[i] = {
            name: "First Name",
            sName: "Second Name",
            age: "Age",
            occupation: "Occupation",
            show: function () {
                document.write("Person number: " +(i+1)+"<br/>");
                document.write("First name: " + this.name +"<br/>");
                document.write("Second name: " + this.sName +"<br/>");
                document.write("Age: " + this.age + "<br/>");
                document.write("Occupation: " + this.occupation +"<br/><br/>");
            }
        }           
        human[i].name = prompt ("Введите имя: ");
        human[i].sName = prompt ("Введите фамилию: ");
        human[i].age = +prompt ("Введите возраст: ");
        human[i].occupation = prompt ("Введите занятость: " );
        human[i].show ();
    }  
}
addPerson ();

// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//     будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//     Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//         • "director" — 3000;
//         • "manager" — 1500;
//         • "programmer" — 2000;
//         • для остальных значений — 1000.
//     После выполнения функции — вывести информацию о сотрудниках.
var a = human.length;
function addSalary () {
    for (var i = 0; i < a; i++){   
        human[i].show = function () {
            document.write("Person number: " +(i+1)+"<br/>");
            document.write("First name: " + this.name +"<br/>");
            document.write("Surname: " + this.sName +"<br/>");
            document.write("Age: " + this.age + "<br/>");
            document.write("Occupation: " + this.occupation +"<br/><br/>");
            document.write("Salary: " + this.salary +"<br/><br/>");
        }   
        switch (human[i].occupation) {
            case "director":
                human[i].salary = 3000;
                break;
            case "manager":
                human[i].salary = 1500;
                break
            case "programmer":
                human[i].salary = 2000;
                break
            default:
                human[i].salary = 1000;
        }
        human[i].show ();
    }  
}
addSalary ();
// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
//     Параметр для сортировки принимается от пользователя.
//     После выполнения функции — вывести информацию о сотрудниках.
var array = ["name","sName","age","occupation","salary"];
var x =  +prompt("Введите по какому критерию сортировать сотрудников :\n\n1.Name\n2.Surname\n3.Age\n4.Occupation\n5.Salary\n\nВведите число от 1 до 5", 1);
switch (x) {
    case 1:
        x = array[0];
        break;
    case 2:
        x = array[1];
        break
    case 3:
        x = array[2];
        break
    case 4:
        x = array[3];
        break
    case 5:
        x = array[4];
        break
    default:
        alert("Введено не верное значение. Введите число от 1 до 5.")
}

function compare(a, b) {
  if (a[x] < b[x]) return -1;
  if (a[x] > b[x]) return 1;
  return 0;
}
human.sort(compare);
var i = 0;
for (var i = 0; i < a; i++){   
    human[i].show = function () {
        document.write("Person number: " +(i+1)+"<br/>");
        document.write("First name: " + this.name +"<br/>");
        document.write("Second name: " + this.sName +"<br/>");
        document.write("Age: " + this.age + "<br/>");
        document.write("Occupation: " + this.occupation +"<br/>");
        document.write("Salary: " + this.salary +"<br/><br/>");
    } 
    human[i].show ();
}
