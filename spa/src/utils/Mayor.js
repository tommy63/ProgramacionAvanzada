const mayor = ( item1, item2 ) =>
{
    if ( item1.cost > item2.cost)
    {
        return -1;
    }
    if ( item1.cost < item2.cost)
    {
        return 1;
    }
    return 0;
}



const ordenarMayor = (objeto) =>
{
    return objeto.sort(mayor)
}


export default ordenarMayor;