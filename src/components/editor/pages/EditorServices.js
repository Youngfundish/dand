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
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Teaser</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {
          products != null ?
          products.map(product => (
            <tr>
      <th scope="row" key={product.id}>{product.id}</th>
      <td>{product.title}</td>
      <td>{product.teaser}</td>
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