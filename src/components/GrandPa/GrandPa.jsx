import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext({});

const GrandPa = () => {
  return (
    <div className="border-2 border-orange-400 m-2 p-2 rounded-lg">
      <h1>Grand pa</h1>
      <AssetContext.Provider value={{asset_1: 'Gold', asset_2:'Diamond', asset_3: 'Bronze'}}>
        <section className="flex gap-4">
          <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
            <Dad></Dad>
          </div>
          <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
            <Uncle></Uncle>
          </div>
          <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
            <Aunty></Aunty>
          </div>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * ** Props drilling using createContext
 * 1. create a context and export it
 * 2. add provider for the context with a value, value could be anything
 * useContext to access value in the context api
 */
