import button from 'amui/material/Button';
import NavBar from '.components/NavBar.js';
import Card from '.components/Card.js';
import CardClass from '.components/CardClass.js';


function App() {
    return (
        //JSX
        <header clasName='App'>
            <div className='container-logo'>
            <NavBar />
            <Card title='Remera' talle='XL' price={200}/>
            <Card title='Remera' talle='L' price={150}/>
            <Card title='Remera' talle='M' price={100}/>
            <Card title='Remera' talle='S' price={50}/>
            <hr></hr>

                <CardClass title='Remera CLASE' talle='XL' price={500}/>
            </div>
    );
}