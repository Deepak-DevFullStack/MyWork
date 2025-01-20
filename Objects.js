// Data Types: Object, String, Number, Boolean, Null, Undefined,
// Objects: 
//1. JSON Object {Key: Value Pair},
//2. JSON Array [Value1, Value2, Value3.....]
//3. JSON Function

const s1 = {
  Name : "Deepak",
  Age : 29,
  Fees_Paid : 34000,
  Work_Exp : {
    ABC : '5 Months',
    XYZ : '6 Months'
  },
  Marks : {
    Maths : 45,
    Science : 65
  },
  Percentage : [
    'Sem I : 85','Sem II : 88','Sem III : 95'
  ],
  Performance: ()=> console.log('Good'),
}

//console.log(s1, typeof s1);
console.log(s1.Name, s1.Age, s1.Fees_Paid);
console.log("Marks Of Maths:",s1.Marks.Maths);