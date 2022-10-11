export const queries ={
    getAllProduct: 'SELECT * FROM Products',
    addNewProduct:'INSERT INTO Products (name, description,quantity) VALUES (@name,@description,@quantity)',
    getProducById: 'SELECT * FROM Products WHERE Id=@Id',
    deleteProduct:'DELETE FROM [webstore].[dbo].[Products] WHERE Id=@Id',
    getTotalProducts:'SELECT COUNT(*) FROM Products',
    updateProductById:'UPDATE [webstore].[dbo].[Products] SET Name=@name, Description=@description, Quantity=@quantity WHERE Id=@Id'
};