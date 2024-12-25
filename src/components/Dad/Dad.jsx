import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex gap-4">
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <MySelf></MySelf>
                </div>
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Brother></Brother>
                </div>
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Sister></Sister>
                </div>
            </section>
        </div>
    );
};

export default Dad;