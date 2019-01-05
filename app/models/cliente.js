var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('cliente', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      celular: DataTypes.STRING,
      whatsapp: DataTypes.BOOLEAN,
      endereco: DataTypes.STRING,
      cpf: DataTypes.STRING,      
    });
  
    return Cliente;
  }