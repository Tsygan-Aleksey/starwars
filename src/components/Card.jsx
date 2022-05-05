import {Link, useParams} from "react-router-dom";

export const Card = (props) => {
  const {type} = useParams()
  switch (type){
    default:{
      return <div>type</div>
    }
    case 'people':{
      return (
          <div className="card col-2 m-2">
            <img src="..." className="card-img-top" alt="logo" />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <div className="card-text">
                <p>height: {props.height}</p>
                <p >mass: {props.mass}</p>
                <p>hair color: {props.hair_color}</p>
                <p>eye color: {props.eye_color}</p>
              </div>
              <p className="card-text">
                <Link to={(props.index+1).toString()}>{props.name}</Link>
              </p>
            </div>
          </div>
      );
    }
    case 'films':{
      return (
          <div className="card d-grid mb-2">
            <img src="..." className="card-img-top" alt="film" />
            <div className="card-body">
              <h5 className="card-title fw-bold">{props.title}</h5>
              <p className="card-text">
                {props.opening_crawl}
              </p>
              <p className="card-text fw-bold">
                {props.director}
              </p>
              <p className="card-text fw-bold">
                {props.producer}
              </p>
              <p className="card-text ">
                <Link to={(props.index+1).toString()}>{props.title}</Link>
              </p>
            </div>
          </div>
      )
    }
    case 'starships':{
      return (<div className="card col-3 m-2">
        <img src="..." className="card-img-top" alt="starship" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <p>model: {props.model}</p>
            <p >manufacturer: {props.manufacturer}</p>
            <p>cost in credits: {props.cost_in_credits}</p>
            <p>passengers: {props.passengers}</p>
          </div>
          <p className="card-text">
            <Link to={(props.index+1).toString()}>{props.name}</Link>
          </p>
        </div>
      </div>)
    }
    case 'planets':{
      return (<div className="card col-3 m-2">
        <img src="..." className="card-img-top" alt="planet" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <p>climate: {props.climate}</p>
            <p >population: {props.population}</p>
            <p>terrain: {props.terrain}</p>
            <p>diameter: {props.diameter}</p>
          </div>
          <p className="card-text">
            <Link to={(props.index+1).toString()}>{props.name}</Link>
          </p>
        </div>
      </div>)
    }
  }

};
