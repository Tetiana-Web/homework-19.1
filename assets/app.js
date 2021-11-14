

let mass = +prompt(`Введите ваш вес в (кг.)`)
let height = +prompt(`Введите ваш рост в (см.)`)

let bmi = mass /((height **2)/10000);
let ab = Math.round(parseFloat(bmi) * 100) / 100;

console.log(`Индекс массы тела: ${ab}`);


if (bmi <= 16 ){
   console.log(`Выраженный дефицит массы тела.`);
} else if((bmi > 16) && (bmi <= 18.5)){
   console.log(`Небольшой дефицит масса тела.`);
}else if((bmi > 18.5) && (bmi <= 25)){
   console.log(`Норма.`);
}else if((bmi > 25) && (bmi <= 30)){
   console.log(`Избыточная масса тела (предожирение).`);
}else if((bmi > 30) && (bmi <= 35)){
   console.log(`Ожирение 1 степени`);
}else if((bmi > 35) && (bmi <= 40)){
   console.log(`Ожирение 2 степени.`);
}else if(bmi >= 40){
   console.log(`Ожирение 3 степени.`);
}



