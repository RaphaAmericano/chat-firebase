import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

function AuthProvider({ redirectComponent, children }) {
    const auth = useSelector(state => state.firebase.auth)
    const profile = useSelector(state => state.firebase.profile)

    // if(isLoaded(auth) && !isEmpty(profile)) return redirectComponent;
    if(isEmpty(profile)) return redirectComponent;
    return children;
}
export default AuthProvider;