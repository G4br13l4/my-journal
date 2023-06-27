import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import List from '@mui/joy/List';
import React, { FunctionComponent } from 'react';
import ListItem from '@mui/joy/ListItem';
import IconButton from '@mui/joy/IconButton';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Highlight, themes } from 'prism-react-renderer';
import { syntaxExample } from './functionsDetailExamples.util';

const FunctionsDetail: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h4" component="div">
              IIFE (Immediately Invoked Function Expression) scoping usage
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Is a JavaScript function that runs as soon as it is written (defined). You can use arrow syntax, function declaration or async function.
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={syntaxExample}
          language="tsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
            Usage
            </Typography>
          </Grid>
          <Grid item>
          <Box
          sx={{
            width: '70%',
            pl: '24px',
          }}
          >
            <List
              size="sm"
              sx={(theme) => ({
                // Gatsby colors
                '--joy-palette-primary-plainColor': '#8a4baf',
                '--joy-palette-neutral-plainHoverBg': 'transparent',
                '--joy-palette-neutral-plainActiveBg': 'transparent',
                '--joy-palette-primary-plainHoverBg': 'transparent',
                '--joy-palette-primary-plainActiveBg': 'transparent',
                [theme.getColorSchemeSelector('dark')]: {
                  '--joy-palette-text-secondary': '#635e69',
                  '--joy-palette-primary-plainColor': '#d48cff',
                },
                '--List-insetStart': '32px',
                '--ListItem-paddingY': '0px', 
                '--ListItem-paddingRight': '16px',
                '--ListItem-paddingLeft': '21px',
                '--ListItem-startActionWidth': '0px',
                '--ListItem-startActionTranslateX': '-50%',
                // [`& .${listItemButtonClasses.root}`]: {
                //   borderLeft: '1px solid',
                //   borderColor: 'divider',
                // },
                // [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                //   borderColor: 'currentColor',
                // },
                // [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
                //   border: 'none',
                // },
                '& [class*="startAction"]': {
                  color: 'var(--joy-palette-text-tertiary)',
                },
              })}
            >
              <ListItem
                nested
                sx={{ my: 1 }}
                startAction={
                  <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => setOpen((bool) => !bool)}
                  >
                    <KeyboardArrowDown
                      sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                    />
                  </IconButton>
                }
              >
                <ListItem>
                  <Typography gutterBottom variant="h6" component="div">
                    Avoid polluting the global namespace
                  </Typography>
                </ListItem>
                {open && (
                  <Box>
                    To limit the number of global variables because our application could include many functions and global variables from different source files. 
                    We can use the IIFE pattern when we have some initiation code that we don't need to use again, is better than using a function declaration or function expression.
                  </Box>
                )}
              </ListItem>
              <ListItem
                nested
                sx={{ my: 1 }}
                startAction={
                  <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => setOpen2((bool) => !bool)}
                  >
                    <KeyboardArrowDown
                      sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
                    />
                  </IconButton>
                }
              >
                <ListItem>
                  <Typography gutterBottom variant="h6" component="div">
                    Execute an async function
                  </Typography>
                </ListItem>
                {open2 && (
                  <Box>
                    Allows you tu use await and for-await even in older browsers and Javascript runtimes that have no top-level await 
                    (using async await at the beginning of the file).
                  </Box>
                )}
              </ListItem>
              <ListItem
                nested
                sx={{ my: 1 }}
                startAction={
                  <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => setOpen3((bool) => !bool)}
                  >
                    <KeyboardArrowDown
                      sx={{ transform: open3 ? 'initial' : 'rotate(-90deg)' }}
                    />
                  </IconButton>
                }
              >
                <ListItem>
                  <Typography gutterBottom variant="h6" component="div">
                    The module pattern
                  </Typography>
                </ListItem>
                {open3 && (
                  <Box>
                    To create private and public variables and methods
                  </Box>
                )}
              </ListItem>
              <ListItem
                nested
                sx={{ my: 1 }}
                startAction={
                  <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => setOpen4((bool) => !bool)}
                  >
                    <KeyboardArrowDown
                      sx={{ transform: open4 ? 'initial' : 'rotate(-90deg)' }}
                    />
                  </IconButton>
                }
              >
                <ListItem>
                  <Typography gutterBottom variant="h6" component="div">
                    For loop with var before ES6
                  </Typography>
                </ListItem>
                {open4 && (
                  <Box>
                    When we want to use a loop with var in some old code. With the statement var, we have only function scopes and global scope. So in order to have a block
                    scope we can use an IIFEE.
                  </Box>
                )}
              </ListItem>
            </List>
          </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container flexDirection="column">
          <Grid item>
            <Typography variant="h5" component="div">
            Sources
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              <li>
                <Typography color="text.secondary" variant="body2">
                  https://developer.mozilla.org/en-US/docs/Glossary/IIFE
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary" variant="body2">
                https://www.youtube.com/watch?v=yK_vE6ghox8
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FunctionsDetail;
