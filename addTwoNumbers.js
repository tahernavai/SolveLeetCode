let l1=[9,9,9,9,9,9,9];
let l2 = [9,9,9,9];
let temp=0;
let result=[];
let n=l1.length >= l2.length ? l1.length : l2.length;

var addTwoNumbers = function(l1, l2) {
    for(i=0;i<n;i++){ 
    x1 = l1[i]===undefined ? 0 : l1[i];
    x2 = l2[i]===undefined ? 0 : l2[i];
    x=x1+x2+temp;
    result[i]=x;
    if(x>=10){
        result[i]=x % 10;
        temp=Math.floor(x/10);       
    }else{
        temp=0;
    }
}
if(temp>=1){
    result.push(temp);
}  
return result; 
};

console.log(addTwoNumbers(l1,l2))