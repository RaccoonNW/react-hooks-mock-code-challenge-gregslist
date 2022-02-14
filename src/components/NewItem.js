import {useState} from "react"

function NewItem() {

    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleLocation(e) {
        setLocation(e.target.value)
    }

    function handleSubmit(e) {
        // e.preventDefault()
        const data = {description: description, image: image, location: location}
        fetch("http://localhost:6001/listings", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="new-item-form">
        <h2>Post New Item</h2>
        <form className="form">
            <label>
                Description:
                <input type="text" name="description" onChange={handleDescription}/>
            </label>
            <label>
                Image:
                <input type="text" name="image" onChange={handleImage}/>
            </label>
            <label>
                Location:
                <input type="text" name="location" onChange={handleLocation}/>
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
        </div>
    )
}

export default NewItem