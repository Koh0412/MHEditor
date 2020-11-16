import * as monaco from 'monaco-editor';

class EditorModule {
  boot(): void {
    const container = document.getElementById('editable');
    if (container) {
      monaco.editor.create(container, {
        value: '',
        language: 'javascript',
      });
    }
  }
}

export const editorModule = new EditorModule();
