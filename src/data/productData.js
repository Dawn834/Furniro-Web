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
        specs: {
            general: {
                salesPackage: "1 Dining Chair",
                modelNumber: "SLC-CHR-001",
                secondaryMaterial: "Oak Wood",
                configuration: "N/A",
                upholsteryMaterial: "Fabric",
                upholsteryColor: "Green",
            },
            product: {
                fillingMaterial: "Foam",
                finishType: "Matte",
                adjustableHeadrest: "No",
                maximumLoadCapacity: "120 KG",
                originOfManufacture: "Vietnam",
            },
            dimensions: {
                width: "45 cm",
                height: "85 cm",
                depth: "50 cm",
                weight: "8 KG",
                seatHeight: "45 cm",
                legHeight: "40 cm",
            },
            warranty: {
                warrantySummary: "1 Year Limited",
                warrantyServiceType: "Email at support@furniro.com",
                coveredInWarranty: "Manufacturing defects",
                notCoveredInWarranty: "Wear and tear",
                domesticWarranty: "1 Year",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Dining Chair",
                modelNumber: "LEV-CHR-002",
                secondaryMaterial: "Metal",
                configuration: "N/A",
                upholsteryMaterial: "Leather",
                upholsteryColor: "Black",
            },
            product: {
                fillingMaterial: "Synthetic Foam",
                finishType: "Glossy",
                adjustableHeadrest: "No",
                maximumLoadCapacity: "130 KG",
                originOfManufacture: "India",
            },
            dimensions: {
                width: "48 cm",
                height: "88 cm",
                depth: "52 cm",
                weight: "10 KG",
                seatHeight: "46 cm",
                legHeight: "42 cm",
            },
            warranty: {
                warrantySummary: "2 Years Limited",
                warrantyServiceType: "Call center",
                coveredInWarranty: "Structural frame",
                notCoveredInWarranty: "Stains",
                domesticWarranty: "2 Years",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Sectional Sofa",
                modelNumber: "LOL-SOFA-003",
                secondaryMaterial: "Solid Wood",
                configuration: "L-shaped",
                upholsteryMaterial: "Velvet",
                upholsteryColor: "Royal Blue",
            },
            product: {
                fillingMaterial: "Prime Foam",
                finishType: "Polished",
                adjustableHeadrest: "Yes",
                maximumLoadCapacity: "350 KG",
                originOfManufacture: "Vietnam",
            },
            dimensions: {
                width: "280 cm",
                height: "90 cm",
                depth: "180 cm",
                weight: "80 KG",
                seatHeight: "48 cm",
                legHeight: "5 cm",
            },
            warranty: {
                warrantySummary: "3 Years Manufacturing",
                warrantyServiceType: "On-site",
                coveredInWarranty: "Frame and Springs",
                notCoveredInWarranty: "Accidental damage",
                domesticWarranty: "3 Years",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Table, 2 Stools",
                modelNumber: "RES-BAR-004",
                secondaryMaterial: "Powder Coated Steel",
                configuration: "Rectangular",
                upholsteryMaterial: "N/A",
                upholsteryColor: "Steel Grey",
            },
            product: {
                fillingMaterial: "N/A",
                finishType: "Powder Coated",
                adjustableHeadrest: "N/A",
                maximumLoadCapacity: "200 KG (Table), 100 KG (Stool)",
                originOfManufacture: "China",
            },
            dimensions: {
                width: "120 cm",
                height: "110 cm",
                depth: "60 cm",
                weight: "25 KG",
                seatHeight: "75 cm",
                legHeight: "105 cm",
            },
            warranty: {
                warrantySummary: "6 Months Limited",
                warrantyServiceType: "Replacement",
                coveredInWarranty: "Rusting",
                notCoveredInWarranty: "Scratches",
                domesticWarranty: "6 Months",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Lamp, 1 Bulb",
                modelNumber: "GRI-LMP-005",
                secondaryMaterial: "Brass",
                configuration: "Tabletop",
                upholsteryMaterial: "N/A",
                upholsteryColor: "Gold",
            },
            product: {
                fillingMaterial: "N/A",
                finishType: "Antique",
                adjustableHeadrest: "N/A",
                maximumLoadCapacity: "N/A",
                originOfManufacture: "Thailand",
            },
            dimensions: {
                width: "20 cm",
                height: "45 cm",
                depth: "20 cm",
                weight: "2.5 KG",
                seatHeight: "N/A",
                legHeight: "N/A",
            },
            warranty: {
                warrantySummary: "1 Year Electrical",
                warrantyServiceType: "In-store",
                coveredInWarranty: "LED Component",
                notCoveredInWarranty: "Bulb life",
                domesticWarranty: "1 Year",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Set of 2 Mugs",
                modelNumber: "MUG-ACC-006",
                secondaryMaterial: "Ceramic",
                configuration: "Set",
                upholsteryMaterial: "N/A",
                upholsteryColor: "N/A",
            },
            product: {
                fillingMaterial: "N/A",
                finishType: "Glazed",
                adjustableHeadrest: "N/A",
                maximumLoadCapacity: "N/A",
                originOfManufacture: "Vietnam",
            },
            dimensions: {
                width: "10 cm",
                height: "12 cm",
                depth: "10 cm",
                weight: "0.5 KG",
                seatHeight: "N/A",
                legHeight: "N/A",
            },
            warranty: {
                warrantySummary: "No Warranty",
                warrantyServiceType: "N/A",
                coveredInWarranty: "N/A",
                notCoveredInWarranty: "Breakage",
                domesticWarranty: "N/A",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Bed Frame, 1 Mattress",
                modelNumber: "PIN-BED-007",
                secondaryMaterial: "Solid Pine Wood",
                configuration: "Queen Size",
                upholsteryMaterial: "Cotton Fabric",
                upholsteryColor: "Pink",
            },
            product: {
                fillingMaterial: "Memory Foam",
                finishType: "Natural Wood",
                adjustableHeadrest: "No",
                maximumLoadCapacity: "400 KG",
                originOfManufacture: "Vietnam",
            },
            dimensions: {
                width: "160 cm",
                height: "210 cm",
                depth: "100 cm",
                weight: "120 KG",
                seatHeight: "55 cm",
                legHeight: "15 cm",
            },
            warranty: {
                warrantySummary: "5 Years Limited",
                warrantyServiceType: "On-site",
                coveredInWarranty: "Wood quality, Springs",
                notCoveredInWarranty: "Mattress stains",
                domesticWarranty: "5 Years",
            }
        }
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
        specs: {
            general: {
                salesPackage: "1 Pot",
                modelNumber: "POT-ACC-008",
                secondaryMaterial: "Terracotta",
                configuration: "N/A",
                upholsteryMaterial: "N/A",
                upholsteryColor: "Earth Brown",
            },
            product: {
                fillingMaterial: "N/A",
                finishType: "Handmade",
                adjustableHeadrest: "N/A",
                maximumLoadCapacity: "10 KG",
                originOfManufacture: "Vietnam",
            },
            dimensions: {
                width: "25 cm",
                height: "30 cm",
                depth: "25 cm",
                weight: "3 KG",
                seatHeight: "N/A",
                legHeight: "N/A",
            },
            warranty: {
                warrantySummary: "No Warranty",
                warrantyServiceType: "N/A",
                coveredInWarranty: "N/A",
                notCoveredInWarranty: "Physical damage",
                domesticWarranty: "N/A",
            }
        }
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

