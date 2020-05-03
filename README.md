<img align="right" width="180" style="border-radius: 50%;" alt="Logo - The GeoStack Project" src="https://raw.githubusercontent.com/The-GeoStack-Project/The-GeoStack-Project.github.io/master/Logo_TGP.jpg">

## Introduction
Welcome to the Geospatial Programming Course!
- The course consists of a 1-day GeoStack Workshop and a 10-day GeoStack Course.
- The course is aimed at programmers that follow courses in data science and geospatial programming.
- The course runs on a VirtualMachine with Ubuntu Linux in VirtualBox so it works cross-platform on Linux, MacOS and Windows.

**The content subfolders will be published here somewhere between May 15 and June 1, 2020.**

## Introduction video
See the introduction video 'Presenting The GeoStack Project' on the project's YouTube channel.
<iframe width="560" style="margin-bottom: 20px;" height="315" src="https://www.youtube.com/embed/C0DPdy98e4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Reader's Guide
1. Read this project's home page first!
2. Follow the steps in the section Instructions below to get the course on your pc or laptop.
3. Follow the advice in the section Skill Levels below to check and get the required skill levels for this course.
5. Do the 1-day GeoStack Workshop.
6. Explore the overview videos and tutorial clips on the YouTube channel for the different parts of the full course.
7. Do the full 10-day GeoStack Course.


## Learning Goals
The learning goals of this course are to create and run a free and light-weight Open Source Geospatial Software Stack (GeoStack) in a Virtual Machine (VM) on a stand-alone pc and to program webapplications to visualize geospatial datasets on locally hosted topographical digital maps from OpenStreetMap and OpenSeaMap.

So this course is about downloading some software and data sets from the internet, adjust it so it can run on the pc in 'Flight mode' without an internet connection and then learn how to install and configure the GeoStack and program Geospatial Webapplications by using 100% Open Source Software, Open Standards and Open Content!

There are 3 learning goals:
1. End goal:          Programming Webapplications in TypeScript
2. Intermediate goal: Programming Middleware in Python
3. Starting goal:     Programming a Client / Server Software Architecture

**The end goal** is to learn to program three end-user webapplications in TypeScript using the Angular framework in combination with the geospatial JavaScript frameworks OpenLayers and Cesium to plot data from datasets on digital topographical maps that the end-user can run from a webbrowser:
1. a **Dataset Dashboard** to visualize datasets of GPS track logs that are stored as JSON documents in MongoDB
2. a **2D Map Viewer** with OpenLayers to visualize the datasets on 2D digital topographical maps from OpenStreetMap (OSM)
3. a **3D Map Viewer** with Cesium to visualize the datasets on 3D maps with Digital Elevation Models (DEM height files)

**The intermediate goal** is to learn how to build three webservices with an API for the webapplications to use.
- Two webservices are required to get access to the 2D and 3D digital topographical maps through the API's of their respective map tile servers as the geospatial web map servers (WMS).
- The third webservice is provided by programming a microwebservice application with the Python Flask framework to get access to the datasets in the MongoDB datastore.
  - It is in this Python web application where the magic happens to program the 'payload' or 'business logic' for data selection and processing that needs to match the functionality in the TypeScript webapplication to visualize the required geospatial data.
  - Isolating the data processing in a (Flask) webapplication behind a webservice API from the Flask application uncouples the data processing from the visualization in the webapplications, making it easy to replace or update either application seperately.

**The starting goal** is to learn about the approximately 50 software components required in the Client / Server software architecture you will need to download, install, configure, program and run to be able to use the end-user webapplications in your webbrowser.
- You will learn about virtualisation to run the course software and data in a Virtual Machine (VM) isolated from your host operating system. In the full course you will also learn how to isolate software components in the VM by using Docker Containers and Volumes.
- Learn along the way about the architecture and how virtualisation helps to update components independently and in sharing your VMs, containers and volumes with other data scientists and software developers.
- So yes, the GeoStack Installation and Webapplication Programming is done on Linux as the guest operating system in the VM. A great opportunity for Linux newbies to get to know Linux step by step in practical way.
- For programming Python, TypeScript/JavaScript and bash shell scripts are used in the simplest way possible and all source code and parameters used are explained in the documentation and in in-line source code comments.
- There are also many installation-, import-, export- and conversion scripts to work fast and install and run without errors but also to help in learning how things actually work!

There is no 'black magic' anymore, once explained! So go enjoy and learn things!

## Workflow
In order to achieve these learning goals the activities are of course in the reverse order of the learning goals:
1. Building an Ubuntu Linux Virtual Machine: first you will learn to download all the required datasets and software packages to be stored and installed on your pc or laptop in a Virtual Machine running Ubuntu Linux in VirtualBox.
2. Data Storage: then you will learn to store the digital topographical maps in the relational spatial database PostgreSQL + spatial PostGIS extension and convert the GPS track log datasets from CSV and GPX files to the JSON dataformat to store the data as JSON documents in the MongoDB datastore.
3. Programming: finally you will learn how to program in Python and TypeScript in the Atom programming editor and run the webservices and webapplications locally in your webbrowser, without the further need for an internet connection (running in 'airplane mode').

