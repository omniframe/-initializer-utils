import { Application, DefaultThemeRenderContext, JSX } from 'typedoc';
import { CustomTheme } from './themes';

export function load(app: Application) {
  app.renderer.defineTheme("@initializer-utils/typedoc-theme", CustomTheme);

  app.renderer.hooks.on('head.end', <T extends DefaultThemeRenderContext = DefaultThemeRenderContext>(_ctx: T) => {
    console.log(`Handling event: 'head.end'`);

    if (app.options.isSet('plugin')) {
      const assetsPlugin = app.options.getValue('assets');
      console.log('assetsPlugin:', assetsPlugin);
    }

    return JSX.createElement(typeof JSX.Fragment, null);
  });
}
