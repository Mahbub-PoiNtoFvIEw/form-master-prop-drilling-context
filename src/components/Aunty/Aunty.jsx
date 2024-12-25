
import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex gap-4">
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Cousin name={'Mamshad'}></Cousin>
                </div>
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Cousin name={'Rubaiya'}></Cousin>
                </div>
            </section>
        </div>
    );
};

export default Aunty;