## Study time
The course consists of a 1-day Workshop and a 10-day Course if you have some basic programming skills in Python and preferably in TypeScript or JavaScript too.


Depending on your pre-existing knowledge and skill levels it may take you some extra time, like up to 2 or 3 days to complete the workshop or up to 20 or 30 days to complete the full course.

Don't worry if it takes you a little longer because you will get there with the user friendly installation and programming manuals with lot's of screenshots and the source code files in Jupyter Notebooks and Python and TypeScript example scripts with lot's of inline comments!


If you are on the other hand a real beginner in programming, you might want to invest some well spent study time first as a newbie to get to the required skill levels to follow this course as per the advice below!

## Skill levels
**1 - Basic skills** in Python programming are a **must**!
- Advice: take 5 to 10 days to study the great beginner course 'Python for Everybody' by Charles Severance (dr. Chuck).
  - It's all Open Content and free to re-use.
- Weblinks
  - Website Python for Everybody            : [https://www.py4e.com/](https://www.py4e.com/)
  - Free e-book 'Exploring Data in Python 3': [https://www.py4e.com/book](https://www.py4e.com/book)


**2 - Basic knowledge** in TypeScript / JavaScript + Angular is an advantage
- Advice: take 5 days to study some beginner tutorials to get a feel for the source code examples used in this course.


**3 - Some knowledge** of Virtual Box, Ubuntu Linux, MongoDB, Docker, OpenLayers and Cesium comes in handy of course!
- Advice: take 1 or 2 days to read up on these topics on their wikipages on Wikipedia and on their project websites.
- The course manuals en example source code files will guide you to get the software up and running!

## Getting started
The best way to get started is to work through the 1-day GeoStack Workshop first.

You will find out soon enough if you need to build some extra skills first.

## Instructions
1. Clone this Git repository to your local drive. This will take a while, because its over 1 Gigabyte!
2. The main folder will be The-GeoStack-Project folder with 3 subfolders in it for the course to follow.
3. In the main folder: read the document The-GeoStack-Project-Read-Me.pdf
4. Downloads subfolder: follow the document Download-Datasets.pdf to get the geospatial and GPS datasets.
5. GeoStack-Workshop subfolder
- 1: Follow the document Creating-the-GeoStack-Workshop-VM.pdf
- 2: Follow the document Workshop-Assignments.pdf.
6. GeoStack-Course subfolder
- 1: Follow the document Creating-the-GeoStack-Course-VM
- 2: Work through the large set of detailed installation and programming manuals.

Tip: you might consider downloading the videos from the YouTube channel for offline use.

## Project origins
This programming course was created by computer science student [Pieter Lems](https://www.linkedin.com/in/pieterlems) of the Rotterdam University of Applied Science (Hogeschool Rotterdam).

  - Read the interview in Dutch about Pieter's internship project [here](https://www.ubrijk.nl/service/rijks-i-stage/nieuws/2020/04/24/i-stage-bij-defensie-van-versplinterde-informatie-tot-bruikbare-kennis-voor-militaire-missies).

  - The course is the result of his 3rd year Bachelor internship assignment (201909-202001) in practical programming for data scientists.

The internship was offered by the ICT innovation department of the Dutch Ministry of Defense (MoD-NL/DMO/JIVC/KIXS).

The reason to create this course is to collect and combine all the very much fragmented information from many manuals, (video)tutorials, applications, programming languages and frameworks, file formats etc. into one documentation set for beginners in data science, programming and systems managment to learn to download, install, program and use all the software components and datasets in one logical workflow to get:

**-----> 'Working Software at the End of the Day!' <-----**

## Licenses
This project is published by the MoD-NL as an Open Source Software project with Open Content for easy re-use.
- The software is released under the [European Union Public License (EUPL)](https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt).
  - More information on the EUPL can be found in the FAQ on [EUPL.eu](https://eupl.eu/), in the [EUPL pre-amble text (PDF)](https://ec.europa.eu/idabc/servlets/Doca59b.pdf?id=30149) and on [this EUPL wikipage on Wikipedia](https://en.wikipedia.org/wiki/European_Union_Public_Licence).
- The content is released und the [Creative Commmons Attribution License (CC-BY)](https://creativecommons.org/licenses/by/4.0/).
  - Read the full legal license [here](https://creativecommons.org/licenses/by/4.0/legalcode).

Datasets, Software and online services used in this course from third parties are (re-)used under their own respective licenses.

## Disclaimer
Scope limitations: the software and content of this project are only intended to learn about programming geospatial dataset processing in Python and programming webapplications in TypeScript for the visualization of this geospatial data on digital topographical maps.

Disclaimer:
1) Deciding on the fitness for use and using the software and content is your own responsibility.
2) Any other application or use of the software and content other then for educational purposes is not intended and not advised!
3) This course (= THIS PRODUCT) is consisting of software, documentation and datasets and it is provided "as-is" and "with all faults" by the MoD-NL (= THE PROVIDER) for educational purposes only as a self-study course and it will not be maintained nor supported in any way.

THE PROVIDER makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of THIS PRODUCT.

There are inherent dangers in the use of any software, documentation, and datasets and you are solely responsible for determining whether THIS PRODUCT is compatible with your equipment and other software and data installed on your equipment.

You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing THIS PRODUCT.
