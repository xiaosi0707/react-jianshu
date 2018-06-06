/*Created by SmallFour on 2018/6/6*/
import Nav from 'src/layout/nav/nav'
import L from './layout.scss'
export default class Layout extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={L.layout}>
                <h1><Nav/></h1>
            </div>
        )
    }
}