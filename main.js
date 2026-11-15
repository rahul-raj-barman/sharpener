let promise = fetch("https://bored-api.appbrewery.com/random")

promise.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
console.log("Hello")
//lesson 18