export const comparisonSchema = [
    {
        section: "General",
        id: "general",
        fields: [
            { label: "Sales Package", key: "salesPackage" },
            { label: "Model Number", key: "modelNumber" },
            { label: "Secondary Material", key: "secondaryMaterial" },
            { label: "Configuration", key: "configuration" },
            { label: "Upholstery Material", key: "upholsteryMaterial" },
            { label: "Upholstery Color", key: "upholsteryColor" }
        ]
    },
    {
        section: "Product",
        id: "product",
        fields: [
            { label: "Filling Material", key: "fillingMaterial" },
            { label: "Finish Type", key: "finishType" },
            { label: "Adjustable Headrest", key: "adjustableHeadrest" },
            { label: "Maximum Load Capacity", key: "maximumLoadCapacity" },
            { label: "Origin of Manufacture", key: "originOfManufacture" }
        ]
    },
    {
        section: "Dimensions",
        id: "dimensions",
        fields: [
            { label: "Width", key: "width" },
            { label: "Height", key: "height" },
            { label: "Depth", key: "depth" },
            { label: "Weight", key: "weight" },
            { label: "Seat Height", key: "seatHeight" },
            { label: "Leg Height", key: "legHeight" }
        ]
    },
    {
        section: "Warranty",
        id: "warranty",
        fields: [
            { label: "Warranty Summary", key: "warrantySummary" },
            { label: "Warranty Service Type", key: "warrantyServiceType" },
            { label: "Covered in Warranty", key: "coveredInWarranty" },
            { label: "Not Covered in Warranty", key: "notCoveredInWarranty" },
            { label: "Domestic Warranty", key: "domesticWarranty" }
        ]
    }
];

