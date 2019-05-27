import BaseType from  './definitions/base'
import { BooleanType } from  './definitions/boolean'
import { EmptyType } from  './definitions/empty'
import { CollectionType, collSubTypes } from  './definitions/collection'
import { MapType, mapSubTypes } from  './definitions/map'
import { NumberType, numberSubTypes  } from  './definitions/number'
import { StringType, stringSubTypes } from  './definitions/string'

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