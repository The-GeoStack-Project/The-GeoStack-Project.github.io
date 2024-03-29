<img align="right" width="160" style="border-radius: 50%;" alt="Logo - The GeoStack Project" src="https://raw.githubusercontent.com/The-GeoStack-Project/The-GeoStack-Project.github.io/master/Logo_TGP.jpg">

## Introduction
Welcome to the Open Source Geospatial Programming Course!
- The course consists of a 1-day GeoStack Workshop and a 10-day GeoStack Course.
- The course uses 100% Open Source Software, Open Standards and Open Content.
- The course is both aimed at bachelor and master level students that follow courses in data science and geospatial programming and programming enthousiasts alike.
- The course is about learning some [Python](https://www.python.org) programming for geospatial data science basics and some web application programming in [TypeScript](https://www.typescriptlang.org) + [Angular](https://angularjs.org) to call [JavaScript](https://en.wikipedia.org/wiki/JavaScript) geospatial frameworks to plot geospatial data on a [digital topgraphical map](https://en.wikipedia.org/wiki/Topographic_map).
- The course runs on a Virtual Machine (VM) with [Ubuntu Linux](https://ubuntu.com/) in [VirtualBox](https://www.virtualbox.org) to work cross-platform on [Linux](https://en.wikipedia.org/wiki/Linux), [macOS](https://en.wikipedia.org/wiki/MacOS) and [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows).
- In the 1-day Workshop you will build the VM to run a simplified version of a 2D Map Viewer webapplication to explore.
- In the 10-day Course you will build the full GeoStack VM to run 3 webapplications: a Dataset Dashboard, a 2D Map Viewer with the [OpenLayers](https://openlayers.org) geospatial web application framework and a 3D Map Viewer with the [Cesium](https://cesium.com/cesiumjs) framework.
- The datasets used for the digital topographical maps are from [OpenStreetMap.org](https://OpenStreetMap.org) and for 3D maps [Digital Elevation Map (DEM)](https://en.wikipedia.org/wiki/Digital_elevation_model) files are used that are publicly available as [Open Content](https://en.wikipedia.org/wiki/Open_content). To learn how to program with web map servers, also some online [web map services](https://en.wikipedia.org/wiki/Web_Map_Service) are used.
- The datasets used in the course are [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) track logs that are publicly available as Open Content. Two kinds of file formats are used: [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files with GPS track logs from [GPS trackers](https://en.wikipedia.org/wiki/GPS_tracking_unit) on the legs of ringed [common cranes (Grus grus)](https://en.wikipedia.org/wiki/Common_crane) from the animal tracking website [Movebank.org](https://www.movebank.org) and [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) files with track logs from a GPS navigation device from travelling routes in The Netherlands donated by a GitHub user as Open Content.

So, now Go, Enjoy and… Learn things!

## Latest News

- 20220107Fr: [The GeoStack Project is being extended with a new cookbook!](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/News#20220107fri-the-geostack-project-is-being-extended-with-a-new-cookbook)
- 20220104Tu: [The GeoStack Project Referenced by a 'Top Writer' on the Famous Learning Platform 'Medium'!](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/News#20220107fri-the-geostack-project-referenced-by-a-top-writer-on-the-famous-learning-platform-medium)
- 20220104Tu: [Learning tip - An Awesome Roadmap for Geospatial DevOps!](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/News#20220104tu-learning-tip---an-awesome-roadmap-for-geospatial-devops)
- 20220103Mo: [Problem when downloading Crane Datasets from Movebank.org.](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/Known-issues#20220103mo-problem-when-downloading-crane-datasets-from-movebankorg)

**The repositories of the The GeoStack Project and the project's YouTube Channel are online as of midday, October 14, 2020!**
- For older news visit the project's [News](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/News) page! 
- Also, check out the project's [Wiki](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki) and [FAQ](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/FAQ) pages!
- Important note: before downloading and installing always check the wiki page: [Known issues](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/Known-issues)!

## Introduction videos
- Tip: the videos are best viewed in Full Screen mode and with Settings at 1080p Full HD!

**'Introducing The GeoStack Project'** --> Check out this 1 minute show case video!
<iframe width="560" height="315" src="https://www.youtube.com/embed/KkFlhgWLVZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>

**'Presenting The GeoStack Project'** --> Check out this 6 minute overview video!
<iframe width="560" height="315" src="https://www.youtube.com/embed/kukuD3WwbIg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>

## GeoStack on YouTube
Visit the project's [YouTube Channel - The GeoStack Project](https://www.youtube.com/channel/UCiZEImhO8r-LMAWh-KQiH6g).
 - Tip: check out the 76 introduction, overview and tutorial videos by using the playlists! Quick study in 90 minutes!

## Reader's Guide
1. Read this project's home page first!
2. Follow the advice in the section 'Skill Levels' below to check and get the required skill levels for this course.
3. Follow the steps in the section 'Getting Started' below to get the course on your pc or laptop.
4. Do the 1-day GeoStack Workshop to explore the world of Open Source Geospatial Programming by building the Workshop Virtual Machine using the installation scripts and then by working through the programming assignments to build the simplified 2D Map Viewer webapplication.
5. Explore the overview videos and tutorial clips on the YouTube channel for the different parts of the full course.
6. Do the full 10-day GeoStack Course by first building the Course VM the easy way with installation scripts to explore and then building the Course VM the manual way and get the 3 webapplications up and running.
7. Finally experiment with loading your own datasets and extra digital topographical maps from OpenStreetMap and of course by modifying and extending the webapplications to learn how to build your own dataset visualizations.

## Learning Goals
The learning goals of this course are to create and run a free and light-weight Open Source Geospatial Software Stack, the GeoStack for short, in a Virtual Machine (VM) with Ubuntu Linux on a stand-alone pc or laptop and to program webapplications to visualize geospatial datasets on locally hosted topographical digital maps from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Main_Page) and [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap).

So this course is about downloading some manuals, software and data sets from the internet, adjust it so it can run on the pc in 'airplaine mode' without an internet connection and then learn how to install and configure the GeoStack and program Geospatial Web Applications by using 100% Open Source Software, Open Standards and Open Content!

There are 3 learning goals:
1. End goal:          Programming Webapplications in [TypeScript](https://www.typescriptlang.org)
2. Intermediate goal: Programming Middleware in [Python](https://www.python.org/)
3. Starting goal:     Programming a [Client / Server Software Architecture](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

**The end goal** is to learn to program three end-user webapplications in TypeScript using the Angular framework in combination with the geospatial JavaScript frameworks OpenLayers and Cesium to plot data from datasets on digital topographical maps that the end-user can run from a webbrowser:
1. a **Dataset Dashboard** to visualize datasets of GPS track logs that are stored as [JSON](https://en.wikipedia.org/wiki/JSON) documents in [MongoDB](https://www.mongodb.com);
2. a **2D Map Viewer** with OpenLayers to visualize the datasets on 2D digital topographical maps from OpenStreetMap (OSM);
3. a **3D Map Viewer** with Cesium to visualize the datasets on 3D maps with Digital Elevation Models (DEM height files).

**The intermediate goal** is to learn how to build three [web services](https://en.wikipedia.org/wiki/Web_service) with an [API](https://en.wikipedia.org/wiki/Application_programming_interface) for the web applications to use.
- Two web services are required to get access to the 2D and 3D digital topographical maps through the API's of their respective map tile servers as the geospatial web map servers (WMS) to serve [tiled web maps](https://en.wikipedia.org/wiki/Tiled_web_map) to the web browser.
- The third web service is provided by programming a [micro web service](https://en.wikipedia.org/wiki/Microservices) application with the Python [Flask](https://palletsprojects.com/p/flask/) framework to get access to the datasets in the MongoDB datastore.
  - It is in this Python 'back end' web application where the magic happens to program the 'payload' or 'business logic' for data selection and processing that needs to match the functionality in the TypeScript 'front end' web application to visualize the required geospatial data.
  - Isolating the data processing in a (Flask) web application behind a web service API from that Flask web application uncouples the data processing from the visualization in the front end web applications, making it easy to replace or update either application seperately.

**The starting goal** is to learn about the approximately 50 software components required in the Client / Server software architecture you will need to download, install, configure, program and run to be able to use the end-user web applications in your web browser.
- You will learn about virtualisation to run the course software and data on Ubuntu Linux in a Virtual Machine (VM) completely isolated from your host operating system. In the full course you will also learn how to isolate software components in the VM by using [Docker](https://www.docker.com) and its [Containers](https://www.docker.com/resources/what-container) and [Volumes](https://docs.docker.com/storage/volumes).
- So yes, the GeoStack Installation and Web Application Programming is done on Linux as the guest operating system in the VM. A great opportunity for Linux newbies to explore [Ubuntu Linux](https://en.wikipedia.org/wiki/Ubuntu) step-by-step from the [Gnome Desktop](https://help.ubuntu.com/stable/ubuntu-help) and the [Linux Command Line](https://ubuntu.com/tutorials/command-line-for-beginners).
- Learn along the way about the architecture and how virtualization helps to update components independently and in sharing your VMs, containers and volumes with other data scientists and software developers.

## Workflow
In order to achieve these learning goals the activities are of course in the reverse order of the learning goals:
1. Building an Ubuntu Linux Virtual Machine: first you will learn to download all the required datasets and software packages to be stored and installed on your pc or laptop in a Virtual Machine running Ubuntu Linux in VirtualBox.
2. Data Storage: then you will learn to store the digital topographical maps in the relational spatial database [PostgreSQL](https://www.postgresql.org) + spatial [PostGIS](https://postgis.net) extension and convert the GPS track log datasets from CSV and GPX files to the JSON dataformat to store the data as JSON documents in the MongoDB datastore.
3. Programming: finally you will learn how to program in Python and TypeScript in the [Atom programming editor](https://atom.io) and run the web services and web applications locally in your web browser, without the further need for an internet connection (running in 'airplane mode').

## Study time
The course consists of a 1-day Workshop followed by a 10-day Course when you have some basic programming skills in Python and preferably in TypeScript or JavaScript too.
- Depending on your level of expertise you may need to double or triple these time estimates or you might need even more time because there is also a lot of documentation to read, so your mileage may vary!


Don't worry if it takes you a little longer because you will get there with the user friendly installation and programming manuals with lot's of screenshots and the Python source code files in [Jupyter Notebooks](https://jupyter.org) and example scripts in Python and TypeScript with lot's of inline comments!


If you are on the other hand a real beginner in programming, you might want to invest some extra well spent study time first as a newbie to get to the required skill levels to follow this course as per the advice below in the section 'Skill levels'!
- Assume 1 - 3 days for the workshop x 8 hours = 8 - 24 hours
- Assume 10 - 30 days for the course x 8 hours = 80 - 240 hours
- Assume 5 - 20 days to build extra skill levels = 40 - 160 hours
- Study time range = 128 - 424 hours, so let's say it's a range of 3 - 10 weeks depending on your level of expertise and skill set to start with.

TIP: watch the videos first to check your skill level and reduce study time!

## Skill levels
1 - **Basic skills** in Python programming are a **must**!
- Advice: take 5 to 10 days to study the great beginner course 'Python for Everybody' by Charles Severance (dr. Chuck).
  - It's all Open Content and free to re-use and... also aimed at data scientists with it's focus on data processing!
  - Website Python for Everybody            : [https://www.py4e.com/](https://www.py4e.com/)
  - Free e-book 'Exploring Data in Python 3': [https://www.py4e.com/book](https://www.py4e.com/book)


2 - **Basic knowledge** in TypeScript / JavaScript + Angular is an advantage
- Advice: take 5 days to study some beginner tutorials to get a feel for the source code examples used in this course.


3 - **Some knowledge** of Virtual Box, Ubuntu Linux, MongoDB, Docker, OpenLayers and Cesium comes in handy of course!
- Advice 1: take 2 days to properly read up on these topics on their wikipages on Wikipedia and on their project websites!
- Advice 2: take 3 days to experiment and get some hands on experience that will serve you well later!
- The course manuals en example source code files will guide you to get the software up and running!

## Course overview

**Course structure**
To get fast situational awareness there is a 1-day GeoStack Workshop to build the Workshop VM with installation scripts which is documented in both a manual and in a series of presentation files to carefully read to get step-by-step to a working GeoStack and basic end-user webapplication.
- The 1-day Workshop focusses on building a Client / Server infrastructure in a VM to get familiar with the server side software architecture of the entire software stack.
- To learn all the details after the workshop there is the 10-day GeoStack Course which will take you through all the details to build the Course VM with the full GeoStack and the fully functional end-user webapplications.

**About the 1-day GeoStack Workshop**
To learn most of the components of the Development Environment, which is described below, to install the required server software for the GeoStack and to program a webapplication this workshop will take you through the whole process to get
familiar with the server and client software architecture for geospatial programming.

The steps will include installing a spatial database, importing topographic maps from OpenStreetMap, install MongoDB as a datastore for JSON documents with geospatial data, prepare and import geospatial datasets in MongoDB, install a Python webserver with a middleware Flask webapplication for data handling, install a NGINX webserver and finally program an end-user webapplication to visualize the dataset on a digital topographical map.

If you are not yet familiar with the components of the Development Environment then just take a day extra to read a little more.

If you're in a hurry (not recommended!) or just curious then simply run the installation scripts to get to a working GeoStack and webapplication more quickly.

Building the Workshop VM is documented in the cookbook 'Creating the GeoStack Workshop VM'.
The cookbook 'Workshop Assignments' introduces the programming assignments with lots of background information for beginners!
The programming assignments themselves are of course in the Jupyter Notebooks, source code files and configuration files.

**About the 10-day GeoStack Course**
In the GeoStack Course there are many manuals, cookbooks, installation scripts and programming examples in Python to learn the details of installing, configuring, using and programming all components in the entire GeoStack.
The same goes for using the datasets en programming the end-user webapplications in TypeScript + Angular and JavaScript.

This will take a serious time investment of 10 - 20 or even 30 days of study time to read and experiment with the software and datasets but after that you will have build a GeoStack VM from scratch and you know how geospatial web applications work!

You will also learn to use Docker Containers to run applications and Docker Volumes to host data.
For topographical sea maps you will learn how to add the OpenSeaMap data of nautical objects to your spatial database PostgreSQL/PostGIS and visualise these objects with OpenLayers in a data layer overlay to create a digital nautical map.

At the end of the course you will have 3 working end-user web applications that run in your web browser to visualize geospatial datasets as basic programming examples for future programming projects and knowledge building:
1. a Dataset Dashboard with graphs plotted with [ChartJS](https://www.chartjs.org) to visualize information on the datasets stored in MongoDB;
2. a 2D map viewer web application with OpenLayers to plot geospatial data on OpenStreetMap and OpenSeaMap maps;
3. a 3D map viewer web application with Cesium to plot data in a 3D map projection with the map showing a terrain elevation model to get a nice visualization when plotting datapoints with a height coordinate. So it's all about plotting (x,y,z) coordinates instead of just (x,y) location positions.

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

## Content overview
**Open Content Documentation**
- 700+ illustrated pages in 11 documents: 6 Cookbooks for Installation and Data Science and 5 Programming Manuals.
- About the 5 Programming Manuals: there is 1 manual for the Python Flask web application to get Crane and Route datasets from the MongoDB database and there are 4 manuals for the TypeScript/Angular web applications: 1 manual for the base web application and 3 manuals for the end-user web applications: Dataset Dashboard, 2D Map Viewer and 3D Map Viewer.

**Open Source Software**
- There is Source Code in Jupyter Notebooks (Python), in Python script files and in Bash Shell installation scripts.
- Configuration files for the server software.
- The program files for the web applications in TypeScript, HTML5 and CSS3.
- Re-use of around 50 Open Source Software components: from text editors and web servers to geospatial software packages!

**Open Content Videos**
- 76 introduction videos, overview videos and tutorial clips to visualize the documentation, server software and web applications.
- Follow the 8 Playlists on our YouTube channel, totalling to almost 90 minutes of video:
  - 1 Playlist for the 2 Short Showcase videos: Introducing The GeoStack Project (1 min) and Presenting the GeoStack Project (6 min)
  - 1 Playlist for a series of Overview videos.
  - 6 Playlists for the 6 series of short Video Tutorial Clips.

**Open Content Datasets for topographical maps**
- Re-use of topographical data from OpenStreetMap, OpenSeaMap and DEM (height) files for 3D Maps from the Dutch AHN dataset via PDOK.nl.

**Open Content Datasets for map plotting**
- Re-use of GPS track logs of ringed common cranes (Grus grus) from MoveBank. 
- Use of 8 GPS track logs of car, bike and hike routes. 
- Re-use of the World Port Index dataset.

**Free online Topographical Content Services**
- To learn how to work with web map services The GeoStack Project uses 4 free online web map services and also their web applications for testing.
  - Notice there are limits to the number of map tiles or map views per month for these free services but it is more than enough to learn how to program.

- 2D Maps: OSM web map service for (1) OpenStreetMap and OpenSeaMap maps and (2) Thunderforest to learn how to work with a service that uses an API key to access their maps. For Thunderforest you need to register a free account to request their API key.

- 3D Maps: for height maps (3) Cesium ION is used for the 3D web map services that provide an online Cesium Terrain Server pre-loaded with DEM height files and the option to visualize both topographical maps and aerial maps.
  - For the use of Cesium ION you need to register a free account.
  - The DEM files used in the Cesium ION Service are low resolution so the height profiles are not very accurate. Understandable because of the costs and that's why the GeoStack course explains how to download and use these large high resolution DEM files.
  - In the GeoStack Cesium demo web app the (4) Bing Aerial maps are used as an example but there are other map options too.

**Content summary**
- All in all, the documentation and source code totals up to more than 1.000 pages to learn from!
- And... complemented by many minutes of video!
- And... with thanks for the re-use opportunities to the creators of the Open Source Software and publishers of the Open Content Datasets!
Enjoy!

## Environment
The Development Environment in this course will learn you about the following subjects:

1) Virtual Machine hosting: Virtualbox (Installation and Use).

2) The Linux Operating System: Ubuntu LTS (Long-Term Support version).

3) The programming languages used are Python and TypeScript/JavaScript.
  - installation scripts are programmed as bash shell scripts;
  - there is also a small script written in Java used to create the links for the topographical map tiles between the nautical objects on them from OpenSeaMap and the nautical map icons to generate the map tiles for all the [map zoom levels](https://wiki.openstreetmap.org/wiki/Zoom_levels) to store in the cache folders of the tile server.

4) Declarative languages: [SQL](https://en.wikipedia.org/wiki/SQL) for [relational databases](https://en.wikipedia.org/wiki/Relational_database) and for web pages of the end-user web applications [HTML5](https://en.wikipedia.org/wiki/HTML5) and [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) are used.

5) Compartmentalize the GeoStack components using Docker:
  - creating separate Docker Containers;
  - using [Docker Compose](https://docs.docker.com/compose);
  - creating and exporting Docker Volumes for data.

6) The [ETL-Process (Extract, Transform and Load)](https://en.wikipedia.org/wiki/Extract,_transform,_load):
   - extracting data from data sources (reading files formats holding the raw data);
   - filtering and transforming the datasets (data selection and conversion);
   - loading the datasets in the datastores (PostgreSQL and MongoDB).

7) Working with different datasets:
   - Analyzing datasets using the Python programming language with Jupyter Notebook, [Pandas](https://pandas.pydata.org), [GeoPandas](https://geopandas.org) and much more.

8) Working with different file formats to store geospatial data:
   - JSON / GeoJSON (JavaScript Object Notation/ Geographical JavaScript Object Notation).
   - CSV (Comma-Separated Values in Unicode UTF-8 text format).
   - GPX (Geographical version of [XML](https://en.wikipedia.org/wiki/XML) used to store location points of track loggings).
   - [SHP](https://en.wikipedia.org/wiki/Shapefile) (ShapeFiles; a proprietary but public standard from ESRI for a distribution file format for geospatial datasets).

9) Explore and Transform datasets:
   - creating simple data visualizations in Python using [Cartopy](https://scitools.org.uk/cartopy/docs/latest) and [MatPlotLib](https://matplotlib.org) for the exploration of datasets;
   - transforming the geospatial data formats to [JSON](https://en.wikipedia.org/wiki/JSON) and [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) for storage in datastores.

10) Storing datasets in a [NoSQL](https://en.wikipedia.org/wiki/NoSQL) datastore: learn to use the JSON document datastore MongoDB for...
   - creating database models using [MongoEngine](http://mongoengine.org);
   - loading data using MongoEngine and the created [data models for MongoDB](https://docs.mongodb.com/manual/core/data-modeling-introduction/);
   - [indexing MongoDB datastores](https://docs.mongodb.com/manual/indexes) using MongoEngine and / or [PyMongo](https://pymongo.readthedocs.io/en/stable);
   - querying data using MongoEngine and / or PyMongo;
   - deleting data(sets) with the database managment tool [MongoDB Compass](https://www.mongodb.com/products/compass) to clean up the MongoDB JSON document datastore.

11) Storing datasets in a SQL datastore: learn to use the RDBMS PostgreSQL in combination with the spatial PostGIS extensions for storing RAW OpenStreetMap data and storing geospatial data from ShapeFiles:
   - loading RAW OSM data in a database using [OSM2PGSQL](https://wiki.openstreetmap.org/wiki/Osm2pgsql);
   - loading ShapeFiles in a database using [SHP2PGSQL](https://postgis.net/docs/using_postgis_dbmanagement.html#shp2pgsql_usage);
   - loading DEMFiles (Digital Elevation Map Files) in a database using [Raster2PGSQL](https://postgis.net/docs/using_raster_dataman.html#RT_Raster_Loader);
   - querying the data in the PostgreSQL datastores;
   - deleting data(sets) to clean up the PostgreSQL relational database.

12) Creating a Tile Server using [TileStache](http://tilestache.org) and [Gunicorn](https://gunicorn.org):
   - generating topographical basemaps using the raw OpenStreetMap and OpenSeaMap data stored in the PostgreSQL datastore using TileStache, [Mapnik](https://mapnik.org] and [Pillow](https://pillow.readthedocs.io/en/stable);
   - generating topographical base maps using the raw OpenStreetMap and OpenSeaMap data;
   - caching the generated tiles;  
   - serving the generated tiles to the Front End Web Application (= end-user web application that runs in the web browser);
   - generating the terrain tile files with heights for Cesium, using the [Cesium-Terrain-Builder](https://github.com/geo-data/cesium-terrain-builder).

13) Creating a middleware web service with an API using the Python micro web services framework Flask and a Gunicorn webserver:
  - programming the middleware web application app.py in Flask to run the 'business logic' of data handling as a (micro) web service that is necessary to fetch data and pre-process it so the end-user web application can get the data to visualize from the API and plot it on topographical maps. This is where the magic happens!
  - connecting to the MongoDB datastores using PyMongo;
  - connecting to the PostgreSQL datastores using [PsycoPG2](https://www.psycopg.org/docs);
  - executing queries on the datastores using among other things geospatial queries in combination with PyMongo and PsycoPG2;
  - transforming and serving the queried data, obtained from the datastores, to the front end (= end-user) web application.

14) Creating a Secured [NGINX](https://www.nginx.com) web server with the [ModSecurity](https://www.modsecurity.org/) web application firewall and the [OWASP](https://owasp.org) provided [basic ruleset](https://owasp.org/www-project-top-ten).
  - This is provided to learn how to install the mod_security module and the basic OWASP security ruleset to secure all the GeoStack components running behind the NGINX web server by letting the mod_security module run the security checks.
  - SECURITY WARNING: do NOT run this configuration for production or other purposes when connected to the internet or any other untrusted network because this course shows just an educational setup with the basic OWASP ruleset!
    - It has not been checked if the configuration or ruleset is fit-for-use!!!
    - It's just a basic installation guide and adding your own security rules is not explained!
    - YOU HAVE BEEN WARNED!!!

15) Creating 3 end-user webapplications using the JavaScript web application framework Angular in combination with TypeScript:
  - a Dataset Dashboard for generating data profiles, using [Pandas Profiling](https://github.com/pandas-profiling/pandas-profiling) and visualizing the datasets using interactive graphs created with the JavaScript charting library [ChartJS](https://www.chartjs.org);
  - a 2D Map Viewer using the geospatial framework OpenLayers in which you can select multiple routes, animate routes, change map layer styles and much more;
  - a 3D Map Viewer using the geospatial framework Cesium in which you can visualize the datasets on 3D maps.

## Getting started
**Download instructions --> GeoStack Manuals**
1. Go to the top of the web page and click the blue button 'Download Manuals'.
2. Save the small ZIP file GeoStack-Manuals-master.zip of 10 MB that contains the repository GeoStack-Manuals.
3. Unzip the ZIP file which will give you the folder GeoStack-Manuals-master.
4. In this folder you will find 2 PDF files: Cookbook-Creating-the-GeoStack-Workshop-VM.pdf and Cookbook-Creating-the-GeoStack-Course-VM.pdf.

**Work instructions --> GeoStack Workshop and Course**
1. Start with the 1-day GeoStack Workshop by following the document Cookbook-Creating-the-GeoStack-Workshop-VM.pdf.
- Here you will learn if you need to build some extra skills first.
- After building the VM, start the file manager Nautilus by clicking the file cabinet icon on the left in the Favorites menu.
- Then in the Home folder of the GeoStack account on the VM, go to the folder GeoStack-Workshop.
- Follow the programming assignments in the file Cookbook-Workshop-Assignments.pdf.
2. Work through the full 10-day GeoStack Course by following the document Cookbook-Creating-the-GeoStack-Course-VM.pdf.
- There are two ways of building the Course VM:
  - 1 - Automatic installation by using the supplied set of installation scripts as explained in chapter 4.
  - 2 - Manual installation by working your way through the large set of 8 detailed course cookbooks and manuals as explained in chapter 5.

Advice GeoStack Course: first build the Course VM the easy way with the installation scripts to explore and then do it the hard way by really learning some serious Systems & Network Management in building the GeoStack and programming the web applications!

Note: in the manuals on how to create the VM's you will find detailed instructions about:
1. cloning the git repositories GeoStack-Workshop and GeoStack-Course;
2. creating the Virtual Machines and installing Ubuntu Linux and all the GeoStack software you need;
3. the download instructions for the GPS track log datasets;
4. the instructions to export, download and import the map and terrain elevation datasets required for visualizing digital topographical maps in OpenLayers and Cesium.

**Download instructions --> GeoStack Project Files**
1. Go to the top of the web page and click the blue button 'Project Files'.
2. Save the large ZIP file GeoStack-Project-Files-master.zip of 570 MB (!) that contains the repository GeoStack-Project-Files.
3. Unzip the ZIP file which will give you the folder GeoStack-Project-Files-master.
4. In this folder you will find the subfolder GeoStack-Document-Files with the original ODT text editor files created with LibreOffice Writer as well as the document covers, diagram.net images, photos, the blue GeoStack 'Clock-Compass' logo etc. 
- The project files are provided for easy re-use content of Open Content.
- Tip: if you want to copy a lot of source code then use the original ODT files because indentations get lost in a Copy & Paste from PDF files!
- Tip: if you unzip an ODT file you find all the images of the document in the folder Pictures.


## Programming tips
**Lowering the Learning Curve**

1) First of all: read the weblinks on this web page! They paint the picture! Then read the cookbooks, manuals etc. 
- There is a lot of documentation to explain what, why and how things work. Don't be smart, read it first! 
- It will be reading time well spent! There is no 'black magic' left, once explained!

2) Second: study the installation scripts and example scripts!
- For programming with Python scripts and Jupyter Notebooks, TypeScript/JavaScript scripts and bash shell scripts, these scripts and notebooks are used in the simplest way possible and all source code and parameters used are explained in the documentation and in in-line source code comments.
- There are also many installation-, import-, export- and conversion scripts to work fast and install and run without errors but also to help in learning how things actually work!

3) Third: remember in programming 'a point is not a comma'!
- Typos are easy to make, but finding them to correct can be really hard!
- So first read carefully until you understand and only then grab your keyboard!
- When coding: type slow and read your code back!

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

--> Make it a habit to use a file copy and you'll be safe and save yourself a lot of time!


## Scope limitations
1) Educational goal: the software and content of this project are only intended to learn about programming geospatial dataset processing in Python and programming webapplications in TypeScript for the visualization of this geospatial data on digital topographical maps.

2) Software selection: this course focuses on creating an Open Source geospatial software stack, the GeoStack, to
develop and run webapplications for visualization of geospatial datasets. There are more Open Source Software products that can provide the same functionality as the products chosen in this course.

3) Complexity reduction: some well known software products are left out of scope in order not to complicate things more than necessary for an already fairly complex beginner course, like:
- [QGIS](https://qgis.org): a great Open Source geospatial desktop application! Recommended for geospatial enthousiasts after taking this course! Also very useful in exploring geospatial datasets. Left out because it takes a course in itself to learn QGIS.
- [Leaflet](https://leafletjs.com) + Python [Folium](https://github.com/python-visualization/folium): Leaflet is a comparable geospatial webapplication framework to OpenLayers for generating 2D topographical map views and Folium is the Python wrapper module for it. Once you have learned OpenLayers in this course you have a good reference to explore Leaflet/Folium in order to find out what works best for your use cases.
- [cesiumpy](https://github.com/sinhrks/cesiumpy): a Python wrapper module for Cesium, comparable to Folium for Leaflet. Left out because it is fairly new and still a concept version (currently 0.3). Therefore the 3D Map Viewer webapplication is programmed in TypeScript with the Cesium API.
- [Marble](https://marble.kde.org/): as an Open Source Virtual Globe or World Atlas application for desktop and mobile very interesting to get some programming experience with because it also uses OpenStreetMap. Build some knowledge first with Cesium for 3D maps and then it's time for Marble or programming with another virtual globe application like [Google Earth](https://www.google.com/earth/).
- [GeoDjango](https://docs.djangoproject.com/en/3.1/ref/contrib/gis/): a geographic web framework for the Python Django web content management framework. Also fairly new and although Django is fast and runs large websites with ease it does have a learning curve!
- [Git](https://en.wikipedia.org/wiki/Git): for version management of source code. Highly recommended for larger sofware projects and when working in development teams! The Open Source webapplication GitLab can be used to run your own Version Control System webserver locally.
- Also out of scope are:
  - The geospatial functions of the two JSON document data stores of the No-SQL database [MongoDB](https://www.mongodb.com/) and the search engine [Elasticsearch](https://www.elastic.co/). Elasticsearch is build around and uses the geospatial functions of the [Lucene](https://lucene.apache.org/) core search engine.
  - Beginner documentation and programming tutorials on how to program with the [Geopackage](http://www.geopackage.org/) and [GeoJSON](https://geojson.org/) file formats.
  - The creation of geospatial web applications for mobile devices with a focus on using the Geopackage file format.

**Scope Note**: software, installation and programming mannuals for the left-out-of-scope software and file formats mentioned above could be easily added to The GeoStack Project if volunteers would be willing to make them! 
- The document templates and original text editing files of the current GeoStack documentation are available in the repository GeoStack-Project-Files as ready-to-go templates for a quick start!
- Create an Issue on [this project's Issue Tracker](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/issues) with the label 'PEP' (Project Enhancement Proposal) if you want to contribute!

## History
**Development**

This programming course was originally created by computer science student Pieter of the Rotterdam University of Applied Science (Hogeschool Rotterdam) as the result of his 3rd year Bachelor internship assignment (201909-202001) in practical programming for data scientists.

  - The internship was offered by the ICT innovation department of the Netherlands Ministry of Defense (MoD-NL/DMO/JIVC/KIXS).
  - After his internship the student continued to contribute to this project as a volunteer software developer.
  - The first release of The GeoStack Project was published here on GitHub as Version 1.0 on Friday, October 9, 2020. 

**Motivation**

The motivation to create this course is to collect and combine all the very much fragmented information from many manuals, (video)tutorials, applications, programming languages and frameworks, file formats etc. into one documentation set for beginners in data science, programming and systems managment to learn to download, install, program and use all the software components and datasets in one logical workflow to get:
<div align="center"> <code> <b>-----> 'Working Software at the End of the Day!' <-----</b> </code> </div>
<br/>

## Legal information
**Licenses and Copyrights**

This project is published by the MoD-NL as an Open Source Software educational project with Open Content for easy re-use. 
- © Copyright 2019 - 2020, Netherlands Ministry of Defence and Pieter and The GeoStack Project contributors.

The software of The GeoStack Project is released under the [European Union Public License (EUPL), Version 1.2](https://joinup.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt).
  - More information on the EUPL can be found in the FAQ on [EUPL.eu](https://eupl.eu/), in the [EUPL pre-amble text (PDF)](https://ec.europa.eu/idabc/servlets/Doca59b.pdf?id=30149) and on [this EUPL wikipage on Wikipedia](https://en.wikipedia.org/wiki/European_Union_Public_Licence).

The content of The GeoStack Project is released under the [Creative Commmons Attribution License (CC BY), Version 4.0](https://creativecommons.org/licenses/by/4.0/).
  - Read the full legal license [here](https://creativecommons.org/licenses/by/4.0/legalcode).

**Terms of Service**

Take also careful notice of the following Terms of Service applicable to the use of The GeoStack Project software and content available in:
- GitHub in the [GitHub Terms of Service](https://help.github.com/en/github/site-policy/github-terms-of-service).
- YouTube in the [YouTube Terms of Service](https://www.youtube.com/static?template=terms).

**Third Party Licenses**

Any and all datasets, software and online services used in this course from third parties are (re-)used under their own respective licenses.

**Attribution guidelines** 

Please refer for attribution to this project as: The GeoStack Project ([https://The-GeoStack-Project.github.io](https://The-GeoStack-Project.github.io))
 
If you refer to specific documents or videos of the project please follow these [Creative Commons guidelines on 'Best practices for attribution'](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) to compose your weblinks correctly.

**Disclaimer**

The GeoStack Project consists of Software and Content. 

Software means source code files, configuration files, Python scripts, Jupyter Notebooks, shell scripts, files for the web applications etc. 

Content means installation manuals and programming manuals, other documentation such as the files and web pages of the project on GitHub and Google Services such as Google Drive and the YouTube Channel and other content such as datasets, images, photos, videos, audio, the blue GeoStack 'Clock-Compass' logo etc.

You are responsible for your use of the Software and Content of The GeoStack Project and any datasets, software and online services from third parties used in The GeoStack Project. 

If you harm someone else or get into a dispute with someone else, both we (The GeoStack Projects and its members) and the contributors of this project will not be involved. 

You understand and agree that you will indemnify, defend and hold both us (The GeoStack Project and its members) and the contributers of this project harmless from and against any and all claims, liabilities, and expenses, including attorneys’ fees, arising out of your use of the software and content. 

Both we (The GeoStack Project and its members) and the contributors of this project expressly disclaim any warranties (express, implied, or otherwise), including implied warranties of merchantability, non-infringement, fitness for a particular purpose, or title, related to the Software and Content.

The Software and Content of The GeoStack Project is provided ”as is,” and ”as available”.

Both we (The GeoStack Project and its members) and the contributors of this project make no promises or guaranties that the Software and Content will be available, useable, error-free, meet your requirements, that any defects will be corrected or that the Software and Content will be maintained.

You agree that your use of The GeoStack Project Software and Content is your own responsibility and any use is at your own risk, and you assume the entire risk as to implementing or otherwise using the Software and Content.

You decide if the Software and Content is suitable for your use, but be aware that nor we (The GeoStack Project and its members) nor the contributers of this project are in any way responsible or liable for damages or losses arising from your use or inability to use the Software and Content of The GeoStack Project.

Any other application or use of the Software and Content other than for educational purposes is not intended and not advised!

THE GEOSTACK PROJECT, ITS MEMBERS, OR CONTRIBUTORS ARE IN NO EVENT LIABLE TO ANY PARTY FOR LOST PROFITS OR ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY CHARACTER FROM ANY CAUSES OF ACTION OF ANY KIND WITH RESPECT TO THE GEOSTACK PROJECT SOFTWARE OR CONTENT DELIVERABLE OR ITS GOVERNING AGREEMENT, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, AND WHETHER OR NOT THE OTHER MEMBER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**Contributing**

Please take special notice of the [GitHub Terms of Service](https://help.github.com/en/github/site-policy/github-terms-of-service) for contributions under the repository licenses, including contributions made to The GeoStack Project software and content in any of its repositories.
- In short terms: when you make a contribution to a repository of The GeoStack Project, you agree that the software and content licenses of The GeoStack Project (EUPL Version 1.2 and CC BY Version 4.0) will be applicable to your contributions as well.

If you contribute software or content to The GeoStack Project in other ways than by means of GitHub, you also agree that the same software and content licenses (EUPL Version 1.2 and CC BY Version 4.0) will be applicable to your contributions as well.

## Resources
For the project we use two resources: this GitHub account and a Google account.

**GitHub account - the home of the project**

Click the blue buttons at the top of this webpage to view the project's public repositories and check the Issue Tracker, the Wiki pages or the latest News.

Overview GitHub Repositories - The project has 5 repositories and for two repositories there is a convenient blue download button at the top of this webpage.

1) GeoStack-Manuals: the blue button 'Download Manuals' offers a ZIP file download of the GeoStack-Manuals repository with the two manuals to start building the Virtual Machines for the Workshop and the Course. The ZIP file to download will be GeoStack-Manuals-master.zip.

2) GeoStack-Project-Files: the blue button 'Project Files' offers a ZIP file download of the GeoStack-Project-Files repository with the text editor source documents, document images, document cover design, the GeoStack project logo etc. for all the PDF files of the workshop and course. Just to save you a lot of time in case you want to re-use Open Content! The ZIP file to download will be GeoStack-Project-Files-master.zip.

- Text editing was done with [LibreOffice Writer](https://www.libreoffice.org/) and the document files are in the [Open Document Text (ODT)](https://en.wikipedia.org/wiki/OpenDocument) file format.
- Image processing was done with [GIMP](https://www.gimp.org/).

3) GeoStack-Workshop: the repository for the 1-day Workshop that you learn to download in your Linux Virtual Machine when following the cookbook 'Creating the Workshop VM'.

4) GeoStack-Course: the repository for the 10-day Course that you learn to download in your Linux Virtual Machine when following the cookbook 'Creating the Course VM'.

5) The-GeoStack-Project.github.io: the repository for this home page.

**Google account - for videos and project team support**

The project uses two main services:

1) YouTube Channel
- Go to the project's [YouTube Channel - The GeoStack Project](https://www.youtube.com/channel/UCiZEImhO8r-LMAWh-KQiH6g) to see the videos.
- Videos were created using the [ShotCut video editor](http://shotcut.org/) and are published in the [WebM](https://en.wikipedia.org/wiki/WebM) file format.

2) Drive: non-public cloud drive for backup of the project and project team cooperation.
- Backup of the video source files.
- Backup of the GitHub repos and other files.
- File share for the project team.

## Participation

**Support** --> Reporting Bugs and Providing Suggestions with tickets only!

The project team is only accepting tickets in the [Issue Tracker](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/issues) but with no promises to response times or realisation!
- Read this wiki page '[Issue Tracker](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/wiki/Issue-Tracker)' first!
- Please use the proper labels as described on the wiki page to tag the ticket for your issue accordingly! 
- Support is very limited, because this project is currently not an active open source project.
- Expect at least several days of delay or more for a ticket response! Handling tickets is not a priority! Maybe we look once a week! ;)

**Contact**

Use the Issue Tracker to post a Ticket with the label 'Contact' if you want to request a personal conversation with one of the team members and also include information on the subject you want to talk about.
- A free one-on-one secured [JITSI meeting](https://meet.jit.si/) is an option for both a good quality voice call and the option to use the webcam too.
- The name of the meeting room can be published in the ticket to avoid public exposure of personal contact information in a 'Contact' ticket.

**Pull requests**

Currently we are not accepting pull requests from GitHub users other than the current team members.
- If you want to contribute to The GeoStack Project then post a ticket in the [Issue Tracker](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/issues) with the label 'Request' or 'Contact' depending on what is suitable for you to communicate about what you would like to contribute.

**New Team Members**

The project is currently published as-is with a project team of only a few volunteers for very, very low maintenance without making any promises!

New team members are needed to make this project an active Open Source project because, with around 50 software and content components that will be updated over time, the project is expected to have a limited shelf life of around 12 months. Without maintenance the project will then need to be either archived or removed.
- If volunteers are willing to participate in project maintenance and creating new course materials this project could become an active Open Source project.
- So if you want to contribute some serious time to The GeoStack Project then post a ticket in the [Issue Tracker](https://github.com/The-GeoStack-Project/The-GeoStack-Project.github.io/issues) with the label 'Contact' and the information on what you would like to contribute.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
