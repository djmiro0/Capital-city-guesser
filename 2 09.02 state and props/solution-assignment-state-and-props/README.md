## Available Scripts

In the project directory, you can run:

To install dependencies:

### `yarn`

To run the server:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Counter App

The goal of this app is to practice state handling, passing props and conditional rendering.

1. - Inside of [App.js](src/App.js), there is a button. When the button is clicked, it should increment count.
     The count should start from zero and be handled using the `useState` hook.

2. - Inside the [components](./src/components/), there is a component called Text - import it into [App.js](src/App.js).

   - The JSX of the Text component should contain only one `p` element.
   - This component should accept one prop: `count`.
   - The `p` element should have different styles and different text based on the value of the prop it is being passed:

   ![alt text](images/1.png)

   1. If the value of count is bigger than 5, it should have olive background color. We have a class already declared in [App.scss](src/App.scss), do not use inline styling.

   ![alt text](images/2.png)

   2. If the value of count is smaller than 10, it should render the count. For example, if count was equal to 3, it should render the following sentence: 'The current count is: 3'. If count is bigger than 10, it should render the following sentence 'Count is bigger than 10'

   ![alt text](images/3.png)
