import Card from "./components/Card";
import {UserInputWrap, Input, Textarea, Label} from './styled/UserInputSection'
import {useState} from 'react'

function App() {

  const [name, setName] = useState();
  const [occupation, setOccupation] = useState();
  const [website, setWebsite] = useState();
  const [email, setEmail] = useState();
  const [linkedin, setLinkedin] = useState();
  const [about, setAbout] = useState();
  const [interests, setInterests] = useState();
  const [github, setGithub] = useState();
  const [twitter, setTwitter] = useState();
  const [instagram, setInstagram] = useState();
  const [image, setImage] = useState();

  console.log(document.querySelector("#image"))
  if(document.querySelector("#image") !== null){
    if(document.querySelector("#image").files.length === 1){
      document.querySelector("#upload_label").innerHTML = "Uploaded Successfully";
    }
  }

  function download(){
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(document.querySelector("#card"));
    iframe.contentWindow.document.close();
    iframe.contentWindow.print();
    iframe.contentWindow.onafterprint = () => {
      document.body.removeChild(iframe);
    }
  }

  return (
    <>
      <UserInputWrap>
        <Label htmlFor="image" id="upload_label">Upload Profile Pic</Label>
        <Input type="file" onChange={(e) => {setImage(e.target.files[0])}} id="image" placeholder="Upload an image" />
        <Input type="text" onChange={(e) => {setName(e.target.value)}} value={name} id="name" placeholder="Your name?" />
        <Input type="text" onChange={(e) => {setOccupation(e.target.value)}} value={occupation} id="occupation" placeholder="Profession" />
        <Input type="text" onChange={(e) => {setWebsite(e.target.value)}} value={website} id="website" placeholder="Website" />
        <Input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} id="email" placeholder="Email" />
        <Input type="url" onChange={(e) => {setLinkedin(e.target.value)}} value={linkedin} id="linked_url" placeholder="LinkedIn Profile URL" />
        <Textarea type="text" onChange={(e) => {setAbout(e.target.value)}} value={about} id="about" placeholder="A little bit about you.." />
        <Textarea type="text" onChange={(e) => {setInterests(e.target.value)}} value={interests} id="interests" placeholder="Your interests" />
        <p>Socials</p>
        <Input type="url" onChange={(e) => {setGithub(e.target.value)}} value={github} placeholder="GitHub Profile URL" />
        <Input type="url" onChange={(e) => {setTwitter(e.target.value)}} value={twitter} placeholder="Twitter Profile URL"/>
        <Input type="url" onChange={(e) => {setInstagram(e.target.value)}} value={instagram} placeholder="Instagram Profile URL" />
        {/* <Button onClick={() => {download()}}>Download</Button> */}
      </UserInputWrap>
      <Card name={name} occupation={occupation} website={website} email={email} linkedin={linkedin} about={about} interests={interests} github={github} twitter={twitter} instagram={instagram} image_src={URL.createObjectURL(new Blob([image], {type: "image"}))} />
    </>
  );
}

export default App;
