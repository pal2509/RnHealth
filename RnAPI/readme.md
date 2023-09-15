
## Structure

- main.py files calls the routers from the routers folder and it defines the CORS policy
- models.py defines all the models of the application
- emailUtil.py is for utilities related to email sending
- dbUtils.py is for utilities related to database access 
- model folder and modelLib.py has the model loading and classify funtionss
- routers folder contains the routers for the application
    * auth.py is the authoriztion controller (login/jwt)
    * avaliation.py has endpoints related to the evaluations
    * materials.py has endpoints to send the building materials stored in the database to the SPA
    * news.py is has endpoints for the news
    * stats.py has endpoints for the dashboard data

