import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class LoadingScreen extends React.Component {

    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        const container = node.querySelector(".container");
        const classNames = ["warlock", "titan", "hunter", "default"];
        let i = 0;
        const changeClass = () => {
          container.classList.remove(classNames[i]);
          i = i < classNames.length - 1 ? i + 1 : 0;
          container.classList.add(classNames[i]);
        };
        
        setInterval(changeClass, 3000);
    }
    render() {
        return (
            <div>
                <div className="container warlock">
                <div className="circle c1"></div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
                <div className="circle c4"></div>
                <div className="shape_group">
                    <div className="shape s1"></div>
                    <div className="shape s2"></div>
                    <div className="shape s3"></div>
                    <div className="shape s4"></div>
                    <div className="shape s5"></div>
                    <div className="shape s6"></div>
                </div>
                <div className="line_group g1">
                    <div className="line l1"></div>
                    <div className="line l2"></div>
                    <div className="line l3"></div>
                    <div className="line l4"></div>
                </div>
                <div className="line_group g2">
                    <div className="line l1"></div>
                    <div className="line l2"></div>
                    <div className="line l3"></div>
                    <div className="line l4"></div>
                </div>
                <div className="line_group g3">
                    <div className="line l1"></div>
                    <div className="line l2"></div>
                    <div className="line l3"></div>
                    <div className="line l4"></div>
                </div>
                </div>
            </div>
            );
    }
}
export default LoadingScreen
