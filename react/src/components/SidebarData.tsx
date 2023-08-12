import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { AiFillSkin } from "react-icons/ai"; 

export const SidebarData = [
  {
    title: "Client",
    path: "/Client",
    icon: <FaIcons.FaAdn />,
  },
  {
    title: "Produit",
    path: "/Produit",
    icon: <FaIcons.FaApple />,
  },
  {
    title: "Commande",
    path: "/Commande",
    icon: <FaIcons.FaTelegram />,
  },
  {
    title: "Historique",
    path: "/historique",
    icon: <FaIcons.FaAddressCard />,
  },
  // {
  //   title: "his",
  //   path: "/his",
  //   icon: <FaIcons.FaApple />,
  // },
  {
    title: "Profil",
    path: "/nom",
    icon: <AiFillSkin />,
  },

];




