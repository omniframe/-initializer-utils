import { Application } from 'typedoc';
import { CustomTheme } from './themes';

export function load(app: Application) {
  app.renderer.defineTheme("@initializer-utils/typedoc-theme", CustomTheme);
}
