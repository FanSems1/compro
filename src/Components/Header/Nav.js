import React, { useEffect, useState } from 'react';
import { Box, ButtonBase, useMediaQuery } from "@mui/material";
import { Drawer, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import NextLink from 'next/link';
import Image from 'next/image';
import axios from 'axios';

// Styles
import styles from "Styles/Header/Nav.styles";

// ICONS
import BookIcon from "../../Assets/blog/bookicon2.png";
import JajaIcon from "Assets/blog/jajaicon.png";
import KatarasaIcon from "Assets/blog/katarasaicon.png";
import MasdisIcon from "Assets/blog/masdisicon.png";
import LogisticIcon from "Assets/blog/logistikicon.png";
import raceicon from "Assets/blog/raceicon2.png";
import BlogIcon from '@mui/icons-material/Article';
import CaseStudyIcon from '@mui/icons-material/Assignment';
import HelpCenterIcon from '@mui/icons-material/Help';

// Static resource items
const resourceItems = [
  { key: '1', logo: <BlogIcon />, title: 'Blog', link: '/blog' },
  { key: '2', logo: <CaseStudyIcon />, title: 'Case Study', link: '/studycase' },
  { key: '3', logo: <HelpCenterIcon />, title: 'Help Center', link: '/pusat-bantuan' },
];

// Static nav items (including Solusi, Karir, and Tentang)
const Navs = [
  { name: 'Home', link: '/' },
  { name: 'Product', link: '#' },
  { name: 'Solusi', link: '/solusi' },
  { name: 'Resource', link: '#' },
  { name: 'Karir', link: '/karir' },
  { name: 'Tentang', link: '/about' },
];

const getLogoByTitle = (title) => {
  switch (title) {
    case 'Eureka Bookhouse':
      return BookIcon;
    case 'Jaja Auto':
      return JajaIcon;
    case 'Katarasa':
      return KatarasaIcon;
    case 'Master Diskon':
      return MasdisIcon;
    case 'Eureka Logistics':
      return LogisticIcon;
    case 'Raja Cepat':
      return raceicon;
    default:
      return null; 
  }
};

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [detailItems, setDetailItems] = useState([]);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    // Fetching data from the API
    const fetchDetailItems = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://3wzg6m6x-5000.asse.devtunnels.ms';
        const response = await axios.get(`${baseUrl}/api/bu_detail`);
        const fetchedItems = response.data.map(item => ({
          key: item.id_bu_master.toString(),
          logo: getLogoByTitle(item.bu_master.name),
          title: item.bu_master.name,
          link: `/detail/${item.bu_master.name.replace(/\s+/g, '-').toLowerCase()}`,
      }));
        // Grouping items into categories
        const groupedItems = [
          {
            category: 'Bookhouse',
            items: fetchedItems.filter(item => item.title === 'Eureka Bookhouse'),
          },
          {
            category: 'Travel',
            items: fetchedItems.filter(item => item.title === 'Master Diskon'),
          },
          {
            category: 'Makanan dan minuman',
            items: fetchedItems.filter(item => item.title === 'Katarasa'),
          },
          {
            category: 'Automotive',
            items: fetchedItems.filter(item => item.title === 'Jaja Auto'),
          },
          {
            category: 'Ekspedisi',
            items: fetchedItems.filter(item => item.title === 'Eureka Logistics' || item.title === 'Raja Cepat'),
          },
        ];

        setDetailItems(groupedItems);
      } catch (error) {
        console.error("Error fetching detail items:", error);
      }
    };

    fetchDetailItems();
  }, []);

  const renderResourceMenu = () => (
    <Menu style={styles.ResourceMenu}>
      <Box sx={styles.ResourceMenuContent}>
        {resourceItems.map(item => (
          <Menu.Item key={item.key} style={styles.MenuItem}>
            <NextLink href={item.link} passHref>
              <ButtonBase
                onClick={(e) => {
                  e.preventDefault(); 
                  window.location.href = item.link; 
                }}
                sx={styles.MenuItemLink}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ marginRight: 1 }}> {/* Add some spacing between icon and title */}
                    {item.logo}
                  </Box>
                  <Box>
                    <div style={styles.MenuItemTitle}>{item.title}</div>
                  </Box>
                </Box>
              </ButtonBase>
            </NextLink>
          </Menu.Item>
        ))}
      </Box>
    </Menu>
  );

  const renderDetailMenu = () => (
    <Menu mode="vertical" style={styles.ProductMenu}>
      {detailItems.map(category => (
        <Menu.SubMenu
          key={category.category}
          title={category.category}
          style={styles.MenuItemGroup}
        >
          {category.items.map(item => (
            <Menu.Item key={item.key} style={styles.MenuItem}>
              <NextLink href={item.link} passHref>
                <ButtonBase
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.link;
                  }}
                  sx={styles.MenuItemLink}
                >
                  <Box sx={styles.MenuItemIconWrapper}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image 
                        src={item.logo} 
                        alt={item.title} 
                        layout="fill" 
                        objectFit="contain"
                      />
                    </div>
                  </Box>
                  <Box>
                    <div style={styles.MenuItemTitle}>{item.title}</div>
                  </Box>
                </ButtonBase>
              </NextLink>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {isMobile ? (
        <>
          <ButtonBase onClick={toggleDrawer(true)} sx={styles.Buttons}>
            Menu
          </ButtonBase>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{ disableScrollLock: true }}
          >
            <Box sx={styles.DrawerContent}>
              {Navs.map((nav, i) => {
                const isDropdown = ["Resource", "Product"].includes(nav.name);
                return nav.name === "Home" ? (
                  <NextLink key={i} href="/" passHref>
                    <ButtonBase
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/';
                      }}
                      sx={styles.Buttons}
                    >
                      {nav.name}
                    </ButtonBase>
                  </NextLink>
                ) : isDropdown ? (
                  nav.name === "Product" ? (
                    <Dropdown overlay={renderDetailMenu()} trigger={['click']} key={i}>
                      <ButtonBase sx={styles.Buttons}>
                        {nav.name} <DownOutlined />
                      </ButtonBase>
                    </Dropdown>
                  ) : (
                    <Dropdown overlay={renderResourceMenu()} trigger={['click']} key={i}>
                      <ButtonBase sx={styles.Buttons}>
                        {nav.name} <DownOutlined />
                      </ButtonBase>
                    </Dropdown>
                  )
                ) : (
                  <NextLink key={i} href={nav.link} passHref>
                    <ButtonBase
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = nav.link; 
                      }}
                      sx={styles.Buttons}
                    >
                      {nav.name}
                    </ButtonBase>
                  </NextLink>
                );
              })}
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={styles.Navs}>
          {Navs.map((nav, i) => {
            const isDropdown = ["Resource", "Product"].includes(nav.name);
            return nav.name === "Home" ? (
              <NextLink key={i} href="/" passHref>
                <ButtonBase
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/'; 
                  }}
                  sx={styles.Buttons}
                >
                  {nav.name}
                </ButtonBase>
              </NextLink>
            ) : isDropdown ? (
              nav.name === "Product" ? (
                <Dropdown overlay={renderDetailMenu()} trigger={['click']} key={i}>
                  <ButtonBase sx={styles.Buttons}>
                    {nav.name} <DownOutlined />
                  </ButtonBase>
                </Dropdown>
              ) : (
                <Dropdown overlay={renderResourceMenu()} trigger={['click']} key={i}>
                  <ButtonBase sx={styles.Buttons}>
                    {nav.name} <DownOutlined />
                  </ButtonBase>
                </Dropdown>
              )
            ) : (
              <NextLink key={i} href={nav.link} passHref>
                <ButtonBase
                  onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href = nav.link;
                  }}
                  sx={styles.Buttons}
                >
                  {nav.name}
                </ButtonBase>
              </NextLink>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default Nav;
