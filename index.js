const {app, BrowserWindow} = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: 'icon.png'
  })

  win.loadURL('https://live.browserstack.com/dashboard')
}

app.whenReady().then(createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Mac-style window creation
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})