import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const [error, setError] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        const password = passwordRef.current.value;
        e.preventDefault();
        if(password.length <6){
            setError('password must be 6 characters or longer')
        }else{
            setError('')
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(password)
        }
    }
    return (
        <div>
            <form className="form-control w-[30%] mt-6" onSubmit={handleSubmit}>
                <input ref={nameRef} className="input border-slate-600" type="text" name="name" />
                <br />
                <input defaultValue={'mahbub@g.com'} ref={emailRef} className="input border-slate-600" type="email" name="email" />
                <br />
                <input ref={passwordRef} className="input border-slate-600" type="password" name="password" required />
                <br />
                {
                    error && <p className="text-red-700 mb-4">{error}</p>
                }
                <input className="btn bg-blue-700" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;