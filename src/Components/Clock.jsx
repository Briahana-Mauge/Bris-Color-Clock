import React from 'react';
import '../CSS/clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            time: new Date().toLocaleTimeString(),
            backgroundColor: '',
            fontColor: ''
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
        let hour = time.getHours()
        let minute = time.getMinutes()
        let second = time.getSeconds()
        let backgroundStr = '';
        let fontStr = `${hour}${minute}${second}`
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
            fontColor: fontStr
        })
    }
    render() {
        const { time, backgroundColor/*,fontColor */} = this.state
        return (
            <div>
                <div className='clock' style={{ backgroundColor: `#${backgroundColor}` }}>
                    <p className = 'description'>Visualize time as color with <strong><em>Bri's Color Clock</em></strong>!</p>
                    <div className='time'>
                        <p /*style={{ color: `#${fontColor}` }}*/>{time}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clock;