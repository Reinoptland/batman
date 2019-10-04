import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hero extends Component {
    rest = () => {
        console.log('Im tired man!')
        const action = {
            type: 'REST'
        }

        this.props.dispatch(action)
    }

    pickup = (weaponType, damage) => {
        console.log('hello')
        const action = {
            type: "PICKUP_WEAPON",
            payload: {
                type: weaponType,
                damage: damage
            }
        }

        this.props.dispatch(action)
    }

    render(){
        // console.log("PROPS of HERO", this.props)
        const { name, health, weapon, inventory } = this.props.batman

        return <div>
            <h1>{name}</h1>
            <p>Health: {health}</p>
            <p>Weapon: {weapon.type}</p>
            <div>
                <h3>Inventory</h3>
                { inventory.map(item => {
                    return <div>
                        <p>TYPE: {item.type}</p>
                        <p>DAMAGE: {item.damage}</p>
                    </div>
                }) }
            </div>
            <button onClick={this.rest}>REST</button>
            <button onClick={() => this.pickup('lollipop', 1)}>Pickup Lollipop</button>
            <button onClick={() => this.pickup('tuba', 99)}>Pickup Tuba</button>
        </div>
    }
}


const mapStateToProps = (state) => {
    console.log('STATE OF THE STORE IN MSTP', state)

    return {
        batman: state
    }
}

export default connect(mapStateToProps)(Hero)