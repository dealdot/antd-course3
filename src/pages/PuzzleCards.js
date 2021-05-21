import React, { Component } from 'react';
import { Card, Button} from 'antd';
import {connect} from 'dva'
const namespace = 'puzzlecards'

//这个state是所有namespace下的集合，获取某个namesapce下的state只需要 state[namespace]指定即可
const mapStateToProps = (state) => {
    const cardList = state[namespace].data
    return {
      cardList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onClickAdd: (newCard) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard
            }
            dispatch(action)
            // dispatch({
            //     type: `${namespace}/queryInitCards`
            // })
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)

export default class PuzzleCardsPage extends Component {
    /*
  constructor(props) {
    super(props);
    this.counter = 100
    this.state = {
      cardList: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ],
    }
  }
  addNewCard = () => {
      //给setState传递一个回调函数，则state的值在回调里更新
      this.setState(prevState => {
          const prevCardList = prevState.cardList
          this.counter += 1
          const card = {
              id: this.counter,
              setup: 'bala bala',
              punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          return {
            cardList: prevCardList.concat(card) 
            //cardList: prevCardList.slice(0)
            //cardList: [...prevCardList].concat(card) 
          }
          
      },function(){
          //回调函数里state的值已经更新，说明setState是异步的
        //console.log(this.state.cardList)
      })
      //这里state里的值还没有更新
      //console.log(this.state.cardList)
    // const card = {
    //               id: this.counter,
    //               setup: 'bala bala',
    //               punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //           }
    //    this.setState({
    //     cardList: this.state.cardList.concat(card)
    //    })
    //    console.log(this.state.cardList)
  }
  */
  componentDidMount(){
   // this.props.onDidMount()
  }
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
            <Button onClick={ () => this.props.onClickAdd({
                setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                punchline: 'here we use dva',
            })}>添加卡片</Button>
        </div>
      </div>
    );
  }
}