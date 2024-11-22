import { LiaGoogle } from "react-icons/lia";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-block w-52 bg-[#2591b1] text-black hover:text-[#2591b1]">
                    <LiaGoogle className="" />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;