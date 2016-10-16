/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SimpleTempHumid', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TemperatureC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    HumidityP: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'SimpleTempHumid'
  });
};
