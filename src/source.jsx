import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { BsChatSquareQuote } from "react-icons/bs";
import {profile2,profile3,profile4,profile5,
        profile6,profile7,profile8
} from './assets/images'
import agent1 from "./assets/agent-1.jpeg";
import agent2 from "./assets/agent-2.jpeg";
import agent3 from "./assets/agent-3.jpeg";
import agent4 from "./assets/agent-4.jpeg";
import agent5 from "./assets/agent-5.jpeg";
import agent6 from "./assets/agent-6.jpeg";


export  const sidebar = [
    {
        name:"Dashboard",
        route:"/",
        activeRoutes:['/'],
        icon:<MdSpaceDashboard/>,
    },
    {
        name:"Users",
        route:"/profile",
        activeRoutes:['/profile'],
        icon:<FiUsers/>,
    },
    {
        name:"Properties",
        route:"/properties",
        activeRoutes:['/properties'],
        icon:<BsBuildings/>,
    },
    {
        name:"Analytics",
        route:"/analytics",
        activeRoutes:['/analytics'],
        icon:<TbBrandGoogleAnalytics/>,
    },
    {
        name:"Inbox",
        route:"/inbox",
        activeRoutes:['/inbox'],
        icon:<BsChatSquareQuote/>,
    },
    {
        name:"Reports",
        route:"/reports",
        activeRoutes:['/reports'],
        icon:<MdOutlineReport/>,
    },
    {
        name:"Requests",
        route:"/requests",
        activeRoutes:['/requests'],
        icon:<VscGitPullRequestNewChanges/>,
    },
    {
        name:"Notifications",
        route:"/notifications",
        activeRoutes:['/notifications'],
        icon:<IoMdNotificationsOutline/>,
    },
    {
        name:"Settings",
        route:"/settings",
        activeRoutes:['/settings'],
        icon:<IoSettingsOutline/>,
    },
]
export const navTabs = [
    {name:"Overview", route:"/",activeRoutes:['/'],},
    {name:"Profile", route:"/profile",activeRoutes:['/profile'],},
    {name:"Settings", route:"/settings",activeRoutes:['/settings'],},
    {name:"Properties", route:"/properties",activeRoutes:['/properties'],},
]



export const propertyRequest = [
    {
        customerName:"Ngozi Eze",
        customerProfile:profile2,
        customerAddress: "Enugu",
        productName: "Smartwatch",
        purchaseDate: new Date("January 10, 2024"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$10.5",
    },
    {
        customerName:"Sam Onyi",
        customerProfile:profile3,
        customerAddress: "Lagos",
        productName: "Smartphone",
        purchaseDate: new Date("December 15, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$205",
    },
    {
        customerName:"Amara Praise",
        customerProfile:profile4,
        customerAddress: "Abia Town",
        productName: "Smart Thermostat",
        purchaseDate: new Date("July 20, 2023"),
        status:2,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$9.9",
    },
    {
        customerName:"Emmanuel",
        customerProfile:profile5,
        customerAddress: "FCT Abuja",
        productName: "Robot Vacuum Cleaner",
        purchaseDate: new Date("May 1, 2023"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$101.9",
    },
    {
        customerName:"Kwame Jow",
        customerProfile:profile6,
        customerAddress: "Accra",
        productName: "Electric Toothbrush",
        purchaseDate: new Date("January 2, 2023"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$11.6",
    },
    {
        customerName:"Eze",
        customerProfile:profile7,
        customerAddress: "Enugu",
        productName: "Portable Printer",
        purchaseDate: new Date("November 11, 2022"),
        status:1,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$300.9",
    },
    {
        customerName:"Patrick",
        customerProfile:profile8,
        customerAddress: "Niger",
        productName: "Digital Voice Recorder",
        purchaseDate: new Date("August 16, 2022"),
        status:0,//0 = cancelled, 1 = delivered, 2 =processing
        productPrice: "$8.9",
    },
]

export const properties = [
    {
      title:"Spectacular Oceanfront Villa with Private Beach Access",
      image:"https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg",
      description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$35,000",
      bedrooms:"2",
      bathrooms:"3",
      location:"Abuja, Nigeria",
      type:'Sale',
    },
    {
      title:"Chic Downtown Loft with Panoramic City Views",
      image:"https://www.bankrate.com/2022/09/21122002/Residential-real-estate.jpg",
      description:` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Animi atque fugiat doloremque similique, magnam`,
      price:"$90,500",
      bedrooms:"4",
      bathrooms:"6",
      location:"Lagos, Nigeria",
      type:'Rent',
    },
    {
      title:"Majestic Napa Valley Estate with Vineyard and Winery",
      image:"https://www.propertypro.ng/blog/wp-content/uploads/2017/09/210-780x405.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$120,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Enugu, Nigeria",
      type:'Sale',
    },
    {
      title:"Luxury Real Estate Specialists - Abuja Nigeria",
      image:"https://www.lps-china.com/wp-content/uploads/2020/09/shutterstock1-1-890x615.png",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$97,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Abuja, Nigeria",
      type:'Sale',
    },
    {
      title:"Luxury Real Estate and Homes for Sale Sotheby's International Realty",
      image:"https://www.villaafrika.com/wp-content/uploads/2021/04/galadimawa-terraced-house-7722.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$77,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Port harcourt",
      type:'Rent',
    },
    {
      title:"43 Carson Circuit, Enugu - Property Details",
      image:"https://i2.au.reastatic.net/800x600/cf472da40f51e0910d542cfb7826b950a2fa255292814838e1825f4d6effebaf/image.jpg",
      description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Animi atque fugiat doloremque similique, magnam`,
      price:"$65,000",
      bedrooms:"3",
      bathrooms:"4",
      location:"Enugu, Nigeria",
      type:'Rent',
    },
]

export const agents = [
    {
      name:"Mary Arum",
      profile:agent1,
      position:'Top Agent',
    },
    {
      name:"Kelvin Dan",
      profile:agent2,
      position:'Top Agent',
    },
    {
      name:"Joy Eze",
      profile:agent3,
      position:'Top Agent',
    },
    {
      name:"Sunday Oga",
      profile:agent4,
      position:'Top Agent',
    },
    {
      name:"Chisom Precious",
      profile:agent5,
      position:'Top Agent',
    },
    {
      name:"Jennifer Williams",
      profile:agent6,
      position:'Top Agent',
    },
  ]