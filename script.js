// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:


let amount = 100;

let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];

let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

let allDays = monday.concat(tuesday)
.map(
    function(item) {
        item[1] /= 60;
        return item;
    }
)
.filter( 
    function(item) {
        return item[1] > 2;
    }
)
.map(
    function(item) {
        let totalAmount = item[1] * amount;
        item.push(totalAmount);
        return item;   
    }
)
.map(
    function(item) {
        return `
            <tr>
                <td><b>Task name</b>: ${item[0]}</td>
                <td><b>Taks duration</b>: ${item[1]} hours</td>
                <td><b>Task amount</b>: ${item[2]}</td>
            </tr>
        `
    }
)

document.write(`<table>${allDays.join("")}</table>`);
