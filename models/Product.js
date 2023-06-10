module.exports = (Sequelize, DataTypes) => {
   const Product = sequelize.define('Product', {
    id:{
      allowNull:false,      
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    name:{
      allowNull:false,
      type:DataTypes.STRING
    },
    brand:{
      allowNull:false,
      type:DataTypes.STRING
      
    },
    description:{
      type:DataTypes.TEXT,
    },
    createdAt:{
      allowNull:false,
      type:DataTypes.DATE      
    },
    updatedAt:{
      allowNull:false,
      type:DataTypes.DATE      
    }
   },{
    tableName:'products'
   });

 return Product;
};
