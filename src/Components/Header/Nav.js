import React from 'react';
import { Box, ButtonBase } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import NextLink from 'next/link'; // Using Next.js Link

// Data
import Navs from "Data/Header/Navs.data";

// Styles
import styles from "Styles/Header/Nav.styles";

// Custom dropdown items based on nav
const getMenuItems = (nav) => {
  switch (nav.name) {
    case 'Produk':
      return [
        { key: '1', label: 'Logistics', link: 'https://elogs.eurekalogistics.co.id' },
        { key: '2', label: 'Tiket & Perjalanan', link: 'https://www.masterdiskon.com/' },
        { key: '3', label: 'Pemenuhan', link: 'https://auto.jaja.id/'},
        { key: '4', label: 'Buku & ATK', link: 'https://www.eurekabookhouse.co.id/' },
        { key: '5', label: 'Makanan & Minuman', link: 'https://katarasa.id/' },
      ];
    case 'Solusi':
      return [
        { key: '6', label: 'Solusi perusahaan', link: '/solusi-perusahaan' },
        { key: '7', label: 'Solusi individu', link: '/solusi-individu' },
      ];
    case 'Resource':
      return [
        { key: '8', label: 'Blog', link: '/blog' },
        { key: '9', label: 'Studi kasus', link: '/studi-kasus' },
        { key: '10', label: 'Pusat bantuan', link: '/pusat-bantuan' },
      ];
    case 'Karir':
      return [
        { key: '11', label: 'Lowongan kerja', link: 'https://glints.com/id/companies/pt-eureka-bookhouse/a98a603b-875b-4ce4-a4fa-2615d3402597' },
        { key: '12', label: 'Tentang kerja', link: '/TentangKerja' },
        { key: '13', label: 'Budaya Perusahaan', link: '/budaya' },
        { key: '14', label: 'Testimoni', link: '/testimoni' },
        { key: '15', label: 'Benefit', link: '/benefit' },
        { key: '16', label: 'Departemen di Eureka', link: '/departemen' },
        { key: '17', label: 'Tahapan Rekrutment', link: '/tahapan' },
        { key: '18', label: 'FAQ', link: '/FAQ' },
      ];
    default:
      return [];
  }
};

const Nav = () => {
    return (
        <Box sx={styles.Navs}>
            {Navs && Navs.map((nav, i) => {
                if (nav.name === 'Home') {
                    return (
                        <NextLink key={i} href="/" passHref>
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </NextLink>
                    );
                } else if (nav.name === 'Tentang') {
                    return (
                        <ScrollLink
                            key={i}
                            activeClass='active'
                            to={nav.Id}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </ScrollLink>
                    );
                } else {
                    return (
                        <Dropdown
                            key={i}
                            overlay={
                                <Menu>
                                    {getMenuItems(nav).map(item => (
                                        <Menu.Item key={item.key}>
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    {item.label}
                                                </a>
                                            ) : (
                                                item.label
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            }
                            trigger={['click']}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                <Space>
                                    {nav.name}
                                    <DownOutlined />
                                </Space>
                            </ButtonBase>
                        </Dropdown>
                    );
                }
            })}
        </Box>
    );
};

export default Nav;
