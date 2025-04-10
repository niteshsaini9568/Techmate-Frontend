const categoriesData = [
    // Laptops
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        name: "UltraBook Pro X15",
        title: "Professional Ultrabook",
        image: "../../Categories/Laptop/1.jpeg",
        category: "Laptops",
        briefDescription: "Premium ultrabook with 12th Gen Intel i7",
        longDescription: "The UltraBook Pro X15 combines power and portability with a 15.6-inch 4K OLED display, Intel Core i7-12700H processor, 32GB RAM, and 1TB NVMe SSD. Features include Thunderbolt 4, Wi-Fi 6E, and up to 12 hours of battery life. The aluminum chassis and backlit keyboard make it perfect for professionals.",
        price: 1499.99,
        rating: 4.8
    },
    {
        id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
        name: "GameMaster RTX",
        title: "Gaming Laptop",
        image: "../../Categories/Laptop/2.jpeg",
        category: "Laptops",
        briefDescription: "High-performance gaming laptop with RTX 4080",
        longDescription: "Dominate your games with the GameMaster RTX. Features NVIDIA RTX 4080 graphics, AMD Ryzen 9 processor, 17.3-inch 240Hz display, and RGB keyboard. Includes advanced cooling system, 64GB RAM, and 2TB SSD storage. VR-ready with premium audio.",
        price: 2499.99,
        rating: 4.9
    },
    {
        id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
        name: "CreativeBook Air",
        title: "Creative Professional Laptop",
        image: "../../Categories/Laptop/3.jpeg",
        category: "Laptops",
        briefDescription: "Laptop for creative professionals",
        longDescription: "The CreativeBook Air is designed for creators with its color-accurate 16-inch mini-LED display, M2 Pro chip, and 32GB unified memory. Perfect for video editing, 3D rendering, and graphic design. Features include SD card slot, 6-speaker system, and studio-quality mics.",
        price: 1999.99,
        rating: 4.7
    },
    {
        id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
        name: "BusinessBook Elite",
        title: "Business Laptop",
        image: "../../Categories/Laptop/4.jpeg",
        category: "Laptops",
        briefDescription: "Enterprise-grade business laptop",
        longDescription: "The BusinessBook Elite offers security and reliability with Intel vPro, fingerprint reader, and TPM 2.0. Features 14-inch anti-glare display, Intel Core i5, 16GB RAM, and 512GB SSD. Built for business with extended battery life and MIL-STD durability.",
        price: 1299.99,
        rating: 4.6
    },
    {
        id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
        name: "StudentBook Plus",
        title: "Student Laptop",
        image: "../../Categories/Laptop/5.jpeg",
        category: "Laptops",
        briefDescription: "Affordable student laptop with long battery",
        longDescription: "Perfect for students, the StudentBook Plus offers great value with AMD Ryzen 5, 8GB RAM, and 256GB SSD. The 15.6-inch FHD display and 14-hour battery life make it ideal for all-day use. Includes webcam, fast charging, and Windows 11.",
        price: 699.99,
        rating: 4.5
    },

    // Headphones
    {
        id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
        name: "AudioPro Max",
        title: "Premium Wireless Headphones",
        image: "../../Categories/Headphones/1.jpeg",
        category: "Headphones",
        briefDescription: "High-end noise cancelling headphones",
        longDescription: "Experience premium sound with AudioPro Max. Features adaptive noise cancellation, 40mm drivers, and spatial audio. 30-hour battery life with fast charging. Premium leather cushions and aluminum construction. Multipoint Bluetooth connection.",
        price: 349.99,
        rating: 4.9
    },
    {
        id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
        name: "SportBeat Pro",
        title: "Sports Wireless Headphones",
        image: "../../Categories/Headphones/2.jpeg",
        category: "Headphones",
        briefDescription: "Sweat-resistant sports headphones",
        longDescription: "Perfect for workouts, the SportBeat Pro offers IPX7 water resistance, secure fit, and 12-hour battery life. Features include heart rate monitoring, voice coaching, and ambient sound mode. Quick charging gives 1 hour playback in 5 minutes.",
        price: 179.99,
        rating: 4.7
    },
    {
        id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
        name: "StudioPro X1",
        title: "Professional Studio Headphones",
        image: "../../Categories/Headphones/3.jpeg",
        category: "Headphones",
        briefDescription: "Professional monitoring headphones",
        longDescription: "The StudioPro X1 delivers accurate sound reproduction for music production. Features include 50mm drivers, detachable cable, and closed-back design. Includes carrying case and 1/4-inch adapter. Built for long studio sessions with memory foam cushions.",
        price: 249.99,
        rating: 4.8
    },
    {
        id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
        name: "BassBoost Wireless",
        title: "Bass-Heavy Wireless Headphones",
        image: "../../Categories/Headphones/4.jpeg",
        category: "Headphones",
        briefDescription: "Enhanced bass wireless headphones",
        longDescription: "Feel the bass with BassBoost Wireless. Features adjustable bass response, 20-hour battery life, and comfortable over-ear design. Includes built-in equalizer and one-touch voice assistant access. Foldable design for easy transport.",
        price: 159.99,
        rating: 4.6
    },
    {
        id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
        name: "GamerPro X",
        title: "Gaming Headset",
        image: "../../Categories/Headphones/5.jpeg",
        category: "Headphones",
        briefDescription: "Gaming headset with virtual surround",
        longDescription: "The GamerPro X delivers immersive gaming audio with 7.1 virtual surround sound, detachable mic, and RGB lighting. Features include in-line audio controls, memory foam cushions, and discord-certified microphone. Compatible with all gaming platforms.",
        price: 129.99,
        rating: 4.7
    },

    // Watches
    {
        id: "1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z",
        name: "SmartWatch Pro",
        title: "Premium Smartwatch",
        image: "https://example.com/images/smartwatch-pro.jpg",
        category: "Watches",
        briefDescription: "Advanced smartwatch with health tracking",
        longDescription: "The SmartWatch Pro offers comprehensive health monitoring including ECG, blood oxygen, and stress tracking. Features always-on AMOLED display, GPS, and 5-day battery life. Water resistant to 50m with premium titanium construction.",
        price: 399.99,
        rating: 4.8
    },
    {
        id: "2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a",
        name: "FitTrack Sport",
        title: "Sports Smartwatch",
        image: "https://example.com/images/fittrack-sport.jpg",
        category: "Watches",
        briefDescription: "Sports-focused fitness watch",
        longDescription: "Built for athletes, the FitTrack Sport includes 30 sport modes, advanced running metrics, and recovery tracking. Features include built-in GPS, heart rate monitoring, and 14-day battery life. Durable design with gorilla glass protection.",
        price: 249.99,
        rating: 4.7
    },
    {
        id: "3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b",
        name: "ClassicSmart X",
        title: "Hybrid Smartwatch",
        image: "https://example.com/images/classicsmart-x.jpg",
        category: "Watches",
        briefDescription: "Hybrid analog-digital smartwatch",
        longDescription: "The ClassicSmart X combines traditional design with smart features. Includes activity tracking, notifications, and 6-month battery life. Features traditional watch hands with hidden digital display. Water resistant with leather strap.",
        price: 199.99,
        rating: 4.6
    },
    {
        id: "4n5o6p7q-8r9s-0t1u-2v3w-4x5y6z7a8b9c",
        name: "KidsWatch Plus",
        title: "Children's Smartwatch",
        image: "https://example.com/images/kidswatch-plus.jpg",
        category: "Watches",
        briefDescription: "Kid-friendly smartwatch with GPS",
        longDescription: "Keep kids connected safely with KidsWatch Plus. Features include GPS tracking, SOS button, and parent controls. Includes fun games, camera, and activity tracking. Durable design with 2-day battery life.",
        price: 149.99,
        rating: 4.5
    },
    {
        id: "5o6p7q8r-9s0t-1u2v-3w4x-5y6z7a8b9c0d",
        name: "ProRunner GPS",
        title: "Running Watch",
        image: "https://example.com/images/prorunner-gps.jpg",
        category: "Watches",
        briefDescription: "Dedicated GPS running watch",
        longDescription: "The ProRunner GPS is built for runners with advanced metrics, training plans, and recovery tracking. Features include accurate GPS, heart rate monitoring, and 20-hour GPS battery life. Includes running dynamics and VO2 max estimation.",
        price: 299.99,
        rating: 4.8
    },

    // Tablets
    {
        id: "6p7q8r9s-0t1u-2v3w-4x5y-6z7a8b9c0d1e",
        name: "TabPro 12.9",
        title: "Professional Tablet",
        image: "https://example.com/images/tabpro-12.jpg",
        category: "Tablets",
        briefDescription: "12.9-inch professional tablet",
        longDescription: "The TabPro 12.9 offers desktop-class performance with M2 chip, 12.9-inch mini-LED display, and Apple Pencil support. Perfect for creative professionals with ProMotion technology and studio-quality audio. Available with up to 2TB storage.",
        price: 1099.99,
        rating: 4.9
    },
    {
        id: "7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f",
        name: "TabLite 10",
        title: "Lightweight Tablet",
        image: "https://example.com/images/tablite-10.jpg",
        category: "Tablets",
        briefDescription: "10-inch entertainment tablet",
        longDescription: "Perfect for entertainment, the TabLite 10 features a vibrant 10-inch display, quad speakers, and 12-hour battery life. Includes fast charging, facial recognition, and expandable storage. Ideal for streaming and gaming.",
        price: 349.99,
        rating: 4.7
    },
    {
        id: "8r9s0t1u-2v3w-4x5y-6z7a-8b9c0d1e2f3g",
        name: "KidsTab 8",
        title: "Children's Tablet",
        image: "https://example.com/images/kidstab-8.jpg",
        category: "Tablets",
        briefDescription: "Kid-friendly 8-inch tablet",
        longDescription: "The KidsTab 8 is designed for children with a durable case, parental controls, and educational content. Features include 8-inch HD display, 32GB storage, and 10-hour battery life. Includes 1-year subscription to kids' content.",
        price: 199.99,
        rating: 4.6
    },
    {
        id: "9s0t1u2v-3w4x-5y6z-7a8b-9c0d1e2f3g4h",
        name: "TabNote Pro",
        title: "Note-Taking Tablet",
        image: "https://example.com/images/tabnote-pro.jpg",
        category: "Tablets",
        briefDescription: "E-ink tablet for note-taking",
        longDescription: "The TabNote Pro features a 10.3-inch e-ink display perfect for note-taking and reading. Includes pressure-sensitive pen, weeks of battery life, and document annotation features. Syncs with cloud services.",
        price: 499.99,
        rating: 4.8
    },
    {
        id: "0t1u2v3w-4x5y-6z7a-8b9c-0d1e2f3g4h5i",
        name: "TabPro Mini",
        title: "Compact Professional Tablet",
        image: "https://example.com/images/tabpro-mini.jpg",
        category: "Tablets",
        briefDescription: "8.3-inch professional tablet",
        longDescription: "The TabPro Mini packs professional features in a compact size. Features include A15 chip, 8.3-inch Liquid Retina display, and Apple Pencil support. Perfect for mobility with 5G option and all-day battery life.",
        price: 499.99,
        rating: 4.7
    },
    {
        id: "s1a2b3c4d",
        name: "Galaxy Pro Max 12",
        title: "Flagship Smartphone",
        image: "https://example.com/images/galaxy-pro-max.jpg",
        category: "Smartphones",
        briefDescription: "High-performance smartphone with AMOLED display.",
        longDescription: "The Galaxy Pro Max 12 features a 6.8-inch AMOLED display, Snapdragon 8 Gen 2 processor, 12GB RAM, and 256GB storage. Highlights include a 108MP triple-camera system, 5G connectivity, and a 5000mAh battery with fast charging.",
        price: 1199.99,
        rating: 4.7
    },
    {
        id: "s2a2b3c4d",
        name: "iPhone 15 Pro",
        title: "Apple Flagship",
        image: "https://example.com/images/iphone-15-pro.jpg",
        category: "Smartphones",
        briefDescription: "Apple's latest flagship with A17 Bionic chip.",
        longDescription: "The iPhone 15 Pro offers a 6.1-inch Super Retina XDR display, A17 Bionic chip, 8GB RAM, and up to 1TB storage. Includes a titanium frame, improved battery life, and a versatile 48MP camera with ProRAW support.",
        price: 1299.99,
        rating: 4.9
    },
    {
        id: "s3a2b3c4d",
        name: "Pixel Ultra 8",
        title: "Google Smartphone",
        image: "https://example.com/images/pixel-ultra.jpg",
        category: "Smartphones",
        briefDescription: "Google's flagship phone with the best camera.",
        longDescription: "The Pixel Ultra 8 features a 6.7-inch OLED display, Tensor G3 chip, 12GB RAM, and 512GB storage. Known for its advanced computational photography, it delivers unparalleled image quality with a 50MP main sensor.",
        price: 1099.99,
        rating: 4.8
    },
    {
        id: "s4a2b3c4d",
        name: "Xperia Z Fold",
        title: "Foldable Smartphone",
        image: "https://example.com/images/xperia-z-fold.jpg",
        category: "Smartphones",
        briefDescription: "Foldable innovation meets productivity.",
        longDescription: "The Xperia Z Fold offers a 7.6-inch foldable AMOLED display, Snapdragon 8 Gen 2, 16GB RAM, and 512GB storage. Built for multitasking, it features S-Pen support, triple cameras, and a 4500mAh battery.",
        price: 1799.99,
        rating: 4.6
    },
    {
        id: "s5a2b3c4d",
        name: "OnePlus Ace 12",
        title: "Flagship Killer",
        image: "https://example.com/images/oneplus-ace.jpg",
        category: "Smartphones",
        briefDescription: "Powerful yet affordable flagship alternative.",
        longDescription: "The OnePlus Ace 12 features a 6.7-inch AMOLED display, Dimensity 9000+, 16GB RAM, and 512GB storage. Includes 150W fast charging, triple cameras, and OxygenOS 14 for a seamless experience.",
        price: 899.99,
        rating: 4.5
    },
    {
        id: "c1a2b3c4d",
        name: "Canon EOS R6 II",
        title: "Mirrorless Camera",
        image: "https://example.com/images/canon-eos-r6.jpg",
        category: "Cameras",
        briefDescription: "Advanced full-frame mirrorless camera.",
        longDescription: "The Canon EOS R6 II features a 24.2MP sensor, up to 40fps continuous shooting, and 4K60p video. Ideal for professionals, it offers dual card slots, 5-axis stabilization, and intuitive controls.",
        price: 2499.99,
        rating: 4.9
    },
    {
        id: "c2a2b3c4d",
        name: "Sony Alpha 7 IV",
        title: "Hybrid Camera",
        image: "https://example.com/images/sony-alpha-7.jpg",
        category: "Cameras",
        briefDescription: "High-resolution mirrorless hybrid camera.",
        longDescription: "The Sony Alpha 7 IV features a 33MP sensor, 10fps shooting, and advanced video capabilities. Its autofocus system and weather-sealed body make it suitable for versatile usage.",
        price: 2799.99,
        rating: 4.8
    },
    {
        id: "c3a2b3c4d",
        name: "Fujifilm X-T5",
        title: "APS-C Mirrorless",
        image: "https://example.com/images/fujifilm-xt5.jpg",
        category: "Cameras",
        briefDescription: "Compact mirrorless camera with vintage design.",
        longDescription: "The Fujifilm X-T5 offers a 40.2MP sensor, 15fps mechanical shutter, and 6.2K30p video. Its film simulation modes and robust body appeal to photography enthusiasts.",
        price: 1999.99,
        rating: 4.7
    },
    {
        id: "c4a2b3c4d",
        name: "Nikon Z9",
        title: "Pro-Level Camera",
        image: "https://example.com/images/nikon-z9.jpg",
        category: "Cameras",
        briefDescription: "Ultimate professional mirrorless camera.",
        longDescription: "The Nikon Z9 features a 45.7MP stacked sensor, 120fps stills, and 8K60p video recording. Built for professionals, it offers unmatched speed and durability.",
        price: 5999.99,
        rating: 5.0
    },
    {
        id: "c5a2b3c4d",
        name: "Olympus OM-1",
        title: "Micro Four Thirds",
        image: "https://example.com/images/olympus-om1.jpg",
        category: "Cameras",
        briefDescription: "Compact system camera for creative photography.",
        longDescription: "The Olympus OM-1 offers a 20.4MP stacked sensor, 120fps burst shooting, and high-resolution computational photography. Perfect for travel and macro enthusiasts.",
        price: 1799.99,
        rating: 4.7
    },
    {
        id: "sp1a2b3c4d",
        name: "JBL PartyBox 310",
        title: "Portable Party Speaker",
        image: "https://example.com/images/jbl-partybox.jpg",
        category: "Speakers",
        briefDescription: "High-powered portable party speaker.",
        longDescription: "The JBL PartyBox 310 features 240W sound output, dynamic light show, and 18-hour battery life. Splashproof design and karaoke inputs make it ideal for outdoor events.",
        price: 499.99,
        rating: 4.8
    },
    {
        id: "sp2a2b3c4d",
        name: "Sonos One Gen 2",
        title: "Smart Home Speaker",
        image: "https://example.com/images/sonos-one.jpg",
        category: "Speakers",
        briefDescription: "Smart speaker with Alexa and Google Assistant.",
        longDescription: "The Sonos One Gen 2 delivers rich sound, seamless multi-room audio, and voice assistant integration. Compact design fits any space.",
        price: 219.99,
        rating: 4.7
    },
    {
        id: "sp3a2b3c4d",
        name: "Bose SoundLink Flex",
        title: "Portable Bluetooth Speaker",
        image: "https://example.com/images/bose-soundlink.jpg",
        category: "Speakers",
        briefDescription: "Durable and waterproof Bluetooth speaker.",
        longDescription: "The Bose SoundLink Flex offers crisp sound, rugged design, and IP67 waterproof rating. Perfect for travel and outdoor adventures.",
        price: 149.99,
        rating: 4.8
    },
    {
        id: "sp4a2b3c4d",
        name: "Marshall Emberton",
        title: "Compact Speaker",
        image: "https://example.com/images/marshall-emberton.jpg",
        category: "Speakers",
        briefDescription: "Stylish portable speaker with signature sound.",
        longDescription: "The Marshall Emberton offers 20+ hours of playback, robust build quality, and classic design. True wireless stereo mode for expansive sound.",
        price: 179.99,
        rating: 4.6
    },
    {
        id: "sp5a2b3c4d",
        name: "UE Wonderboom 3",
        title: "Mini Bluetooth Speaker",
        image: "https://example.com/images/ue-wonderboom.jpg",
        category: "Speakers",
        briefDescription: "Compact and waterproof speaker for on-the-go.",
        longDescription: "The UE Wonderboom 3 delivers 360-degree sound, IP67 waterproofing, and 14-hour battery life. Perfect for pools, beaches, and showers.",
        price: 99.99,
        rating: 4.5
    },
    {
        id: "all1a2b3c4d",
        name: "MacBook Air M2",
        title: "Apple's Slim Laptop",
        image: "../../Categories/Laptop/6.jpeg",
        category: "Laptops",
        briefDescription: "Lightweight and powerful with M2 chip.",
        longDescription: "The MacBook Air M2 offers a 13.6-inch Liquid Retina display, 8-core CPU, and 10-core GPU. Includes up to 24GB unified memory and all-day battery life.",
        price: 1199.99,
        rating: 4.8
    },
    {
        id: "all2a2b3c4d",
        name: "Galaxy Tab S9 Ultra",
        title: "High-End Tablet",
        image: "https://example.com/images/galaxy-tab-s9.jpg",
        category: "Tablets",
        briefDescription: "Samsung's flagship tablet.",
        longDescription: "The Galaxy Tab S9 Ultra features a 14.6-inch AMOLED display, Snapdragon 8 Gen 2 chip, and 16GB RAM. Designed for productivity and creativity with S-Pen.",
        price: 1499.99,
        rating: 4.9
    },

    {
        "id": "1g2a3m4e-5x6y-7z8a-9b0c-1d2e3f4g5h6i",
        "name": "GamerPro Xtreme",
        "title": "Gaming Headset",
        "image": "https://example.com/images/gamerpro-xtreme.jpg",
        "category": "Gaming",
        "briefDescription": "High-quality noise-canceling gaming headset",
        "longDescription": "GamerPro Xtreme features surround sound, a noise-canceling microphone, and memory foam ear cushions for long-lasting comfort. Compatible with PC, PS5, Xbox, and more.",
        "price": 99.99,
        "rating": 4.8
    },
    {
        "id": "2g3a4m5e-6x7y-8z9a-0b1c-2d3e4f5g6h7i",
        "name": "HyperStrike Elite",
        "title": "Gaming Mouse",
        "image": "https://example.com/images/hyperstrike-elite.jpg",
        "category": "Gaming",
        "briefDescription": "Precision gaming mouse with RGB lighting",
        "longDescription": "HyperStrike Elite is designed for eSports players, with customizable DPI settings up to 16,000 and RGB lighting. Equipped with a high-performance sensor for precision control.",
        "price": 49.99,
        "rating": 4.6
    },
    {
        "id": "3g4a5m6e-7x8y-9z0a-1b2c-3d4e5f6g7h8i",
        "name": "UltraVibe 4K",
        "title": "Gaming Monitor",
        "image": "https://example.com/images/ultravibe-4k.jpg",
        "category": "Gaming",
        "briefDescription": "4K ultra-wide curved gaming monitor",
        "longDescription": "UltraVibe 4K features a 27-inch curved display with 144Hz refresh rate, perfect for immersive gaming. HDR support and ultra-low latency make it a great choice for competitive gaming.",
        "price": 399.99,
        "rating": 4.9
    },
    {
        "id": "4g5a6m7e-8x9y-0z1a-2b3c-4d5e6f7g8h9i",
        "name": "RocketPad V2",
        "title": "Gaming Keyboard",
        "image": "https://example.com/images/rocketpad-v2.jpg",
        "category": "Gaming",
        "briefDescription": "Mechanical keyboard with RGB backlighting",
        "longDescription": "RocketPad V2 features tactile mechanical switches for fast response, customizable RGB lighting, and programmable macro keys. Ideal for gamers looking for precision and style.",
        "price": 89.99,
        "rating": 4.7
    },
    {
        "id": "5g6a7m8e-9x0y-1z2a-3b4c-5d6e7f8g9h0i",
        "name": "BattleGlove Pro",
        "title": "Gaming Gloves",
        "image": "https://example.com/images/battleglove-pro.jpg",
        "category": "Gaming",
        "briefDescription": "Ergonomic gaming gloves for comfort",
        "longDescription": "BattleGlove Pro is designed to reduce hand fatigue during extended gaming sessions. Made with breathable fabric and reinforced fingertips for precision and comfort.",
        "price": 29.99,
        "rating": 4.5
    },

    {
        "id": "6a7b8c9d-0e1f-2g3h-4i5j-6k7l8m9n0o1p",
        "name": "PowerCharge 5000",
        "title": "Portable Power Bank",
        "image": "../../Categories/Accessories/1.jpeg",
        "category": "Electronics Accessories",
        "briefDescription": "5000mAh portable power bank",
        "longDescription": "PowerCharge 5000 is compact and lightweight, offering reliable power for your devices on the go. Equipped with fast charging technology and multiple USB ports.",
        "price": 29.99,
        "rating": 4.7
    },
    {
        "id": "7a8b9c0d-1e2f-3g4h-5i6j-7k8l9m0n1o2p",
        "name": "BlueWave Pro",
        "title": "Bluetooth Speaker",
        "image": "../../Categories/Accessories/2.jpeg",
        "category": "Electronics Accessories",
        "briefDescription": "Portable waterproof Bluetooth speaker",
        "longDescription": "BlueWave Pro offers high-quality sound in a compact, waterproof design. Perfect for outdoor activities, it has 12 hours of battery life and 360-degree audio.",
        "price": 69.99,
        "rating": 4.8
    },
    {
        "id": "8a9b0c1d-2e3f-4g5h-6i7j-8k9l0m1n2o3p",
        "name": "FlexCharge Cable",
        "title": "USB-C Charging Cable",
        "image": "../../Categories/Accessories/3.jpeg",
        "category": "Electronics Accessories",
        "briefDescription": "Durable and fast USB-C charging cable",
        "longDescription": "FlexCharge Cable features reinforced connectors and a braided design, providing fast and secure charging for your USB-C devices. Compatible with most modern smartphones.",
        "price": 14.99,
        "rating": 4.6
    },
    {
        "id": "9a0b1c2d-3e4f-5g6h-7i8j-9k0l1m2n3o4p",
        "name": "SmartConnect Hub",
        "title": "USB-C Hub",
        "image": "../../Categories/Accessories/4.jpeg",
        "category": "Electronics Accessories",
        "briefDescription": "Multifunctional USB-C hub with HDMI",
        "longDescription": "SmartConnect Hub expands your laptop's connectivity with multiple USB ports, HDMI output, and SD card slots. Perfect for enhancing productivity with a single hub.",
        "price": 49.99,
        "rating": 4.7
    },
    {
        "id": "10a11b12c-13d14e15f-16g17h18i-19j20k21l",
        "name": "SilentCharge Mat",
        "title": "Wireless Charging Pad",
        "image": "../../Categories/Accessories/5.jpeg",
        "category": "Electronics Accessories",
        "briefDescription": "Fast wireless charging pad",
        "longDescription": "SilentCharge Mat offers 10W fast charging for your devices without the hassle of cables. Its sleek, minimalist design ensures a clutter-free charging experience.",
        "price": 39.99,
        "rating": 4.8
    }

];

export default categoriesData;