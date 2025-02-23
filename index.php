<?php
// function sumOfDigits($num){
//     $sum=0;
//     while($num > 0){
//         $sum=$sum + $num %10;
//         $num= (int) $num/10;
        
//     }
//     return $sum;
// }
// echo sumOfDigits(152);


// function reverseInteger($num){
    // $rev=0;
//     $sum=0;
//     while($num > 0){
//         $rev=$rev*10+$num%10;
//         $sum=$sum + $rev;
//         $num= (int)($num/10);
//     }
//     return $rev;
// }
// echo reverseInteger(234);


// function countVowelsConsonants($str){
//     $vowels=0;
//     $consonants=0;
//     $str=strtolower($str);
//     for($i=0;$i<strlen($str);$i++){
//         if(ctype_alpha($str[$i])){
//             if(in_array($str[$i],['a','e','i','o','u'])){
//                 $vowels++;
//             }
//             else{
//                 $consonants++;
//             }
//         }
//     }
//     echo "vowels : $vowels, consonants : $consonants";
// }
// countVowelsConsonants("helloworld");

// function removeDuplicates($arr){
//     $uniqueArr=[];
//     foreach($arr as $value){
//         if(!in_array($value,$uniqueArr)){
//             $uniqueArr[]=$value;
//         }
//     }
//     return $uniqueArr;
// }
// $arr=[1,2,3,5,6,5,4,3,6];
// $uniqueArr=removeDuplicates($arr);
// print_r($uniqueArr);