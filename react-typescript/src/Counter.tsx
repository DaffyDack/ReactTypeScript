import React, {Component} from 'react';


type CounterState = {
    count: number
}
type CounterProps = {
    readonly title?: string
}

class Counter extends Component<CounterProps, CounterState> {

    constructor(props: CounterProps) { // типизируем пропсы
        super(props)
        this.state = {
            count: 0
        }
    }
    // state = {
    //     count: 0
    // }


    // Должен вернуть обьект состояния, либо же Null
    // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    //     return false ? {count: 2} :  null
    // }

    // componentDidMount(): void { // служит для дополнитеьных вычислений перед итоговым рендеригом
        
    // }

    // // На основании внутренних вычислений определяет, должен ли компонент обновиться или нет 
    // shouldComponentUpdate(nextProps: Readonly<CounterProps>, nextState: Readonly<CounterState>, nextContext: any): boolean {
    //     return true
    // }


    handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX} ${e.clientY}`)
        this.setState(({count}) => ({
            count: ++count
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
                <a href="#" onClick={this.handleClick}><p>!!</p></a>
            </div>
        )
    }
}

export default Counter
