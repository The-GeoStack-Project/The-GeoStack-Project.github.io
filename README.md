<img align="right" width="160" style="border-radius: 50%;" alt="Logo - The GeoStack Project" src="https://raw.githubusercontent.com/The-GeoStack-Project/The-GeoStack-Project.github.io/master/Logo_TGP.jpg">

## Introduction
Welcome to the Open Source Geospatial Programming Course!
- The course consists of a 1-day GeoStack Workshop and a 10-day GeoStack Course.
- The course uses 100% Open Source Software, Open Standards and Open Content.
- The course is both aimed at bachelor and master level students that follow courses in data science and geospatial programming and programming enthousiasts alike.
- The course runs on a VirtualMachine with Ubuntu Linux in VirtualBox to work cross-platform on Linux, MacOS and Windows.
- In the 1-day Workshop you will build the VM to run a simplified version of a 2D Map Viewer webapplication to explore.
- In the 10-day Course you will build the full GeoStack VM to run 3 webapplications: a Dataset Dashboard, a 2D Map Viewer with OpenLayers and a 3D Map Viewer with Cesium.
- The datasets used for the digital topographical maps are from [OpenStreetMap.org](https://OpenStreetMap.org) and for 3D maps Digital Elevation Map (DEM) files are used that are publicly available as Open Content. To learn how to program with web map servers, also some online web map services are used.
- The datasets used in the course are GPS track logs that are publicly available as Open Content. Two kinds of file formats are used: CSV files with track logs from GPS trackers on the legs of ringed common cranes (Grus grus) from the animal tracking website [Movebank.org](https://www.movebank.org) and GPX files with track logs from a GPS navigation device from travelling routes in The Netherlands from another GitHub user who donated the datasets for this course as Open Content.

So, go enjoy and learn things!

**The repositories with software and content will be published here somewhere between May 25 and June 1, 2020.**


## Introduction video
See the introduction video 'Presenting The GeoStack Project' on the project's [YouTube Channel - The GeoStack Project](https://www.youtube.com/channel/UCiZEImhO8r-LMAWh-KQiH6g).
<iframe width="560" height="315" src="https://www.youtube.com/embed/ocObtLqYRwM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Tip: visit our YouTube channel for the additional tutorial videos and use the playlists to view them.
<br/>

## Reader's Guide
1. Read this project's home page first!
2. Follow the advice in the section 'Skill Levels' below to check and get the required skill levels for this course.
3. Follow the steps in the section 'Getting Started' below to get the course on your pc or laptop.
4. Do the 1-day GeoStack Workshop to explore the world of Open Source Geospatial Programming by building the Workshop Virtual Machine using the installation scripts and then by working through the programming assignments to build the simplified 2D Map Viewer webapplication.
5. Explore the overview videos and tutorial clips on the YouTube channel for the different parts of the full course.
6. Do the full 10-day GeoStack Course by first building the Course VM the easy way with installation scripts to explore and then building the Course VM the manual way and get the 3 webapplications up and running.
7. Finally experiment with loading your own datasets and extra digital topographical maps from OpenStreetMap and of course by modifying and extending the webapplications to learn how to build your own dataset visualizations.

## Learning Goals
The learning goals of this course are to create and run a free and light-weight Open Source Geospatial Software Stack, the GeoStack in short, in a Virtual Machine (VM) with Ubuntu Linux on a stand-alone pc or laptop and to program webapplications to visualize geospatial datasets on locally hosted topographical digital maps from OpenStreetMap and OpenSeaMap.

So this course is about downloading some manuals, software and data sets from the internet, adjust it so it can run on the pc in 'airplaine mode' without an internet connection and then learn how to install and configure the GeoStack and program Geospatial Webapplications by using 100% Open Source Software, Open Standards and Open Content!

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
- You will learn about virtualisation to run the course software and data on Ubuntu Linux in a Virtual Machine (VM) isolated from your host operating system. In the full course you will also learn how to isolate software components in the VM by using Docker Containers and Volumes.
- So yes, the GeoStack Installation and Webapplication Programming is done on Linux as the guest operating system in the VM. A great opportunity for Linux newbies to get to know Linux step by step in practical way.
- Learn along the way about the architecture and how virtualization helps to update components independently and in sharing your VMs, containers and volumes with other data scientists and software developers.

## Workflow
In order to achieve these learning goals the activities are of course in the reverse order of the learning goals:
1. Building an Ubuntu Linux Virtual Machine: first you will learn to download all the required datasets and software packages to be stored and installed on your pc or laptop in a Virtual Machine running Ubuntu Linux in VirtualBox.
2. Data Storage: then you will learn to store the digital topographical maps in the relational spatial database PostgreSQL + spatial PostGIS extension and convert the GPS track log datasets from CSV and GPX files to the JSON dataformat to store the data as JSON documents in the MongoDB datastore.
3. Programming: finally you will learn how to program in Python and TypeScript in the Atom programming editor and run the webservices and webapplications locally in your webbrowser, without the further need for an internet connection (running in 'airplane mode').

## Study time
The course consists of a 1-day Workshop followed by a 10-day Course when you have some basic programming skills in Python and preferably in TypeScript or JavaScript too.
- Depending on your level of expertise you may need to double or triple these time estimates or you might need even more time because there is also a lot of documentation to read, so your mileage may vary!


Don't worry if it takes you a little longer because you will get there with the user friendly installation and programming manuals with lot's of screenshots and the source code files in Jupyter Notebooks and example scripts in Python and TypeScript with lot's of inline comments!


If you are on the other hand a real beginner in programming, you might want to invest some extra well spent study time first as a newbie to get to the required skill levels to follow this course as per the advice below in the section 'Skill levels'!

## Skill levels
1 - **Basic skills** in Python programming are a **must**!
- Advice: take 5 to 10 days to study the great beginner course 'Python for Everybody' by Charles Severance (dr. Chuck).
  - It's all Open Content and free to re-use and... also aimed at datascientists with it's focus on data processing!
  - Website Python for Everybody            : [https://www.py4e.com/](https://www.py4e.com/)
  - Free e-book 'Exploring Data in Python 3': [https://www.py4e.com/book](https://www.py4e.com/book)


2 - **Basic knowledge** in TypeScript / JavaScript + Angular is an advantage
- Advice: take 5 days to study some beginner tutorials to get a feel for the source code examples used in this course.


3 - **Some knowledge** of Virtual Box, Ubuntu Linux, MongoDB, Docker, OpenLayers and Cesium comes in handy of course!
- Advice: take 1 or 2 days to read up on these topics on their wikipages on Wikipedia and on their project websites.
- The course manuals en example source code files will guide you to get the software up and running!

## Course overview

**Course structure**
To get fast situational awareness there is a 1-day GeoStack Workshop to build the Workshop VM with installation scripts which is documented in both a manual and in a series of presentation files to carefully read to get step-by-step to a working GeoStack and basic end-user webapplication.
- The 1-day Workshop focusses on building a Client / Server infrastructure in a VM to get familiar with the server side software architecture of the entire software stack.
- To learn all the details after the workshop there is the 10-day GeoStack Course which will take you through all the details to build the Course VM with the full GeoStack and the fully functional end-user webapplications.

**About the 1-day GeoStack Workshop**
To learn most of the components of the Development Environment, which is described below, to install the required server software for the GeoStack and to program a webapplication this workshop will take you through the whole process to get
familiar with the server and client software architecture for geospatial programming.

The steps will include installing a spatial database, importing topographic maps from OpenStreetMap, install a JSON datastore, prepare and import geospatial datasets, install a Python webserver with a middleware Flask webapplication for data handling and finally install a NGINX webserver and program an end-user webapplication to visualize the dataset on a topographical map.

If you are not yet familiar with the components of the Development Environment then just take a day extra to read a little more.

If you're in a hurry (not recommended!) or just curious then simply run the install scripts to get to a working GeoStack and webapplication more quickly.

Building the Workshop VM is documented in the cookbook 'Creating the GeoStack Workshop VM'.
The programming assignments with a lot of background information is in the cookbook 'Workshop Assignments'.

**About the 10-day GeoStack Course**
In the GeoStack Course there are many manuals, cookbooks, installation scripts and Python programming examples to learn the details of installing, configuring, using and programming all components in the entire GeoStack.
The same goes for using the datasets en programming the end-user webapplications.

This will take a serious time investment of 10 - 20 or even 30 days of study time to read and experiment with the software and datasets but after that you will have build a GeoStack VM from scratch and you know how geospatial webapplications work!

You will also learn to use Docker containers to run applications and Docker Volumes to host data.
For topographical sea maps you will learn how to add OpenSeaMap data of nautical objects to your spatial database PostgreSQL/PostGIS.

At the end of the course you will have 3 working end-user webapplications that run in your webbrowser to visualize geospatial datasets as basic programming examples for future programming projects and knowledge building:
1. a Data Dashboard with information on the datasets stored in MongoDB;
2. a 2D map viewer webapplication with OpenLayers to plot geospatial data on OpenStreetMap and OpenSeaMap maps;
3. a 3D map viewer webapplication with Cesium to plot data in a 3D map projection with the map showing a terrain elevation model to get a nice visualization when plotting datapoints with a height coordinate. So it's all about plotting (x,y,z) coordinates instead of just (x,y) location positions.

Building the Course VM is documented in the cookbook 'Creating the GeoStack Course VM'.

The full GeoStack Course is documented in the following set of detailed Cookbooks and Programming manuals:
1. Cookbook-ETL-Process-With-Datasets
2. Cookbook-Data-Modeling-in-MongoDB
3. Cookbook-A-Secure-Nginx-Webserver-With-ModSecurity
4. Manual-Creating-the-Python-Flask-API-Middleware
5. Manual-Creating-a-Base-application-using-AngularJS
6. Manual-Creating-a-Dataset-Dashboard
7. Manual-Creating-an-2-Dimensional-Map-Viewer
8. Manual-Creating-an-3-Dimensional-Map-Viewer



## Environment
The Development Environment in this course will learn you about the following subjects:

1) Virtual Machine hosting: Virtualbox (Installation and Use).

2) The Linux Operating System: Ubuntu LTS (Long-Term Support version).

3) The programming languages used are Python and TypeScript/JavaScript.
  - installation scripts are programmed as bash shell scripts;
  - there is also a small script written in Java used to create the links for the topographical map tiles between the nautical objects on them from OpenSeaMap and the nautical map icons to generate the map tiles for all the map zoom levels to store in the cache folders of the tile server.

4) Declarative languages: SQL for relational databases and for webpages of the the end-user webapplications HTML5 and CSS3 are used.

