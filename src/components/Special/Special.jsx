import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Special = () => {
    const gift = useContext(AssetContext)
    // console.log(gift)
    return (
        <div>
            <h2>Special</h2>
            <p>has : {gift.asset_1}</p>
        </div>
    );
};

export default Special;