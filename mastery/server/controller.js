module.exports ={

    additem: (req, res, next) => {
        const db = req.app.get('db');
        const {item_name, price} = req.body
        console.log('req body',)

        db.addproduct([item_name, price])
        .then( () => res.status(200).send('ADDED') )
        .catch( () => res.status(500).send() );
    },
    getProducts: (req,res,next) => {
        const db = req.app.get('db');
        
        db.get_products()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },

    changename: (req, res,next) =>{
        const{id, item_name}=req.body
        const db = req.app.get('db');

        db.update_product(id, item_name)
        .then(() => res.status(200).send())
    },

    deleteItem: (req, res, next) =>{
        const db = req.app.get('db');
        
        db.delete_product(req.params.id)
        .then(()=> res.status(200).send())
    },

}