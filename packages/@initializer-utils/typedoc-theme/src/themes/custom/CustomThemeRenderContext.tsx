import { DefaultThemeRenderContext } from 'typedoc';
import { defaultLayout } from './layouts/default';
import { analytics } from './partials/analytics';
import { breadcrumb } from './partials/breadcrumb';
import { comment } from './partials/comment';
import { footer } from './partials/footer';
import { header } from './partials/header';
import { hierarchy } from './partials/hierarchy';
import { index } from './partials/index';
import { member } from './partials/member';
import { memberDeclaration } from './partials/member.declaration';
import { memberGetterSetter } from './partials/member.getterSetter';
import { memberReference } from './partials/member.reference';
import { memberSignatureBody } from './partials/member.signature.body';
import { memberSignatureTitle } from './partials/member.signature.title';
import { memberSignatures } from './partials/member.signatures';
import { memberSources } from './partials/member.sources';
import { members } from './partials/members';
import { membersGroup } from './partials/members.group';
import { navigation } from './partials/navigation';
import { parameter } from './partials/parameter';
import { type } from './partials/type';
import { typeAndParent } from './partials/typeAndParent';
import { typeParameters } from './partials/typeParameters';
import { indexTemplate } from "./templates";
import { reflectionTemplate } from "./templates/reflection";

const _bind = <F, L extends Array<unknown>, R>(
  fn: (first: F, ...rest: L) => R,
  first: F,
) => {
  return (...rest: L) => fn(first, ...rest);
};

export class CustomThemeRenderContext extends DefaultThemeRenderContext {
  /* Templates/Layouts */
  override reflectionTemplate = _bind(reflectionTemplate, this);
  override indexTemplate = _bind(indexTemplate, this);
  override defaultLayout = _bind(defaultLayout, this);

  /* Partials */
  override analytics = _bind(analytics, this);
  override breadcrumb = _bind(breadcrumb, this);
  override comment = _bind(comment, this);
  override footer = _bind(footer, this);
  override header = _bind(header, this);
  override hierarchy = _bind(hierarchy, this);
  override index = _bind(index, this);
  override member = _bind(member, this);
  override memberDeclaration = _bind(memberDeclaration, this);
  override memberGetterSetter = _bind(memberGetterSetter, this);
  override memberReference = _bind(memberReference, this);
  override memberSignatureBody = _bind(memberSignatureBody, this);
  override memberSignatureTitle = _bind(memberSignatureTitle, this);
  override memberSignatures = _bind(memberSignatures, this);
  override memberSources = _bind(memberSources, this);
  override members = _bind(members, this);
  override membersGroup = _bind(membersGroup, this);
  override navigation = _bind(navigation, this);
  override parameter = _bind(parameter, this);
  override type = _bind(type, this);
  override typeAndParent = _bind(typeAndParent, this);
  override typeParameters = _bind(typeParameters, this);
}
