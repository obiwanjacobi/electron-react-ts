import * as React from 'react'
import * as ReactDom from 'react-dom'

// TODO:
interface Props { }

/**
 * The Application is the root object for the Render-process.
 */
export default class Application extends React.Component<Props, {}> {
    render() {
        return <h1>Electron + React sample app in TypeScript.</h1>;
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