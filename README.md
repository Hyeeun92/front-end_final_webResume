# Dorset College 'Front-end Web Development' <br> Final project 'Web Resume'
Student number - 21545 / Student Name - Hyeeun Lee

## Project Description
For this project, Choose the tools of to design, create and deploy an interactive web resume using HTML5, CSS, JavaScript.<br>
[40%] Clean, intuitive and responsive user interface that follows design standards.<br>
[30%] Unique interactive navigation and elements.<br>
[10%] Coding standards that include formatting, naming conventions and commenting.<br>
[20%] The finished web resume should be accompanied by a README.md file that documents your
development process, wireframe sketches, testing and describes each of the web libraries and
frameworks used. The link to your website should be included.

## Running project
https://hyeeunlee-webresumeproject.netlify.app

## Development Process
### Initial Ideas
* Smooth scrolling one page website
* Theme - Summer night is inspired my favorite movie <La La Land>
* Color - Pruple(#2C0E35), Yello(#f9f871) and White(#fff)
* Font - 'Lato', sans-serif from Google Fonts
* Navigation - Sticky navigation
* Scrolling - Smooth, parallax(using z-index)
* Framework - JavaScript, CSS, HTML5

### About project
I would make the screen as simple as possible.<br>
Use the sticky navigation bar with highlight to show always which information user are seeing now and if it is clicked user can see the information that they clicked.<br>
User will see the main page animation with bliking neon text simple explanation about me. Using z-index to send the amination part to send back and send the blank space sith text.<br>
User can see about me page when the scroll down, in this page I describe myself and can see my personal information.<br>
I use the grid layout in experiences part and project part to show all together. In experiences part, user can see my education history, which langauges I can speak and progress bar of each skills.<br>
In Project part user can see the simple explanation of my previous project and each project is linked sites.<br>

### Issues and Solve
First issue that I faced is parallax scrolling. I try to use 'background-attachment: fixed' but It was not woring. I followed the several different tutorial in Youtube and I found Pascal van Gemert use z-index for parallax scrlling so I change to use z-index instead of use background-attachment.<br>
And when I try to use z-index, About Me part comming main page and I could see the star animaion(main) part in About me part so I make blank part and put simple explantion about me in the main part.

## References and adaptation explanations
* Creating awesome Neon Text Blinking Effect using HTML & CSS by Now Coding (posted in 2020.11.1) - https://www.youtube.com/watch?v=AfDY1ue6YRI
I referred to make the main page logo text ' I am Hyeeun Lee studnet in Computer engineering'
* Space color - https://mycolor.space
* Parallax Pixel Background Animation by WebDev SHORTS(posted in 2018.9.28) - https://www.youtube.com/watch?v=aywzn9cf-_U
I refered to make main page star animation 
* Responsive Navigation Bar Only CSS by Angela Delise (posted in 2021.1.11) - https://www.youtube.com/watch?v=mbDNrvKLAGM
I refered to make resposive navigation bar and mobile version navigation bar
* Custom Progress Bar with CSS and JavaScript by Florin Pop (posted in 2020.1.2) - https://www.youtube.com/watch?v=U-4tg5snUuw&t=274s
I refered to make progress bar to graph my ability
* How to create image overlay hover effect using HTML and CSS only by LoharTalk (posted in 2018.1.5) - https://www.youtube.com/watch?v=Cfv_9l8F0Lo&t=307s
I refered to show my previous projects
* Web Resume by Pascal van Gemert - http://www.pascalvangemert.nl/ 
I use this to check what I need to include in my resume.

## User Testing
Two people tested my website.
* The first person is working in marketing company and tested in Microsoft edge. She said It is easy find the part that she want to see and looks cool.
* The second person is studyin in Conputer Science and tested in Chrome. He enjoyed my website and Is seeme really simple and he thinks there need some contrast to each text.
Either testers said there are no error.
