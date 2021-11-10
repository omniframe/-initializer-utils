import { ContainerReflection, JSX, ReflectionCategory } from 'typedoc';
import { wbr } from 'typedoc/dist/lib/output/themes/lib';
import type { CustomThemeRenderContext } from '../CustomThemeRenderContext';

function renderCategory({ urlTo }: CustomThemeRenderContext, item: ReflectionCategory, prependName = "") {
  return (
    <section class="tsd-index-section">
      <h3>{prependName ? `${prependName} ${item.title}` : item.title}</h3>
      <ul class="tsd-index-list">
        {item.children.map((item) => (
          <li class={item.cssClasses}>
            <a href={urlTo(item)} class="tsd-kind-icon">
              {item.name ? wbr(item.name) : <em>{wbr(item.kindString!)}</em>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function index(context: CustomThemeRenderContext, props: ContainerReflection) {
  if (props.categories && props.categories.length) {
    return (
      <section class="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section class="tsd-panel tsd-index-panel">
          <div class="tsd-index-content">{props.categories.map((item) => renderCategory(context, item))}</div>
        </section>
      </section>
    );
  }

  if (props.groups && props.groups.length) {
    return (
      <section class="tsd-panel-group tsd-index-group">
        <h2>Index</h2>
        <section class="tsd-panel tsd-index-panel">
          <div class="tsd-index-content">
            {props.groups.map((item) => (
              <section class={"tsd-index-section " + item.cssClasses}>
                {item.categories ? (
                  item.categories.map((item2) => renderCategory(context, item2, item.title))
                ) : (
                  <>
                    <h3>{item.title}</h3>
                    <ul class="tsd-index-list">
                      {item.children.map((item) => (
                        <li class={item.cssClasses}>
                          <a href={context.urlTo(item)} class="tsd-kind-icon">
                            {item.name ? wbr(item.name) : <em>{wbr(item.kindString!)}</em>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            ))}
          </div>
        </section>
      </section>
    );
  }

  return undefined;
}