import Card from "./components/Card";
import { UserInputWrap, Input, Textarea, Label, Button, ThemesWrap, SelectTheme } from './styled/UserInputSection.js'
import { HeadingStyled } from './styled/Headings.js'
import Footer from './components/Footer.js'
import { ChangeEvent, useEffect, useState } from 'react'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import img_location from './assets/profile.png'

function App() {

  const [image, setImage] = useState(img_location);
  const [isImageModified, setIsImageModified] = useState<{
    status: boolean,
    fileType: string,
    target: {
      files: FileList | null
    }
  }>({
    status: false,
    fileType: "",
    target: {
      files: null
    }
  });
  const [downloadState, setDownloadState] = useState(false);
  const [downloadable, setDownloadable] = useState(false);
  const [inputs, setInputs] = useState<Record<string, string | undefined>>({
    name: undefined,
    occupation: undefined,
    website: undefined,
    email: undefined,
    about: undefined,
    services: undefined
  });
  const [breakpoint, setBreakpoint] = useState(Math.round(window.document.body.clientWidth / 16));
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

  useEffect(() => {
    const uploadLabel = document.querySelector("#upload_label") as HTMLLabelElement;
    if (isImageModified.status) {
      if (isImageModified.fileType === "image") {
        if (document.querySelector("#image") !== null) {
          if ((document.querySelector("#image") as HTMLInputElement).files?.length === 1) {
            if (isImageModified.target.files) setImage(URL.createObjectURL(new Blob([isImageModified.target.files[0]], { type: "image" })));
            uploadLabel.innerHTML = "Uploaded Successfully!";
            uploadLabel.classList.remove("focus");
            setTimeout(() => {
              uploadLabel.innerHTML = "Upload new pic";
            }, 2500)
          }
        }
      } else {
        uploadLabel.innerHTML = "Please upload an image file";
        uploadLabel.classList.add("focus");
        (document.querySelector(".main-heading") as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isImageModified])

  function inputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target;
    setInputs(prev => {
      return {
        ...prev,
        [target.name]: target.value
      }
    })
  }

  function input_check() {

    const filled = {
      inputs: false,
      textarea: false,
      image: false
    }

    const all_input_fields = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");

    for (let index = 0; index < all_input_fields.length; index++) {

      if (index === 0) {
        if (all_input_fields[index].files?.length !== 0) {
          filled.image = true;
        }
      } else {
        if (all_input_fields[index].value === undefined || all_input_fields[index].value === "") {
          filled.inputs = false;
          break;
        } else if (all_input_fields[index].value !== undefined || all_input_fields[index].value !== "") {
          filled.inputs = true;
        }
      }

    }

    for (let index = 0; index < textareas.length; index++) {
      if (textareas[index].value === "") {
        filled.textarea = false;
        break;
      } else if (textareas[index].value !== "") {
        filled.textarea = true;
      }
    }

    if (filled.image && filled.textarea && filled.inputs) {
      setDownloadable(true)
    } else {
      setDownloadable(false);
    }
  }

  function colorChange(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as EventTarget & HTMLDivElement;

    function borderChange(element: HTMLElement) {
      element.style.borderColor = "#000000"; //#ffb681
      const all_color_selectors = element.parentElement && element.parentElement.childNodes;
      if (all_color_selectors) all_color_selectors.forEach((item) => {
        if (item.nodeName !== "p") {
          if (item !== element) {
            (item as HTMLElement).style.borderColor = "transparent";
          }
        }
      })
    }
    if (target.style.backgroundColor === "rgb(88, 44, 77)") {
      borderChange(target);
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
    } else if (target.style.backgroundColor === "black") {
      borderChange(target);
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
    } else if (target.style.backgroundColor === "white") {
      borderChange(target);
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
    } else if (target.style.backgroundColor === "rgb(61, 90, 128)") {
      borderChange(target);
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
    } else if (target.style.backgroundColor === "rgb(244, 232, 193)") {
      borderChange(target);
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
    else if (target.style.backgroundColor === "rgb(238, 180, 179)") {
      borderChange(target);
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

  function download_image() {
    setDownloadState(true);
    htmlToImage.toPng(document.querySelector("#card") as HTMLElement, {
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
    setBreakpoint(Math.round((window.document.body.clientWidth) / 16));
  })

  useEffect(() => {

    const url = new URL(window.location.href)
    const search = new URLSearchParams(url.searchParams)
    
    if(search.toString() === ""){
      fetch('https://contact-card-server.netlify.app/.netlify/functions/api', {
        method: 'post',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: 'direct'
      }).then((res) => {
        console.log(res)
        return res.json();
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    } else {
      for (const i of search.entries()) {
  
        fetch('https://contact-card-server.netlify.app/.netlify/functions/api', {
          method: 'post',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: i[1]
        }).then((res) => {
          console.log(res)
          return res.json();
        }).then((data) => {
          console.log(data)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }, []);

  function props_conf(field: string) {
    return inputs[field] === '' ? undefined : inputs[field];
  }

  return (
    <>
      <main id="main">
        <UserInputWrap>
          <HeadingStyled className="main-heading">Contact Card Generator</HeadingStyled>
          <Label htmlFor="image" id="upload_label">Upload Profile Pic<i className="fas fa-user-circle"></i></Label>
          <Input type="file" accept="image/*" onChange={(e) => { setIsImageModified({ status: true, fileType: e.target.files ? e.target.files[0].type.split("/")[0] : "", target: e.target }); input_check(); }} id="image" placeholder="Upload an image" required />
          <Input type="text" name="name" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.name || ""} id="name" placeholder="Your name?" required autoComplete="off" />
          <Input type="text" name="occupation" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.occupation || ""} id="occupation" placeholder="Profession" required autoComplete="off" />
          <Input type="text" name="website" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.website || ""} id="website" placeholder="Website" required autoComplete="off" />
          <Input type="email" name="email" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.email || ""} id="email" placeholder="Email" required autoComplete="off" />
          <Textarea name="about" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.about || ""} id="about" placeholder="A little bit about you.." rows={5} required autoComplete="off" />
          <Textarea name="services" onChange={(e) => { inputChange(e); input_check(); }} value={inputs.services || ""} id="interests" placeholder="Services offered..." rows={5} required autoComplete="off" />
          <ThemesWrap>
            <p>Theme </p>
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: 'black' }} />
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: 'white' }} />
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: '#582C4D' }} />
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: '#3D5A80' }} />
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: '#F4E8C1' }} />
            <SelectTheme onClick={(e) => { colorChange(e) }} style={{ backgroundColor: '#EEB4B3' }} />
          </ThemesWrap>
          <Button className="for-desktop download_btn" disabled={downloadable ? false : true} title={downloadable ? "" : "Please fill out all fields"} onClick={() => { download_image() }}>Download<i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i></Button>
        </UserInputWrap>
        <Card
          name={props_conf('name')}
          occupation={props_conf('occupation')}
          website={props_conf('website')}
          email={props_conf('email')}
          about={props_conf('about')}
          services={props_conf('services')}
          colors={colors}
          download_fun={download_image}
          image_src={image}
          download_state={downloadState}
          breakpoint={breakpoint}
          downloadable={downloadable}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;