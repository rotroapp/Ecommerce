import NavBar from "../features/NavBar/NavBar"
import ProductListFilter from "../features/ProductList/ProductListFilter"
import { Signup } from "../features/auth/components/Signup";
import LoginPage from "./LoginPage";

const HomePage = () => {
    

    return(
        <>
        <NavBar>
        <ProductListFilter></ProductListFilter>
        </NavBar>
        </>
    )

}

export default HomePage;