// let sentence="hi name is balaji kalandar and I am looking for webdevelopment job role"
// //            ih eman si ijalab radnalak dna I ma gnikool rof tnempolevedbew boj elor
// let sent=sentence.split(" ");
// for(let i=0;i<sent.length;i++){
// let word=sent[i];

// sent[i]=word.split("").reverse().join('');

// }
// console.log(sent.join(' '));


// let arr=[3,4,5,612,44,54,33,12]
// let l=0;
// let r=arr.length-1;
// console.log(arr)
// while(l<=r){

//     if(arr[l]<=arr[r])
//     {
//         console.log('left',l,'value',arr[l]);
//     l++;
    
//     }
//     else if(arr[l]>arr[r])
//     {
//         console.log('right',r,'value',arr[r]);
//     r--;
    
//     }
    // else
    // {
    // l++; r--;
    // console.log('right',r,'value',arr[r],'left',l,'value',arr[r]);
    // }
// }
// console.log(arr[l]);
let max1,max2;
let a=[32,4,5,612,5,5,5,44,54,33,12,443,2223,43,43,43,2300,2223];
if(a[0]<a[1]){
    max1=a[1];
    max2=a[0];
}
else{
max1=a[0];
max2=a[1];
}
console.log(max1,max2)
for(let i=2;i<a.length;i++){
    console.log(a[i])

    if(max1==a[i]) continue;
    if(max1<a[i]){
        //233//233/233
        let temp=max1;
        max1=a[i];
        max2=temp;
        
    }
    else if(max2<a[i] && max1!=a[i]){
        max2=a[i];
    }
}
console.log("result",max1,max2)