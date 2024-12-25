import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6){
            setError('password must be 6 characters or longer')
        }else{
            setError('')
            console.log(name, email, password)
        }
    }
    // const handleName= e =>{
    //     setName(e.target.value)
    // }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form className="form-control w-[30%] mt-6" onSubmit={handleSubmit}>
                <input onChange={e => setName(e.target.value)} className="input border-slate-600" type="text" name="name" />
                <br />
                <input className="input border-slate-600" onChange={handleEmail} type="email" name="email" />
                <br />
                <input onChange={handlePassword} className="input border-slate-600" type="password" name="password" required />
                <br />
                {
                    error && <p className="text-red-700 mb-4">{error}</p>
                }
                <input className="btn bg-blue-700" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;