import React from 'react';
import '../CSS/clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            time: new Date().toLocaleTimeString(),
            backgroundColor: '',
            fontColor:''
        })

    }
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

   
    updateClock() {

        let time = new Date()
        console.log(time)
        let hour = time.getHours()
        let minute = time.getMinutes()
        let second = time.getSeconds()
        let backgroundStr = '';
        let fontStr = `${hour}${minute}9${second}`
console.log(fontStr)

        if (hour < 10) {
            backgroundStr += `0${hour}`
        } else {
            backgroundStr += `${hour}`
        }

        if (minute < 10) {
            backgroundStr += `0${minute}`
        } else {
            backgroundStr += `${minute}`
        }

        if (second < 10) {
            backgroundStr += `0${second}`
        } else {
            backgroundStr += `${second}`
        }

        this.setState({
            time: new Date().toLocaleTimeString(),
            backgroundColor: backgroundStr,
            fontColor:fontStr
        })
    }
    render() {
        const { time, backgroundColor/*,fontColor*/ } = this.state
        return (
            <div className='clock' style={{ backgroundColor: `#${backgroundColor}` }}>
                <div className='time'>
                    <p /*style={{ color: `#${fontColor}` }}*/>{time}</p>
                </div>
            </div>
        )
    }
}
export default Clock;