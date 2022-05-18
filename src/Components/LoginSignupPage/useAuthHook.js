import { useContext } from "react"
import { AuthContext } from "../AllContext/AuthContext"

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;