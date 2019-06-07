const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({ 
    width: 800, 
    height: 800,
    backgroundColor: '#fffff',
    icon: `file://${__dirname}/build/icon.ico`
  });

  // load the dist folder from Angular
  win.loadURL(`file://${__dirname}/dist/index.html`);

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});