5) Compartmentalize the GeoStack components using Docker:
  - creating separate Docker containers;
  - using Docker-compose;
  - creating and exporting Docker data volumes.

6) The ETL-Process (Extract, Transform and Load):
   - extracting data from data sources (reading files formats holding the raw data);
   - filtering and transforming the datasets (data selection and conversion);
   - loading the datasets in the datastores (PostgreSQL and MongoDB).

7) Working with different datasets:
   - Analyzing datasets using the Python programming language with Jupyter Notebook, Pandas, GeoPandas and much more.

8) Working with different file formats to store geospatial data:
   - JSON / GeoJSON (JavaScript Object Notation/ Geographical JavaScript Object Notation).
   - CSV (Comma-Separated Values in Unicode UTF-8 text format).
   - GPX (Geographical version of XML used to store location points of track loggings).
   - SHP (ShapeFiles; a proprietary but public standard from ESRI for a distribution file format for geospatial datasets).

9) Explore and Transform datasets:
   - creating simple data visualizations in Python using Cartopy and MatPlotLib for the exploration of datasets;
   - transforming the geospatial data formats to JSON and GeoJSON for storage in datastores.

10) Storing datasets in a NoSQL datastore: learn to use the JSON documentstore MongoDB for...
   - creating database models using MongoEngine;
   - loading data using MongoEngine and the created datamodels;
   - indexing MongoDB datastores using MongoEngine and / or PyMongo;
   - querying data using MongoEngine and / or PyMongo;
   - deleting data(sets) to clean up the MongoDB JSON document datastore.

