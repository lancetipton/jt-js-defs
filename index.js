import BaseType from  './src/scripts/definitions/base'
import { BooleanType } from  './src/scripts/definitions/boolean'
import { EmptyType } from  './src/scripts/definitions/empty'
import { CollectionType, collSubTypes } from  './src/scripts/definitions/collection'
import { MapType, mapSubTypes } from  './src/scripts/definitions/map'
import { NumberType, numberSubTypes  } from  './src/scripts/definitions/number'
import { StringType, stringSubTypes } from  './src/scripts/definitions/string'

const types = {
  boolean: BooleanType,
  collection: CollectionType,
  empty: EmptyType,
  map: MapType,
  number: NumberType,
  string: StringType,
}
const subTypes = {
  collection: collSubTypes,
  map: mapSubTypes,
  number: numberSubTypes,
  string: stringSubTypes,
}


export default {
  BaseType,
  types,
  subTypes
}