# Example context : context
In this example we are using two Contexts : 
- AuthContext en ThemeContext. 

We're using context to share global variables accross components. 


## Get Started
- > `npm i` 
- > `npm start `

## Project Structure

We have 2 folders :
- `/context`: contains our context files.
- `/components`: contains our components files

## what is context?
Context allows us to share state globally accross different components. 

## Structure of context 
We first have to create a context using the `createContext` method. We can import `createContext` from react. Next we can create a context by calling the method. The parameter is the initial value of the context. (in this case `null`). 

Next you can export your context. This way you can access it throughout your application. 

Example: 
```javascript
import { createContext } from "react"; //importing the createContext function

const NameContext = createContext(null); //creating the context and assign it to AuthContext var.

export {NameContext}; //export the AuthContext to the rest of the application.

```

We can import the context where we would like to use it. In our case we imported it in `App.js`
```javascript
import { AuthContext } from './context/AuthContext';
```

Now that we have imported the context, we have to tell React which components will be able to use this context. We can do this by configuring a provider.  
Inside the provider we place, as its children, the components that should have access to the context.

In the below example NameContext provides value `state1`, `state2` and `setState` to its children components. The value is now set as an object: `{state1, state2, setState1}`.

```javascript
<NameContext.Provider value={{state1, state2, setState1}}>
    <ChildComponent1 />
    <ChildComponent2 />
    <ChildComponent3 />
</NameContext.Provider>
```

### Accessing global state inside a component using `useContext`. 
We can access the global state from the component using the `useContext` hook. 

we have to make sure we import the NameContext. As a parameter to the useContext we supply the context we would like to use to get values from.
```javascript
const {state1, state2} = useContext(NameContext);  
```



## Components

### Header component 




