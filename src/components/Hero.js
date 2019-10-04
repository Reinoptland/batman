import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hero extends Component {
    render(){
        console.log("PROPS of HERO", this.props)
        const { name, health, weapon } = this.props.batman
        return <div>
            <h1>{name}</h1>
            <p>Health: {health}</p>
            <p>Weapon: {weapon.type}</p>
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