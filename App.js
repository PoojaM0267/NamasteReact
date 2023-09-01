import React from "react";
import  ReactDOM from "react-dom/client";       
        
        // Simple H1 tag in heading
        // creating react element using core react
        const heading = React.createElement("h1", {id : "heading"}, "Hello World from React !");

        // NOte : no diff between heading and jsxHeading objects
        // Note: JSX = HTML/XML like syntax

        // creating react element using jsx 
        const jsxHeading = (<h1 id="heading" className="head">
                Hello Namaste React using react element</h1>);


        const Title = () => (<h1 id="heading" className="head">
        Hello Namaste React using title component </h1>);



        // React Functional component
        const HeadingComponent = () => (
                <div id="container">
                        <Title />
                        {jsxHeading}
                        <h1>Namaste React from Functional component</h1>
                </div>
                
        )



        const root = ReactDOM.createRoot(document.getElementById("root"));

       // root.render(jsxHeading);
       root.render(<HeadingComponent />);