import React, { createContext, useState } from 'react';
import wheyprotein from '../imgs/wheyprotein-removebg-preview.png'

export const MyContext = createContext()

export const ContextPovider = ({ children }) => {

    const [products, setProducts] = useState([

        {
          productname: "Whey Protein",
          productprice: "50$",
          productdesc: "this is the best whey protein that u can buy in the world but it now",
          productimg: wheyprotein,
          condition: "new",
        },
      
      
        {
          productname: "Whey Protein 2",
          productprice: "40$",
          productdesc: "this is the best whey protein that u can buy in the world but it now",
          productimg: wheyprotein,
          condition: "new",
        },
      
      
        {
          productname: "Whey Protein 3",
          productprice: "60$",
          productdesc: "this is the best whey protein that u can buy in the world but it now",
          productimg: wheyprotein,
          condition: "old",
        },
      
      
        {
          productname: "Whey Protein 4",
          productprice: "80$",
          productdesc: "this is the best whey protein that u can buy in the world but it now",
          productimg: wheyprotein,
          condition: "sale",
        },
      
      
        {
          productname: "Whey Protein 5",
          productprice: "20$",
          productdesc: "this is the best whey protein that u can buy in the world but it now",
          productimg: wheyprotein,
          condition: "Supplements",
        }
      
      ])



    return (
        <>
        <MyContext.Provider value={[products, setProducts]}>
        {children}
        </MyContext.Provider>    
        </>
    );
};
