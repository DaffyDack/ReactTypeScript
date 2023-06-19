import React from 'react';

// const Title:React.FC<{title: string, children: string}> = ({title, children}) => <h1>{title}{children}</h1>
const Title:React.FC<{title: string}> = ({title}) => <h1>{title}</h1>
const App = () => <Title title='test'/>

export default App;
