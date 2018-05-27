/**
 * Created by Administrator on 2018/5/27.
 */

import React, { Component } from 'react';

function getNotificationsCount(){
    return 2;
}
class Notification extends Component {
    render () {
        // TODO
        const count = getNotificationsCount();
        return (
            <div>
                <div>
                    {count>0 ? <span>有(count)条未读消息</span> :
                        <span>没有未读消息</span>}
                </div>
            </div>
        )
    }
}

export default Notification;
