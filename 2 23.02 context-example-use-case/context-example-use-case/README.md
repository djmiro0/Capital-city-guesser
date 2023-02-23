# Example context use case
In this example we are looking at the use of a context and a `ContextProviderComponent` all in one context. 

The use case is here that we would like to sign in a user into our application. We want to keep track whether the user has signed in or not. 

## Structure Application

Notice our `src` folder is subdivided in different folders: 
- `components `
    This is where we store our components, which we will be using in different views.
- `context`
- `views` 
    
    This folder contains our 'page' components. This folder has all the components which are mapped to a route. 
    e.g. `Home.jsx` is mapped to `/`, `Login.jsx` is mapped to `/login`, `Logout.jsx `is mapped to `/logout` etc.
