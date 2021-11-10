import { JSX, PageEvent, ProjectReflection } from 'typedoc';
import { CustomThemeRenderContext } from '../CustomThemeRenderContext';

export const indexTemplate = ({ markdown }: CustomThemeRenderContext, props: PageEvent<ProjectReflection>) => (
  <div class="tsd-panel tsd-typography">
      <JSX.Raw html={markdown(props.model.readme)} />
  </div>
);