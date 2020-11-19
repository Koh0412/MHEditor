import * as custombar from 'custom-electron-titlebar';

class Titlebar {
  private instance: custombar.Titlebar | undefined;

  constructor() {
    this.instance = this.create();
  }

  private get options() {
    const options: custombar.TitlebarOptions = {
      backgroundColor: custombar.Color.fromHex('#333')
    };
    return options;
  }

  private create(): custombar.Titlebar {
    return new custombar.Titlebar(this.options)
  }
}

export default new Titlebar();
