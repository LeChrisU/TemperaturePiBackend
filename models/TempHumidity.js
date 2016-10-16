/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TempHumidity', {
    ID: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'TempHumidity',
	timestamps: false
  });
};
