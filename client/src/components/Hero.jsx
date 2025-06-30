import HeroStat from "./HeroStat"

export default function Hero() {
    return(
     <div className="hero">
        <div>
          <h1>D0ne's Blog</h1>
        </div>
        <div className="heroStats">
          <HeroStat number={10} title="Articles" />
          <HeroStat number={5} title="Topics" />
        </div>
     </div>
    )
    
}