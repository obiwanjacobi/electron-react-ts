import * as React from "react";
import * as ReactDom from "react-dom";

// TODO: Define your Application properties.
interface Props { }

/**
 * The Application is the root object for the Render-process.
 */
export default class Application extends React.Component<Props, {}> {
    render() {
        return  (<div className="App">
                    <div className="App-header">
                        <img src="./logo.svg" className="App-logo" alt="logo" />
                        <h2>Electron + React sample application in TypeScript.</h2>
                    </div>
                    <p className="App-intro">
                        This code is located in the <code>src/Application.tsx</code> file.
                    </p>
                </div>
            );
    }

    /**
     * Attaches the Application UI to the index.html.
     */
    public static run() {
        ReactDom.render(<Application />,
            document.getElementById("application")
        );
    }
}

Application.run();