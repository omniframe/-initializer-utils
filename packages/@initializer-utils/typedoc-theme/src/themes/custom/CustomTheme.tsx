import { DefaultTheme } from 'typedoc';
import { CustomThemeRenderContext } from './CustomThemeRenderContext';

export class CustomTheme extends DefaultTheme {
  private _contextCache?: CustomThemeRenderContext;

  override getRenderContext() {
    this._contextCache ||= new CustomThemeRenderContext(
      // @ts-ignore <-- TODO: Investigate this error
      this._markedPlugin,
      this.application.options
    );

    return this._contextCache;
  }
}