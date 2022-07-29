import { CatCall, CatResponse } from "./services/CatCall";
import React from "react";

export default function Cat() {
    const [catUrl, setCat] = React.useState<string>();

    const fetchCat = async () => {
        const cat : CatResponse[] = await CatCall();
        console.log("cat obj", cat)
        setCat(cat[0].url);
    }

    React.useEffect(() => { 
        fetchCat(); 
        console.log("I ran")
    }, []);
    return (
      <div className="Cat">
        { catUrl && <img src={catUrl} alt="cat" />}
      </div>
    );
}