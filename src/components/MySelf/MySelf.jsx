import Special from "../Special/Special";

const MySelf = () => {
    return (
        <div>
           <h2>My Self</h2>
           <section className="flex gap-6">
                <div className="border-2 border-orange-400 m-4 p-4 rounded-lg">
                    <Special></Special>
                </div>
            </section>
        </div>
    );
};

export default MySelf;