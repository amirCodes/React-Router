import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>

          <Menu.Item
           // className="menu-item" activeClassName="ant-menu-item-selected"
            key="home"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to="/">
              <span>Home</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          >
          <Link to="/projects">
            <span>Projects</span>
          </Link>
        </Menu.Item>
          <Menu.Item
            key="profile"
            name="profile"
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          >
            <Link to="/profile">
              <span>Profile</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="aboutMe"
            name='aboutMe'
            active={activeItem === 'aboutMe'}
            onClick={this.handleItemClick}
          >
            <Link to="/aboutMe">
              <span>About Me</span>
            </Link>
          </Menu.Item>


        </Menu>
      </Segment>
    )
  }
}
