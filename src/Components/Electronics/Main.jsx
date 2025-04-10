import React from 'react'
import Banner from "./Banner"
import Categories from './Categories'
import Tab from './Tab'
import Hot_Deals from './Hot_Deals'
import Popular_Deals from "./Popular_Deals";
import Brands from './Brands'
import Sale from "./Sale";
import Contacts from './Contact'
import Week from "./Week"
import Shops from './Shops'

function Main() {
  return (
    <div>
      <Banner />
      <Categories />
      <Shops />
      <Tab />
      <Brands />
      <Hot_Deals />
      <Week />
      <Popular_Deals />
      <Sale />
      <Contacts />
    </div>
  );
}

export default Main