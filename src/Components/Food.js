import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Food.css'
 
const s = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';
 
export default function Food() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
 
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);
 
    const fetchMealsByCategory = (category) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
                setSelectedCategory(category);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${category}: `, error);
            });
    };
 
    const resetCategorySelection = () => {
        setSelectedCategory(null);
        setMeals([]);
    };
 
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
 
    const filteredMeals = meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });
 
    return (
        <body  id='A'>
        <div className='container'>
        <h1 className='lo'>FOOD RECIPE</h1>
            {selectedCategory ? (
                <>
                    <button className='btn btn-link mb-3' id='search' onClick={resetCategorySelection}>
                        <img src={s} alt='' style={{ height: 50, width: 50, backgroundColor: 'white' }}  />
                    </button>
                    <h2 className="text-center mb-4">{selectedCategory}</h2>
                    <div className='row' style={{ marginBottom: 20 }}>
                        <div className='col-md-5'>
                            <input type='text'placeholder='Search meals...'id='size' className='form-control' value={searchTerm} onChange={handleSearchChange} style={{width:'1300px',borderColor:'#975ea5'}}  />
                        </div>
                    </div>
                    <div className='row' >
                   
                        {filteredMeals.map(meal => (
                            <div key={meal.idMeal} className="col-md-4">
                                <div className="card-body" id='lon'>
                                    <img id='width' src={meal.strMealThumb} alt={meal.strMeal} className='id'/>
                                    <h5 className="card-title" id='textin'>{meal.strMeal}</h5>
                                        </div>
                                    </div>
                           
                        ))}
                   
                    </div>
                </>
            ) : (
                <div className='row justify-content-center mb-2'>
                    {categories.map(category => (
                        <div key={category.idCategory} className='col-md-auto mb-3 text-center'>
                            <button
                                className='btn btn-link'
                                onClick={() => fetchMealsByCategory(category.strCategory)}
                            >
                                <img src={category.strCategoryThumb}
                                    className='img-fluid  bg-light' id='l'
                                    alt={category.strCategory}
                               
                                />
                                <h5 className='img-fluid ' id='text'>
                                    {category.strCategory}
                                </h5>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </body>
    );
}