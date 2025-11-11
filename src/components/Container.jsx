import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function Container() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer/>
            <main>
                <h1>Welcome to the Container Component</h1>
                <p>This is where the main content will go.</p>
            </main>
        </div>
    );
}

export default Container;