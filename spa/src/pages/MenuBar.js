const MenuBar = async (totalProductos) =>
{

    const view = `<p class="Cantidad-Productos">${totalProductos} of ${totalProductos} products</p>
                    <p class="barra-MenuBar">|</p>
                    <p class="filtrado-por">Sort by:</p>
                    <section class="table-options-container">
                        <a href="" class="option-button">Most recent</a>
                        <a href="#/lowestprice" class="option-button">Lowest Price</a>
                        <a href="#/highestprice" class="option-button">Highest price</a>
                    </section>`;
    
    return view;
}

export default MenuBar;