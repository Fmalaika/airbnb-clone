import React from 'react'
import './SearchPage.css'
import {Button} from "@material-ui/core";
import SearchResult from "./SearchResult";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>300+ stays . 26th August to 30th August. 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/460c4006-f703-471e-b833-0891ef56cc4a.jpg?im_w=720"
                location="The Countryside Farm & Kamshet , LONAVALA"
                title="Farm stay Sangise Gaon"
                description="The countryside farm is a modern and tastefully designed farmhouse in wood and granite with well equipped bathrooms, a lovely central bar and comfortable bar stools."
                star={4.72}
                price="₹2,619 / night"
                total="₹5,619 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/460c4006-f703-471e-b833-0891ef56cc4a.jpg?im_w=720"
                location="The Countryside Farm & Kamshet , LONAVALA"
                title="Farm stay Sangise Gaon"
                description="The countryside farm is a modern and tastefully designed farmhouse in wood and granite with well equipped bathrooms, a lovely central bar and comfortable bar stools."
                star={4.72}
                price="₹2,619 / night"
                total="₹5,619 total"
            />

        </div>
    )
}

export default SearchPage
