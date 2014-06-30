/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'mysql',
  tableName: 'user',
  migrate: 'safe',
  schema: true,  //this only saves the available atributes and discards the rest that are not available
  attributes: {
    id:{
      type: 'integer',
      required: true,
      unique: true
    },
    email: {
      type: 'email',
      required:true
    }
  },
}