11) Storing datasets in a SQL datastore: learn to use the RDBMS PostgreSQL in combination with the spatial PostGIS extensions for storing RAW OpenStreetMap data and ShapeFiles:
   - loading RAW OSM data in a database using OSM2PGSQL;
   - loading ShapeFiles in a database using SHP2PGSQL;
   - loading DEMFiles (Digital Elevation Map Files) in a database using Raster2PGSQL;
   - querying the data in the PostgreSQL datastores;
   - deleting data(sets) to clean up the PostgreSQL relational database.

12) Creating a Tileserver using Tilestache and Gunicorn:
   - generating topographical basemaps using the raw OpenStreetMap and OpenSeaMap data stored in the PostgreSQL datastore using TileStache, Mapnik and Pillow;
   - generating topographical basemaps using the raw OpenStreetMap and OpenSeaMap data;
   - caching the generated tiles;  
   - serving the generated tiles to the Frontend (end-user webapplication that runs in the webbrowser);
   - generating Height Terrain Files using Cesium-Terrain-Builder.

13) Creating a middleware webservice with an API using the Python microwebservices framework Flask and a Gunicorn webserver:
  - programming the middleware webapplication app.py in Flask to run the 'business logic' of data handling as a (micro)webservice that is necessary to fetch data and pre-process it so the end-user webapplication can get the data to visualize from the API and plot it on topographical maps. This is where the magic happens!
  - connecting to the MongoDB datastores using PyMongo;
  - connecting to the PostgreSQL datastores using PsycoPG2;
  - executing queries on the datastores using among other things geospatial queries in combination with PyMongo and PsycoPG2;
  - transforming and serving the queried data, obtained from the datastores, to the frontend (end-user webapplication).

