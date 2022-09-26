import getHash from "../utils/getHash";

const buscarProducto = (productos) => 
{
    const id = getHash();
    const producto = productos.find((element) => 
    {
      return element._id === id ? element : null;
    });
    return producto
};

export default buscarProducto;