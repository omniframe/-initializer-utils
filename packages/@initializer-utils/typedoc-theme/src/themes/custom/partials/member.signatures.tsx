import { DeclarationReflection, JSX } from 'typedoc';
import type { CustomThemeRenderContext } from '../CustomThemeRenderContext';

export const memberSignatures = ( context: CustomThemeRenderContext, props: DeclarationReflection ) => (
	<>
		<ul class={"tsd-signatures " + props.cssClasses}>
			{props.signatures?.map( ( item ) => (
				<li class="tsd-signature tsd-kind-icon">{context.memberSignatureTitle( item )}</li>
			) )}
		</ul>

		<ul class="tsd-descriptions">
			{props.signatures?.map( ( item ) => (
				<li class="tsd-description">{context.memberSignatureBody( item )}</li>
			) )}
		</ul>
	</>
);
