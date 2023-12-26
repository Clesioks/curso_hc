const friendlyArray = [5, 4, 3, 2, 1, 0, -1, -2, -3]

friendlyArray.map((number) => {
    if (number <= 0) {

        console.log('Stopping? Nope! Number:', number)
        return
    } else {

        console.log("Number", number)
    }

})