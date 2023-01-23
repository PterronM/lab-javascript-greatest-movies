// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = moviesArray.map((elem) => {
        // console.log(elem.director)
        return elem.director
    })
    
    return newArr
}
// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let moviesSteven = moviesArray.filter((elem)=>{
        if(elem.director === 'Steven Spielberg'){
            return true;
        }else{
            return false;
        }
    });
    
    let count = 0;

    moviesSteven.forEach((element) => {
        if(element.genre.includes("Drama"))
        count++
    });

    return count
        
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0
    }
    
    let total = moviesArray.reduce ((acc,elem)=>{
        if(elem.score != undefined){
            return acc + elem.score;
        }else if(!elem.score){
            return acc
        }
    },0)

    let promedio = total / moviesArray.length
    let twoDig = promedio.toFixed(2)
    return Number(twoDig)

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let moviesDrama = moviesArray.filter((elem)=>{
        if(elem.genre.includes("Drama")){
            return true;
        }else{
            return false;
        }
    });
    // console.log(moviesDrama)

    if(moviesDrama.length === 0){
        return 0
    }
    
    let totalPromedio = moviesDrama.reduce((acc,elem)=>{
        // console.log(acc,elem)
        if(elem.score != undefined){
            return acc + elem.score;
        }else if(!elem.score){
            return acc;
        }

    },0)

    let promedio = totalPromedio / moviesDrama.length
    let twoDig = promedio.toFixed(2)
    return Number(twoDig)


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let cloneOrderByYear = structuredClone(moviesArray)

    cloneOrderByYear.sort((elem2,elem1)=>{
        if(elem2.year > elem1.year){
            return 1
        }else if(elem2.year < elem1.year){
            return -1
        }else{
            if(elem2.title > elem1.title){
                return 1
            }else if(elem2.title < elem1.title){
                return -1
            }else{
                return 0
            }
        }
    })

    // console.log(cloneOrderByYear)

    return cloneOrderByYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let cloneOrderAlphabetically = structuredClone(moviesArray);

    let orderTitle = cloneOrderAlphabetically.sort((elem2,elem1)=>{
        
        if(elem2.title > elem1.title){
            return 1
        }else if(elem2.title < elem1.title){
            return 2
        }else{
            return 0
        }

    })
    // console.log(orderTitle)
    
    let stringTitle = " ";
    orderTitle.forEach((arr)=>{
        // console.log(arr)
        stringTitle += arr.title + " "
    })
    console.log(stringTitle) 

    let arrTwentyFirst = orderTitle.slice(0,20)


   
    let twentyFirst = []
    arrTwentyFirst.forEach((elem)=>{
        twentyFirst.push(elem.title)
    })
    
    

    return twentyFirst

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let cloneArrHourToMinutes = structuredClone (moviesArray);

    let numDuration =cloneArrHourToMinutes.map((elem)=>{
        return (elem.duration)
    })
    return numDuration
    // console.log(numDuration)

    // function secondsToString(seconds) {
    //     var hour = Math.floor(seconds / 3600);
    //     hour = (hour < 10)? '0' + hour : hour;
    //     var minute = Math.floor((seconds / 60) % 60);
    //     minute = (minute < 10)? '0' + minute : minute;
    //     var second = seconds % 60;
    //     second = (second < 10)? '0' + second : second;
    //     return hour + ':' + minute + ':' + second;
    //   }

      return cloneArrHourToMinutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
// 