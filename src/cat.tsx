import { CatCall, CatResponse } from "./services/CatCall";
import React from "react";

export default function Cat() {
    const [catUrl, setCat] = React.useState<string>();

    const fetchCat = async () => {
        const cat : CatResponse[] = await CatCall();
        setCat(cat[0].url);
    }

    React.useEffect(() => { 
        fetchCat(); 
    }, []);

    return (
      <div className="Cat">
        { catUrl && <img src={catUrl} alt="cat" />}
      </div>
    );
}