document.title = "MY ASSESSMENT"

let url = "https://randomuser.me/api"
const picture = document.querySelector("#picture")
const fullName = document.querySelector(".fullname")
const number = document.querySelector(".phonenumber")
const email = document.querySelector(".email")
const streetAddress = document.querySelector(".streetaddress")
const input = document.querySelector("#display")
const detail = document.querySelector(".details")



const getData = ()=>{
    fetch(url).then(response=>{
        return response.json()
    }).then((data)=>{
        let image = data.results[0].picture.large
        picture.src = image
        let names = `${data.results[0].name.title +" " + data.results[0].name.first + " " + data.results[0].name.last}`
        fullName.textContent = names
        let address = `${data.results[0].location.street.number + data.results[0].location.street.name}`
        streetAddress.textContent = address
        number.textContent = data.results[0].phone
        email.textContent = data.results[0].email
        
    })
}



getData()