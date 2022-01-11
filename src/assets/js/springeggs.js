let springFestivalWords = [
    "春节来到，许下心愿。愿你生活美满，所有梦想都实现；愿你前途光明，幸福展笑颜；愿你好运连连，万事如意心也甜；愿你永不缺钱，年年岁岁都平安！",
    "春节是“节”，祝你芝麻开花节节高；春节是“戒”，祝你戒愁戒忧戒烦恼；春节是“结”，祝你结朋结友结欢乐；春节是“接”，祝你接金接银财富多。",
    "春节至，洋洋意气，欢乐绕屋，一团和气；朋友连心，心心相惜，惦记万千，一声祝福。福星高照，财禄寿喜，团团圆圆，吉祥如意。预祝您春节快乐！",
    "春节送你四尾鱼：一尾娃娃鱼，添福又添喜；一尾比目鱼，爱情香甜美；一尾佳人鱼，心境好秀美；一尾金龙鱼，生计更神态。发祝福，讨口彩，年年有余哦！",
    "愿你年年岁岁青春在，分分秒秒人人爱；工作体面又气派，钞票伴着大风来；别墅豪宅看大海，宝马跑车开得快。春节快乐！",
    "绽放的烟花将喜庆诠释，火红的对联将吉祥写满，高挂的灯笼将幸福笼罩，香香的水饺将欢乐包裹，真诚的文字将祝福传递，春节愿合家团圆，幸福美满！猪年快乐！",
    "传递万家团圆的热闹，飘扬香醇美酒的味道，含着甜蜜汤圆的微笑，带着温馨问候来报道。愿你新的一年里快乐无忧事业顺，幸福美满合家欢。祝春节快乐！",
    "春回大地，日暖人间；春风得意，绿满千山；春意盎然，万象更新；春风送福，吉星高照；春节喜庆，祝福翩跹：祝喜气临门，财源广进，万事如意！",
    "新年到来鞭炮闹，红妆对联也娇俏，迎春花儿悄然笑，祝福声声不停消，愿你在新年伊始之际把幸福紧紧套牢，把快乐紧紧拥抱，和好运互相依靠，把忧伤统统抛掉。",
    "新春拜年早来到，真心祝福新年好；新年招财又进宝，全家和睦无烦恼；新春送福三级跳，一跳更比一跳高，四季平安乐逍遥。",
    "新年许下心愿，朋友传递祝愿，幸运心甘情愿，开心自觉自愿，幸福一厢情愿，新年如你所愿，事事天遂人愿，实现多年夙愿，达成美好心愿",
    "笑容挂在脸上，幸福装在心上，好运伴在身旁，祝你：龙马精神，事业蒸蒸日上！烦恼全清零；欢乐来相依；好运常相随，幸福来同行",
    "阳光暖照，风景美妙，愿轻松和你紧相抱；纵情欢笑，烦恼丢掉，愿快乐在你身边绕；睡个懒觉，疲倦甩掉，愿悠闲与你共奔跑。新春到，愿你任逍遥！",
    "春节的鞭炮声响起，是你欢悦的心情；春节的大红灯笼高高挂起，是你对未来的憧憬；春节的对联双手贴起，是你心灵的最强音；春节的祝福来到，春节快乐，万事如意！",
    "吉祥新春送喜来，如意健康添起来，美好生活伴你来，开心快乐随你来，新年祥瑞奏出来，万事如意奏起来，愿你新年更愉快，幸福新年更开怀。",
    "快乐在这一刻点燃，喜悦在这一刻沸腾；幸福在这一刻升华，美好在这一刻定格；笑容在这一刻绽放，吉祥在这一刻闪耀。新春快乐！",
    "新年新气象，生活美好要向往，爱情甜蜜不勉强，朋友记得常来往，工作努力还得忙，事业红火更辉煌。",
    "月亮是诗，星空是画，愿所有幸福伴随你。问候是春，关心是夏，愿所有的朋友真心待你。温柔是秋，浪漫是冬，所有的快乐跟随你，祝你和你的家人春节愉快!",
    "愿你在新的一年里，心里想的全都实现，梦里见的全都是真，在家福临门，出门行大运，左手是快乐，右手是欢笑，怀里是好运罩，春节的祝福你全包！"]


let springFestivalEgg = date => {
    let lunarDay = LunarCalendar.solarToLunar(date.year, date.month, date.day)
    let festivals = ["除夕", "春节"]
    if (!festivals.includes(lunarDay.lunarFestival)) return
    let index = Math.floor(Math.random() * springFestivalWords.length)
    let springFestivalWord = springFestivalWords[index]
    utools.createBrowserWindow("./spring/index.html?words=" + springFestivalWord, {
        width: 640,
        height: 480
    });
}


export default {
    springFestivalEgg
}
