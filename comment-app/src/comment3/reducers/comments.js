/**
 * Created by Administrator on 2018/6/2.
 */

/*
* reducer 就是用来描述数据的形态和相应的变更。新增和删除评论这两个操作是最明显的，
* 大家应该都能够轻易想到。还有一个，我们的评论功能其实会从 LocalStorage 读取数据，
* 读取数据以后其实需要保存到应用状态中。所以我们还有一个初始化评论的操作。所以目前能想到的就是三个操作：
*
*
*
* */

// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';


// reducer 
export default function (state, action) {
    // 防止state参数没有
    if (!state) {
        state = {comments: []}
    }

    switch (action.type) {
        case INIT_COMMENTS :
            // 初始化
            return {comments: action.comments}

        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.comment]
            }

            // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
        default:
            return state;
    }
}

// dispatch 的时候，都是直接手动构建对象：
//dispatch({ type: 'INIT_COMMENTS', comments })
/*
* 所谓 action creators 其实就是返回 action 的函数，这样我们 dispatch 的时候只需要传入数据就可以了：
 dispatch(initComments(comments))
 action creators 还有额外好处就是可以帮助我们对传入的数据做统一的处理；而且有了 action creators，代码测试起来会更方便一些。这些内容大家可以后续在实际项目当中进行体会。
*
* */

// action creators
export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
    return { type: DELETE_COMMENT, commentIndex }
}







