
import { useNavigate } from "react-router-dom";
import IconProps from "../components/IconProps";
import InputField from "../components/InputField";
import "../global.css";
import { faStethoscope, faSignInAlt  } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {
    const navigate = useNavigate();
  return (
      <div id="login-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="login-modal max-w-md w-full transform transition-all scale-100 p-8">
            <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="w-full h-full rounded-full bg-linear-to-br from-uhms-blue/20 to-uhms-light-blue/20 flex items-center justify-center floating">
                        <IconProps icon={faStethoscope} classname="text-5xl text-uhms-blue" />
                    </div>
                    <div className="absolute -inset-4 bg-linear-to-r from-uhms-blue to-uhms-light-blue rounded-full opacity-10 blur-xl"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Welcome to UHMS SmartMed</h2>
                <p className="text-gray-600 mb-8">Enter your name to start learning</p>
                
                <div className="mb-6 space-y-4">

                <InputField id="user-regisNumber" placeholder="Enter your registration number" type="text" classname="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-uhms-blue focus:ring-2 focus:ring-uhms-blue/20 outline-none" value={""}  />
                <InputField id="user-password" placeholder="Enter your password" type="password" classname="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-uhms-blue focus:ring-2 focus:ring-uhms-blue/20 outline-none" value={""}  />
                    
                </div>
                
                <button  className="w-full uhms-primary-btn" onClick={() => navigate("/dashboard")}>
                    <IconProps icon={faSignInAlt} classname="fas fa-sign-in-alt mr-2" /> Start Learning
                </button>
                
                <p className="text-xs text-gray-500 mt-6">No account needed. Your progress is saved in this session only.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage