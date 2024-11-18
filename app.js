const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

let prime=""
let primeArray=[]
for(let i=0;i<numbers.length;i++){
    let c=0
    for(let j=2;j<numbers[i];j++){
        if(numbers[i]%j==0){
            c=1
        }
    }

    if(c==0){
        prime=prime+numbers[i]+" "
        primeArray.push(numbers[i])
    }
}

console.log("Prime numbers are:",prime)
console.log(primeArray)

let min=primeArray[0]
let max=primeArray[0]
let sum=0

for(let k=0;k<primeArray.length;k++){
    if(primeArray[k]>max){
        max=primeArray[k]
    }
    else if(primeArray[k]<min){
        min=primeArray[k]
    }

    sum=sum+primeArray[k]

}

console.log("Maximum number:",max)
console.log("Minimum number:",min)
console.log("Sum:",sum)