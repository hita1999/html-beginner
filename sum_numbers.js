function sumInput() {
    let data = [];
  
    while (true) {
      let input = prompt('数を入力してください');
  
      if ((input == '') || (input == null) || (input == false)) break;
  
      data.push(Number(input));
    }
  
    let sum = 0;
    for (let element of data) {
      sum += element;
    }
    return sum;
  }
  
  alert(sumInput());
