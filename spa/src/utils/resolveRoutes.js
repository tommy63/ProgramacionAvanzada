const resolveRoutes = (route) => {

    if (route.length <= 24)
    {

        let validRoute = (route) =>
        {
            console.log(route)
            if(route == '/' 
                || route == '/lowestprice' 
                || route == '/highestprice')
            {  
                return route
            }
            else
            {
                return '/:id'
            }
        }
       
        return validRoute(route)
    }

    return `/${route}`
};

export default resolveRoutes