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
import { arrowFunctionExample, functionAsArgumentExample, functionInVariableExample, functionWithArgumentExample, normalDeclarationExample, syntaxExample, arrowFunctionLikeExpressionExample, multilineArrowFunctionExample, arrowFunctionInClassExample, arrowFunctionInVariableExample, callFunctionBeforeInitializationExample } from './functionsDetailExamples.util';

const FunctionsDetail: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          IIFE (Immediately Invoked Function Expression) scoping usage
        </Typography>
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
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
        Usage
        </Typography>
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
      </Box>
      <Box sx={{ mx: 2 }}>
        <Typography variant="h6" component="div">
        Sources
        </Typography>
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
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 4, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Anonymous VS Named Functions
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Anonymous Functions
        </Typography>
        <Typography gutterBottom color="text.secondary" variant="body2">
          An anonymous function is a function without a name
        </Typography>
        <Typography color="text.secondary" variant="body2">
          You can declare an anonymous function using the normal declaration
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={normalDeclarationExample}
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
        <Typography color="text.secondary" variant="body2">
          Or using arrow function
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={arrowFunctionExample}
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
        <Typography color="text.secondary" variant="body2">
          An anonymous function in javascript is not accessible after its initial creation. Therefore, we need to assign it to a variable, so that we can use its value later.
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={functionInVariableExample}
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
        <Typography color="text.secondary" variant="body2">
          An anonymous function can also have multiple arguments.
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={functionWithArgumentExample}
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
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
          Usage
        </Typography>
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
                  onClick={() => setOpen5((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open5 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                  To be passed as argument to other functions
                </Typography>
              </ListItem>
              {open5 && (
                <Box>
                  <p>
                    Functions are called first-class citizens because, they can be passed as an argument to any function, or also returned by any function.
                  </p>
                  <Highlight
                    theme={themes.shadesOfPurple}
                    code={functionAsArgumentExample}
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
                  onClick={() => setOpen6((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open6 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
            <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                  To invoke the function immediately after initialization
                </Typography>
              </ListItem>
              {open6 && (
                <Box>
                  Also known as Self Executing Function
                </Box>
              )}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box sx={{ my: 4, mx: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          Named Functions
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Named functions are given a name and are like the regular javascript functions.
        </Typography>
        <Typography color="text.secondary" variant="body2">
          They are very helpful when you want to reuse your functions multiple times in your code. Also, they are pretty much easier to debug than anonymous functions.
        </Typography>
      </Box>
      <Box sx={{ mx: 2 }}>
        <Typography variant="h6" component="div">
        Sources
        </Typography>
        <ul>
          <li>
            <Typography color="text.secondary" variant="body2">
              https://www.javascripttutorial.net/javascript-anonymous-functions/
            </Typography>
          </li>
            <li>
            <Typography color="text.secondary" variant="body2">
              https://www.geeksforgeeks.org/javascript-anonymous-functions/
            </Typography>
          </li>
          <li>
            <Typography color="text.secondary" variant="body2">
              https://www.scaler.com/topics/javascript/anonymous-function-javascript/
            </Typography>
          </li>
        </ul>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ my: 4, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          Arrow Functions
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Arrow functions were introduced in ES6.
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Arrow functions can be used in the same way as Function Expressions. For instance, to dynamically create a function:
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={arrowFunctionLikeExpressionExample}
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
        <Typography gutterBottom variant="h5" component="div">
          Multiline Functions
        </Typography>
        <Typography gutterBottom color="text.secondary" variant="body2">
          Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).
        </Typography>
        <Highlight
          theme={themes.shadesOfPurple}
          code={multilineArrowFunctionExample}
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
        <Typography gutterBottom variant="h5" component="div">
          Differences with regular functions
        </Typography>
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
                  onClick={() => setOpen7((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open7 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                  Arrow functions do not have this. If this is accessed, it is taken from the outside.
                </Typography>
              </ListItem>
              {open7 && (
                <Box>
                  The arrow function does not create any binding. The function simply does not have this. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
                  This take the value of where it was called, the window global object or the object where it was called from.
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
                  onClick={() => setOpen8((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open8 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                  Arrow functions cannot be used as constructors
                </Typography>
              </ListItem>
              {open8 && (
                <>
                <Box>
                  Arrow functions cannot create their own this. For this reason, arrow functions also cannot be used as constructors.
                  But, we can use arrow functions for the methods in the class without getting errors.
                </Box>
                <Highlight
                  theme={themes.shadesOfPurple}
                  code={arrowFunctionInClassExample}
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
                <Box>
                Though sayName as an arrow function does not create its own this, remember that any reference to this would point to the value of it before the arrow function was created. In this case, the value of this pointed to Dog before sayName was created.
                </Box>
                </>
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
                  onClick={() => setOpen9((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open9 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                  Arrow functions cannot be declared
                </Typography>
              </ListItem>
              {open9 && (
                <>
                <Box>
                Back to arrow functions. Normal functions can be declared when you use the function keyword and a name, but arrow functions cannot be declared. They can only be expressed because they are anonymous.
                </Box>
                <Highlight
                  theme={themes.shadesOfPurple}
                  code={arrowFunctionInVariableExample}
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
                <Box>
                  As you see here, we have an anonymous function which is assigned to the printHello variable. printHello is not a declared function here. It is a variable that holds the evaluated value from the function expression.
                </Box>
                </>
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
                  onClick={() => setOpen10((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{ transform: open10 ? 'initial' : 'rotate(-90deg)' }}
                  />
                </IconButton>
              }
            >
              <ListItem>
                <Typography gutterBottom variant="h6" component="div">
                Arrow functions cannot be accessed before initialization
                </Typography>
              </ListItem>
              {open10 && (
                <>
                <Box>
                  Not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.
                </Box>
                <Highlight
                  theme={themes.shadesOfPurple}
                  code={callFunctionBeforeInitializationExample}
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
                
                </>
              )}
              <Box>
                printName is not a declared function. It is a variable, declared with const which is assigned a function expression. Variables declared with let and const are hoisted, but they cannot be accessed before the line they are initialized.
              </Box>
            </ListItem>
          </List>
          <Box sx={{ mx: 2 }}>
            <Typography variant="h6" component="div">
            Sources
            </Typography>
            <ul>
              <li>
                <Typography color="text.secondary" variant="body2">
                  https://www.w3schools.com/js/js_arrow_function.asp
                </Typography>
              </li>
                <li>
                <Typography color="text.secondary" variant="body2">
                  https://javascript.info/arrow-functions-basics
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary" variant="body2">
                  https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
                </Typography>
              </li>
            </ul>
          </Box>
      </Box>
    </Box>
  );
};

export default FunctionsDetail;
