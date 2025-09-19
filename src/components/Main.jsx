import "./Style.css"

const Main = () => {
    const images = [
        "/product 1.jpg",
        "/product 2.webp",
        "/product 3.jpg",
        "/product 4.jpg",
        "/product 5.webp",
        "/product 6.jpg",
    ];

    return (
    <div className="card"> 
        {images.map((src) => (
            <div>
            <img src={src} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem qui perspiciatis molestiae possimus quia ut</p>
            <button>Add To Card</button>
            </div>
        ))}
    </div>
    );
};

export default Main;
