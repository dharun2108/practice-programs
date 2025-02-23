// function removeDuplicates(obj){
//     const seenValues=new Set();
//     const result={};
    
//     for(const[key,value] of Object.entries(obj)){
//         if(!seenValues.has(value)){
//             seenValues.add(value);
//             result[key]=value;
//         }
//     }
//     return result;
// }
// const obj={a:1,b:2,c:3,d:2,e:4};
// console.log(removeDuplicates(obj));




// const mostFrequentElement =(arr)=>{
//  let frequency={};
//  let maxCount=0;
//  let mostFrequentElement;

//  for(const num of arr){
//     frequency[num]=(frequency[num] || 0)+1;
//     if(frequency[num] > maxCount){
//         maxCount=frequency[num];
//         mostFrequentElement=num;
//     }
//  }
//     return mostFrequentElement;
// }
// console.log(mostFrequentElement([1,2,3,4,4,6])
// );


// const largestEven=(arr)=>{
//     let largest=0;
//     arr.forEach(element => {
//         if(element %2 ==0 && element > largest){
//             largest=element;
//         }
//     });
//     return largest;
// }
// console.log(largestEven([1,2,3,4,56,73])
// );


// function findIndex(arr,target){
//    return arr.indexOf(target);
// }
// console.log(findIndex([1,3,5,6,9],3)
// );


// function firstUniqueChar(str){
//     for(let char of str){
//         if(str.indexOf(char)==str.lastIndexOf(char)){
//             return char;
//         }
//     }
//     return null;
// }
// console.log(firstUniqueChar("dhhaarunsd"));


// function countProperties(obj){
//     return Object.keys(obj).length;
// }
// console.log(countProperties({a:1,b:2,c:3,$:4}));

// function countProperties(obj){
//     let count=0;
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countProperties({a:1,b:2,c:3,$:4}));

// function sortDescending(obj){
//     let values = Object.values(obj);

//     for(let i=0;i<values.length;i++){
//         for(let j=i+1;j<values.length;j++){

//             if(values[i] < values[j]){
//                 let temp=values[i];
//                 values[i]=values[j];
//                 values[j]=temp;
//             }
//         }
//     }
//     return values;

// }
// console.log(sortDescending({a:1,b:2,c:3,$:4,d:34,o:23}));

//MOST FREQUENT VALUE IN THE OBJECT 
// function mostFrequentValue(obj){
//     let maxCount=0;
// let frequency={};
// let mostFrequentValue;
// for(let key in obj){
//     let value = obj[key];
//     frequency[value]=(frequency[value] || 0)+1;
//     if(frequency[value] > maxCount){
//         maxCount=frequency[value];
//         mostFrequentValue=value;
//     }
// }
// return mostFrequentValue;

// }
// console.log(mostFrequentValue({a:0,b:3,c:4,d:0,o:0}));


// function highestValueProperty(obj){
//     let maxkey=null;
//     let maxValue=-Infinity;
//     for (let key in obj){
// if(obj[key]> maxValue){
//     maxValue=obj[key];
//     maxkey=key;
// }
// }
// return maxkey;
// }
// console.log(highestValueProperty({a:5,b:3,c:4,d:16,o:0}));


//CHECK IF AN OBJECT IS EMPTY
// function isEmpty(obj){
//     return Object.keys(obj).length===0;
// }
// console.log(isEmpty({s:2}));


// reverse the values and keys in the object

// function reversedObject(obj){
//     let reversed={};
//     for (let key in obj){
//         reversed[obj[key]]=key;
//     }
//     return reversed;
// }
// console.log(reversedObject({a:5,b:3,c:4,d:16,o:0}));

// function ObjectKeysToUpper(obj){
//     let result={};
//     for(let key in obj){
//         result[key.toUpperCase()]=obj[key];
//     }
//     return result;
// }
// console.log(ObjectKeysToUpper({"name":10,"age":24}));

// function sumOfValues(obj){ 

//     return Object.values(obj).reduce((sum,value)=>sum + value);
// }
// console.log(sumOfValues({a:5,b:3,c:4,d:16,o:3}));

//convert array of Object into the single object

// function arrayToObject(arr){
//     return arr.reduce((obj,item)=>{
//         obj[item.key]=item.value;
//         return obj;
//     },{});
//     }
//     console.log(arrayToObject([{key:"a",value:1},{key:"b",value:4}]));
    

// function countOccurance(arr){
//     return arr.reduce((count,item)=>{
//         count[item]=(count[item] || 0)+1;
//         return count;
//     },{})
// }
//  console.log(countOccurance(["dharun","dharun","midhun","midhun"]));
 
//flatten array of object into the single object 
// function flattenObject(arr){
//     return Object.assign({},...arr);
// }
// console.log(flattenObject([{a:2,b:3},{n:2,e:3},{g:2,h:3}]));

// function removeObject(arr,property,value){
//     return arr.filter(obj=>obj[property]!==value);
// }
// console.log(removeObject([{name:"alice",age:25}]));



// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1,2,3,4,5,5]));

// function findDuplicate(arr){
//     let seen=new Set();
//     let duplicate=new Set();
//   for(let num of arr){
//     if(seen.has(num)){
//         duplicate.add(num);
//     }
//     else{
//         seen.add(num)
//     }
//   }
//   return [...duplicate]
// }
// console.log(findDuplicate([1,2,3,4,5,6,7,5,3,2,2,1]));

// function removeDuplicates(arr){
// let uniqueElements={};
// let result=[];
// for(let num in arr){
//     if(!uniqueElements[num]){
//         uniqueElements[num]=true;
//         result.push(num);
//     }
// }
// return result;
// }
// console.log(removeDuplicates([1,2,3,4,45,6,6]));

// function findUnique(arr){
//     return arr.filter(num=>arr.indexOf(num) !== arr.lastIndexOf(num))
// }
// console.log(findUnique([1,3,4,5,6,6,7,2,2,7]));





