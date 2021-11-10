import { DeclarationReflection, JSX, ReferenceReflection } from 'typedoc';
import { renderFlags, wbr } from 'typedoc/dist/lib/output/themes/lib';
import type { CustomThemeRenderContext } from '../CustomThemeRenderContext';

export const member = (context: CustomThemeRenderContext, props: DeclarationReflection) => (
  <section class={"tsd-panel tsd-member " + props.cssClasses}>
    <a id={props.anchor} class="tsd-anchor"></a>
    {!!props.name && (
      <h3>
        {renderFlags(props.flags)}
        {wbr(props.name)}
      </h3>
    )}
    {props.signatures
      ? context.memberSignatures(props)
      : props.hasGetterOrSetter()
        ? context.memberGetterSetter(props)
        : props instanceof ReferenceReflection
          ? context.memberReference(props)
          : context.memberDeclaration(props)}

    {props.groups?.map((item) => item.children.map((item) => !item.hasOwnDocument && context.member(item)))}
  </section>
);
