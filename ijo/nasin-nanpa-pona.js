function o_nnp(number){
  //number format 23
  nanpa = "";
  ale_count = Math.floor(number / 100);
  number = number % 100;
  if (ale_count != 0)
    nanpa = nanpa+(o_nnp(ale_count))+"A";
  
  while (Math.floor(number / 20) != 0){
    number = number - 20;
    nanpa = nanpa + "M"; 
  }
  while (Math.floor(number / 5) != 0){
    number = number - 5;
    nanpa = nanpa + "L";   
  }
  while (Math.floor(number / 2) != 0){
    number = number - 2;
    nanpa = nanpa + "T";
  }
  while (Math.floor(number / 1)!= 0){
    number = number - 1;
    nanpa = nanpa + "W";
  }
  return nanpa;
}
