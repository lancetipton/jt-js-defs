import GroupType from '../group'

class MapType extends GroupType {

  static priority = 1
  static eval = value => typeof value === 'object' && !Array.isArray(value)
  static defaultValue = (newType, schema, settings) => ({})
  
  constructor(config){
    super({ ...config })
  }

}

export default MapType