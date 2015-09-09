import React from 'react'

/* globals document */
export default class Context extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    document.addEventListener('contextmenu', this.onContextMenu)
    document.addEventListener('click', this.onClick)
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.onClick, false);
    document.removeEventListener('contextmenu', this.onContextMenu, false);
  }

  onContextMenu = (e) => {
    e.preventDefault()
    if(this.state.active) return
    this.setState({active: true})
    if(this.props.onShow) this.props.onShow(e)
    React.findDOMNode(this.refs.menu).style.top = e.clientY + 5
    React.findDOMNode(this.refs.menu).style.left = e.clientX + 10
  }

  onClick = (e) => {
    let isMenu = e.target.getAttribute('data-context')
    if(isMenu !== 'true') this.setState({active: false})
  }

  renderChildren(){
    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        ...child.props,
        'data-context': true
      })
    });
  }

  render(){
    if(!this.state.active) return null

    let style = this.props.style || {}
    style.position = 'absolute'
    style.zIndex = 999999

    return (
      <div ref="menu" data-context="true" style={style} {...this.props}>
        {this.renderChildren()}
      </div>
    )
  }
}
