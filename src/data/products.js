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
];

module.exports = products;
