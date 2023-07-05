let input = require('readline-sync')

//functions declaration
function header(){
    console.log('===========================')
    console.log(' *** MOVIE RESERVATION *** ')
    console.log('===========================')
}

function footer(){
    console.log('===========================')
}

function seatsCinema(){
    let cinema = ''
    for(let c = 1;c <= qtd_seat;c++){
        cinema += `| ${reservation[c]} `
    }
    console.log(cinema)
}

function seat_reserved(num){
    for(let c = 1;c <= qtd_seat;c++){
        if(reservation[num] == '#'){
            return false
        }else{
            return true
        }
    }
}

//variables declaration
let resp = ''
const qtd_seat = 10
let reservation = []
let seat = 0

//array insertion
for(let c = 1;c <= qtd_seat;c++){
    reservation[c] = c
}

do{
    //data input
    header();
    seatsCinema();
    footer();
    seat = Number(input.question('Choose your seat: '))

    //data processing
    console.clear();
    while(seat_reserved(seat) == false){
        console.clear();
        header();
        seatsCinema();
        footer();
        console.log('Seat already reserved!!')
        seat = Number(input.question('Choose your seat: '))
    }

    for(let c = 1;c <= qtd_seat;c++){
        if(reservation[c] == seat){
            reservation[c] = '#'
        }
    }

    //data output
    console.clear();
    header();
    seatsCinema();
    footer();

    //data input
    resp = input.question(`Would you like to go again? [s][n]`)
    console.clear();

}while(resp == 's')

console.clear();
header();
console.log('Done! Your reservation has been confirmed!')
footer();