14) Creating a Secured NGINX webserver with ModSecurity and the basic OWASP ruleset.
  - This is provided to learn how to install the mod_security module and the OWASP security ruleset to secure all the Geostack components running behind the NGINX webserver by letting the mod_security module run the security checks.
  - SECURITY WARNING: do NOT run this configuration for production or other purposes when connected to the internet or any other untrusted network because this course shows just an educational setup with the basic OWASP ruleset!
    - It has not been checked if the configuration or ruleset is fit-for-use!!!
    - It's just a basic installation guide and adding your own security rules is not explained!
    - YOU HAVE BEEN WARNED!!!

15) Creating 3 end-user webapplications using the JavaScript Framework Angular in combination with TypeScript:
  - a Dataset Dashboard for generating data profiles, using Pandas Profiling and visualizing the datasets using interactive graphs created with the JavaScript library ChartJS;
  - an 2D Map Viewer using the Geospatial Framework OpenLayers in which you can select multiple routes, animate routes, change layer styles and much more;
  - an 3D Map Viewer using the Geospatial Framework Cesium in which you can visualize the datasets in 3D.

## Getting started
**Download instructions**
1. Go to the top of the webpage and click the blue button 'Download Manuals'.
2. Save the ZIP file that contains the repository GeoStack-Manuals.
3. Unzip the ZIP file which will give you the folder GeoStack-Manuals.
4. In the folder you will find 2 PDF files: Creating-the-Workshop-VM.pdf and Creating-the-Course-VM.pdf.

**Work instructions**
1. Start with the 1-day GeoStack Workshop by following the document Creating-the-GeoStack-Workshop-VM.pdf.
- Here you will learn if you need to build some extra skills first.
- After building the VM start the file manager Nautilus by clicking the file cabinet icon on the left in the Favorites menu.
- Then in the Home folder of the GeoStack account on the VM, go to the folder GeoStack-Workshop.
- Follow the programming assignments in the file Cookbook-Workshop-Assignments.pdf.
2. Work through the full 10-day GeoStack Course by following the document Creating-the-GeoStack-Course-VM.pdf.
- There are two ways of building the Course VM:
  - 1 - Automatic installation by using the supplied set of installation scripts.
  - 2 - Manual installation by working through the large set of 8 detailed course cookbooks and manuals.

Advice: first build the Course VM the easy way with the installation scripts to explore and then do it the hard way by really learning some serious Systems & Network Management in building the GeoStack and programming the webapplications!

Note: in the manuals on how to create the VM's you will find detailed instructions about:
1. cloning the git repositories GeoStack-Workshop and GeoStack-Course;
2. the download instructions for the GPS track log datasets;
3. the instructions to export, download and import the map and terrain elevation datasets required for visualizing digital topographical maps in OpenLayers and Cesium.

## Programming tips
**Lowering the Learning Curve**


1) First of all: read the manuals, cookbooks etc. There is a lot of documentation to explain what, why and how things work. Don't be smart, read it first! It will be time well spent! There is no 'black magic' left, once explained!

2) Second: study the installation scripts and example scripts!
- For programming with Python scripts and Jupyter Notebooks, TypeScript/JavaScript scripts and bash shell scripts, these scripts and notebooks are used in the simplest way possible and all source code and parameters used are explained in the documentation and in in-line source code comments.
- There are also many installation-, import-, export- and conversion scripts to work fast and install and run without errors but also to help in learning how things actually work!

3) Third: remember in programming 'a point is not a comma'!
Typos are made easy but finding them to correct can be really hard!
So first read carefully until you understand and only then grab your keyboard!
When coding: type slow and read your code back!

4) Finally: make copies of files before you change them!!!
- If you want to experiment with building the VMs for the Workshop or the Course
then make a copy of the configuration files and the installation scripts and
document your changes with in-line comments to keep track of what you did!
- Save new file versions in your Programming Editor before running them!
Keep the original files alongside to look at as the working examples!
- So do not use the original files as you might end up with a broken VM.
- Also do not make command line changes because they are by their nature
undocumented changes or you might end up with a broken VM.
- The same goes for changes you want to make to code in Jupyter Notebooks or in
the webapplications.

Make it a habit to use a file copy and you'll be safe and save yourself a lot of time!

