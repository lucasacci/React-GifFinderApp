import React from 'react'
import './style.css'        
import {useState} from 'react'
import { AddCategory , GifGrid } from './components';


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;

       setCategories([newCategory ,...categories])

  }

  console.log(categories)
  
    return (
        <>
             <h2>Gif Finder App</h2>
             <AddCategory
              onNewCategory={onAddCategory}
              />
                {
                  categories.map((category) => (<GifGrid
                     key = {category} category = {category}/>))
                }
        </>
  )
}
