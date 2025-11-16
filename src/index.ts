import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const windowSpec = {
    width: 800,
    height: 600
  };

  const win = new BrowserWindow(windowSpec);

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
