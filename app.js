const STORE_KEY = "fresh_court_order_generator_v6_date_format_bs_default";
const ALL_SOURCE_BLOCKS = "__ALL_SOURCE_BLOCKS__";
const nepMap = {
  "०": "0",
  "१": "1",
  "२": "2",
  "३": "3",
  "४": "4",
  "५": "5",
  "६": "6",
  "७": "7",
  "८": "8",
  "९": "9",
};
const engToNep = {
  0: "०",
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
  6: "६",
  7: "७",
  8: "८",
  9: "९",
};
const SAMPLE_CAUSELIST_HTML = `<table cellspacing="0" class="record_display" cellpadding="5" border="1" style="border-collapse:collapse">\n<tr><th width="3%">क्र. स.</th><th width="10%">मुद्दा न.</th><th width="10%">दर्ता मिति</th><th width="12%">मुद्दा विषय</th><th width="19%">वादी</th><th width="19%">प्रतिवादी</th><th width="7%">फाँटबाला</th><th width="5%">प्राथमिकता</th><th width="7%">कैफियत</th><th width="15%">आदेश फैसलाको किसिम</th></tr>\n<tr bgcolor="#FFFFFF"><td> क</td><td style="font-family:'freeserif';">०८२-C१-६३७८<br>(३९-०८२-३२२५३)</td><td>२०८३-०२-२१<br></td><td>लागूऔषध (ट्रामाडोल)</td><td>प्रहरी प्रतिवेदन  को जाहेरीले नेपाल सरकार</td><td>सुदिप श्रेष्ठ </td><td style="text-align:center">मुद्दा फाटँ ३१ (सरल)</td><td>वयान</td><td></td><td align="center" valign="top">फैसला / अन्तिम आदेश  >> अभियोग दावी पुग्ने </td></tr>\n<tr bgcolor="#FFFFFF"><td> ख</td><td style="font-family:'freeserif';">०८२-FN-७७२९<br>(३९-०८२-२६८२३)</td><td>२०८३-०१-१०<br></td><td>विगो वापत प्रतिवादीलाई  थुनामा राखी पाउँ ।</td><td>सुन बहादुर तामाङ्ग </td><td>महेश कुमार घलान </td><td style="text-align:center">तहसिल फाँट ४</td><td></td><td></td><td align="center" valign="top">आदेश  >> अन्य</td></tr>\n<tr bgcolor="#FFFFFF"><td> ग</td><td style="font-family:'freeserif';">०८२-FN-८१८२<br>(३९-०८२-२८३८९)</td><td>२०८३-०१-२३<br></td><td>विगो वापत थुनामा राखी पाँउ</td><td>शोकिन राउत </td><td>विशाल विक्रम मास्के </td><td style="text-align:center">तहसिल फाँट ३</td><td></td><td></td><td align="center" valign="top">आदेश  >> अन्य</td></tr>\n<tr><td></td><td style="font-family:'freeserif';">०८२-FN-८१८३<br>(३९-०८२-२८३९०)</td><td>२०८३-०१-२३</td><td align="center">विगो वापत थुनामा राखी पाँउ</td><td>शोकिन राउत </td><td>विशाल विक्रम मास्के </td><td style="font-family:'freeserif';" align="center">” ”</td><td></td><td></td><td style="font-family:'freeserif';" align="center">आदेश  >> अन्य</td></tr>\n<tr bgcolor="#FFFFFF"><td> घ</td><td style="font-family:'freeserif';">०८२-FN-८३१४<br>(३९-०८२-२८६६२)</td><td>२०८३-०१-२४<br></td><td>विगो वापत प्रतिवादीलाई  थुनामा राखी पाउँ ।</td><td>आशाकाजी लामा </td><td>राम सागर ग्यापक </td><td style="text-align:center">तहसिल फाँट ४</td><td></td><td></td><td align="center" valign="top">आदेश  >> सम्बन्धित निकायवाट जवाफ माग गर्ने</td></tr>\n<tr><td></td><td style="font-family:'freeserif';">०८२-FN-८३१५<br>(३९-०८२-२८६६३)</td><td>२०८३-०१-२४</td><td align="center">विगो वापत प्रतिवादीलाई  थुनामा राखी पाउँ ।</td><td>आशाकाजी लामा </td><td>केशरीमाया दर्लामी </td><td style="font-family:'freeserif';" align="center">” ”</td><td></td><td></td><td style="font-family:'freeserif';" align="center">आदेश  >> सम्बन्धित निकायवाट जवाफ माग गर्ने</td></tr>\n<tr bgcolor="#FFFFFF"><td> ङ</td><td style="font-family:'freeserif';">०८२-FN-९३११<br>(३९-०८२-३१९०७)</td><td>२०८३-०२-२०<br></td><td>बैंक खाता फुकुवा गरी पाउ</td><td>नेपाल सरकार </td><td>पदम प्रसाद शर्मा ढुङ्गाना </td><td style="text-align:center">मुद्दा फाँट ९ (विशेष)</td><td></td><td></td><td align="center" valign="top">आदेश  >> अन्य</td></tr>\n<tr bgcolor="#FFFFFF"><td> च</td><td style="font-family:'freeserif';">०८२-FN-९३१९<br>(३९-०८२-३१९१५)</td><td>२०८३-०२-२०<br></td><td>नँया साक्षी राखी पाउ</td><td>सुदेश गौतम </td><td>प्राइड बचत तथा ऋण सहकारी संस्था </td><td style="text-align:center">पूरानाो मुद्दा फाटँ ९ (अभियान)</td><td></td><td></td><td align="center" valign="top">आदेश  >> अन्य</td></tr>\n<tr bgcolor="#FFFFFF"><td> छ</td><td style="font-family:'freeserif';">०८२-FN-९३५१<br>(३९-०८२-३२०६७)</td><td>२०८३-०२-२०<br></td><td>मुद्दा सकार गरी पाउँ।</td><td>हरिन्द्र रन्जित समेत </td><td>चन्द्रदेवी रन्जितकार समेत </td><td style="text-align:center">तहसिल फाँट १</td><td></td><td></td><td align="center" valign="top">आदेश  >> सम्बन्धित निकायवाट जवाफ माग गर्ने</td></tr>\n<tr><td></td><td style="font-family:'freeserif';">०८२-FN-९३५२<br>(३९-०८२-३२०६८)</td><td>२०८३-०२-२०</td><td align="center">मुद्दा सकार गरी पाउँ।</td><td>हरिचन्द्र रन्जित समेत </td><td>चन्द्रदेवी रन्जिकार समेत </td><td style="font-family:'freeserif';" align="center">” ”</td><td></td><td></td><td style="font-family:'freeserif';" align="center">आदेश  >> अन्य</td></tr>\n<tr><td></td><td style="font-family:'freeserif';">०८२-FN-९३५३<br>(३९-०८२-३२०६९)</td><td>२०८३-०२-२०</td><td align="center">मुद्दा सकार गरी पाउँ।</td><td>हरिचन्द्र रन्जित समेत </td><td>चन्द्रदेवी रन्जितकार समेत </td><td style="font-family:'freeserif';" align="center">” ”</td><td></td><td></td><td style="font-family:'freeserif';" align="center">आदेश  >> अन्य</td></tr>\n<tr bgcolor="#FFFFFF"><td> ज</td><td style="font-family:'freeserif';">०८२-FN-९३५४<br>(३९-०८२-३२०७०)</td><td>२०८३-०२-२०<br></td><td>विगो वापत प्रतिवादीलाई थुनामा राखी पाउँ।</td><td>विष्णु प्रसाद ढुङ्गाना </td><td>रामभक्त गुरुङ् </td><td style="text-align:center">तहसिल फाँट १</td><td></td><td></td><td align="center" valign="top">आदेश  >> अन्य</td></tr>\n<tr><td colspan="10">बबिता  पौडेल  इजलास अधिकृत<br /></td></tr></table>`;
const PARTY_PAIRS = [
  ["वादी", "प्रतिवादी"],
  ["निवेदक", "विपक्षी"],
  ["पुनरावेदक", "प्रत्यर्थी"],
  ["निवेदक/वादी", "विपक्षी/प्रतिवादी"],
  ["निवेदक/प्रतिवादी", "विपक्षी/वादी"],
  ["निवेदक/वादी", "विपक्षी"],
  ["निवेदक/प्रतिवादी", "विपक्षी"],
  ["निवेदक", "विपक्षी/वादी"],
  ["निवेदक", "विपक्षी/प्रतिवादी"],
  ["पुनरावेदक/वादी", "प्रत्यर्थी/ प्रतिवादी"],
  ["पुनरावेदक/ प्रतिवादी", "प्रत्यर्थी/ वादी"],
];
function pairKey(a = "वादी", b = "प्रतिवादी") {
  return String(a || "वादी") + "|" + String(b || "प्रतिवादी");
}
function splitPairKey(key = "वादी|प्रतिवादी") {
  const parts = String(key || "वादी|प्रतिवादी").split("|");
  return [parts[0] || "वादी", parts[1] || "प्रतिवादी"];
}
function partyOptionsHtml(selected = "वादी|प्रतिवादी") {
  return PARTY_PAIRS.map((pair) => {
    const key = pairKey(pair[0], pair[1]);
    return `<option value="${safe(key)}" ${key === selected ? "selected" : ""}>${safe(pair[0])}, ${safe(pair[1])}</option>`;
  }).join("");
}
const bsMonths = [
  "",
  "बैशाख",
  "जेठ",
  "असार",
  "श्रावण",
  "भाद्र",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पुष",
  "माघ",
  "फागुन",
  "चैत",
];
const BS_MONTH_LENGTHS = {
  2081: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2082: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 29, 31],
  2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 29, 31],
};
function bsMonthLength(y, m) {
  return (BS_MONTH_LENGTHS[y] && BS_MONTH_LENGTHS[y][m - 1]) || 30;
}
const DEFAULT_JUDGE = "माननीय न्यायाधीश";
const DEFAULT_SIGNATURE = "न्यायाधीश";
const LEGACY_DEFAULT_JUDGES = [
  DEFAULT_JUDGE,
  "माननीय जिल्ला न्यायाधीश",
  "न्यायाधीश",
];
const LEGACY_DEFAULT_SIGNATURES = [DEFAULT_SIGNATURE];
function orderVarietyFiles() {
  const out = [];
  ORDER_VARIETIES.forEach((entry, rootIndex) => {
    if (!entry) return;
    if (Array.isArray(entry.files)) {
      const folderName = String(
        entry.folder ||
          entry.name ||
          entry.label ||
          "Folder " + (rootIndex + 1),
      ).trim();
      const folderPath = String(
        entry.path || entry.folderPath || entry.folder || entry.name || "",
      ).trim();
      entry.files.forEach((file, childIndex) => {
        if (!file) return;
        const fallbackCandidates = buildOrderFileCandidates(file, folderName);
        const fallbackFilename =
          fallbackCandidates.find((c) =>
            /\.(txt|json|html|docx|doc)$/i.test(c),
          ) ||
          fallbackCandidates[0] ||
          "";
        file._orderKey = "folder:" + rootIndex + ":" + childIndex;
        file._orderFolder = folderName;
        file._orderFolderPath = folderPath;
        file._orderDisplayName = String(
          file.name ||
            file.label ||
            file.filename ||
            "Item " + (childIndex + 1),
        ).trim();
        if (!file.filename && fallbackFilename) {
          file.filename = fallbackFilename
            .replace(/^\.\//, "")
            .replace(/^ordervarieties\//, "");
        }
        out.push(file);
      });
    } else if (entry.filename || entry.content || entry.contentHtml) {
      entry._orderKey = "item:" + rootIndex;
      entry._orderFolder = String(
        entry.folder || entry.folderName || "",
      ).trim();
      entry._orderDisplayName = String(
        entry.name ||
          entry.label ||
          entry.filename ||
          "Item " + (rootIndex + 1),
      ).trim();
      out.push(entry);
    }
  });
  return out;
}
function buildOrderVarietyTree() {
  const folders = [];
  const folderMap = new Map();
  const standalone = [];
  orderVarietyFiles().forEach((item) => {
    const folder = String(item._orderFolder || "").trim();
    if (folder) {
      if (!folderMap.has(folder)) {
        folderMap.set(folder, { name: folder, items: [] });
        folders.push(folderMap.get(folder));
      }
      folderMap.get(folder).items.push(item);
    } else {
      standalone.push(item);
    }
  });
  return { folders: folders, standalone: standalone };
}
function findOrderVariety(value) {
  const key = String(value || "");
  return orderVarietyFiles().find(
    (o) =>
      o._orderKey === key ||
      o.name === key ||
      o._orderDisplayName === key ||
      o.filename === key,
  );
}
function normalizeDropdownFilterText(txt) {
  return String(txt || "")
    .trim()
    .toLowerCase();
}
function orderParentDropdownItems() {
  const tree = buildOrderVarietyTree();
  const items = [];
  tree.folders.forEach((folder, idx) => {
    items.push({
      type: "folder",
      display: `📁 ${String(folder.name || "")}`,
      value: `folder:${idx}`,
    });
  });
  tree.standalone.forEach((item) => {
    const label = String(
      item._orderDisplayName || item.name || item.filename || "Order",
    );
    const keywords = String(item.keywords || "").trim();
    const hint = keywords ? ` - ${String(keywords).split(",")[0]}` : "";
    items.push({
      type: "order",
      display: `${label}${hint}`,
      value: `order:${item._orderKey}`,
      keywords: keywords,
    });
  });
  return items.sort((a, b) =>
    String(a.display || "")
      .toLowerCase()
      .localeCompare(String(b.display || "").toLowerCase()),
  );
}
function orderChildDropdownItems(folderIndex) {
  const tree = buildOrderVarietyTree();
  const folder = tree.folders[Number(folderIndex)];
  if (!folder) return [];
  return folder.items
    .map((item) => ({
      type: "order",
      display: String(
        item._orderDisplayName || item.name || item.filename || "Order",
      ),
      value: item._orderKey,
      keywords: String(item.keywords || "").trim(),
    }))
    .sort((a, b) =>
      String(a.display || "")
        .toLowerCase()
        .localeCompare(String(b.display || "").toLowerCase()),
    );
}
function filterDropdownItems(items, filter) {
  const query = normalizeDropdownFilterText(filter);
  if (!query) return items;
  const filtered = items.filter(
    (item) =>
      String(item.display || "")
        .toLowerCase()
        .includes(query) ||
      String(item.keywords || "")
        .toLowerCase()
        .includes(query),
  );
  return filtered.length ? filtered : items;
}
function orderParentOptionsHtml(filter = "") {
  const tree = buildOrderVarietyTree();
  const query = normalizeDropdownFilterText(filter);
  const includeAll = !query;
  let html = '<option value="">📋 Select Order</option>';
  const folderMatches = (folder) => {
    const folderLabel = `📁 ${String(folder.name || "")}`.toLowerCase();
    if (folderLabel.includes(query)) return true;
    return folder.items.some((item) => {
      const label = String(
        item._orderDisplayName || item.name || item.filename || "",
      ).toLowerCase();
      const keywords = String(item.keywords || "").toLowerCase();
      return label.includes(query) || keywords.includes(query);
    });
  };
  tree.folders.forEach((folder, idx) => {
    if (includeAll || folderMatches(folder))
      html += `<option value="folder:${idx}">📁 ${safe(folder.name)}</option>`;
  });
  tree.standalone.forEach((item) => {
    const label = String(
      item._orderDisplayName || item.name || item.filename || "Order",
    );
    const keywords = String(item.keywords || "");
    const hint = keywords ? " - " + String(keywords).split(",")[0] : "";
    const matches =
      query &&
      (label.toLowerCase().includes(query) ||
        keywords.toLowerCase().includes(query));
    if (includeAll || matches) {
      html += `<option value="order:${safe(item._orderKey)}" title="${safe(keywords)}">${safe(label)}${safe(hint)}</option>`;
    }
  });
  if (!includeAll && html === "📋 Select Order") {
    return orderParentOptionsHtml();
  }
  return html;
}
function orderChildOptionsHtml(folderIndex, filter = "") {
  const tree = buildOrderVarietyTree();
  const folder = tree.folders[Number(folderIndex)];
  if (!folder) return "";
  const query = normalizeDropdownFilterText(filter);
  let items = folder.items;
  if (query) {
    const filtered = folder.items.filter((item) => {
      const label = String(
        item._orderDisplayName || item.name || item.filename || "",
      ).toLowerCase();
      const keywords = String(item.keywords || "").toLowerCase();
      return label.includes(query) || keywords.includes(query);
    });
    if (filtered.length) items = filtered;
  }
  return (
    `<option value=""> file छान्नुहोस्</option>` +
    items
      .map((item) => {
        const label =
          item._orderDisplayName || item.name || item.filename || "Order";
        const keywords = String(item.keywords || "").trim();
        const keywordLine = keywords
          ? `<option value="" disabled class="order-keyword-option">   ↳ keywords: ${safe(keywords)}</option>`
          : "";
        return `<option value="${safe(item._orderKey)}" title="${safe(keywords)}">${safe(label)}</option>${keywordLine}`;
      })
      .join("")
  );
}
function xmlEsc(s = "") {
  return String(s ?? "")
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"');
}
function wrapTextWithStyle(text, opt = {}) {
  if (!text) return "";
  let result = text;
  if (opt.bold) result = `<strong>${result}</strong>`;
  if (opt.italic) result = `<em>${result}</em>`;
  if (opt.underline) result = `<u>${result}</u>`;
  if (opt.color) result = `<span style="color:#${opt.color}">${result}</span>`;
  return result;
}
function docxRunToHtml(run, ns) {
  let text = "";
  const rPr = run.getElementsByTagNameNS(ns, "rPr")[0];
  const style = {};
  if (rPr) {
    if (
      rPr.getElementsByTagNameNS(ns, "b").length ||
      rPr.getElementsByTagNameNS(ns, "bCs").length
    )
      style.bold = true;
    if (
      rPr.getElementsByTagNameNS(ns, "i").length ||
      rPr.getElementsByTagNameNS(ns, "iCs").length
    )
      style.italic = true;
    if (rPr.getElementsByTagNameNS(ns, "u").length) style.underline = true;
    const colorEl = rPr.getElementsByTagNameNS(ns, "color")[0];
    if (colorEl && colorEl.getAttribute("w:val"))
      style.color = colorEl.getAttribute("w:val");
  }
  for (const child of Array.from(run.childNodes)) {
    if (child.nodeType !== 1) continue;
    if (child.localName === "t") {
      const txt = child.textContent || "";
      text += xmlEsc(txt);
    } else if (child.localName === "br") {
      text += "<br/>";
    } else if (child.localName === "tab") {
      text += "&emsp;";
    }
  }
  return wrapTextWithStyle(text, style);
}
function docxParagraphToHtml(paragraph, ns) {
  const pieces = [];
  for (const child of Array.from(paragraph.childNodes)) {
    if (child.nodeType !== 1) continue;
    if (child.localName === "r") {
      pieces.push(docxRunToHtml(child, ns));
    } else if (child.localName === "br") {
      pieces.push("<br/>");
    } else if (child.localName === "tab") {
      pieces.push("&emsp;");
    }
  }
  return `<div>${pieces.join("") || ""}</div>`;
}
function docxCellToHtml(cell, ns) {
  const paras = Array.from(cell.getElementsByTagNameNS(ns, "p"));
  return paras.map((p) => docxParagraphToHtml(p, ns)).join("");
}
function docxTableToHtml(table, ns) {
  const rows = Array.from(table.getElementsByTagNameNS(ns, "tr"));
  return `<table>${rows
    .map(
      (row) =>
        "<tr>" +
        Array.from(row.getElementsByTagNameNS(ns, "tc"))
          .map((cell) => `<td>${docxCellToHtml(cell, ns)}</td>`)
          .join("") +
        "</tr>",
    )
    .join("")}</table>`;
}
function docxDocumentXmlToHtml(xml) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "application/xml");
  const ns = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
  const body = xmlDoc.getElementsByTagNameNS(ns, "body")[0];
  if (!body) return "";
  const parts = [];
  for (const node of Array.from(body.childNodes)) {
    if (node.nodeType !== 1) continue;
    if (node.localName === "p") parts.push(docxParagraphToHtml(node, ns));
    else if (node.localName === "tbl") parts.push(docxTableToHtml(node, ns));
  }
  return parts.join("");
}
function docBinaryToHtml(buf) {
  const dec1252 = new TextDecoder("windows-1252");
  const decUtf16 = new TextDecoder("utf-16le");
  const text1252 = dec1252.decode(buf);
  const textUtf16 = decUtf16.decode(buf);
  const score = (txt) => (txt.match(/[\w\u0900-\u097F]/g) || []).length;
  const chosen = score(textUtf16) > score(text1252) ? textUtf16 : text1252;
  const lines = String(chosen || "")
    .split(/\r\n|\r|\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  return lines.map((line) => xmlEsc(line)).join("<br/>");
}
function buildOrderFileCandidates(item, folderName = "") {
  const explicit = String(
    item.filename || item.filepath || item.path || "",
  ).trim();
  if (explicit) {
    const normalized = explicit.replace(/^\.?\//, "");
    return [
      ...new Set([
        explicit,
        `ordervarieties/${normalized}`,
        `./ordervarieties/${normalized}`,
      ]),
    ];
  }
  const base = String(item.name || item.label || item.fileName || "").trim();
  if (!base) return [];
  const folder = String(
    folderName || item._orderFolder || item.folder || item.folderName || "",
  )
    .trim()
    .replace(/^\/+|\/+$/g, "");
  const normalizedBase = base.replace(/^\/+|\/+$/g, "");
  const basePath = folder ? `${folder}/${normalizedBase}` : normalizedBase;
  const variants = [
    basePath,
    `${basePath}.txt`,
    `${basePath}.json`,
    `${basePath}.html`,
    `${basePath}.docx`,
    `${basePath}.doc`,
  ];
  return [
    ...new Set(
      variants.flatMap((v) => [
        "ordervarieties/" + v.replace(/^\.?\//, ""),
        "./ordervarieties/" + v.replace(/^\.?\//, ""),
        v,
      ]),
    ),
  ];
}
async function loadOrderVarieties() {
  await Promise.all(
    orderVarietyFiles().map(async (o) => {
      if (!o) return;
      const candidates = buildOrderFileCandidates(o, o._orderFolder || "");
      if (!candidates.length) return;
      const explicitName = String(o.filename || "").trim();
      const ext = explicitName
        ? explicitName.toLowerCase().split(".").pop()
        : (candidates.find((c) => /\.[a-z0-9]+$/i.test(c)) || "")
            .toLowerCase()
            .split(".")
            .pop();
      let text = "";
      let buffer = null;
      let resolvedName = "";
      for (const candidate of candidates) {
        try {
          const res = await fetch(candidate);
          if (!res.ok) continue;
          resolvedName = candidate;
          if (ext === "docx" || ext === "doc") {
            buffer = await res.arrayBuffer();
            break;
          }
          text = await res.text();
          break;
        } catch (e) {}
      }
      if (resolvedName) o.filename = resolvedName;
      if (ext === "docx" && buffer) {
        try {
          const zip = await JSZip.loadAsync(buffer);
          const xml = await zip.file("word/document.xml").async("text");
          const html = docxDocumentXmlToHtml(xml);
          o.contentHtml = html || "";
          o.content = html ? "" : xml.replace(/<[^>]+>/g, "").trim();
        } catch (e) {
          console.warn("DOCX parse failed for", resolvedName || o.filename, e);
          o.content = (text && String(text)) || o.content || "";
          o.contentHtml = "";
        }
      } else if (ext === "doc" && buffer) {
        try {
          const html = docBinaryToHtml(buffer);
          o.contentHtml = html || "";
          o.content = "";
        } catch (e) {
          console.warn("DOC parse failed for", resolvedName || o.filename, e);
          o.content = (text && String(text)) || o.content || "";
          o.contentHtml = "";
        }
      } else if (ext === "json" && text) {
        try {
          const parsed = JSON.parse(text);
          let extracted = "";
          if (parsed) {
            if (typeof parsed.order === "string") extracted = parsed.order;
            else if (typeof parsed.content === "string")
              extracted = parsed.content;
            else if (typeof parsed.text === "string") extracted = parsed.text;
            else if (typeof parsed === "string") extracted = parsed;
            else if (typeof parsed === "object") {
              for (const k of Object.keys(parsed)) {
                if (typeof parsed[k] === "string") {
                  extracted = parsed[k];
                  break;
                }
              }
            }
          }
          if (extracted && !extracted.startsWith("\n"))
            extracted = "\n" + extracted;
          o.content = extracted || o.content || "";
          o.contentHtml = "";
        } catch (e) {
          o.content = (text && String(text)) || o.content || "";
          o.contentHtml = "";
        }
      } else {
        o.content = (text && String(text)) || o.content || "";
        o.contentHtml = "";
      }
    }),
  );
}
let state = {
  activeType: "input",
  activeIndex: 0,
  groups: [],
  trash: [],
  previewStates: {},
  settings: {
    court: "काठमाडौं जिल्ला अदालत",
    bench: "इजलास",
    judge: DEFAULT_JUDGE,
    signature: DEFAULT_SIGNATURE,
    date: todayNepaliLike(),
    body: "[text area]",
    fontSize: 13,
    lineSpacing: 1.15,
  },
  filters: {
    tableNumbering: true,
    all: true,
    nonEmpty: false,
    selected: false,
    saved: false,
    unsaved: false,
  },
};
function uid() {
  return `id_${globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`}`;
}
function pad2(n) {
  return String(n).padStart(2, "0");
}
function todayNepaliLike() {
  return adToBsLocal(new Date()) || "२०८३-०२-२४";
}
function bsToAdLocal(bsInput) {
  const parsed = parseYmd(toEng(String(bsInput || "")));
  if (!parsed) return "";
  const anchorAd = new Date(2026, 5, 7);
  let bs = { y: parsed.y, m: parsed.m, d: parsed.d };
  const target = { y: parsed.y, m: parsed.m, d: parsed.d };
  let current = { y: 2083, m: 2, d: 24 };
  let diff = 0;
  while (
    current.y !== target.y ||
    current.m !== target.m ||
    current.d !== target.d
  ) {
    if (
      current.y < target.y ||
      (current.y === target.y && current.m < target.m) ||
      (current.y === target.y && current.m === target.m && current.d < target.d)
    ) {
      current.d++;
      if (current.d > bsMonthLength(current.y, current.m)) {
        current.d = 1;
        current.m++;
        if (current.m > 12) {
          current.m = 1;
          current.y++;
        }
      }
      diff++;
    } else {
      current.d--;
      if (current.d < 1) {
        current.m--;
        if (current.m < 1) {
          current.m = 12;
          current.y--;
        }
        current.d = bsMonthLength(current.y, current.m);
      }
      diff--;
    }
  }
  const ad = new Date(anchorAd);
  ad.setDate(ad.getDate() + diff);
  return `${ad.getFullYear()}-${pad2(ad.getMonth() + 1)}-${pad2(ad.getDate())}`;
}
function parseYmd(s = "") {
  const m = toEng(String(s || ""))
    .trim()
    .match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  return m ? { y: +m[1], m: +m[2], d: +m[3] } : null;
}
function isLikelyAdDate(s = "") {
  const p = parseYmd(s);
  return !!(p && p.y >= 1900 && p.y < 2050);
}
function bsToYmdString(bs) {
  return bs ? `${toNep(bs.y)}-${toNep(pad2(bs.m))}-${toNep(pad2(bs.d))}` : "";
}
function adToBsLocal(adInput) {
  const ad =
    adInput instanceof Date
      ? new Date(adInput.getFullYear(), adInput.getMonth(), adInput.getDate())
      : (() => {
          const p = parseYmd(adInput);
          return p ? new Date(p.y, p.m - 1, p.d) : null;
        })();
  if (!ad || isNaN(ad)) return "";
  const anchorAd = new Date(2026, 5, 7);
  let bs = { y: 2083, m: 2, d: 24 };
  let diff = Math.round((ad - anchorAd) / 864e5);
  if (diff >= 0) {
    while (diff-- > 0) {
      bs.d++;
      if (bs.d > bsMonthLength(bs.y, bs.m)) {
        bs.d = 1;
        bs.m++;
        if (bs.m > 12) {
          bs.m = 1;
          bs.y++;
        }
      }
    }
  } else {
    while (diff++ < 0) {
      bs.d--;
      if (bs.d < 1) {
        bs.m--;
        if (bs.m < 1) {
          bs.m = 12;
          bs.y--;
        }
        bs.d = bsMonthLength(bs.y, bs.m);
      }
    }
  }
  return bsToYmdString(bs);
}
function formatItiDate(input = "") {
  const raw = String(input || "").trim();
  if (/^इति\s+संवत्?/.test(raw)) return raw;
  let s = raw || todayNepaliLike();
  if (isLikelyAdDate(s)) s = adToBsLocal(s) || s;
  const p = parseYmd(s);
  if (!p) return `इति संवत् ${toNep(s)} शुभम्`;
  const monthName = bsMonths[p.m] || toNep(p.m);
  let roj;
  if (isLikelyAdDate(raw)) {
    const adp = parseYmd(raw);
    roj = new Date(adp.y, adp.m - 1, adp.d).getDay() + 1;
  } else {
    const adDate = bsToAdLocal(s);
    if (adDate) {
      const adp = parseYmd(adDate);
      roj = new Date(adp.y, adp.m - 1, adp.d).getDay() + 1;
    } else {
      roj = new Date().getDay() + 1;
    }
  }
  return `इति संवत् ${toNep(p.y)} साल ${monthName} महिना ${toNep(p.d)} गते रोज ${toNep(roj)} शुभम्`;
}
function toEng(s = "") {
  return String(s).replace(/[०-९]/g, (ch) => nepMap[ch] || ch);
}
function toNep(s = "") {
  return String(s).replace(/[0-9]/g, (ch) => engToNep[ch] || ch);
}
function normCase(s = "") {
  return toEng(cleanCaseNo(String(s)))
    .replace(/\s+/g, "")
    .toUpperCase();
}
function cleanCaseNo(s = "") {
  return String(s || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function extractRegNo(s = "") {
  const m = String(s || "").match(/\(([^)]*)\)/);
  return m ? m[1].trim() : "";
}
function extractDateOnly(value = "") {
  const text = String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const separated = text.match(
    /[०-९0-9]{4}\s*[-/.]\s*[०-९0-9]{1,2}\s*[-/.]\s*[०-९0-9]{1,2}/,
  );
  if (separated) return separated[0].replace(/\s+/g, "");
  const compact = text.match(/(?:^|\D)([०-९0-9]{8})(?=\D|$)/);
  return compact ? compact[1] : "";
}
function previewBaseLabel(p) {
  const serial = String((p && p.serial) || "").trim();
  const cn = cleanCaseNo((p && p.caseNo) || "");
  return (serial ? serial + "." : "") + (cn || "Untitled");
}
function labelWithCaseName(p) {
  const base = p && p.previewName ? String(p.previewName) : previewBaseLabel(p);
  const subject = String((p && p.subject) || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!subject) return base;
  if (base.includes(subject)) return base;
  return (base + " " + subject).trim();
}
function previewLabel(p) {
  if (p && p.previewName) return String(p.previewName);
  return labelWithCaseName(p);
}
function previewDocxLabel(p) {
  return labelWithCaseName(p);
}
function safePreviewLabel(p) {
  return safe(previewLabel(p));
}
function safe(s = "") {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}
function nowDate() {
  return new Date().toLocaleDateString("ne-NP");
}
function nowTime() {
  return new Date().toLocaleTimeString("ne-NP");
}
function fileSafe(s = "order") {
  return (
    toEng(String(s || "order"))
      .replace(/[\\/:*?"<>|]+/g, "_")
      .replace(/\s+/g, "_")
      .slice(0, 90) || "order"
  );
}
function toast(msg, type = "") {
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  toastbox.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transition = ".3s";
    setTimeout(() => t.remove(), 300);
  }, 3e3);
}
function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (s && Array.isArray(s.groups)) {
      state = {
        ...state,
        ...s,
        trash: Array.isArray(s.trash) ? s.trash.slice(0, 24) : [],
        previewStates:
          s.previewStates && typeof s.previewStates === "object"
            ? s.previewStates
            : {},
        settings: { ...state.settings, ...(s.settings || {}) },
        filters: { ...state.filters, ...(s.filters || {}) },
      };
      if (state.filters.tableNumbering === undefined)
        state.filters.tableNumbering = true;
      if (state.filters.all === undefined) state.filters.all = true;
      if (state.filters.nonEmpty === undefined) state.filters.nonEmpty = false;
      if (state.filters.all) state.filters.nonEmpty = false;
    }
  } catch (e) {
    console.warn("State load failed", e);
  }
}
function migrateDefaultSettings(obj) {
  if (!obj) return;
  if (
    !String(obj.judge || "").trim() ||
    LEGACY_DEFAULT_JUDGES.includes(String(obj.judge || "").trim())
  )
    obj.judge = DEFAULT_JUDGE;
  if (
    !String(obj.signature || "").trim() ||
    LEGACY_DEFAULT_SIGNATURES.includes(String(obj.signature || "").trim())
  )
    obj.signature = DEFAULT_SIGNATURE;
}
function ensureOne() {
  migrateDefaultSettings(state.settings);
  if (!state.docxFontDefault13) {
    if (Number(state.settings.fontSize) === 12) state.settings.fontSize = 13;
    state.groups.forEach((g) => {
      if (Number(g.settings?.fontSize) === 12) g.settings.fontSize = 13;
    });
    state.docxFontDefault13 = true;
  }
  if (!Array.isArray(state.trash)) state.trash = [];
  state.trash = state.trash.slice(0, 24);
  if (!state.previewStates || typeof state.previewStates !== "object")
    state.previewStates = {};
  if (!state.filters) state.filters = {};
  if (state.filters.tableNumbering === undefined)
    state.filters.tableNumbering = true;
  if (state.filters.all === undefined) state.filters.all = true;
  if (state.filters.nonEmpty === undefined) state.filters.nonEmpty = false;
  if (state.filters.all) state.filters.nonEmpty = false;
  state.groups.forEach((g) => {
    if (!Array.isArray(g.history)) g.history = [];
    if (!Array.isArray(g.previews)) g.previews = [];
    if (!Array.isArray(g.sourceBlocks)) g.sourceBlocks = [];
    if (typeof g.selectedSourceBlock !== "string") g.selectedSourceBlock = "";
    ensureGroupSettings(g);
  });
  if (!state.groups.length) state.groups.push(newGroup(1));
}
function ensureGroupSettings(g) {
  if (!g.settings) g.settings = { ...state.settings, bench: "इजलास" };
  else g.settings = { ...state.settings, ...g.settings };
  migrateDefaultSettings(g.settings);
  if (!String(g.settings.bench || "").trim()) g.settings.bench = "इजलास";
}
function activeSettings() {
  const g = state.groups[state.activeIndex];
  return g && g.settings ? g.settings : state.settings;
}
function newGroup(no) {
  return {
    no: no,
    input: "",
    mode: "auto",
    rows: [],
    headers: [],
    selectedText: "",
    previews: [],
    history: [],
    sourceBlocks: [],
    selectedSourceBlock: "",
    inputCourtManual: false,
    inputDateManual: false,
    settings: { ...state.settings, bench: "इजलास" },
  };
}
function renderTopControls() {
  try {
    const top = document.getElementById("topControls");
    if (!top) return;
    const g = state.groups[state.activeIndex] || newGroup(1);
    top.className = "top-controls";
    top.innerHTML = "";
    const previewSel = document.createElement("select");
    previewSel.id = "topPreviewSelect";
    previewSel.className = "top-field top-preview-select";
    previewSel.setAttribute("aria-label", "Preview select");
    previewSel.innerHTML = (state.groups.length ? state.groups : [newGroup(1)])
      .map(
        (grp, i) =>
          `<option value="${i}">Preview${safe(grp.no || i + 1)}</option>`,
      )
      .join("");
    previewSel.value = String(state.activeIndex || 0);
    previewSel.addEventListener("mousedown", (e) => {
      if (state.activeType !== "preview") {
        saveCurrentPreviewState();
        state.activeType = "preview";
        render();
      }
    });
    previewSel.addEventListener("click", (e) => {
      if (state.activeType !== "preview") {
        saveCurrentPreviewState();
        state.activeType = "preview";
        render();
      }
    });
    previewSel.addEventListener("change", (e) => {
      saveCurrentPreviewState();
      state.activeIndex = Number(e.target.value) || 0;
      state.activeType = "preview";
      render();
    });
    top.appendChild(previewSel);
    if (state.activeType === "preview") {
      const actionSel = document.createElement("select");
      actionSel.id = "topActionSelect";
      actionSel.className = "top-field top-action-select";
      actionSel.setAttribute("aria-label", "Preview Actions");
      actionSel.innerHTML = `<option value="">⚙️ Action</option><option value="filters">⚙️ Display / Filter Options ▾</option><option value="zip">🗜 ZIP</option><option value="combined">📚 Combined DOCX</option><option value="trash">🗑 Trash (${(state.trash || []).length})</option>`;
      actionSel.addEventListener("change", (e) => {
        handlePreviewDropdownAction(g.no, e.target.value);
        e.target.value = "";
      });
      top.appendChild(actionSel);
    }
    const parentWrap = document.createElement("div");
    parentWrap.className = "top-dropdown-wrap";
    const parentInput = document.createElement("input");
    parentInput.id = "topOrderSelect";
    parentInput.className = "top-field top-order-select";
    parentInput.setAttribute("aria-label", "Select Order");
    parentInput.setAttribute(
      "placeholder",
      "Order छान्नुहोस् वा टाइप गर्नुहोस्...",
    );
    parentInput.setAttribute("autocomplete", "off");
    const parentClear = document.createElement("button");
    parentClear.type = "button";
    parentClear.className = "top-dropdown-clear hidden";
    parentClear.title = "Clear";
    parentClear.textContent = "×";
    parentClear.addEventListener("click", () => {
      parentInput.value = "";
      parentClear.classList.add("hidden");
      parentMenu.classList.add("hidden");
    });
    const parentMenu = document.createElement("div");
    parentMenu.id = "topOrderSelectDropdown";
    parentMenu.className = "top-dropdown-menu hidden";
    parentWrap.appendChild(parentInput);
    parentWrap.appendChild(parentClear);
    parentWrap.appendChild(parentMenu);
    top.appendChild(parentWrap);
    const childWrap = document.createElement("div");
    childWrap.id = "topOrderChildWrap";
    childWrap.className = "top-dropdown-wrap hidden";
    const childInput = document.createElement("input");
    childInput.id = "topOrderChildSelect";
    childInput.className = "top-field top-order-child-select";
    childInput.setAttribute("aria-label", "Select Order File");
    childInput.setAttribute(
      "placeholder",
      "File छान्नुहोस् वा टाइप गर्नुहोस्...",
    );
    childInput.setAttribute("autocomplete", "off");
    const childClear = document.createElement("button");
    childClear.type = "button";
    childClear.className = "top-dropdown-clear hidden";
    childClear.title = "Clear";
    childClear.textContent = "×";
    childClear.addEventListener("click", () => {
      childInput.value = "";
      childClear.classList.add("hidden");
      childMenu.classList.add("hidden");
    });
    const childMenu = document.createElement("div");
    childMenu.id = "topOrderChildDropdown";
    childMenu.className = "top-dropdown-menu hidden";
    childWrap.appendChild(childInput);
    childWrap.appendChild(childClear);
    childWrap.appendChild(childMenu);
    top.appendChild(childWrap);
    const parentItems = orderParentDropdownItems();
    const refreshParentMenu = (filter = "") => {
      const items = filterDropdownItems(parentItems, filter);
      parentMenu.innerHTML = items
        .map(
          (item) =>
            `<button type="button" class="top-dropdown-item" data-value="${safe(item.value)}" data-type="${item.type}"><span>${safe(item.display)}</span>${item.keywords ? `<div class="top-dropdown-subtitle">${safe(item.keywords)}</div>` : ""}</button>`,
        )
        .join("");
      if (!items.length)
        parentMenu.innerHTML =
          '<div class="top-dropdown-empty">No match found. Showing all items.</div>' +
          parentItems
            .map(
              (item) =>
                `<button type="button" class="top-dropdown-item" data-value="${safe(item.value)}" data-type="${item.type}"><span>${safe(item.display)}</span>${item.keywords ? `<div class="top-dropdown-subtitle">${safe(item.keywords)}</div>` : ""}</button>`,
            )
            .join("");
    };
    const refreshChildMenu = (folderIndex, filter = "") => {
      const items = filterDropdownItems(
        orderChildDropdownItems(folderIndex),
        filter,
      );
      childMenu.innerHTML = items
        .map(
          (item) =>
            `<button type="button" class="top-dropdown-item" data-value="${safe(item.value)}"><span>${safe(item.display)}</span>${item.keywords ? `<div class="top-dropdown-subtitle">${safe(item.keywords)}</div>` : ""}</button>`,
        )
        .join("");
      if (!items.length)
        childMenu.innerHTML =
          '<div class="top-dropdown-empty">No match found. Showing all files.</div>' +
          orderChildDropdownItems(folderIndex)
            .map(
              (item) =>
                `<button type="button" class="top-dropdown-item" data-value="${safe(item.value)}"><span>${safe(item.display)}</span>${item.keywords ? `<div class="top-dropdown-subtitle">${safe(item.keywords)}</div>` : ""}</button>`,
            )
            .join("");
    };
    parentInput.addEventListener("input", (e) => {
      const term = String(e.target.value || "");
      parentClear.classList.toggle("hidden", !term);
      refreshParentMenu(term);
      parentMenu.classList.remove("hidden");
    });
    parentInput.addEventListener("focus", () => {
      refreshParentMenu(String(parentInput.value || ""));
      parentClear.classList.toggle("hidden", !parentInput.value);
      parentMenu.classList.remove("hidden");
    });
    parentInput.addEventListener("blur", () =>
      setTimeout(() => {
        if (
          document.activeElement !== parentInput &&
          !parentMenu.contains(document.activeElement)
        )
          parentMenu.classList.add("hidden");
      }, 150),
    );
    parentMenu.addEventListener("click", (e) => {
      const btn = e.target.closest(".top-dropdown-item");
      if (!btn) return;
      const value = btn.dataset.value;
      if (!value) return;
      const displayText = btn.querySelector("span")?.textContent?.trim() || "";
      if (value.startsWith("folder:")) {
        handleOrderParentChange(value);
        parentInput.value = displayText;
        parentClear.classList.toggle("hidden", !parentInput.value);
        parentMenu.classList.add("hidden");
        const folderIndex = value.split(":")[1];
        refreshChildMenu(folderIndex, "");
        childWrap.classList.remove("hidden");
        childInput.focus();
        return;
      }
      handleOrderParentChange(value);
      parentInput.value = displayText;
      parentClear.classList.toggle("hidden", !parentInput.value);
      parentMenu.classList.add("hidden");
    });
    childInput.addEventListener("input", (e) => {
      const term = String(e.target.value || "");
      childClear.classList.toggle("hidden", !term);
      const folderIndex = childInput.dataset.folderIndex;
      refreshChildMenu(folderIndex, term);
      childMenu.classList.remove("hidden");
    });
    childInput.addEventListener("focus", () => {
      const folderIndex = childInput.dataset.folderIndex;
      if (folderIndex !== undefined)
        refreshChildMenu(folderIndex, String(childInput.value || ""));
      childClear.classList.toggle("hidden", !childInput.value);
      childMenu.classList.remove("hidden");
    });
    childInput.addEventListener("blur", () =>
      setTimeout(() => {
        if (
          document.activeElement !== childInput &&
          !childMenu.contains(document.activeElement)
        )
          childMenu.classList.add("hidden");
      }, 150),
    );
    childMenu.addEventListener("click", (e) => {
      const btn = e.target.closest(".top-dropdown-item");
      if (!btn) return;
      const value = btn.dataset.value;
      if (!value) return;
      const displayText = btn.querySelector("span")?.textContent?.trim() || "";
      handleOrderChildChange(value);
      childInput.value = displayText;
      childClear.classList.toggle("hidden", !childInput.value);
      childMenu.classList.add("hidden");
    });
    refreshParentMenu("");
    const st = document.createElement("input");
    st.id = "selectedText";
    st.className = "top-field top-serial-input";
    st.placeholder = "Serial/Case: 1,2 वा 072-WO-0294";
    st.value = g.selectedText || "";
    st.addEventListener("input", (e) => {
      const gg = state.groups[state.activeIndex];
      if (gg) {
        gg.selectedText = e.target.value;
        saveState();
      }
    });
    top.appendChild(st);
    if (state.activeType === "preview") {
      const regenBtn = document.createElement("button");
      regenBtn.className = "btn primary top-refresh-btn";
      regenBtn.title = "Regenerate Preview";
      regenBtn.innerHTML = "↻";
      regenBtn.onclick = () => generatePreview(g.no);
      top.appendChild(regenBtn);
    }
  } catch (e) {
    console.warn("renderTopControls error", e);
  }
}
function render() {
  ensureOne();
  renderTopControls();
  renderTabs();
  updateDateDisplay();
  const app = document.getElementById("app");
  const g = state.groups[state.activeIndex];
  if (state.activeType === "input") app.innerHTML = inputView(g);
  if (state.activeType === "preview") app.innerHTML = previewView(g);
  if (state.activeType === "history") app.innerHTML = historyView(g);
  if (state.activeType === "parsed") app.innerHTML = parsedView(g);
  bindAfterRender();
  if (state.activeType === "preview") {
    bindPreviewSidebarScrollSync();
    bindPreviewCaretTracking();
    setTimeout(() => {
      restorePreviewState(g.no);
      if (!shouldPreservePreviewSide() && !isPreviewAutoScrollSuppressed())
        requestPreviewScrollSync(true);
    }, 80);
  }
  saveState();
}
function updateDateDisplay() {
  const dd = document.getElementById("dateDisplay");
  if (dd) {
    const bs = activeSettings().date || todayNepaliLike();
    dd.textContent = toNep(bs);
  }
}
function renderTabs() {
  const tabs = document.getElementById("tabs");
  if (tabs) tabs.innerHTML = "";
  renderToolsMenu();
}
function renderToolsMenu() {
  const menu = document.getElementById("toolsMenu");
  if (!menu) return;
  const g = state.groups[state.activeIndex];
  menu.innerHTML = `<button class="btn sm" onclick="openTab(${state.activeIndex},'input');toggleToolsMenu(false)">⌨️ InputTable${g.no}</button><button class="btn sm" onclick="openTab(${state.activeIndex},'parsed');toggleToolsMenu(false)">📊 Parsed Table${g.no}</button><button class="btn sm" onclick="openTab(${state.activeIndex},'history');toggleToolsMenu(false)">🗂️ History${g.no}</button><button class="btn sm primary" onclick="addTableGroup();toggleToolsMenu(false)">＋ Add Table</button>`;
  const btn = document.getElementById("toolsBtn");
  if (btn) {
    btn.setAttribute("aria-expanded", !menu.classList.contains("hidden"));
  }
}
function toggleToolsMenu(open) {
  const menu = document.getElementById("toolsMenu");
  if (!menu) return;
  const btn = document.getElementById("toolsBtn");
  const isOpen = !menu.classList.contains("hidden");
  const shouldOpen = open === undefined ? !isOpen : !!open;
  menu.classList.toggle("hidden", !shouldOpen);
  if (btn) {
    btn.setAttribute("aria-expanded", shouldOpen);
  }
  if (shouldOpen) {
    renderToolsMenu();
  }
}
window.addEventListener("click", (e) => {
  const btn = document.getElementById("toolsBtn");
  const menu = document.getElementById("toolsMenu");
  if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
    toggleToolsMenu(false);
  }
  const sbtn = document.getElementById("settingsToolsBtn");
  const smenu = document.getElementById("settingsToolsMenu");
  if (sbtn && smenu && !sbtn.contains(e.target) && !smenu.contains(e.target)) {
    toggleSettingsToolsMenu(false);
  }
});
function saveCurrentPreviewState() {
  if (state.activeType !== "preview") return;
  const g = state.groups[state.activeIndex];
  if (!g) return;
  if (!state.previewStates) state.previewStates = {};
  const prev = state.previewStates[g.no] || {};
  rememberFocusedPreviewCursor({ silent: true, preserveNav: true });
  const latest = state.previewStates[g.no] || {};
  state.previewStates[g.no] = {
    ...prev,
    ...latest,
    scrollY: currentScrollTop(),
    sideScrollTop: currentPreviewSideScrollTop(),
    activePreviewId: state.activePreviewId || latest.activePreviewId || "",
    tableFocus: state.tableFocus || null,
  };
}
function restorePreviewState(groupNo) {
  const ps = (state.previewStates || {})[groupNo];
  if (!ps) return;
  const id =
    ps.activePreviewId ||
    (ps.cursor && ps.cursor.previewId) ||
    state.activePreviewId;
  if (id) {
    state.activePreviewId = id;
    setActivePreview(id, { noScroll: true, noSave: true, scrollNav: false });
  }
  if (typeof ps.scrollY === "number")
    setTimeout(
      () => window.scrollTo({ top: ps.scrollY, behavior: "auto" }),
      20,
    );
  if (typeof ps.sideScrollTop === "number")
    setTimeout(() => restorePreviewSideScrollTop(ps.sideScrollTop), 25);
}
function openTab(i, type) {
  saveCurrentPreviewState();
  state.activeIndex = i;
  state.activeType = type;
  render();
}
function addTableGroup() {
  state.groups.push(newGroup(state.groups.length + 1));
  state.activeIndex = state.groups.length - 1;
  state.activeType = "input";
  state.settings.date = todayNepaliLike();
  render();
  toast(`InputTable${state.groups.length} थपियो`, "ok");
}
function removeTableGroup(no) {
  const idx = state.groups.findIndex((g) => g.no === no);
  if (idx < 0) return;
  const label = "InputTable" + no;
  confirmBox(
    label + " हटाउने?",
    "यस table सँग सम्बन्धित input, preview र history हट्छ।",
    () => {
      if (state.groups.length <= 1) {
        state.groups = [newGroup(1)];
        state.activeIndex = 0;
        state.activeType = "input";
        render();
        toast("एक मात्र table reset गरियो।", "ok");
        return;
      }
      state.groups.splice(idx, 1);
      state.groups.forEach((g, i) => {
        g.no = i + 1;
      });
      state.activeIndex = Math.min(idx, state.groups.length - 1);
      state.activeType = "input";
      render();
      toast(label + " हटाइयो।", "ok");
    },
  );
}
function inputView(g) {
  const blocks = sourceBlocksForView(g);
  const meta = extractSourceMeta(g.input);
  if (
    meta.court &&
    !g.inputCourtManual &&
    (!g.settings || !String(g.settings.court || "").trim())
  ) {
    ensureGroupSettings(g);
    g.settings.court = meta.court;
  }
  if (
    meta.date &&
    !g.inputDateManual &&
    (!g.settings || !String(g.settings.date || "").trim())
  ) {
    ensureGroupSettings(g);
    g.settings.date = meta.date;
  }
  const s = g.settings || state.settings;
  return `\n  <div class="panel"><div class="panel-head"><div class="panel-title">⌨️ InputTable${g.no}</div><div class="input-tools"><button class="btn x" title="Remove this table" onclick="removeTableGroup(${g.no})">×</button><button class="btn primary" onclick="generatePreview(${g.no})">⚡ Generate Preview</button><button class="btn ok" onclick="loadSampleData(${g.no})">🧪 Load Sample Data</button><button class="btn" onclick="usePreviousInput(${g.no})">↩ Use Previous</button><button class="btn danger" onclick="clearInput(${g.no})">🧹 Clear Input</button></div></div>\n  <div class="panel-body"><div class="grid"><div><label>Parse Mode</label><select id="mode"><option value="auto">Auto Detect</option><option value="html">HTML Table</option><option value="json">JSON Array</option><option value="text">Plain Text / TSV</option></select></div></div><div id="benchSourceWrap" style="margin-top:10px">${benchSourceSelectHtml(g, blocks)}</div><br><label>Cause List Data Paste गर्नुहोस्</label><textarea id="inputText" placeholder="HTML source code, HTML table, JSON array, copied table text, वा manually typed cause list यहाँ paste गर्नुहोस्...">${safe(g.input)}</textarea><p class="hint">Tip: source code paste गर्दा <span class="kbd">pesi_date</span> बाट मिति र <span class="kbd">h1</span> बाट अदालत स्वतः प्रयोग हुन्छ। धेरै causelist table भएमा Bench/Judge dropdown बाट चाहिएको causelist छान्नुहोस्। Settings को <span class="kbd">इजलास</span> manual/independent रहन्छ र source-code benchबाट overwrite हुँदैन।</p></div></div>`;
}
function parsedView(g) {
  return `<div class="panel"><div class="panel-head"><div class="panel-title">📊 Parsed Table${g.no}</div><div class="preview-tools"><button class="btn" onclick="openTab(${state.activeIndex},'input')">← InputTable${g.no}</button><button class="btn primary" onclick="generatePreview(${g.no})">⚡ Generate Preview</button></div></div><div class="panel-body">${tableHtml(g)}</div></div>`;
}
function bindAfterRender() {
  const g = state.groups[state.activeIndex];
  const input = document.getElementById("inputText");
  if (input)
    input.addEventListener("input", (e) => {
      g.input = e.target.value;
      applySourceMetaToGroup(g, { overwriteManual: false, updateDom: true });
      updateInputSourceBlocks(g.no);
      saveState();
    });
  const mode = document.getElementById("mode");
  if (mode) {
    mode.value = g.mode || "auto";
    mode.addEventListener("change", (e) => {
      g.mode = e.target.value;
      updateInputSourceBlocks(g.no);
      saveState();
    });
  }
  const st = document.getElementById("selectedText");
  if (st)
    st.addEventListener("input", (e) => {
      g.selectedText = e.target.value;
      saveState();
    });
  const court = document.getElementById("inputCourt");
  if (court)
    court.addEventListener("input", (e) => {
      ensureGroupSettings(g);
      g.settings.court = e.target.value;
      g.inputCourtManual = true;
      saveState();
    });
  const date = document.getElementById("inputDate");
  if (date)
    date.addEventListener("input", (e) => {
      ensureGroupSettings(g);
      g.settings.date = normalizeDateInput(e.target.value);
      g.inputDateManual = true;
      saveState();
    });
  const bs = document.getElementById("benchSourceSelect");
  if (bs) {
    bs.value = g.selectedSourceBlock || "";
    bs.addEventListener("change", (e) => {
      g.selectedSourceBlock = e.target.value;
      applySelectedSourceBlock(g);
      saveState();
    });
  }
}
function clearInput(no) {
  confirmBox(
    "Input खाली गर्ने?",
    "यो कार्यले input text खाली गर्छ। History मेटिँदैन।",
    () => {
      const g = getGroup(no);
      g.input = "";
      g.rows = [];
      g.headers = [];
      g.previews = [];
      g.sourceBlocks = [];
      g.selectedSourceBlock = "";
      g.inputCourtManual = false;
      g.inputDateManual = false;
      render();
      toast("Input खाली गरियो", "ok");
    },
  );
}
function usePreviousInput(no) {
  const idx = state.groups.findIndex((g) => g.no === no);
  for (let i = idx - 1; i >= 0; i--) {
    if (state.groups[i].input.trim()) {
      state.groups[idx].input = state.groups[i].input;
      state.groups[idx].inputCourtManual = false;
      state.groups[idx].inputDateManual = false;
      applySourceMetaToGroup(state.groups[idx], {
        overwriteManual: false,
        updateDom: false,
      });
      render();
      toast("Previous input load भयो", "ok");
      return;
    }
  }
  toast("Previous input भेटिएन");
}
function loadSampleData(no) {
  const g = getGroup(no);
  if (!g) return;
  g.input = SAMPLE_CAUSELIST_HTML;
  g.mode = "html";
  g.inputCourtManual = false;
  g.inputDateManual = false;
  applySourceMetaToGroup(g, { overwriteManual: false, updateDom: false });
  state.activeIndex = state.groups.findIndex((x) => x.no === no);
  state.activeType = "input";
  render();
  toast("Sample cause list load भयो। Preview auto populate हुँदैछ।", "ok");
  setTimeout(() => generatePreview(no), 80);
}
function getGroup(no) {
  return state.groups.find((g) => g.no === no);
}
function previewMatchKey(item) {
  const candidates = [
    item?.caseNo,
    item?.displayCaseNo,
    item?.serial,
    item?.rawCaseNo,
    item?.previewName,
    item?.saveId,
    item?.historyId,
  ];
  for (const candidate of candidates) {
    const key = normCase(String(candidate || ""));
    if (key) return key;
  }
  return "";
}
function generatePreview(no) {
  const g = getGroup(no);
  if (!g) return;
  ensureGroupSettings(g);
  g.input = document.getElementById("inputText")?.value || g.input;
  g.mode = document.getElementById("mode")?.value || g.mode;
  g.selectedText =
    document.getElementById("selectedText")?.value || g.selectedText;
  const courtVal = document.getElementById("inputCourt")?.value;
  const dateVal = document.getElementById("inputDate")?.value;
  if (courtVal !== undefined) {
    g.settings.court = String(courtVal || "").trim() || g.settings.court;
  }
  if (dateVal !== undefined) {
    g.settings.date =
      normalizeDateInput(dateVal) || g.settings.date || todayNepaliLike();
  }
  applySourceMetaToGroup(g, { overwriteManual: false, updateDom: false });
  const selected = document.getElementById("benchSourceSelect")?.value;
  if (selected !== undefined) g.selectedSourceBlock = selected;
  const parsed = parseInputForSelectedSource(g);
  g.headers = parsed.headers;
  g.rows = parsed.rows;
  if (parsed.sourceBlock) {
    g.activeSourceBlock = parsed.sourceBlock.id;
    g.settings = {
      ...(g.settings || state.settings),
      bench: (g.settings && g.settings.bench) || "इजलास",
      judge: (g.settings || {}).judge || state.settings.judge || DEFAULT_JUDGE,
    };
  }
  if (!g.rows.length) {
    render();
    toast(
      "Cause list rows भेटिएन। Input format वा selected bench/judge जाँच्नुहोस्।",
      "danger",
    );
    return;
  }
  if (!String(g.settings.date || "").trim())
    g.settings.date = todayNepaliLike();
  if (!String(g.settings.bench || "").trim()) g.settings.bench = "इजलास";
  const chosen = eligibleRows(g);
  const savedMap = new Map();
  for (const item of (g.history || []).filter(
    (x) => x && x.saved && !x.removed,
  )) {
    const key = previewMatchKey(item);
    if (!key) continue;
    savedMap.set(key, item);
  }
  for (const item of (g.previews || []).filter(
    (x) => x && x.saved && !x.removed,
  )) {
    const key = previewMatchKey(item);
    if (!key) continue;
    if (!savedMap.has(key)) savedMap.set(key, item);
  }
  g.previews = chosen.map((row, idx) => {
    const rowKey = previewMatchKey(row.obj);
    const saved = savedMap.get(rowKey);
    if (saved) {
      return {
        ...saved,
        rowIndex: idx,
        saved: true,
        dirty: false,
        editMode: false,
        updatedAt: Date.now(),
        content: saved.content || orderHtml(row.obj, "वादी", "प्रतिवादी", g),
        previewName: saved.previewName || labelWithCaseName(row.obj),
        saveId: saved.saveId || saved.previewName || labelWithCaseName(row.obj),
      };
    }
    return makePreview(g, row, idx);
  });
  state.activeType = "preview";
  render();
  const blockInfo = parsed.sourceBlock ? ` (${parsed.sourceBlock.label})` : "";
  toast(`Preview${g.no}: ${g.previews.length} आदेश तयार भयो${blockInfo}`, "ok");
}
function normalizeDateInput(input = "") {
  let s = toEng(String(input || "").trim()).replace(/[\/\.]/g, "-");
  const compact = s.replace(/[^0-9]/g, "");
  if (/^\d{8}$/.test(compact))
    s =
      compact.slice(0, 4) +
      "-" +
      compact.slice(4, 6) +
      "-" +
      compact.slice(6, 8);
  const p = parseYmd(s);
  if (!p) return toNep(String(input || "").trim());
  return toNep(`${p.y}-${pad2(p.m)}-${pad2(p.d)}`);
}
function extractSourceMeta(raw = "") {
  raw = String(raw || "");
  const meta = { court: "", date: "" };
  if (!raw.trim()) return meta;
  try {
    const doc = new DOMParser().parseFromString(raw, "text/html");
    const h1 = [...doc.querySelectorAll("h1")]
      .map((x) => x.textContent.trim().replace(/\s+/g, " "))
      .find(Boolean);
    if (h1) meta.court = h1;
    const dateInput = doc.querySelector(
      '#pesi_date,input[name="pesi_date"],input[id*="pesi_date"]',
    );
    if (dateInput && dateInput.getAttribute("value"))
      meta.date = normalizeDateInput(dateInput.getAttribute("value"));
  } catch (e) {}
  if (!meta.court) {
    const m = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (m) meta.court = htmlToText(m[1]).trim();
  }
  if (!meta.date) {
    const m =
      raw.match(
        /<input[^>]*(?:id|name)=["']pesi_date["'][^>]*value=["']([^"']+)["'][^>]*>/i,
      ) ||
      raw.match(
        /<input[^>]*value=["']([^"']+)["'][^>]*(?:id|name)=["']pesi_date["'][^>]*>/i,
      );
    if (m) meta.date = normalizeDateInput(m[1]);
  }
  return meta;
}
function applySourceMetaToGroup(g, opts = {}) {
  if (!g) return;
  ensureGroupSettings(g);
  const meta = extractSourceMeta(g.input);
  const overwrite = !!opts.overwriteManual;
  if (meta.court && (overwrite || !g.inputCourtManual)) {
    g.settings.court = meta.court;
    if (opts.updateDom) {
      const el = document.getElementById("inputCourt");
      if (el) el.value = meta.court;
    }
  }
  if (meta.date && (overwrite || !g.inputDateManual)) {
    g.settings.date = meta.date;
    if (opts.updateDom) {
      const el = document.getElementById("inputDate");
      if (el) el.value = meta.date;
    }
  }
}
function sourceModeLooksHtml(g) {
  const mode = (g && g.mode) || "auto";
  const raw = String((g && g.input) || "");
  return mode === "html" || (mode === "auto" && /<table[\s\S]*?>/i.test(raw));
}
function sourceBlocksForView(g) {
  if (!sourceModeLooksHtml(g)) return [];
  const blocks = extractSourceCauselistBlocks(g.input);
  g.sourceBlocks = blocks;
  if (
    blocks.length &&
    g.selectedSourceBlock !== ALL_SOURCE_BLOCKS &&
    !blocks.some((b) => b.id === g.selectedSourceBlock)
  )
    g.selectedSourceBlock = blocks[0].id;
  return blocks;
}
function sameHeaderKey(h = "") {
  return String(h || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function mergeSourceBlocks(blocks) {
  blocks = (blocks || []).filter(Boolean);
  const headers = [];
  const keySet = new Set();
  blocks.forEach((b) =>
    (b.headers || []).forEach((h) => {
      const key = sameHeaderKey(h);
      if (key && !keySet.has(key)) {
        keySet.add(key);
        headers.push(h);
      }
    }),
  );
  const rows = [];
  blocks.forEach((b) => {
    (b.rows || []).forEach((row, sourceRowIndex) => {
      const merged = headers.map((h) => {
        const idx = (b.headers || []).findIndex(
          (x) => sameHeaderKey(x) === sameHeaderKey(h),
        );
        return idx >= 0 ? row[idx] || "" : "";
      });
      merged._sourceBlockId = b.id;
      merged._sourceBlockLabel = b.label || "";
      merged._sourceRowIndex = sourceRowIndex;
      rows.push(merged);
    });
  });
  return {
    headers: headers,
    rows: rows,
    sourceBlock: {
      id: ALL_SOURCE_BLOCKS,
      label: "सबै",
      bench: "",
      judge: "",
      rows: rows,
      headers: headers,
    },
  };
}
function benchSourceSelectHtml(g, blocks) {
  blocks = blocks || [];
  if (!blocks.length)
    return `<div class="hint">Source code मा bench/judge causelist block भेटिएमा यहाँ dropdown देखिन्छ।</div>`;
  const allOpt =
    blocks.length > 1
      ? `<option value="${ALL_SOURCE_BLOCKS}" ${g.selectedSourceBlock === ALL_SOURCE_BLOCKS ? "selected" : ""}>सबै</option>`
      : "";
  const opts = blocks
    .map(
      (b, i) =>
        `<option value="${safe(b.id)}" ${b.id === g.selectedSourceBlock ? "selected" : ""}>${safe(b.label || "Causelist " + (i + 1))}</option>`,
    )
    .join("");
  return `<label>Bench / Judge Causelist Selection</label><select id="benchSourceSelect">${allOpt}${opts}</select><p class="hint">${blocks.length} वटा causelist block भेटियो। <span class="kbd">सबै</span> छानेमा सबै table जोडिएर integrated parsed table र preview बन्छ।</p>`;
}
function updateInputSourceBlocks(no) {
  const g = getGroup(no);
  if (!g) return;
  const wrap = document.getElementById("benchSourceWrap");
  const blocks = sourceBlocksForView(g);
  if (wrap) wrap.innerHTML = benchSourceSelectHtml(g, blocks);
  const bs = document.getElementById("benchSourceSelect");
  if (bs) {
    bs.value = g.selectedSourceBlock || "";
    bs.onchange = (e) => {
      g.selectedSourceBlock = e.target.value;
      applySelectedSourceBlock(g);
      saveState();
    };
  }
}
function applySelectedSourceBlock(g) {
  if (!g) return;
  ensureGroupSettings(g);
  const blocks = g.sourceBlocks || [];
  if (g.selectedSourceBlock === ALL_SOURCE_BLOCKS) {
    const merged = mergeSourceBlocks(blocks);
    g.headers = merged.headers;
    g.rows = merged.rows;
    g.activeSourceBlock = ALL_SOURCE_BLOCKS;
    return;
  }
  const block = blocks.find((b) => b.id === g.selectedSourceBlock);
  if (block) {
    g.headers = block.headers || [];
    g.rows = (block.rows || []).map((row, sourceRowIndex) => {
      const r = row.slice();
      r._sourceBlockId = block.id;
      r._sourceBlockLabel = block.label || "";
      r._sourceRowIndex = sourceRowIndex;
      return r;
    });
    g.activeSourceBlock = block.id;
    g.settings = {
      ...(g.settings || state.settings),
      bench: (g.settings && g.settings.bench) || "इजलास",
      judge: (g.settings || {}).judge || state.settings.judge || DEFAULT_JUDGE,
    };
  }
}
function parseInputForSelectedSource(g) {
  const mode = g.mode || "auto";
  if (sourceModeLooksHtml(g)) {
    const blocks = extractSourceCauselistBlocks(g.input);
    g.sourceBlocks = blocks;
    if (blocks.length) {
      if (g.selectedSourceBlock === ALL_SOURCE_BLOCKS)
        return mergeSourceBlocks(blocks);
      if (!blocks.some((b) => b.id === g.selectedSourceBlock))
        g.selectedSourceBlock = blocks[0].id;
      const block =
        blocks.find((b) => b.id === g.selectedSourceBlock) || blocks[0];
      const rows = (block.rows || []).map((row, sourceRowIndex) => {
        const r = row.slice();
        r._sourceBlockId = block.id;
        r._sourceBlockLabel = block.label || "";
        r._sourceRowIndex = sourceRowIndex;
        return r;
      });
      return { headers: block.headers || [], rows: rows, sourceBlock: block };
    }
  }
  const parsed = parseInput(g.input, mode);
  return { ...parsed, sourceBlock: null };
}
function previewCountText(g) {
  const shown = (visiblePreviews(g) || []).length;
  const total = totalPreviewCountIfAll(g);
  return `${shown}/${total || shown}`;
}
function totalPreviewCountIfAll(g) {
  try {
    const blocks =
      g && g.sourceBlocks && g.sourceBlocks.length
        ? g.sourceBlocks
        : sourceModeLooksHtml(g)
          ? extractSourceCauselistBlocks(g.input)
          : [];
    if (!blocks.length)
      return (g.previews || []).filter((p) => !p.removed).length;
    const merged = mergeSourceBlocks(blocks);
    const tmp = { ...g, headers: merged.headers, rows: merged.rows };
    return eligibleRows(tmp).length;
  } catch (e) {
    return (g.previews || []).filter((p) => !p.removed).length;
  }
}
function normalizeBenchText(s = "") {
  return toNep(
    String(s || "")
      .replace(/इजलास/g, "इजलाश")
      .replace(/\s+/g, " ")
      .trim(),
  );
}
function normalizeJudgeText(s = "") {
  return toNep(
    String(s || "")
      .replace(/माननीय\s*जिल्ला\s*न्यायाधीश/g, "माननीय जिल्ला न्यायाधीश")
      .replace(/\s+/g, " ")
      .trim(),
  );
}
function shortJudgeName(s = "") {
  let t = normalizeJudgeText(s);
  t = t
    .replace(/^माननीय\s*जिल्ला\s*न्यायाधीश\s*/, "")
    .replace(/^माननीय\s*न्यायाधीश\s*/, "")
    .trim();
  return t || normalizeJudgeText(s);
}
function judgeLooksGeneric(s = "") {
  const t = normalizeJudgeText(s).replace(/\s+/g, " ").trim();
  return (
    !t ||
    t === DEFAULT_JUDGE ||
    t === "माननीय जिल्ला न्यायाधीश" ||
    t === "न्यायाधीश"
  );
}
function extractJudgeName(s = "") {
  let t = normalizeJudgeText(s);
  t = t
    .replace(/^माननीय\s*जिल्ला\s*न्यायाधीश\s*/, "")
    .replace(/^माननीय\s*न्यायाधीश\s*/, "")
    .replace(/^न्यायाधीश\s*/, "")
    .trim();
  return t;
}
function effectiveJudgeForPreview(g, sourceBlockId = "") {
  const s = g && g.settings ? g.settings : state.settings;
  let prefix = normalizeJudgeText(
    String((s && s.judge) || DEFAULT_JUDGE).trim() || DEFAULT_JUDGE,
  );
  if (
    !prefix ||
    /^माननीय\s*जिल्ला\s*न्यायाधीश/.test(prefix) ||
    prefix === "न्यायाधीश"
  )
    prefix = DEFAULT_JUDGE;
  const block = selectedSourceBlockForGroup(g, sourceBlockId);
  const sourceName = extractJudgeName((block && block.judge) || "");
  return `${prefix}${sourceName ? " " + sourceName : ""}`
    .replace(/\s+/g, " ")
    .trim();
}
function extractBenchJudgeFromTable(table) {
  const tr = [...table.querySelectorAll("tr")].find(
    (r) =>
      /इजलास|इजलाश/i.test(r.textContent) &&
      (/judge/i.test(r.innerHTML) || /न्यायाधीश|श्री/.test(r.textContent)),
  );
  if (!tr) return null;
  const cells = [...tr.children];
  const bench = normalizeBenchText((cells[0] && cells[0].textContent) || "");
  let judgeCell =
    tr.querySelector(".judge") ||
    cells.find(
      (c) =>
        /न्यायाधीश|श्री/.test(c.textContent) &&
        !/इजलास|इजलाश/.test(c.textContent),
    ) ||
    cells[1];
  const judge = normalizeJudgeText((judgeCell && judgeCell.textContent) || "");
  if (!bench && !judge) return null;
  return { bench: bench || "इजलाश", judge: judge || "" };
}
function tableLooksLikeCauseList(table) {
  const text = table.textContent.replace(/\s+/g, " ");
  return /मुद्दा\s*न|मुद्दा\s*नं|वादी|प्रतिवादी|दर्ता\s*मिति/.test(text);
}
function parseCauseTableElement(table) {
  const trs = [...table.querySelectorAll("tr")]
    .filter((tr) => !isNonCauseHtmlRow(tr))
    .map((tr) =>
      [...tr.children].map((td) => td.textContent.trim().replace(/\s+/g, " ")),
    )
    .filter((r) => r.some(Boolean));
  return parseMatrix(trs);
}
function extractSourceCauselistBlocks(raw) {
  raw = String(raw || "").trim();
  if (!raw || !/<table[\s\S]*?>/i.test(raw)) return [];
  let doc;
  try {
    doc = new DOMParser().parseFromString(raw, "text/html");
  } catch (e) {
    return [];
  }
  const tables = [...doc.querySelectorAll("table")];
  const blocks = [];
  let pending = null;
  let serial = 0;
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    const bj = extractBenchJudgeFromTable(table);
    if (bj) {
      pending = { ...bj, sourceIndex: i };
      continue;
    }
    if (!tableLooksLikeCauseList(table)) continue;
    const parsed = parseCauseTableElement(table);
    if (!parsed.rows.length) continue;
    if (pending) {
      serial++;
      const bench = pending.bench || "इजलाश";
      const judge = pending.judge || "";
      const label = `${bench}-${shortJudgeName(judge)}${serial > 1 ? " #" + toNep(serial) : ""}`;
      blocks.push({
        id: "sourceBlock_" + serial,
        label: label,
        bench: bench,
        judge: judge,
        headers: parsed.headers,
        rows: parsed.rows,
        tableIndex: i,
        benchTableIndex: pending.sourceIndex,
      });
      pending = null;
    }
  }
  if (!blocks.length) {
    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      if (!tableLooksLikeCauseList(table)) continue;
      const parsed = parseCauseTableElement(table);
      if (parsed.rows.length) {
        serial++;
        blocks.push({
          id: "sourceBlock_" + serial,
          label: `Causelist ${toNep(serial)}`,
          bench: "",
          judge: "",
          headers: parsed.headers,
          rows: parsed.rows,
          tableIndex: i,
        });
      }
    }
  }
  return blocks;
}
function parseInput(raw, mode = "auto") {
  raw = String(raw || "").trim();
  if (!raw) return { headers: [], rows: [] };
  if (mode === "auto") {
    if (/^\s*\[/.test(raw)) mode = "json";
    else if (/<table[\s\S]*?>/i.test(raw)) mode = "html";
    else mode = "text";
  }
  try {
    if (mode === "json") return parseJson(raw);
    if (mode === "html") return parseHtml(raw);
    return parseText(raw);
  } catch (e) {
    console.error(e);
    return { headers: [], rows: [] };
  }
}
function parseJson(raw) {
  const arr = JSON.parse(raw);
  if (!Array.isArray(arr)) return { headers: [], rows: [] };
  if (arr.length && typeof arr[0] === "object" && !Array.isArray(arr[0])) {
    const headers = [...new Set(arr.flatMap((o) => Object.keys(o)))];
    return {
      headers: headers,
      rows: arr.map((o) => headers.map((h) => o[h] ?? "")),
    };
  }
  return parseMatrix(arr);
}
function parseHtml(raw) {
  const blocks = extractSourceCauselistBlocks(raw);
  if (blocks.length)
    return { headers: blocks[0].headers, rows: blocks[0].rows };
  const doc = new DOMParser().parseFromString(raw, "text/html");
  const tables = [...doc.querySelectorAll("table")];
  if (!tables.length) return { headers: [], rows: [] };
  let best = { headers: [], rows: [] };
  for (const table of tables) {
    const trs = [...table.querySelectorAll("tr")]
      .filter((tr) => !isNonCauseHtmlRow(tr))
      .map((tr) => [...tr.children].map((td) => td.textContent.trim()))
      .filter((r) => r.some(Boolean));
    const parsed = parseMatrix(trs);
    if (parsed.rows.length > best.rows.length) best = parsed;
  }
  return best;
}
function isNonCauseHtmlRow(tr) {
  const cells = [...tr.children];
  if (!cells.length) return true;
  const text = tr.textContent.replace(/\s+/g, " ").trim();
  if (
    cells.length === 1 &&
    (cells[0].hasAttribute("colspan") ||
      /इजलास\s*अधिकृत|अधिकृत|सुनवाइ\s*मिति|साप्ताहिक\s*पेशी|खोज्नु\s*होस्/i.test(
        text,
      ))
  )
    return true;
  return false;
}
function parseText(raw) {
  let lines = raw
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);
  let matrix = lines.map((line) => {
    if (line.includes("\t")) return line.split("\t").map((x) => x.trim());
    if (line.includes("|"))
      return line
        .split("|")
        .map((x) => x.trim())
        .filter((x) => x);
    if (line.includes(";")) return line.split(";").map((x) => x.trim());
    if (line.includes(",")) return line.split(",").map((x) => x.trim());
    return line.split(/\s{2,}/).map((x) => x.trim());
  });
  return parseMatrix(matrix);
}
function parseMatrix(matrix) {
  matrix = (matrix || []).filter(
    (r) => Array.isArray(r) && r.some((c) => String(c || "").trim()),
  );
  if (!matrix.length) return { headers: [], rows: [] };
  let first = matrix[0].map((x) => String(x || "").trim());
  let looksHeader = first.some((c) =>
    /मुद्दा|वादी|प्रतिवादी|दर्ता|case|serial|क्र|सि\.?नं|विषय|कैफियत|फाँट/i.test(
      c,
    ),
  );
  let headers = looksHeader ? first : defaultHeaders(matrix[0].length);
  let rows = looksHeader ? matrix.slice(1) : matrix;
  let max = Math.max(headers.length, ...rows.map((r) => r.length));
  while (headers.length < max) headers.push("Column " + (headers.length + 1));
  rows = rows.map((r) => {
    let a = [...r];
    while (a.length < max) a.push("");
    return a;
  });
  rows = rows.filter((r) => hasCauseListCaseNumber(headers, r));
  return { headers: headers, rows: rows };
}
function hasCauseListCaseNumber(headers, row) {
  if (!Array.isArray(row) || row.length < 2) return false;
  const joined = String(row.join(" ")).replace(/\s+/g, " ").trim();
  if (
    /इजलास\s*अधिकृत|सुनवाइ\s*मिति|साप्ताहिक\s*पेशी|खोज्नु\s*होस्/i.test(joined)
  )
    return false;
  const caseIdx = colIndex(headers, [
    "मुद्दा नं",
    "मुद्दा न",
    "case no",
    "caseno",
    "case number",
  ]);
  const idx = caseIdx >= 0 ? caseIdx : 1;
  const raw = String((row && row[idx]) || "").trim();
  const cleaned = cleanCaseNo(raw);
  if (!cleaned) return false;
  const compact = toEng(cleaned).replace(/[.\s]/g, "").toLowerCase();
  if (/^(मुद्दा|case|caseno|casenumber|मुद्दानं|मुद्दान)$/.test(compact))
    return false;
  return (
    /[०-९0-9]/.test(cleaned) &&
    (/[A-Za-z]/.test(toEng(cleaned)) ||
      /-/.test(cleaned) ||
      /[०-९0-9]{3,}/.test(cleaned))
  );
}
function defaultHeaders(n) {
  const base = [
    "क्र.स.",
    "मुद्दा नं.",
    "दर्ता मिति",
    "मुद्दा विषय",
    "वादी / निवेदक",
    "प्रतिवादी / विपक्षी",
    "फाँट",
    "कैफियत",
    "आदेश किसिम",
  ];
  return Array.from({ length: n }, (_, i) => base[i] || "Column " + (i + 1));
}
function colIndex(headers, keys) {
  const hs = headers.map((h) => toEng(h).toLowerCase().replace(/\s+/g, ""));
  for (const k of keys) {
    const kk = toEng(k).toLowerCase().replace(/\s+/g, "");
    const i = hs.findIndex((h) => h.includes(kk));
    if (i >= 0) return i;
  }
  return -1;
}
function rowObj(g, row) {
  const h = g.headers;
  const get = (keys, fb = "") => {
    const i = colIndex(h, keys);
    return i >= 0 ? row[i] || "" : fb;
  };
  const rawCase = get(
    ["मुद्दा नं", "case no", "caseno", "मुद्दा"],
    row[1] || "",
  );
  const cleaned = cleanCaseNo(rawCase);
  const isFnCase = /FN/i.test(toEng(cleaned));
  const displayCaseNo = cleaned;
  const displayCaseLabel = cleaned
    ? `${isFnCase ? "निवेदन नं." : "मुद्दा नं."}-${cleaned}`
    : "";
  return {
    serial: get(["क्र", "सि", "serial", "sn"], row[0] || ""),
    caseNo: cleaned,
    rawCaseNo: rawCase,
    registrationNo: extractRegNo(rawCase),
    displayCaseNo: displayCaseNo,
    displayCaseLabel: displayCaseLabel,
    regDate: extractDateOnly(
      get(["दर्ता मिति", "registration date", "filed"], ""),
    ),
    subject: get(["मुद्दा विषय", "विषय", "subject", "case type"], ""),
    subjectLabel: isFnCase ? "विषयः" : "मुद्दा",
    party1: get(
      ["वादी", "निवेदक", "पक्ष", "plaintiff", "petitioner", "applicant"],
      "",
    ),
    party2: get(
      ["प्रतिवादी", "विपक्षी", "defendant", "respondent", "opposite"],
      "",
    ),
    section: get(["फाँट", "section"], ""),
    remarks: get(["कैफियत", "remarks", "order", "आदेश"], ""),
    raw: row,
    sourceBlockId: row._sourceBlockId || "",
    sourceBlockLabel: row._sourceBlockLabel || "",
    sourceRowIndex: row._sourceRowIndex,
  };
}
function selectionTokens(txt) {
  return String(txt || "")
    .split(/[,;\n]+/)
    .map((x) => x.trim())
    .filter(Boolean);
}
function eligibleRows(g) {
  let rows = g.rows
    .map((row, i) => ({ row: row, i: i, obj: rowObj(g, row) }))
    .filter((x) => hasCauseListCaseNumber(g.headers, x.row));
  const tokens = selectionTokens(g.selectedText);
  if (tokens.length) {
    const norms = tokens.map(normCase);
    rows = rows.filter(
      (x) =>
        norms.includes(normCase(x.obj.serial)) ||
        norms.includes(normCase(x.obj.caseNo)),
    );
  }
  return rows;
}
function tableHtml(g) {
  const indexed = (g.rows || [])
    .map((r, i) => ({ r: r, i: i }))
    .filter((x) => hasCauseListCaseNumber(g.headers, x.r));
  if (!indexed.length)
    return `<div class="empty">मुद्दा नं. भएको cause-list row भेटिएको छैन। Header/footer/search-form rows ignore गरिएका छन्।</div>`;
  const tokens = selectionTokens(g.selectedText).map(normCase);
  const numbered = true;
  const headCells =
    (numbered ? '<th style="text-align:center;width:54px">#</th>' : "") +
    g.headers
      .map(
        (h, i) =>
          `<th>${numbered ? '<span class="badge">' + (i + 1) + "</span> " : ""}${safe(h)}</th>`,
      )
      .join("");
  return `<div class="table-wrap"><table><thead><tr>${headCells}</tr></thead><tbody>${indexed
    .map((x, displayIndex) => {
      const r = x.r;
      const o = rowObj(g, r);
      const sel =
        tokens.length &&
        (tokens.includes(normCase(o.serial)) ||
          tokens.includes(normCase(o.caseNo)));
      const focus =
        state.tableFocus &&
        state.tableFocus.groupNo === g.no &&
        state.tableFocus.rowIndex === x.i;
      const cls = [
        sel ? "row-selected" : "",
        focus ? "source-row-highlight" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const noCell = numbered
        ? `<td style="text-align:center;font-weight:800;color:var(--brand)">${displayIndex + 1}</td>`
        : "";
      return `<tr id="sourceRow_${g.no}_${x.i}" class="${cls}">${noCell}${r.map((c) => `<td>${safe(c)}</td>`).join("")}</tr>`;
    })
    .join("")}</tbody></table></div>`;
}
function makePreview(g, x, idx) {
  const o = x.obj;
  const role1 = "वादी",
    role2 = "प्रतिवादी";
  const base = {
    serial: o.serial,
    caseNo: o.displayCaseNo || o.caseNo,
    subject: o.subject || "",
  };
  return {
    id: uid(),
    rowIndex: x.i,
    caseNo: o.caseNo,
    rawCaseNo: o.rawCaseNo,
    registrationNo: o.registrationNo,
    regDate: o.regDate || "",
    serial: o.serial,
    subject: o.subject || "",
    previewName: labelWithCaseName(base),
    party1Role: role1,
    party2Role: role2,
    saveId: "",
    saved: false,
    removed: false,
    editMode: false,
    dirty: false,
    beforeChangeContent: "",
    content: orderHtml(o, role1, role2, g),
    updatedAt: Date.now(),
  };
}
function orderHtml(o, role1 = "वादी", role2 = "प्रतिवादी", g = null) {
  const s = g && g.settings ? g.settings : state.settings;
  const body = s.body && s.body.trim() ? s.body : "[text area]";
  const issueLabel = safe(o.subjectLabel || "मुद्दा");
  return `<div class="center shree-line">श्री</div>\n<div class="center"><strong>${safe(s.court)}</strong></div>\n<div class="center">${safe(s.bench)}</div>\n<div class="center">${safe(effectiveJudgeForPreview(g, o.sourceBlockId || ""))}</div>\n<div class="title">आदेश</div>\n<div class="case-line" style="text-decoration:none!important">${safe(o.displayCaseLabel || `मुद्दा नं.-${cleanCaseNo(o.caseNo) || "........................"}`)}</div>\n<div class="party-line"><span class="party-name">${safe(o.party1 || "........................")}</span><span class="dots"></span><span class="party-role">${safe(role1 || "वादी")}</span></div>\n<div class="center">विरुद्ध</div>\n<div class="party-line"><span class="party-name">${safe(o.party2 || "........................")}</span><span class="dots"></span><span class="party-role">${safe(role2 || "प्रतिवादी")}</span></div>\n<div class="issue-line" style="text-decoration:underline!important">${issueLabel} - ${safe(o.subject || "........................")}।</div>\n<div class="body" contenteditable="true" data-placeholder="[text area]">${safe(body)}</div>\n<div class="sig">${safe(s.signature)}</div>\n<div class="iti-line"><span class="iti-text">${safe(formatItiDate(s.date))}</span><span class="tab-leader"></span></div>`;
}
function activePreviewForFloating(g, visible) {
  visible = Array.isArray(visible) ? visible : visiblePreviews(g);
  const current = visible.find((p) => p.id === state.activePreviewId);
  if (current) return current;
  const ps = (state.previewStates || {})[g && g.no];
  if (ps && ps.activePreviewId) {
    const saved = visible.find((p) => p.id === ps.activePreviewId);
    if (saved) return saved;
  }
  return visible[0] || null;
}
function floatingSaveInfo(g, visible) {
  const p = activePreviewForFloating(g, visible);
  const isSaved = !!(p && p.saved && !p.dirty);
  return {
    id: p ? p.id : "",
    cls: isSaved ? "save-saved" : "save-unsaved",
    title: isSaved
      ? "Saved active preview"
      : "Unsaved active preview — click to save",
    label: isSaved ? "Saved" : "Unsaved",
  };
}
function updateFloatingSaveButton() {
  const btn = document.getElementById("floatingSaveBtn");
  if (!btn) return;
  const fp = findPreview(state.activePreviewId);
  const isSaved = !!(fp && fp.p.saved && !fp.p.dirty);
  btn.classList.toggle("save-saved", isSaved);
  btn.classList.toggle("save-unsaved", !isSaved);
  btn.title = isSaved
    ? "Saved active preview"
    : "Unsaved active preview — click to save";
  btn.setAttribute(
    "aria-label",
    isSaved
      ? "Saved active preview"
      : "Unsaved active preview. Save active preview.",
  );
}
function activePreviewIdForCommand() {
  let id =
    rememberFocusedPreviewCursor({ silent: true, preserveNav: true }) ||
    state.activePreviewId ||
    "";
  const g = state.groups[state.activeIndex];
  if ((!id || !document.getElementById("doc_" + id)) && g) {
    const ps = (state.previewStates || {})[g.no] || {};
    id = (ps.cursor && ps.cursor.previewId) || ps.activePreviewId || id;
  }
  if ((!id || !document.getElementById("doc_" + id)) && g) {
    const p = activePreviewForFloating(g, visiblePreviews(g));
    id = p ? p.id : "";
  }
  if (id && document.getElementById("doc_" + id)) {
    setActivePreview(id, { scrollNav: false, noSave: true });
    return id;
  }
  return "";
}
function preserveToolbarSelection(ev) {
  if (ev && ev.preventDefault) ev.preventDefault();
  rememberFocusedPreviewCursor({ silent: true, preserveNav: true });
}
function formatActivePreviewText(cmd) {
  const id = activePreviewIdForCommand();
  if (!id)
    return toast(
      "पहिले कुनै preview card/body मा cursor राख्नुहोस्।",
      "danger",
    );
  formatPreviewText(id, cmd);
}
function focusEditActivePreview() {
  const id = activePreviewIdForCommand();
  if (!id)
    return toast(
      "पहिले कुनै preview card/body मा cursor राख्नुहोस्।",
      "danger",
    );
  focusEdit(id);
}
function previewView(g) {
  const visible = visiblePreviews(g);
  const saveInfo = floatingSaveInfo(g, visible);
  return `<div class="floating-action-stack" aria-label="Floating preview actions"><button class="fmtbtn" title="Bold" onmousedown="preserveToolbarSelection(event)" onclick="formatActivePreviewText('bold')"><b>B</b></button><button class="fmtbtn" title="Italic" onmousedown="preserveToolbarSelection(event)" onclick="formatActivePreviewText('italic')"><i>I</i></button><button class="fmtbtn" title="Underline" onmousedown="preserveToolbarSelection(event)" onclick="formatActivePreviewText('underline')"><u>U</u></button><button class="btn floating-edit" onmousedown="preserveToolbarSelection(event)" onclick="focusEditActivePreview()" title="Edit active preview">✏️</button><button id="floatingSaveBtn" class="btn floating-save ${saveInfo.cls}" onmousedown="preserveToolbarSelection(event)" onclick="saveActivePreview()" title="${safe(saveInfo.title)}" aria-label="${safe(saveInfo.label)} active preview. Save active preview.">SAVE🖫</button><button class="btn pick" onmousedown="preserveToolbarSelection(event)" onclick="previewPickLeft(${g.no})" title="Pick from where you left">📍</button><button class="btn" onmousedown="preserveToolbarSelection(event)" onclick="previewGoTop(${g.no})" title="Go to Input Table">⌨️</button><button class="btn" onmousedown="preserveToolbarSelection(event)" onclick="scrollPageTop()" title="Scroll to top">⬆️</button><button class="btn" onmousedown="preserveToolbarSelection(event)" onclick="previewGoBottom(${g.no})" title="Go to Bottom">⬇️</button></div><div class="workspace"><aside class="side"><div class="panel"><div class="panel-head"><div class="panel-title">🧭 Preview Navigation</div><span class="badge">${previewCountText(g)}</span></div><div class="panel-body"><div class="nav-list">${visible.length ? visible.map((p) => navItem(g, p)).join("") : '<div class="empty">Preview खाली छ।</div>'}</div></div></div></aside><main class="maincol"><div class="panel"><div class="panel-head"><div class="panel-title">👁️ Preview${g.no}</div><div class="preview-tools"><button class="btn" onclick="openTab(${state.activeIndex},'input')">← InputTable${g.no}</button></div></div><div class="panel-body"><div class="doc-list">${visible.length ? visible.map((p) => docItem(g, p)).join("") : '<div class="empty">Preview बनाउन InputTable मा गएर Generate Preview गर्नुहोस्।</div>'}</div></div></div></main></div>`;
}
function handlePreviewGroupSwitch(index) {
  const idx = parseInt(index, 10);
  if (isNaN(idx) || idx < 0 || idx >= state.groups.length) return;
  openTab(idx, "preview");
}
function handlePreviewDropdownAction(no, action) {
  if (!action) return;
  if (action === "filters") return openFilterPanel();
  if (action === "zip") return downloadVisibleZip(no);
  if (action === "combined") return downloadVisibleCombined(no);
  if (action === "trash") return openTrashPanel();
}
function handleOrderParentChange(value) {
  const parentInput = document.getElementById("topOrderSelect");
  const childWrap = document.getElementById("topOrderChildWrap");
  const childInput = document.getElementById("topOrderChildSelect");
  if (childWrap) {
    childWrap.classList.add("hidden");
  }
  if (childInput) {
    childInput.dataset.folderIndex = "";
    childInput.value = "";
  }
  if (!value) return;
  if (value.startsWith("order:")) {
    if (parentInput) parentInput.value = "";
    handleSelectOrderAction(null, value.slice(6));
    return;
  }
  if (value.startsWith("folder:")) {
    const folderIndex = value.split(":")[1];
    if (childInput) {
      childInput.dataset.folderIndex = folderIndex;
      childInput.value = "";
    }
    if (childWrap) {
      childWrap.classList.remove("hidden");
    }
  }
}
function handleOrderChildChange(orderKey) {
  if (!orderKey) return;
  const childWrap = document.getElementById("topOrderChildWrap");
  if (childWrap) {
    childWrap.classList.remove("hidden");
  }
  handleSelectOrderAction(null, orderKey);
}
async function handleSelectOrderAction(no, orderName) {
  if (!orderName) return;
  const order = findOrderVariety(orderName);
  if (!order) return toast("Order भेटिएन।", "danger");
  const loaded = await ensureOrderVarietyContent(order);
  if (!loaded) {
    return toast(
      "छानिएको order को text/file content भेटिएन। ordervarieties folder/file path जाँच्नुहोस्।",
      "danger",
    );
  }
  if (state.activeType !== "preview") {
    state.activeType = "preview";
    render();
    setTimeout(() => insertOrderIntoActivePreview(order), 80);
    return;
  }
  insertOrderIntoActivePreview(order);
}
async function ensureOrderVarietyContent(order) {
  if (!order) return false;
  if (
    String(order.contentHtml || "").trim() ||
    String(order.content || "").trim()
  )
    return true;
  if (!order.filename) return false;
  const ext = String(order.filename || "")
    .trim()
    .toLowerCase()
    .split(".")
    .pop();
  const rootPaths = ["ordervarieties/", "./ordervarieties/"];
  const folderPath = String(
    order.path ||
      order.folderPath ||
      order._orderFolderPath ||
      order._orderFolder ||
      "",
  )
    .trim()
    .replace(/^\/+|\/+$/g, "");
  const basePaths = [];
  if (folderPath) {
    rootPaths.forEach((root) => basePaths.push(root + folderPath + "/"));
  }
  rootPaths.forEach((root) => basePaths.push(root));
  for (const p of [...new Set(basePaths)]) {
    try {
      const url = p + order.filename;
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) continue;
      if (ext === "docx") {
        const buffer = await res.arrayBuffer();
        const zip = await JSZip.loadAsync(buffer);
        const xml = await zip.file("word/document.xml").async("text");
        const html = docxDocumentXmlToHtml(xml);
        order.contentHtml = html || "";
        order.content = html ? "" : xml.replace(/<[^>]+>/g, "").trim();
      } else if (ext === "doc") {
        const buffer = await res.arrayBuffer();
        order.contentHtml = docBinaryToHtml(buffer) || "";
        order.content = "";
      } else {
        const text = await res.text();
        if (ext === "json") {
          try {
            const parsed = JSON.parse(text);
            let extracted = "";
            if (parsed) {
              if (typeof parsed === "string") extracted = parsed;
              else if (typeof parsed.order === "string")
                extracted = parsed.order;
              else if (typeof parsed.content === "string")
                extracted = parsed.content;
              else if (typeof parsed.text === "string") extracted = parsed.text;
              else if (typeof parsed === "object") {
                for (const k of Object.keys(parsed)) {
                  if (typeof parsed[k] === "string") {
                    extracted = parsed[k];
                    break;
                  }
                }
              }
            }
            order.content = extracted || text || "";
          } catch (e) {
            order.content = text || "";
          }
        } else {
          order.content = text || "";
        }
        order.contentHtml = "";
      }
      return !!(
        String(order.contentHtml || "").trim() ||
        String(order.content || "").trim()
      );
    } catch (e) {}
  }
  return false;
}
function insertOrderIntoActivePreview(order) {
  let id =
    state.activePreviewId || rememberFocusedPreviewCursor({ silent: true });
  if (!id) {
    const g = state.groups[state.activeIndex];
    const first =
      g &&
      ((visiblePreviews(g) || [])[0] ||
        (g.previews || []).find((p) => !p.removed));
    if (first) id = first.id;
  }
  if (!id) return toast("पहिले कुनै preview card छान्नुहोस्।", "danger");
  const fp = findPreview(id);
  if (!fp) return toast("Active preview भेटिएन।", "danger");
  const keep = capturePreviewPosition(id) || {
    id: id,
    groupNo: fp.g.no,
    scrollY: currentScrollTop(),
  };
  const doc = document.getElementById("doc_" + id);
  if (!doc) return toast("Document element भेटिएन।", "danger");
  const bodyElement = doc.querySelector(".body");
  if (!bodyElement) return toast("Body element भेटिएन।", "danger");
  const htmlContent = String(order.contentHtml || "").trim();
  const textContent = String(order.content || "").trim();
  if (!htmlContent && !textContent) {
    return toast(
      "छानिएको order खाली छ। अर्को order छान्नुहोस् वा file content जाँच्नुहोस्।",
      "danger",
    );
  }
  if (htmlContent) {
    bodyElement.innerHTML = htmlContent;
  } else {
    bodyElement.textContent = textContent;
  }
  if (bodyElement.focus) bodyElement.focus({ preventScroll: true });
  fp.p.content = doc.innerHTML;
  suppressPreviewAutoScroll(900);
  setActivePreview(id, { scrollNav: false, navBehavior: "auto", noSave: true });
  markUnsaved(id);
  restorePreviewPosition(keep, {
    delay: false,
    keepSidebar: true,
    scrollNav: false,
    noAutoSync: true,
  });
  updateFloatingSaveButton();
  toast(
    `"${order._orderDisplayName || order.name || order.filename || "Order"}" order body मा insert भयो। Save गर्न सक्नु हुन्छ।`,
    "ok",
  );
}
function filterHtml() {
  return `<div class="filter-list" style="padding:10px"><label class="check"><input type="checkbox" ${state.filters.nonEmpty ? "checked" : ""} onchange="setFilter('nonEmpty',this.checked)">Show preview of non-empty first cell rows only</label><label class="check"><input type="checkbox" ${state.filters.all ? "checked" : ""} onchange="setFilter('all',this.checked)">Show all rows preview</label><label class="check"><input type="checkbox" ${state.filters.selected ? "checked" : ""} onchange="setFilter('selected',this.checked)">Show preview to selected rows only</label><label class="check"><input type="checkbox" ${state.filters.saved ? "checked" : ""} onchange="setFilter('saved',this.checked)">Show preview of files saved as history</label><label class="check"><input type="checkbox" ${state.filters.unsaved ? "checked" : ""} onchange="setFilter('unsaved',this.checked)">Show preview of files not saved as history</label></div>`;
}
function openFilterPanel() {
  modal.innerHTML = `<div class="modal-card"><div class="modal-title">⚙️ Display / Filter Options ▾</div><p class="hint">Default display: Show preview of non-empty first cell rows only.</p>${filterHtml()}<div class="modal-actions"><button class="btn" onclick="closeModal()">Close</button></div></div>`;
  modal.classList.remove("hidden");
}
function setFilter(k, v) {
  saveCurrentPreviewState();
  state.filters[k] = v;
  if (k === "all" && v) state.filters.nonEmpty = false;
  if (k === "nonEmpty" && v) state.filters.all = false;
  render();
}
function visiblePreviews(g) {
  let arr = g.previews.filter((p) => !p.removed);
  if (state.filters.nonEmpty && !state.filters.all)
    arr = arr.filter((p) => {
      const row = g.rows[p.rowIndex] || [];
      return String(row[0] || "").trim();
    });
  if (state.filters.selected) {
    const toks = selectionTokens(g.selectedText).map(normCase);
    arr = toks.length
      ? arr.filter(
          (p) =>
            toks.includes(normCase(p.serial)) ||
            toks.includes(normCase(p.caseNo)),
        )
      : [];
  }
  if (state.filters.saved && !state.filters.unsaved)
    arr = arr.filter((p) => p.saved);
  if (state.filters.unsaved && !state.filters.saved)
    arr = arr.filter((p) => !p.saved);
  return arr;
}
function colorStatusClass(value) {
  const v = String(value || "");
  return (
    {
      "आदेश सहि भयो": "status-sahi",
      "फैसला भयो": "status-faisala",
      "स्थगित भयो": "status-sthagit",
      "हेर्न नमिल्ने भयो": "status-herna-namilne",
      "हेर्न नभ्याइने भयो": "status-herna-nabhyaine",
    }[v] || ""
  );
}
function colorStatusOptions(selected = "") {
  const items = [
    "",
    "आदेश सहि भयो",
    "फैसला भयो",
    "स्थगित भयो",
    "हेर्न नमिल्ने भयो",
    "हेर्न नभ्याइने भयो",
  ];
  return items
    .map(
      (v) =>
        `<option value="${safe(v)}" ${v === selected ? "selected" : ""}>${v ? safe(v) : "Color status छान्नुहोस्"}</option>`,
    )
    .join("");
}
function applyColorStatus(id, value) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  fp.p.colorStatus = String(value || "");
  setActivePreview(id, { scrollNav: false });
  const nav = document.getElementById("nav_" + id);
  if (nav) {
    nav.classList.remove(
      "status-sahi",
      "status-faisala",
      "status-sthagit",
      "status-herna-namilne",
      "status-herna-nabhyaine",
    );
    const cls = colorStatusClass(fp.p.colorStatus);
    if (cls) nav.classList.add(cls);
  }
  saveState();
  toast(
    fp.p.colorStatus
      ? "Color status लागू भयो: " + fp.p.colorStatus
      : "Color status हटाइयो",
    "ok",
  );
}
function previewSubject(g, p) {
  let sub = String(p.subject || "").trim();
  if (!sub && g && Array.isArray(g.rows) && g.rows[p.rowIndex]) {
    try {
      sub = String(rowObj(g, g.rows[p.rowIndex]).subject || "").trim();
    } catch (e) {}
  }
  if (!sub) {
    try {
      const parts = extractDocParts(p.content || "");
      sub = String(parts.issue || "").trim();
    } catch (e) {}
  }
  return sub;
}
function navItem(g, p) {
  const title = safePreviewLabel(p);
  const subject = previewSubject(g, p);
  const status =
    p.saved && !p.dirty
      ? '<span class="saved">Saved</span>'
      : '<span class="unsaved">Unsaved</span>';
  const sid = safe(p.id);
  return `<div class="nav-item ${colorStatusClass(p.colorStatus)} ${state.activePreviewId === p.id ? "active-preview" : ""}" id="nav_${sid}" data-preview-id="${sid}" style="cursor:pointer"><div class="nav-row"><div class="nav-main"><div class="nav-title">${title}</div><div class="nav-sub">मुद्दा: ${safe(subject || "—")}</div><div class="nav-sub">क्र.स.+मुद्दा नं. · ${status}${p.colorStatus ? " · " + safe(p.colorStatus) : ""}</div></div><div class="nav-actions"><button type="button" class="mini ellipsis-btn" data-preview-menu="${sid}" onclick="event.preventDefault();event.stopPropagation();openPreviewActionSheet('${sid}')" title="Actions" aria-label="Preview actions">(...)</button></div></div></div>`;
}
function actionModal() {
  return document.getElementById("modal");
}
function previewDocumentType(p) {
  if (["order", "finalOrder", "decision"].includes(p?.documentType))
    return p.documentType;
  const holder = document.createElement("div");
  holder.innerHTML = p?.content || "";
  const title = textOnly(holder.querySelector(".title"));
  return /^अन्तिम आदेश/.test(title)
    ? "finalOrder"
    : /^फैसला/.test(title)
      ? "decision"
      : "order";
}
function documentTypeOptionsHtml(selected = "order") {
  return [
    { value: "order", label: "आदेश (Default)" },
    { value: "finalOrder", label: "अन्तिम आदेश" },
    { value: "decision", label: "फैसला" },
  ]
    .map(
      (o) =>
        `<option value="${o.value}" ${o.value === selected ? "selected" : ""}>${o.label}</option>`,
    )
    .join("");
}
function openPreviewActionSheet(id) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  setActivePreview(id, { scrollNav: true, noSave: true });
  const box = actionModal();
  if (!box) return toast("Menu container भेटिएन।", "danger");
  const title = safePreviewLabel(fp.p);
  const sid = safe(id);
  const selectedPair = pairKey(
    fp.p.party1Role || "वादी",
    fp.p.party2Role || "प्रतिवादी",
  );
  const selectedType = previewDocumentType(fp.p);
  const formatId = `downloadFormat_${sid}`;
  box.innerHTML = `<div class="modal-card"><div class="modal-title">⋯ ${title}</div><div class="grid-3"><div><label>Parties status pair</label><select onchange="applyPartyPair('${sid}', this.value)">${partyOptionsHtml(selectedPair)}</select></div><div><label>आदेश / फैसला</label><select onchange="applyDocumentType('${sid}',this.value)">${documentTypeOptionsHtml(selectedType)}</select></div><div><label>Download format</label><select id="${formatId}"><option value="docx" selected>.docx (Default)</option><option value="doc">.doc</option></select></div></div><p class="hint">Parties pair विरूद्ध खण्डमा लागू हुन्छ। अन्तिम आदेश र फैसला दुवैमा फैसला विवरण देखिन्छ।</p><br><div class="grid-3"><button class="btn primary" onclick="closeModal(); printActiveDocument('${sid}')">🖨️ Print</button><button class="btn info" onclick="closeModal(); showPreviewInTable('${sid}')">📊 Show in table</button><button class="btn" onclick="closeModal(); downloadSelectedFormat('${sid}','${formatId}')">⬇️ Download</button><button class="btn" onclick="closeModal(); inversePartyNames('${sid}')">🔄 Inverse</button><button class="btn" onclick="closeModal(); renamePreview('${sid}')">🏷️ Rename</button><button class="btn" onclick="closeModal(); copyPreviewContent('${sid}')">📋 Copy content</button><button class="btn danger" onclick="closeModal(); removePreview('${sid}')">🗑 Remove</button></div><div class="modal-actions"><button class="btn" onclick="closeModal()">Close</button></div></div>`;
  box.classList.remove("hidden");
}
function applyPartyPair(id, key) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  const roles = splitPairKey(key);
  setActivePreview(id, { scrollNav: false });
  fp.p.party1Role = roles[0];
  fp.p.party2Role = roles[1];
  const live = document.getElementById("doc_" + id);
  const holder = live || document.createElement("div");
  if (!live) holder.innerHTML = fp.p.content || "";
  const lines = holder.querySelectorAll(".party-line");
  if (lines[0]) {
    const r = lines[0].querySelector(".party-role");
    if (r) r.textContent = roles[0];
  }
  if (lines[1]) {
    const r = lines[1].querySelector(".party-role");
    if (r) r.textContent = roles[1];
  }
  fp.p.content = holder.innerHTML;
  fp.p.saved = false;
  saveState();
  toast("Parties status लागू भयो: " + roles[0] + ", " + roles[1], "ok");
}
function applyDecisionTemplate(id) {
  return applyDocumentType(id, "decision");
}
function syncDecisionAssistance(holder) {
  if (!holder) return;
  const isDecision = /^फैसला(?:\s|$)/.test(
    textOnly(holder.querySelector(".title")),
  );
  const existing = [...holder.querySelectorAll(".decision-assistance")];
  if (!isDecision) {
    existing.forEach((el) => el.remove());
    return;
  }
  let assistance = existing.shift();
  existing.forEach((el) => el.remove());
  if (!assistance) {
    assistance = document.createElement("div");
    assistance.className = "decision-assistance";
    assistance.innerHTML =
      '<div class="decision-assistance-title"><u>फैसला तयार गर्न सहयोग गर्ने</u></div><div>शाखा अधिकृत-</div><div>कम्प्युटर अपरेटर-</div><div>फैसला प्रमाणीकरण मिति-</div>';
  }
  const itiLine = holder.querySelector(".iti-line");
  if (itiLine) itiLine.insertAdjacentElement("afterend", assistance);
  else holder.append(assistance);
}
function applyDocumentType(id, type = "order") {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  type = ["order", "finalOrder", "decision"].includes(type) ? type : "order";
  setActivePreview(id, { scrollNav: false, noSave: true });
  const live = document.getElementById("doc_" + id);
  const holder = live || document.createElement("div");
  if (!live) holder.innerHTML = fp.p.content || "";
  const oldDecisionNo =
    holder.querySelector(".decision-number-value")?.textContent?.trim() ||
    fp.p.decisionNo ||
    "";
  fp.p.decisionNo = oldDecisionNo;
  const title = holder.querySelector(".title");
  holder.querySelector(".decision-meta")?.remove();
  holder.querySelector(".case-line")?.remove();
  if (type === "order") {
    if (title) title.textContent = "आदेश";
    const rawCaseNo =
      cleanCaseNo(fp.p.caseNo || "") || "........................";
    const isFnCase = /FN/i.test(toEng(rawCaseNo));
    const caseLine = document.createElement("div");
    caseLine.className = "case-line";
    caseLine.style.setProperty("text-decoration", "none", "important");
    caseLine.textContent = `${isFnCase ? "निवेदन नं." : "मुद्दा नं."}-${rawCaseNo}`;
    if (title) title.insertAdjacentElement("afterend", caseLine);
    else holder.prepend(caseLine);
    syncDecisionAssistance(holder);
    fp.p.documentType = "order";
    fp.p.content = normalizePreviewEditableHtml(
      holder.innerHTML,
      fp.p.editMode,
    );
    fp.p.saved = false;
    fp.p.dirty = true;
    saveState();
    if (!live) render();
    return toast("Preview आदेश ढाँचामा परिवर्तन भयो।", "ok");
  }
  const sourceRow = fp.g.rows?.[fp.p.rowIndex];
  const source = sourceRow ? rowObj(fp.g, sourceRow) : {};
  const caseNo =
    cleanCaseNo(fp.p.caseNo || source.caseNo || "") ||
    "........................";
  const regDate =
    extractDateOnly(fp.p.regDate || source.regDate || "") ||
    "........................";
  const registrationNo =
    String(
      fp.p.registrationNo ||
        source.registrationNo ||
        extractRegNo(fp.p.rawCaseNo) ||
        "",
    ).trim() || "........................";
  const heading = type === "finalOrder" ? "अन्तिम आदेश" : "फैसला";
  if (title) title.textContent = heading;
  const meta = document.createElement("div");
  meta.className = "decision-meta";
  meta.innerHTML = `<div class="decision-meta-row" data-decision-field="caseNo"><span>मुद्दा नम्बर-</span><span>${safe(caseNo)}</span></div><div class="decision-meta-row" data-decision-field="regDate"><span>मुद्दा दर्ता मिति-</span><span>${safe(regDate)}</span></div><div class="decision-meta-row" data-decision-field="registrationNo"><span>रजिष्ट्रेशन नम्बर-</span><span>${safe(registrationNo)}</span></div><div class="decision-meta-row" data-decision-field="decisionNo"><span>निर्णय नम्बर-</span><span class="manual-field decision-number-value" contenteditable="true" data-placeholder="यहाँ लेख्नुहोस्">${safe(oldDecisionNo)}</span></div>`;
  const titleNode = holder.querySelector(".title");
  if (titleNode) titleNode.insertAdjacentElement("afterend", meta);
  else holder.prepend(meta);
  syncDecisionAssistance(holder);
  fp.p.regDate = regDate === "........................" ? "" : regDate;
  fp.p.registrationNo =
    registrationNo === "........................" ? "" : registrationNo;
  fp.p.documentType = type;
  fp.p.content = normalizePreviewEditableHtml(holder.innerHTML, fp.p.editMode);
  fp.p.saved = false;
  fp.p.dirty = true;
  saveState();
  if (!live) render();
  toast(
    `Preview ${heading} ढाँचामा परिवर्तन भयो। निर्णय नम्बर manual रूपमा लेख्नुहोस्।`,
    "ok",
  );
}
function inversePartyNames(id) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  setActivePreview(id, { scrollNav: false, noSave: true });
  const live = document.getElementById("doc_" + id);
  const holder = live || document.createElement("div");
  if (!live) holder.innerHTML = fp.p.content || "";
  const lines = holder.querySelectorAll(".party-line");
  const firstName = lines[0]?.querySelector(".party-name");
  const secondName = lines[1]?.querySelector(".party-name");
  const firstRole = lines[0]?.querySelector(".party-role");
  const secondRole = lines[1]?.querySelector(".party-role");
  if (!firstName || !secondName || !firstRole || !secondRole)
    return toast("विरुद्ध खण्डका party names वा roles भेटिएनन्।", "danger");
  const firstHtml = firstName.innerHTML;
  firstName.innerHTML = secondName.innerHTML;
  secondName.innerHTML = firstHtml;
  const firstRoleHtml = firstRole.innerHTML;
  firstRole.innerHTML = secondRole.innerHTML;
  secondRole.innerHTML = firstRoleHtml;
  fp.p.party1Role = firstRole.textContent.trim() || "वादी";
  fp.p.party2Role = secondRole.textContent.trim() || "प्रतिवादी";
  fp.p.content = normalizePreviewEditableHtml(holder.innerHTML, fp.p.editMode);
  fp.p.saved = false;
  fp.p.dirty = true;
  saveState();
  renderTopbar();
  toast("विरुद्ध खण्डका party names र roles inverse भए।", "ok");
}
function normalizePreviewEditableHtml(html, editMode = false) {
  const div = document.createElement("div");
  div.innerHTML = html || "";
  syncDecisionAssistance(div);
  div
    .querySelectorAll("[contenteditable]")
    .forEach((el) => el.removeAttribute("contenteditable"));
  if (!div.querySelector(".shree-line")) {
    const courtLine = div.querySelector(":scope > .center");
    if (courtLine) {
      const shree = document.createElement("div");
      shree.className = "center shree-line";
      shree.textContent = "श्री";
      courtLine.before(shree);
    }
  }
  const storedRegDate = div.querySelector(
    '[data-decision-field="regDate"] span:last-child',
  );
  if (storedRegDate) {
    const onlyDate = extractDateOnly(storedRegDate.textContent);
    if (onlyDate) storedRegDate.textContent = onlyDate;
  }
  const caseLine = div.querySelector(".case-line");
  if (caseLine) {
    caseLine.style.setProperty("text-decoration", "none", "important");
    caseLine
      .querySelectorAll("u,ins")
      .forEach((el) => el.replaceWith(...el.childNodes));
    caseLine.querySelectorAll("[style]").forEach((el) => {
      el.style.removeProperty("text-decoration");
      el.style.removeProperty("text-decoration-line");
      if (!el.getAttribute("style")?.trim()) el.removeAttribute("style");
    });
  }
  const issueLine = div.querySelector(".issue-line");
  if (issueLine)
    issueLine.style.setProperty("text-decoration", "underline", "important");
  const body = div.querySelector(".body");
  if (!editMode) {
    if (body) body.setAttribute("contenteditable", "true");
    div
      .querySelectorAll(".manual-field")
      .forEach((el) => el.setAttribute("contenteditable", "true"));
  }
  return div.innerHTML;
}
function renamePreview(id) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  promptBox(
    "Rename preview/file name",
    "नयाँ preview name",
    (val) => {
      const name = String(val || "").trim();
      if (!name) return;
      const live = document.getElementById("doc_" + id);
      if (live) fp.p.content = live.innerHTML;
      fp.p.previewName = name;
      fp.p.saveId = name;
      fp.p.saved = false;
      fp.p.updatedAt = Date.now();
      saveState();
      render();
      toast("Preview/file name rename भयो", "ok");
    },
    previewLabel(fp.p),
  );
}
function pushTrash(item, reason = "Removed") {
  if (!Array.isArray(state.trash)) state.trash = [];
  const copy =
    globalThis.structuredClone?.(item || {}) ||
    JSON.parse(JSON.stringify(item || {}));
  copy.trashId = uid();
  copy.originalId = copy.id;
  copy.reason = reason;
  copy.deletedAt = Date.now();
  copy.deletedDate = nowDate();
  copy.deletedTime = nowTime();
  state.trash.unshift(copy);
  if (state.trash.length > 24) state.trash = state.trash.slice(0, 24);
  return copy;
}
function docItem(g, p) {
  const lineSpacing =
    Number(g.settings?.lineSpacing || state.settings.lineSpacing || 1.15) ||
    1.15;
  const sid = safe(p.id);
  const fullscreen = p.editMode ? "true" : "false";
  return `<div id="wrap_${sid}" data-preview-id="${sid}" class="${state.activePreviewId === p.id ? "preview-card-active" : ""} ${p.editMode ? "preview-card-fullscreen" : ""}" onmouseenter="setActivePreview('${sid}')" onclick="setActivePreview('${sid}')"><div class="docbar"><div class="docbar-left"><span class="badge">${safePreviewLabel(p)}</span><span class="${p.saved && !p.dirty ? "saved" : "unsaved"}">${p.saved && !p.dirty ? "Saved" : "Unsaved"}</span>${p.editMode ? '<span class="badge warn">Full edit enabled</span>' : ""}</div></div><div class="doc" id="doc_${sid}" style="line-height:${lineSpacing};" data-editmode="${p.editMode ? "true" : "false"}" data-fullscreen="${fullscreen}" contenteditable="${p.editMode ? "true" : "false"}" onmousedown="guardPreviewEdit(event,'${sid}')" onfocusin="setActivePreview('${sid}');rememberPreviewCursor('${sid}',{silent:true})" onkeyup="rememberPreviewCursor('${sid}',{silent:true})" onmouseup="rememberPreviewCursor('${sid}',{silent:true})" onclick="setActivePreview('${sid}');rememberPreviewCursor('${sid}',{silent:true})" oninput="markUnsaved('${sid}');rememberPreviewCursor('${sid}',{silent:true})">${normalizePreviewEditableHtml(p.content, p.editMode)}</div></div>`;
}
function saveActivePreview() {
  let id = state.activePreviewId;
  const active = document.activeElement;
  const doc = active?.closest?.('[id^="doc_id_"]');
  if (doc) id = doc.id.replace(/^doc_/, "");
  if (!id) {
    const g = state.groups[state.activeIndex];
    const ps = g && (state.previewStates || {})[g.no];
    id =
      (ps && ps.activePreviewId) ||
      (ps && ps.cursor && ps.cursor.previewId) ||
      "";
  }
  if (!id)
    return toast(
      "Active preview भेटिएन। पहिले कुनै preview card/body मा cursor राख्नुहोस्।",
      "danger",
    );
  const fp = findPreview(id);
  if (!fp) return toast("Active preview भेटिएन।", "danger");
  suppressPreviewAutoScroll(1800);
  setActivePreview(id, { scrollNav: false, noSave: true });
  saveCurrentPreviewState();
  savePreview(id);
}
let __editGuardLast = 0;
function guardPreviewEdit(ev, id) {
  setActivePreview(id);
  const fp = findPreview(id);
  if (!fp || fp.p.editMode) return;
  const directlyEditable = !!ev.target.closest(".body,.manual-field");
  if (!directlyEditable) {
    const now = Date.now();
    if (now - __editGuardLast > 1400) {
      __editGuardLast = now;
      toast(
        "Full edit का लागि right side को ✏️ floating edit icon प्रयोग गर्नुहोस्।",
        "danger",
      );
    }
  }
}
function editableTargetForPreview(id) {
  const doc = document.getElementById("doc_" + id);
  if (!doc) return null;
  return doc.getAttribute("contenteditable") === "true"
    ? doc
    : doc.querySelector(".body") || doc;
}
function getSelectionOffsetWithin(root) {
  const sel = window.getSelection && window.getSelection();
  if (!root || !sel || !sel.rangeCount) return null;
  const range = sel.getRangeAt(0);
  if (!root.contains(range.startContainer)) return null;
  const pre = document.createRange();
  pre.selectNodeContents(root);
  pre.setEnd(range.startContainer, range.startOffset);
  return pre.toString().length;
}
function setSelectionOffsetWithin(root, offset) {
  if (!root || offset == null) return false;
  const target = Math.max(0, Number(offset) || 0);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node,
    count = 0;
  while ((node = walker.nextNode())) {
    const len = node.nodeValue.length;
    if (count + len >= target) {
      const r = document.createRange();
      r.setStart(node, Math.max(0, Math.min(len, target - count)));
      r.collapse(true);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      return true;
    }
    count += len;
  }
  root.focus();
  const r = document.createRange();
  r.selectNodeContents(root);
  r.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(r);
  return true;
}
function rememberFocusedPreviewCursor(opts = {}) {
  const sel = window.getSelection && window.getSelection();
  let node = sel && sel.rangeCount ? sel.getRangeAt(0).startContainer : null;
  if (node && node.nodeType === 3) node = node.parentElement;
  const doc = node && node.closest ? node.closest('[id^="doc_"]') : null;
  if (doc) {
    const id = doc.id.replace(/^doc_/, "");
    setActivePreview(id, {
      scrollNav: !(opts.preserveNav || shouldPreservePreviewSide()),
      navBehavior: "auto",
      noSave: true,
    });
    rememberPreviewCursor(id, opts);
    return id;
  }
  const active = document.activeElement;
  const activeDoc =
    active && active.closest ? active.closest('[id^="doc_"]') : null;
  if (activeDoc) {
    const id = activeDoc.id.replace(/^doc_/, "");
    setActivePreview(id, {
      scrollNav: !(opts.preserveNav || shouldPreservePreviewSide()),
      navBehavior: "auto",
      noSave: true,
    });
    rememberPreviewCursor(id, opts);
    return id;
  }
  return "";
}
function bindPreviewCaretTracking() {
  if (window.__previewCaretTrackingBound) return;
  window.__previewCaretTrackingBound = true;
  document.addEventListener(
    "selectionchange",
    () => {
      if (state.activeType !== "preview") return;
      if (window.__previewCaretRAF)
        cancelAnimationFrame(window.__previewCaretRAF);
      window.__previewCaretRAF = requestAnimationFrame(() =>
        rememberFocusedPreviewCursor({ silent: true }),
      );
    },
    { passive: true },
  );
  document.addEventListener(
    "focusin",
    (ev) => {
      if (state.activeType !== "preview") return;
      const doc =
        ev.target && ev.target.closest
          ? ev.target.closest('[id^="doc_"]')
          : null;
      if (!doc) return;
      const id = doc.id.replace(/^doc_/, "");
      setActivePreview(id, {
        scrollNav: !shouldPreservePreviewSide(),
        navBehavior: "auto",
        noSave: true,
      });
      rememberPreviewCursor(id, {
        silent: true,
        preserveNav: shouldPreservePreviewSide(),
      });
    },
    true,
  );
}
function capturePreviewPosition(id) {
  const fp = findPreview(id || state.activePreviewId);
  if (!fp) return null;
  rememberPreviewCursor(fp.p.id, { silent: true, preserveNav: true });
  if (!state.previewStates) state.previewStates = {};
  const ps = state.previewStates[fp.g.no] || {};
  return {
    groupNo: fp.g.no,
    id: fp.p.id,
    scrollY: currentScrollTop(),
    sideScrollTop: currentPreviewSideScrollTop(),
    cursor:
      ps.cursor && ps.cursor.previewId === fp.p.id ? { ...ps.cursor } : null,
  };
}
function restorePreviewPosition(pos, opts = {}) {
  if (!pos || !pos.id) return;
  const doRestore = () => {
    if (opts.noAutoSync) suppressPreviewAutoScroll(900);
    const wrap = document.getElementById("wrap_" + pos.id);
    if (!wrap) return;
    const keepSide = opts.keepSidebar || opts.scrollNav === false;
    window.__previewNavClickLockUntil = Date.now() + 700;
    window.__previewTextProgrammaticUntil = Date.now() + 700;
    if (keepSide) window.__previewPreserveSideUntil = Date.now() + 900;
    setActivePreview(pos.id, {
      scrollNav: !keepSide,
      navBehavior: "auto",
      noSave: true,
    });
    if (typeof pos.scrollY === "number")
      window.scrollTo({ top: Math.max(0, pos.scrollY), behavior: "auto" });
    if (typeof pos.sideScrollTop === "number")
      restorePreviewSideScrollTop(pos.sideScrollTop);
    if (pos.cursor) {
      const root = editableTargetForPreview(pos.id);
      if (root) {
        root.focus({ preventScroll: true });
        setSelectionOffsetWithin(root, pos.cursor.offset || 0);
      }
    }
    if (!keepSide) scrollActiveNavIntoView(pos.id, "auto");
    else if (typeof pos.sideScrollTop === "number")
      setTimeout(() => restorePreviewSideScrollTop(pos.sideScrollTop), 40);
  };
  if (opts.delay === false) doRestore();
  else setTimeout(doRestore, opts.delay || 90);
}
function rememberPreviewCursor(id, opts = {}) {
  if (state.activeType !== "preview" || !id) return;
  const fp = findPreview(id);
  if (!fp) return;
  const root = editableTargetForPreview(id);
  if (!root) return;
  const off = getSelectionOffsetWithin(root);
  if (off == null) return;
  const sel = window.getSelection && window.getSelection();
  if (sel && sel.rangeCount) {
    const r = sel.getRangeAt(0);
    if (root.contains(r.startContainer) && root.contains(r.endContainer)) {
      window.__previewLastRange = { previewId: id, range: r.cloneRange() };
    }
  }
  if (!state.previewStates) state.previewStates = {};
  const prev = state.previewStates[fp.g.no] || {};
  state.previewStates[fp.g.no] = {
    ...prev,
    activePreviewId: id,
    cursor: { previewId: id, offset: off },
    scrollY: window.scrollY || document.documentElement.scrollTop || 0,
    sideScrollTop: currentPreviewSideScrollTop(),
  };
  if (!opts.silent) saveState();
}
function restorePreviewCursor(no) {
  window.__previewNoAutoScrollUntil = 0;
  const ps = (state.previewStates || {})[no] || {};
  const cur = ps.cursor || {};
  const id = cur.previewId;
  if (!id) return false;
  const root = editableTargetForPreview(id);
  if (!root) return false;
  window.__previewNavClickLockUntil = Date.now() + 900;
  window.__previewTextProgrammaticUntil = Date.now() + 900;
  setActivePreview(id, { scrollNav: true, navBehavior: "auto", noSave: true });
  scrollWindowToPreview(id, "smooth", "start");
  setTimeout(() => {
    const target = editableTargetForPreview(id);
    if (target) {
      target.focus({ preventScroll: true });
      setSelectionOffsetWithin(target, cur.offset || 0);
    }
    scrollActiveNavIntoView(id, "auto");
  }, 140);
  return true;
}
function toggleInlineFormat(range, cmd) {
  if (!range || range.collapsed) return false;
  const tag = { bold: "strong", italic: "em", underline: "u" }[cmd];
  if (!tag) return false;
  const start =
    range.startContainer.nodeType === Node.ELEMENT_NODE
      ? range.startContainer
      : range.startContainer.parentElement;
  const end =
    range.endContainer.nodeType === Node.ELEMENT_NODE
      ? range.endContainer
      : range.endContainer.parentElement;
  const active = start?.closest?.(tag);
  if (
    active &&
    active === end?.closest?.(tag) &&
    active.contains(range.commonAncestorContainer)
  ) {
    active.replaceWith(...active.childNodes);
    return true;
  }
  const wrapper = document.createElement(tag);
  wrapper.append(range.extractContents());
  range.insertNode(wrapper);
  range.selectNodeContents(wrapper);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}
function formatPreviewText(id, cmd) {
  const fp = findPreview(id);
  if (!fp) return toast("Preview भेटिएन।", "danger");
  setActivePreview(id, { scrollNav: false, noSave: true });
  const doc = document.getElementById("doc_" + id);
  const currentSelection = window.getSelection && window.getSelection();
  const currentRange =
    currentSelection && currentSelection.rangeCount
      ? currentSelection.getRangeAt(0)
      : null;
  const selectionIsInDoc = !!(
    doc &&
    currentRange &&
    doc.contains(currentRange.startContainer) &&
    doc.contains(currentRange.endContainer)
  );
  const target = selectionIsInDoc ? doc : editableTargetForPreview(id);
  if (!target) return;
  const wasEditable = target.getAttribute("contenteditable");
  const temporaryFullEdit = target === doc && wasEditable !== "true";
  if (temporaryFullEdit) target.setAttribute("contenteditable", "true");
  target.focus({ preventScroll: true });
  const sel = window.getSelection && window.getSelection();
  if (!sel) return toast("Selection उपलब्ध छैन।", "danger");
  if (selectionIsInDoc && currentRange) {
    sel.removeAllRanges();
    sel.addRange(currentRange.cloneRange());
  }
  const savedRange = window.__previewLastRange;
  const selectionInside =
    sel.rangeCount &&
    target.contains(sel.getRangeAt(0).startContainer) &&
    target.contains(sel.getRangeAt(0).endContainer);
  if (
    !selectionInside &&
    savedRange &&
    savedRange.previewId === id &&
    target.contains(savedRange.range.startContainer) &&
    target.contains(savedRange.range.endContainer)
  ) {
    sel.removeAllRanges();
    sel.addRange(savedRange.range.cloneRange());
  }
  if (!sel.rangeCount || !target.contains(sel.getRangeAt(0).startContainer)) {
    const g = fp.g;
    const ps = (state.previewStates || {})[g.no] || {};
    const cur = ps.cursor && ps.cursor.previewId === id ? ps.cursor : null;
    if (cur) {
      setSelectionOffsetWithin(target, cur.offset || 0);
    } else {
      const r = document.createRange();
      r.selectNodeContents(target);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  }
  try {
    if (!toggleInlineFormat(sel.getRangeAt(0), cmd)) {
      if (temporaryFullEdit)
        target.setAttribute("contenteditable", wasEditable || "false");
      return toast("Format गर्न पहिले text select गर्नुहोस्।", "danger");
    }
  } catch (e) {
    if (temporaryFullEdit)
      target.setAttribute("contenteditable", wasEditable || "false");
    console.warn("format command failed", e);
    return toast("Format लागू गर्न सकिएन।", "danger");
  }
  if (temporaryFullEdit)
    target.setAttribute("contenteditable", wasEditable || "false");
  markUnsaved(id);
  rememberPreviewCursor(id, { silent: true, preserveNav: true });
  const live = document.getElementById("doc_" + id);
  if (live)
    fp.p.content = normalizePreviewEditableHtml(live.innerHTML, fp.p.editMode);
  saveState();
  toast(
    (cmd === "bold" ? "Bold" : cmd === "italic" ? "Italic" : "Underline") +
      " लागू भयो",
    "ok",
  );
}
function findPreview(id) {
  for (const g of state.groups) {
    const p = g.previews.find((x) => x.id === id);
    if (p) return { g: g, p: p };
  }
  return null;
}
function activePreviewTopOffset() {
  const topBar = document.querySelector(".top");
  return (topBar ? topBar.getBoundingClientRect().height : 0) + 16;
}
function previewWraps() {
  return [
    ...document.querySelectorAll('.doc-list > [id^="wrap_"][data-preview-id]'),
  ];
}
function currentScrollTop() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}
function currentPreviewSideScrollTop() {
  const side = document.querySelector(".side");
  return side ? side.scrollTop : 0;
}
function restorePreviewSideScrollTop(top) {
  const side = document.querySelector(".side");
  if (!side || typeof top !== "number") return;
  window.__previewSideProgrammaticUntil = Date.now() + 700;
  side.scrollTop = Math.max(0, top);
}
function isPreviewAutoScrollSuppressed() {
  return Date.now() < (window.__previewNoAutoScrollUntil || 0);
}
function suppressPreviewAutoScroll(ms = 1400) {
  const until = Date.now() + ms;
  window.__previewNoAutoScrollUntil = until;
  window.__previewPreserveSideUntil = Math.max(
    window.__previewPreserveSideUntil || 0,
    until,
  );
  window.__previewNavClickLockUntil = Math.max(
    window.__previewNavClickLockUntil || 0,
    until,
  );
}
function shouldPreservePreviewSide() {
  return (
    Date.now() < (window.__previewPreserveSideUntil || 0) ||
    isPreviewAutoScrollSuppressed()
  );
}
function scrollWindowToPreview(id, behavior = "smooth", block = "start") {
  const wrap = document.getElementById("wrap_" + id);
  if (!wrap) return;
  const doScroll = () => {
    const top =
      currentScrollTop() +
      wrap.getBoundingClientRect().top -
      activePreviewTopOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: behavior });
  };
  window.__previewTextProgrammaticUntil = Date.now() + 850;
  doScroll();
  if (behavior === "smooth") {
    setTimeout(() => {
      const r = wrap.getBoundingClientRect();
      const targetTop = activePreviewTopOffset();
      if (Math.abs(r.top - targetTop) > 12) {
        const top = currentScrollTop() + r.top - targetTop;
        window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
      }
      window.__previewTextProgrammaticUntil = Date.now() + 260;
    }, 360);
  }
}
function scrollActiveNavIntoView(id, behavior = "auto") {
  if (!id) return;
  const nav = document.getElementById("nav_" + id);
  if (!nav) return;
  const side = nav.closest(".side");
  if (!side) {
    nav.scrollIntoView({ behavior: behavior, block: "nearest" });
    return;
  }
  const sideRect = side.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  const pad = 18;
  const fullyVisible =
    navRect.top >= sideRect.top + pad &&
    navRect.bottom <= sideRect.bottom - pad;
  if (fullyVisible) return;
  const target =
    side.scrollTop +
    (navRect.top - sideRect.top) -
    side.clientHeight / 2 +
    nav.offsetHeight / 2;
  window.__previewSideProgrammaticUntil = Date.now() + 260;
  side.scrollTo({ top: Math.max(0, target), behavior: behavior });
}
function setActivePreview(id, opts = {}) {
  if (!id) return;
  const changed = state.activePreviewId !== id;
  state.activePreviewId = id;
  document
    .querySelectorAll(".nav-item.active-preview")
    .forEach((el) => el.classList.remove("active-preview"));
  document
    .querySelectorAll(".preview-card-active")
    .forEach((el) => el.classList.remove("preview-card-active"));
  const nav = document.getElementById("nav_" + id);
  if (nav) nav.classList.add("active-preview");
  const wrap = document.getElementById("wrap_" + id);
  if (wrap) wrap.classList.add("preview-card-active");
  updateFloatingSaveButton();
  const wantScrollNav = opts.scrollNav || (changed && opts.scrollNav !== false);
  if (
    wantScrollNav &&
    !shouldPreservePreviewSide() &&
    !isPreviewAutoScrollSuppressed()
  )
    scrollActiveNavIntoView(
      id,
      opts.navBehavior || opts.behavior || (opts.instant ? "auto" : "auto"),
    );
  if (!opts.noSave) saveState();
}
function updateActivePreviewFromViewport(force = false) {
  if (state.activeType !== "preview") return;
  if (isPreviewAutoScrollSuppressed()) return;
  if (!force && Date.now() < (window.__previewTextProgrammaticUntil || 0))
    return;
  const modalEl = document.getElementById("modal");
  if (modalEl && !modalEl.classList.contains("hidden")) return;
  const wraps = previewWraps();
  if (!wraps.length) return;
  const anchor = activePreviewTopOffset() + 32;
  const viewportBottom = window.innerHeight - 40;
  let best = null;
  let bestScore = Infinity;
  for (const w of wraps) {
    const r = w.getBoundingClientRect();
    if (r.bottom < anchor || r.top > viewportBottom) continue;
    const visible = Math.max(
      0,
      Math.min(r.bottom, viewportBottom) - Math.max(r.top, anchor),
    );
    const distance = Math.abs(r.top - anchor);
    const score = distance - visible * 0.08;
    if (score < bestScore) {
      best = w;
      bestScore = score;
    }
  }
  if (!best) {
    for (const w of wraps) {
      const r = w.getBoundingClientRect();
      const score = Math.abs(r.top - anchor);
      if (score < bestScore) {
        best = w;
        bestScore = score;
      }
    }
  }
  const id = best && best.getAttribute("data-preview-id");
  if (id)
    setActivePreview(id, {
      scrollNav: true,
      navBehavior: "auto",
      noSave: true,
    });
}
function requestPreviewScrollSync(force = false) {
  if (isPreviewAutoScrollSuppressed()) return;
  if (window.__previewSyncRAF) cancelAnimationFrame(window.__previewSyncRAF);
  window.__previewSyncRAF = requestAnimationFrame(() => {
    window.__previewSyncRAF = 0;
    if (isPreviewAutoScrollSuppressed()) return;
    updateActivePreviewFromViewport(force);
    const g = state.groups[state.activeIndex];
    if (state.activeType === "preview" && g) {
      if (!state.previewStates) state.previewStates = {};
      state.previewStates[g.no] = {
        ...(state.previewStates[g.no] || {}),
        scrollY: currentScrollTop(),
        activePreviewId: state.activePreviewId || "",
      };
    }
  });
}
function updatePreviewFromSidebarViewport(side, opts = {}) {
  if (state.activeType !== "preview") return;
  if (isPreviewAutoScrollSuppressed()) return;
  if (Date.now() < (window.__previewSideProgrammaticUntil || 0)) return;
  if (Date.now() < (window.__previewNavClickLockUntil || 0)) return;
  side = side || document.querySelector(".side");
  if (!side) return;
  const items = [...side.querySelectorAll(".nav-item[data-preview-id]")];
  if (!items.length) return;
  const sideRect = side.getBoundingClientRect();
  let best = null,
    score = Infinity;
  const anchor = sideRect.top + sideRect.height * 0.42;
  for (const item of items) {
    const r = item.getBoundingClientRect();
    if (r.bottom < sideRect.top + 8 || r.top > sideRect.bottom - 8) continue;
    const s = Math.abs((r.top + r.bottom) / 2 - anchor);
    if (s < score) {
      score = s;
      best = item;
    }
  }
  const id = best && best.getAttribute("data-preview-id");
  if (!id) return;
  setActivePreview(id, { scrollNav: false, noSave: true });
  if (opts.scrollText !== false && document.getElementById("wrap_" + id)) {
    scrollWindowToPreview(id, opts.behavior || "auto", "start");
  }
}
function bindPreviewSidebarScrollSync() {
  const side = document.querySelector(".side");
  if (!side || side.dataset.syncBound === "1") return;
  side.dataset.syncBound = "1";
  side.addEventListener(
    "scroll",
    () => {
      if (Date.now() < (window.__previewSideProgrammaticUntil || 0)) return;
      if (window.__previewSideRAF)
        cancelAnimationFrame(window.__previewSideRAF);
      window.__previewSideRAF = requestAnimationFrame(() =>
        updatePreviewFromSidebarViewport(side, {
          scrollText: true,
          behavior: "auto",
        }),
      );
    },
    { passive: true },
  );
}
function jumpToPreviewFromNav(id, behavior = "smooth") {
  if (!id) return;
  const wrap = document.getElementById("wrap_" + id);
  if (!wrap) return;
  window.__previewNavClickLockUntil = Date.now() + 900;
  window.__previewSideProgrammaticUntil = Date.now() + 700;
  setActivePreview(id, { scrollNav: false, noSave: true });
  scrollWindowToPreview(id, behavior, "start");
  if (!state.previewStates) state.previewStates = {};
  const g = state.groups[state.activeIndex];
  if (g)
    state.previewStates[g.no] = {
      ...(state.previewStates[g.no] || {}),
      activePreviewId: id,
    };
  saveState();
}
function scrollToPreview(id) {
  jumpToPreviewFromNav(id, "smooth");
}
function previewGoTop(no) {
  saveCurrentPreviewState();
  const idx = state.groups.findIndex((g) => g.no === no);
  if (idx < 0) return;
  openTab(idx, "input");
  requestAnimationFrame(() =>
    document
      .querySelector("#app .panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" }),
  );
}
function scrollPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function previewGoBottom(no) {
  saveCurrentPreviewState();
  const g = getGroup(no);
  const arr = visiblePreviews(g);
  const last = arr[arr.length - 1];
  if (last) {
    setActivePreview(last.id, { scrollNav: true });
    document
      .getElementById("wrap_" + last.id)
      ?.scrollIntoView({ behavior: "smooth", block: "end" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}
function previewPickLeft(no) {
  rememberFocusedPreviewCursor({ silent: true });
  const ps = (state.previewStates || {})[no] || {};
  const id = ps.cursor && ps.cursor.previewId;
  if (id && document.getElementById("wrap_" + id)) {
    restorePreviewCursor(no);
    return;
  }
  if (
    ps.activePreviewId &&
    document.getElementById("wrap_" + ps.activePreviewId)
  ) {
    setActivePreview(ps.activePreviewId, { scrollNav: true });
    scrollWindowToPreview(ps.activePreviewId, "smooth", "start");
    return;
  }
  if (typeof ps.scrollY === "number") {
    window.scrollTo({ top: ps.scrollY, behavior: "smooth" });
    return;
  }
  toast("पहिले cursor राखिएको preview card भेटिएन।", "danger");
}
function focusEdit(id) {
  id = id || activePreviewIdForCommand();
  if (!id)
    return toast(
      "पहिले कुनै preview card/body मा cursor राख्नुहोस्।",
      "danger",
    );
  const fp = findPreview(id);
  if (!fp) return toast("Active preview भेटिएन।", "danger");
  const pos = capturePreviewPosition(id) || {
    id: id,
    groupNo: fp.g.no,
    scrollY: currentScrollTop(),
  };
  suppressPreviewAutoScroll(1200);
  setActivePreview(id, { scrollNav: false, noSave: true });
  const live = document.getElementById("doc_" + id);
  if (live) {
    fp.p.content = normalizePreviewEditableHtml(live.innerHTML, true);
    live.innerHTML = fp.p.content;
    live.setAttribute("contenteditable", "true");
    live.setAttribute("data-editmode", "true");
    live.setAttribute("data-fullscreen", "true");
    live.setAttribute("spellcheck", "false");
    live
      .querySelectorAll("[contenteditable]")
      .forEach((el) => el.removeAttribute("contenteditable"));
  }
  fp.p.editMode = true;
  fp.p.dirty = true;
  fp.p.saved = false;
  fp.p.updatedAt = Date.now();
  const wrap = document.getElementById("wrap_" + id);
  if (wrap) {
    wrap.classList.add("preview-card-active");
    const left = wrap.querySelector(".docbar-left");
    if (left && !left.querySelector(".full-edit-badge")) {
      left.insertAdjacentHTML(
        "beforeend",
        '<span class="badge warn full-edit-badge">Full edit enabled</span>',
      );
    }
    const savedText = wrap.querySelector(".saved,.unsaved");
    if (savedText) {
      savedText.className = "unsaved";
      savedText.textContent = "Unsaved";
    }
  }
  updateFloatingSaveButton();
  saveState();
  restorePreviewPosition(pos, {
    delay: false,
    scrollNav: false,
    keepSidebar: true,
    noAutoSync: true,
  });
  setTimeout(() => {
    const el = document.getElementById("doc_" + id);
    if (el) {
      el.focus({ preventScroll: true });
      const ps = (state.previewStates || {})[fp.g.no] || {};
      const cur = ps.cursor && ps.cursor.previewId === id ? ps.cursor : null;
      if (cur && typeof cur.offset === "number")
        setSelectionOffsetWithin(el, cur.offset);
      else {
        const r = document.createRange();
        r.selectNodeContents(el);
        r.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
      setActivePreview(id, { scrollNav: false, noSave: true });
      rememberPreviewCursor(id, { silent: true, preserveNav: true });
    }
  }, 40);
  toast(
    "Full edit mode enable भयो। अब active preview को पूरा text edit गर्न मिल्छ।",
    "ok",
  );
}
function printActiveDocument(id) {
  const fp = findPreview(id);
  if (!fp) return toast("Print गर्न document भेटिएन।", "danger");
  const live = document.getElementById("doc_" + id);
  if (live) fp.p.content = live.innerHTML;
  const html = (live && live.innerHTML) || fp.p.content || "";
  const printArea = document.getElementById("printArea");
  if (!printArea) return toast("Print area भेटिएन।", "danger");
  const size =
    Number(fp.g?.settings?.fontSize || state.settings.fontSize || 13) || 13;
  const lineSpacing =
    Number(fp.g?.settings?.lineSpacing || state.settings.lineSpacing || 1.15) ||
    1.15;
  printArea.innerHTML =
    '<div class="doc" style="font-size:' +
    size +
    "pt;line-height:" +
    lineSpacing +
    '">' +
    html +
    "</div>";
  document.body.classList.add("print-mode");
  const cleanup = function () {
    document.body.classList.remove("print-mode");
    printArea.innerHTML = "";
    window.removeEventListener("afterprint", cleanup);
  };
  window.addEventListener("afterprint", cleanup);
  setTimeout(function () {
    window.print();
    setTimeout(cleanup, 1e3);
  }, 80);
  toast("Active document print dialog खोलियो।", "ok");
}
function showPreviewInTable(id) {
  const fp = findPreview(id);
  if (!fp) return toast("Table row भेटिएन।", "danger");
  state.activeIndex = state.groups.findIndex((x) => x.no === fp.g.no);
  state.activeType = "parsed";
  state.tableFocus = {
    groupNo: fp.g.no,
    rowIndex: fp.p.rowIndex,
    previewId: id,
  };
  render();
  setTimeout(function () {
    const row = document.getElementById(
      "sourceRow_" + fp.g.no + "_" + fp.p.rowIndex,
    );
    if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
  toast("Corresponding parsed table row हल्का पहेँलो highlight भयो।", "ok");
}
async function copyPreviewContent(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const html =
    document.getElementById("doc_" + id)?.innerHTML || fp.p.content || "";
  const text = htmlToText(html);
  try {
    await navigator.clipboard.writeText(text);
    toast("Preview content copy भयो", "ok");
  } catch (e) {
    fallbackCopyText(text);
  }
}
function fallbackCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    toast("Preview content copy भयो", "ok");
  } catch (e) {
    toast("Copy गर्न सकिएन।", "danger");
  }
  ta.remove();
}
function markUnsaved(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const live = document.getElementById("doc_" + id);
  if (!fp.p.dirty) fp.p.beforeChangeContent = fp.p.content || "";
  fp.p.content = live ? live.innerHTML : fp.p.content;
  fp.p.dirty = true;
  fp.p.saved = false;
  updateFloatingSaveButton();
  saveState();
}
function savePreview(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const keep = capturePreviewPosition(id) || {
    groupNo: fp.g.no,
    id: id,
    scrollY: currentScrollTop(),
  };
  const live = document.getElementById("doc_" + id);
  const current = live
    ? normalizePreviewEditableHtml(live.innerHTML, fp.p.editMode)
    : fp.p.content;
  fp.p.content = current;
  fp.p.saveId = previewLabel(fp.p);
  commitSave(fp.g, fp.p, keep);
}
function commitSave(g, p, keep) {
  if (!p.dirty) {
    if (p.saved)
      return toast("यो preview पहिले नै saved छ; नयाँ change छैन।", "ok");
    return toast("NOT SAVED as there are NO CHANGES ", "danger");
  }
  if (p.beforeChangeContent) {
    pushTrash(
      { ...p, content: p.beforeChangeContent },
      p.saved
        ? "Previous saved version before new save"
        : "Previous unsaved version before save",
    );
  }
  p.saved = true;
  p.dirty = false;
  p.beforeChangeContent = "";
  p.editMode = false;
  p.updatedAt = Date.now();
  p.previewName = p.previewName || previewLabel(p);
  p.saveId = p.previewName;
  p.editedFileName = p.previewName;
  const item = {
    ...p,
    tableNo: g.no,
    historyId: p.previewName,
    savedAt: Date.now(),
    savedDate: nowDate(),
    savedTime: nowTime(),
    editedFileName: p.previewName,
  };
  const i = g.history.findIndex(
    (h) => h.id === p.id || h.historyId === item.historyId,
  );
  if (i >= 0) g.history[i] = item;
  else g.history.push(item);
  const keepPos = keep || {
    groupNo: g.no,
    id: p.id,
    scrollY: currentScrollTop(),
    sideScrollTop: currentPreviewSideScrollTop(),
  };
  if (!state.previewStates) state.previewStates = {};
  state.previewStates[g.no] = {
    ...(state.previewStates[g.no] || {}),
    activePreviewId: p.id,
    scrollY: keepPos.scrollY,
    sideScrollTop: keepPos.sideScrollTop,
    cursor: keepPos.cursor || (state.previewStates[g.no] || {}).cursor,
  };
  suppressPreviewAutoScroll(1800);
  render();
  restorePreviewPosition(keepPos, {
    delay: 130,
    keepSidebar: true,
    scrollNav: false,
    noAutoSync: true,
  });
  toast(
    "Changed preview same name मा history save भयो। Previous version Trash मा गयो।",
    "ok",
  );
}
function removePreview(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const doRemove = () => {
    const live = document.getElementById("doc_" + id);
    if (live) fp.p.content = live.innerHTML;
    pushTrash(
      { ...fp.p, tableNo: fp.g.no },
      fp.p.saved ? "Saved file removed" : "Unsaved preview removed",
    );
    fp.p.removed = true;
    render();
    toast("Preview Trash मा पठाइयो। Trash बाट restore गर्न सकिन्छ।", "ok");
  };
  if (fp.p.saved)
    return confirmBox(
      "Saved file remove गर्ने?",
      "यो saved preview Trash मा पठाइन्छ। पछि restore गर्न सकिन्छ।",
      doRemove,
    );
  doRemove();
}
function openTrashPanel() {
  const items = state.trash || [];
  const list = items.length
    ? items
        .map(
          (t) =>
            `<div class="nav-item"><div class="nav-row"><div><div class="nav-title">${safe(t.previewName || t.editedFileName || previewLabel(t))}</div><div class="nav-sub">${safe(t.reason || "Trash")} · ${safe(t.deletedDate || "")} ${safe(t.deletedTime || "")}</div></div><div class="nav-actions"><button class="mini" onclick="restoreTrash('${t.trashId}')">Restore</button><button class="mini danger" onclick="deleteTrashForever('${t.trashId}')">Delete</button></div></div></div>`,
        )
        .join("")
    : '<div class="empty">Trash खाली छ।</div>';
  modal.innerHTML = `<div class="modal-card"><div class="modal-title">🗑 Preview Trash <span class="badge trash-count">${items.length}/24</span></div><p class="hint">Trash मा अधिकतम 24 item रहन्छन्; नयाँ थपिँदा पुराना item auto delete हुन्छन्।</p><div class="history-items">${list}</div><div class="modal-actions">${items.length ? '<button class="btn danger" onclick="deleteAllTrash()">Delete all</button>' : ""}<button class="btn" onclick="closeModal()">Close</button></div></div>`;
  modal.classList.remove("hidden");
}
function deleteAllTrash() {
  confirmBox(
    "Trash सबै permanently delete गर्ने?",
    "Trash मा भएका सबै item हट्छन्। यो कार्य फर्काउन सकिँदैन।",
    () => {
      state.trash = [];
      render();
      openTrashPanel();
      toast("Trash खाली भयो", "ok");
    },
  );
}
function restoreTrash(trashId) {
  const i = (state.trash || []).findIndex((t) => t.trashId === trashId);
  if (i < 0) return;
  const t = state.trash.splice(i, 1)[0];
  const g =
    state.groups.find((x) => x.no === t.tableNo) ||
    state.groups[state.activeIndex] ||
    state.groups[0];
  const restored = {
    ...t,
    id: t.originalId || uid(),
    removed: false,
    saved: false,
    editMode: false,
  };
  delete restored.trashId;
  delete restored.originalId;
  const existing = g.previews.findIndex((p) => p.id === restored.id);
  if (existing >= 0) g.previews[existing] = restored;
  else g.previews.push(restored);
  state.activeIndex = state.groups.findIndex((x) => x.no === g.no);
  state.activeType = "preview";
  closeModal();
  render();
  toast("Trash बाट restore भयो", "ok");
}
function deleteTrashForever(trashId) {
  confirmBox(
    "Trash item permanently delete गर्ने?",
    "यो कार्य फर्काउन सकिँदैन।",
    () => {
      state.trash = (state.trash || []).filter((t) => t.trashId !== trashId);
      render();
      openTrashPanel();
      toast("Trash item delete भयो", "ok");
    },
  );
}
function historyView(g) {
  return `<div class="panel"><div class="panel-head"><div class="panel-title">🗂️ History${g.no}</div><div class="preview-tools"><button class="btn primary" onclick="downloadHistoryCombined(${g.no})">📚 History Combined</button><button class="btn danger" onclick="clearHistory(${g.no})">🗑 Clear History${g.no}</button></div></div><div class="panel-body"><div class="history-items">${g.history.length ? g.history.map((h) => historyItem(g, h)).join("") : '<div class="empty">History खाली छ। Preview save गरेपछि यहाँ देखिन्छ।</div>'}</div></div></div><div class="panel"><div class="panel-head"><div class="panel-title">🌐 All Histories</div><div class="preview-tools"><button class="btn primary" onclick="downloadAllHistoryCombined()">📚 All Combined</button></div></div></div>`;
}
function historyItem(g, h) {
  const dt = new Date(h.savedAt);
  const d = h.savedDate || dt.toLocaleDateString("ne-NP");
  const tm = h.savedTime || dt.toLocaleTimeString("ne-NP");
  return `<div class="nav-item"><div class="nav-row"><div><div class="nav-title">${safe(h.editedFileName || h.historyId || h.saveId || h.caseNo || "Saved Order")}</div><div class="nav-sub">Date: ${safe(d)} | Time: ${safe(tm)} | File: ${safe(h.editedFileName || h.historyId || "")} | Case: ${safePreviewLabel(h)}</div></div><div class="nav-actions"><button class="mini" onclick="loadHistory(${g.no},'${h.id}')">Open</button><button class="mini" onclick="downloadHistoryOne(${g.no},'${h.id}')">DOCX</button><button class="mini danger" onclick="deleteHistory(${g.no},'${h.id}')">Delete</button></div></div></div>`;
}
function loadHistory(no, id) {
  const g = getGroup(no);
  const h = g.history.find((x) => x.id === id);
  if (!h) return;
  const p = g.previews.find((x) => x.id === id);
  if (p) Object.assign(p, h, { removed: false });
  else g.previews.push({ ...h, removed: false });
  state.activeIndex = state.groups.findIndex((x) => x.no === no);
  state.activeType = "preview";
  render();
  toast("History preview मा load भयो", "ok");
}
function deleteHistory(no, id) {
  confirmBox("History delete गर्ने?", "यो saved item history बाट हट्छ।", () => {
    const g = getGroup(no);
    g.history = g.history.filter((x) => x.id !== id);
    const p = g.previews.find((x) => x.id === id);
    if (p) {
      p.saved = false;
      p.saveId = "";
    }
    render();
    toast("History item delete भयो", "ok");
  });
}
function clearHistory(no) {
  confirmBox("पूरै History खाली गर्ने?", "यो कार्य फर्काउन सकिँदैन।", () => {
    const g = getGroup(no);
    g.history = [];
    g.previews.forEach((p) => {
      p.saved = false;
      p.saveId = "";
    });
    render();
    toast("History खाली भयो", "ok");
  });
}
function showSettings() {
  const g = state.groups[state.activeIndex] || {};
  ensureGroupSettings(g);
  const s = g.settings || state.settings;
  const title = g.no
    ? `⚙️ Settings for InputTable${g.no}`
    : "⚙️ Table Settings";
  const dark = document.body.getAttribute("data-theme") === "dark";
  modal.innerHTML = `<div class="modal-card"><div class="modal-title">${safe(title)}</div><div class="hint" style="margin-bottom:10px">अदालत र पेशी मिति InputTable बाट आउँछन्। <b>इजलास</b> र <b>न्यायाधीश</b> field Settings मा manual/independent छन्; न्यायाधीश field preview मा judge-name भन्दा अगाडिको prefix हो।</div><div class="settings-toolbar"><div class="settings-toolbar-left"><div class="tools-wrapper settings-tools"><button id="settingsToolsBtn" class="btn" onclick="toggleSettingsToolsMenu()">🧰 Tools ▾</button><div id="settingsToolsMenu" class="tools-menu hidden">${settingsToolsMenuHtml(g)}</div></div><span class="hint">Tools र theme अब Settings भित्र छन्।</span></div><button id="settingsThemeBtn" class="btn icon settings-theme-btn" title="Light/Dark" onclick="toggleTheme()">${dark ? "🌙" : "☀️"}</button></div><div class="grid-3"><div><label>इजलास</label><input id="setBench" value="${safe(s.bench || "इजलास")}"></div><div><label>न्यायाधीश</label><input id="setJudge" value="${safe(s.judge || DEFAULT_JUDGE)}"></div><div><label>Signature</label><input id="setSig" value="${safe(s.signature || DEFAULT_SIGNATURE)}"></div><div><label>Font size</label><input id="setFont" type="number" value="${safe(s.fontSize)}"></div><div><label>Line spacing</label><input id="setLineSpacing" type="number" step="0.05" min="0.5" value="${safe(s.lineSpacing || 1.15)}"></div></div><br><label>Default order body text</label><textarea id="setBody">${safe(s.body)}</textarea><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="applySettings()">Save Settings</button></div></div>`;
  modal.classList.remove("hidden");
}
function settingsToolsMenuHtml(g) {
  const idx = Math.max(0, state.activeIndex || 0);
  const no = (g && g.no) || (state.groups[idx] && state.groups[idx].no) || 1;
  return `<button class="btn sm" onclick="closeModal();openTab(${idx},'input')">⌨️ InputTable${no}</button><button class="btn sm" onclick="closeModal();openTab(${idx},'parsed')">📊 Parsed Table${no}</button><button class="btn sm" onclick="closeModal();openTab(${idx},'history')">🗂️ History${no}</button><button class="btn sm primary" onclick="closeModal();addTableGroup()">＋ Add Table</button>`;
}
function toggleSettingsToolsMenu(open) {
  const menu = document.getElementById("settingsToolsMenu");
  if (!menu) return;
  const btn = document.getElementById("settingsToolsBtn");
  const isOpen = !menu.classList.contains("hidden");
  const shouldOpen = open === undefined ? !isOpen : !!open;
  menu.classList.toggle("hidden", !shouldOpen);
  if (btn) btn.setAttribute("aria-expanded", shouldOpen);
}
async function applySettings() {
  const g = state.groups[state.activeIndex];
  ensureGroupSettings(g);
  const current = g ? g.settings : state.settings;
  const newSettings = {
    ...current,
    bench: setBench.value || "इजलास",
    judge: setJudge.value || DEFAULT_JUDGE,
    signature: setSig.value || DEFAULT_SIGNATURE,
    body: setBody.value,
    fontSize: Number(setFont.value) || 13,
    lineSpacing: Number(setLineSpacing.value) || 1.15,
  };
  if (g) {
    g.settings = newSettings;
  } else {
    state.settings = newSettings;
  }
  closeModal();
  render();
  toast("Settings save भयो", "ok");
}
function toggleTheme() {
  const b = document.body;
  const dark = b.getAttribute("data-theme") === "dark";
  b.setAttribute("data-theme", dark ? "light" : "dark");
  const nextIcon = dark ? "☀️" : "🌙";
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = nextIcon;
  const sbtn = document.getElementById("settingsThemeBtn");
  if (sbtn) sbtn.textContent = nextIcon;
}
function closeModal() {
  const box = actionModal();
  if (!box) return;
  window.__lastDownloadFormat =
    box.querySelector('select[id^="downloadFormat_"]')?.value ||
    window.__lastDownloadFormat ||
    "docx";
  box.classList.add("hidden");
  box.innerHTML = "";
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
window.addEventListener("click", (e) => {
  const box = actionModal();
  if (box && !box.classList.contains("hidden") && e.target === box)
    closeModal();
});
function promptBox(title, placeholder, cb, defaultValue = "") {
  modal.innerHTML = `<div class="modal-card"><div class="modal-title">${safe(title)}</div><input id="modalInput" placeholder="${safe(placeholder)}" value="${safe(defaultValue)}" autofocus><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="const v=document.getElementById('modalInput').value; closeModal(); window.__promptCb(v)">OK</button></div></div>`;
  window.__promptCb = cb;
  modal.classList.remove("hidden");
  setTimeout(() => {
    modalInput?.focus();
    modalInput?.select();
  }, 50);
}
function confirmBox(title, msg, yes) {
  modal.innerHTML = `<div class="modal-card"><div class="modal-title">${safe(title)}</div><p class="hint">${safe(msg)}</p><div class="modal-actions"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn danger" onclick="closeModal(); window.__confirmYes()">Confirm</button></div></div>`;
  window.__confirmYes = yes;
  modal.classList.remove("hidden");
}
function compactDateForFile(dateStr) {
  const normalized = normalizeDateInput(dateStr || todayNepaliLike());
  const compact = toEng(normalized).replace(/[^0-9]/g, "");
  return compact || toEng(todayNepaliLike()).replace(/[^0-9]/g, "");
}
function compactDateYyMmDdForFile(dateStr) {
  const compact = compactDateForFile(dateStr);
  if (compact.length >= 8) return compact.slice(2, 8);
  if (compact.length === 6) return compact;
  return compact.padStart(6, "0").slice(-6);
}
function extractBenchNoFromText(txt = "") {
  const raw = String(txt || "");
  const eng = toEng(raw);
  const m =
    eng.match(/(?:इजलास|इजलाश|bench|court)\s*[-:：]?\s*([0-9]+)/i) ||
    eng.match(/([0-9]+)/);
  return m ? toNep(m[1]) : "";
}
function selectedSourceBlockForGroup(g, sourceBlockId = "") {
  if (!g) return null;
  const blocks = g.sourceBlocks || [];
  if (sourceBlockId) return blocks.find((b) => b.id === sourceBlockId) || null;
  if (g.selectedSourceBlock === ALL_SOURCE_BLOCKS)
    return blocks.find((b) => b.id === g.activeSourceBlock) || null;
  return (
    blocks.find((b) => b.id === g.selectedSourceBlock) ||
    blocks.find((b) => b.id === g.activeSourceBlock) ||
    null
  );
}
function courtCodeFromGroup(g) {
  const block = selectedSourceBlockForGroup(g);
  const rows = (block && block.rows) || g.rows || [];
  for (const row of rows) {
    const o = rowObj(g, row);
    const reg = String(o.registrationNo || "").trim();
    const m = toEng(reg).match(/^([0-9]{1,3})-/);
    if (m) return toNep(m[1]);
  }
  const raw = String(g.input || "");
  const url =
    raw.match(/(?:daily|viewStagit)\/(\d{1,3})\//i) ||
    raw.match(/(?:daily|viewStagit)\/(\d{1,3})(?:["'\s>])/i);
  if (url) return toNep(url[1]);
  return "";
}
function benchNoFromGroup(g) {
  const block = selectedSourceBlockForGroup(g);
  return (
    extractBenchNoFromText((block && block.label) || "") ||
    extractBenchNoFromText((block && block.bench) || "") ||
    extractBenchNoFromText(g?.settings?.bench || "") ||
    toNep(g?.no || 1)
  );
}
function nepaliOrdinalForPreview(n) {
  const ord = [
    "",
    "पहिलो",
    "दोस्रो",
    "तेस्रो",
    "चौथो",
    "पाँचौं",
    "छैटौं",
    "सातौं",
    "आठौं",
    "नवौं",
    "दशौं",
    "एघारौं",
    "बाह्रौं",
    "तेह्रौं",
    "चौधौं",
    "पन्ध्रौं",
    "सोह्रौं",
    "सत्रौं",
    "अठारौं",
    "उन्नाइसौं",
    "बीसौं",
  ];
  n = Number(toEng(String(n || 1))) || 1;
  return ord[n] || `${toNep(n)}औं`;
}
function combinedFileNameForGroup(g) {
  const date = compactDateYyMmDdForFile(
    g?.settings?.date || state.settings.date,
  );
  const bench = benchNoFromGroup(g);
  const previewOrder = nepaliOrdinalForPreview(
    g?.no || state.activeIndex + 1 || 1,
  );
  return `${date}_इजलास${bench}_${previewOrder}.docx`;
}
function latestPreviewHtml(p) {
  const live = document.getElementById("doc_" + p.id);
  if (live) {
    p.content = normalizePreviewEditableHtml(live.innerHTML, p.editMode);
    return p.content;
  }
  return p.content || "";
}
async function downloadOne(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const live = document.getElementById("doc_" + id);
  const html = live
    ? normalizePreviewEditableHtml(live.innerHTML, fp.p.editMode)
    : fp.p.content || "";
  fp.p.content = html;
  await saveDocx(`${fileSafe(previewDocxLabel(fp.p))}.docx`, [
    {
      html: html,
      settings: fp.g.settings || state.settings,
      previewName: previewDocxLabel(fp.p),
    },
  ]);
}
function wordDocHtml(content, settings = {}) {
  const size = Number(settings.fontSize || 13) || 13;
  const lineSpacing = Number(settings.lineSpacing || 1.15) || 1.15;
  const holder = document.createElement("div");
  holder.innerHTML = normalizePreviewEditableHtml(content, false);
  holder
    .querySelectorAll("[contenteditable]")
    .forEach((el) => el.removeAttribute("contenteditable"));
  return `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="UTF-8"><title>Court Order</title><style>@page{size:A4;margin:22mm 18mm}body{font-family:Kalimati,'Noto Sans Devanagari',serif;font-size:${size}pt;line-height:${lineSpacing};color:#111}.center,.title,.case-line,.issue-line{text-align:center}.title,.issue-line{text-decoration:underline}.case-line,.case-line *,.decision-meta,.decision-meta *{text-decoration:none}.party-line{display:flex;margin:4px 0}.party-name{flex:0 1 auto}.dots{flex:1;border-bottom:1px dotted #555}.party-role{white-space:nowrap}.decision-meta{text-align:center;margin:8px auto 12px;font-weight:bold}.decision-meta-row{display:block;text-align:center}.body{text-align:justify;white-space:pre-wrap}.sig{text-align:right;margin-top:32px}.iti-line{text-align:left;margin-top:22px}</style></head><body>${holder.innerHTML}</body></html>`;
}
function downloadOneDoc(id) {
  const fp = findPreview(id);
  if (!fp) return;
  const live = document.getElementById("doc_" + id);
  const html = live
    ? normalizePreviewEditableHtml(live.innerHTML, fp.p.editMode)
    : fp.p.content || "";
  fp.p.content = html;
  const blob = new Blob(
    ["\ufeff", wordDocHtml(html, fp.g.settings || state.settings)],
    { type: "application/msword;charset=utf-8" },
  );
  downloadBlob(blob, `${fileSafe(previewDocxLabel(fp.p))}.doc`);
  toast(".doc download भयो", "ok");
}
function downloadSelectedFormat(id, formatRef = "docx") {
  const format =
    formatRef === "doc" || formatRef === "docx"
      ? formatRef
      : window.__lastDownloadFormat || "docx";
  window.__lastDownloadFormat = "docx";
  return format === "doc" ? downloadOneDoc(id) : downloadOne(id);
}
async function downloadVisibleZip(no) {
  const g = getGroup(no);
  const arr = visiblePreviews(g);
  if (!arr.length) return toast("ZIP बनाउन preview छैन।", "danger");
  const zip = new JSZip();
  for (const p of arr) {
    const blob = await makeDocxBlob([
      {
        html: latestPreviewHtml(p),
        settings: g.settings || state.settings,
        previewName: previewDocxLabel(p),
      },
    ]);
    zip.file(`${fileSafe(previewDocxLabel(p) || "order")}.docx`, blob);
  }
  downloadBlob(
    await zip.generateAsync({ type: "blob" }),
    `Preview${no}_orders.zip`,
  );
}
async function downloadVisibleCombined(no) {
  const g = getGroup(no);
  const arr = visiblePreviews(g);
  if (!arr.length) return toast("Combined बनाउन preview छैन।", "danger");
  await saveDocx(
    combinedFileNameForGroup(g),
    arr.map((p) => ({
      html: latestPreviewHtml(p),
      settings: g.settings || state.settings,
      previewName: previewDocxLabel(p),
    })),
  );
}
async function downloadHistoryOne(no, id) {
  const g = getGroup(no);
  const h = g.history.find((x) => x.id === id);
  if (h)
    await saveDocx(
      `${fileSafe(h.historyId || previewLabel(h) || "saved")}.docx`,
      [
        {
          html: h.content,
          settings: g.settings || state.settings,
          previewName: h.previewName || previewLabel(h),
        },
      ],
    );
}
async function downloadHistoryCombined(no) {
  const g = getGroup(no);
  if (!g.history.length) return toast("History खाली छ।", "danger");
  await saveDocx(
    `History${no}_combined.docx`,
    g.history.map((h) => ({
      html: h.content,
      settings: g.settings || state.settings,
      previewName: h.previewName || previewLabel(h),
    })),
  );
}
async function downloadAllHistoryCombined() {
  const items = state.groups.flatMap((g) =>
    g.history.map((h) => ({
      html: h.content,
      settings: g.settings || state.settings,
      previewName: h.previewName || previewLabel(h),
    })),
  );
  if (!items.length) return toast("History खाली छ।", "danger");
  await saveDocx("All_Histories_combined.docx", items);
}
function htmlToText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText.replace(/\u00a0/g, " ").replace(/\n{3,}/g, "\n\n");
}
function textOnly(el) {
  return (el?.innerText || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function textBlock(el) {
  return (el?.innerText || "")
    .replace(/\u00a0/g, " ")
    .split(/\n/)
    .map((x) => x.replace(/[ \t\f\v]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
function stripPrefix(txt, rx) {
  return String(txt || "")
    .replace(rx, "")
    .trim();
}
function extractDocParts(html, fs) {
  const div = document.createElement("div");
  div.innerHTML = html || "";
  const exportCaseLine = div.querySelector(".case-line");
  if (exportCaseLine) {
    exportCaseLine
      .querySelectorAll("u,ins")
      .forEach((el) => el.replaceWith(...el.childNodes));
    exportCaseLine.querySelectorAll("[style]").forEach((el) => {
      el.style.removeProperty("text-decoration");
      el.style.removeProperty("text-decoration-line");
      if (!el.getAttribute("style")?.trim()) el.removeAttribute("style");
    });
    exportCaseLine.style.removeProperty("text-decoration");
  }
  const decisionMeta = div.querySelector(".decision-meta");
  const decisionField = (name) =>
    textOnly(
      decisionMeta?.querySelector(
        `[data-decision-field="${name}"] span:last-child`,
      ),
    );
  const centers = [
    ...div.querySelectorAll(
      ":scope > .center, :scope > .title, :scope > .case-line",
    ),
  ].filter((el) => !el.classList.contains("shree-line"));
  const partyLines = [...div.querySelectorAll(".party-line")];
  const caseLine = textOnly(div.querySelector(".case-line"));
  const issueLine = textOnly(div.querySelector(".issue-line"));
  const itiLine =
    textOnly(div.querySelector(".iti-text")) ||
    textOnly(div.querySelector(".iti-line"));
  const fallback = htmlToText(html);
  fs = fs || state.settings || {};
  const caseLabelLine = caseLine || "";
  const extractedCaseNo =
    stripPrefix(caseLabelLine, /^(?:मुद्दा|निवेदन)\s*नं\s*\.\s*-?\s*/i) || "";
  const defaultCaseLabel = /निवेदन/i.test(caseLabelLine)
    ? "निवेदन नं.-"
    : "मुद्दा नं.-";
  const caseLabel = /FN/i.test(toEng(extractedCaseNo))
    ? "निवेदन नं.-"
    : defaultCaseLabel;
  const issueRawLabel = (issueLine.match(/^(मुद्दा|विषयः?)/i) || [])[1] || "";
  const issueLabel = issueRawLabel
    ? /^विषय/i.test(issueRawLabel)
      ? "विषयः"
      : "मुद्दा"
    : "मुद्दा";
  return {
    shree: textOnly(div.querySelector(".shree-line")) || "श्री",
    court: textOnly(centers[0]) || fs.court || "काठमाडौं जिल्ला अदालत",
    courtHtml: centers[0] ? centers[0].innerHTML : "",
    bench: textOnly(centers[1]) || fs.bench || "इजलास",
    benchHtml: centers[1] ? centers[1].innerHTML : "",
    judge: textOnly(centers[2]) || fs.judge || DEFAULT_JUDGE,
    judgeHtml: centers[2] ? centers[2].innerHTML : "",
    orderTitle: textOnly(div.querySelector(".title")) || "आदेश",
    orderTitleHtml: div.querySelector(".title")
      ? div.querySelector(".title").innerHTML
      : "",
    decisionMode:
      !!decisionMeta || /^फैसला/.test(textOnly(div.querySelector(".title"))),
    isDecision: /^फैसला(?:\s|$)/.test(
      textOnly(div.querySelector(".title")),
    ),
    decisionCaseNo: decisionField("caseNo"),
    decisionRegDate: extractDateOnly(decisionField("regDate")),
    decisionRegistrationNo: decisionField("registrationNo"),
    decisionNo: decisionField("decisionNo"),
    caseNo: extractedCaseNo,
    caseLineHtml: div.querySelector(".case-line")
      ? div.querySelector(".case-line").innerHTML
      : "",
    caseLabel: caseLabel,
    party1: textOnly(partyLines[0]?.querySelector(".party-name")) || "",
    party1Html: partyLines[0]?.querySelector(".party-name")
      ? partyLines[0].querySelector(".party-name").innerHTML
      : "",
    party1Role: textOnly(partyLines[0]?.querySelector(".party-role")) || "वादी",
    party1RoleHtml: partyLines[0]?.querySelector(".party-role")
      ? partyLines[0].querySelector(".party-role").innerHTML
      : "",
    party2: textOnly(partyLines[1]?.querySelector(".party-name")) || "",
    party2Html: partyLines[1]?.querySelector(".party-name")
      ? partyLines[1].querySelector(".party-name").innerHTML
      : "",
    party2Role:
      textOnly(partyLines[1]?.querySelector(".party-role")) || "प्रतिवादी",
    party2RoleHtml: partyLines[1]?.querySelector(".party-role")
      ? partyLines[1].querySelector(".party-role").innerHTML
      : "",
    issue:
      stripPrefix(issueLine, /^(?:मुद्दा|विषयः?)\s*[-ः:]?\s*/i).replace(
        /[।.]+$/,
        "",
      ) || "",
    issueLineHtml: div.querySelector(".issue-line")
      ? div.querySelector(".issue-line").innerHTML
      : "",
    issueLabel: issueLabel,
    body: textBlock(div.querySelector(".body")) || fs.body || "[text area]",
    bodyHtml: div.querySelector(".body")
      ? div.querySelector(".body").innerHTML
      : "",
    signature:
      textOnly(div.querySelector(".sig")) || fs.signature || DEFAULT_SIGNATURE,
    signatureHtml: div.querySelector(".sig")
      ? div.querySelector(".sig").innerHTML
      : "",
    iti: itiLine || formatItiDate(fs.date || ""),
    itiHtml: div.querySelector(".iti-text")
      ? div.querySelector(".iti-text").innerHTML
      : div.querySelector(".iti-line")
        ? div.querySelector(".iti-line").innerHTML
        : "",
    fallback: fallback,
  };
}
function normalizeDocxSpaces(s = "") {
  return String(s ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t\f\v]+/g, " ");
}
function rXml(text, opt = {}, fs) {
  const b = opt.bold ? "<w:b/><w:bCs/>" : "";
  const i = opt.italic ? "<w:i/><w:iCs/>" : "";
  const u = opt.underline ? '<w:u w:val="single"/>' : "";
  const c = opt.color ? `<w:color w:val="${opt.color}"/>` : "";
  const sz = String(((fs && fs.fontSize) || state.settings.fontSize || 13) * 2);
  const clean = normalizeDocxSpaces(text);
  return `<w:r><w:rPr><w:rFonts w:ascii="Kalimati" w:hAnsi="Kalimati" w:eastAsia="Kalimati" w:cs="Kalimati"/>${b}${i}${u}${c}<w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/><w:cs/></w:rPr><w:t xml:space="preserve">${xmlEsc(clean)}</w:t></w:r>`;
}
function tabXml(fs) {
  const sz = String(((fs && fs.fontSize) || state.settings.fontSize || 13) * 2);
  return `<w:r><w:rPr><w:rFonts w:ascii="Kalimati" w:hAnsi="Kalimati" w:eastAsia="Kalimati" w:cs="Kalimati"/><w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/></w:rPr><w:tab/></w:r>`;
}
function pXml(children, opt = {}) {
  let ppr = "";
  if (opt.align) ppr += `<w:jc w:val="${opt.align}"/>`;
  if (opt.style) ppr += `<w:pStyle w:val="${opt.style}"/>`;
  if (opt.tabs)
    ppr +=
      '<w:tabs><w:tab w:val="right" w:leader="dot" w:pos="9638"/></w:tabs>';
  let spacing = opt.spacing !== undefined ? String(opt.spacing) : 'w:after="0"';
  if (opt.lineSpacing) {
    spacing +=
      (spacing ? " " : "") +
      `w:line="${Math.round(Number(opt.lineSpacing) * 240)}" w:lineRule="auto"`;
  }
  if (spacing) ppr += `<w:spacing ${spacing}/>`;
  return `<w:p>${ppr ? `<w:pPr>${ppr}</w:pPr>` : ""}${children}</w:p>`;
}
function styledOptionsFromNode(node, opt = {}) {
  const tag = (node.tagName || "").toLowerCase();
  const style = (node.getAttribute("style") || "").toLowerCase();
  const next = { ...opt };
  if (
    ["b", "strong"].includes(tag) ||
    /font-weight\s*:\s*(bold|[6-9]00)/.test(style)
  )
    next.bold = true;
  if (["i", "em"].includes(tag) || /font-style\s*:\s*italic/.test(style))
    next.italic = true;
  if (["u", "ins"].includes(tag) || /text-decoration[^;]*underline/.test(style))
    next.underline = true;
  return { tag: tag, next: next };
}
function richInlineRunsFromHtml(html, fs, baseOpt = {}) {
  const container = document.createElement("span");
  container.innerHTML = html || "";
  const runs = [];
  function pushInlineText(txt, opt) {
    txt = String(txt || "")
      .replace(/\u00a0/g, " ")
      .replace(/[ \t\f\v]+/g, " ");
    if (txt) runs.push({ text: txt, opt: { ...opt } });
  }
  function walkInline(node, opt = {}) {
    if (node.nodeType === Node.TEXT_NODE) {
      pushInlineText(node.nodeValue, opt);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const { tag: tag, next: next } = styledOptionsFromNode(node, opt);
    if (tag === "br") {
      pushInlineText("\n", next);
      return;
    }
    node.childNodes.forEach((ch) => walkInline(ch, next));
  }
  container.childNodes.forEach((ch) => walkInline(ch, { ...baseOpt }));
  if (!runs.length && container.textContent)
    runs.push({ text: container.textContent, opt: { ...baseOpt } });
  return runs;
}
function richInlineXmlFromHtml(html, text, opt = {}, fs) {
  const runs =
    html && String(html).trim() ? richInlineRunsFromHtml(html, fs, opt) : [];
  if (runs.length) return runs.map((r) => rXml(r.text, r.opt, fs)).join("");
  return rXml(text || "", opt, fs);
}
function pRichText(html, text, opt = {}, fs) {
  return pXml(richInlineXmlFromHtml(html, text, opt, fs), opt);
}
function pPartyRich(nameHtml, name, roleHtml, role, fs) {
  return pXml(
    richInlineXmlFromHtml(
      nameHtml,
      name || "........................",
      {},
      fs,
    ) +
      tabXml(fs) +
      richInlineXmlFromHtml(roleHtml, role || "", {}, fs),
    {
      tabs: true,
      lineSpacing: (fs && fs.lineSpacing) || state.settings.lineSpacing || 1.15,
    },
  );
}
function pText(text, opt = {}, fs) {
  return pXml(rXml(text, opt, fs), opt);
}
function pBlank() {
  return '<w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>';
}
function richRunsFromHtml(html, fs) {
  const container = document.createElement("div");
  container.innerHTML = html || "";
  const paragraphs = [];
  let current = [];
  function pushBlockText(txt, opt) {
    txt = String(txt || "").replace(/ /g, " ");
    if (!txt) return;
    txt = txt.replace(/[ 	]+/g, " ");
    if (txt) current.push({ text: txt, opt: { ...opt } });
  }
  function walkBlock(node, opt = {}) {
    if (node.nodeType === Node.TEXT_NODE) {
      pushBlockText(node.nodeValue, opt);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const { tag: tag, next: next } = styledOptionsFromNode(node, opt);
    if (tag === "br") {
      paragraphs.push(current);
      current = [];
      return;
    }
    if (["div", "p"].includes(tag) && current.length) {
      paragraphs.push(current);
      current = [];
    }
    node.childNodes.forEach((ch) => walkBlock(ch, next));
    if (["div", "p"].includes(tag) && current.length) {
      paragraphs.push(current);
      current = [];
    }
  }
  container.childNodes.forEach((ch) => walkBlock(ch, {}));
  if (current.length) paragraphs.push(current);
  if (!paragraphs.length) paragraphs.push([{ text: "", opt: {} }]);
  return paragraphs
    .map((runs) =>
      pXml(
        runs.map((r) => rXml(r.text, r.opt, fs)).join(""),
        {
          align: "both",
          spacing: 'w:after="0"',
          lineSpacing:
            (fs && fs.lineSpacing) || state.settings.lineSpacing || 1.15,
        },
        fs,
      ),
    )
    .join("");
}
function pBody(text, fs, html = "") {
  if (html && String(html).trim()) return richRunsFromHtml(html, fs);
  const lines = String(text || "")
    .split(/\n/)
    .map((line) => line.replace(/[ \t\f\v]+/g, " ").trim());
  return lines
    .map((line) =>
      pXml(
        rXml(line || "", {}, fs),
        {
          align: "both",
          spacing: 'w:after="0"',
          lineSpacing:
            (fs && fs.lineSpacing) || state.settings.lineSpacing || 1.15,
        },
        fs,
      ),
    )
    .join("");
}
function docPartXml(parts, fs, headingLabel) {
  const issueLabel = parts.issueLabel || "मुद्दा";
  const lineSpacing =
    (fs && fs.lineSpacing) || state.settings.lineSpacing || 1.15;
  const issue = parts.issue
    ? `${issueLabel} - ${parts.issue}${/[।.]$/.test(parts.issue) ? "" : "।"}`
    : `${issueLabel} - ........................`;
  const caseNo = parts.caseNo
    ? `${parts.caseLabel || "मुद्दा नं.-"}${parts.caseNo}`
    : "मुद्दा नं.-........................";
  const headingCaseNo = parts.decisionMode
    ? parts.decisionCaseNo
    : parts.caseNo;
  const headingText =
    headingLabel ||
    `${parts.orderTitle || "आदेश"}${headingCaseNo ? ` - ${headingCaseNo}` : ""}`;
  const decisionDetails = parts.decisionMode
    ? [
        pText(
          `मुद्दा नम्बर- ${parts.decisionCaseNo || "........................"}`,
          { align: "center", bold: true, lineSpacing: lineSpacing },
          fs,
        ),
        pText(
          `मुद्दा दर्ता मिति- ${parts.decisionRegDate || "........................"}`,
          { align: "center", bold: true, lineSpacing: lineSpacing },
          fs,
        ),
        pText(
          `रजिष्ट्रेशन नम्बर- ${parts.decisionRegistrationNo || "........................"}`,
          { align: "center", bold: true, lineSpacing: lineSpacing },
          fs,
        ),
        pText(
          `निर्णय नम्बर- ${parts.decisionNo || "........................"}`,
          {
            align: "center",
            bold: true,
            spacing: 'w:after="120"',
            lineSpacing: lineSpacing,
          },
          fs,
        ),
      ]
    : [
        pRichText(
          parts.caseLineHtml,
          caseNo,
          { align: "center", bold: true, lineSpacing: lineSpacing },
          fs,
        ),
        pBlank(),
      ];
  const front = [
    pText(
      headingText,
      {
        align: "center",
        bold: true,
        style: "Heading1",
        color: "FFFFFF",
        lineSpacing: lineSpacing,
      },
      fs,
    ),
    pText(
      parts.shree || "श्री",
      { align: "center", bold: true, lineSpacing: lineSpacing },
      fs,
    ),
    pRichText(
      parts.courtHtml,
      parts.court,
      { align: "center", bold: true, lineSpacing: lineSpacing },
      fs,
    ),
    pRichText(
      parts.benchHtml,
      parts.bench,
      { align: "center", lineSpacing: lineSpacing },
      fs,
    ),
    pRichText(
      parts.judgeHtml,
      parts.judge,
      { align: "center", bold: true, lineSpacing: lineSpacing },
      fs,
    ),
    pRichText(
      parts.orderTitleHtml,
      parts.orderTitle || "आदेश",
      { align: "center", bold: true, lineSpacing: lineSpacing },
      fs,
    ),
    ...decisionDetails,
    pPartyRich(
      parts.party1Html,
      parts.party1,
      parts.party1RoleHtml,
      parts.party1Role || "वादी",
      fs,
    ),
    pText(
      "विरुद्ध",
      { align: "center", bold: true, lineSpacing: lineSpacing },
      fs,
    ),
    pPartyRich(
      parts.party2Html,
      parts.party2,
      parts.party2RoleHtml,
      parts.party2Role || "प्रतिवादी",
      fs,
    ),
    pRichText(
      parts.issueLineHtml,
      issue,
      {
        align: "center",
        bold: true,
        underline: true,
        spacing: 'w:before="80" w:after="120"',
        lineSpacing: lineSpacing,
      },
      fs,
    ),
  ].join("");
  const decisionAssistance = parts.isDecision
    ? [
        pText(
          "फैसला तयार गर्न सहयोग गर्ने",
          {
            underline: true,
            spacing: 'w:before="120" w:after="0"',
            lineSpacing: lineSpacing,
          },
          fs,
        ),
        pText(
          "शाखा अधिकृत-",
          { lineSpacing: lineSpacing },
          fs,
        ),
        pText(
          "कम्प्युटर अपरेटर-",
          { lineSpacing: lineSpacing },
          fs,
        ),
        pText(
          "फैसला प्रमाणीकरण मिति-",
          { lineSpacing: lineSpacing },
          fs,
        ),
      ]
    : [];
  const body = [
    pBody(parts.body, fs, parts.bodyHtml),
    pBlank(),
    pRichText(
      parts.signatureHtml,
      parts.signature,
      { align: "right", lineSpacing: lineSpacing },
      fs,
    ),
    pXml(
      richInlineXmlFromHtml(
        parts.itiHtml,
        parts.iti.replace(/\s*\.*$/, ""),
        {},
        fs,
      ) + tabXml(fs),
      { tabs: true, lineSpacing: lineSpacing },
    ),
    ...decisionAssistance,
  ].join("");
  return { front: front, body: body };
}
function sectionPropertiesXml(vertical = "top", type = "") {
  return `<w:sectPr>${type ? `<w:type w:val="${type}"/>` : ""}<w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="708" w:footer="708" w:gutter="0"/><w:vAlign w:val="${vertical}"/><w:cols w:space="720"/><w:docGrid w:linePitch="360"/></w:sectPr>`;
}
function sectionBreakXml(vertical = "top") {
  return `<w:p><w:pPr>${sectionPropertiesXml(vertical, "nextPage")}</w:pPr></w:p>`;
}
function minimalDocxXml(bodyXml) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${bodyXml}${sectionPropertiesXml("top")}</w:body></w:document>`;
}
function contentTypesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/><Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;
}
function relsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`;
}
function docRelsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/></Relationships>`;
}
function stylesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:rPr><w:rFonts w:ascii="Kalimati" w:hAnsi="Kalimati" w:eastAsia="Kalimati" w:cs="Kalimati"/><w:sz w:val="26"/><w:szCs w:val="26"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:spacing w:before="240" w:after="0"/></w:pPr><w:rPr><w:rFonts w:ascii="Kalimati" w:hAnsi="Kalimati" w:eastAsia="Kalimati" w:cs="Kalimati"/><w:b/><w:sz w:val="32"/><w:szCs w:val="32"/></w:rPr></w:style></w:styles>`;
}
function settingsXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:defaultTabStop w:val="720"/><w:characterSpacingControl w:val="doNotCompress"/><w:compat/></w:settings>`;
}
function fontTableXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:fonts xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:font w:name="Kalimati"><w:charset w:val="00"/><w:family w:val="auto"/><w:pitch w:val="variable"/></w:font></w:fonts>`;
}
function coreXml() {
  const d = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Court Order</dc:title><dc:creator>Cause List Order Generator</dc:creator><cp:lastModifiedBy>Cause List Order Generator</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${d}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${d}</dcterms:modified></cp:coreProperties>`;
}
function appXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Cause List Order Generator</Application></Properties>`;
}
async function makeDocxBlob(items) {
  const zip = new JSZip();
  let bodyXml = "";
  items.forEach((it, idx) => {
    const fs = it.settings || state.settings;
    const part = docPartXml(
      extractDocParts(it.html, fs),
      fs,
      it.previewName || it.label,
    );
    if (idx) bodyXml += sectionBreakXml("top");
    bodyXml += part.front + part.body;
  });
  zip.file("[Content_Types].xml", contentTypesXml());
  zip.folder("_rels").file(".rels", relsXml());
  const word = zip.folder("word");
  word.file("document.xml", minimalDocxXml(bodyXml));
  word.file("styles.xml", stylesXml());
  word.file("settings.xml", settingsXml());
  word.file("fontTable.xml", fontTableXml());
  word.folder("_rels").file("document.xml.rels", docRelsXml());
  zip.folder("docProps").file("core.xml", coreXml());
  zip.folder("docProps").file("app.xml", appXml());
  return await zip.generateAsync({
    type: "blob",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
}
async function saveDocx(name, items) {
  try {
    downloadBlob(await makeDocxBlob(items), name);
    toast("DOCX designated format मा download भयो", "ok");
  } catch (e) {
    console.error(e);
    toast("DOCX generation fail भयो।", "danger");
  }
}
function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 500);
}
document.addEventListener(
  "click",
  (e) => {
    const target = e.target;
    if (!target || !target.closest) return;
    const blocked = target.closest(
      ".ellipsis-btn[data-preview-menu],button,select,input,textarea,a",
    );
    if (blocked) return;
    const nav = target.closest(".nav-item[data-preview-id]");
    if (!nav || !nav.closest(".side")) return;
    const id = nav.getAttribute("data-preview-id");
    if (!id) return;
    e.preventDefault();
    e.stopPropagation();
    jumpToPreviewFromNav(id, "smooth");
  },
  true,
);
document.addEventListener("click", (e) => {
  const menuBtn =
    e.target && e.target.closest
      ? e.target.closest(".ellipsis-btn[data-preview-menu]")
      : null;
  if (menuBtn) {
    e.preventDefault();
    e.stopPropagation();
    openPreviewActionSheet(menuBtn.getAttribute("data-preview-menu"));
    return;
  }
  if (e.target && e.target.id === "modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
window.addEventListener(
  "scroll",
  () => {
    if (state.activeType === "preview") requestPreviewScrollSync(false);
  },
  { passive: true },
);
loadState();
loadOrderVarieties()
  .then(() => {
    render();
  })
  .catch((e) => {
    console.warn("Failed loading order varieties", e);
    render();
  });
