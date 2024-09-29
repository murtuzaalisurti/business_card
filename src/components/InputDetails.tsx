import { Button, Input, Label, SelectTheme, Textarea, ThemesWrap } from "../styled/UserInputSection"

interface Props {
    inputs: Record<string, string | undefined>,
    themes: string[],
    colorChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleInputImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    download_image: () => void,
    downloadState: boolean,
    downloadable: boolean,
}

const InputDetails = ({
    handleInputChange,
    handleInputImageChange,
    inputs,
    themes,
    colorChange,
    downloadState,
    downloadable,
    download_image
}: Props) => {
    return (
        <>
            <Label htmlFor="image" id="upload_label">Upload Profile Pic<i className="fas fa-user-circle"></i></Label>
            <Input
                type="file"
                accept="image/*"
                onChange={handleInputImageChange}
                id="image"
                placeholder="Upload an image"
                required
            />
            <Input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={inputs.name || ""}
                id="name"
                placeholder="Your name?"
                required
                autoComplete="off"
            />
            <Input
                type="text"
                name="occupation"
                onChange={handleInputChange}
                value={inputs.occupation || ""}
                id="occupation"
                placeholder="Profession"
                required
                autoComplete="off"
            />
            <Input
                type="text"
                name="website"
                onChange={handleInputChange}
                value={inputs.website || ""}
                id="website"
                placeholder="Website"
                required
                autoComplete="off"
            />
            <Input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email || ""}
                id="email"
                placeholder="Email"
                required
                autoComplete="off"
            />
            <Textarea
                name="about"
                onChange={handleInputChange}
                value={inputs.about || ""}
                id="about"
                placeholder="A little bit about you.."
                rows={5}
                required
                autoComplete="off"
            />
            <Textarea
                name="services"
                onChange={handleInputChange}
                value={inputs.services || ""}
                id="interests"
                placeholder="Services offered..."
                rows={5}
                required
                autoComplete="off"
            />
            <ThemesWrap>
                <p>Theme </p>
                {
                    themes.map((item, index) => {
                        return (
                            <SelectTheme key={index} onClick={colorChange} style={{ backgroundColor: item }} />
                        )
                    })
                }
            </ThemesWrap>
            <Button
                className="for-desktop download_btn"
                disabled={downloadable ? false : true}
                title={downloadable ? "" : "Please fill out all fields"}
                onClick={download_image}
            >
                Download
                <i className={downloadState ? "fas fa-circle-notch load" : "fas fa-download"}></i>
            </Button>
        </>
    )
}

export default InputDetails
