import p1 from "../assets/img/product/product1.png";
import p2 from "../assets/img/product/product1.png";
import p3 from "../assets/img/product/product3.png";
import p4 from "../assets/img/product/product4.png";
import p5 from "../assets/img/product/product5.png";
import p6 from "../assets/img/product/product6.png";
import p7 from "../assets/img/product/product7.png";
import p8 from "../assets/img/product/product8.png";

import sofa1 from "../assets/img/product/sofa1.png";
import sofa2 from "../assets/img/product/sofa2.png";

export const Products = [
    {
        id: 1,
        name: "Syltherine",
        desc: "Stylish cafe chair",
        price: "Rp 2.500.000",
        numericPrice: 2500000,
        oldPrice: "Rp 3.500.000",
        badge: "-30%",
        img: p1,
        category: "Chair",
        sku: "SS001",
        colors: ["#816DFA", "#000000", "#B88E2F"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
        reviewsCount: 12,
        stock: 15,
        tags: ["chair", "cafe", "stylish", "furniture"],
    },
    {
        id: 2,
        name: "Leviosa",
        desc: "Stylish cafe chair",
        price: "Rp 2.500.000",
        numericPrice: 2500000,
        img: p2,
        category: "Chair",
        sku: "SS002",
        colors: ["#000000", "#B88E2F"],
        sizes: ["S", "M"],
        rating: 4.2,
        reviewsCount: 8,
        stock: 20,
        tags: ["chair", "cafe", "modern"],
    },
    {
        id: 3,
        name: "Lolito",
        desc: "Luxury big sofa",
        price: "Rp 7.000.000",
        numericPrice: 7000000,
        oldPrice: "Rp 14.000.000",
        badge: "-50%",
        img: p3,
        category: "Sofa",
        sku: "SS003",
        colors: ["#816DFA", "#B88E2F", "#CDBA7B"],
        sizes: ["L", "XL"],
        rating: 4.9,
        reviewsCount: 25,
        stock: 5,
        tags: ["sofa", "luxury", "living room"],
    },
    {
        id: 4,
        name: "Respira",
        desc: "Outdoor bar table and stool",
        price: "Rp 500.000",
        numericPrice: 500000,
        badge: "New",
        img: p4,
        category: "Table",
        sku: "SS004",
        colors: ["#000000", "#B88E2F"],
        sizes: ["M", "L"],
        rating: 4.0,
        reviewsCount: 3,
        stock: 30,
        tags: ["table", "outdoor", "bar", "new"],
    },
    {
        id: 5,
        name: "Grifo",
        desc: "Night lamp",
        price: "Rp 1.500.000",
        numericPrice: 1500000,
        img: p5,
        category: "Lamp",
        sku: "SS005",
        colors: ["#CDBA7B", "#000000"],
        sizes: ["S"],
        rating: 4.5,
        reviewsCount: 18,
        stock: 40,
        tags: ["lamp", "night", "bedroom", "lighting"],
    },
    {
        id: 6,
        name: "Muggo",
        desc: "Small mug",
        price: "Rp 150.000",
        numericPrice: 150000,
        badge: "New",
        img: p6,
        category: "Accessories",
        sku: "SS006",
        colors: ["#816DFA", "#000000", "#B88E2F", "#CDBA7B"],
        sizes: ["S"],
        rating: 4.8,
        reviewsCount: 42,
        stock: 100,
        tags: ["mug", "accessories", "kitchen", "new"],
    },
    {
        id: 7,
        name: "Pingky",
        desc: "Cute bed set",
        price: "Rp 7.000.000",
        numericPrice: 7000000,
        oldPrice: "Rp 14.000.000",
        badge: "-50%",
        img: p7,
        category: "Bed",
        sku: "SS007",
        colors: ["#816DFA", "#CDBA7B"],
        sizes: ["M", "L", "XL"],
        rating: 4.6,
        reviewsCount: 15,
        stock: 8,
        tags: ["bed", "bedroom", "cute", "set"],
    },
    {
        id: 8,
        name: "Potty",
        desc: "Minimalist flower pot",
        price: "Rp 500.000",
        numericPrice: 500000,
        badge: "New",
        img: p8,
        category: "Accessories",
        sku: "SS008",
        colors: ["#B88E2F", "#CDBA7B", "#000000"],
        sizes: ["S", "M"],
        rating: 4.3,
        reviewsCount: 7,
        stock: 50,
        tags: ["pot", "flower", "minimalist", "new", "decor"],
    },
];

export const productTabs = [
    {
        id: "description",
        label: "Description",
        text: [
            "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
            "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."
        ],
        images: [sofa1, sofa2]
    },
    {
        id: "info",
        label: "Additional Information",
        text: [
            "Weight: 7kg",
            "Material: Solid Wood"
        ]
    },
    {
        id: "reviews",
        label: "Reviews",
        text: [
            "John: Very comfortable sofa",
            "Anna: Quality is great"
        ]
    }
];

export const comparisonData = [
    {
        section: "General",
        specs: [
            { label: "Sales Package", values: ["1 sectional sofa", "1 Three Seater, 2 Single Seater"] },
            { label: "Model Number", values: ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568"] },
            { label: "Secondary Material", values: ["Solid Wood", "Solid Wood"] },
            { label: "Configuration", values: ["L-shaped", "L-shaped"] },
            { label: "Upholstery Material", values: ["Fabric + Cotton", "Fabric + Cotton"] },
            { label: "Upholstery Color", values: ["Bright Grey & Lion", "Bright Grey & Lion"] }
        ]
    },
    {
        section: "Product",
        specs: [
            { label: "Filling Material", values: ["Foam", "Matta"] },
            { label: "Finish Type", values: ["Bright Grey & Lion", "Bright Grey & Lion"] },
            { label: "Adjustable Headrest", values: ["No", "Yes"] },
            { label: "Maximum Load Capacity", values: ["280 KG", "300 KG"] },
            { label: "Origin of Manufacture", values: ["India", "India"] }
        ]
    },
    {
        section: "Dimensions",
        specs: [
            { label: "Width", values: ["265.32 cm", "265.32 cm"] },
            { label: "Height", values: ["76 cm", "76 cm"] },
            { label: "Depth", values: ["167.76 cm", "167.76 cm"] },
            { label: "Weight", values: ["45 KG", "65 KG"] },
            { label: "Seat Height", values: ["41.52 cm", "41.52 cm"] },
            { label: "Leg Height", values: ["5.46 cm", "5.46 cm"] }
        ]
    },
    {
        section: "Warranty",
        specs: [
            { label: "Warranty Summary", values: ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"] },
            { label: "Warranty Service Type", values: ["For Warranty Claims or Any Product Related Issues Please Email at support@nivellfurniro.com", "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"] },
            { label: "Covered in Warranty", values: ["Warranty Against Manufacturing Defect", "Warranty of the product is limited to manufacturing defects only."] },
            { label: "Not Covered in Warranty", values: ["The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."] },
            { label: "Domestic Warranty", values: ["1 Year", "3 Months"] }
        ]
    }
];
