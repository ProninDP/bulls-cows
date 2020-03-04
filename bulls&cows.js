const readlineSync = require('readline-sync');
//загадываем последовательность чисел равных введённой длине
function getRandom(length_num) {
  let quest = '';
  for(let i = 0; i < length_num; i++){
    quest += Math.floor(Math.random() * 10);
  }
  console.log(quest);
  return quest;
}
//Запрос ответа, проверка на угаданные числа
function chekAnswer(rand_number, countChek){
  for (let i = 0; i < countChek; i++){
    const answer = readlineSync.question('Введите ответ: ' );
    if(rand_number==answer){
      return 'Ответ совпадает с загаданным числом';
    }else{
      let num1 = []; //совпашие чисела с неравными индексами
      let num2 = []; //совпашие чисела с равными индексами
      for(let a = 0; a < rand_number.length; a++){
        for(let b = 0; b < answer.length; b++){
          if(rand_number[a]==answer[b]){
            if(a != b){
              //if(num1 != rand_number[a]) усложняет игру
                num1.push(rand_number[a]);
            }else{
              //if(num2 != rand_number[a]) усложняет игру
                num2.push(rand_number[a]);
            }
          }
        }
      }
      console.log(`совпавших цифр не на своих местах - ${num1.length} (${num1.join(" и ")}), цифр на своих местах - ${num2.length} (${num2.join(" и ")})`);
    }
  }
  return 'Конец игры!';
}
//длина случайного числа
const length_num = readlineSync.questionInt('Для игры введите длину числа (от 3 до 6): ');
//количество попыток
const countChek = readlineSync.questionInt('Введите количество попыток: ');

console.log(chekAnswer(getRandom(length_num), countChek));
