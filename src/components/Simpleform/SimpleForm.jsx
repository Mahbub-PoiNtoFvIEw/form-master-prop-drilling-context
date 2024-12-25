
const SimpleForm = () => {
    const handleSubmit = e =>{
        // stop by default loading
        e.preventDefault();
        // get value of inputField value
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form className="form-control from-orange-600 w-[50%]" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input className="btn bg-blue-700" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;