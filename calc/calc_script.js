let num1, num2, res, check, mem;

function resel() {
  var check_sel = document.getElementById("sel");
  check = check_sel.checked;
}

function add() {
  define();
  res = num1 + num2;
  write_res()
}

function sub() {
  define();
  res = num1 - num2;
  write_res();
}

function mul() {
  define();
  res = num1*num2;
  write_res();
}

function div() {
  define();
  res = num1/num2;
  write_res();
}

function clr() {
  box1.value = null;
  box2.value = null;
  box3.value = null;
}

function define() {
  if (box1.value.length < 1) {
    box1.value = 0
  }
  if (box2.value.length < 1) {
    box2.value = 0
  }
  num1 = +box1.value;
  num2 = +box2.value;
}

function write_res() {
  if(!check){
    box3.value = res;
  } else {
    box1.value = res;
    box2.value = null;
    box3.value = null;
  }
}

function mem_write() {
  mem = res;
  mem_ind.value = mem;
}

function mem_read() {
  box1.value = mem;
}
