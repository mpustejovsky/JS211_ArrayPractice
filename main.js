//Step 3
let cars = ['Ford', 'Honda', 'Toyota', 'Chevrolet'];
let moreCars = ['BMW', "GM", 'Buick', "Honda"]

 
//Step 4 Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
let totalCars = cars.concat(moreCars)

console.log (totalCars)

//Step 5
console.log (totalCars.indexOf('Honda'))
console.log (totalCars.lastIndexOf('Ford'))

//Step 6
let stringOfCars = totalCars.join (' ');
console.log (stringOfCars)

//step 7
totalCars = stringOfCars.split(' ');
console.log (totalCars)

//Step 8
let carsInReverse = totalCars.reverse();
console.log (carsInReverse)


//Step 9
carsInReverse = carsInReverse.sort();
console.log (carsInReverse)
alert (carsInReverse.indexOf('BMW'))

//Step 10
let removedCars = carsInReverse.slice (3, 4) + ',' + carsInReverse.slice (5,7)
console.log (removedCars)
console.log(carsInReverse)

//Step 11 Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let carsSpliced = carsInReverse.splice (1,2,"Ford", "Honda")
console.log (carsInReverse)
console.log (carsSpliced)

//Step 12 Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

carsInReverse.push (carsSpliced[0]);
carsInReverse.push (carsSpliced[1])
console.log (carsInReverse)

//Step 13 Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log ("item popped = " + carsInReverse.pop())

//Step 14 Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log ("item shifted = " + carsInReverse.shift())

//Step 15 Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Volvo")
console.log ("Step 15 carsInReverse = " + carsInReverse)

//Step 16a Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
let arrayNumbers = [23, 45, 0, 2];

const addTwo = () => {
    for (i=0; i<arrayNumbers.length; i++){
        arrayNumbers[i]=arrayNumbers[i]+2;
    }  
}

addTwo();
console.log(arrayNumbers) 

//Step 16b
const numbers=[23,45,0,2,8,44,100,1,3,91,34];

const addTwo2 = (passedNum, index) => {
    numbers[index]=passedNum+2;
    }  
numbers.forEach(addTwo2)
console.log (numbers)




