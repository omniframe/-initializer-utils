import { Application, DefaultTheme } from 'typedoc';

export function load(app: Application) {
  app.renderer.defineTheme("mydefault", DefaultTheme);
}
