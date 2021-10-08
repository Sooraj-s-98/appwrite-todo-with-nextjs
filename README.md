# 🔖 Todo With NextJS  

![logo]( public/image/built-with-appwrite.svg "Logo")
A simple todo app built with Appwrite and Nextjs




## 🎬 Getting Started

### 🤘 Install Appwrite 
Follow our simple [Installation Guide](https://appwrite.io/docs/installation) to get Appwrite up and running in no time. You can either deploy Appwrite on your local machine or, on any cloud provider of your choice. 

> Note: If you setup Appwrite on your local machine, you will need to create a public IP so that your hosted frontend can access it.
  

1. Add a new Web App in Appwrite and enter the endpoint of your website (`localhost, <project-name>.vercel.app etc`)
![Create Web App](https://user-images.githubusercontent.com/52352285/135745293-7fc105a9-631c-41b7-83b9-04aae7810bd5.png)

2. Create a new collection with the following properties
* **Rules**

Add the following rules to the collection. 
> Make sure that your key exactly matches the key in the images

<p align="center">
<img src="https://user-images.githubusercontent.com/20852629/113019972-c3753c80-919f-11eb-9b3a-c3690785bbf4.png" alt="Content Rule" width="400"/>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/20852629/113020008-cec86800-919f-11eb-8cc2-473f8d15fc3f.png" alt="IsComplete Rule" width="400"/>
</p>

* **Permissions**

Add the following permissions to your collections. These permissions ensure that only registered users can access the collection.

<p align="center">
<img src="https://user-images.githubusercontent.com/20852629/113019801-99bc1580-919f-11eb-9a94-13b1529cb925.png" alt="Collection Permissions" width="400"/>
</p>

### 🚀 Deploy the Front End
You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* REACT_APP_ENDPOINT - Your Appwrite endpoint
* REACT_APP_PROJECT - Your Appwrite project ID
* REACT_APP_COLLECTION_ID - Your Appwrite collection ID 


### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/Sooraj-s-98/appwrite-todo-with-nextjs
$ cd appwrite-todo-with-nextjs
```


Now fill your environment variables

![image](https://user-images.githubusercontent.com/52352285/135744323-a4b1a948-4011-4a39-abcd-63b58853555e.png)


Now run the following commands and you should be good to go 💪🏼

```
$ npm install
$ npm run dev
```

## Screenshot 

![image](https://user-images.githubusercontent.com/52352285/135747618-c65c983c-6f7f-4870-94b5-63d455fbd817.png)


![image](https://user-images.githubusercontent.com/52352285/135747863-3c804f3f-54a7-4d91-92f6-0d4eb32ac61b.png)


## Thanks

Glad to see here! Show some love by [starring](https://github.com/Sooraj-s-98/appwrite-todo-with-nextjs) this repository. 

