import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
    // one way return array receive array
    // const [name, handleNameChange] = useInputState();

    // another way that is return object and receive object
    const emailState = useInputState('ma@j.com')
    const passwordState = useInputState()

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailState.value)
        console.log(passwordState.value)
        // if(password.length <6){
        //     setError('password must be 6 characters or longer')
        // }else{
        //     setError('')
        //     console.log(name, email, password)
        // }
    }
    return (
        <div>
            <form className="form-control w-[30%] mt-6" onSubmit={handleSubmit}>
                {/* <input onChange={handleNameChange} className="input border-slate-600" type="text" name="name" /> */}
                <br />
                <input {...emailState} className="input border-slate-600" type="email" name="email" />
                <br />
                <input {...passwordState} className="input border-slate-600" type="password" name="password" required />
                <br />
                {/* {
                    error && <p className="text-red-700 mb-4">{error}</p>
                } */}
                <input className="btn bg-blue-700" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;