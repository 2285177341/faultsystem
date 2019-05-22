/*
Navicat MySQL Data Transfer

Source Server         : Hzq
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : faultsystem

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-04-20 14:53:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `faultinfo`
-- ----------------------------
DROP TABLE IF EXISTS `faultinfo`;
CREATE TABLE `faultinfo` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(10) NOT NULL,
  `description` varchar(20) NOT NULL,
  `resolve` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of faultinfo
-- ----------------------------
INSERT INTO `faultinfo` VALUES ('32', '11111凄凄切切群', '怎么样', '111111111111氨基吖啶111111111加速度计阿来得及啊了解到咔擦接发就发垃圾啊法法', '2019-04-20 14:41:28');
INSERT INTO `faultinfo` VALUES ('35', '2', '3333333333333333333', '44444444444444444444444444444', '2019-04-20 14:45:21');
INSERT INTO `faultinfo` VALUES ('36', '111', '11111111111', 'www', '2019-04-20 14:50:39');
INSERT INTO `faultinfo` VALUES ('38', '可以', '怎么样', '111111111111氨基吖啶111111111加速度计阿来得及啊了解到咔擦接发就发垃圾啊法法', '2019-04-20 14:51:49');
