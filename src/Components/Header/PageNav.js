import React, { useState, useEffect } from 'react';
import { Box, ButtonBase, useMediaQuery } from "@mui/material";
import { Drawer, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import NextLink from 'next/link';
import Image from 'next/image';

// Data
import Navs from "Data/Header/Navs.data";

// Styles
import styles from "Styles/Header/Nav.styles";

// ICONS
import BookIcon from "Assets/blog/bookicon2.png";
import JajaIcon from "Assets/blog/jajaicon.png";
import JajaID from "Assets/blog/jajaicon2.png";
import KatarasaIcon from "Assets/blog/katarasaicon.png";
import MasdisIcon from "Assets/blog/masdisicon.png";
import raceicon from "Assets/blog/raceicon2.png";
import LogisticIcon from "Assets/blog/logistikicon.png";
import BlogIcon from '@mui/icons-material/Article';
import CaseStudyIcon from '@mui/icons-material/Assignment';
import HelpCenterIcon from '@mui/icons-material/Help';

// Sub-menu items for Product
const detailItems = [
  { category: 'Bookhouse', items: [{ key: '1', logo: BookIcon, title: 'Eureka Bookhouse', link: '/detail/Bookhouse' }] },
  { category: 'Travel', items: [{ key: '2', logo: MasdisIcon, title: 'Master Diskon', link: '/detail/MasterDiskon' }] },
  { category: 'Makanan dan minuman', items: [{ key: '5', logo: KatarasaIcon, title: 'Kata Rasa', link: '/detail/Katarasa' }] },
  { category: 'Automotive', items: [{ key: '3', logo: JajaIcon, title: 'Jaja Auto', link: '/detail/Jaja-auto' }] },
  { category: 'Ekspedisi', items: [{ key: '1', logo: LogisticIcon, title: 'Eureka Logistics', link: '/detail/EurekaLogistics' }, { key: '7', logo: raceicon, title: 'Raja Cepat', link: '/detail/RajaCepat' }] },
];

const resourceItems = [
  { key: '1', logo: <BlogIcon />, title: 'Blog', link: '/blog' },
  { key: '2', logo: <CaseStudyIcon />, title: 'Case Study', link: '/studicase' },
  { key: '3', logo: <HelpCenterIcon />, title: 'Help Center', link: '/pusat-bantuan' },
];

const menuStyles = {
  ResourceMenu: { borderRadius: '8px', backgroundColor: '#f9f9f9', padding: '10px', minWidth: '200px' },
  ResourceMenuContent: { padding: '0', margin: '0', listStyle: 'none' },
  MenuItem: { padding: '10px 15px', margin: '5px 0', borderRadius: '4px', backgroundColor: '#ffffff', transition: 'background-color 0.3s ease', cursor: 'pointer' },
  MenuItemLink: { textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' },
  MenuItemIconWrapper: { marginRight: '10px' },
  MenuItemTitle: { fontSize: '14px', fontWeight: '500' },
  MenuItemHover: { '&:hover': { backgroundColor: '#e6e6e6' } },
};

const renderResourceMenu = () => (
  <Menu style={menuStyles.ResourceMenu}>
    <Box sx={menuStyles.ResourceMenuContent}>
      {resourceItems.map(item => (
        <Menu.Item key={item.key} style={{ ...menuStyles.MenuItem, ...menuStyles.MenuItemHover }}>
          <NextLink href={item.link} passHref>
            <a style={menuStyles.MenuItemLink}>
              <Box sx={menuStyles.MenuItemIconWrapper}>
                {item.logo}
              </Box>
              <Box>
                <div style={menuStyles.MenuItemTitle}>{item.title}</div>
              </Box>
            </a>
          </NextLink>
        </Menu.Item>
      ))}
    </Box>
  </Menu>
);

const renderDetailMenu = () => (
  <Menu mode="vertical" style={styles.ProductMenu}>
    {detailItems.map(category => (
      <Menu.SubMenu key={category.category} title={category.category} style={styles.MenuItemGroup}>
        {category.items.map(item => (
          <Menu.Item key={item.key} style={styles.MenuItem}>
            <NextLink href={item.link} passHref>
              <a style={styles.MenuItemLink}>
                <Box sx={styles.MenuItemIconWrapper}>
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image src={item.logo} alt={item.title} layout="fill" objectFit="contain" />
                  </div>
                </Box>
                <Box>
                  <div style={styles.MenuItemTitle}>{item.title}</div>
                </Box>
              </a>
            </NextLink>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    ))}
  </Menu>
);

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [textColor, setTextColor] = useState('white'); 
  const isMobile = useMediaQuery("(max-width:768px)");

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
              {Navs && Navs.map((nav, i) => {
                const isDropdown = ["Resource", "Product"].includes(nav.name);
                return nav.name === "Solusi" ? (
                  <NextLink key={i} href="/solusi" passHref>
                    <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
                  </NextLink>
                ) : isDropdown ? (
                  nav.name === "Product" ? (
                    <Dropdown overlay={renderDetailMenu()} trigger={['click']} key={i}>
                      <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>
                        {nav.name} <DownOutlined />
                      </ButtonBase>
                    </Dropdown>
                  ) : (
                    <Dropdown overlay={renderResourceMenu()} trigger={['click']} key={i}>
                      <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>
                        {nav.name} <DownOutlined />
                      </ButtonBase>
                    </Dropdown>
                  )
                ) : nav.name === "Home" ? (
                  <NextLink key={i} href="/" passHref>
                    <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
                  </NextLink>
                ) : (
                  <NextLink key={i} href={nav.link} passHref>
                    <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
                  </NextLink>
                );
              })}
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={styles.Navs}>
          {Navs && Navs.map((nav, i) => {
            const isDropdown = ["Resource", "Product"].includes(nav.name);
            return nav.name === "Solusi" ? (
              <NextLink key={i} href="/solusi" passHref>
                <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
              </NextLink>
            ) : nav.name === "Karir" ? (
              <NextLink key={i} href="/karir" passHref>
                <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
              </NextLink>
            ) : nav.name === "Tentang" ? (
              <NextLink key={i} href="/about" passHref>
                <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
              </NextLink>
            ) : isDropdown ? (
              nav.name === "Product" ? (
                <Dropdown overlay={renderDetailMenu()} trigger={['click']} key={i}>
                  <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>
                    {nav.name} <DownOutlined />
                  </ButtonBase>
                </Dropdown>
              ) : (
                <Dropdown overlay={renderResourceMenu()} trigger={['click']} key={i}>
                  <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>
                    {nav.name} <DownOutlined />
                  </ButtonBase>
                </Dropdown>
              )
            ) : nav.name === "Home" ? (
              <NextLink key={i} href="/" passHref>
                <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
              </NextLink>
            ) : (
              <NextLink key={i} href={nav.link} passHref>
                <ButtonBase sx={{ ...styles.Buttons, color: textColor }}>{nav.name}</ButtonBase>
              </NextLink>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default Nav;
