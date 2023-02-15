import React, { useEffect, useState } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [col, setCol] = useState("green");
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    if(count===11){
      setCount(0)
    }
  
      if ( count<5) {
    setCol("green")
 
 } else if (count<10) {
    setCol("blue")
 }
 else{
  setCol("red")
 }
 console.log(col)
  },[count,col]);


  return (
    <Segment textAlign='center' style={{ padding: '130px', width:'100wh' , height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.8' }}>
      <Header as='h1'style={{padding : '30px', color: 'black'}}>COUNTER APPLICATION</Header>
      <Segment textAlign='center' style={{ padding: '40px', boxShadow: '#ccc',height: '55%',width: '40%', left : '373px' }}>
        <Header as='h2'>Count</Header>
        <h1 style={{color: col}}>{count}</h1>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button color='green' content='Increment' onClick={increment}/>
            </Grid.Column>
            <Grid.Column>
              <Button color='red' content='Decrement' disabled={count === 0} onClick={decrement} />
            </Grid.Column>
            <Grid.Column>
              <Button color='blue' content='Reset' disabled={count === 0} onClick={reset} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h2' style={{padding : '70px', right :'9px', color: 'white'}}>Done by : Nikhil Gupta - 12101566</Header>
    </Segment>
  );
};

export default App;