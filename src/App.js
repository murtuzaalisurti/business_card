import Card from "./components/Card";
import {UserInputWrap, Input, Textarea, Label, Button, ThemesWrap, SelectTheme} from './styled/UserInputSection'
import {HeadingStyled} from './styled/Headings'
import {useState} from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'

function App() {

  const [name, setName] = useState();
  const [occupation, setOccupation] = useState();
  const [website, setWebsite] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();
  const [services, setServices] = useState();
  const [image, setImage] = useState();
  const [theme, setTheme] = useState("dark");

  if(document.querySelector("#image") !== null){
    if(document.querySelector("#image").files.length === 1){
      document.querySelector("#upload_label").innerHTML = "Uploaded Successfully";
    }
  }

  function download_image(){
    htmlToImage.toPng(document.querySelector("#card"), {
      quality: 1.0
    }).then((dataUrl) => {
      download(dataUrl, 'business_card_image')
    })
  }

  function theme_change(e){
    e.target.style.backgroundColor === "black" ? setTheme("dark") : setTheme("light");
    e.target.style.borderColor = '#ffb681';

    if(e.target.nextSibling == null){
      console.log(e.target)
      e.target.previousSibling.style.borderColor = 'transparent';
    } 
    if (e.target.nextSibling !== null){
      console.log(e.target)
      e.target.nextSibling.style.borderColor = 'transparent';
    }
  }

  return (
    <>
      <UserInputWrap>
        <HeadingStyled className="main-heading">Business Card Generator</HeadingStyled>
        <Label htmlFor="image" id="upload_label">Upload Profile Pic<i class="fas fa-user-circle"></i></Label>
        <Input type="file" onChange={(e) => {setImage(e.target.files[0])}} id="image" placeholder="Upload an image" required />
        <Input type="text" onChange={(e) => {setName(e.target.value)}} value={name} id="name" placeholder="Your name?" required autoComplete="off" />
        <Input type="text" onChange={(e) => {setOccupation(e.target.value)}} value={occupation} id="occupation" placeholder="Profession" required autoComplete="off" />
        <Input type="text" onChange={(e) => {setWebsite(e.target.value)}} value={website} id="website" placeholder="Website" required autoComplete="off" />
        <Input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} id="email" placeholder="Email" required autoComplete="off" />
        <Textarea type="text" onChange={(e) => {setAbout(e.target.value)}} value={about} id="about" placeholder="A little bit about you.." rows="5" required autoComplete="off" />
        <Textarea type="text" onChange={(e) => {setServices(e.target.value)}} value={services} id="interests" placeholder="Services offered..." rows="5" required autoComplete="off" />
        <ThemesWrap>
          <p>Theme </p>
          <SelectTheme onClick={(e) => {theme_change(e)}} style={{backgroundColor: 'black'}} />
          <SelectTheme onClick={(e) => {theme_change(e)}} style={{backgroundColor: 'white'}} />
        </ThemesWrap>
        <Button className="for-desktop" onClick={() => {download_image()}}>Download<i className="fas fa-download"></i></Button>
      </UserInputWrap>
      <Card name={name} occupation={occupation} website={website} email={email} linkedin about={about} services={services} github twitter instagram theme={theme} download_fun={download_image} image_src={URL.createObjectURL(new Blob([image], {type: "image"}))} />
    </>
  );
}

export default App;
