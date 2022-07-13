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
Models/topic:
|  name     |  String   |
|  topic  |  String   |
|  isCalculus     |  Boolean  |


----------------------------------------------
Models/:
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

