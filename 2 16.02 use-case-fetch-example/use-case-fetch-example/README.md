# Example Use Case : fetching data using useEffect 
We fetch data and conditionally render a spinner/loader component while data is fetching. 


## Get Started
- > `npm i` 
- > `npm start `

## Project Structure
You can find all components inside the `/components` folder. Notice each component has its own folder. 

### ListPosts.jsx 
This component contains a function `loadPosts` that loads data from jsonplaceholder. (our API endpoint) `https://jsonplaceholder.typicode.com/posts`. 

We placed the `loadPosts` function inside the `useEffect`. Notice we only use the setters when the component is mounted. The code is asynchronous which means the component could already have been unmounted while the call is still in progress. By checking whether the component is mounted we are sure that we're not using state setters for a component that is already unmounted.

```javascript
       if(mounted) {
            //only update the state when the component is mounted
            console.log("Setting items"); 
            setIsLoading(false); 
            setPosts(fetchedPosts);
        }
```

We are conditionally rendering the spinner when the state `isLoading` is set to true. If `isLoading` is false we show the list of posts.

```javascript
   {isLoading ? <BootstrapSpinner /> : (posts.map((post) =>(<PostItem key={post.id} post={post} />)))}
```

### PostItem.jsx
Contains our Post card. We created a bootstrap card here. This component takes one prop : post. 
```javascript
export default function PostItem({post}) {
```

### Header.jsx 
This is our Header component. Using bootstrap navbar

### BootstrapSpinner.jsx
This contains our spinner. We are using the spinner inside `ListPosts.jsx.` 

### App.js
In `App.js` you can see many of the above components used together.`App.js` also has a button element that allows us to hide or display the `ListPosts` component. This is also done using conditional rendering: 
``` javascript
  function ContentPosts(){
    if(showPosts){
      return <ListPosts />
    } else {
      return <p>Posts are hidden.</p>
    }
  }
```