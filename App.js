        
        // Nested Div structure 

       const parent = React.createElement("div", 
       {id :"parent"}, 
       React.createElement("div", {id :"child" }, 
       React.createElement("h1", {}, "I am a H1 tag nested inside div !!!")
       ));



       // 2 siblings header tags
       const parent2 = React.createElement("div", 
       {id :"parent"}, 
       React.createElement("div", {id :"child" }, 
       [React.createElement("h1", {}, "I am a H1 tag nested inside div !!!"), 
        React.createElement("h2", {}, "I am a H2 tag nested inside div !!!")]
       ));

        
        
        // Simple H1 tag in heading
        
        const heading = React.createElement("h1", {id : "heading"}, "Hello World from React !");
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent2);