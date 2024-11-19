import { useEffect, useState } from "react";
import Guide from "./Guide";


const Guides = () => {

    const [guide, setGuide] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/guides')
        .then(res => res.json())
        .then(data => setGuide(data)
            // { const tourGuide = data.map(guide => (guide));
            // setGuide(tourGuide);}
            )
    }, [])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                guide.map(guide => <Guide
                    key={guide.id}
                    guide={guide}
                ></Guide>)
            }
        </div>
    );
};

export default Guides;