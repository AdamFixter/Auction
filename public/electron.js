const path = require("path");

const { app, BrowserWindow, ipcMain, session } = require("electron");
const isDev = require("electron-is-dev");

// const Logger = require("./logger");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 650,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: true,
      allowRunningInsecureContent: true,
      experimentalFeatures: false,

      preload: path.join(__dirname, "preload.js")
    },
    frame: false,
    icon: path.join(__dirname, "assets/favicons/favicon-256x256.ico"),
    show: false
  });
  // load the index.html with win.loadURL. (win.loadFile("index.html"))
  win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "index.html")}`);  
  //Only show window once everything has loaded
  win.webContents.once('did-finish-load', () => {
    win.show();
    if (isDev) {
      win.webContents.openDevTools({ mode: "detach" });
    }
  });
  return win;
}

//Tempory fix to fix cache lock/access is denied
app.releaseSingleInstanceLock();
app.setPath('cache', `C:\\Users\\Adam\\AppData\\Roaming\\${isDev ? 'development' : 'production'}`);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  console.log("3");
  const win = createWindow();
  const { send } = require("./socketClient")(win);

  ipcMain.on("app/minimize", () => win.minimize());
  ipcMain.on("app/maximize", () => win.isMaximized() ? win.unmaximize() : win.maximize());
  ipcMain.on("app/close", () => app.quit());

  ipcMain.handle("send", (e, message, data, broadcast = false) => send(message, data, broadcast));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  session.defaultSession.clearStorageData();
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});