import * as url from 'url';
import * as path from 'path';

import { app, BrowserWindow } from 'electron';

class Application {
  private mainUrl: string;
  private mainWindow: BrowserWindow | null;

  constructor() {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

    this.mainUrl = url.format({
      pathname: path.join(__dirname, '/index.html'),
      protocol: 'file:',
      slashes: true,
    });
    this.mainWindow = null;

    app.on('ready', () => this.createWindow());
    app.on('window-all-closed', () => app.quit());
    app.on('activate', () => {
      this.mainWindow ?? this.createWindow();
    });
  }

  static start(): Application {
    return new Application();
  }

  createWindow(): BrowserWindow {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: { nodeIntegration: true },
    });

    this.mainWindow.loadURL(this.mainUrl);
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });

    return this.mainWindow;
  }
}

Application.start();
