import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { FunctionComponent, useState } from 'react';
import { jsTopics } from '../../shared/utils/jsTopics.util';

interface TopicProps {
  selectTopic: ( topic:string ) => void;
}

const Navbar: FunctionComponent<TopicProps> = ({ selectTopic }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event:any) => {
    selectTopic(event.target.id);
    setAnchorEl(null);
  };

  return (
    <nav>
      <Button
        id="basic-button"
        aria-controls={open ? 'navbar' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Javascript
      </Button>
      <Menu
        id="navbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          jsTopics.map(item => <MenuItem key= {item.propertyName} id={item.propertyName} onClick={handleClose}>{item.label}</MenuItem>)
        }
      </Menu>
    </nav>
  );
};

export default Navbar;
