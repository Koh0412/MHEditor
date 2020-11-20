import { IPosition, editor, } from 'monaco-editor';

export type LangType = 'javascript' | 'typescript' | 'ruby' | 'php' | 'css' | 'html';

export interface IEditorInfo {
  position: IPosition;
}

export interface IStandaloneCodeEditor extends editor.IStandaloneCodeEditor {
  _themeService?: any;
}
