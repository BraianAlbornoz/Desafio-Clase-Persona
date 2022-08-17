class Users{
    constructor (name, surname, videogames, country ){
        this.name=name
        this.surname=surname
        this.videogames=videogames
        this.country=country
    }

    getFullname(){
        return `${this.name} ${this.surname}`
    }

    addGame(Name,Company){
        this.videogames.push({
            Name:Name,
            Company:Company
        })
    }
    GetGamesName(){
        return this.videogames.map(e=>e.Name)
    }

    addCountry(pais){
        this.country.push(pais)
    }
    countcountry(){
        return this.country.length
    }
}

const user1 = new Users("Braian" , "Albornoz", [{Name:"Mario Bross", Company:"Nintendo"}], ["Argentina", "Brazil"])


console.log(user1.getFullname())

user1.addGame("League of Leguend", "Riot Games")
console.log(user1.videogames)
console.log(user1.GetGamesName())

user1.addCountry("Uruguay")
console.log(user1.country)
console.log(user1.countcountry())
