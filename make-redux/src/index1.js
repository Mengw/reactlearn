/**
 * Created by Administrator on 2018/5/30.
 */


function renderApp (appState) {
    console.log('render app...')
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle (title) {
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content) {
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}