import { Button } from "antd";
import React,{ Component } from "react";
import emitter from "./events.js"

export default class Boo extends Component{
    render(){
        const cb = (msg) => {
            return () => {
                // 触发自定义事件
                emitter.emit("callMe","Hello")
            }
        }
        return(
            <div>
                我是非嵌套 2 号
                <div>
                  <Button onClick = { cb("blue") }>点击我</Button>
                </div>
                
                
            </div>
        );
    }
}