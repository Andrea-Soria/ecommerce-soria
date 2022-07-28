let productos = [
    { id: '1', title: 'Comedero Patitas', description: 'Acero inoxidable', price: 2500, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/397/925/products/photoroom-20211117_1749311-c772b3057855239df316371839721651-640-0.png'},
    { id: '2', title: 'Cuchita Redonda', description: 'Polar de primera calida', price: 3000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_711546-MLA43531241684_092020-F.webp'},
    { id: '3', title: 'Pechera', description: 'Regulable de neoprene', price: 1500, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_660540-MLA48704408934_122021-F.webp' },
    { id: '4', title: 'Huesitos', description: 'Limpia dientes', price: 1000, pictureUrl: 'https://img-aws.ehowcdn.com/750x400p/photos.demandstudios.com/51/17/fotolia_1339025_XS.jpg'}
]

export const getFetch = (id) => {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve( productos.find( producto => producto.id === id ) )
            } else {
                resolve(productos)                
            }
        }, 2000)
    })
}


