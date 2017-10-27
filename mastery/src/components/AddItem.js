import React, { Component } from 'react';
import './addItem.css'
import { connect } from 'react-redux'
import { addItemCurrent, addItemCurrentPrice } from '../redux/reducer'
import axios from 'axios'
import {Link} from 'react-router'
import Props from './Props'
const Render = require('./render')



class AddItem extends Component {
    constructor() {
        super();

        this.state = {
            allItems:[],
            newItem: '',
            newPrice: 0,

        }
        this.makeAlert = this.makeAlert.bind(this)
    }
    

    addItemName(item) {
        console.log('ITEM NAME STATE', item)
        this.setState({
            newItem: item
        })
        this.props.addItemCurrent(item)
    }
    addItemPrices(prices) {
        console.log('ITEM PRICE STATE', prices)
        this.setState({
            prices: prices
        })
        this.props.addItemCurrentPrice(prices)
    }


    addNewItem(){
        let data={
            item_name: this.state.newItem,
            price: this.props.currentItemPrice *1
        }
        axios.post('http://localhost:3000/api/addproduct', data).then(response => {
            console.log("PRODUCT", response)
             })
                
    }

    componentWillMount(){
        axios.get('http://localhost:3000/api/getproducts').then(response=>{
            this.setState({
                allItems: response.data
            })
    })
}

changeName(id){
    let data={
        id: id,
        item_name: 'CHARLIE'
    }
    axios.put('http://localhost:3000/api/changename', data).then(response =>{
        alert('Name was change')
    })
}
deleteUser(id){
axios.delete('http://localhost:3000/api/bye/'+id).then(response =>{
    alert("SEE YA LATER")
})
}
makeAlert(){
    alert('USED BIND :)')
}


    render() {
        let mapProducts= 
            this.state.allItems.map((item, i) => {
                return(
                    <div key={i} className='map-items-container'>
                        <div>{item.item_name}</div>
                        <div>{item.price}</div>
                        <button value={item.id} onClick={()=>{this.changeName(item.id)}}>Change Name</button>
                        <button onClick={()=>{this.deleteUser(item.id)}}>DELETE</button>
                    </div>
                )
            })


        return (
            <div>
                <div className='add-item-container'>
                    <div>Adding Items</div>
                    <div className='add-item-inputs'>
                        <input placeholder='item name' onChange={(e)=>{this.addItemName(e.target.value)}}/>
                        <input type='number' placeholder='item price'  onChange={(e)=>{this.addItemPrices(e.target.value)}}/>
                        <button onClick={()=>{this.addNewItem()}}>Submit</button>
                    </div>
                    <div>
                        <div>
                            <div>Items</div>
                            <div>{mapProducts}</div>
                        </div>
                    </div>
                </div>
                <Props items={'PASSING PROPS IS COOL'}
                makeAlert={this.makeAlert} />

            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {addItemCurrent, addItemCurrentPrice})(AddItem);