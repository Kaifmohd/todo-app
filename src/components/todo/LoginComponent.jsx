import { useState } from 'react'
import { useNavigate} from 'react-router-dom'


export default function LoginComponent(){

    const [username,setUsername] = useState('kaif')
    const [password,setPassword] = useState('')
    const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    
    const navigate = useNavigate()
    
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(username==='kaif' && password==='dummy'){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`)
        }else{
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
        
    }
    // function SuccessMessageComponent(){
    //     if(showSuccessMessage){
    //         return <div className='successMessage'>Authenticated Successfully</div>
    //     }
    //     return null;
    // }
    // function ErrorMessageComponent(){
    //     if(showErrorMessage){
    //         return <div className='errorMessage'>Authenticated Failed. Please Check your Credentials</div>
    //     }
    //     return null;
    // }

    return (
        <div className="Login">
             <h1>Time to Login!</h1>

            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please Check your Credentials</div>}
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}