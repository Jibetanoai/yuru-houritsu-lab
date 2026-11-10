// タブ(試験)ごとの科目構成。
// 条文データ(laws/*.js)と解説(notes/*.js)は法律ごとに1つだけ持ち、ここから使い回す。
// laws に書いたキーが app/laws/<キー>.js にあれば開ける。ないものは「準備中」と表示する。
window.LAW_NAMES = {
  kenpo: "日本国憲法",
  gyotetsu: "行政手続法",
  gyoshin: "行政不服審査法",
  gyoso: "行政事件訴訟法",
  kokubai: "国家賠償法",
  chiji: "地方自治法",
  minpo: "民法",
  shoho: "商法",
  kaisha: "会社法",
  keiho: "刑法",
  minso: "民事訴訟法",
  keiso: "刑事訴訟法",
  fudosantouki: "不動産登記法",
  shogyotouki: "商業登記法",
  minshikko: "民事執行法",
  minhozen: "民事保全法",
  kyotaku: "供託法",
  shihoshoshi: "司法書士法",
  gyoseishoshi: "行政書士法",
  koseki: "戸籍法",
  juki: "住民基本台帳法",
  kojinjoho: "個人情報保護法",
  johokokai: "行政機関情報公開法",
};

window.EXAMS = [
  {
    key: "gyosei",
    name: "行政書士",
    subjects: [
      { name: "憲法", laws: ["kenpo"] },
      { name: "行政法", laws: ["gyotetsu", "gyoshin", "gyoso", "kokubai", "chiji"] },
      { name: "民法", laws: ["minpo"] },
      { name: "商法・会社法", laws: ["shoho", "kaisha"] },
      { name: "基礎法学", laws: [] },
      { name: "基礎知識(業務に関連する法令・個人情報保護など)", laws: ["gyoseishoshi", "koseki", "juki", "kojinjoho", "johokokai"] },
      { name: "基礎知識(一般知識・文章理解)", laws: [] },
    ],
    lessons: [], // 講座(動画と連動する回)。条文の問題が中心なので今は空
  },
  {
    key: "shiho",
    name: "司法書士",
    subjects: [
      { name: "憲法", laws: ["kenpo"] },
      { name: "民法", laws: ["minpo"] },
      { name: "刑法", laws: ["keiho"] },
      { name: "商法・会社法", laws: ["shoho", "kaisha"] },
      { name: "不動産登記法", laws: ["fudosantouki"] },
      { name: "商業登記法", laws: ["shogyotouki"] },
      { name: "民事訴訟法・民事執行法・民事保全法", laws: ["minso", "minshikko", "minhozen"] },
      { name: "供託法・司法書士法", laws: ["kyotaku", "shihoshoshi"] },
    ],
    lessons: [],
  },
  {
    key: "bengo",
    name: "弁護士",
    note: "司法試験・予備試験の論文式の必須7科目",
    subjects: [
      { name: "憲法", laws: ["kenpo"] },
      { name: "行政法", laws: ["gyotetsu", "gyoshin", "gyoso", "kokubai"] },
      { name: "民法", laws: ["minpo"] },
      { name: "商法", laws: ["shoho", "kaisha"] },
      { name: "民事訴訟法", laws: ["minso"] },
      { name: "刑法", laws: ["keiho"] },
      { name: "刑事訴訟法", laws: ["keiso"] },
    ],
    lessons: [],
  },
];

// 今アプリに入っている条文データ(data/build_laws.py で作る)
window.AVAILABLE_LAWS = ["kenpo", "gyotetsu", "gyoshin", "gyoso", "kokubai", "minpo", "chiji", "shoho", "kaisha", "gyoseishoshi", "kojinjoho", "johokokai", "koseki", "juki"];
// テーマ解説(条文に紐づかない分野)のファイル。topics/<名前>.js
window.AVAILABLE_TOPICS = ["kisohogaku", "gyoseiho_a", "gyoseiho_b", "ippan_a", "kisohogaku_b"];
// 解説ファイルがある法律
window.AVAILABLE_NOTES = ["gyoshin", "gyoshin_a", "gyoshin_b", "gyoshin_c", "gyoso", "gyoso_a", "gyoso_b", "gyoso_c", "gyotetsu_a", "gyotetsu_b", "gyotetsu_c", "kokubai", "chiji_a", "chiji_b", "chiji_c", "chiji_alias", "minpo", "soku_a", "soku_b", "soku_c", "soku_alias", "bukken_a", "bukken_b", "bukken_c", "bukken_alias", "saiken_a", "saiken_b", "saiken_c", "saiken_alias","kakuron_a","kakuron_b","kakuron_c","kakuron_alias","shinzoku_a","shinzoku_b","shinzoku_c","souzoku_a","souzoku_b","kazoku_alias","kenpo_a","kenpo_b","kenpo_c","kenpo_alias","shoho_a","shoho_alias","kaisha_a","kaisha_b","kaisha_c","kaisha_alias","gyoseishoshi_a","gyoseishoshi_alias","kojinjoho_a","kojinjoho_alias","kiso_a","johokokai_alias","koseki_alias","juki_alias","exam_kenpo","kakomon_refs","exam_minpo","exam_kiso","exam_gyosei","exam_shoho","exam_kaisha", "teitou_a", "teitou_b", "teitou_c", "netei"];
