import { IPosition } from 'monaco-editor';

export type LangType = 'javascript' | 'typescript' | 'ruby' | 'php' | 'css' | 'html';

export interface IEditorInfo {
  position: IPosition;
}
