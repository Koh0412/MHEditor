import React from 'react';
import { editorLanguages } from '../constants/editorConst';
import { editorModule } from '../modules/EditorModule';
import { LangType } from '../types';

addEventListener('DOMContentLoaded', () => editorModule.boot(), false);

class Editor extends React.Component {

  /**
   * 現在の言語を変更
   *
   * @param e
   */
  changeLang(e: React.SyntheticEvent<HTMLSelectElement, Event>) {
    const target = e.target as HTMLSelectElement;
    editorModule.setLanguage(target.value as LangType);
  }

  /**
   * 言語選択のoption要素を生成
   */
  langValueElements() {
    const languages = Object.values(editorLanguages) as LangType[];

    return languages.map((lang, i) => {
      return (
        <option value={lang} key={i}>{lang}</option>
      )
    });
  }

  render(): JSX.Element {
    const styles: React.CSSProperties | undefined = {
      width: '100%',
      height: '500px',
      border: '1px solid grey',
    };

    return (
      <>
        <div id="editable" style={styles}></div>
        <select onChange={(e) => this.changeLang(e)}>
          {this.langValueElements()}
        </select>
      </>
    );
  }
}

export default Editor;
