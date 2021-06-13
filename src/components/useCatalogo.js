import React from 'react';


import CatalogoCard from './CatalogoCard'

function useCatalogo(catalogos) {

    const Catalogo = () => (

                        catalogos.map(catalogo => 
                            <CatalogoCard 
                                descripcion={catalogo.id} 
                            />
                    )

    )

  return { Catalogo }
    
}

export default useCatalogo;
