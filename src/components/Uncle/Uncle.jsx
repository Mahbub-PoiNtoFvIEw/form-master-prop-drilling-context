import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex gap-4">
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Cousin name={'Rafsan'}></Cousin>
                </div>
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Cousin name={'Sohana'}></Cousin>
                </div>
            </section>
        </div>
    );
};

export default Uncle;