## Project origins
This programming course was created by computer science student [Pieter Lems](https://www.linkedin.com/in/pieterlems) of the Rotterdam University of Applied Science (Hogeschool Rotterdam).

  - Read the interview in Dutch about Pieter's internship project [here](https://www.werkenvoornederland.nl/starters/stages/ict-stages/i-stage-bij-defensie).

  - The course is the result of his 3rd year Bachelor internship assignment (201909-202001) in practical programming for data scientists.

The internship was offered by the ICT innovation department of the Dutch Ministry of Defense (MoD-NL/DMO/JIVC/KIXS).

The reason to create this course is to collect and combine all the very much fragmented information from many manuals, (video)tutorials, applications, programming languages and frameworks, file formats etc. into one documentation set for beginners in data science, programming and systems managment to learn to download, install, program and use all the software components and datasets in one logical workflow to get:
<div align="center"> <code> <b>-----> 'Working Software at the End of the Day!' <-----</b> </code> </div>
<br/>

## Scope limitations
1) Educational goal: the software and content of this project are only intended to learn about programming geospatial dataset processing in Python and programming webapplications in TypeScript for the visualization of this geospatial data on digital topographical maps.

2) Product selection: this course focuses on creating an Open Source geospatial software stack, the GeoStack, to
develop and run webapplications for visualization of geospatial datasets. There are more Open Source Software products that can provide the same functionality as the products chosen in this course.

3) Complexity reduction: some well known software products are left out of scope in order not to complicate things more than necessary for an already fairly complex beginner course, like:
- QGIS: a great Open Source geospatial desktop application! Recommended for geospatial enthousiasts after taking this course! Also very useful in exploring geospatial datasets. Left out because it takes a course in itself to learn QGIS.
- Leaflet + Python Folium: Leaflet is a comparable geospatial webapplication framework to OpenLayers for generating 2D topographical map views and Folium is the Python wrapper module for it. Once you have learned OpenLayers in this course you have a good reference to explore Leaflet/Folium in order to find out what works best for your use cases.
- cesiumpy: a Python wrapper module for Cesium, comparable to Folium for Leaflet. Left out because it is fairly new and still a concept version (currently 0.3). Therefore the 3D Map Viewer webapplication is programmed in TypeScript with the Cesium API.
- Git: for version management of source code. Highly recommended for larger sofware projects and when working in development teams! The Open Source webapplication GitLab can be used to run your own Version Control System webserver locally.

## Licenses
© Netherlands Ministry of Defence (MoD-NL). This project is published by the MoD-NL as an Open Source Software educational project with Open Content for easy re-use.
- The software is released under the [European Union Public License (EUPL), Version 1.2](https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt).
  - More information on the EUPL can be found in the FAQ on [EUPL.eu](https://eupl.eu/), in the [EUPL pre-amble text (PDF)](https://ec.europa.eu/idabc/servlets/Doca59b.pdf?id=30149) and on [this EUPL wikipage on Wikipedia](https://en.wikipedia.org/wiki/European_Union_Public_Licence).
- The content is released und the [Creative Commmons Attribution License (CC-BY), Version 4.0](https://creativecommons.org/licenses/by/4.0/).
  - Read the full legal license [here](https://creativecommons.org/licenses/by/4.0/legalcode).
  - Please refer for attribution to this project as: The GeoStack Project

Any and all datasets, software and online services used in this course from third parties are (re-)used under their own respective licenses.

## Disclaimer
1) Deciding on the fitness for use and using the software and content of this course is your own responsibility.

2) Any other application or use of the software and content other then for educational purposes is not intended and not advised!

3) This course (= THIS PRODUCT) is consisting of software and content (= Documentation and Datasets) and THIS PRODUCT is provided "as-is" and "with all faults" by the MoD-NL (= THE PROVIDER) for educational purposes only as a self-study course and it will not be maintained nor supported in any way.

THE PROVIDER makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of THIS PRODUCT.

There are inherent dangers in the use of any software, documentation, and datasets and you are solely responsible for determining whether THIS PRODUCT is compatible with your equipment and other software and data installed on your equipment.

You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing THIS PRODUCT.

## Project Participation
**Resources**

GitHub: click the blue buttons at the top of this webpage to check the Issue Tracker or the Wiki pages.

YouTube: go to the project's YouTube Channel to see the overview videos and video tutorial clips.

**Participation**

GitHub: use the Issue Tracker if you have a question for the project team, to report a bug or make a project enhancement proposal. Please use the proper labels to tag your issue accordingly!

**Project support**

The intention is to see if volunteers are willing to participate in project maintenance and creating new course materials.

Currently the project has not yet a way to welcome volunteers but the information for that will be published here.


New team members are needed because, with around 50 software and content components that will be updated over time, the project is expected to have a limited shelf life of around 12 months and without maintenance the project will need to be archived then.




