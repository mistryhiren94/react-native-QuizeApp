import React, {Component} from 'react';
import { View, CheckBox } from "react-native";
import { connect } from 'react-redux';
import { Button, Card, CardItem, Body, Text } from "native-base";
import { updateMarks } from '../../redux/actions/quize';
import styles from './style'
import HeaderContainer from '../../components/Header/index'

class ThirdScreen extends Component{
  constructor(props){
		super(props);
		this.state = {
      marks: this.props.marks || 0,
      selected: null,
      answer: 0,
      questions: [
        {
          index: 0,
          title: 'Phonograph'
        },
        {
          index: 1,
          title: 'Lightbulb'
        },
        {
          index: 2,
          title: 'Motion Picture Cameras'
        }
      ]
    }
    alert(this.state.marks);
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer title="Third Question" />
        <View style={styles.alignCenter}>
          <Card>
            <CardItem header bordered>
              <Text style={{color: 'rgb(255, 2, 2)'}}>Question</Text>
            </CardItem>
            <CardItem bordered>
            <Body>
              <Text>First Invention by Thomas Edison?</Text>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                {this.state.questions.map((element, key) => {
                  return (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <CheckBox value={this.state.selected === key ? true : false} style={{color: 'red'}} onChange={() => this.setState({selected: key})} /><Text>{element.title}</Text>
                    </View>
                  )
                })}
              </View>
            </Body>
            </CardItem>
            <CardItem footer bordered style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              <Button style={styles.buttonStyle}onPress={() => this.props.history.push('/final')}>
                <Text style={styles.buttonTextStyle}>Next</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    marks: state.quize.marks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (mark) => {
      dispatch(updateMarks(mark))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen)