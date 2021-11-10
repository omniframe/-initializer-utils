import { DefaultThemeRenderContext, JSX } from 'typedoc';
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

function bind<F, L extends Array<unknown>, R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

export class CustomThemeRenderContext extends DefaultThemeRenderContext {
  override reflectionTemplate = bind(reflectionTemplate, this);
  override indexTemplate = bind(indexTemplate, this);
  override defaultLayout = bind(defaultLayout, this);
  
  override analytics = bind(analytics, this);
  override breadcrumb = bind(breadcrumb, this);
  override comment = bind(comment, this);
  override footer = bind(footer, this);
  override header = bind(header, this);
  override hierarchy = bind(hierarchy, this);
  override index = bind(index, this);
  override member = bind(member, this);
  override memberDeclaration = bind(memberDeclaration, this);
  override memberGetterSetter = bind(memberGetterSetter, this);
  override memberReference = bind(memberReference, this);
  override memberSignatureBody = bind(memberSignatureBody, this);
  override memberSignatureTitle = bind(memberSignatureTitle, this);
  override memberSignatures = bind(memberSignatures, this);
  override memberSources = bind(memberSources, this);
  override members = bind(members, this);
  override membersGroup = bind(membersGroup, this);
  override navigation = bind(navigation, this);
  override parameter = bind(parameter, this);
  override type = bind(type, this);
  override typeAndParent = bind(typeAndParent, this);
  override typeParameters = bind(typeParameters, this);
}
