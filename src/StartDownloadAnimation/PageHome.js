
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import StartDownloadAnimationComponent from './StartDownloadAnimationComponent';

type Props = {};
export default class PageHome extends Component<Props> {
    constructor(){
        super();
        this.state = {showAnime: false}
    }
  render() {
    return (
      <View style={{
          flex: 1
      }} >
            <StartDownloadAnimationComponent 
                ref={ref => this.texto = ref} 
                time={1000} //tempo em mls da animação
                initial={{x: 100, y: 50}} 
                final={{x: -10, y: 600}}>
                <View>
                    <Text>
                        Patrick Lobo
                    </Text>
                </View>
            </StartDownloadAnimationComponent>
            <StartDownloadAnimationComponent 
                ref={ref => this.animation = ref} 
                time={1000} //tempo em mls da animação
                initial={{x: 100, y: 50}} 
                final={{x: -10, y: 600}}>
                <View style={{
                    width: 75,
                    height: 75,
                    borderRadius: 200,
                    backgroundColor: 'black',
                }} >
                </View>
            </StartDownloadAnimationComponent>
        <View style={{
            margin: 10
        }} >
            <Button 
                title="Show View"
                color="#841584"
                onPress={()=>{
                    console.log(111);
                    this.animation.start();
                }}
                    />

        </View>
        <View style={{
            margin: 10
        }} >
            <Button 
                title="Show Text"
                color="#841584"
                onPress={()=>{
                    console.log(111);
                    this.texto.start();
            }} />

        </View>
        
      </View>
    );
  }
}


