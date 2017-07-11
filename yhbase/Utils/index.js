function addToPageContext(actions,pageContext) {
  Object.keys(actions).forEach(action => {
    pageContext[action] = actions[action].bind(pageContext);
  })
}

export {
  addToPageContext
}