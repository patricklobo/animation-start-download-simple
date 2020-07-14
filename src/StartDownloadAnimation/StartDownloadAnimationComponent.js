
import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {};
export default class StartDownloadAnimationComponent extends Component<Props> {

    constructor(){
        super();
        this.state = {
            zoom: 1,
            show: false,
            left: 0,
            top: 0
        }
    }

    incx = 1;
    incy = 1;
    inczoom = 1;



    calculetInc(){
        let time = this.props.time;
        let frame = time / 60;
        let sizey = this.props.initial.y - this.props.final.y;
        let sizex = this.props.initial.x - this.props.final.x;
        this.incy = sizey / frame;
        this.incx = sizex / frame;
        this.inczoom = 1 / frame;
    }

    async start(){
        this.calculetInc();
        this.setState({zoom: 1, show: true})
        await this.setState({
            top: this.props.initial.y,
            left: this.props.initial.x,
        });
        this.animate();
    }

    animate(){
        if(this.state.top <= this.props.final.y){
            this.setState({
                top: this.state.top - this.incy,
                left: this.state.left - this.incx,
                zoom: this.state.zoom - this.inczoom,
            })
            setTimeout(()=> this.animate(), (1000 / 60))
        } else {
            this.setState({show: false});
        }
    }

  render() {
    return (
        this.state.show ?
        <View style={{
            transform: [{ scale: this.state.zoom }],
            opacity: this.state.zoom,
            position: 'absolute',
            left: this.state.left,
            top: this.state.top
        }} >
            {
                this.props.children
            }
        </View> : false
    );
  }
}


