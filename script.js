document.getElementById('convertBtn').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var convertedText = convertToUmlauts(inputText);
  document.getElementById('output').textContent = convertedText;
});

function convertToUmlauts(text) {
  var map = {
    'ae': 'ä',
    'oe': 'ö',
    'ue': 'ü',
    'Ae': 'Ä',
    'Oe': 'Ö',
    'Ue': 'Ü',
    'ss': 'ß'
  };

  for (var plain in map) {
    text = text.replace(new RegExp(plain, 'g'), map[plain]);
  }

  return text;
}

document.getElementById('selectAllBtn').addEventListener('click', function() {
  var outputText = document.getElementById('output');
  var range = document.createRange();
  range.selectNodeContents(outputText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
});
