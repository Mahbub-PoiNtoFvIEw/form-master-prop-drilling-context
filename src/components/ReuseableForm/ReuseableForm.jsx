
const ReuseableForm = ({formTitle, handleSubmit, submitButtonText= 'Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }

    return (
        <div>
            {children}
            <form className="form-control w-[30%] my-6" onSubmit={handleLocalSubmit}>
                <input className="input border-slate-600" type="text" name="name" />
                <br />
                <input className="input border-slate-600" type="email" name="email" />
                <br />
                <input className="input border-slate-600" type="password" name="password" />
                <br />
                <input className="btn bg-blue-700 text-white" type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReuseableForm;