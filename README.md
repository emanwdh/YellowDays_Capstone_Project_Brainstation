# YellowDays_Capstone_Project_Brainstation

## Overview
YellowDays is an activity catalogue for busy people who live in the city or visit the city often, to store, organize, and analyze their activities by their interests for easy-access when planning an outing with friends.

It makes hanging out with friends and the research involved in finding things to do, less taxing, in the moment, giving you a catalogue to choose from at any given time.

It also allows you to keep track of your current interests, and what you do over time related to those interests, over a period of time, creating more intentionality.

You can  have a log of all the resource areas, where you find these activities, so when you’re adding new activities, you know where to find the most interesting things to do.

## Problem
As a busy person, whether that is with school or work, it’s hard to research things to do on the spot when you’re planning a hang out with friends, I’d like to be able to make use of previous research opportunities and store things I’d like to do or things I’d like to do again, in one single place. I'm used to storing/saving these over different platforms.

I also might give friends some options of things we can do or places we can check out, but I don’t store those options that we don’t end up going with. So, the next time, I may forget or not be able to find those other things I wanted to do, it's usually dependent on my memory. For example, on instagram you can follow an art gallery, but if you don't go online often, you can miss their posts, and trying to remember which one it was in your following, can be hard, especially if you have a large following count. I also may find things through reddit, eventbrite or a google search, which makes it hard to store and access across many platforms.

I’d also like to keep track of my interests, and how they are growing over time, and what interests me the most, to know myself better and what I like to do. 


It also may help with finding niches within broader interests. It promotes more openness to experience, and gets you excited about the research process.

You can also sort by free events or free things to do, at those times where money is tight. Or tag these as Sunday fun, to search things to do on a sunday. Otherwise I may search on google, which doesn't give a wide range of options, usually just lists curated by other people, having my own would be nice.

## User Profile
-   Busy people
-   Students on a budget
-   Curious people who want to explore different areas of interest and are open to trying new things
-   people who find it hard to figure out what to do with friends and are usually tasked with researching
- people with more niche interests, who find the research process taxing, and would like a place to store what they come across for later
-   People who want to be more intentional about how they spend their free time
-   People who want to contribute more ideas for things to do within their friend groups
## Features
-   Sorting feature needs to be implemented to sort 
-   tagging - being able to make custom tags
-   Limiting the Now category to five things, the Next to 10 things, and the later to 20 things (archive can be used to store away things to avoid clutter)
-   Deleting Activities
- search function to show a list of items that match your key word search
-   events are marked as time-sensitive: true, which will place them in the now category - widget to show time-sensitive items which you can easily slot into the now category (nice-to-have: when the time has passed, they will be archived)
-   NICE TO HAVE: analysis of what activities you most enjoyed that year, any new discoveries you had that breeded new interests, analysis of things you’ve had in your now category for x amount of time - suggest to archive or move to later
-   NICE-TO-HAVE: Integrating with google maps to show the location, in app.
-   NICE-TO-HAVE: Adding media to activities.
-   NICE-TO-HAVE: Archiving older interests, or activities.
-   NICE-TO-HAVE: Hiding all activities, except for your area of interest for the month, more intentional 
-   NICE-TO-HAVE: schedule for when the activity will take place and with whom- just to know when you went or did that thing - integration with google calendar
-   NICE-TO-HAVE: Sharing feature to share common interests and related past or upcoming activities with friends
-   NICE-TO-HAVE: Analytics section so you can track your activity habits, aligned interests
-   NICE-TO-HAVE: Dark theme option.
-   NICE-TO-HAVE : google places api, so I can add a map page so a user can use their location to see curated things to do, that they've added, nearby. 
# Implementation
## Tech Stack

**Front-End** React, JSX and SASS for the Front-End-will use axios, react-router. 
**Back-End** Node JS, Express, Knex, will use cors. SQL for Database. 

## APIs
**No external APIs will be used. Will create own Server, and Database**
## Site Map
login/sign up/landing page: this is the first page a user sees. 
home page: appears upon logging in and acts as a dashboard. 
Now Page: what the user wants to do activity wise, the next time they hang out with friends. 
Next Page: the next in the priority list for activities. 
Later Page: the later in the priority list for activities. 
Add Activity Page/Inbox: Where a user can add a new activity. 
Interests Page: Here a user can see their broader categories, with some quick information. 
(Nice to Have) Atleast one Analytics Page: This where the user can see their stats related to their activities and interests.

## Mockups
[YellowDays__Mobile__Mockup__V2.pdf](https://github.com/user-attachments/files/16517938/YellowDays__Mobile__Mockup__V2.pdf)

[YellowDays__Desktop_Tablet__Mockup.pdf](https://github.com/user-attachments/files/16517657/YellowDays__Desktop_Tablet__Mockup.pdf)

## Data
I'll be building a SQL database to store all the data for the site. 
I'll have a user table containing: primary key(user_id), the username and password,
I'll have an Activity Table, which will have the user__id as a foreign key for each activity. It will also contain, all the data needed for an activity. 
## Endpoints
```

User Table
Activity Table
Tag Table
UserActvitity Table (Join Table)
UserTag Table (Join Table)



GET 
all activities:
/activities 

single activity by id: 
activities/:id

all tags:
user/tags

recently added activities:
user/activities/recent

activities by priority: 
user/activities/priority=now
user/activities/priority=next
user/activities/priority=later

activities(events) by time-sensitivity:
user/events/happening-soon

activities by category:
user/activities/category/:id

PUT 
update a single activity:
user/activities/:id

POST 
post a new activity:
user/activities


DELETE 
Delete a single Activity
user/activities/:id

```
## Authorization

I'll use JSON web tokens for authorization.

## Roadmap

### SPRINT 1
1. Build out the SASS - mixins, variables, colour scheme. Folder structure, download all necessary icons and fonts. 
2. Plan component structure and routing. 
3. Build out the Components, and finish the styling with dummy data.
4. Build out the database using Knex and SQL, have seed data.
5. Build the Backend API calls, and the authentication and sign up process. Complete conditional routing logic for sign up and login process.
6. Test the calls in the app, to display all the data. 
### SPRINT 2
6. Build out the sorting process on the backend. 
7. Build out the sorting process on the Front end. 
8. Build out the filtering process, on the Front end and Back end. 
10. Work on the Front End and Back End Nice-to-haves, some fancy styling and extra functionality.    

