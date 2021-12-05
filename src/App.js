
import './App.css';
import {Button, Input, Switch} from 'react-ui-xmui';
import { Icon } from 'react-ui-xmui';

import Test from './test'
function App() {

  return (
    <div className="App">
      <Button buttonType="primary">你好</Button>
      <Icon name="menu" />
      <Button icon={<Icon name={'download'} />}/>
      <Switch/>
      {/*<Test/>*/}
    </div>
  );
}
export default App;
