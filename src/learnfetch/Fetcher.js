/**
 * Created by Administrator on 2018/6/3.
 */

import react,{Component} from 'react'
import PropTypes from 'prop-types'
import fetch from 'react-fetch'

class Fetcher extends Component{

    constructor(){

    }

    _fetch(){
        let url = 'https://www.baidu.com';
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'userName='+values.userName+'&password='+values.password,
        }).then(response => response.json()).then(function(res) {
            console.log('返回值[1代表登陆成功，0代表登陆失败]:')
            console.log(res)
            if(res===1){
                window.locaion.href="admin.html"
            }else{
                alert('登陆失败')
            }
            console.log(res.status);
        });
    }
}