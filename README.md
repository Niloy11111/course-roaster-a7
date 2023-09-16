# Here Are The Three Project Features

 - ### Course Selection <br/>

    ### In this project, a user can select different types of courses from my website .

 - ### Credit Hour count and Credit hour Remaining

   ### When candidates select their course from this website they can see their total selected courses credit hours and we have also another feature which is the remaining Credit hours. A student can enrol on a maximum of 20 credit hours. So the candidates can see how much his/her remaining credit hours are after selecting his/her desired courses.  

   

 - ### Toast  Showing<br/>

   ### If any candidate tries to select one course more than one time he/she gets a toast error and similarly when a candidate tries to select more than 20 credit hours he/she gets an error toast.

<br/>


# Discuss how you managed the state in your assignment project.

### I utilise React's useState and useEffect hook in this project to manage the state. By using useState, I was able to create and update state variables within functional components. I used a total of four State hook. Three of them are useState and one is useEffect.


   - ## First State : useEffect() <br/>
   
     ### At first, I used useEffect to fetch the data from the data.json file.and set the data of JSON file to a useState variable.


  - ## Second state : useState() <br/>

    ### I used this useState to store the fetched data in cards variable and additionally, I used the map for iterating over this cards variable to dynamically render the cards based on the state data.


 - ## Third State : useState() <br/>

    ### It is to store the selected course in a selectedCourse variable. I have used the find function over selectedCourse to create an array which is selected just one time, and I store that unique selected course in an array called newSelectedCourse and I set this new array to the main useState Function to set whenever the handleClickButton will be clicked these code will be executed.


 - ## Fourth State : useState() <br>
    
   ### This useState I used to store the total credit hour of selectedCourse in the creditHour variable, I used forEach() over selecteCourse variable to calculate the total selected course credit hour and I set the total hour number to the creditHour variable and sent it through the cart props and managed other functionality to show it properly.


   
