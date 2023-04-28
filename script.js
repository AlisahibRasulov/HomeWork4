let num1 = prompt('birinci ededi daxil edin');
let num2 = prompt('ikinci ededi daxil edin');
let calc = prompt('Daxil et: plus(+), minus(-), multiplication(*), addition(/)');


switch (num1,num2,calc){
    case '+':
      alert(Number(num1)+Number(num2));
      break;
    case '-':
        alert(Number(num1)-Number(num2));
      break;
    case '*':
        alert(Number(num1)*Number(num2));
      break;
    case '/':
        alert(Number(num1)/Number(num2));
      break;
    default:
      alert('emeliyyatda sehv');
  }
  
