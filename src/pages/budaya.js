import React from 'react';
import { Typography, Container, Divider, Grid } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import budaya1 from '../Assets/galeri/iconbenefit&budaya/budaya1.png';
import budaya2 from '../Assets/galeri/iconbenefit&budaya/budaya2.png';
import budaya3 from '../Assets/galeri/iconbenefit&budaya/budaya3.png';
import budaya4 from '../Assets/galeri/iconbenefit&budaya/budaya4.png';
import budaya5 from '../Assets/galeri/iconbenefit&budaya/budaya5.png';
import budaya6 from '../Assets/galeri/iconbenefit&budaya/budaya6.png';
import Image from 'next/image';

const Budaya = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 20, mb: 18 }}>
        <div
          sx={{
            p: 10,
            borderRadius: 5,
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 100%)`,
            boxShadow: `0 4px 8px ${theme.palette.primary.div_shadow_black}`,
            mb: 0,
            mt: 12,
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
            Budaya Perusahaan Eureka
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', color: theme.palette.text.primary }}>
            Eureka, anak perusahaan dari Erlangga yang berlokasi di Ciracas, Jakarta Timur, memiliki budaya perusahaan yang
            berorientasi pada inovasi, kolaborasi, dan pengembangan berkelanjutan. Kami percaya bahwa keberhasilan perusahaan
            tidak hanya diukur dari pencapaian finansial, tetapi juga dari bagaimana kami menciptakan lingkungan kerja yang
            mendukung, inklusif, dan berfokus pada pengembangan setiap individu.
          </Typography>
          <Divider sx={{ mb: 4, borderColor: theme.palette.divider }} />
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
            Nilai-Nilai Perusahaan
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya1} alt="Inovasi" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Inovasi:</strong>
                  <br />
                  Kami mendorong setiap karyawan untuk berinovasi dan mencari cara-cara baru untuk meningkatkan produktivitas dan efisiensi.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya2} alt="Kolaborasi" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Kolaborasi:</strong>
                  <br />
                  Kerja sama antar tim dan divisi sangat penting dalam mencapai tujuan bersama.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya3} alt="Pengembangan Berkelanjutan" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Pengembangan Berkelanjutan:</strong>
                  <br />
                  Kami berkomitmen untuk terus meningkatkan kompetensi dan kemampuan karyawan melalui berbagai program pelatihan dan pendidikan.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya4} alt="Inklusivitas" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Inklusivitas:</strong>
                  <br />
                  Kami menghargai keberagaman dan berusaha menciptakan lingkungan kerja yang inklusif bagi semua orang.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya5} alt="Pengembangan Berkelanjutan" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Pengembangan Berkelanjutan:</strong>
                  <br />
                  Kami berkomitmen untuk terus meningkatkan kompetensi dan kemampuan karyawan melalui berbagai program pelatihan dan pendidikan.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Image src={budaya6} alt="Inklusivitas" width={34} height={36} />
                <Typography variant="body1" sx={{ color: theme.palette.text.primary, mt: '5px' }}>
                  <strong>Inklusivitas:</strong>
                  <br />
                  Kami menghargai keberagaman dan berusaha menciptakan lingkungan kerja yang inklusif bagi semua orang.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />
          <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main }}>
            Lingkungan Kerja
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify', color: theme.palette.text.primary }}>
            PT Eureka berusaha menciptakan lingkungan kerja yang sehat dan dinamis, di mana setiap karyawan merasa dihargai dan didukung
            untuk mencapai potensi terbaik mereka. Kami juga memastikan keseimbangan antara pekerjaan dan kehidupan pribadi, yang
            merupakan aspek penting dari budaya perusahaan kami.
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Budaya;
