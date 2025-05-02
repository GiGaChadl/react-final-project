const studentList = [
  {
    id: "01",
    name: "Kevin",
    gender: "Male",
    corses: {
      math: 6.4,
      physics: 4.5,
      chem: 7.8,
    },
    image: "1.jpg",
  },
  {
    id: "02",
    name: "Mary",
    gender: "Female",
    corses: {
      math: 3.4,
      physics: 5.6,
      chem: 8.1,
    },
    image: "2.webp",
  },
  {
    id: "03",
    name: "Peter",
    gender: "Male",
    corses: {
      math: 6.2,
      physics: 3.5,
      chem: 9.1,
    },
    image: "3.jpg",
  },
  {
    id: "04",
    name: "Kevin",
    gender: "Male",
    corses: {
      math: 6.6,
      physics: 5.5,
      chem: 7.8,
    },
    image: "4.webp",
  },
  {
    id: "05",
    name: "Mary",
    gender: "Female",
    corses: {
      math: 5.4,
      physics: 5.6,
      chem: 8.1,
    },
    image: "5.png",
  },
  {
    id: "06",
    name: "Peter",
    gender: "Male",
    corses: {
      math: 6.2,
      physics: 8.5,
      chem: 9.1,
    },
    image: "6.webp",
  },
  {
    id: "07",
    name: "Kevin",
    gender: "Male",
    corses: {
      math: 9.4,
      physics: 8.5,
      chem: 7.8,
    },
    image: "7.webp",
  },
  {
    id: "08",
    name: "Mary",
    gender: "Female",
    corses: {
      math: 5.4,
      physics: 5.6,
      chem: 1.1,
    },
    image: "8.webp",
  },
  {
    id: "09",
    name: "Peter",
    gender: "Male",
    corses: {
      math: 2.2,
      physics: 3.5,
      chem: 4.1,
    },
    image: "9.webp",
  },
  {
    id: "10",
    name: "Kevin",
    gender: "Male",
    corses: {
      math: 10,
      physics: 10,
      chem: 9.8,
    },
    image: "10.webp",
  },
  {
    id: "11",
    name: "Mary",
    gender: "Female",
    corses: {
      math: 5.4,
      physics: 5.6,
      chem: 8.1,
    },
    image: "11.webp",
  },
  {
    id: "12",
    name: "Peter",
    gender: "Male",
    corses: {
      math: 6.2,
      physics: 8.5,
      chem: 9.1,
    },
    image: "12.webp",
  },
  {
    id: "13",
    name: "Peter",
    gender: "Male",
    corses: {
      math: 6.2,
      physics: 8.5,
      chem: 9.1,
    },
    image: "8.webp",
  },
];

const studentListWithDTB = studentList.map((student) => {
  const { math, physics, chem } = student.corses;
  const dtb = ((math * 3 + physics * 2 + chem) / 6).toFixed(2);
  return { ...student, dtb: parseFloat(dtb) };
});

export default studentListWithDTB;
