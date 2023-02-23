# Example context use case
In this example we are looking at the use of a context and a `ContextProviderComponent` all in one context. 

The use case is here that we would like to sign in a user into our application. We want to keep track whether the user has signed in or not. 

## Structure Application

Notice our `src` folder is subdivided in different folders: 
- `components `

    This is where we store our components, which we will be using in different views. In our case we have the `Header` component, the `PrivateNavigation` and  the `PublicNavigation` component.
- `context`

    Here we will be storing our different contexts. In this specific case you van find the `AuthContext` here.

- `views` 
    
    This folder contains our 'page' components. This folder has all the components which are mapped to a route. 
    e.g. `Home.jsx` is mapped to `/`, `Login.jsx` is mapped to `/login`, `Logout.jsx `is mapped to `/logout` etc.


## Usage of context in this example

In this example we built an `AuthContext` which will hold the following state : 

- username 
- isAuthenticated.

 When you open `AuthContext.js` you will see it consists of two different sections which are both exported. 

 First the Context itself, using the `createContext` function we create the context and store it inside the `const AuthContext` which we immediately export. See code below: 
 
 ````javascript
 //Context itself export it to the reest of the application
export const AuthContext = createContext();
 ````

 Secondly the AuthContextProviderComponent which is the react component we created that will act as our Provider. 

  ````javascript
//props.children : children allow us to get access to all children of the component
//provider component: a component which combines provider with the state.
//below is a react component 
export default function AuthContextProviderComponent({children}){

    const [username, setUsername] = useState("Mark");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //this function will handle the full login/logout
    //handleLogin(true, "Mark")  1st case user signs in (in this case Mark)
    //handleLogin(false)   2nd case user signs out. 
    const handleLogin =(isAuthenticated, username = "") => {
        if(isAuthenticated){
            setIsAuthenticated(true);
            setUsername(username);
        } else {
            setIsAuthenticated(false);
            setUsername("");
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
 ````
