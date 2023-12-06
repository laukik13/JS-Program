let numNew =  500;

numNew.toString(); // convert value to string

numNew.toFixed(); // 500.00  after point represent fixed value

numNew.toPrecision(3); // give an precision value of given number

numNew.toLocaleString('en-IN'); //give a standered form  like 1,00,000


//-----------math-----------------

Math.round(numNew); // near by number of point value

Math.ceil(numNew); // top number of point value

Math.floor(numNew); //lower number of point value

Math.max(numNew); //max value of num

Math.min(numNew);  //min value of num

Math.abs(-4); //convert negative number into positive {only negaitve}

Math.sqrt(5); // square root of number 

Math.random(); // give random number genration

const min =10;
const max =20;

console.log(Math.floor((Math.random()*10 +(min-max+ 1)) + min))