import React, { useState, useEffect } from 'react'

const Meme = () => {


    const [myImage, setMyImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    )

    const [memeData, setMemeData] = useState([])

    useEffect(() => {
        const url = 'https://api.imgflip.com/get_memes'
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return setMemeData(data.data.memes)
        })
    }, [])


    const onType = (event) => {
        const { name, value } = event.target
        setMyImage((prevImage) => {
            return ({
                ...prevImage,
                [name]: value
            })
        })
    }

    const getImage = () => {
        const randomImage = Math.floor(Math.random() * memeData.length)
        let url = memeData[randomImage].url
        setMyImage((prevState) => {
            return { ...prevState, randomImage: url }
        })
    }



    return (
        <div>
            <section>
                <div className='container'>
                    <div className='form'>
                        <input className='form-input' type="text"
                            placeholder='Top Text'
                            name='topText'
                            value={myImage.topText}
                            onChange={onType} />
                        <input className='form-input' type="text"
                            placeholder='Bottom Text'
                            name='bottomText'
                            value={myImage.bottomText}
                            onChange={onType} />
                    </div>
                    <div className="submit">
                        <input onClick={getImage} className="submit-btn" type="submit" value="Get a new meme image" />
                    </div>
                    <div className='meme'>
                        <div className='meme-type top'>{myImage.topText}</div>
                        <img className='meme-image' src={myImage.randomImage} alt="" />
                        <div className='meme-type bottom'>{myImage.bottomText}</div>
                </div>
        </div>
            </section >
        </div >
    )
}

export default Meme