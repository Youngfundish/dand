import React, {useContext, useState, useEffect} from 'react'

import DbContext from '../context/DbContext';

const EditorServices = () => {
    
    const [products, setProducts] = useState();
    const context = useContext(DbContext);

    useEffect(() => {
        context.getProducts().then(x => setProducts(x))
    }, []);
        return ( 
            <>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          products != null ?
          products.map(product => (
            <tr>
      <th scope="row">{product.id}</th>
      <td>{product.title}</td>
      <td>{product.image}</td>
      <td>Edit Delete</td>
    </tr>
          ))
            : "Loading..."    }
   
   
  </tbody>
</table>


            </>
         );
    }

 
export default EditorServices;