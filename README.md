# electron-react-ts

This example is based on the Electron application quick start tutorial [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

The project contains these files:

- `package.json` - Points to the app's entry point and lists its details and dependencies.
- `tsconfig.json` - Configurures the TypeScript compiler.
- `Program.ts` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - The main (web) page to render. This is the app's **renderer process**.
- `Application.tsx` - The React <Application> component that is attached to `index.html`.

Visual Studio Code

- `launch.json` - Contains launch and debug parameters for the F5 experience for both the main process (Program) as well as the render process (Application).
- `tasks.json` - Contains the default compile/build task (Ctrl+Shift+B).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/obiwanjacobi/electron-react-ts
# Go into the repository
cd electron-react-ts
# Install dependencies
npm install
# Run the app
npm start
```

## Conventions

- Names starting with an upper case Letter are types.
- Names starting with a lower case letter are vars or members.

## License

[CC0 1.0 (Public Domain)](LICENSE.md)

Created december 2017.