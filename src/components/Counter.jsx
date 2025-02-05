import React from 'react'
import {Button, Box} from '@mui/material';
import RichTextEditor from './RichTextEditor';

function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () =>count > 0 ? setCount(count-1) : setCount(0);
    const reset = () => setCount(0);

    const backgroundStyle = {
        background: `rgba(200, 0, 255, ${count*2 / 100})`
      };


  return (
    <>
    <Box fixed style={backgroundStyle}>
      <p style={{ marginBottom: '20px', fontSize: '24px', textAlign: 'center' }}>Count: {count}</p>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
      <Button style={{ backgroundColor: 'green', color: 'white' }} variant="contained" onClick={increment}>Increment</Button>
      <Button style={{ backgroundColor: 'blue', color: 'white' }} variant="contained" onClick={decrement}>Decrement</Button>
      <Button style={{ backgroundColor: 'red', color: 'white' }} variant="contained" onClick={reset}>Reset</Button>
    </div>
      <RichTextEditor />
    </Box>
    </>
  )
}

export default Counter