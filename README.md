# Travel Time Atlas（時光旅圖）

用歷史認識旅行目的地。每個地點或人物都有兩種閱讀方式，但共用同一筆資料：

- **The Story**：依時間順序的完整故事，附時間軸。出發前閱讀。
- **The Highlights**：重點速覽，沒有時間軸。到現場時使用。

這是純靜態網站（HTML + CSS + JavaScript），不需要安裝 Node.js、npm，也不需要伺服器或建置步驟。

範例內容：華沙哥白尼科學中心，以及尼古拉・哥白尼。

---

## 一、專案結構

```text
index.html                 入口檔，必須放在最外層
AGENTS.md                  給 AI 的開發規則
assets/
├── css/style.css          樣式
├── images/places|figures/ 圖片
└── js/
    ├── data/              ← 換主題主要改這裡
    │   ├── places.js      地點
    │   ├── figures.js     人物
    │   └── events.js      歷史事件（地點與人物共用）
    ├── components/        畫面元件（通常不用改）
    └── app.js             路由與初始化
```

換主題時，只需要新增或修改 `data/` 裡的三個檔案，不必改畫面程式。

---

## 二、怎麼換成別的主題

### 方法 A：請 AI 幫你做

1. 打開支援檔案操作的 AI 工具，把整個專案資料夾（至少 `AGENTS.md` 與 `assets/`）提供給它。
2. 用一句話說明新主題，例如：
   - 「新增歷史地點：義大利羅馬競技場」
   - 「新增歷史人物：達文西，並連結到相關地點」
   - 「把整個網站的主題換成京都，移除現有的華沙內容」
3. AI 會依照 `AGENTS.md` 的規則去查資料、寫入 `places.js`、`figures.js`、`events.js`，並檢查 ID 是否對得上。


### 方法 B：自己改資料

**1. 新增事件**（`events.js`）

```js
{
  id: "colosseum-opening",
  date: { year: 80, era: "AD", precision: "year", display: "AD 80" },
  title: "Opening Games",
  context: "事件之前的背景。",
  event: "實際發生了什麼。",
  outcome: "立即的結果。",
  significance: "歷史意義。",
  sources: ["https://..."]
}
```

- `era` 只能是 `"BC"` 或 `"AD"`；`precision` 可用 `year`、`approximate`、`decade`、`century`。
- 同一年內需要排先後，可加選填的 `month`、`day`。
- 不確定的日期請標成 `approximate`，不要編造精確日期。

**2. 新增地點**（`places.js`），複製現有紀錄後修改：

- `id`：唯一，使用小寫英文與連字號。
- `story`：每個章節的 `timelineEventIds` 要對應 `events.js` 裡的事件 ID。
- `highlights`：簡介、最知名之處、必看亮點、冷知識、一句話總結。
- `relatedFigureIds`：相關人物的 ID。

**3. 新增人物**（`figures.js`）：結構相同，但用 `achievements`（主要成就）取代 `mustSee`，用 `relatedPlaceIds` 連結地點。

**4. 圖片**：把圖片放進 `assets/images/places/` 或 `assets/images/figures/`，再填入 `image` 路徑，例如 `"./assets/images/places/colosseum.jpg"`。留空時，頁面會顯示佔位圖。請注意圖片授權。

**5. 檢查清單**

- 每個 ID 都是唯一的。
- 引用的事件、人物、地點 ID 都存在。
- 檔名全部小寫、不含空格（GitHub Pages 區分大小寫）。
- 所有路徑都以 `./` 開頭，不要用 `/assets/...`。
- 打開瀏覽器的開發者工具（F12）看 Console，資料有問題時會顯示警告。

---

## 三、怎麼預覽

### 1. 直接在電腦上打開（最簡單）

在檔案總管雙擊 `index.html`，用瀏覽器開啟即可。因為沒有使用 ES modules，不需要啟動伺服器。

### 2. 用本機伺服器（可選）

如果你想模擬真實網址，可在專案資料夾打開終端機：

```bash
python3 -m http.server 8000
```

然後開啟 `http://localhost:8000/`。

### 3. 預覽時請確認

- 首頁能看到地點與人物卡片。
- 進入詳細頁後，可以在 The Story 與 The Highlights 之間切換，且停留在同一個主題。
- The Story 的時間軸是由舊到新。
- The Highlights **沒有**時間軸。
- 縮小視窗到手機寬度，沒有橫向捲軸。
- 重新整理頁面或複製網址到新分頁，仍然正常顯示。

---

## 四、發布到 GitHub Pages

1. 建立 GitHub 儲存庫。
2. 把專案**資料夾裡的內容**（`index.html`、`assets/` 等）上傳到儲存庫的最外層，**不要多包一層資料夾**。
3. 到 **Settings → Pages**，Branch 選 `main`，Folder 選 `/(root)`，按 Save。
4. 等一兩分鐘後，開啟 `https://你的帳號.github.io/儲存庫名稱/`。
