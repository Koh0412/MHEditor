import * as url from 'url';
import * as path from 'path';

import { app, BrowserWindow } from 'electron';
import { DEFAULT_WINDOW_OPTIONS } from './const';

class Application {
  private mainUrl: string;
  private mainWindow: BrowserWindow | null;

  constructor() {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

    this.mainUrl = url.format({
      pathname: path.join(__dirname, '../index.html'),
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

  private get windowOption() {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...DEFAULT_WINDOW_OPTIONS,
      titleBarStyle: "hidden",
      webPreferences: { nodeIntegration: true },
    }
    return options;
  }

  static start(): Application {
    return new Application();
  }

  createWindow(): BrowserWindow {
    this.mainWindow = new BrowserWindow(this.windowOption);

    this.mainWindow.loadURL(this.mainUrl);
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });

    return this.mainWindow;
  }

}

Application.start();
