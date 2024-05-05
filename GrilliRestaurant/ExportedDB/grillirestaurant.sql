-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 06:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grillirestaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `menucategories`
--

CREATE TABLE `menucategories` (
  `MenuCat_ID` int(11) NOT NULL,
  `CategoriesName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menucategories`
--

INSERT INTO `menucategories` (`MenuCat_ID`, `CategoriesName`) VALUES
(1, 'Seher yemekleri'),
(2, 'Soyuq Qelyanaltilar'),
(3, 'Sorbalar'),
(4, 'Salatlar'),
(5, 'Kabablar'),
(6, 'Esas yemekler'),
(7, 'Qarnirler'),
(8, 'Desertler'),
(9, 'Alkoqolsuz ickiler'),
(10, 'Alkoqollu ickiler');

-- --------------------------------------------------------

--
-- Table structure for table `menuproducts`
--

CREATE TABLE `menuproducts` (
  `MenuProd_ID` int(11) NOT NULL,
  `ProductsName` varchar(50) NOT NULL,
  `MenuCat_ID` int(11) NOT NULL,
  `Price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menuproducts`
--

INSERT INTO `menuproducts` (`MenuProd_ID`, `ProductsName`, `MenuCat_ID`, `Price`) VALUES
(1, 'Seher yemeyi (1 neferlik)', 1, 17),
(2, 'Seher yemeyi (2 neferlik)', 1, 30),
(3, 'Seher yemeyi (4 neferlik)', 1, 50),
(4, 'Pomidor-yumurta', 1, 5),
(5, 'Pendirli Omlet', 1, 5),
(6, 'Kolbasali Omlet', 1, 5),
(7, 'Bal', 1, 2),
(8, 'Qaymaq', 1, 3.5),
(9, 'Ag Pendir', 2, 5),
(10, 'Sacaq Pendir', 2, 5),
(11, 'Tursu cesidleri', 2, 5),
(12, 'Terevez Buketi', 2, 5),
(13, 'Acika', 2, 3),
(14, 'Suzme', 2, 4.5),
(15, 'Tomat sorbasi', 3, 5),
(16, 'Gobelek sorbasi', 3, 6),
(17, 'Merci sorbasi', 3, 4),
(18, 'Toyuq sorbasi', 3, 5),
(19, 'Dusbere', 3, 6),
(20, 'Isti Terevez Salati', 4, 8),
(21, 'Isti Can eti Salati', 4, 15),
(22, 'Yunan Salati', 4, 7),
(23, 'Sezar Salati Toyuq ile', 4, 12),
(24, 'Sezar Salati Krevet ile', 4, 15),
(25, 'Coban Salati', 4, 6),
(26, 'Thai Salati', 4, 12),
(27, 'Qarisiq Kabab seti', 5, 30),
(28, 'Quzu Tike Kababi', 5, 11),
(29, 'Quzu Lule Kababi', 5, 12),
(30, 'Quzu Anrikot Kababi', 5, 12),
(31, 'Dana basdirma', 5, 15),
(32, 'Toyuq Kababi', 5, 8),
(33, 'Medalyon Steyk', 6, 29),
(34, 'Qizil Baliq Steyki', 6, 25),
(35, 'Forel Baligi', 6, 16),
(36, 'Tavada Narli Quzu Qovurmasi', 6, 16),
(37, 'Tavada Narli Can eti Qovurmasi', 6, 18),
(38, 'Saxsida Can eti Qovurma', 6, 30),
(39, 'Saxsida Quzu Qovurma', 6, 25),
(40, 'Gurze', 6, 7),
(41, 'Tavada Yarpaq Dolmasi', 6, 10),
(42, 'Tavada Quzu Lokum', 6, 16),
(43, 'Toyuq Snitzel', 6, 11),
(44, 'Tacos', 6, 16),
(45, 'Duyu', 7, 3),
(46, 'Kartof Fri', 7, 3.5),
(47, 'Qrilde Terevez', 7, 5),
(48, 'Pure', 7, 3),
(49, 'Evsayagi Kartof', 7, 4),
(50, 'Cizkeyk Nyu-York', 8, 8.5),
(51, 'Tiramisu', 8, 8.5),
(52, 'Balli Tort', 8, 8.5),
(53, 'Sokoladli Vulkan', 8, 8.5),
(54, 'Dondurma', 8, 5),
(55, 'Kunefe', 8, 8),
(56, 'Meyve Assorti', 8, 15),
(57, 'Qazli/Qazsiz su(330ml)', 9, 4),
(58, 'Kompot(1lt)', 9, 6),
(59, 'Ayran(330ml)', 9, 3),
(60, 'Meyve siresi(250ml)', 9, 2.5),
(61, 'Meyve siresi(1lt)', 9, 6),
(62, 'Cola / Fanta / Sprite / Ice Tea(330ml)', 9, 4),
(63, 'Mojito', 9, 10),
(64, 'Tutti Fruitti', 9, 8),
(65, 'Qara Cay', 9, 3),
(66, 'Espresso', 9, 6),
(67, 'Cappuccino', 9, 7),
(68, 'Turk qehvesi', 9, 5),
(69, 'Latte', 9, 8),
(70, 'Amerikano', 9, 5),
(71, 'Olmeca Silver(Tekila-4cl)', 10, 6),
(72, 'Olmeca Silver(Tekila-1lt)', 10, 120),
(73, 'Olmeca Gold(Tekila-4cl)', 10, 7),
(74, 'Olmeca Gold(Tekila-1lt)', 10, 125),
(75, 'Patron Silver(Tekila)', 10, 260),
(76, 'Xirdalan(Pive-500ml)', 10, 6),
(77, 'Miller(Pive-330ml)', 10, 8),
(78, 'Efes zero(Pive)', 10, 6),
(79, 'Efes Draft(Pive-500ml)', 10, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menucategories`
--
ALTER TABLE `menucategories`
  ADD PRIMARY KEY (`MenuCat_ID`);

--
-- Indexes for table `menuproducts`
--
ALTER TABLE `menuproducts`
  ADD PRIMARY KEY (`MenuProd_ID`),
  ADD KEY `MenuCat_IDFK` (`MenuCat_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menucategories`
--
ALTER TABLE `menucategories`
  MODIFY `MenuCat_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `menuproducts`
--
ALTER TABLE `menuproducts`
  MODIFY `MenuProd_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menuproducts`
--
ALTER TABLE `menuproducts`
  ADD CONSTRAINT `MenuCat_IDFK` FOREIGN KEY (`MenuCat_ID`) REFERENCES `menucategories` (`MenuCat_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
