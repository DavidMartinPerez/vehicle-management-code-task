# Vehicle Management Code Task

## To run it locally

```shell
npm install
npm run start
```

## Functional description of the application

It is an application of visualisation and administration of vehicles that is composed of 3 main pages:
* The selection of the type of user (User or Admin).
* The visualization of the vehicles.
* The creation and editing of vehicles (only administrator has access).

Wireframe of the application flows:

User flow:

![User flow on img](/img/User_flow.png "User Flow")

Administrator flow:

![Admin flow on img](/img/Admin_flow.png "Admin Flow")


Model of vehicles data:
In which we have the vehicles and their different types of vehicles.

![database on img](/img/database.png "Database")


## Stack

* Angular v19
* Tailwindcss
* NgRx (State management)
* Testing with Karma
* Local Storage (For persistan store on memory, por no usar bbdd)

### As folder structure I have used:
It is based on a folder structure that is divided into 4 blocks.
* Core (Non business logic like Auth, Guards, Local storage service)
* Features (Businnes logic)
* Shared (Shared components)
* Store (all files required for storage like actions, effects, states, selectors or reducers)

### ¿Why Tailwindcss vs a component library?
Mainly for time and comfort, I use tailwindcss a lot in my day to day life and I am comfortable with it.
Additionally I have made custom form components, of what I have done with Angular's *Value Accesor* functionality for forms and if I had used a component library I would not have done that part.

### ¿Why Local Storage for persist data?
Not having a database, I use local storage to persist the data when the application is refreshed.
Although the offer is Senior Frontend Developer, but having an open mind for the backend, I would have liked to implement a database and consulting it with graphql.

### ¿Why karma for testing?
Because the angular 19 version was released last week and I prevented that they may have some compatibility issues with other testing libraries. I work with Jest and Mockito and I feel more like with that duo.

### ¿Why Angular 19?
Angular 19 use signal and standalone component for default, so I have used what they recommend from google for this version, implementing Input, Output, Computed, Effect and SelectSignal of ngrx.
I wanted to use the latest version with its latest features as I considered them to be very interesting.



## App images

1. Selector type user
![img on folder img](/img/app_1_user_type_selector.png "User type Selector")
2. Vechicle dashboard view (Administrator's view, user not see create button)
![img on folder img](/img/app_2_dashboard_view.png "Vehicle dashboard")
3. Vehicle detail view
![img on folder img](/img/app_3_detail_vehicle.png "Detail vehicle")
4. Edit/Create vehicle view
![img on folder img](/img/app_4_edit_create_view.png "Detail vehicle")
5. Skeleton loading
  * Vehicle dashboard skeleton
  ![img on folder img](/img/app_2_dashboard_skeleton.png "Vehicle dashboard")
  * Vehicle detail skeleton
  ![img on folder img](/img/app_3_detail_vehicle_skeleton.png "Detail vehicle")

# Testing coverage
![img on folder img](/img/coverage.png "Detail vehicle")


## Things to improve
- [ ] Add vehicle image (rn only by default)
- [ ] Add conection with database
- [ ] Add animations
- [ ] Add dark mode
- [ ] Control of 404 and not results
- [ ] Translations into different languages
- [ ] Use Jest
- [ ] Use only signal
