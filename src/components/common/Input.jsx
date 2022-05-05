export const Input =(props)=>{
    return(
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            <input type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default" value={props.value} onChange={props.onChange}/>
        </div>
    )
}