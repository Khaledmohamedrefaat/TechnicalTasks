import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Parts.css';

class Parts extends Component {
    shouldComponentUpdate() {
        return false; // Will cause component to never re-render.
    }
    render(){
        return(
            <div class = "belowEverything" >
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    value_area: 200 
                                }
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
export default Parts;

