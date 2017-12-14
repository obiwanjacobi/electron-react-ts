import * as Electron from "electron";
import * as Path from "path";
import * as Url from "url";

/**
 * This is the entry point for the Main-process of Electron.
 */
export default class Program {
    private static mainWindow: Electron.BrowserWindow;
    private static application: Electron.App;   // not our Application!
    private static wndOptions: Electron.BrowserWindowConstructorOptions;

    public static run(mainWindowOptions: Electron.BrowserWindowConstructorOptions) {
        Program.wndOptions = mainWindowOptions;
        Program.application = Electron.app;
        Program.application.on("window-all-closed", Program.quit);
        Program.application.on("ready", Program.createWindow);
    }

    private static createWindow() {
        Program.mainWindow = new Electron.BrowserWindow(Program.wndOptions);
        Program.mainWindow.on("closed", Program.onClosed);
        Program.mainWindow.loadURL(Url.format({
            pathname: Path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
          }));
    }

    private static quit() {
        if (process.platform !== "darwin") {    // darwin=>mac
            Program.application.quit();
        }
    }

    private static onClosed() {
        Program.mainWindow = null;
    }
}

Program.run({useContentSize: true, center: true});