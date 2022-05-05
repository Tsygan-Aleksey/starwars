import {useParams} from "react-router-dom";

export const ItemCard = (props)=>{
    const { type} = useParams()
    switch (type) {
        default:{
            return <div>type</div>
        }
        case "people": {
            return (
                <div  className="container d-flex flex-row">
                    <div className="d-flex flex-row">
                        <img src="..." className="rounded float-start " alt="logo" />
                    </div>
                    <div className="d-flex row flex-column">
                        <h2 className="m-2">{props.name}</h2>
                        <span className="fs-5">height: {props.height}</span>
                        <span className="fs-5">mass: {props.mass}</span>
                        <span className="fs-5">hair color: {props.hair_color} </span>
                        <span className="fs-5">eye color: {props.eye_color} </span>
                        <span className="fs-5">skin color: {props.skin_color} </span>
                        <span className="fs-5">birth year: {props.birth_year} </span>
                        <span className="fs-5">gender: {props.gender} </span>
                    </div>
                </div>
            );
        }
        case "films": {
            return (
                <div className="container">
                    <div className="d-flex row flex-column">
                        <img src="..." className="rounded float-start " alt="logo" />
                        <h2 className="m-2">{props.title}</h2>
                        <span className="fs-4 fw-bold">episode: {props.episode_id}</span>
                        <p className="fs-5 fst-italic">{props.opening_crawl}</p>
                        <span className="fs-4">director: {props.director}</span>
                        <span className="fs-4">producers: {props.producer} </span>
                        <span className="fs-4">release date: {props.release_date} </span>
                    </div>
                </div>
            );
        }
        case "starships": {
            return (
                <div className="container d-flex flex-row">
                    <div className="d-flex flex-row">
                        <img src="..." className="rounded float-start " alt="logo" />
                    </div>
                    <div className="d-flex row flex-column">
                        <h2 className="m-2">{props.name}</h2>
                        <span className="fs-5">model: {props.model}</span>
                        <span className="fs-5">passengers: {props.passengers}</span>
                        <span className="fs-5">cost in credits: {props.cost_in_credits} </span>
                        <span className="fs-5">starship class: {props.starship_class} </span>
                        <span className="fs-5">consumables: {props.consumables} </span>
                    </div>
                </div>
            );
        }
        case "planets": {
            return (
                <div className="container d-flex flex-row">
                    <div className="d-flex flex-row">
                        <img src="..." className="rounded float-start " alt="logo" />
                    </div>
                    <div className="d-flex row flex-column">
                        <h2 className="m-2">{props.name}</h2>
                        <span className="fs-5">climate: {props.climate}</span>
                        <span className="fs-5">diameter: {props.diameter}</span>
                        <span className="fs-5">orbital period: {props.orbital_period} </span>
                        <span className="fs-5">population: {props.population} </span>
                        <span className="fs-5">terrain: {props.terrain} </span>
                        <span className="fs-5">surface water: {props.surface_water} </span>
                    </div>
                </div>
            );
        }
    }
}