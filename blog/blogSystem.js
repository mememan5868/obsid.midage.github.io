

// CMSから読み込んだマークダウンの文字列
const markdownText = `# 見出し\nこれは**太字**のテストです。`;

// HTMLに変換
const htmlOutput = marked.parse(markdownText);

// Webページに表示
document.getElementById('content').innerHTML = htmlOutput;
