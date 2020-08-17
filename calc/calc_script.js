let num = 0,  //число с клавиuш
    number1 = 0,  //первое число
    number2 = 0,  //второе число
    action = '0',  //знак
    act_count = false,  //счетчик действий в строке (есть ли уже операнд в строке - true)
    act_now = false,  //проверка последнего символа в строке (операнд - true)
    act_pos = 0,  //место знака в строке
    mem = 0;

//добавляет в поле число 1
function one() {
  num = '1';
  in_box.value = in_box.value + num;
  act_now = false  //последний знак в поле - НЕ число
}

function two() {

  num = '2';
  in_box.value = in_box.value + num;
  act_now = false
}

function three() {
  num = '3';
  in_box.value = in_box.value + num;
  act_now = false
}

function four() {
  num = '4';
  in_box.value = in_box.value + num;
  act_now = false
}

function five() {
  num = '5';
  in_box.value = in_box.value + num;
  act_now = false
}

function six() {
  num = '6';
  in_box.value = in_box.value + num;
  act_now = false
}

function seven() {
  num = '8';
  in_box.value = in_box.value + num;
  act_now = false
}

function eight() {
  num = '8';
  in_box.value = in_box.value + num;
  act_now = false
}

function nine() {
  num = '9';
  in_box.value = in_box.value + num;
  act_now = false
}

function zero() {
  num = '0';
  if (in_box.value.length >= 1) {  //проверка - 0 не может быть первым символом
    in_box.value = in_box.value + num;
    act_now = false
  }
}


function add() {
  equal();  //выполняет предыдущее вычисление
  action = '+';
  if (in_box.value.length >= 1) {  //поле ввода не должно быть пустым
    if(act_now) {
      in_box.value = in_box.value.slice(0, act_pos-1);  //заменяет последний знак
    }
    act_now = true;  //показывает, что последний знак в поле - не число
    if(act_count) {  //проверка - должно быть не больше одного вычисления
      number1 = +in_box.value.slice(0, (act_pos-1));
      number2 = +in_box.value.slice(act_pos);
      res_box.value = in_box.value;
      in_box.value = number1 + number2;
      in_box.value = in_box.value + action;  //записывает в поле ввода знак
      } else {
        number1 = +in_box.value;
        in_box.value = in_box.value + action;  //записывает в поле ввода знак
        act_pos = in_box.value.length;  //определеят положение знака
        act_count = true;  //обновляет счетчик операции
      }
    }
}

function sub() {
  equal();
  action = '-';
  if(act_now) {
      in_box.value = in_box.value.slice(0, act_pos-1);
    }
    act_now = true;
    if(act_count) {
      number1 = +in_box.value.slice(0, (act_pos-1));
      number2 = +in_box.value.slice(act_pos);
      res_box.value = in_box.value;
      in_box.value = number1 - number2;
      in_box.value = in_box.value + action;
      } else {
        number1 = +in_box.value;
        in_box.value = in_box.value + action;
        act_pos = in_box.value.length;
        act_count = true;
      }
    }
    if(in_box.value.length = 0) {
      in_box.value = '-'
    }

function mul() {
  equal();
  action = 'x';
  if (in_box.value.length >= 1) {
    if(act_now) {
      in_box.value = in_box.value.slice(0, act_pos-1);
    }
    act_now = true;
    if(act_count) {
      number1 = +in_box.value.slice(0, (act_pos-1));
      number2 = +in_box.value.slice(act_pos);
      res_box.value = in_box.value;
      in_box.value = number1 * number2;
      in_box.value = in_box.value + action;
      } else {
        number1 = +in_box.value;
        in_box.value = in_box.value + action;
        act_pos = in_box.value.length;
        act_count = true;
      }
    }
}

function div() {
  equal();
  action = '/';
  if (in_box.value.length >= 1) {
    if(act_now) {
      in_box.value = in_box.value.slice(0, act_pos-1);
    }
    act_now = true;
    if(act_count) {
      number1 = +in_box.value.slice(0, (act_pos-1));
      number2 = +in_box.value.slice(act_pos);
      res_box.value = in_box.value;
      in_box.value = number1 / number2;
      in_box.value = in_box.value + action;
      } else {
        number1 = +in_box.value;
        in_box.value = in_box.value + action;
        act_pos = in_box.value.length;
        act_count = true;
      }
    }
}

function equal() {
  if (!act_now) {
    number2 = +in_box.value.slice(act_pos);
    res_box.value = in_box.value;
    switch(action) {
      case '+': in_box.value = number1 + number2;
      break;
      case '-': in_box.value = number1 - number2;
      break;
      case 'x': in_box.value = number1 * number2;
      break;
      case '/': in_box.value = number1 / number2;
      break;
      default:
      }
    }
act_count = false;
action = '0';
}

function clr() {
  res_box.value = null;
  in_box.value = null;
  number1 = null;
  number2 = null;
  action = null;
  act_count = false;
  act_pos = 0;
  act_now = false;
  }

function mem_write() {
  if(!act_count) {
    mem = in_box.value;
    mem_ind.value = mem;
    }
}

function mem_read() {
  if (mem != 0) {
      in_box.value = mem;
    }
}
