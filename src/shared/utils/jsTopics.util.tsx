import FunctionsDetail from "../../app/components/subjects/js/FunctionsDetail";

export enum JsTopics {
  SEMANTICS = 'semantics',
  FUNCTION_TYPES = 'functionTypes',
  DATA_TYPES = 'dataTypes',
  SCOPE = 'scope',
  CLOSURES ='closures',
  THIS = 'this',
  CALL_BIND_APPLY ='callBindApply',
  COERCION = 'coercion',
  HOISTING = 'hoisting',
  DESTRUCTURING = 'destructuring',
  REST_SPREADING = 'restSpreading',
  TEMPLATE_STRINGS = 'templateStrings',
  OBJECT_COPY = 'objectCopy',
  OBJECT_DESCRIPTORS = 'objectDescriptors',
  EVENT_LOOP = 'eventLoop',
  EVENT_HANDLING = 'eventHandling',
  DOM_VS_DOCUMENT = 'domVsDocument',
  DOM_MANIPULATION = 'domManipulation',
  EXCEPTIONS = 'exceptions',
  ES_MODULES = 'esModules',
  REQUIRE_JS ='requireJS',
}

export const jsTopics = [
  {
    component: '',
    propertyName: JsTopics.SEMANTICS,
    label: 'Sintaxis/Semantics',
  },
  {
    component: <FunctionsDetail/>,
    propertyName: JsTopics.FUNCTION_TYPES,
    label: 'Functions (IIFE/anon/arrow)',
  },
  {
    component: '',
    propertyName: JsTopics.DATA_TYPES,
    label: 'Data(Var/Types/Mgmt)',
  },
  {
    component: '',
    propertyName: JsTopics.SCOPE,
    label: 'Scope',
  },
  {
    component: '',
    propertyName: JsTopics.CLOSURES,
    label: 'Closures',
  },
  {
    component: '',
    propertyName: JsTopics.THIS,
    label: 'This',
  },
  {
    component: '',
    propertyName: JsTopics.CALL_BIND_APPLY,
    label: 'Call/Bind/Apply',
  },
  {
    component: '',
    propertyName: JsTopics.COERCION,
    label: 'Coercion',
  },
  {
    component: '',
    propertyName: JsTopics.HOISTING,
    label: 'Hoisting',
  },
  {
    component: '',
    propertyName: JsTopics.DESTRUCTURING,
    label: 'Destructuring',
  },
  {
    component: '',
    propertyName: JsTopics.REST_SPREADING,
    label: 'Rest/Spreading',
  },
  {
    component: '',
    propertyName: JsTopics.TEMPLATE_STRINGS,
    label: 'Template Strings',
  },
  {
    component: '',
    propertyName: JsTopics.OBJECT_COPY,
    label: 'Object copy',
  },
  {
    component: '',
    propertyName: JsTopics.OBJECT_DESCRIPTORS,
    label: 'Object descriptors',
  },
  {
    component: '',
    propertyName: JsTopics.EVENT_LOOP,
    label: 'Event Loop',
  },
  {
    component: '',
    propertyName: JsTopics.EVENT_HANDLING,
    label: 'Event Delegation / Event Handling / Bubbling',
  },
  {
    component: '',
    propertyName: JsTopics.DOM_VS_DOCUMENT,
    label: 'Dom vs Document',
  },
  {
    component: '',
    propertyName: JsTopics.DOM_MANIPULATION,
    label: 'Dom Manipulation',
  },
  {
    component: '',
    propertyName: JsTopics.EXCEPTIONS,
    label: 'Exceptions',
  },
  {
    component: '',
    propertyName: JsTopics.ES_MODULES,
    label: 'ES Modules',
  },
  {
    component: '',
    propertyName: JsTopics.REQUIRE_JS,
    label: 'Require JS',
  },
];
