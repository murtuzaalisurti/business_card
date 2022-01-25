import Card from "./components/Card";
import {UserInputWrap, Input, Textarea, Label, Button, ThemesWrap, SelectTheme} from './styled/UserInputSection'
import {HeadingStyled} from './styled/Headings'
import Footer from './components/Footer'
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
  const [downloadState, setDownloadState] = useState(false);
  const [breakpoint, setBreakpoint] = useState(Math.round(window.document.body.clientWidth/16));
  const [colors, setColors] = useState({
    cardBackgroundColor: "#1A1B21",
    nameColor: "#FFFFFF",
    occupationColor: "#F3BF99",
    websiteColor: "#767676",
    aboutInterestsTitleColor: "#F5F5F5",
    descColor: "#9a9a9a",
    emailColor: "#918E9B",
    emailBackgroundColor: "#161619"
  });

  if(document.querySelector("#image") !== null){
    if(document.querySelector("#image").files.length === 1){
      document.querySelector("#upload_label").innerHTML = "Uploaded Successfully";
    }
  }
  function imageChange(e){
    setImage(URL.createObjectURL(new Blob([e.target.files[0]], {type: "image"})));
  }

  function colorChange(e) {

    function borderChange(element){
      element.style.borderColor = "#000000"; //#ffb681
      let all_color_selectors = element.parentElement.childNodes;
      all_color_selectors.forEach((item) => {
        if(item.localName !== "p"){
          if(item !== element){
            item.style.borderColor = "transparent";
          }
        }
      })
    }
    if(e.target.style.backgroundColor === "rgb(88, 44, 77)"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#582C4D",
        nameColor: "#ECE2D0",
        occupationColor: "#F3BF99",
        websiteColor: "#BFB5AF",
        aboutInterestsTitleColor: "#ECE2D0",
        descColor: "#D6CCC0",
        emailColor: "#BFB5AF",
        emailBackgroundColor: "#6B3B54"
      })
    } else if(e.target.style.backgroundColor === "black"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#1A1B21",
        nameColor: "#FFFFFF",
        occupationColor: "#F3BF99",
        websiteColor: "#767676",
        aboutInterestsTitleColor: "#F5F5F5",
        descColor: "#9a9a9a",
        emailColor: "#918E9B",
        emailBackgroundColor: "#161619"
      })
    } else if(e.target.style.backgroundColor === "white"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#F5F5F5",
        nameColor: "#000000",
        occupationColor: "#d46c1f",
        websiteColor: "#767676",
        aboutInterestsTitleColor: "#252525",
        descColor: "#7e7e7e",
        emailColor: "#747474",
        emailBackgroundColor: "#D5D4D8"
      })
    } else if (e.target.style.backgroundColor === "rgb(61, 90, 128)"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#3D5A80",
        nameColor: "#E0FBFC",
        occupationColor: "#E7B4A5",
        websiteColor: "#98C1D9",
        aboutInterestsTitleColor: "#E0FBFC",
        descColor: "#98C1D9",
        emailColor: "#98C1D9",
        emailBackgroundColor: "#385071"
      })
    } else if (e.target.style.backgroundColor === "rgb(244, 232, 193)"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#F4E8C1",
        nameColor: "#502419",
        occupationColor: "#2B4141",
        websiteColor: "#A2866D",
        aboutInterestsTitleColor: "#502419",
        descColor: "#795543",
        emailColor: "#502419",
        emailBackgroundColor: "#E0D0AC"
      })
    }
    else if (e.target.style.backgroundColor === "rgb(238, 180, 179)"){
      borderChange(e.target);
      setColors({
        cardBackgroundColor: "#EEB4B3",
        nameColor: "#402350",
        occupationColor: "#784784",
        websiteColor: "#2F242C",
        aboutInterestsTitleColor: "#402350",
        descColor: "#784784",
        emailColor: "#402350",
        emailBackgroundColor: "#DBA2AC"
      })
    }
  }

  function download_image(){
    setDownloadState(true);
    htmlToImage.toPng(document.querySelector("#card"), {
      quality: 1.0
    }).then((dataUrl) => {
      download(dataUrl, 'business_card_image')

      setDownloadState(true);

      setTimeout(() => {
        setDownloadState(false);
      }, 1000)
      
    })
  }

  window.addEventListener('resize', () => {
    setBreakpoint(Math.round((window.document.body.clientWidth)/16));
  })

  return (
    <>
      <div id="main">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Contact Card Generator</HeadingStyled>
          <Label htmlFor="image" id="upload_label">Upload Profile Pic<i className="fas fa-user-circle"></i></Label>
          <Input type="file" onChange={(e) => {imageChange(e)}} id="image" placeholder="Upload an image" required />
          <Input type="text" onChange={(e) => {setName(e.target.value)}} value={name} id="name" placeholder="Your name?" required autoComplete="off" />
          <Input type="text" onChange={(e) => {setOccupation(e.target.value)}} value={occupation} id="occupation" placeholder="Profession" required autoComplete="off" />
          <Input type="text" onChange={(e) => {setWebsite(e.target.value)}} value={website} id="website" placeholder="Website" required autoComplete="off" />
          <Input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} id="email" placeholder="Email" required autoComplete="off" />
          <Textarea type="text" onChange={(e) => {setAbout(e.target.value)}} value={about} id="about" placeholder="A little bit about you.." rows="5" required autoComplete="off" />
          <Textarea type="text" onChange={(e) => {setServices(e.target.value)}} value={services} id="interests" placeholder="Services offered..." rows="5" required autoComplete="off" />
          <ThemesWrap>
            <p>Theme </p>
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: 'black'}} />
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: 'white'}} />
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: '#582C4D'}} />
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: '#3D5A80'}} />
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: '#F4E8C1'}} />
            <SelectTheme onClick={(e) => {colorChange(e)}} style={{backgroundColor: '#EEB4B3'}} />
          </ThemesWrap>
          <Button className="for-desktop download_btn" onClick={() => {download_image()}}>Download<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i></Button>
        </UserInputWrap>
        <Card name={name} occupation={occupation} website={website} email={email} linkedin about={about} services={services} github twitter instagram colors={colors} download_fun={download_image} image_src={image} download_state={downloadState} breakpoint={breakpoint} />
      </div>
      <Footer />
    </>
  );
}

export default App;
