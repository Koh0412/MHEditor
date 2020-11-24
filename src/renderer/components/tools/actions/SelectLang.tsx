import React from 'react';
import { editorLanguages } from '../../../constants/editorConst';
import { editorModule } from '../../../modules/EditorModule';
import { LangType } from '../../../types';
import BaseDialog from '../../parts/BaseDialog';

interface SelectLangState {
  isDialogOpen: boolean;
  currentLang: LangType;
  selectableElements: JSX.Element[];
}

class SelectLang extends React.Component<{}, SelectLangState> {
  constructor(props: {}) {
    super(props);

    const languages = Object.values(editorLanguages) as LangType[];
    this.state = {
      isDialogOpen: false,
      currentLang: editorModule.lang,
      selectableElements: this.langValueElements(languages)
    };
  }

  /**
   * 言語を選択
   * @param e
   */
  select(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const innerText = (e.target as HTMLElement).innerText as LangType;
    editorModule.setLanguage(innerText);
    this.setState({ isDialogOpen: false, currentLang: innerText });
  }

  /**
   * 取得したい言語を検索
   * @param e
   */
  search(e: React.FormEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    const languages = Object.values(editorLanguages) as LangType[];

    const filters = languages.filter((lang) => lang.indexOf(value) != -1);
    this.setState({ selectableElements: this.langValueElements(filters) });
  }

  /**
   * ダイアログの言語の各選択肢を生成
   */
  langValueElements(languages: LangType[]): JSX.Element[] {
    return languages.map((lang, i) => {
      return (
        <div className={'lang-item ' + (lang)} key={i} onClick={(e) => this.select(e)}>{lang}</div>
      );
    });
  }

  /**
   * ダイアログを開く
   */
  openDialog() {
    this.setState({ isDialogOpen: true });
  }

  /**
   * ダイアログを閉める
   */
  closeDialog() {
    this.setState({ isDialogOpen: false });
  }

  render() {
    return (
      <>
        <li className="item" onClick={() => this.openDialog()}>{this.state.currentLang}</li>
        <BaseDialog isOpen={this.state.isDialogOpen} close={() => this.closeDialog()} >
          <div className="select-lang-dialog">
            <input className="search" type="text" spellCheck="false" placeholder="Search Language" onInput={(e) => this.search(e)}/>
            {this.state.selectableElements}
          </div>
        </BaseDialog>
      </>
    );
  }
}

export default SelectLang;
