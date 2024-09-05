import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Heads from 'Utilis/Heads';
import Header from '../Section/Header';
import Kontak from "../Section/Kontak";
import jobData from './Data/loker'

const JobVacancies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobData.filter(job => {
    return (
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm) &&
      (job.title === selectedField || !selectedField) &&
      (job.type === selectedType || !selectedType) &&
      (job.department === selectedDepartment || !selectedDepartment)
    );
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <>
      {/* Header Section */}
      <Heads />
      <Header />
      <Box
        sx={{
          backgroundImage: `url('/path-to-your-background-image.jpg')`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center text horizontally
          color: '#fff', // Ensure text is readable
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ width: '100%', maxWidth: '600px', textAlign: 'left', color: 'black' }}>
            <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Mari temukan potensi terpendam anda bersama Eureka Group!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ayo temukan minat dan bakatmu bersama Eureka Group! Tunjukkan pada dunia
              jika anda memiliki potensi, kami menunggu kedatangan anda!
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Job Listings Section */}
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Typography variant="h5" component="h2" gutterBottom align="left">
          Temukan Karir Impian anda disini
        </Typography>

        <Grid container spacing={2} justifyContent="left" sx={{ mb: 4 }}>
  <Grid item xs={12} sm={3}>
    <TextField
      fullWidth
      variant="outlined"
      label="Cari Pekerjaan"
      value={searchTerm}
      onChange={handleSearch}
      sx={{
        backgroundColor: '#fff',
        fontSize: '0.75rem', // Smaller font size
        '& .MuiInputBase-input': {
          padding: '6px 10px', // Smaller padding
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px', // Smaller border radius
        },
        '& .MuiFormLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        '& .MuiInputLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        maxWidth: '250px', // Set a maximum width
      }}
    />
  </Grid>
  <Grid item xs={12} sm={2}>
    <TextField
      fullWidth
      select
      label="Bidang Pekerjaan"
      value={selectedField}
      onChange={(e) => setSelectedField(e.target.value)}
      sx={{
        backgroundColor: '#fff',
        fontSize: '0.75rem', // Smaller font size
        '& .MuiSelect-select': {
          padding: '6px 10px', // Smaller padding
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px', // Smaller border radius
        },
        '& .MuiFormLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        '& .MuiInputLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        maxWidth: '200px', // Set a maximum width
      }}
    >
      <MenuItem value="">Semua Bidang</MenuItem>
      {Array.from(new Set(jobData.map(job => job.title))).map((title, index) => (
        <MenuItem key={index} value={title}>{title}</MenuItem>
      ))}
    </TextField>
  </Grid>
  <Grid item xs={12} sm={2}>
    <TextField
      fullWidth
      select
      label="Jenis Pekerjaan"
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      sx={{
        backgroundColor: '#fff',
        fontSize: '0.75rem', // Smaller font size
        '& .MuiSelect-select': {
          padding: '6px 10px', // Smaller padding
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px', // Smaller border radius
        },
        '& .MuiFormLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        '& .MuiInputLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        maxWidth: '200px', // Set a maximum width
      }}
    >
      <MenuItem value="">Semua Jenis</MenuItem>
      {Array.from(new Set(jobData.map(job => job.type))).map((type, index) => (
        <MenuItem key={index} value={type}>{type}</MenuItem>
      ))}
    </TextField>
  </Grid>
  <Grid item xs={12} sm={2}>
    <TextField
      fullWidth
      select
      label="Departemen"
      value={selectedDepartment}
      onChange={(e) => setSelectedDepartment(e.target.value)}
      sx={{
        backgroundColor: '#fff',
        fontSize: '0.75rem', // Smaller font size
        '& .MuiSelect-select': {
          padding: '6px 10px', // Smaller padding
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px', // Smaller border radius
        },
        '& .MuiFormLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        '& .MuiInputLabel-root': {
          top: '-8px', // Adjust label position
          left: '10px', // Adjust label position
        },
        maxWidth: '200px', // Set a maximum width
      }}
    >
      <MenuItem value="">Semua Departemen</MenuItem>
      {Array.from(new Set(jobData.map(job => job.department))).map((department, index) => (
        <MenuItem key={index} value={department}>{department}</MenuItem>
      ))}
    </TextField>
  </Grid>
</Grid>


        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Posisi</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Lokasi</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Departemen</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Jenis</Typography></TableCell>
                <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Deadline</Typography></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.deadline}</TableCell>
                  <TableCell>
                  <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardTwoToneIcon />}
                      sx={{
                        backgroundColor: '#213689',
                        '&:hover': {
                          backgroundColor: '#5A54E8',
                        },
                        borderRadius: '10px',
                        textTransform: 'none',
                        padding: '6px 12px', // Smaller padding to reduce size
                        fontSize: '0.75rem', // Smaller font size
                        width: '110px',
                      }}
                    >
                      Apply now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          sx={{ mt: 4 }}
        />
      </Container>

      {/* Contact Section */}
      <Kontak />
    </>
  );
};

export default JobVacancies;
