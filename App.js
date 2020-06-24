import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: " ",
      vowel: 0,
      consonant: 0,
      char: 0,
      name: [],
      temp: "",
      
    }
  }


  analyze = () => {
    
    
    char=this.state.word.length;
    let name=(this.state.word).split("");
    
    let vowel=0;
    let consonant=0;

  
    for (var i=0; i<name.length; i++){
      if (name[i] == ("a")|| name[i] == ("A") || name[i] == ("e") || name[i] == ("E") || name[i] == ("i") || name[i] == ("I") || name[i] == ("o") || name[i] == ("O")
      || name[i] == ("u") || name[i] == ("U")) {
        vowel++;
      }
      else{
        consonant++;
      }
    }

    this.setState({vowel: vowel});
    this.setState({consonant: consonant });
    this.setState({char: char });


  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Word'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.analyze} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.instructions}>Word: {this.state.word}</Text>
        <Text style={Styles.instructions}>No Of Consonants: {this.state.consonant}</Text>
        <Text style={Styles.instructions}>No Of Vowels: {this.state.vowel}</Text>
        <Text style={Styles.instructions}>No Of Characters: {this.state.char}</Text>
        </View>
      </View>
    );
  }
}
