import Button from "./Button";
import TilesContainer from "./TilesContainer";

export default function ArticlesPage() {

    return(
        <div className="articlesPage">
          <div className="articlesPageHeader">
            <h1>All articles</h1>
            <Button name="New article" url="/articles/create"/>
          </div>
          <TilesContainer />
        </div>
    )
    
}