import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
// 在API資料夾下，npm install axios
import axios from 'axios';

class App extends Component {
  state = {
    values: []
  }
  // 在class類別裡設定componentDidMount()方法的話，會在該class建構完組件的時候被執行
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((respones) => {
      console.log(respones);
      // To modify the state
      this.setState({
        values: respones.data
      })
    })
  }
  render(){
    return (
      <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
            {/* 給予value一個any的型別是因為在這裡我們不使用typescript，只使用單純的js，如果沒有給則value.name就會報錯(因為安裝了typescript) 
            所以如果不想使用就給予any的型別。 */}
            {this.state.values.map((value: any) =>(
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
        </List>
      </div>
    );
  }
  
}

export default App;
