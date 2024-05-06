
import Nav from './components/Nav';
import Form from './components/Form';
import Map from './components/Map';
import Footer from './components/Footer';
import Team from './components/Team';
import Slide from './components/Slide';



function App(){
  return (
    <html>
  <head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </head>
  

<div className='container'>
<Nav/>,
  <Slide/>,
  <Team/>,
  </div>
  <div className='container'>
    <Form/>,
    <Map/>,
    <Footer/>
    
  </div>
  </html>
  );
}
export default App;