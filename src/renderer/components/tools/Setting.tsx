import React from 'react';
import { editorLanguages } from '../../constants/editorConst';
import { editorModule } from '../../modules/EditorModule';
import { LangType } from '../../types';

class Setting extends React.Component {

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
  langValueElements(): JSX.Element[] {
    const languages = Object.values(editorLanguages) as LangType[];

    return languages.map((lang, i) => {
      return (
        <option value={lang} key={i}>{lang}</option>
      )
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <select onChange={(e) => this.changeLang(e)}>
          {this.langValueElements()}
        </select>
      </div>
    );
  }
}

export default Setting;
