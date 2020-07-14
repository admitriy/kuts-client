const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { download } = require('electron-dl');
const path = require('path');
const DecompressZip = require('decompress-zip');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// app.commandLine.appendSwitch('ppapi-flash-path', './dist/kutc-client/assets/pepflashplayer64_32_0_0_387.dll');
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, './dist/kutc-client/assets/pepflashplayer64_32_0_0_387.dll'));
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.387');

console.log(path.join(__dirname, 'pepflashplayer64_32_0_0_387.dll'));

let win;

function createWindow () {
  // Create the browser window.

  win = new BrowserWindow({width:1500, height: 1000, webPreferences: {webSecurity: false, plugins: true} });
  // win.maximize(true);
  // win.setResizable(false);

  // and load the index.html of the app.
  // win.loadFile('./dist/kutc-client/index.html');
  win.loadURL('http://localhost:4200/index.html');

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('download', (event, args) => {
  let path = 'files';
  if (!require('fs').existsSync(path + '\\' + args.content)) {
    download(BrowserWindow.getFocusedWindow(), 'http://localhost:8084/api/1/file/' + args.content, {
        directory: path,
        saveAs: false,
        showBadge: true,
        onProgress: function(e) {
          event.sender.send('download',e)
        }})
      .then(e => {
        console.log(e);
      });
  } else {
    event.sender.send('download', {exist: true})
  }
});


ipcMain.on('decompress', (event, args) => {
  let path = 'files';
  const zipFolder = path + '\\' +  'ZIP-' + args.file;

  if (require('fs').existsSync(zipFolder)) {
    event.sender.send('decompress', {done: 'OLD'});
  } else {
    const decompress = new DecompressZip(path + '\\' + args.file);

    decompress.on('extract', function (log) {
      decompress.closeFile();
      event.sender.send('decompress', {done: 'NEW'});
    });

    decompress.extract({
      path: zipFolder
    });
  }
});

ipcMain.on('openFile', (event, args) => {
  let path = 'files';
  shell.openItem(__dirname + '\\' + path + '\\' + args.path);
});
