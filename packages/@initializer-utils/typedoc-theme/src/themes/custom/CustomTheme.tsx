import { DefaultTheme, Renderer } from 'typedoc';
import { CustomThemeRenderContext } from './CustomThemeRenderContext';

export class CustomTheme extends DefaultTheme {
	private _contextCache?: CustomThemeRenderContext;

	constructor( renderer: Renderer ) {
		super( renderer );
	}

	override getRenderContext(): CustomThemeRenderContext {
		this._contextCache ||= new CustomThemeRenderContext(
			this,
			this.application.options
		);

		return this._contextCache;
	}
}
