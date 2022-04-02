//Use react-table for datatable

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Mile",
    last_name: "Castille",
    email: "mcastille0@deviantart.com",
    gender: "Polygender",
    ip_address: "111.46.103.207",
  },
  {
    id: 2,
    first_name: "Homere",
    last_name: "Grelik",
    email: "hgrelik1@elpais.com",
    gender: "Male",
    ip_address: "251.232.54.115",
  },
  {
    id: 3,
    first_name: "Inge",
    last_name: "Ulyat",
    email: "iulyat2@constantcontact.com",
    gender: "Female",
    ip_address: "228.207.71.143",
  },
  {
    id: 4,
    first_name: "Aubrie",
    last_name: "Fryer",
    email: "afryer3@printfriendly.com",
    gender: "Female",
    ip_address: "239.186.81.22",
  },
  {
    id: 5,
    first_name: "Elyn",
    last_name: "Skitt",
    email: "eskitt4@reverbnation.com",
    gender: "Bigender",
    ip_address: "126.185.107.184",
  },
  {
    id: 6,
    first_name: "Marga",
    last_name: "Echallier",
    email: "mechallier5@cmu.edu",
    gender: "Female",
    ip_address: "94.195.84.207",
  },
  {
    id: 7,
    first_name: "Florry",
    last_name: "Mitkov",
    email: "fmitkov6@ocn.ne.jp",
    gender: "Female",
    ip_address: "249.137.15.200",
  },
  {
    id: 8,
    first_name: "Belvia",
    last_name: "Kirkpatrick",
    email: "bkirkpatrick7@state.tx.us",
    gender: "Female",
    ip_address: "234.230.115.207",
  },
  {
    id: 9,
    first_name: "Jorie",
    last_name: "Bierman",
    email: "jbierman8@opera.com",
    gender: "Female",
    ip_address: "116.61.30.173",
  },
  {
    id: 10,
    first_name: "Gaile",
    last_name: "Cordero",
    email: "gcordero9@usgs.gov",
    gender: "Male",
    ip_address: "60.164.41.209",
  },
];
