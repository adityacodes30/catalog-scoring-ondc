# Ondc Hackathon submisson

### Team Members - Cicada3301 
<ul>
<li>Aditya Sapra </li>
<li>Shaurya </li>
<li>Payal</li>
<li>Krishna Vig </li>
<ul> 

<h3><a href="http://35.239.81.224/ ">DEPLOYED LINK - http://35.239.81.224/</a></h3>

### OVERVIEW 

<p>This solution implements a catalog scoring mechanism, it utilises a distributed microservices stateless architecture for scalability and working at population scale. It aims to conform to the BECKN API specifications to ensure seamless integration with the ONDC protocol , It leverages kubernetes to handle high loads. It uses callback apis to deliver the data and leverages Machine learning to score the catalogue efficiently and dynamically . The data is segregated and fed to zero shot classification models ( textual + graphical ). Images are processed using CLIP to extract the object and semantic contents. Further the semantic similarity is checked between the fields of the descriptors to ensure better and intersectionalscoring rather than standalone checks . Topsis scoring is then used to determine
the catalog score for each item and catalog overall. Since its category agnostic it can be used across all products and categories
</p>

##### Data flow 

<image src="./misc/df.png">

##### Architecture

<image src="./misc/image2.png">

##### Scoring algorithm

<image src="./misc/ai.png">

<h3><a href="http://35.239.81.224/ ">DEPLOYED LINK - http://35.239.81.224/</a></h3>

<li>
<ul>Core api at 5008</ul>
<ul>Queue 1 at port 8080 , Management console at 8081 </ul>
<ul>Queue 2 at port 9090 , Management console at 9091 <ul>
<ul>Python process is run via pm2 in deployment<ul>
</li>