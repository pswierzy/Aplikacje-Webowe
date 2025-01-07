import React from "react";

interface StudentProp {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Studenci: React.FC = () => {
  const Students: StudentProp[] = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2001 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2002 },
    { imie: "Piotr", nazwisko: "Wiśniewski", rocznik: 2000 },
    { imie: "Katarzyna", nazwisko: "Zielińska", rocznik: 2003 },
    { imie: "Michał", nazwisko: "Dąbrowski", rocznik: 1999 },
  ];

  return (
    <div>
      <h1>Lista Studentów</h1>
      <table style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studenci;
