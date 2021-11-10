import { JSX, TypeParameterReflection } from 'typedoc';
import type { CustomThemeRenderContext } from '../CustomThemeRenderContext';

export function typeParameters(context: CustomThemeRenderContext, typeParameters: ReadonlyArray<TypeParameterReflection>) {
  return (
    <ul class="tsd-type-parameters">
      {typeParameters?.map((item) => (
        <li>
          <h4>
            {item.name}
            {!!item.type && (
              <>
                <span class="tsd-signature-symbol">{": "}</span>
                {context.type(item.type)}
              </>
            )}
            {!!item.default && (
              <>
                {" = "}
                {context.type(item.default)}
              </>
            )}
          </h4>
          {context.comment(item)}
        </li>
      ))}
    </ul>
  );
}