import React from "react"
import ReactDOM from "react";

import "./billiards.css"

interface IBilliardsProps
{
    
}

interface IBilliardsState {
    ballX: number;
    ballY: number;

    velX: number;
    velY: number;

    worldWidth: number;
    worldHeight: number;
}


export class BilliardsPanel extends React.Component<IBilliardsProps, IBilliardsState>
{
    mainLoop: NodeJS.Timer;
    selfRef: React.RefObject<HTMLDivElement>;
    constructor(props: IBilliardsProps)
    {
        super(props);
        this.state = {
            ballX: 0,
            ballY: 0,

            velX: 1,
            velY: 1,

            worldWidth: 50,
            worldHeight: 50,
        }

        this.selfRef = React.createRef<HTMLDivElement>();
    }
    
    componentDidMount(): void {
        this.mainLoop = setInterval(
            () => {
                this.tick();
            }, 10
        );
    }

    componentWillUnmount(): void {
        clearInterval(this.mainLoop);
    }
    
    tick()
    {
        
    }

    render() {
        let width = 0;
        let height = 0;
        if(this.selfRef.current)
        {
            width = this.selfRef.current.offsetWidth;
            height = this.selfRef.current.offsetHeight;

            let ballScreenX = width/2 + (this.state.ballX/(this.state.worldWidth/2))*width/2;
        }
        return <div id="mainCanvas" ref={this.selfRef} style={{}}>
            <div id="billiardBall" style={{}}/>
            <h1>{width}</h1>
            <h1>{height}</h1>
        </div>
    }
}