const menor = ( item1, item2 ) =>
{
    if ( item1.cost < item2.cost)
    {
        return -1;
    }
    if ( item1.cost > item2.cost)
    {
        return 1;
    }
    return 0;
}




const ordenarMenor = (objeto) =>
{
    return objeto.sort(menor)
}


export default ordenarMenor;
