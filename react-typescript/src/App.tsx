// import React from 'react';
// import Counter from "./Counter";
// import Form from "./Form";
// import Typing from "./Typing"
// import MyComponentPortal from "./Portal";
// import ToogleButton from "./HOCs";

// функциональный компонент

// type TitleProps = {
//     title: string,
//     test?: string
// }

// // const Title:React.FC<{title: string, children: string}> = ({title, children}) => <h1>{title}{children}</h1>
// const Title = ({title}: TitleProps) => <h1>{title}</h1>
// const App = () => <Title title='test'/>



// const App = () => <Counter/>
// const App = () => <Form/>
// const App = () => <Typing/>
// const App = () => <MyComponentPortal/>
// const App = () => <Context/>
// const App = () => ToogleButton


import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App: React.FC = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default App;
