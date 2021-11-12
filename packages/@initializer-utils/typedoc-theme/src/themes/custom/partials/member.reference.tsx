import { JSX, ReferenceReflection } from 'typedoc';
import type { CustomThemeRenderContext } from '../CustomThemeRenderContext';

export const memberReference = (
	{ urlTo }: CustomThemeRenderContext,
	props: ReferenceReflection,
) => {
	const referenced = props.tryGetTargetReflectionDeep();

	if ( !referenced ) {
		return <>Re-exports {props.name}</>;
	}

	if ( props.name === referenced.name ) {
		return (
			<>
				Re-exports <a href={urlTo( referenced )}>{referenced.name}</a>
			</>
		);
	}

	return (
		<>
			Renames and re-exports <a href={urlTo( referenced )}>{referenced.name}</a>
		</>
	);
};
