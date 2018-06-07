/*Created by SmallFour on 2018/6/6*/
import Nav from 'src/layout/nav/nav'
import F from './frame.scss'
export default class Layout extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={F.layout}>
                <h1><Nav/></h1>
            </div>
        )
    }
}