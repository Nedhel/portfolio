export function Contact(){
    const desserts = [
        {
          title: 'Chocolate Cake',
          description: 'Chocolate cake is a cake flavored with melted chocolate',
          calories: 500,
        }
      ];
      
      const newDesserts = desserts.map((dessert) => {
        return {   
            ...dessert,       
            title: dessert.title.toUpperCase(),
            kCal: dessert.calories / 1000,
          
        };
      });
      console.log(newDesserts)
    return(
        null
    )
}