import * as monaco from 'monaco-editor';
import { DEFAULT_LANGUAGE } from '../constants/editorConst';
import { IStandaloneCodeEditor, LangType } from '../types';

class EditorModule {
  lang: LangType;
  instance: IStandaloneCodeEditor | undefined;

  private static _moduleInstance: EditorModule | undefined;

  private constructor() {
    this.lang = DEFAULT_LANGUAGE;
  }

  /**
   * monacoエディタ生成時のオプション
   */
  get createOption() {
    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
      value: '',
      language: this.lang,
      theme: 'vs-dark',
      automaticLayout: true,
    };
    return options;
  }

  /**
   * シングルトンなインスタンスを取得
   */
  static singleton() {
    if (!EditorModule._moduleInstance) {
      EditorModule._moduleInstance = new EditorModule();
    }
    return EditorModule._moduleInstance;
  }

  /**
   * monacoエディタのモデル取得
   */
  get model() {
    const model = this.instance?.getModel();
    return model;
  }

  /**
   * 起動処理
   */
  boot() {
    const container = document.getElementById('editable');
    if (container) {
      this.instance = monaco.editor.create(container, this.createOption);
    }
  }

  /**
   * 現在のエディタの言語を設定
   *
   * @param language
   */
  setLanguage(language: LangType) {
    if (this.model) {
      monaco.editor.setModelLanguage(this.model, language);
    }
  }

  /**
   * モデルが変更された時に発火
   * @param listener
   */
  onChangeCursorPosition(listener: (e: monaco.editor.ICursorPositionChangedEvent) => void) {
    this.instance?.onDidChangeCursorPosition(listener);
  }
}

export const editorModule = EditorModule.singleton();
