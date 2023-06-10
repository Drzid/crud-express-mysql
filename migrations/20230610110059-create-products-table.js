'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('products', {
    id:{
      allowNull:false,      
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER
    },
    name:{
      allowNull:false,
      type:Sequelize.STRING
    },
    brand:{
      allowNull:false,
      type:Sequelize.STRING
      
    },
    description:{
      type:Sequelize.TEXT,
    },
    createdAt:{
      allowNull:false,
      type:Sequelize.DATE      
    },
    updatedAt:{
      allowNull:false,
      type:Sequelize.DATE      
    }
   },
  {
    charset:'utf8mb4',
collate:'utf8mb4_unicode_ci',
engine:'InnoDB',
  });
},
  down: async (queryInterface, Sequelize)=>{
   await queryInterface.dropTable('products');
  }
};
