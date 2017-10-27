import React, { Component } from 'react';
import '../App.css'

class Class extends Component {
    constructor() {
        super();

        this.state = {
            item_name: '',
            item_price: '',
        }
    }
    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <input placeholder='Item Name' />
                        <input placeholder='Item Price' />
                        <button> Add Item </button>
                    </div>
                </div>
                <div className='class-flexbox-container'>
                    <div className='app-title'>FlexBox</div>
                    <div>
                        <div id='class-flexbox1'></div>
                        <div id='class-flexbox2'></div>
                    </div>
                    <div>
                        <div id='class-flexbox3'></div>
                        <div id='class-flexbox4'></div>
                    </div>
                </div>
                <div>
                    <div className='app-title'>Background</div>
                    <div className='class-background_image'></div>
                    <div class="class-box-sizing-container">
                        <div class="boxes">BOX SIZING 1</div>
                        <div class="boxes">BOX SIZING 2</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class='class-position'>
                            POSITION
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <input disabled='disabled' placeholder='disabled' className='input-dis'/>
                        <button className='button-focus'>Focus</button>
                        <button className='button-hover'>Hover</button>
                        <div className='button-nth-child'>
                            <div>PARTY</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='class-animations'>COOL THINGS</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Class;