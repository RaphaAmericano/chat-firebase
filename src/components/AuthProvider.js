import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

function AuthProvider({ redirectComponent, children }) {
    const auth = useSelector(state => state.firebase.auth)
    if(!isLoaded(auth)) return redirectComponent;
    return children;
}
export default AuthProvider;