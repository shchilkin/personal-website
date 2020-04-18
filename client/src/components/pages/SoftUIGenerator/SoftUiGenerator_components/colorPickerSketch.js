'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPickerSketch extends React.Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {
        const colorStyle = {
            color: {
                width: '36px',
                height: '36px',
                border:'3px solid #000',
                display: 'inline-block',
                borderRadius: '10px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
            }
        }

        const styles = reactCSS({
            'default': {
                color: {
                    width: '30px',
                    height: '30px',
                    display: 'inline-block',
                    borderRadius: '12px',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                },
                swatch: {
                    height:'36px',
                    width:'36px',
                    padding: '1px',
                    borderRadius: '12px',
                    boxShadow: 'rgb(173, 159, 217) 5px 5px 30px 0px, rgb(214, 196, 255) -5px -5px 30px 0px',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div style={{display: 'inline-block', verticalAlign:'-50%'}}>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                    <div style={ colorStyle.color } />
                    {/*<div style={ styles.color } />*/}
                </div>
                { this.state.displayColorPicker ? <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ this.handleClose }/>
                    <SketchPicker
                        disableAlpha={true}
                        color={ this.state.color }
                        onChange={ this.handleChange }
                        presetColors ={['#D0021B', '#F5A623', '#F8E71C']}
                    />
                </div> : null }

            </div>
        )
    }
}

export default ColorPickerSketch