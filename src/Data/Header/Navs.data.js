export default [
    { name: "Home", Id: "home" },
    {
      name: "Product",
      Id: "produk",
      dropdown: [
        { name: "Eureka Logistics", link: "http://localhost:3000/detail/EurekaLogistics", icon: 'LogisticIcon' },
        { name: "Master Diskon", link: "http://localhost:3000/detail/MasterDiskon", icon: 'MasdisIcon' },
        { name: "Jaja Auto", link: "http://localhost:3000/detail/Jaja-auto", icon: 'JajaIcon' },
        { name: "Eureka Bookhouse", link: "http://localhost:3000/detail/EurekaBookhouse", icon: 'BookIcon' },
        { name: "Katarasa", link: "http://localhost:3000/detail/Katarasa", icon: 'KatarasaIcon' },
        { name: "Jaja ID", link: "http://localhost:3000/detail/JajaID", icon: 'JajaIcon' },
        { name: "Raja Cepat", link: "http://localhost:3000/detail/RajaCepat", icon: 'raceicon' },
      ]
    },
    { name: "Solusi", Id: "portfoli", link: "http://localhost:3000/solusi" },
    {
        name: "Resource",
        Id: "resource",
        dropdown: [
          { name: "Blog", link: "http://localhost:3000/blog", icon: 'BlogIcon' },
          { name: "Studi Case", link: "http://localhost:3000/studicase", icon: 'CaseStudyIcon' },
          { name: "Pusat Bantuan", link: "http://localhost:3000/pusat-bantuan", icon: 'HelpCenterIcon' }
        ]
      },
    { name: "Karir", Id: "clien", link: "http://localhost:3000/karir" },
    { name: "Tentang", Id: "contact", link: "http://localhost:3000/about" },
]