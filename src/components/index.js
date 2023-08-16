export { default as Header } from "./Header";
export { default as MainContainer } from "./MainContainer";
export { default as CreateContainer } from "./CreateContainer";

// why we are using the index.js?
// later in some cases we need to add multiple import statements for different different components so that will add constanly a huge input over there
// so to avoid that we are importing everything as an object from the components folder
// index.js will handle all those imports and everything