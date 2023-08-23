### Conceptual Exercise

Answer the following questions below:

- _What is the purpose of the React Router?_

* The purpose of React Router is to provide routing capabilities to React applications. React Router is a popular library that allows developers to handle the navigation and routing in a single-page application (SPA) built with React.
* React Router provides a declarative way to define the routes using React components. It offers a set of components, such as BrowserRouter, Route, Link, and Switch, that can be used to configure the routing behavior of the application.

- _What is a single page application?_

* In a typical SPA, the content is dynamically loaded and updated on a single HTML page, rather than loading separate HTML pages for each screen or view.

- _What are some differences between client side and server side routing?_

1. **Execution Location:**

- Client-side routing: The routing logic is executed on the client-side, meaning the routing decisions and rendering of components happen in the user's browser.
- Server-side routing: The routing logic is executed on the server-side, meaning the routing decisions and rendering of components happen on the server before sending the fully rendered HTML page to the client.

2. **Initial Page Load:**

- Client-side routing: The initial HTML page is loaded from the server, and subsequent navigation and rendering of components are handled on the client-side without reloading the entire page.
- Server-side routing: The server renders the complete HTML page with the initial content and sends it to the client. Each navigation requires a full page reload, as the server generates a new HTML page for each route.

3. **Initial Page Load:**

- Client-side routing: The initial HTML page is loaded from the server, and subsequent navigation and rendering of components are handled on the client-side without reloading the entire page.
- Server-side routing: The server renders the complete HTML page with the initial content and sends it to the client. Each navigation requires a full page reload, as the server generates a new HTML page for each route.

* _What are two ways of handling redirects with React Router? When would you use each?_

- Declarative redirects involve using the <Redirect> component provided by React Router. This component allows you to specify a target URL to redirect to. You can use it within a <Route> component or outside the <Switch> component.
- Programmatic redirects involve using the history object provided by React Router to navigate to a different URL programmatically. This method allows you to redirect users based on specific conditions or user interactions.

* _What are two different ways to handle page-not-found user experiences using React Router?_

- Using a <Route> with a path="\*"
- Creating a custom 404 component

* _How do you grab URL parameters from within a component using React Router?_

- In React Router, you can grab URL parameters from within a component by using the useParams hook provided by the react-router-dom package.

* _What is context in React? When would you use it?_

1. context provides a way to share data between components without the need to pass props explicitly at every level of the component tree. It allows you to create a central store of data or state that can be accessed by any component in the tree, regardless of their nesting level.
2. Context is particularly useful in the following scenarios:

- Prop drilling / tunneling
- Less repetition
- Useful for global themes, shared data

* _Describe some differences between class-based components and function_
  components in React.

1. Syntax:

- Class-based components: Class-based components are defined using ES6 classes that extend the React.Component base class. They use the render() method to return the component's JSX markup.
- Function components: Function components are defined as JavaScript functions that return JSX. They are also known as "stateless functional components" or "functional components with hooks" when using React hooks.

2. State Management:

- Class-based components: Class-based components have access to the state object, allowing them to manage internal component state. The state can be updated using setState(), triggering re-rendering of the component.
- Function components: Initially, function components were stateless and could not manage their own state. However, with the introduction of React hooks, such as the useState hook, function components can now manage state by declaring and updating state variables.

* _What are some of the problems that hooks were designed to solve?_

- Hooks provide a way to manage state and share logic across components without the need for prop drilling, resulting in cleaner and more maintainable code.
- Hooks enable the extraction and reuse of stateful logic using custom hooks, promoting code reuse and modularity.
- Hooks, specifically the useEffect hook, allow developers to manage component side effects and lifecycle behavior in a more declarative and centralized manner.
- Hooks provide a simpler and more approachable API, making it easier for both new and experienced developers to understand and work with React.
