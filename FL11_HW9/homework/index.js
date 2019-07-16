//0 task   
function getNumbers (string) {
    let arrString = [];
    for(let i = 0; i < string.length; i++){
      if ( !isNaN(string[i])) {
        arrString.push(string[i]);
      }
    }
    return arrString;
  }
  //console.log(getNumbers('te20mpe5ra13tu0re'));


  //1 task 
  function findTypes(){
      let input = {};
      let typing;
      for(let i = 0; i < arguments.length; i++){
        typing = typeof arguments[i];
        if (input.hasOwnProperty(typing)){
          input[typing] ++;
      } else {
          input[typing] = 1;
      }
  }
  return input;
}
 // console.log(findTypes('78', 'antoniuk', true, 45, null));


  //2 task 
  function executeforEach(array, sort) {
    for (let i = 0; i < array.length; i++) {
      sort(array[i]);
    }
  }
 // console.log(executeforEach(1, 2, 3));


  //3 task 
  function mapArray(arr,add) {
    let a =[]; 
    executeforEach(arr,function(el) {
      a.push(add(el));
    })
    return a;
  }
 /* console.log(mapArray([7, 2, 4], function(el) {
    return el + 1; 
  })) */


  //4 task 
  function filterArray(arr,more) {
    let a = [];
    executeforEach(arr,function(el) {
      if (more(el)) {
        a.push(el);
      }
    })
    return a;	
  }
 /* console.log(filterArray([7, 8, -1, 0], function(el) { 
    return el > 5; 
  }))*/


  //5 task 
  function showFormattedDate(time) {
    const m12 = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Now','Dec'];
    let year = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDate();  
   
    
    return 'Date:'+' '+ m12[month] +' ' + day + ' ' + year;
  }
 // console.log(showFormattedDate(new Date('2001-08-07T11:25:00')));


  //6 task
 function canConvertToDate (validDate) { 
	if (Date.parse(validDate)) {
		return true
	} else {
		return false
	}
}
//console.log(canConvertToDate('2019-15-21T00:00:00'));

//7
function daysBetween (date1, date2){
  let day1 = date1.getTime();
  let day2 = date2.getTime();
  let difference = day2 - day1;
  const milisDay = 86400000;
  return Math.round(difference/milisDay);
}
//console.log(daysBetween(new Date('2001-08-07T00:00:00'), new Date('2019-07-16T00:00:00')));

const dataPeople = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]


//8
function getAmountOfAdultPeople(dataPeople){
  const minAge = 18;
  const fullDays = 365;
  let a = filterArray(dataPeople,function(el){
    let ageDifference = daysBetween(dataPeople['birthday'], nowDate);
    let dataPeople = new Date(el['birthday']);
    let nowDate = new Date(); 
    let peopleYear = Math.round(ageDifference / fullDays);
    return peopleYear > minAge;
  });  
   
return a.length;
}
//console.log(getAmountOfAdultPeople(dataPeople)); 


    
//9   
function keys(o){
  let arrKeys = [];
  for(let k in o){
    if(o.hasOwnProperty(k)){
      arrKeys.push(k);
    }
  }
  return arrKeys;
}
//console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));


//10
function values(o) {
  let arrValues = [];
  for (let v in o) {
    if (o.hasOwnProperty(v)) {
      arrValues.push(o[v]);
    }
  }
  return arrValues;
} 
 //console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));


