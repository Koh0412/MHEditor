import * as monaco from 'monaco-editor';
import { DEFAULT_LANGUAGE } from '../constants/editorConst';
import { LangType } from '../types';

class EditorModule {
  lang: LangType;
  editorInstance: monaco.editor.IStandaloneCodeEditor | undefined;

  constructor() {
    this.lang = DEFAULT_LANGUAGE;
  }

  /**
   * monacoエディタ生成時のオプション
   */
  get createOption() {
    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
      value: '',
      language: this.lang,
      theme: 'vs-dark'
    }
    return options;
  }

  /**
   * 起動処理
   */
  boot(): void {
    const container = document.getElementById('editable');
    if (!container) {
      return;
    }
    this.editorInstance = monaco.editor.create(container, this.createOption);
  }

  /**
   * 現在のエディタの言語を設定
   *
   * @param language
   */
  setLanguage(language: LangType) {
    if (!this.editorInstance) {
      return;
    }
    const model = this.editorInstance.getModel()!;
    monaco.editor.setModelLanguage(model, language);
  }
}

export const editorModule = new EditorModule();
