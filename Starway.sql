-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2019 年 03 月 03 日 23:27
-- 伺服器版本: 10.1.23-MariaDB
-- PHP 版本： 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cd105g4`
--

CREATE DATABASE `cd105g4` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `cd105g4`;

-- --------------------------------------------------------

--
-- 資料表結構 `album_bgimg`
--

CREATE TABLE `album_bgimg` (
  `bgImgNo` int(10) NOT NULL COMMENT '專輯版型編號',
  `bgName` char(15) NOT NULL COMMENT '版型名稱',
  `bgImg` char(15) NOT NULL COMMENT '版型圖片',
  `shelfStatus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '上下架狀態,0:下架 1:上架'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='專輯版型';

--
-- 資料表的匯出資料 `album_bgimg`
--

INSERT INTO `album_bgimg` (`bgImgNo`, `bgName`, `bgImg`, `shelfStatus`) VALUES
(1124, 'M1_SP_001', 'M1_SP_001.png', 1),
(1125, 'M1_SP_002', 'M1_SP_002.png', 1),
(1126, 'M1_SP_003', 'M1_SP_003.png', 1),
(1127, 'M1_SP_004', 'M1_SP_004.png', 1),
(1128, 'M1_SP_005', 'M1_SP_005.png', 1),
(1129, 'M1_SP_006', 'M1_SP_006.png', 1),
(1130, 'M1_SP_007', 'M1_SP_007.png', 1),
(1131, 'M1_SP_008', 'M1_SP_008.jpg', 1),
(1132, 'M1_SP_009', 'M1_SP_009.jpg', 1),
(1133, 'M1_SP_010', 'M1_SP_010.jpg', 1),
(1134, 'M1_SP_011', 'M1_SP_011.jpg', 1),
(1135, 'M1_SP_012', 'M1_SP_012.jpg', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `album_collection`
--

CREATE TABLE `album_collection` (
  `albumNo` int(10) NOT NULL COMMENT '專輯編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `album_icon`
--

CREATE TABLE `album_icon` (
  `iconNo` int(10) NOT NULL,
  `iconName` char(10) NOT NULL,
  `iconImg` char(20) NOT NULL,
  `shelfStatus` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='專輯素材版型';

--
-- 資料表的匯出資料 `album_icon`
--

INSERT INTO `album_icon` (`iconNo`, `iconName`, `iconImg`, `shelfStatus`) VALUES
(3, 'logo_D', 'logo_D.jpg', 1),
(4, 'LOGO-01', 'LOGO-01.png', 1),
(5, 'LOGO-02', 'LOGO-02.png', 1),
(6, 'LOGO-03', 'LOGO-03.png', 1),
(7, 'LOGO-04', 'LOGO-04.png', 1),
(8, 'starWay', 'starWaylogo.png', 1),
(9, 'LOGO-05', 'LOGO-05.png', 1),
(10, 'LOGO-06', 'LOGO-06.png', 1),
(11, 'Icon08', 'StarWayIcon-08.png', 1),
(12, 'Icon02', 'StarWayIcon-02.png', 1),
(13, 'Icon03', 'StarWayIcon-03.png', 1),
(14, 'Icon04', 'StarWayIcon-04.png', 1),
(15, 'Icon05', 'StarWayIcon-05.png', 1),
(16, 'Icon06', 'StarWayIcon-06.png', 1),
(17, 'Icon07', 'StarWayIcon-07.png', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `album_track`
--

CREATE TABLE `album_track` (
  `trackNo` int(10) NOT NULL COMMENT '曲目編號',
  `trackIndex` tinyint(2) UNSIGNED ZEROFILL NOT NULL COMMENT '曲目在專輯中的序號',
  `albumNo` int(10) NOT NULL COMMENT '專輯編號',
  `trackName` char(30) NOT NULL COMMENT '曲目名稱',
  `trackLength` char(5) NOT NULL COMMENT '時間長度'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='專輯曲目';

--
-- 資料表的匯出資料 `album_track`
--

INSERT INTO `album_track` (`trackNo`, `trackIndex`, `albumNo`, `trackName`, `trackLength`) VALUES
(1, 01, 1, 'Living In The Moment.mp3', '05:28'),
(2, 02, 1, 'Found The Way.mp3', '02:48'),
(3, 03, 1, 'Waiting.mp3', '02:12'),
(4, 04, 1, 'Dont Leave.mp3', '04:31'),
(5, 01, 2, 'Laid Down.mp3', '03:40'),
(6, 02, 2, 'Alone With You.mp3', '02:54'),
(7, 03, 2, 'Dont Hate Me.mp3', '03:36'),
(8, 04, 2, 'Living In The Moment.mp3', '05:28'),
(9, 01, 3, 'Saving All My Love For You.mp3', '03:57'),
(10, 02, 3, 'Greatest Love Of All.mp3', '02:44'),
(11, 03, 3, 'One Moment In Time.mp3', '04:01'),
(12, 04, 3, ' I Have Nothing.mp3', '03:01'),
(13, 01, 4, 'I Will Always Love You.mp3', '03:22'),
(14, 02, 4, 'Run To You.mp3', '02:33'),
(15, 03, 4, 'You Give Good Love.mp3', '04:22'),
(16, 04, 4, ' All At Once.mp3', '03:45'),
(17, 01, 5, 'Where Do Broken Hearts Go.mp3', '03:03'),
(18, 02, 5, 'If You Say My Eyes.mp3', '05:22'),
(19, 03, 5, 'Didn\'t We Almost Have.mp3', '02:22'),
(20, 04, 5, 'All The Man That I Need.mp3', '03:27'),
(21, 01, 6, 'Exhale (Shoop Shoop).mp3', '04:24'),
(22, 02, 6, 'Count On Me.mp3', '04:33'),
(23, 03, 6, 'I Learned From The Best.mp3', '02:59'),
(24, 04, 6, 'I Believe In You And Me.mp3', '02:33'),
(25, 01, 7, 'Same Script, Different.mp3', '03:33'),
(26, 02, 7, 'Could I Have This Kiss Forever', '03:45'),
(27, 03, 7, 'If I Told You That', '04:53'),
(29, 04, 7, 'Fine', '02:59'),
(30, 01, 8, 'My Love Is Your Love', '04:22'),
(31, 02, 8, ' It\'s Not Right But It\'s Okay', '04:23'),
(32, 03, 8, 'Heartbreak Hotel', '03:24'),
(33, 04, 8, 'Step By Step', '05:01'),
(34, 01, 9, 'Yesterday once more.mp3', '03:36'),
(35, 02, 9, 'All rise.mp3', '02:48'),
(36, 03, 9, 'Pretty boy.mp3', '05:28'),
(37, 04, 9, 'Big big world.mp3', '02:12');

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `album_track_extended`
-- (請參考以下實際畫面)
--
CREATE TABLE `album_track_extended` (
`trackNo` int(10)
,`trackIndex` tinyint(2) unsigned zerofill
,`albumNo` int(10)
,`trackName` char(30)
,`trackLength` char(5)
,`01` int(3) unsigned
);

-- --------------------------------------------------------

--
-- 資料表結構 `cdwall_msg`
--

CREATE TABLE `cdwall_msg` (
  `msgNo` int(10) NOT NULL COMMENT '留言編號',
  `albumNo` int(10) NOT NULL COMMENT '唱片編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號(留言者)',
  `msgContent` varchar(300) NOT NULL COMMENT '內容'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='唱片牆留言';

--
-- 資料表的匯出資料 `cdwall_msg`
--

INSERT INTO `cdwall_msg` (`msgNo`, `albumNo`, `memNo`, `msgContent`) VALUES
(1, 1, 1, '喔喔喔等一年了！'),
(2, 2, 2, '喜歡：Ｄ'),
(3, 3, 3, '這曲風是不是在抄黑莓啊？');

-- --------------------------------------------------------

--
-- 資料表結構 `cdwall_msgreport`
--

CREATE TABLE `cdwall_msgreport` (
  `reportNo` int(10) NOT NULL COMMENT '檢舉編號',
  `msgNo` int(10) NOT NULL COMMENT '留言編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號(檢舉人)',
  `checkStatus` tinyint(50) NOT NULL COMMENT '審核狀態 0:未處理 1:已確認 2:下架'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='唱片牆留言檢舉';

-- --------------------------------------------------------

--
-- 資料表結構 `fund_plan`
--

CREATE TABLE `fund_plan` (
  `fundplanNo` int(1) NOT NULL COMMENT '募資方案編號',
  `planName` varchar(10) NOT NULL COMMENT '方案名稱',
  `planImg` varchar(30) NOT NULL COMMENT '方案圖片',
  `planPrice` char(5) NOT NULL COMMENT '方案金額',
  `planContent` varchar(30) NOT NULL COMMENT '方案內容',
  `planContentTwo` varchar(30) NOT NULL COMMENT '方案內容2',
  `planDescription` varchar(50) NOT NULL COMMENT '方案說明',
  `planNotice` varchar(30) NOT NULL COMMENT '注意事項',
  `shelfStatus` int(1) NOT NULL DEFAULT '1' COMMENT '上架狀態'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='募資方案';

--
-- 資料表的匯出資料 `fund_plan`
--

INSERT INTO `fund_plan` (`fundplanNo`, `planName`, `planImg`, `planPrice`, `planContent`, `planContentTwo`, `planDescription`, `planNotice`, `shelfStatus`) VALUES
(3, '三人成行方案', 'pay_reco3.png', '1299', '黑膠專輯 x 3', '個別帳號無損音源下載 x ∞', '每個帳號皆可獲得專輯黑膠實體一張，及無限次無損音源下載。', '注意：每個音源下載權限僅供一帳號使用。', 1),
(2, '摯友分享方案', 'pay_reco2.png', '899', '黑膠專輯 x 2', '個別帳號無損音源下載 x ∞', '每個帳號皆可獲得專輯黑膠實體一張，及無限次無損音源下載。', '注意：每個音源下載權限僅供一帳號使用。', 1),
(1, '獨享方案', 'pay_reco1.png', '499', '黑膠專輯 x 1', '無損音源下載 x ∞', '可獲得專輯黑膠實體一張，及無限次無損音源下載。', '注意：音源下載權限僅供一帳號使用。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `info_album`
--

CREATE TABLE `info_album` (
  `albumNo` int(10) NOT NULL COMMENT '專輯編號',
  `albumName` varchar(20) NOT NULL COMMENT '專輯名稱',
  `albumCover` varchar(20) NOT NULL COMMENT '專輯封面圖片',
  `albumSinger` varchar(15) NOT NULL COMMENT '專輯歌手',
  `albumDescript` varchar(300) NOT NULL COMMENT '專輯描述內容',
  `albumLink` varchar(50) NOT NULL COMMENT '音源鏈結',
  `diskPrice` int(10) NOT NULL COMMENT '黑膠唱片單價',
  `saleCount` int(10) NOT NULL COMMENT '購買次數',
  `shelfStatus` tinyint(10) NOT NULL DEFAULT '1' COMMENT '上下架狀態'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `info_album`
--

INSERT INTO `info_album` (`albumNo`, `albumName`, `albumCover`, `albumSinger`, `albumDescript`, `albumLink`, `diskPrice`, `saleCount`, `shelfStatus`) VALUES
(1, '墜落', 'reco1.png', '南瓜寶寶泥', '渾然天成的氣場與稚嫩音色，配上咬字、編排帶著些許日系特色的演唱，讓南瓜泥成為特別的異數。是水泥叢林生長出的人工草皮。', 'Living In The Moment.mp3', 811, 111, 1),
(2, 'Thank You', 'reco2.png', '珍妮 伯孜', '髒亂都市角落中，沒過品管的搪膠公仔，卻連talking時都精彩到讓人憋尿的音樂組合已經罕見，海豹刑警值得更多的注目，看他們的演出絕對不會無聊。', 'I Believe In You And Me.mp3', 822, 112, 1),
(3, '旅館慢性病', 'reco3.png', '阿波羅密', '大致符合了有新意和有趣的條件，是否莫名其妙就不好說了，上秒溫柔下秒嘶吼，有重金屬搖滾雙面人的既視感，改變了大家的鬱鬱寡歡。', 'Saving All My Love For You.mp3', 833, 113, 1),
(4, 'Where\'s my Moustache', 'reco4.png', '約翰·多米尼克', '身為街頭音樂人，從過往民謠風格，嘗試爵士與藍調，將人的內在惡魔轉化為鬼怪戲謔出現在歌曲中，也挑戰街頭音樂較為禁忌的內容創作，走向更多元開闊的新視野，斐然的新興獨立音樂場景，他們以另類的思維與實踐，挑戰了台灣過往自傲', 'I Will Always Love You.mp3', 844, 114, 1),
(5, '紅髮女孩', 'reco5.png', '西奧力多', '滿滿的吉他象徵了90年代的美好似乎還有一絲絲餘力，那些被吉他噪音塞滿耳朵的年代雖然不會回來，歌詞經典又正向。沒有任何廠牌企劃經營，卻總是可以自己定位自己，經過他們的音牆似乎可以一窺究竟，在三件式配置中，除了女主唱的聲音很迷人，他們還很闊氣地慢慢刷吉他「一拍一下」，', 'Where Do Broken Hearts Go.mp3', 855, 115, 1),
(6, 'black monster', 'reco6.png', '喬 伊夫林', '難以忽略的黑色幽默，自然遊走新舊音樂元素，自由狂放唱著現今的人們「困獸之鬥」，有時代感，臭臭黏黏的感覺很不錯，極富反差魅力。', 'Exhale (Shoop Shoop).mp3', 866, 116, 1),
(7, '椰子水Cuddle', 'reco7.png', '伊莉莎白卡蜜拉', '喃喃低語、輕柔的吉他，渾然天成的chill感，一秒把你吹到沙灘上，Hitch Hikin神來一筆的和聲，讓人恍若喝上了一口冰涼的椰子水。', 'Same Script, Different.mp3', 877, 117, 1),
(8, '鯊魚二世', 'reco8.png', '雅各利亞', '如果你也對公路逃亡的情節有嚮往，那你應該聽聽鯊魚迷幻。在看鯊魚迷幻演出時，常常有種下一秒他們將撇下吉他，躍下舞台，長揚而去的迫切姿態，被看見的方式已有所改變。新載具的產生，讓喜歡音樂的年輕人有別的表演機會。三人的逃亡電影，才正要出發，「對於打破框架這件事，我個人是', 'If You Say My Eyes.mp3', 888, 118, 1),
(9, '龐貝城中沒人', 'reco9.png', '漩渦嗚人', '跟前幾張作品比在錄音方面精致許多，納悶這樣是不是不夠生猛了呢？！這支混亂的隊伍夾雜著不正宗的龐克內涵，伴隨著一些生猛噪音，呢喃著的另一首歌曲〈假冒的搖滾明星〉，他們從不思考；從不妥協外界給予的一切評論。', 'Laid Down.mp3', 899, 119, 1),
(10, '深夜安眠曲', 'reco10.png', '嘴姊', '彷彿在無形中成為自己的夥伴，在安靜的房間裡、空虛的夜晚哩，陪伴自己度過每一次的寂寞咆嘯，如果你是個感性的人，那就不該錯過嘴姊。', 'No ordinary automobile.mp3', 999, 536, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `info_class`
--

CREATE TABLE `info_class` (
  `classNo` int(10) NOT NULL COMMENT '課程編號',
  `teacherNo` int(10) NOT NULL COMMENT '教師編號',
  `className` varchar(10) NOT NULL COMMENT '課程名稱',
  `classDescript` varchar(500) NOT NULL COMMENT '課程描述內容',
  `classPrice` int(10) NOT NULL COMMENT '課程價格',
  `shelfStatus` tinyint(1) NOT NULL COMMENT '上下架狀態,0:下架 1:上架'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='課程';

--
-- 資料表的匯出資料 `info_class`
--

INSERT INTO `info_class` (`classNo`, `teacherNo`, `className`, `classDescript`, `classPrice`, `shelfStatus`) VALUES
(1, 1, '[初階]發音課程', '常有說話不清的困擾?', 600, 1),
(2, 2, '[進階]發音課程', '隨著學習的時間越來越久，聲音的穩定性漸趨提升之後，你會發現在分辨發聲有效率與否這件事東中的差異也會越來越小。而能夠讓自己慢慢地提升，從一個「大略方向」 的觀察能力到發現當中的細節，從挑整你的練習方式開始。', 800, 1),
(3, 3, '[高階]發音課程', '專為「想成為一流歌手」而設計的\r\n', 1000, 1),
(4, 4, '[初階]節奏課程', '音樂的三大要素是節奏、曲調以及和聲，其中以節奏最為重要。因為曲調 不論多麼優美，和聲不論多麼豐富，沒有節奏就如人體沒有禺略，美麗的曲線 不見了，剩下的只是一堆不成形的皮和肉。而一首缺少節奏的音樂，會馬上失 去躍動感。', 600, 1),
(5, 5, '[進階]節奏課程', '一首音樂的好壞，節奏擔負了很大比例的重責大任，因此節奏能力的良好，對於音樂性有著鉅大的影響。拍打身體的不同部位，就會發出各種高低、強弱、音色均不相同的音響，如果加以適當的組合，可以造成很好的效果。', 800, 1),
(6, 6, '[高階]節奏課程', 'ㄧ首歌曲想得到觀眾認同，必須要把歌曲旋律以及調性彈奏出來，好聽的歌曲剛開始就可以讓人有感動的意味，它像是ㄧ種會讓人亮起來的意味。ㄧ首歌曲想得到觀眾認同，必須要把歌曲旋律以及調性彈奏出來，好聽的歌曲就可以讓人有感動的意味。', 1000, 1),
(7, 0, '', '覺得自己說話高音上不去，低音下不來?', 0, 1),
(8, 0, '', '長時間或大聲說話，沒多久就聲音啞了?', 0, 1),
(9, 0, '', '覺得自己聲音不好聽，不吸引人?', 0, 1),
(10, 0, '', '改善人際關係，就從改善聲音開始。', 0, 1),
(11, 0, '', '「專業歌唱」課程。\r\n', 0, 1),
(12, 0, '', '想輕鬆唱出響亮的高音嗎？\r\n', 0, 1),
(13, 0, '', '想了解如何詮釋歌曲嗎？\r\n', 0, 1),
(14, 0, '', '想找到自己歌唱的亮點嗎？\r\n', 0, 1),
(15, 0, '', '不管程度如何，只要你對歌唱具有熱情，\r\n', 0, 1),
(16, 0, '', '想要精進自己的歌唱實力，這門課保證能夠幫助你！', 0, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `info_coupon`
--

CREATE TABLE `info_coupon` (
  `couponNo` int(10) NOT NULL COMMENT '折價券編號',
  `couponName` varchar(10) NOT NULL COMMENT '折價券名稱',
  `couponPhoto` varchar(10) NOT NULL COMMENT '折價券圖片'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='折價券';

--
-- 資料表的匯出資料 `info_coupon`
--

INSERT INTO `info_coupon` (`couponNo`, `couponName`, `couponPhoto`) VALUES
(1, '50', 'cou50.png'),
(2, '100', 'cou100.png'),
(3, '150', 'cou150.png');

-- --------------------------------------------------------

--
-- 資料表結構 `info_member`
--

CREATE TABLE `info_member` (
  `memNo` int(10) NOT NULL COMMENT '會員編號',
  `memName` varchar(10) NOT NULL DEFAULT '' COMMENT '會員名稱',
  `memId` varchar(10) NOT NULL DEFAULT '' COMMENT '會員帳號',
  `memPsw` varchar(10) NOT NULL DEFAULT '' COMMENT '會員密碼',
  `memAvatar` varchar(100) NOT NULL DEFAULT '' COMMENT '會員圖片',
  `sex` varchar(10) NOT NULL COMMENT '性別',
  `birthDate` date DEFAULT NULL COMMENT '出生年月日',
  `rgsDate` date DEFAULT NULL COMMENT '註冊日期',
  `phone` varchar(10) NOT NULL DEFAULT '' COMMENT '電話',
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '信箱',
  `memPms` tinyint(1) NOT NULL DEFAULT '1' COMMENT '會員權限,0:停權 1:正常',
  `couponNo` char(10) DEFAULT '0' COMMENT '折價券,0:50元 1:100元 2:150元'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='會員';

--
-- 資料表的匯出資料 `info_member`
--

INSERT INTO `info_member` (`memNo`, `memName`, `memId`, `memPsw`, `memAvatar`, `sex`, `birthDate`, `rgsDate`, `phone`, `email`, `memPms`, `couponNo`) VALUES
(1, '潘健智', 'aaa', 'aaa', 'member-1.jpg', '1', '1992-10-20', '2019-01-26', '03-3088512', 'aaa@gmail.com', 1, '3'),
(2, '林伊珞', 'lll', 'lll', 'member-2.jpg', '0', '2019-01-03', '2019-01-05', '5645646', 'lll@gmail.com', 1, '0'),
(3, '長谷川', 'hhh', 'hhh', '20181128_IMG_8439.JPG', '0', '2019-01-03', '2019-01-05', '0912345678', 'hhh@gmail.com', 1, '0'),
(4, '吳振智', 'www', 'www', 'member-4.jpg', '1', '2019-01-03', '2019-01-05', '2342456', 'www@gmail.com', 1, '0'),
(5, '游弘一', 'yyy', 'yyy', 'A-min.png', '1', '2019-01-03', '2019-01-05', '5645646', 'yyy@gmail.com', 1, '2'),
(6, '林鉦文', 'jjj', 'jjj', 'member-6.jpg', '1', '1989-06-18', '2019-01-05', '0989322775', 'e550817@gmail.com', 1, '3'),
(129, '資策張孝全', 'zzz', 'zzz123', '會員.png', '0', '2019-03-14', '2019-03-03', '0912345678', 'zzz@gmail.com', 1, '0');

-- --------------------------------------------------------

--
-- 資料表結構 `info_server`
--

CREATE TABLE `info_server` (
  `adminNo` int(10) NOT NULL COMMENT '管理員編號',
  `adminId` char(10) NOT NULL COMMENT '管理員帳號',
  `adminPsw` char(10) NOT NULL COMMENT '管理員密碼',
  `adminName` char(10) NOT NULL COMMENT '管理員姓名',
  `adminPms` int(1) NOT NULL DEFAULT '1' COMMENT '管理員權限 - 0:停權 1:正常'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='後台人員';

--
-- 資料表的匯出資料 `info_server`
--

INSERT INTO `info_server` (`adminNo`, `adminId`, `adminPsw`, `adminName`, `adminPms`) VALUES
(1, 'aaa', 'aaa', '潘建智', 1),
(2, 'lll', 'lll', '林伊珞', 1),
(3, 'jjj', 'jjj', '林鉦文', 1),
(4, 'www', 'www', '吳振智', 1),
(5, 'yyy', 'yyy', '游弘一', 1),
(6, 'hhh', 'hhh', '長谷川', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `info_teacher`
--

CREATE TABLE `info_teacher` (
  `teacherNo` int(10) NOT NULL COMMENT '教師編號',
  `teacherName` varchar(10) NOT NULL COMMENT '教師姓名',
  `teacherPhoto` varchar(20) NOT NULL COMMENT '教師圖片',
  `teacherDescript` varchar(500) NOT NULL COMMENT '教師描述',
  `teacherDescriptTwo` varchar(100) NOT NULL COMMENT '教師描述2',
  `shelfStatus` tinyint(1) NOT NULL COMMENT '上下架狀態,0:下架 1:上架'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='教師';

--
-- 資料表的匯出資料 `info_teacher`
--

INSERT INTO `info_teacher` (`teacherNo`, `teacherName`, `teacherPhoto`, `teacherDescript`, `teacherDescriptTwo`, `shelfStatus`) VALUES
(1, '亞德里恩', 'teacher2.png', '亞德里恩是一名加拿大歌手與詞作人。2008年，他在YouTube上翻唱歌曲的影片被星探發掘後與RBMG唱片簽約，發行了自己的首張迷你專輯《我的世界》。2009年年末，專輯在美國已獲得白金認證。2010年，比伯發行了他的首張錄音室專輯《我的世界2.0》，專輯在許多國家取得了冠軍或接近冠軍的成績，在美國已獲得多白金認證。比伯開啟了他的首場領銜巡演我的世界巡迴演唱會，並發布了混音專輯《My Worlds Acoustic》和《永不說不》。', '2008年，他在YouTube上翻唱歌曲的影片被星探發掘後與RBMG Records簽約，發行了自己的首張迷你專輯My World我的世界 。', 1),
(2, '布魯斯', 'teacher7.png', '美國的創作型歌手、樂器演奏家、音樂製作人和舞者。火星人成長於夏威夷火奴魯魯的一個音樂世家中。他自幼就開始創作音樂，並在家鄉的多家音樂場所表演。高中畢業後，他搬到洛杉磯追隨自己的音樂夢想。', '美國的創作型歌手、樂器演奏家、音樂製作人和舞者。火星人成長於夏威夷火奴魯魯的一個音樂世家中。', 1),
(3, '艾德', 'teacher3.png', '是英國的一名歌手、吉他手與唱片製作人。艾德出生於西約克郡哈利法克斯，並在薩福克郡弗瑞林姆長大。18歲時，他曾於薩里郡吉爾福德當代音樂學院就讀大學。2011年年初，艾德獨立發行了迷你專輯《No. 5 Collaborations Project》。同年，他與庇護所唱片簽約，於2011年9月9日發行了首張錄音室專輯《無限延伸》。專輯在英國獲得了8白金銷售認證，其單曲《A咖一族》獲得了第55屆葛萊美獎年度歌曲提名，並讓艾德贏得了艾弗·諾韋洛獎「最佳詞曲歌曲獎」。2012年，艾德贏得了全英音樂獎「最佳英國獨唱藝人」和「英國最佳突破藝人」獎。', '2011年9月9日發行了首張錄音室專輯《無限延伸》。專輯在英國獲得了8白金銷售認證。', 1),
(4, '查理', 'teacher4.png', '查理是美國歌手、演員。2005年末，年僅16歲的他發布了首張同名專輯《Chris Brown》。該專輯中收錄了打榜單曲「Run It!」，該曲曾登上告示牌百強單曲榜頭名， 這使得他成為繼1995年蒙蒂爾·喬丹之後，首位出道單曲即登上排行榜頭手。該專輯在全美銷售量超過二百萬拷貝，獲得美國唱片業協會雙白金銷售認證。查理的第二張專輯《Exclusive》於2007年11月面向全球發售。該專輯共誕生了兩首成功單曲：和T-Pain合作完成的「Kiss Kiss」，這成為他的第二首全美冠軍單曲；「With You」最高則達到排行榜次席。布朗還發布了該專輯的豪華版本，命名為「永恆版」（The Forever Edition）。', '年僅16歲的他發布了首張同名專輯《Chris Brown》，曾登上告示牌百強單曲榜頭名。', 1),
(5, '凱莉', 'teacher5.png', '凱莉美國著名歌手、詞曲作家、舞者、演員及商人，世界級的超級巨星。其出生並成長於德克薩斯州休斯頓，幼時便以在歌舞方面的才能參加了各種選秀表演，她在20世紀90年代末以R&B女子組合天命真女的主唱成名。她的父親馬修·諾利斯作為天命真女的經紀人，推動了組合走向成功，使該組合成為了歷史上全世界最暢銷的女子組合之一。', '凱莉美國著名歌手、詞曲作家、舞者、演員及商人，世界級的超級巨星。', 1),
(6, '賈斯汀', 'teacher6.png', '生於美國田納西州，童星出身的美國流行節奏藍調唱作歌手、演員、舞者兼企業家，葛萊美獎得主。原本他是男孩團體「超級男孩」隊長，2002年解散後開始單飛個人活動，並曾獲得10座葛萊美獎，9座告示牌音樂獎，包括兩屆「最佳流行男歌手」。2002年推出首張個人專輯《愛妳無罪》，該專輯在全世界銷售超過700萬張。賈斯汀的第二張個人專輯《愛 未來式》於2006年發行，該專輯的巨大成功讓賈斯汀進一步成為世界巨星。', '童星出身的美國流行節奏藍調唱作歌手、演員、舞者兼企業家，葛萊美獎得主。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail_disk`
--

CREATE TABLE `orderdetail_disk` (
  `orderNo` int(20) NOT NULL COMMENT '訂單編號',
  `albumNo` int(20) NOT NULL COMMENT '專輯編號',
  `diskQty` int(10) NOT NULL COMMENT '黑膠唱片數量',
  `diskTotal` int(10) NOT NULL COMMENT '黑膠唱片小計'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='訂單明細_黑膠唱片';

--
-- 資料表的匯出資料 `orderdetail_disk`
--

INSERT INTO `orderdetail_disk` (`orderNo`, `albumNo`, `diskQty`, `diskTotal`) VALUES
(11, 2, 1, 822),
(12, 3, 1, 833),
(13, 3, 1, 833),
(21, 3, 1, 833),
(106, 8, 1, 888),
(107, 4, 1, 844),
(108, 4, 1, 844),
(108, 8, 1, 888),
(109, 10, 1, 999),
(110, 5, 1, 855),
(111, 3, 1, 833),
(111, 6, 1, 866),
(112, 2, 1, 822),
(112, 6, 1, 866),
(113, 1, 1, 811),
(113, 6, 1, 866),
(114, 5, 1, 855);

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail_fund`
--

CREATE TABLE `orderdetail_fund` (
  `donateNo` int(10) NOT NULL COMMENT '贊助編號',
  `fundNo` int(10) NOT NULL COMMENT '募資案件編號',
  `fundPlanNo` int(1) NOT NULL COMMENT '募資方案編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號(贊助者)',
  `donation` int(10) NOT NULL COMMENT '贊助金額',
  `donateDate` date NOT NULL COMMENT '贊助日期',
  `donaPay` int(1) NOT NULL COMMENT '付款方式',
  `donatorName` varchar(10) NOT NULL COMMENT '收件人姓名',
  `donatorAdress` varchar(50) NOT NULL COMMENT '收件地址',
  `donatorNumber` varchar(20) NOT NULL COMMENT '聯絡電話',
  `donatorEmail` varchar(50) NOT NULL COMMENT '電子郵件'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='資助紀錄明細';

--
-- 資料表的匯出資料 `orderdetail_fund`
--

INSERT INTO `orderdetail_fund` (`donateNo`, `fundNo`, `fundPlanNo`, `memNo`, `donation`, `donateDate`, `donaPay`, `donatorName`, `donatorAdress`, `donatorNumber`, `donatorEmail`) VALUES
(1, 1, 3, 1, 1299, '2019-02-01', 0, '月月', '高雄市田寮區月球路36號', '0987654321', 'moonmoon@sliymail.com'),
(91, 7, 2, 2, 899, '2019-02-24', 0, '林伊', '桃園市大溪區仁武里2鄰忠泰街26巷11號', '934153410', 'lll@gmail.com'),
(92, 7, 2, 2, 899, '2019-02-24', 0, '游弘一', '大溪溪溪', '0934153410', 'lll@gmail.com'),
(106, 7, 1, 2, 499, '2019-02-24', 0, '王知會', '111', '444', 'lll@gmail.com'),
(107, 6, 2, 3, 899, '2019-02-25', 0, '姚麗湖', '41234', '1234', 'yyy@gmail.com'),
(120, 7, 1, 2, 499, '2019-02-24', 0, '王知會', '111', '444', 'lll@gmail.com'),
(121, 6, 2, 3, 899, '2019-02-25', 0, '姚麗湖', '41234', '1234', 'yyy@gmail.com'),
(122, 1, 1, 4, 499, '2019-02-01', 0, '月月', '高雄市田寮區月球路36號', '0987654321', 'moonmoon@sliymail.com'),
(123, 7, 2, 5, 899, '2019-02-24', 0, '林伊', '桃園市大溪區仁武里2鄰忠泰街26巷11號', '934153410', 'lll@gmail.com'),
(124, 7, 3, 1, 1299, '2019-02-24', 0, '游弘一', '大溪溪溪', '0934153410', 'lll@gmail.com'),
(128, 1, 3, 2, 1299, '2019-02-01', 0, '孤立祥', '高雄市田寮區月球路36號', '0987654321', 'moonmoon@sliymail.com'),
(168, 10, 3, 5, 1299, '2019-03-01', 0, '真心鎮小智', '中央大學', '0912345678', 'yyy@gmail.com');

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail_link`
--

CREATE TABLE `orderdetail_link` (
  `orderNo` int(20) NOT NULL COMMENT '訂單編號',
  `albumNo` int(20) NOT NULL COMMENT '專輯編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='中文：訂單明細_下載音樂';

--
-- 資料表的匯出資料 `orderdetail_link`
--

INSERT INTO `orderdetail_link` (`orderNo`, `albumNo`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7);

-- --------------------------------------------------------

--
-- 資料表結構 `order_album`
--

CREATE TABLE `order_album` (
  `orderNo` int(10) NOT NULL COMMENT '訂單編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號',
  `payMethod` varchar(10) NOT NULL COMMENT '付款方式',
  `orderTotal` int(15) NOT NULL COMMENT '訂單總金額',
  `orderDate` date NOT NULL COMMENT '訂單日期',
  `receiveName` varchar(10) NOT NULL COMMENT '收件人姓名',
  `ShipAddr` varchar(30) NOT NULL COMMENT '收件人地址',
  `shipPhone` varchar(20) NOT NULL COMMENT '收件人電話',
  `shipEmail` varchar(30) NOT NULL COMMENT '收件人電子信箱',
  `shipStatus` tinyint(1) NOT NULL DEFAULT '0' COMMENT '出貨狀態 0:未出貨 1:已出貨',
  `orderStatus` tinyint(1) NOT NULL DEFAULT '0' COMMENT '訂單處理狀態 0:處理中 1:已完成'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='唱片訂單';

--
-- 資料表的匯出資料 `order_album`
--

INSERT INTO `order_album` (`orderNo`, `memNo`, `payMethod`, `orderTotal`, `orderDate`, `receiveName`, `ShipAddr`, `shipPhone`, `shipEmail`, `shipStatus`, `orderStatus`) VALUES
(11, 5, '信用卡付款', 822, '2019-02-21', '游弘一', '大溪', '03388045', 'yyy@gmail.com', 0, 0),
(12, 5, 'ATM匯款', 833, '2019-02-21', '游弘一', '大溪', '870834', 'yyy@gmail.com', 0, 0),
(13, 5, '信用卡付款', 833, '2019-02-21', '游弘四', '大溪鎮', '7089709', 'yyy@gmail.com', 0, 0),
(21, 5, 'ATM匯款', 833, '2019-02-21', '游弘一', '大溪', '033803074', 'yyy@gmail.com', 0, 0),
(22, 6, 'ATM匯款', 811, '2019-02-21', '林鉦文', '高雄', '7878778', 'e550817@gmail.com', 0, 0),
(26, 5, 'ATM匯款', 1655, '2019-02-22', '游弘三', '大溪溪溪', '231904', 'yyy@gmail.com', 0, 0),
(27, 5, '信用卡付款', 1721, '2019-02-22', '游弘一', '大大大溪', '12341234', 'yyy@gmail.com', 0, 0),
(28, 1, 'ATM匯款', 1721, '2019-02-23', '潘健智', '台北', '4123412', 'aaa@gmail.com', 0, 0),
(108, 4, '信用卡付款', 844, '2019-03-02', '真心鎮小智', '中央大學', '0912345678', 'www@gmail.com', 0, 0),
(112, 129, '信用卡付款', 1688, '2019-03-03', '資策張孝全', '桃園市中壢區中大路300號', ' 0912345678', 'zzz@gmail.com', 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `order_class`
--

CREATE TABLE `order_class` (
  `orderNo` int(10) NOT NULL COMMENT '訂單編號',
  `classNo` int(10) NOT NULL COMMENT '課程編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號',
  `orderDate` date NOT NULL COMMENT '訂單日期',
  `classDate` date NOT NULL COMMENT '選課日期',
  `payMethod` varchar(10) NOT NULL COMMENT '付款方式',
  `orderTotal` int(10) NOT NULL COMMENT '訂單總金額',
  `orderStatus` tinyint(1) NOT NULL DEFAULT '0' COMMENT '訂單處理狀態,0:處理中 1:已完成',
  `shipPhone` varchar(10) NOT NULL COMMENT '收件人電話',
  `shipEmail` varchar(30) NOT NULL COMMENT '收件人電子信箱'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='加值課程訂單';

--
-- 資料表的匯出資料 `order_class`
--

INSERT INTO `order_class` (`orderNo`, `classNo`, `memNo`, `orderDate`, `classDate`, `payMethod`, `orderTotal`, `orderStatus`, `shipPhone`, `shipEmail`) VALUES
(53, 5, 5, '2019-03-01', '2019-03-27', 'ATM匯款', 750, 0, '5645646', 'yyy@gmail.com'),
(54, 1, 5, '2019-03-01', '2019-03-21', 'ATM匯款', 450, 0, '5645646', 'yyy@gmail.com'),
(55, 2, 5, '2019-03-01', '2019-03-19', 'ATM匯款', 800, 0, '5645646', 'yyy@gmail.com'),
(56, 1, 4, '2019-03-01', '2019-03-28', '信用卡付款', 600, 0, '2234123412', 'www@gmail.com'),
(57, 1, 1, '2019-03-01', '2019-03-31', 'ATM匯款', 600, 0, '03-3088512', 'aaa@gmail.com'),
(58, 3, 4, '2019-03-02', '2019-04-30', 'ATM匯款', 1000, 0, '2234123412', 'www@gmail.com'),
(59, 3, 5, '2019-03-03', '2019-03-04', '信用卡付款', 850, 0, '5645646', 'yyy@gmail.com'),
(60, 3, 4, '2019-03-03', '2019-03-27', '信用卡付款', 1000, 0, '2234123412', 'www@gmail.com'),
(61, 3, 5, '2019-03-03', '2019-03-04', '信用卡付款', 850, 0, '5645646', 'yyy@gmail.com'),
(62, 3, 4, '2019-03-03', '2019-03-04', 'ATM匯款', 850, 0, '2342456', 'www@gmail.com');

-- --------------------------------------------------------

--
-- 資料表結構 `order_fund`
--

CREATE TABLE `order_fund` (
  `fundNo` int(10) NOT NULL COMMENT '募資案件編號',
  `memNo` int(10) NOT NULL COMMENT '會員編號(募款者)',
  `demoName` varchar(20) NOT NULL COMMENT '募資專輯名稱',
  `fundDate` date NOT NULL COMMENT '案件日期',
  `fundStartDate` date NOT NULL COMMENT '募資開始日期',
  `fundEndDate` date NOT NULL COMMENT '募資期限日期',
  `fundGoal` int(10) NOT NULL DEFAULT '200000' COMMENT '募資達標金額',
  `fundTotal` int(10) NOT NULL DEFAULT '0' COMMENT '當前累計金額',
  `fundCount` int(15) NOT NULL DEFAULT '0' COMMENT '贊助次數',
  `fundStatus` char(1) NOT NULL DEFAULT '0' COMMENT '案件處理狀態，0:募資進行中,1:成功,2:失敗',
  `demoCover` varchar(50) NOT NULL COMMENT '募資專輯封面圖片',
  `demoDescript` varchar(300) NOT NULL COMMENT '募資專輯描述內容',
  `demoLink` varchar(30) NOT NULL COMMENT '音源鏈結'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='專輯募資案件';

--
-- 資料表的匯出資料 `order_fund`
--

INSERT INTO `order_fund` (`fundNo`, `memNo`, `demoName`, `fundDate`, `fundStartDate`, `fundEndDate`, `fundGoal`, `fundTotal`, `fundCount`, `fundStatus`, `demoCover`, `demoDescript`, `demoLink`) VALUES
(2, 1, '漂流在外', '2019-02-15', '2019-02-22', '2019-03-22', 200000, 200149, 78, '1', 'All At Once.png', '就算龐貝樂誕生超過四十年了，每次經過頂著龐克刺蝟頭的年輕人，心中還是會飄過一陣激烈快速的電吉他破音，以及想要握拳大吼的衝動。', 'All At Once.mp3'),
(3, 2, '做自己', '2019-02-28', '2019-03-01', '2019-04-01', 200000, 52200, 13, '0', 'Alone With You.png', '歌詞直指財富分配不均、階級複製的青年世代現況，在無政府主義的大旗下，卻潛藏著大塊流暢的旋律線與速度感，在凡事講求寬鬆的時代土壤中，長出了最硬蕊的一隻龐克枝幹。', 'Alone With You.mp3'),
(4, 4, '悲傷的淚', '2019-03-15', '2019-03-16', '2019-04-16', 200000, 199650, 218, '1', 'If You Say My Eyes.png', '兩位創作妖精躲在人間，努力採集喜怒哀樂、瞬息萬變的詞曲能量，在舒適、愉快的台式民謠清新風格之外，加入台語、客語等多元化族群脈絡，是今年最私密的民謠推薦新聲。			', 'If You Say My Eyes.mp3'),
(5, 3, 'Indie-Rock', '2019-03-18', '2019-03-19', '2019-04-19', 200000, 382832, 260, '0', 'Greatest Love Of All.png', '搖滾樂團『熱寫生』，深諳另類、民謠、搖滾融合之道，也以穩健的步伐陸續交出新歌，描繪出怡人的城市美好下午風景。', 'Greatest Love Of All.mp3'),
(6, 3, '整個城市都是我的舞台', '2019-03-25', '2019-03-25', '2019-04-25', 200000, 2400, 4, '0', 'Didn\'t We Almost Have.png', '有時青澀，有時豁達的熱寫生，也在今年夏天慢慢地出現在台灣音樂祭的名單之中；抓起冰涼的飲料，約上一些親愛的朋友。', 'Didn\'t We Almost Have.mp3'),
(8, 1, 'Indie-Rock', '2019-04-02', '2019-04-02', '2019-05-02', 200000, 2390, 3, '0', 'Same Script, Different.png', '盤根錯節的社會中，硬是掘出一條通往現實的崎嶇幽暗通道。單曲〈開店歌〉與〈檳榔〉已成為台灣音樂祭現場金曲，帶領觀眾在合唱中進入暈眩又流暢的集體狀態。', 'Same Script, Different.mp3'),
(9, 2, '酒店往事', '2019-04-10', '2019-04-11', '2019-05-11', 200000, 252699, 190, '0', 'Laid Down.png', '從台南成功大學嘻哈研究社出發，宛如吸飽了嘉南平原出產的豐沛物產與甜蜜味覺，渾然天成的陽光韻腳、飽滿扎實的音樂性以及流暢的副歌，獨有的甜味弛放嘻哈，希望在被現實壓力黑化前會能留下更多「完全看不懂介紹寫什麼鬼但是音樂還是好好聽」的作品。那句：「就算全世界都覺得你是低能兒，你也不要管他們，你就做自己！」真是能救了每個時刻不堪的自己啊。', 'Laid Down.mp3'),
(10, 4, '高速公路走九回', '2019-04-11', '2019-04-12', '2019-05-12', 200000, 8726, 495, '0', 'drop drip trickle.png', '能輕鬆、能感傷、能胡說八道，也能歇斯底里，都市生活中沒有「真實」的悲情，如此朗朗上口卻又意義深遠。', 'drop drip trickle.mp3'),
(11, 2, '酒粕 哲司', '2019-04-15', '2019-04-15', '2019-05-15', 200000, 454497, 497, '1', 'Her chassis lives.png', '文人優雅般的呢喃吟唱，又能傻氣直率了，或許不算有多大突破或是讓人有一聽就正中紅心的感覺，但D.A.N.的旋律，洋溢著知性的大人感、和年齡有出入的洗鍊感，讓人想不注意這群有那麼點新意的年輕人也難。', 'Her chassis lives.mp3'),
(15, 6, 'Dua  Lipa	', '2019-02-12', '2019-02-01', '2019-02-28', 200000, 131009, 163, '0', 'I Have Nothing.png', '流行 不曾如此威脅  危險 從未這麼甜美  黑色性\r\n魅惑全球  當代樂壇頭號人物改寫全英音樂獎\r\n歷史紀錄  冊封MTV歐洲音樂大獎「最佳新人」  \r\n2017 Spotify英國串流冠軍女王  2018 首度台北\r\n演唱會全數完售  「英倫危險甜心」  \r\n杜娃黎波 DUA LIPA \r\n準確寫出新生代女孩感情觀的創作能力，被視為撼動西洋樂壇的新秀！\r\n她被少女們奉為新生代戀愛教主、時尚新指標，MV點閱次數衝破12億，在各國引發模仿潮，性感旋風席捲全球。', 'I Have Nothing.mp3');

-- --------------------------------------------------------

--
-- 檢視表結構 `album_track_extended`
--
DROP TABLE IF EXISTS `album_track_extended`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `album_track_extended`  AS  (select `album_track`.`trackNo` AS `trackNo`,`album_track`.`trackIndex` AS `trackIndex`,`album_track`.`albumNo` AS `albumNo`,`album_track`.`trackName` AS `trackName`,`album_track`.`trackLength` AS `trackLength`,(case when (`album_track`.`trackIndex` = '01') then `album_track`.`trackIndex` end) AS `01` from `album_track`) ;

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `album_bgimg`
--
ALTER TABLE `album_bgimg`
  ADD PRIMARY KEY (`bgImgNo`);

--
-- 資料表索引 `album_collection`
--
ALTER TABLE `album_collection`
  ADD PRIMARY KEY (`albumNo`,`memNo`) USING BTREE;

--
-- 資料表索引 `album_icon`
--
ALTER TABLE `album_icon`
  ADD PRIMARY KEY (`iconNo`);

--
-- 資料表索引 `album_track`
--
ALTER TABLE `album_track`
  ADD PRIMARY KEY (`trackNo`);

--
-- 資料表索引 `cdwall_msg`
--
ALTER TABLE `cdwall_msg`
  ADD PRIMARY KEY (`msgNo`);

--
-- 資料表索引 `cdwall_msgreport`
--
ALTER TABLE `cdwall_msgreport`
  ADD PRIMARY KEY (`reportNo`);

--
-- 資料表索引 `fund_plan`
--
ALTER TABLE `fund_plan`
  ADD PRIMARY KEY (`planName`);

--
-- 資料表索引 `info_album`
--
ALTER TABLE `info_album`
  ADD PRIMARY KEY (`albumNo`);

--
-- 資料表索引 `info_class`
--
ALTER TABLE `info_class`
  ADD PRIMARY KEY (`classNo`);

--
-- 資料表索引 `info_coupon`
--
ALTER TABLE `info_coupon`
  ADD PRIMARY KEY (`couponNo`);

--
-- 資料表索引 `info_member`
--
ALTER TABLE `info_member`
  ADD PRIMARY KEY (`memNo`),
  ADD UNIQUE KEY `memId` (`memId`);

--
-- 資料表索引 `info_server`
--
ALTER TABLE `info_server`
  ADD PRIMARY KEY (`adminNo`);

--
-- 資料表索引 `info_teacher`
--
ALTER TABLE `info_teacher`
  ADD PRIMARY KEY (`teacherNo`);

--
-- 資料表索引 `orderdetail_disk`
--
ALTER TABLE `orderdetail_disk`
  ADD PRIMARY KEY (`orderNo`,`albumNo`) USING BTREE;

--
-- 資料表索引 `orderdetail_fund`
--
ALTER TABLE `orderdetail_fund`
  ADD PRIMARY KEY (`donateNo`);

--
-- 資料表索引 `orderdetail_link`
--
ALTER TABLE `orderdetail_link`
  ADD PRIMARY KEY (`orderNo`,`albumNo`) USING BTREE;

--
-- 資料表索引 `order_album`
--
ALTER TABLE `order_album`
  ADD PRIMARY KEY (`orderNo`) USING BTREE;

--
-- 資料表索引 `order_class`
--
ALTER TABLE `order_class`
  ADD PRIMARY KEY (`orderNo`);

--
-- 資料表索引 `order_fund`
--
ALTER TABLE `order_fund`
  ADD PRIMARY KEY (`fundNo`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `album_bgimg`
--
ALTER TABLE `album_bgimg`
  MODIFY `bgImgNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '專輯版型編號', AUTO_INCREMENT=1137;
--
-- 使用資料表 AUTO_INCREMENT `album_icon`
--
ALTER TABLE `album_icon`
  MODIFY `iconNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- 使用資料表 AUTO_INCREMENT `album_track`
--
ALTER TABLE `album_track`
  MODIFY `trackNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '曲目編號', AUTO_INCREMENT=39;
--
-- 使用資料表 AUTO_INCREMENT `cdwall_msg`
--
ALTER TABLE `cdwall_msg`
  MODIFY `msgNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '留言編號', AUTO_INCREMENT=4;
--
-- 使用資料表 AUTO_INCREMENT `cdwall_msgreport`
--
ALTER TABLE `cdwall_msgreport`
  MODIFY `reportNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '檢舉編號';
--
-- 使用資料表 AUTO_INCREMENT `info_album`
--
ALTER TABLE `info_album`
  MODIFY `albumNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '專輯編號', AUTO_INCREMENT=23;
--
-- 使用資料表 AUTO_INCREMENT `info_class`
--
ALTER TABLE `info_class`
  MODIFY `classNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '課程編號', AUTO_INCREMENT=17;
--
-- 使用資料表 AUTO_INCREMENT `info_coupon`
--
ALTER TABLE `info_coupon`
  MODIFY `couponNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '折價券編號', AUTO_INCREMENT=8;
--
-- 使用資料表 AUTO_INCREMENT `info_member`
--
ALTER TABLE `info_member`
  MODIFY `memNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '會員編號', AUTO_INCREMENT=130;
--
-- 使用資料表 AUTO_INCREMENT `info_server`
--
ALTER TABLE `info_server`
  MODIFY `adminNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '管理員編號', AUTO_INCREMENT=9;
--
-- 使用資料表 AUTO_INCREMENT `info_teacher`
--
ALTER TABLE `info_teacher`
  MODIFY `teacherNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '教師編號', AUTO_INCREMENT=7;
--
-- 使用資料表 AUTO_INCREMENT `orderdetail_disk`
--
ALTER TABLE `orderdetail_disk`
  MODIFY `orderNo` int(20) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=115;
--
-- 使用資料表 AUTO_INCREMENT `orderdetail_fund`
--
ALTER TABLE `orderdetail_fund`
  MODIFY `donateNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '贊助編號', AUTO_INCREMENT=180;
--
-- 使用資料表 AUTO_INCREMENT `order_album`
--
ALTER TABLE `order_album`
  MODIFY `orderNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=115;
--
-- 使用資料表 AUTO_INCREMENT `order_class`
--
ALTER TABLE `order_class`
  MODIFY `orderNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=63;
--
-- 使用資料表 AUTO_INCREMENT `order_fund`
--
ALTER TABLE `order_fund`
  MODIFY `fundNo` int(10) NOT NULL AUTO_INCREMENT COMMENT '募資案件編號', AUTO_INCREMENT=35;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
