function setData() {
  const buttons = document.querySelectorAll("button.general");
  var display = document.getElementById("display_val");
  console.log(display.value);

  for(item of buttons) {
    item.addEventListener("click", (e) => {
      data = e.target.innerText;
      if(data == "x"){
        data = "*"
      }
      display.value += data;
    });
  }
}

function fact(){
  var display = document.getElementById("display_val");
  var data = 1;
  var idx;
  for(idx = 1; idx <= display.value;idx++){
      data = data * idx;
  }
  display.value = data;
}

function del(){
  data = document.getElementById("display_val");
  data.value = data.value.substring(0, data.value.length-1); 
}

function all_clear(){
  document.getElementById("display_val").value="";
}

function sin(){
  data = document.getElementById("display_val");
  data.value = Math.sin(data.value);
}

function cos(){
  data = document.getElementById("display_val");
  data.value = Math.cos(data.value);
}

function tan(){
  data = document.getElementById("display_val");
  data.value = Math.tan(data.value);
}

function sin_in(){
  data = document.getElementById("display_val");
  data.value = Math.asin(data.value);
}

function cos_in(){
  data = document.getElementById("display_val");
  data.value = Math.acos(data.value);
}

function tan_in(){
  data = document.getElementById("display_val");
  data.value = Math.atan(data.value);
}

function sinh(){
  data = document.getElementById("display_val");
  data.value = Math.sinh(data.value);
}

function cosh(){
  data = document.getElementById("display_val");
  data.value = Math.cosh(data.value);
}

function tanh(){
  data = document.getElementById("display_val");
  data.value = Math.tanh(data.value);
}

function ceil(){
  data = document.getElementById("display_val");
  data.value = Math.ceil(data.value);
}

function floor(){
  data = document.getElementById("display_val");
  data.value = Math.fround(data.value);
}

function round(){
  data = document.getElementById("display_val");
  data.value = Math.round(data.value);
}

function log(){
  data = document.getElementById("display_val");
  data.value = Math.log10(data.value);
}

function ln(){
  data = document.getElementById("display_val");
  data.value = Math.log(data.value);
}

function square(){
  data = document.getElementById("display_val");
  data.value = data.value * data.value;
}

function sqrt(){
  data = document.getElementById("display_val");
  data.value = Math.sqrt(data.value);
}

function cuberoot(){
  data = document.getElementById("display_val");
  data.value = Math.cuberoot(data.value);
}

function inverse(){
  data = document.getElementById("display_val");
  data.value = 1/data.value;
}

function pi(){
  data = document.getElementById("display_val");
  var v = 3.1415926535;
  if(data.value.length > 0){
    data.value = Number(data.value)*v;
  }
  data.value = v;
}

function calculate(){
  data = document.getElementById("display_val");
  data.value = eval(data.value);
}

