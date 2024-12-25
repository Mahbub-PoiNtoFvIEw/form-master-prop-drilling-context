import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../GrandPa/GrandPa";

const Cousin = ({name}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {
                name === 'Sohana' && <p>has: {gift.asset_2}</p>
            }
            {
                name === 'Rubaiya' && <p>has: {gift.asset_3}</p>
            }
        </div>
    );
};

export default Cousin;