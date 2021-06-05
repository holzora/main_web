const ap =  new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '呼啸沙漠',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 呼啸沙漠.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '黄昏湖畔',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 黄昏湖畔.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#46718b'
        },
        {
            name: '勒克斯港',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 勒克斯港.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#43718b'
        },
        {
            name: '暮色雨林',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 暮色雨林.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#46318b'
        },
        {
            name: '血色冰封',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 血色冰封.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#36718b'
        },
        {
            name: '遗忘废墟',
            artist: 'Novasonic',
            url: 'https://music.holzora.com/mp3/Novasonic - 遗忘废墟.mp3',
            cover: 'https://music.holzora.com/img/cabal.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#26718b'
        },
        {
            name: 'The Saltwater Room',
            artist: 'Owl City',
            url: 'https://music.holzora.com/mp3/The Saltwater Room - Owl City.mp3',
            cover: 'https://music.holzora.com/img/trs.png',
            lrc: 'https://music.holzora.com/lrc/The Saltwater Room - Owl City.lrc',
            theme: '#26716b'
        },
        {
            name: 'Patema Inverse',
            artist: '大岛满',
            url: 'https://music.holzora.com/mp3/大岛满 - Patema Inverse.mp3',
            cover: 'https://music.holzora.com/img/pm.jpg',
            lrc: 'https://music.holzora.com/lrc/大岛满 - Patema Inverse.lrc',
            theme: '#D52B91'
        },
        {
            name: '星の在り処',
            artist: 'う～み',
            url: 'https://music.holzora.com/mp3/う～み - 星の在り処.mp3',
            cover: 'https://music.holzora.com/img/xzsz.jpg',
            lrc: 'https://music.holzora.com/lrc/う～み - 星の在り処.lrc',
            theme: '#FFD700'
        },
        {
            name: '2年目の春',
            artist: 'S.E.N.S.',
            url: 'https://music.holzora.com/mp3/S.E.N.S. (神思者) - 2年目の春 (第2年的春天).mp3',
            cover: 'https://music.holzora.com/img/hxgsn.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#8B2500'
        },
        {
            name: 'Pearl White Story',
            artist: 'S.E.N.S.',
            url: 'https://music.holzora.com/mp3/S.E.N.S. (神思者) - Pearl White Story.mp3',
            cover: 'https://music.holzora.com/img/hxgsn.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#6E6E6E'
        },
        {
            name: '夜空',
            artist: 'S.E.N.S.',
            url: 'https://music.holzora.com/mp3/S.E.N.S. (神思者) - 夜空.mp3',
            cover: 'https://music.holzora.com/img/hxgsn.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#EED2EE'
        },
        {
            name: '爽風',
            artist: 'S.E.N.S.',
            url: 'https://music.holzora.com/mp3/S.E.N.S. (神思者) - 爽風.mp3',
            cover: 'https://music.holzora.com/img/hxgsn.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#CDAF95'
        },
        {
            name: 'Speed of Light',
            artist: '塞壬唱片/二宮愛/DJ OKAWARI',
            url: 'https://music.holzora.com/mp3/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.mp3',
            cover: 'https://music.holzora.com/img/sol.jpg',
            lrc: 'https://music.holzora.com/lrc/塞壬唱片-MSR _ 二宮愛 _ DJ OKAWARI - Speed of Light.lrc',
            theme: '#9AFF9A'
        },
        {
            name: 'Till the Bell Tolls',
            artist: '塞壬唱片',
            url: 'https://music.holzora.com/mp3/Till the Bell Tolls - 塞壬唱片.mp3',
            cover: 'https://music.holzora.com/img/ttbt.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#8B1A1A'
        },
        {
            name: '秋绪',
            artist: '塞壬唱片/田井中彩智',
            url: 'https://music.holzora.com/mp3/塞壬唱片-MSR _ 田井中彩智 - 秋绪.mp3',
            cover: 'https://music.holzora.com/img/qx.jpg',
            lrc: 'https://music.holzora.com/lrc/塞壬唱片-MSR _ 田井中彩智 - 秋绪.lrc',
            theme: '#43CD80'
        },
        {
            name: 'Alive',
            artist: '塞壬唱片/Alive Until Sunset',
            url: 'https://music.holzora.com/mp3/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.mp3',
            cover: 'https://music.holzora.com/img/a.jpg',
            lrc: 'https://music.holzora.com/lrc/ALIVE - 塞壬唱片-MSR_Alive Until Sunset.lrc',
            theme: '#1AE61A'
        },
        {
            name: 'Reversed Time',
            artist: '塞壬唱片',
            url: 'https://music.holzora.com/mp3/Reversed Time - 塞壬唱片-MSR.mp3',
            cover: 'https://music.holzora.com/img/rt.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#2248DD'
        },
        {
            name: '月亮代表我的心',
            artist: '邓丽君',
            url: 'https://music.holzora.com/mp3/邓丽君 - 月亮代表我的心.ogg',
            cover: 'https://music.holzora.com/img/yldbwdx.jpg',
            lrc: 'https://music.holzora.com/lrc/邓丽君 - 月亮代表我的心.lrc',
            theme: '#94E61A'
        },
        {
            name: '滴答',
            artist: '侃侃',
            url: 'https://music.holzora.com/mp3/侃侃 - 滴答 (吉他版).mp3',
            cover: 'https://music.holzora.com/img/dd.jpg',
            lrc: 'https://music.holzora.com/lrc/侃侃 - 滴答 (吉他版).lrc',
            theme: '#573CC4'
        },
        {
            name: '犯贱',
            artist: '徐良/阿悄',
            url: 'https://music.holzora.com/mp3/徐良 - 犯贱.mp3',
            cover: 'https://music.holzora.com/img/fj.jpg',
            lrc: 'https://music.holzora.com/lrc/徐良 - 犯贱.lrc',
            theme: '#6F7691'
        },
        {
            name: '不得不爱',
            artist: '潘玮柏/弦子',
            url: 'https://music.holzora.com/mp3/潘玮柏 _ 弦子 - 不得不爱.mp3',
            cover: 'https://music.holzora.com/img/bdba.jpg',
            lrc: 'https://music.holzora.com/lrc/潘玮柏 _ 弦子 - 不得不爱.lrc',
            theme: '#917D6F'
        },
        {
            name: 'Fireflies',
            artist: 'Various Artists/Nikki Simmons',
            url: 'https://music.holzora.com/mp3/Various Artists _ Nikki Simmons - Fireflies (Funk Fiction Remix).mp3',
            cover: 'https://music.holzora.com/img/ff.jpg',
            lrc: 'https://music.holzora.com/lrc/Various Artists _ Nikki Simmons - Fireflies (Funk Fiction Remix).lrc',
            theme: '#FF0000'
        },
        {
            name: '少女終末旅行',
            artist: '末廣健一郎',
            url: 'https://music.holzora.com/mp3/末廣健一郎 - 少女終末旅行 -Main Theme-.mp3',
            cover: 'https://music.holzora.com/img/snzmlx.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#006633'
        },
        {
            name: '終ワリノ歌',
            artist: '末廣健一郎',
            url: 'https://music.holzora.com/mp3/末廣健一郎 - 終ワリノ歌 (终结之歌).mp3',
            cover: 'https://music.holzora.com/img/snzmlx.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#CCCCFF'
        },
        {
            name: '挪威的森林',
            artist: '伍佰',
            url: 'https://music.holzora.com/mp3/伍佰 - 挪威的森林.mp3',
            cover: 'https://music.holzora.com/img/nwdsl.jpg',
            lrc: 'https://music.holzora.com/lrc/伍佰 - 挪威的森林.lrc',
            theme: '#FFFF66'
        },
        {
            name: '一番の宝物',
            artist: 'karuta',
            url: 'https://music.holzora.com/mp3/一番の宝物 (Original Version)-karuta.mp3',
            cover: 'https://music.holzora.com/img/ibntm.jpg',
            lrc: 'https://music.holzora.com/lrc/一番の宝物 (Original Version)-karuta.lrc',
            theme: '#CCCCCC'
        },
        {
            name: '素敌だね',
            artist: 'Rikki',
            url: 'https://music.holzora.com/mp3/Rikki (中野律纪) - 素敌だね.mp3',
            cover: 'https://music.holzora.com/img/stkdn.jpg',
            lrc: 'https://music.holzora.com/lrc/Rikki (中野律纪) - 素敌だね.lrc',
            theme: '#48D1CC'
        },
        {
            name: 'Scarborough Fair',
            artist: '山田タマル',
            url: 'https://music.holzora.com/mp3/Scarborough Fair-山田タマル.mp3',
            cover: 'https://music.holzora.com/img/sf.jpg',
            lrc: 'https://music.holzora.com/lrc/Scarborough Fair-山田タマル.lrc',
            theme: '#87CEFA'
        },
        {
            name: 'ぶれないアイで',
            artist: '初音ミク/Mitchie M',
            url: 'https://music.holzora.com/mp3/ぶれないアイで-初音ミク,Mitchie M.mp3',
            cover: 'https://music.holzora.com/img/jdde.jpg',
            lrc: 'https://music.holzora.com/lrc/ぶれないアイで-初音ミク,Mitchie M.lrc',
            theme: '#FFD700'
        },
        {
            name: '瓦妮莎的微笑',
            artist: 'Richard Clayderman',
            url: 'https://music.holzora.com/mp3/Richard Clayderman - 瓦妮莎的微笑.flac',
            cover: 'https://music.holzora.com/img/wnsdwx.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#blue'
        },
        {
            name: 'Far Away from Home',
            artist: 'Groove Coverage',
            url: 'https://music.holzora.com/mp3/Far Away from Home-Groove Coverage.mp3',
            cover: 'https://music.holzora.com/img/fafh.jpg',
            lrc: 'https://music.holzora.com/lrc/Far Away from Home-Groove Coverage.lrc',
            theme: '#green'
        },
        {
            name: 'Daisy',
            artist: 'STEREO DIVE FOUNDATION',
            url: 'https://music.holzora.com/mp3/Daisy-STEREO DIVE FOUNDATION.mp3',
            cover: 'https://music.holzora.com/img/d.jpg',
            lrc: 'https://music.holzora.com/lrc/Daisy-STEREO DIVE FOUNDATION.lrc',
            theme: '#yellow'
        },
        {
            name: '亡灵序曲',
            artist: 'Masque_Jupiter',
            url: 'https://music.holzora.com/mp3/Masque_Jupiter - 亡灵序曲 (钢琴版).mp3',
            cover: 'https://music.holzora.com/img/wlxq.jpg',
            lrc: 'https://music.holzora.com/lrc/am.lrc',
            theme: '#white'
        }
    ]
});