import * as monaco from 'monaco-editor';
import { DEFAULT_LANGUAGE } from '../constants/editorConst';
import { LangType } from '../types';

class EditorModule {
  lang: LangType;
  instance: monaco.editor.IStandaloneCodeEditor | undefined;

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
      theme: 'vs-dark',
      automaticLayout: true
    }
    return options;
  }

  /**
   * monacoエディタのモデル取得
   */
  get model() {
    if (!this.instance) {
      return;
    }
    const model = this.instance.getModel();
    return model;
  }

  /**
   * 起動処理
   */
  boot() {
    const container = document.getElementById('editable');
    if (!container) {
      return;
    }
    this.instance = monaco.editor.create(container, this.createOption);
  }

  /**
   * 現在のエディタの言語を設定
   *
   * @param language
   */
  setLanguage(language: LangType) {
    monaco.editor.setModelLanguage(this.model, language);
  }

  /**
   * モデルが変更された時に発火
   * @param listener
   */
  onChangeContent(listener: (e: monaco.editor.IModelContentChangedEvent) => void) {
    this.model.onDidChangeContent(listener);
  }
}

export const editorModule = new EditorModule();
