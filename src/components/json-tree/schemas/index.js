import schemaArray from './array.json'
import schemaBoolean from './boolean.json'
import schemaInteger from './integer.json'
import schemaNumber from './number.json'
import schemaObject from './object.json'
import schemaString from './string.json'
import jsonSchema from './json_schema.json'
import sampleOrder from './sample_order.json'
import questionnaireItem from './fhir_item.json'

export default {
  'string': schemaString,
  'integer': schemaInteger,
  'number': schemaNumber,
  'boolean': schemaBoolean,
  'object': schemaObject,
  'array': schemaArray,
  'json_schema': jsonSchema,
  'fhir_item': questionnaireItem,
  'sample_order': sampleOrder
}
