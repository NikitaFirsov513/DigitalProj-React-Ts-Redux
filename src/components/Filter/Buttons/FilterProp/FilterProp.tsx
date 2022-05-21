import "./FilterProp.scss"
import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PriceFilter from "./priceFilter/PriceFilter";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import DefaultFilter from "./DefaultFilter/DefaultFilter";



export default function FilterProp() {

    const [propState, setPropState] = useState(false);
    let mainParams = useSelector((state: RootState) => state.search.allParams).mainParams;
    let colorName = useSelector((state: RootState) => state.search.allParams).colorName;

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setPropState(open);
        };

    const toggle = (open: boolean) => {
        setPropState(open);
    }



    return (
        <div className='prop'>

            <IconButton onClick={e => toggle(true)}>

                <FilterAltIcon sx={{
                    color: "#151A40", width: "30px", height: "30px"
                }} />
            </IconButton>
            <SwipeableDrawer

                anchor={"right"}
                open={propState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box sx={{ width: "350px" }}>
                    <PriceFilter />
                    <DefaultFilter type="colorName" data={colorName} name="Цвета" />
                    {
                        Array.isArray(mainParams) ?
                            <>
                                {mainParams.map(e => {
                                    return (<DefaultFilter key={e.type} name={e.type} type={e.type} data={e.value} />)

                                })}
                            </>
                            :
                            <></>

                    }



                </Box>


            </SwipeableDrawer>
        </div>)
}

/*  const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
  });

  const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
          (event: React.KeyboardEvent | React.MouseEvent) => {
              if (
                  event &&
                  event.type === 'keydown' &&
                  ((event as React.KeyboardEvent).key === 'Tab' ||
                      (event as React.KeyboardEvent).key === 'Shift')
              ) {
                  return;
              }

              setState({ ...state, [anchor]: open });
          };

  const list = (anchor: Anchor) => (
      <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
      >
          <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                      <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                  </ListItem>
              ))}
          </List>
          <Divider />
          <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                      <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                  </ListItem>
              ))}
          </List>
      </Box>
  );

  return (
      <div>
          {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                  <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                  >
                      {list(anchor)}
                  </SwipeableDrawer>
              </React.Fragment>
          ))}
      </div>
  );*/
