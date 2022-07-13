# Sin()tax
Second project with general assembly 


As a user I would like to

- Create an account
- create sections for certain math topics
- add subsections
- add the formulas or topics as they are learned.
- each user should have their own note creation
- should be able to swich between pages to access all of their saved formulae and notes
- should ba able to delete notes sections when needed
- should be able to edit pages


-------------------PLANNING--------------
Sections/topic:
|  name     |  String   |
|  topic  |  String   |
|  isCalculus     |  Boolean  |


----------------------------------------------
Sections/:
|   name     | String   |
|   category  | String   |
|   isCalculus     | Boolean  |

----------------------------------------------

Model/User.js
    username:
    |    type      |  String  |
    |   required  |  Boolean   |  
    |   unique    |  Boolean    |
   
    password:
    |   type      | String  |
    |   required  | Boolean    |


---------------------------------------------------

Potentially useful API's
- xMATH
- remoteCalc
- OSF
- newton (might take the cake)

---------------------------------------------------

CRUD route
- create an acount
- show the pages owned by that account
- update the math sections
- delete previously created math pages

| NAME  |   Path            |  HTTP VERB  |       PURPOSE 
|-------------------------------------------------------------
|Index  | /Sections         |     GET     | Displays all sections
|New    | /Sections/new     |     GET     | New page for new section
|Ceate  | /Sections         |    POST     | Creates new section
|Show   | /Sections/:id     |     GET     | Shows one section
|Edit   | /Sections/:id/edit|     GET     | Edit one section
|Update | /Sections/:id     |     PUT     | updates a single section
|Destroy| /Sections/:id     |    DELETE   | Deletes a chosen section




![](/wireframes/1.png)
![](/wireframes/2.png)
![](/wireframes/3.png)
![](/wireframes/4.png)
![](/wireframes/5.png)
![](/wireframes/Blank%20diagram.png)