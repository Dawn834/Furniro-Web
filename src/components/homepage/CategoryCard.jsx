import br1 from "../../assets/img/homepage/browserange1.png";
import br2 from "../../assets/img/homepage/browserange2.png";
import br3 from "../../assets/img/homepage/browserange3.png";
function CategoryCard() {

    const CategoryCard = [
        {
            title: "Dining",
            img: br1
        },
        {
            title: "Living",
            img: br2
        },
        {
            title: "Bedroom",
            img: br3
        }
    ]
    return (
        <>
            <div className="categorycard">
                {CategoryCard.map(({ title, img }) => (
                    <div className="browse-card" key={title}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                    </div>
                ))}
            </div>

        </>
    );

}

export default CategoryCard;