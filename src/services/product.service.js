class Product{
    constructor(id,name,image,price,stock){
        this.id=id
        this.name=name
        this.image=image
        this.price=price
        this.stock=stock
    }
}

const products=[
    new Product(1,"Macbook Pro","",90000,0),
    new Product(2,"iPhone XS","",50000,10)
]

let count = products.length

exports.findAll = products

exports.findByPrice=(min,max)=>{
    const result=products.filter(product=>product.price>=min && product.price<=max)
    return result
}
exports.findById=(id)=>{
    const result=products.filter(product=>product.id==id)
    if(result.length>0){
        return result[0]
    }else{
        return null
    }
}

exports.addProduct=(req,res)=>{
    const {name,price,stock} = req.body
    count=count+1
    const product = new Product(count,name,"",price,stock)
    products.push(product)
    res.status(201).json(product)
}

exports.updateProduct=(req,res)=>{
    const id = req.params.id
    const index = products.findIndex(product=>product.id==req.params.id)
    if(index!==-1){
        const {name,price,stock} = req.body
        const product = new Product(Number(id),name,"",price,stock)
        products[index] = product
        res.json(product)
    }else{
        res.status(404).json({})
    }
}

exports.deleteProduct=(req,res)=>{
    const id = req.params.id
    const index = products.findIndex(product=>product.id==id)
    if(index!==-1){
        products.splice(index,1)
        res.status(204).json()
    }else{
        res.status(404).json({})
    }
}