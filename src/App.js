import React, {Component} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

class App extends Component{

    state = {
        items : 0
    }

    addToCart(){
        this.setState({
            items : this.state.items + 1
        })
    }

    status(){
        if (this.state.items <= 0){
            return true
        }
        else {
            return false
        }
    }

    remove(){
        ( this.status() ? this.itemTrue() : this.itemFalse())
    }

    itemFalse(){
        this.setState({
            items: this.state.items - 1
        })
    }

    itemTrue(){
        this.setState({
            items : 0
        })
    }

    reset(){
        this.setState({
            items : 0
        })
    }

    render(){
        return (
            <div style={{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'center'
            }}>

            <div style={{
                display : 'flex',
                flexDirection: 'row'
            }}>
                <ShoppingCartIcon style={{
                    fontSize : '80px'
                }} />

                <h2 style={{fontSize : '30px'}}>{this.state.items} item(s)</h2>

            </div>

                <Button onClick={() => this.addToCart()} style={{
                    margin : '8px 10px'
                }} variant="contained" color="primary">
                    <AddShoppingCartIcon />Add to Cart
                </Button>

                <Button onClick={() => this.remove()} style={{
                    margin : '8px 10px'
                }} variant="contained" color="primary">
                   <DeleteIcon /> Remove
                </Button>

                <Button onClick={() => this.reset()} style={{
                    margin : '8px 10px'
                }} variant="contained" color="primary">
                   <RemoveShoppingCartIcon /> Reset
                </Button>

            </div>
        )
    }
}

export default App;