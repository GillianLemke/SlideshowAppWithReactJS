const click = (state = {}, action) => {
  switch(action.type) {
    case 'CLICK_TITLE':
      return {
        title: action.title,
        
      }
  }
}

const clickTitle = (state = [], action) => {
  switch (action.type) {
    case 'CLICK_TITLE':
      return [
        ...state,

      ]
  }
}
