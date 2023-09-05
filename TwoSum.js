let sumarray=[];
let sum;
let arr = [2,7,11,15]
function twoSum(t, arr) {
    let n=arr.length;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            sum=arr[i]+arr[j];
            if(sum==t){              
                sumarray.push(i,j);
            }
        }
    }  
    console.log(sumarray)
}

twoSum(9,arr)