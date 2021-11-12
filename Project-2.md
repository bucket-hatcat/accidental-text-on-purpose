# Project Overview

I really wanted to enjoy this project but the majority of my time was spent trying to clear errors thrown by the incompatibility of react-router v6. Once I figured that out (with the help of Lizz) and downgraded to v5, everything started to work but it was Thursday night at 10pm and I had already spent 10 hours that day trying out different nav methods. I  didn't get to add much styling which is the fun part and part I'm actually good at. Working on this project and dealing with so many errors seriously made me consider dropping out. I felt like I couldn't do it. 


## Project Links

- [add your github repo link](https://github.com/bucket-hatcat/accidental-text-on-purpose.git)
- [add your deployment link]()

## Project Description

The app is used to define what an accidental text on purpose is and generate some text to be sent as a text message. The final project doesn't have a form component to send the message. And there's no styling.

## API

Api generates advice that would ideally be input into a form and sent as a text message.

```
{data: {const [Advice, setAdvice] = useState("");
    // https://api.adviceslip.com/advice
    useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((advice) => {
          setAdvice(advice.slip.advice);
          // console.log("LOAD ADVICE", advice);
        });
    }, []);
    let fetchNewAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((advice) => {
          setAdvice(advice.slip.advice);
          // console.log("BUTTON ADVICE", advice)
        });
    };} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add form component too sent the generated text as a text message

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | landing page with link to api component| 
| API component| This will make the initial data pull and include React Router
| Header | This will render the header include the nav | 
| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | 24+ hours |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```<button onClick={handleShow}>
      example
      </button>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
        <Modal.Body >
        <div position="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/o2Wtvvc-Hls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
function reverse(string) {
	// here is the code to reverse a string of text
}
```
