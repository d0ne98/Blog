
export default function HeroStat(props){
    return (
     <div className="statDiv">
     <h1>{props.number}</h1>
     <p>{props.title}</p>
    </div>
    )
}