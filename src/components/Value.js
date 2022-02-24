function Value(props){
    return <>
        <div className="value">
            <div className="paras">
            {props.info.map(m => {
                return <>
                <img src={props.img} alt='imag'></img>
                <p>{m}</p>
                </>
            })}
            </div>
        </div>
    </>
}

// const addValue  = (info) => {
//     const { mission, img } = info;

//     return (
//         <Value mission={mission} img={img}/>
//     )
// }

export default Value;