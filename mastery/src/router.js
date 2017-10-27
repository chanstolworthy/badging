import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../src/App'
import AddItem from './components/AddItem'
import Class from './components/class'
const Props = require('./components/Props')




export default(
    <Switch>
        <Route exact path='/' render={()=>{
            return(
                <App>
                    <Switch>
                        {Props}
                    <Route path='/add-item' component={AddItem} />
                    </Switch>
                </App>
            )
        }} />
        
    </Switch>
)