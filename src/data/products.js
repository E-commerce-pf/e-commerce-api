const products = [
  {
    title:
      "MSI Ventus GeForce RTX 2060 12GB GDDR6 PCI Express 3.0 x16 ATX Video Card RTX 2060 VENTUS GP 12G OC",
    price: 470,
    description:
      "12GB 192-Bit GDDR6\nBoost Clock 1695 MHz\n1 x HDMI 2.0b 3 x DisplayPort 1.4a\n2176 CUDA Cores\nPCI Express 3.0 x16",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-719-S01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-719-S02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-719-S03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-719-S80.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/14-137-719-S05.jpg",
    ],
    stock: 13,
    sales: 342,
    categories: ["computing"],
  },
  {
    title: "GIGABYTE G27Q 27' 144Hz 1440P Gaming Monitor",
    price: 280,
    description:
      "12GB 192-Bit GDDR6\nBoost Clock 1695 MHz\n1 x HDMI 2.0b 3 x DisplayPort 1.4a\n2176 CUDA Cores\nPCI Express 3.0 x16",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-V90.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-07.jpg",
    ],
    stock: 26,
    sales: 120,
    discount: 0.2,
    categories: ["computing"],
  },
  {
    title: "AMD Ryzen 5 5600X - Ryzen 5 5000 Series Vermeer",
    price: 320,
    description:
      "7nm Vermeer (Zen 3) 65W 32MB L3 Cache 3MB L2 Cache Windows 11 Supported",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-666-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A2W0S210105phmiS.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A2W0S210105XOXc1.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150R7GNW29.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150R80QU72.jpg",
    ],
    stock: 56,
    sales: 452,
    categories: ["computing"],
  },
  {
    title: "ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4",
    price: 210,
    description:
      "BIOS update might require for AMD Zen 3 Ryzen 5000 series CPU\nAMD AM4 Socket and PCIe 4.0: The perfect pairing for 3rd Gen AMD Ryzen CPUs\nRobust Power Design: 12+2 DrMOS power stages with high-quality alloy chokes and durable capacitors to provide reliable power for the latest high-core-count AMD CPUs\nOptimized Thermal Solution: Fanless VRM and chipset heatsinks with ASUS Stack Cool 3+ design keep your system running reliably under heavy load by enhancing passive cooling capacity for critical on...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-311-V03.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-311-V01.jpg ",
      " https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-311-V04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-311-V06.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-311-V02.jpg ",
    ],
    stock: 67,
    sales: 330,
    discount: 0.15,
    categories: ["computing"],
  },
  {
    title:
      "CORSAIR RMx Series (2021) RM850x CP-9020200-NA 850 W ATX12V / EPS12V 80 PLUS GOLD Certified Full Modular Power Supply",
    price: 150,
    description:
      "Fully Modular: Only connect the cables your system needs, making clean and tidy builds easier.\n135mm Magnetic Levitation Fan: Utilizes a magnetic levitation bearing and custom engineered rotors for high performance, low noise, and superior reliability.\nEPS12V Connector: For wide compatibility with modern graphics cards and motherboards.\n100% All Japanese 105°C Capacitors: Premium internal components ensure unwavering power delivery and long-term reliability.\nModern Standby Compatible: Extremely ...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-272-V01.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-272-V03.jpg ",
      " https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-272-V80.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-272-V08.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/17-139-272-V02.jpg",
    ],
    stock: 120,
    sales: 1230,
    categories: ["computing"],
  },
  {
    title: "Elden Ring - PlayStation 5",
    price: 60,
    description:
      "Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire.\nELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly. Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, ...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-253-247-S14.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-253-247-S02.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-253-247-S03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-253-247-S04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-253-247-S12.jpg",
    ],
    stock: 105,
    sales: 223,
    categories: ["video games"],
  },
  {
    title: "Horizon Forbidden West - Launch Edition - PlayStation 4",
    price: 60,
    description:
      "An epic Action/RPG Adventure:\nBrave an expansive open world - discover distant lands, new enemies, rich cultures and striking characters.\nA majestic frontier - explore the lush forests, sunken cities and towering mountains of a far-future America.\nConfront new dangers - engage in strategic battles against enormous machines and mounted human enemies by using weapons, gear and traps crafted from salvaged parts.\nUnravel startling mysteries - uncover the secret behind Earth's imminent collapse and u...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-930-V07.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-930-V01.jpg ",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-930-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-930-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-261-930-V04.jpg",
    ],
    stock: 95,
    sales: 302,
    categories: ["video games"],
  },
  {
    title: "Resident Evil Village - PS5 Video Games",
    price: 54,
    description:
      "All new Resident Evil experience - picking up where Resident Evil 7 biohazard left Off, Resident Evil village is the eighth major installment in the flagship Resident Evil series\nNext generation Technology - Re engine paired with next-gen Console power will deliver photorealistic graphics, bringing the shadowy village and its haunting residents to life.\nFirst-person action - players will assume the role of Ethan winters and experience every up-close battle and terrifying pursuit through a first-...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/79-233-156-01.jpg",
    ],
    stock: 86,
    sales: 523,
    discount: 0.15,
    categories: ["video games"],
  },
  {
    title: "Far Cry 6 Standard Edition - Xbox One, Xbox Series X|S",
    price: 60,
    description:
      "Pre-order now to get a deadly Discos Locos weapon and an outfit for Chorizo\nJoin the revolution as you play as Dani Rojas, a local Yaran, and become a guerrilla fighter to liberate your nation\nFight against Anton's troops in the largest Far Cry playground to date across jungles, beaches, and Esperanza, the capital city of Yara\nEmploy makeshift weapons, vehicles, and animal companions to burn Anton's ruthless regime to the ground",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/74-170-347-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/74-170-347-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/74-170-347-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/74-170-347-V05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/74-170-347-V06.jpg",
    ],
    stock: 93,
    sales: 209,
    categories: ["video games"],
  },
  {
    title: "Lego Star Wars: Skywalker Saga - Nintendo Switch",
    price: 60,
    description:
      "The galaxy is yours with LEGO® Star Wars: The Skywalker Saga!\nPlay through all nine Star Wars saga films in a brand-new LEGO video game unlike any other.\nExperience fun-filled adventures, whimsical humor, and the freedom to fully immerse yourself in the LEGO Star Wars universe like never before.",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-330-200-12.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-330-200-01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-330-200-02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-330-200-03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-330-200-05.jpg",
    ],
    stock: 135,
    sales: 190,
    discount: 0.25,
    categories: ["video games"],
  },
  {
    title: "LG OLED65C1PUB 4K Smart OLED TV w/ AI ThinQ (2021)",
    price: 1747,
    description:
      "Self-Lit OLED pixels: Perfect Black, Intense Color, Infinite Contrast\nA9 Gen 4 AI Processor 4K with AI Picture Pro/Sound Pro\nDolby Vision IQ and Dolby Atmos\nWebOS + ThinQ AI w/ Magic Remote\nGaming: G-SYNC Compatible, FreeSync, VRR, ALLM",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V81.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V06.jpg",
    ],
    stock: 36,
    sales: 84,
    categories: ["televisions"],
  },
  {
    title: "LG OLED65C1PUB 4K Smart OLED TV w/ AI ThinQ (2021)",
    price: 1747,
    description:
      "Self-Lit OLED pixels: Perfect Black, Intense Color, Infinite Contrast\nA9 Gen 4 AI Processor 4K with AI Picture Pro/Sound Pro\nDolby Vision IQ and Dolby Atmos\nWebOS + ThinQ AI w/ Magic Remote\nGaming: G-SYNC Compatible, FreeSync, VRR, ALLM",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V81.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-007-772-V06.jpg",
    ],
    stock: 36,
    sales: 84,
    categories: ["televisions"],
  },
  {
    title:
      "Caixun EC55S1A, 55 inch 4K UHD HDR Smart Android TV with Google Assistant (Voice Control), Screen Share, HDMI, USB (2021 Model)",
    price: 530,
    description:
      "Caixun 55 inch 4K Ultra HD Smart TV\nSmart Android 9.0 TV\n4K UHD picture quality\nScreen resolution: 3840×2160\nScreen viewing angle: 178°\n1.5GB+8GB of large-capacity operation and storage space\nCompatible with HDR, HDR10 (high dynamic range) .\nSupport Connect to Bluetooth Earbuds & Bluetooth Speaker.\nEquipped with Google Assistant, quickly search more than 500,000 movies and shows, and control smart home devices.\nEasily launch YouTube and Netflix with quick access buttons.\nDownload other favorite ...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B2B4S220319P9Gyq.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B2B4S220319IlIWL.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B2B4S210812AorjU.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B2B4S210812mnWwB.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B2B4S220319kaBnq.jpg",
    ],
    stock: 42,
    sales: 15,
    discount: 0.15,
    categories: ["televisions"],
  },
  {
    title: 'Samsung QLED Q60 Series 50" 4K LED TV (QN50Q60AAFXZA, 2021)',
    price: 630,
    description:
      "Quantum Processor Lite 4K optimizes color, contrast, and HDR quality\nQuantum Dot technology provides 100% color volume - full color with full brightness\n10-bit support enables over a billion shades of color\nQuantum HDR (HDR10, HDR10+, HLG) for extended contrast and brightness when viewing HDR content\nedge-lit Dual LED backlight combines cool tone and warm tone LEDs for improved picture contrast with less light leakage",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-356-697-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-356-697-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-356-697-V81.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-356-697-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/89-356-697-V05.jpg",
    ],
    stock: 53,
    sales: 72,
    categories: ["televisions"],
  },
  {
    title:
      'Sony 65" Class BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR (XR65A90J)',
    price: 2300,
    description:
      "COGNITIVE PROCESSOR XR™  Revolutionary TV processing technology that understands how humans see and hear to deliver intense contrast with pure blacks, high peak brightness, and natural colors.\nXR TRILUMINOS PRO™ - Rediscover everything you watch with billions of accurate colors and see impressive picture quality that is natural and beautiful to the human eye.\nXR OLED CONTRAST PRO  Feel immersive depth and realism with ultimate blacks and our brightest-ever OLED picture.\nXR MOTION CLARITY",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1CZD210325M4TUS.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ADM2S210401Pvo9X.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ADM2S210401SpF9G.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1CZD210325FLXOI.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1J7D210407HBGE0.jpg",
    ],
    stock: 6,
    sales: 15,
    discount: 0.25,
    categories: ["televisions"],
  },
  {
    title: 'Hisense 55U8G 55" 4K ULED Premium Hisense Android Smart TV (2021)',
    price: 750,
    description:
      "Dolby Vision\nFull Array\nUp to 1500 Nit Peak Brightness\nUltra Motion\nIMAX Enhanced brings the cinema experience home\nChange the channel\nHisense Android TV",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1CZD2109221GJ0Q.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A3YFS220317FjQDs.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1CZD2109221G5SD.jpg",
    ],
    stock: 12,
    sales: 34,
    categories: ["televisions"],
  },
  {
    title:
      ' Klipsch RP-440C Reference Premiere Center Channel Speaker With Quad 4" Cerametallic Cone Woofers - Each (Cherry)',
    price: 349,
    description:
      'Linear Travel Suspension Titanium Tweeter\nQuad 4" Spun Copper Cerametallic Cone Woofers\n90x90 Hybrid Tractrix Horn\nAll New Tractrix Port\nMDF Cabinet with Brushed Polymer Veneer Baffle Finish\nStrong, Flexible Removable Grille',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/V01J_1_2017061311778730.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/V01J_1_201706132007480582.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AKR9_1_201911111655422201.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AKR9_1_201911111998834697.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B6FWD21122313TR7HE0.jpg",
    ],
    stock: 84,
    sales: 92,
    discount: 0.1,
    categories: ["audio"],
  },
  {
    title: "Klipsch K-100SW 10-Inch Powered Subwoofer",
    price: 130,
    description:
      'All-digital amplifier delivers 100/ 250 watts of dynamic power\n10" front-firing woofer\nBrushed black polymer veneer cabinet\nLine/LFE',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/0S6-0033-001U0-03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/0S6-0033-001U0-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/0S6-0033-001U0-05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/0S6-0033-001U0-07.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/0S6-0033-001U0-08.jpg",
    ],
    stock: 230,
    sales: 323,
    categories: ["audio"],
  },
  {
    title: "Yamaha R-S202 Stereo Receiver with Bluetooth, Black",
    price: 200,
    description:
      "Advanced circuitry design\nBluetooth to your favorite streaming music services\n40 station FM/AM preset tuning\nBrushed aluminum finish and simplistic design\nSpeaker selector for two systems\nSimple remote control layout\nHeadphone terminal",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/86-971-039-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/86-971-039-03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/86-971-039-05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/86-971-039-06.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/86-971-039-V80.jpg",
    ],
    stock: 8,
    sales: 70,
    discount: 0.15,
    categories: ["audio"],
  },
  {
    title: "Polk Audio Atrium4 Compact Indoor/Outdoor Speaker (Black / Pair)",
    price: 200,
    description:
      "Easy one-cut, drop-in installation puts built-in audio within reach, with Perfect Fit templates, a precision flange, and (available) pre-construction brackets; achieve secure, vibration-free efficiency with a simple turn of the unique Rotating Cam system.\n4 1/2-inch (11.43cm) long-throw mineral-filled polypropylene cone driver with butyl rubber surround pumps out surprising bass response from a compact design.\n3/4-inch (19mm) anodized aluminum dome tweeter with neodymium magnet for better power ...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/82-290-182-02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/82-290-182-03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/82-290-182-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/82-290-182-05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/82-290-182-07.jpg",
    ],
    stock: 4,
    sales: 63,
    categories: ["audio"],
  },
  {
    title:
      "SADA D-207 Computer Speaker USB Wired Combination Speaker Colorful LED Bass Stereo Music Player Subwoofer Speaker for Desktop Laptop Notebook Tablet PC Smart Phone",
    price: 65,
    description:
      "Steady and undistorted bass sound effect with stereo sound surrounding. Equipped with intelligent frequency division technology, brings you wonderful music.\nEnjoy your music through dual high-performance loudspeaker. Ensures enhanced clarity and fidelity.\nLED light design, brings you beautiful light and wonderful music enjoyment at the same time\nWide Compatibility Desktop PC, laptop, DVD, TV, smartphone, tablet, PSP, etc.\nUSB-powered, energy-saving and environmentally-friendly, safe and reliable...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ANRBD200903O01P9.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ANRBD200903DW6CC.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ANRBD200903MP7FK.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1NV_131957320553054732b3e65cSNgA.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1NV_131957320620242518z2TTK5xLRD.jpg",
    ],
    stock: 46,
    sales: 234,
    discount: 0.1,
    categories: ["audio"],
  },
  {
    title:
      "Asus ROG Phone 5s ZS676KS 5G 512GB 18GB RAM Dual SIM GSM Unlocked - Black",
    price: 1066,
    description:
      "Asus ROG Phone 5s ZS676KS 5G 512GB 18GB RAM Dual SIM GSM Unlocked",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AXJ8S210823A6D5E.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AXJ8S2108232B1D1.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AXJ8S210823F3742.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AXJ8S21082351DDF.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AXJ8S210823CA702.jpg",
    ],
    stock: 14,
    sales: 32,
    discount: 0.1,
    categories: ["cell phones and phones"],
  },
  {
    title:
      "Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy",
    price: 230,
    description:
      "Discover moments you never knew existed with 30x Space Zoom and zoom way past the obvious.\nWhen it's dark, the Galaxy S20 FE 5G's rear camera uses advanced AI to pull in more light, so your shots come out detailed and colorful.\nTake your selfies and vlogs to a whole new level with Galaxy S20 FE 5G's 32MP Front Camera and be the shining star of every shot.\nLive your life without worrying where you can plug in your phone. The 4500mAh (typical) battery has the power to outlast your day and the inte...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-994-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-994-V80.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-169-994-V02.jpg",
    ],
    stock: 26,
    sales: 54,
    categories: ["cell phones and phones"],
  },
  {
    title:
      'Motorola One 5G Ace 5G Unlocked Cell Phone 6.7" Frosted Silver 128GB 6GB RAM',
    price: 400,
    description:
      'Qualcomm Snapdragon 750G 5G Octa-core\nTriple: 48 MP + 8 MP + 2 MP Rear Camera 16 MP Front-Facing Camera\n6GB RAM 128GB Up to 1TB microSDXC (dedicated slot)\n6.7" LTPS 2400 x 1080 394 ppi\nNon-removable Li-Po Battery 5000mAh\nAndroid 10\n5G NR: 2 / 5 / 25 / 41 / 66 / 71\n4G LTE: 1 / 2 / 3 / 4 / 5 / 7 / 8 / 12 / 13 / 14 / 17 / 18 / 19 / 20 / 25 / 26 / 29 / 30 / 38 / 39 / 40 / 41 / 66 / 71\n3G: 1 / 2 / 4 / 5 / 8\n2G: 2 / 3 / 5 / 8',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-209-669-V13.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-209-669-V80.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-209-669-V15.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-209-669-V14.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/75-209-669-V08.jpg",
    ],
    stock: 15,
    sales: 98,
    discount: 0.05,
    categories: ["cell phones and phones"],
  },
  {
    title:
      "Xiaomi POCO X3 Pro 6.67” FHD+ DotDisplay 256GB Memory 8GB RAM Qualcomm® Snapdragon™ 860 Processor 48MP Quad Camera Factory Unlocked Global Version",
    price: 305,
    description:
      "Xiaomi POCO X3 Pro\n6.67” FHD+ DotDisplay\n256GB Memory\n8GB RAM\nQualcomm® Snapdragon™ 860 Processor\n48MP Quad Camera\nFactory Unlocked\nGlobal Version",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AGRES210526rF5c2.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AGRES210526Qu4AA.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AGRES2105269y0sF.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AGRES210526HDxyM.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AGRES210526myXy2.jpg",
    ],
    stock: 82,
    sales: 234,
    categories: ["cell phones and phones"],
  },
  {
    title:
      "2021 New Apple iPhone 13 Pro Max (256GB, Sierra Blue) +GSM Unlocked",
    price: 1710,
    description:
      '6.7 inches, Super Retina XDR OLED, 1284 x 2778 pixels\n256GB Storage, 6GB RAM\niOS 15, Apple A15 Bionic (5 nm), Hexa-core (2x3.22 GHz + 4xX.X GHz)\n12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom 12 MP, f/1.8, 13mm, 120° (ultrawide), PDAF TOF 3D LiDAR scanner (depth), Front: 12 MP, f/2.2, 23mm (wide), 1/3.6" SL 3D, (depth/biometrics sensor)',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AN2HS211002fXBTf.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AN2HS211002VCHHV.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AN2HS211002x8Mvq.jpg",
    ],
    stock: 25,
    sales: 46,
    discount: 0.05,
    categories: ["cell phones and phones"],
  },
  {
    title:
      "Frigidaire FRQG1721AV 17.4 Cu. Ft. 4 Door Refrigerator - Stainless Steel",
    price: 1405,
    description:
      "Adjustable Glass Shelves\nStore-More Refrigerator Bins\nLED Interior Light",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/96-865-433-S10.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/96-865-433-S05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/96-865-433-S03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/96-865-433-S06.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/96-865-433-S07.jpg",
    ],
    stock: 8,
    sales: 32,
    discount: 0.1,
    categories: ["other"],
  },
  {
    title: "Sunpentown BM-1107",
    price: 54,
    description: "Timer\nAutomatic Shut-Off",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A78X_1_20150421350304459.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A1RG_1_20150514393483936.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A2HK_1_20150601427213054.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AAYY_1_201703161665435309.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AE54_1_201708111097103069.jpg",
    ],
    stock: 9,
    sales: 21,
    categories: ["other"],
  },
  {
    title:
      "TACKLIFE 12,000 BTU 3-in-1 Portable Air Conditioner, Cooling, Fan and Dehumidifying, 16.5ft Long Distance Air Supply, For Bedroom, Living room, Office and Kitchen, White, Upright - TKP165CW",
    price: 290,
    description:
      "Three-in-one Model: This portable mobile air conditioner is 6500BTU (12000 BTU ASHRAE), the size is W:17in H:27.8in D:13.4in, with 3 main functions: cooling, fan and dehumidifying. In cooling mode, the minimum temperature is 61°F and the maximum temperature is 90°F. The floor-standing portable AC unit can meet your various needs, suitable for bedroom, living room, office, garage, and even kitchen.\nFull Outlet and 16.5Ft Air Supply: Compared with the half outlets of other air coolers, our compact...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AWR7S210828CFlu8.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AWR7S2108286H8oy.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AWR7S210828xdGOF.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AWR7S2108287BTal.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AWR7S210828il1Gq.jpg",
    ],
    stock: 32,
    sales: 103,
    discount: 0.15,
    categories: ["other"],
  },
  {
    title:
      "Greatlizard LS11 RC Drone 4K With Camera HD Mini Foldable Drone FPV Wifi Drones Professional Quadcopter Hold Mode Dual Cameras for Drone Beginner",
    price: 70,
    description:
      "With foldable arms, small size, easy to carry.\nWith altitude hold mode function provides stable flight.\nWith wifi function can be connected APP, APK system to take pictures, video, real-time transmission through the phone camera image.\nThere have 2 cameras can be choose. With 1080P or 4K wide angle camera give wide high denfinition pictures and video.\nWith Headless Mode, no need to adjust the position of aircraft before flying .\nWith One key to return function makes it easily to find the way hom...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AU2SS2103143tSQI.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AU2SS210314sPH8o.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AU2SS210314pD09M.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AU2SS210314rlzYP.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/AU2SS210314g9nn4.jpg",
    ],
    stock: 84,
    sales: 77,
    categories: ["other"],
  },
  {
    title:
      "eufy Security Solo IndoorCam C24 2-Cam Kit, 2K Security Indoor Camera, Plug-in Camera with Wi-Fi, Human and Pet AI, Works with Voice Assistants, Night Vision, Two-Way Audio, Homebase not Compatible",
    price: 64,
    description:
      "Knows Who's There: The on-device AI instantly determines whether a human or pet is present within the camera's view.\nThe Key is in the Detail: View every event in up to 2K clarity (1080P while using HomeKit) so you see exactly what is happening inside your home.\nCommunicate From Your Camera: Speak in real-time to anyone who passes via the camera's built-in two-way audio.\nSmart Integration: Connect your Indoor Cam to Apple HomeKit, the Google Assistant, or Amazon Alexa for complete control over y...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/2P0-00SG-00017-S01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ACCUS210812dyR64.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ACCUS210812ozSFv.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ACCUS210812nMjFf.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ACCUS210812CrIxP.jpg",
    ],
    stock: 67,
    sales: 245,
    discount: 0.1,
    categories: ["other"],
  },
  {
    title: "Canon 1483C002 EOS 5D Mark IV DSLR Camera (Body Only)",
    price: 2180,
    description:
      '30.4 MP Full-Frame CMOS Sensor\nDIGIC 6+ Image Processor\n3.20" 1.62M Touchscreen LCD Monitor\nDCI 4K Video at 30 fps; 8.8 MP Still Grab\n61-Point High Density Reticular AF\nNative ISO 32000, Expanded',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/30-120-871-01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/30-120-871-04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/30-120-871-02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/30-120-871-05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/30-120-871-06.jpg",
    ],
    stock: 16,
    sales: 84,
    discount: 0.1,
    categories: ["cameras"],
  },
  {
    title: "Nikon Z5 Mirrorless Camera 24-200mm F4-6.3 VR Lens Kit",
    price: 2097,
    description:
      "See how limitless your creativity can be with the 24-200mm Lens Kit. Pairing the sophisticated yet easy-to-use 24 megapixel Z 5 with the compact, all-in-one NIKKOR Z 24-200mm f/4-6.3 VR zoom lens, this kit gives you ultimate flexibility. Go where your inspiration takes you - capturing incredible 4-K videos, wide-angle interiors, expansive landscapes, telephoto close-ups, and wildlife. And that ½s just the beginning.",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABYPD210309UH8RZ.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABYPD210309J4TZ8.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABYPD210309N0T7G.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABYPD210309629FI.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABYPD210309H7R9N.jpg",
    ],
    stock: 6,
    sales: 67,
    categories: ["cameras"],
  },
  {
    title:
      "GoPro HERO8 Black Digital Action Camera, Waterproof, Touch Screen - W/ 50 Piece Accessory Kit + 64GB Memory Card + Extra Battery",
    price: 343,
    description:
      "1 x GoPro HERO8 Black | 1 x 50 in 1 Go Pro Accessory Kit | 1 x 64GB Micro SDXC Class 10 UHS-1 Memory Card | 1 x GoPro Rechargeable Battery | 1 x Microfiber Cloth. Up to UHD 4K Video, Slow Motion - HyperSmooth 2.0 Video Stabilization - TimeWarp 2.0 Stabilized Time-Lapse Video - SuperPhoto 12MP Stills with HDR Support. Waterproof to 33' without a Housing - Direct Live Streaming to Facebook Live. Night-Lapse Video, Live-Burst Stills - Intuitive, Smartphone-Like Touchscreen. Face, Smile & Scene Dete...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMTD210113TCPPL.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/V15W_1_20200305173587538.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMT_1_20200115666592757.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMTD2203181AZYOYD4.jpg",
    ],
    stock: 47,
    sales: 84,
    discount: 0.15,
    categories: ["cameras"],
  },
  {
    title:
      "Panasonic AG-AC30 Full HD Camcorder with Touch Panel LCD Viewscreen and Built-In LED Light Pro Vlogger Combo",
    price: 1619,
    description:
      "SERIOUS VLOGGING EQUIPMENT FOR SERIOUS VLOGGERS ONLY. Begin you vlogging career now with a Panasonic AG-AC30 Full HD Camcorder with Touch Panel LCD Viewscreen and Built-In LED Light. RECORD VIDEO IN STUNNING 4k QUALITY | SET YOUR VLOG APART FROM THE REST!. KIT INCLUDES High Quality DSLR Microphone, Tripod, Filter Kit, Carrying Case, and more!",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/V15W_1_2020030548515332.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMT_1_202001071163153612.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMT_1_202001071626317039.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/V0ZR_1_20190206620618200.jpg",
    ],
    stock: 22,
    sales: 72,
    categories: ["cameras"],
  },
  {
    title:
      "Fujifilm XT200 Mirrorless Digital Camera 15-45mm Lens Champagne Gold 32GB Bundle",
    price: 829,
    description:
      '24.2MP APS-C CMOS Sensor\nUHD 4K and Full HD Video Recording\n2.36m-Dot OLED Electronic Viewfinder\n3.5" 2.76m-Dot Articulating Touchscreen\nBuilt-In Wi-Fi & Bluetooth Connectivity',
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABKXD2103173CG1G.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABKXD2103174BJZK.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABKXD210317Z6GM0.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABKXD210317Z7IYP.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/ABKXD210317UNUZH.jpg",
    ],
    stock: 58,
    sales: 99,
    discount: 0.05,
    categories: ["cameras"],
  },
  {
    title: "Microsoft Xbox Series X",
    price: 500,
    description:
      "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles - all games look and play best on Xbox Series X\nExperience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software\nPlay thousands of games from four generations of Xbox with Backward Compatibility. Including optimized titles at launch\nXbox Game Pass Ultimate includes over 100 high-quality games on console, PC, and ...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-273-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-273-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-273-V05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-273-V06.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-273-V03.jpg",
    ],
    stock: 118,
    sales: 304,
    discount: 0.05,
    categories: ["consoles"],
  },
  {
    title:
      "PS5 Bundle - Includes PS5 Console and an Additional DualSense 5 Controller",
    price: 899,
    description:
      "PS5 Console; Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do. Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.\nDualSense Controller; Signature comfort: Take control with an evolved, two-tone design that combines an iconic, intuitive layout with enhan...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-292-01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-292-V01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-292-V02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-292-V03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-292-V05.jpg",
    ],
    stock: 11,
    sales: 386,
    categories: ["consoles"],
  },
  {
    title: "Nintendo Switch Console with Neon Blue and Neon Red Joy-Con",
    price: 309,
    description:
      "3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode\n6.2-inch, multi-touch capacitive touch screen\n4.5-9+ Hours of Battery Life *Will vary depending on software usage conditions\nConnects over Wi-Fi for multiplayer gaming; Up to 8 consoles can be connected for local wireless multiplayer",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/78-190-842-S01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A24GS220131oyGgl.jpg",
    ],
    stock: 64,
    sales: 95,
    discount: 0.1,
    categories: ["consoles"],
  },
  {
    title: "Microsoft Xbox One X - 1TB - Gears 5 Limited Edition",
    price: 649,
    description:
      "Bundle includes: XB1 x 1TB limited Edition Console; Xbox wl controller-kait diaz le; full-game download of Gears 5 Ultimate Edition; full-game downloads of Gears of War: ue & Gears of War 2, 3, &4; month trial of Xbox Game Pass;& month of Xbox Live Gold.\nOwn this limited Edition Console featuring a dark translucent Casing that makes the Crimson Omen appear submerged in snow and ice, Designed by Gears co-creator rod fergusson and the Xbox team.\nBring the Gears universe to life: laser-etched crack...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-266-S01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-266-S02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-266-S04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-266-S03.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-266-S05.jpg",
    ],
    stock: 92,
    sales: 234,
    categories: ["consoles"],
  },
  {
    title: "PlayStation 4 Slim 1TB Console",
    price: 514,
    description:
      "Includes a new slim 1TB PlayStation 4 System, 1 DualShock 4 Wireless Controller.\nPlay online with your friends, get free games, save games online and more with PlayStation Plus (sold separately).\nCutting edge graphics bring game worlds to life like never before, and next gen processing speed gets you into your games faster than ever.\nConnect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, UStream, YouTube, Facebook and Twitter.\nStream mu...",
    image: [
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-236-S01.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-236-S02.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-236-S04.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-236-S05.jpg",
      "https://c1.neweggimages.com/ProductImageCompressAll1280/68-110-236-S06.jpg",
    ],
    stock: 33,
    sales: 189,
    discount: 0.15,
    categories: ["consoles"],
  },
];

module.exports = products;
