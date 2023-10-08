const singlePages = [
  {
    title: "Nomadao Event Hall",
    img: "https://i.ibb.co/SvqxsMC/eventhall.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
    // launch_link: "https://eventhall.nomadao.net",
    launch_link: import.meta.env.VITE_EVENTHALL_STREAM,
    tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
  },
  {
    title: "3D Casino",
    img: "http://i.ibb.co/7XkP6Nq/casino.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
    // launch_link: 'https://casino.nomadao.net',
    launch_link: import.meta.env.VITE_CASINO_STREAM,
    tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
  },
  {
    title: "3D Hotel Tour",
    img: "https://i.ibb.co/2Kn8fM2/hotel.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
    // launch_link: 'https://rooms.nomadao.net:4443',
    launch_link: import.meta.env.VITE_HOTELTOUR_STREAM,
    tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
  },
  {
    title: "World 3D Tour",
    img: "https://i.ibb.co/hYWMKsd/verse.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis necessitatibus, quo labore voluptatibus veniam voluptates distinctio voluptas impedit tempore assumenda, repellendus dolorem amet unde? Vel officiis soluta voluptatem perspiciatis!",
    // launch_link: 'https://3dmap.nomadao.net',
    launch_link: import.meta.env.VITE_WORLDTOUR_STREAM,
    tutorial_link: "https://www.youtube.com/embed/a1vclMx4eFQ",
  },
];
export default singlePages;
