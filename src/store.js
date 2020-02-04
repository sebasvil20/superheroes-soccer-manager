import { createStore } from 'redux'

const initialState = {
    jugadores: [{
            id: 1,
            nombre: "Thor",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Thor-marvel_movie_marvel_superhero_avengers-512.png"
        },
        {
            id: 2,
            nombre: "Iron Man",
            foto: "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-1-colored/100/Ironman_Mark_3-512.png"
        },
        {
            id: 3,
            nombre: "Batgirl",
            foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-batgirl-superhero-asian-redhead-512.png"
        },
        {
            id: 4,
            nombre: "Superman",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Superman_batman_hero_superhero_invincible-512.png"
        },
        {
            id: 5,
            nombre: "Batman",
            foto: "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-22-512.png"
        },
        {
            id: 6,
            nombre: "Deadpool",
            foto: "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-1-colored/100/Deadpool-512.png"
        },
        {
            id: 7,
            nombre: "Spiderman",
            foto: "https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-spiderman-comics-512.png"
        },
        {
            id: 8,
            nombre: "Captain America",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Captain-America_movie_marvel_superhero_avengers-512.png"
        },
        {
            id: 9,
            nombre: "Thanos",
            foto: "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-27-512.png"
        },
        {
            id: 10,
            nombre: "Hulk",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Hulk_movie_marvel_superhero_avengers-512.png"
        },
        {
            id: 11,
            nombre: "Superwoman",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Superwoman_hero_superhero_invincible-512.png"
        },
        {
            id: 12,
            nombre: "Groot",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Groot_guardian_galaxy_space_movie-512.png"
        },
        {
            id: 13,
            nombre: "Green Lantern",
            foto: "https://cdn3.iconfinder.com/data/icons/cinema-40/64/Greenlantern-dccomics_movie_dccomics_superhero_hero-512.png"
        }
    ],
    titulares: [],
    suplentes: []
}



const reducerTrainer = (state = initialState, action) => {

    switch (action.type) {
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
            break;
        case "AGREGAR_SUPLENTE":
            return{
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
            break;
        case "QUITAR_TITULAR":
            return{
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
            break;
        case "QUITAR_SUPLENTE":
            return{
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
            break;
    }
    return state
}

export default createStore(reducerTrainer)
