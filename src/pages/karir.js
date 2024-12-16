import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  ButtonBase,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Card,
  IconButton,
  Fade,
  Modal,
  CardContent,
} from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Heads from 'Utilis/Heads';
import Header from './Section/Header';
import Tahapan from './tahapan';
import Footer from './Section/Footer';
import CloseIcon from '@mui/icons-material/Close';
import Budaya from './budaya';
import FAQPage from './FAQ';
import BenefitsSection from './benefit';
import { testimonials } from '../Components/dataPage/Data/SolusiPerusahaan';
import AboutEurekaGroup from './AboutEu';
import FloatingButton from 'Components/FloatingButton';
import WhatsAppButton from 'Components/WhatsAppButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import axios from 'axios';
import sanitizeHtml from 'sanitize-html';
import { format } from 'date-fns';

const JobVacancies = () => {
  const [jobData, setJobData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBisnisUnit, setSelectedBisnisUnit] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const itemsPerPage = 2; 
  const pageSize = 2;


    const fetchJobData = async () => {
      try {
        const response = await axios.get('https://3wzg6m6x-5000.asse.devtunnels.ms/api/career');
        setJobData(response.data);
      } catch (error) {
        console.error('Failed to fetch job data', error);
      }
    };
    useEffect(() => {
    fetchJobData();
  }, []);

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
      (job.bu_master.name === selectedBisnisUnit || !selectedBisnisUnit)
    );
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(testimonials.length / pageSize)) {
      setPage(newPage);
    }
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const parseDescription = (html) => {
    const sanitizedHtml = sanitizeHtml(html, {
      allowedTags: ['b', 'strong', 'i', 'em', 'span'], // Allow essential tags
      allowedAttributes: {
        '*': ['style'], // Allow inline styles
      },
    });
        // Gantikan pola dengan elemen yang memiliki gaya
        const styledText = sanitizedHtml
        .replace(/<b>(.*?)<\/b>/g, '<span style="font-weight:bold;">$1</span>')
        .replace(/<strong>(.*?)<\/strong>/g, '<span style="font-weight:bold;">$1</span>')
        .replace(/<i>(.*?)<\/i>/g, '<span style="font-style:italic;">$1</span>')
        .replace(/<em>(.*?)<\/em>/g, '<span style="font-style:italic;">$1</span>');
    
      return styledText;
    }; 

  return (
    <>
      <Heads />
      <Header />
      <Box
  sx={{
    backgroundImage: `url('/_next/static/media/gambarloker.e1f8b153.png')`, // Use the correct static path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '650px',
    display: 'flex',
    mt: '5em',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  }}
>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: '100%',
              maxWidth: '700px',
              textAlign: 'left',
              color: 'black',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'white', mt: '11em' }}
            >
              Mari temukan potensi terpendam anda bersama Eureka Group!
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: '1.1rem' }}
            >
              Ayo temukan minat dan bakatmu bersama Eureka Group! Tunjukkan pada dunia
              jika anda memiliki potensi, kami menunggu kedatangan anda!
            </Typography>
          </Box>
        </Container>
      </Box>
      <AboutEurekaGroup />
      <Container sx={{ py: 6 }} maxWidth="xl">
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          Temukan Karir Impian Anda di Sini
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
                fontSize: '0.75rem',
                '& .MuiInputBase-input': {
                  padding: '6px 10px',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
                '& .MuiFormLabel-root': {
                  top: '-8px',
                  left: '10px',
                },
                maxWidth: '250px',
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
                fontSize: '0.75rem',
                '& .MuiSelect-select': {
                  padding: '6px 10px',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
                '& .MuiFormLabel-root': {
                  top: '-8px',
                  left: '10px',
                },
                maxWidth: '200px',
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
                fontSize: '0.75rem',
                '& .MuiSelect-select': {
                  padding: '6px 10px',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
                '& .MuiFormLabel-root': {
                  top: '-8px',
                  left: '10px',
                },
                maxWidth: '200px',
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
              label="Bisnis Unit"
              value={selectedBisnisUnit}
              onChange={(e) => setSelectedBisnisUnit(e.target.value)}
              sx={{
                backgroundColor: '#fff',
                fontSize: '0.75rem',
                '& .MuiSelect-select': {
                  padding: '6px 10px',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
                '& .MuiFormLabel-root': {
                  top: '-8px',
                  left: '10px',
                },
                maxWidth: '200px',
              }}
            >
              <MenuItem value="">Semua Bisnis Unit</MenuItem>
              {Array.from(new Set(jobData.map(job => job.bu_master.name))).map((BisnisUnit, index) => (
                <MenuItem key={index} value={BisnisUnit}>{BisnisUnit}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#213689' }}>Posisi</Typography></TableCell>
        <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#213689' }}>Lokasi</Typography></TableCell>
        <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#213689' }}>Bisnis Unit</Typography></TableCell>
        <TableCell><Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#213689' }}>Deadline</Typography></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {currentJobs.map((job) => {
        // Parse deadline date and check if it is greater than today's date
        const jobDeadline = new Date(job.deadline);
        const today = new Date();

        // If the job's deadline is before today, we skip this row
        if (jobDeadline < today) return null;

        return (
          <TableRow key={job.id}>
            <TableCell>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3C3C3C' }}>
                  {job.title}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    backgroundColor: '#E7E9F5',
                    borderRadius: '10px',
                    color: '#0F2296',
                    fontSize: '16px',
                    fontFamily: 'Montserrat',
                    fontWeight: '500',
                    textAlign: 'center',
                    width: '100px',
                  }}
                >
                  {job.type}
                </Box>
              </Box>
            </TableCell>
            <TableCell>{job.location}</TableCell>
            <TableCell>{job.bu_master.name}</TableCell>
            <TableCell>{format(jobDeadline, 'dd MMM yyyy')}</TableCell>
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
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  width: '110px',
                }}
                onClick={() => window.open(`/apply/${job.id}`)} 
              >
                Apply now
              </Button>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardTwoToneIcon />}
                onClick={() => handleViewDetails(job)}
                sx={{
                  marginLeft: '8px',
                  borderRadius: '10px',
                  textTransform: 'none',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  width: '120px',
                }}
              >
                Lihat Detail
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</TableContainer>

      {/* Modal for Job Details */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={modalOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '60%', lg: '50%' },
            bgcolor: '#FFFFFF',
            borderRadius: '40px 10px 40px 10px', // Rounded with unique corners
            p: 4,
            outline: 'none',
            boxShadow: 24,
            border: '2px solid #213689',
            overflow: 'hidden',
          }}>
            <Box sx={{ position: 'relative', mb: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#213689' }}>{selectedJob?.title}</Typography>
              <IconButton onClick={handleCloseModal} sx={{ color: '#213689' }}><CloseIcon /></IconButton>
            </Box>
            {selectedJob && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#213689' }}>Type:</Typography>
                  <Box sx={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    backgroundColor: '#E7E9F5',
                    borderRadius: '8px',
                    color: '#0F2296',
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>{selectedJob.type}</Box>
                </Box>

                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                  mt: 2,
                  mb: 2,
                  px: 2,
                  py: 2,
                  bgcolor: '#F7F7F7',
                  borderRadius: '10px',
                }}>
                  <Typography><strong>Lokasi:</strong> {selectedJob.location}</Typography>
                  <Typography><strong>Bisnis Unit:</strong> {selectedJob.bu_master.name}</Typography>
                  <Typography><strong>Deadline:</strong> {selectedJob.deadline}</Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: '#213689', fontWeight: 'bold' }}>Deskripsi</Typography>
                  <Typography sx={{ color: '#555' }}><span
    dangerouslySetInnerHTML={{
      __html: (parseDescription(selectedJob.description)),
    }}
  /></Typography>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h6" sx={{ color: '#213689', fontWeight: 'bold' }}>Persyaratan</Typography>
                  <Typography sx={{ color: '#555' }}>{selectedJob.requirements}</Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    width: 'fit-content',
                    alignSelf: 'center',
                    backgroundColor: '#213689',
                    '&:hover': { backgroundColor: '#5A54E8' },
                    borderRadius: '20px 20px 0 20px',
                    padding: '10px 20px',
                    textTransform: 'none',
                  }}
                  onClick={() => window.open(`/apply/${selectedJob.id}`)}
                >
                  Apply Now
                </Button>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          sx={{ mt: 4 }}
        />

        <Budaya />
        <BenefitsSection />

        {/* Testimonials Section */}
        <Box sx={{ textAlign: 'center', mt: 9 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Apa Kata Mereka?
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            Yuk dengarkan testimoni dari mereka yang percayakan Eureka
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {currentTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                p: 3,
                border: '2px solid #0F2296', 
                boxShadow: 'none' 
                 }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {testimonial.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary', mb: 2 }}>
                    {testimonial.feedback}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Typography key={i} variant="h6" sx={{ color: '#FFD700' }}>
                        ★
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 6 }}>
          <PrevButton
            onClick={() => {
              if (page > 1) {
                handlePageChange(page - 1);
              }
            }}
            enabled={page > 1}
          />
          <NextButton
            onClick={() => {
              if (page < Math.ceil(testimonials.length / pageSize)) {
                handlePageChange(page + 1);
              }
            }}
            enabled={page < Math.ceil(testimonials.length / pageSize)}
          />
        </Box>

        <Tahapan />
        <FAQPage />
      </Container>
      <Footer />
      <FloatingButton />
      <WhatsAppButton />
    </>
  );
};

const PrevButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      width: '35px',
      height: '33px',
      cursor: enabled ? 'pointer' : 'not-allowed',
      marginRight: '1em',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronLeft sx={{ color: 'white' }} />
  </ButtonBase>
);

const NextButton = ({ enabled, onClick }) => (
  <ButtonBase
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: enabled ? '#0F2296' : '#cccccc',
      borderRadius: '0',
      width: '35px',
      height: '33px',
      cursor: enabled ? 'pointer' : 'not-allowed',
      '&:active': {
        color: 'black',
      },
    }}
    onClick={enabled ? onClick : null}
    disabled={!enabled}
  >
    <ChevronRight sx={{ color: 'white' }} />
  </ButtonBase>
);

export default JobVacancies;
