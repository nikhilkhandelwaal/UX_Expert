import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"

function App() {

  const name = "Hello";
  const age = 20;
  const email = "hello@gmail.com";


  return (
    <>
      <Header />
      <h1>Hello Everyone</h1>
      <Card uname={name} uage={age} uemail={email} />
      <Card uname={"Welcome"} uage={30} uemail={"welcome@gmail.com"}/>
      <Card uname={"sharda"} uage={50} uemail={"sharda@gmail.com"}/>
      <Footer />
    </>
  )
}

export default App
