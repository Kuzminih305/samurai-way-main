import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function Hello() {
    alert("Hello It-Kamasutra")
}

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню"} collapsed={false}/>
            <Accordion titleValue={"Цена"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
